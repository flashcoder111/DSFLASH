# Open Source Model Blog — 开发文档

**状态：** 待技术确认后实施  
**代码仓库：** `flashcoder111/DSFLASH`  
**目标域名：** `deepseekv4flash.com`  
**关联文档：** [PRD.zh-CN.md](./PRD.zh-CN.md) · [FRONTEND-DESIGN.zh-CN.md](./FRONTEND-DESIGN.zh-CN.md)

## 1. 本文目的

本文把已确认的 PRD 和前端设计转化为本地开发、Supabase 配置、Vercel Preview 验收和上线迁移的实施方案。它不是新功能提案；如与 PRD 冲突，以 PRD 为准。

首期目标是先做一个可发布、可审核、可追溯来源的英文模型资讯站。旧 DSFLASH 产品页面不会迁入新信息架构；未确认的旧 URL 先保留在迁移清单中，不在代码中随意重定向。

## 2. 已确认的技术选择

| 层级 | 选择 | 说明 |
| --- | --- | --- |
| Web 框架 | Next.js 16、App Router、TypeScript | 使用现有仓库，公开内容以 Server Components 为主。 |
| 样式 | Tailwind CSS 4 + 少量全局 CSS 令牌 | 不新增重量级组件库。 |
| 数据与认证 | 新建、独立的 Supabase 项目 | PostgreSQL、Storage、Supabase Auth；不接旧产品数据。 |
| 托管 | 团队既有 Vercel 项目/账号 | 本地开发不触碰团队 Vercel 或 DNS；负责人部署 Preview 与 Production。 |
| 内容生成 | 可配置 OpenAI API | 仅生成草稿，发布前必须人工审核。 |
| 定时任务 | Vercel Cron + 受保护 Route Handler | 首期只读取白名单官方 RSS/公告源。 |
| 首发语言 | 英文 | 不实现 locale 路由、语言选择或翻译层。 |
| 访客账户/评论 | 不做 | 不建立评论表、评论 API 或访客登录页面。 |

## 3. 目标目录结构

实施时将逐步替换旧的产品路由，目标结构如下。`src/app/[locale]` 和旧产品路由只会在旧 URL 迁移策略明确后删除或转换为 410；不得提前把它们重定向至首页。

```text
src/
├── app/
│   ├── (public)/
│   │   ├── page.tsx                         # 首页
│   │   ├── china-models/page.tsx
│   │   ├── global-models/page.tsx
│   │   ├── github-radar/page.tsx
│   │   ├── topics/page.tsx
│   │   ├── topics/[slug]/page.tsx
│   │   ├── models/page.tsx
│   │   ├── models/[slug]/page.tsx
│   │   ├── compare/page.tsx
│   │   ├── compare/[slug]/page.tsx
│   │   ├── articles/[slug]/page.tsx
│   │   ├── about/page.tsx
│   │   ├── editorial-policy/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── contact/page.tsx
│   ├── admin/
│   │   ├── login/page.tsx
│   │   ├── page.tsx                         # 候选选题仪表盘
│   │   ├── sources/page.tsx
│   │   ├── briefs/[id]/page.tsx
│   │   ├── articles/[id]/page.tsx
│   │   └── settings/page.tsx
│   ├── api/
│   │   ├── admin/                           # 管理员写操作
│   │   ├── cron/discover/route.ts           # 每日来源发现
│   │   ├── og/articles/[slug]/route.ts      # 可选，文章 OG 图片
│   │   └── revalidate/route.ts              # 内部缓存刷新（受保护）
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── site-header.tsx
│   ├── site-footer.tsx
│   ├── article-card.tsx
│   ├── article-list-item.tsx
│   ├── featured-article.tsx
│   ├── source-list.tsx
│   ├── model-facts.tsx
│   ├── comparison-table.tsx
│   └── admin/
├── lib/
│   ├── content/
│   │   ├── queries.ts
│   │   ├── serializers.ts
│   │   ├── markdown.ts
│   │   └── related-articles.ts
│   ├── supabase/
│   │   ├── server.ts
│   │   ├── browser.ts
│   │   └── admin.ts
│   ├── auth.ts
│   ├── seo.ts
│   ├── env.ts
│   ├── rss.ts
│   ├── ai.ts
│   └── legacy-redirects.ts
└── types/
    └── database.ts

supabase/
├── migrations/
├── seed.sql
└── config.toml
```

路由分组 `(public)` 不出现在 URL 中。公开路由不得在客户端依赖管理员凭据；`admin` 区域和所有写入 API 都必须在服务端复核管理员身份。

## 4. 依赖与运行方式

现有仓库已使用 Next.js、React、TypeScript、Tailwind 与 `lucide-react`。实施时最小化新增依赖：

```text
@supabase/ssr
@supabase/supabase-js
zod
```

- `@supabase/ssr`：服务端与浏览器端安全读取登录 session。
- `@supabase/supabase-js`：数据库和 Storage 访问。
- `zod`：环境变量、管理端表单和 AI 结构化返回的运行时校验。

Markdown 正文的解析方案会在实现文章编辑器前确定：首期优先存储受控 Markdown，服务端渲染时只允许经过消毒的节点；不允许编辑器保存任意 HTML 或客户端直接注入 HTML。

本地命令保持简单：

```bash
npm install
npm run dev
npm run lint
npm run build
```

在 Supabase 项目创建后，使用 Supabase CLI 生成类型并提交 migration：

```bash
supabase db push
supabase gen types typescript --linked > src/types/database.ts
```

类型生成输出需通过正常重定向生成；开发者不得手工维护数据库类型副本。

## 5. 环境变量

提交 `.env.example`，不提交任何真实密钥。变量如下：

```text
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=
OPENAI_MODEL=
CRON_SECRET=
ADMIN_EMAILS=
```

规则：

- `SUPABASE_SERVICE_ROLE_KEY`、`OPENAI_API_KEY`、`CRON_SECRET` 仅在服务端读取，绝不可添加 `NEXT_PUBLIC_` 前缀。
- `ADMIN_EMAILS` 为逗号分隔的小写邮箱白名单；即使用户已登录，邮箱不在白名单也不能进入后台。
- Preview 使用其自身的 `NEXT_PUBLIC_SITE_URL`，并设置全站 `noindex`；Production 才使用 `https://deepseekv4flash.com`。
- Vercel 项目负责人负责将上述变量配置到 Preview/Production。开发阶段可使用本地 `.env.local`。

## 6. 数据模型与状态机

所有时间字段使用 `timestamptz`，所有 UUID 使用数据库生成的 UUID。核心 schema 在 `supabase/migrations` 管理。

### 6.1 核心表

| 表 | 关键字段 | 用途 |
| --- | --- | --- |
| `sources` | `id`, `name`, `base_url`, `source_type`, `trust_tier`, `rss_url`, `is_active` | 白名单来源与官方 RSS 配置。 |
| `source_items` | `id`, `source_id`, `canonical_url`, `title`, `published_at`, `raw_text`, `status`, `content_hash` | 每次发现或手工提交的候选原文。`canonical_url` 唯一。 |
| `content_briefs` | `id`, `working_title`, `target_keyword`, `angle`, `status`, `created_by` | 编辑确定的选题资料包。 |
| `claims` | `id`, `brief_id`, `claim_text`, `source_url`, `source_item_id`, `verification_status` | 每个可写入文章的事实及其原始来源。 |
| `articles` | `id`, `slug`, `title`, `dek`, `body_markdown`, `status`, `published_at`, `updated_at`, `seo_title`, `seo_description`, `cover_asset_id` | 公开文章与草稿。首发不设置可见个人署名，`slug` 唯一。 |
| `article_sources` | `article_id`, `source_item_id`, `display_order`, `source_role` | 文章与来源的显示及可追溯关联。 |
| `topics` | `id`, `slug`, `name`, `description`, `sort_order` | 长期专题。 |
| `models` | `id`, `slug`, `name`, `organization`, `official_url`, `license`, `verified_at` | 模型/发布方资料页。 |
| `media_assets` | `id`, `storage_path`, `alt_text`, `license_status`, `license_note`, `source_url` | 图片与图表的授权记录。 |
| `review_events` | `id`, `entity_type`, `entity_id`, `event_type`, `actor_id`, `note`, `created_at` | 生成、审核、退回、排期、发布的审计记录。 |
| `legacy_url_mappings` | `legacy_path`, `destination_path`, `response_code`, `reason`, `is_active` | 旧 URL 的 301/410 决策。 |

关联表将在首个 migration 中补齐：`article_topics`、`article_models`。文章正文和 FAQ 用受控 Markdown/JSON 字段保存，避免无结构的大块富文本不可追溯。

### 6.2 文章状态

```text
candidate → brief → claims_verified → ai_draft → in_review
                                      ↘ needs_revision
in_review → scheduled → published
in_review → rejected
```

发布守卫必须在服务端实现。`published` 前必须满足：

- 有唯一 slug、英文标题、SEO description、正文和至少一个专题或模型关联。
- 所有关键信息关联到已核验 `claims` 和原始来源。
- 所有引用媒体均有 `license_status = approved`、storage 路径和 alt text。
- 至少存在一条管理员的批准 `review_event`。
- 没有与已发布文章高度重复的标题/目标关键词/正文。

### 6.3 RLS 与角色

- 公开访客只可读取 `articles.status = published`、公开 topics/models 及其必要关联。
- Authenticated 用户默认没有写权限。
- 管理员写操作由 Route Handler 或 Server Action 使用 session + `ADMIN_EMAILS` 校验后执行。
- Service role 仅供 Cron、类型安全的受保护服务端任务使用，不得进入浏览器 bundle。
- Storage 中未批准媒体不公开；已批准媒体可通过 public bucket 或签名 URL 提供。首期优先使用公开的已批准媒体 bucket。

## 7. 内容流水线

### 7.1 每日发现

Vercel Cron 调用 `GET /api/cron/discover`：

1. 校验 `Authorization: Bearer <CRON_SECRET>`。
2. 读取激活的官方 RSS/公告源。
3. 标准化 URL，抓取标题、日期、摘要和允许保存的元数据。
4. 以规范 URL 和内容哈希去重，创建 `source_items` 候选条目。
5. 记录失败原因，单一来源失败不得导致整次任务失败。

首期不自动抓取 X、Reddit、AI 日报或竞对站。管理员可在后台提交这些 URL，但它们只作为选题或带归属的观点线索，不能直接生成改写内容。

### 7.2 资料包和 AI 草稿

管理员从候选条目创建 `content_brief`，填写目标受众、文章角度和相关专题。之后逐条建立 `claims`，每一条事实均链接到原始 URL。

AI 调用接收已核验事实、编辑角度和站点风格，返回严格结构化的草稿对象：

```text
title, dek, slug, seo_title, seo_description,
body_markdown, faq, internal_link_suggestions, source_item_ids
```

调用前后均使用 Zod 校验；AI 返回的 URL 和事实不得绕过 `claims` 校验。AI 失败时保留资料包与错误事件，不自动重试发布。

### 7.3 人工审核与发布

管理员在后台依次完成：来源核对、事实核对、重复度检查、图片授权、链接检查、预览、排期或立即发布。发布成功后：

- 写入 `published_at` 和批准事件。
- 触发 Next.js 相关路径重新验证。
- 文章自动进入 sitemap 和相关内容查询。

草稿、退回内容、后台和 API 永远不得进入 sitemap。

## 8. 公开读取与缓存

- 首页查询最近发布的文章、一个精选文章、热门专题和研究短条目；不存在数据时显示真实空状态。
- 列表页使用分页/“Load more”，不在首期一次输出所有文章。
- 文章页按 slug 查询已发布文章；非发布状态返回 404，不能通过 URL 预览。
- 公开内容使用 `revalidateTag` 或路径重新验证。发布、更新、撤回时刷新首页、文章页、关联专题/模型/比较页和 sitemap。
- 数据库查询统一放在 `src/lib/content/queries.ts`，页面组件不直接拼接 Supabase 查询。

## 9. SEO、结构化数据与旧 URL

### 9.1 页面 SEO

- 所有公开页面输出唯一 `title`、description、canonical 与 Open Graph metadata。
- 已发布文章输出 `Article` JSON-LD，包含 `headline`、`datePublished`、`dateModified`、站点 `publisher`、图片（如有）与 canonical URL；如后续启用编辑署名，才增加组织型 `author` 字段。
- `robots.ts` 禁止 `/admin/`、`/api/` 和任何草稿预览路径；Preview 环境通过全局 header/metadata 设为 `noindex, nofollow`。
- `sitemap.ts` 只读取已发布文章、公开专题、模型页、对比页和政策页。

### 9.2 旧 URL 映射

旧 URL 不是前端开发阶段凭猜测处理。上线前导入 `legacy_url_mappings`：

- `301` 仅指向主题与用户意图相同的新页面。
- 无合适对应内容的下线页返回 `410`。
- `next.config.ts` 的静态 redirects 只用于少量已确认的永久路径；大量或可变规则由 `middleware`/服务器端映射统一处理。
- 禁止把旧产品、价格、聊天或 API 页面批量重定向到首页。

## 10. 管理后台 MVP

管理员后台无需追求复杂视觉，重点是可审核性：

| 页面 | MVP 行为 |
| --- | --- |
| `/admin/login` | Supabase Auth 登录并在服务端校验管理员邮箱。 |
| `/admin` | 候选选题、待审核、已排期、最近发布的统计和列表。 |
| `/admin/sources` | 添加/停用白名单来源；手工提交 URL；查看抓取状态。 |
| `/admin/briefs/[id]` | 编辑资料包、事实清单、关联来源和 AI 草稿。 |
| `/admin/articles/[id]` | 编辑 metadata/Markdown、上传或关联媒体、预览、审核、排期和发布。 |
| `/admin/settings` | 查看环境是否配置、Cron 上次运行、站点资料；不显示任何密钥。 |

首期不实现多角色工作流、协作评论、历史版本差异可视化或公众账户。所有关键动作记录 `review_events`。

## 11. 实施里程碑

### 阶段 A：前台骨架与样式（本地可见）

1. 移除旧产品站的全局视觉和 Header/Footer。
2. 建立设计令牌、公共布局、公开页面路由与静态示例数据。
3. 完成首页、文章页、专题、模型库、比较、政策页、404 视觉与移动端。
4. 执行 lint/build，并进行桌面与手机尺寸的手动验收。

### 阶段 B：Supabase 内容读取

1. 创建独立 Supabase 项目和初始 migration。
2. 写入种子 topics/models/已核验的示例文章数据。
3. 以服务端查询替换静态数据，接入 metadata、sitemap、JSON-LD 和媒体读取。
4. 实现管理员 session 检查与只读后台外壳。

### 阶段 C：编辑与采集工作流

1. 实现 sources、source_items、briefs、claims、media 和 review events 的管理员 CRUD。
2. 实现 AI 草稿生成、结构化校验与发布守卫。
3. 实现 Cron、失败记录和去重。
4. 测试未审核、无来源、无授权媒体内容均不能发布。

### 阶段 D：迁移与上线验收

1. 导入旧 URL 审计清单和 301/410 决策。
2. 在 Vercel Preview 配置变量、`noindex`、Cron 和 Supabase。
3. 验收 sitemap、robots、canonical、JSON-LD、重定向、移动端和产品站 referrer。
4. 由团队 Vercel 负责人在低流量时段切换 Production 域名。

## 12. 测试清单

- `npm run lint` 与 `npm run build` 通过。
- 公开路由返回服务端可读的标题、正文和 canonical；草稿/后台/API 不可索引。
- 未登录或非白名单邮箱无法访问后台和写入 API。
- 手工 URL 与 RSS 条目可去重，失败源会记录且可重试。
- 无核验 claims、批准事件、slug、来源或媒体授权的文章无法发布。
- 发布/撤回会刷新首页、相关内容与 sitemap。
- Article JSON-LD 与页面展示的标题、发布日期、URL 一致。
- 每个公开页面的页脚只有一条正常文字链接到 `https://deepseekv4pro.com/`。
- 映射清单中的重点旧 URL 返回指定 301；无对应旧 URL 返回 410。

## 13. 开工前的确认门槛

下面问题必须在阶段 A 结束、进入真实 Supabase 与迁移代码前确认；其余内容可先在本地以静态数据开发：

1. **新 Supabase 项目：** 由谁创建项目、项目区域选哪里、哪位管理员邮箱写入 `ADMIN_EMAILS`？
2. **管理员登录：** 首发只允许邮件 Magic Link，还是也启用 Google 登录？
3. **站点联系信息：** 本地开发不需要公开联系邮箱。公开上线前再决定是否创建并展示独立的编辑联系别名；若暂不提供，则隐藏 Contact 入口而不是展示无效邮箱。
4. **文章署名：** 已决定首发文章页仅显示发布日期与最后核查日期，不显示个人或统一作者署名；结构化数据使用站点 publisher。后续如要显示团队署名，再单独增加。
5. **首发内容：** 是否由你提供第一批 20–30 篇的已核验选题/来源，还是先由我建立可审核的种子内容模板与少量示例数据？
6. **旧 URL 清单：** 能否由拥有 Search Console、Analytics、Vercel/日志或 Ahrefs 数据权限的团队成员导出？在拿到前，不会做 301/410 的最终配置。
7. **团队 Vercel 接手人：** 哪位成员可创建 Preview、配置环境变量并最终切换 `deepseekv4flash.com`？

这七项确认不阻塞纯本地前台开发；其中第 1、2、5 项会影响阶段 B/C 的真实集成，第 3、6、7 项只影响公开上线准备。第 4 项已按“无可见作者署名”确认。
