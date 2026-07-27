# Open Source Model Blog — 产品需求文档（中文版）

**状态：** 已确认  
**代码仓库：** `flashcoder111/DSFLASH`  
**博客域名：** `deepseekv4flash.com`  
**产品导向地址：** `https://deepseekv4pro.com/`

## 1. 产品目标

将 `deepseekv4flash.com` 重构为一个英文的开源 AI 模型资讯博客，持续覆盖模型发布、模型资料、热门方向和模型对比。

网站通过有用、可追溯来源的内容获取自然搜索流量。全站唯一的长期产品导流入口，是页脚中指向独立产品站的一个品牌链接。博客不是产品控制台、聊天工具、定价页，也不是批量堆砌关键词的页面集合。

### MVP 成功标准

- 访客可以浏览最新文章、热门专题、模型库和模型对比内容。
- 每篇已发布文章都具备 canonical URL、SEO metadata、原始来源、sitemap 条目和 Article 结构化数据。
- 编辑可以提交来源链接、建立事实资料包、生成草稿、人工审核并发布文章。
- 草稿、管理后台与 API 不被搜索引擎收录。
- 每个公开页面的页脚均包含同一个、可见的品牌链接，指向 `https://deepseekv4pro.com/`。

## 2. 范围

### 本期包含

- 基于 Next.js 服务端渲染的简洁、响应式资讯站前台。
- 导航栏：**Open Source Model Blog / China Models / Global Models / GitHub Radar / Topics / Comparisons**。
- 文章页、专题聚合页、模型聚合页、模型对比页、政策页、sitemap、robots、canonical URL 和 Article JSON-LD。
- Supabase PostgreSQL、Storage 和 Supabase Auth，用于内容数据、媒体和管理员认证。
- 内容运营工作流：来源入库、结构化资料包、事实来源、AI 草稿、人工审核、排期和发布记录。
- 通过受保护的 Vercel Cron 路由，每日采集白名单官方来源与 RSS。
- 上线前梳理并处理旧站 URL。

### 本期明确不做

- 中文、日文或其他多语言版本。
- 公开评论、访客账号、聊天、付费订阅、API Key、站内产品定价工具，以及自建 benchmark 系统。
- 没有人工审核的自动发布。
- 在没有合规登录态与接入方案前，自动采集 X 或 Reddit。
- 改写、转载或重新发布竞对文章、社区长文。

## 3. 公开站体验

### 核心路由

| 路由 | 作用 |
| --- | --- |
| `/` | 最新内容、热门专题入口和“来源优先”的编辑定位。 |
| `/china-models` | 中国及大中华区核心模型入口，例如 DeepSeek、Qwen、Kimi、GLM、MiniMax、Hunyuan。 |
| `/global-models` | 全球核心模型入口，例如 Google Gemini、Anthropic Claude、OpenAI GPT；后续再按内容成熟度增加其他模型。 |
| `/github-radar` | 经人工筛选的开源模型、推理和 Agent 基础设施项目雷达；不是自动转载的 GitHub Trending。 |
| `/topics`、`/topics/[slug]` | World Models、AI Agents、Loops、AI Coding、Long Context 等长期专题中心。 |
| `/models`、`/models/[slug]` | 全部核心模型的总目录与资料页；开权重属性会在具体模型页清晰标注。 |
| `/compare`、`/compare/[slug]` | 资料来源清晰的模型对比与比较框架。 |
| `/articles/[slug]` | 已发布文章、来源、相关推荐、metadata 和 Article JSON-LD。 |
| `/about`、`/editorial-policy`、`/privacy`、`/terms`、`/contact` | 关于、编辑与来源政策、隐私、条款和联系页面。 |

### 页脚产品链接规则

页脚只放置一个正常、可见的产品链接，文案为 **DeepSeek V4 API**，目标地址为 `https://deepseekv4pro.com/`。

不得使用隐藏文字、关键词堆砌锚文本、重复产品推广模块或所有文章都固定插入的正文 CTA。

## 4. 内容生产与审核

### 来源优先级

1. 模型公司官方公告、博客、API 文档、模型卡、GitHub Releases 和论文。
2. Arena、Artificial Analysis、LiveBench、SWE-bench 等公开第三方评测来源。
3. X、Reddit、Hacker News 和 AI 日报：只能作为已署名的观点或选题信号。
4. 竞对页面：只能发现选题与关键词缺口，不能作为文章改写来源。

### 编辑工作流

```text
官方/RSS 自动发现，或人工提交 URL
→ 候选选题队列
→ 结构化资料包
→ 每条事实关联原始 URL
→ AI 生成草稿
→ 编辑检查事实、来源、重复度、图片授权和链接
→ 排期或手动发布
→ 更新 Sitemap 与相关文章
```

所有文章都必须由人工审核后发布。没有原始来源支撑的说法，不能写成事实。社交媒体观点必须保留作者和原帖归属，并和报道事实清晰区分。文章图片只能使用授权明确的官方素材，或站内制作的规格图、时间线、对比图等原创图表。

### 首批内容方向

首批 20–30 篇内容以当前热点为主：模型发布与更新、World Models、Loops、AI Agents、AI Coding、长上下文发展和对比解释文章。

旧 DSFLASH 的新闻或指南只有在编辑确认其事实、日期、来源链接和用户需求仍然有效时才可复用；不符合时效的内容不迁移。

## 5. 数据与后台要求

新的 Supabase 项目与旧产品数据分离，至少包括以下实体：

- `sources`、`source_items`：来源白名单、提交 URL、出处、可信等级和候选状态。
- `content_briefs`、`claims`：选题资料包，以及每条事实及其原始来源 URL。
- `articles`、`article_sources`、`topics`、`models`：公开内容与分类体系。
- `media_assets`：Storage 文件引用、alt text、原始 URL、授权状态和授权备注。
- `review_events`：生成、审核、退回、排期与发布操作记录。
- `legacy_url_mappings`：旧路径、新路径（如有）、HTTP 状态和迁移理由。

管理员通过 Supabase Auth 登录。所有后台写入 API 必须在服务端验证管理员权限。访客不登录，评论功能关闭。

### 所需环境变量

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
OPENAI_API_KEY
OPENAI_MODEL
CRON_SECRET
ADMIN_EMAILS
```

## 6. 旧站迁移与上线

1. 从 Search Console、Analytics、服务器日志和外链数据导出旧 DSFLASH URL 清单。
2. 最近 90 天获得过自然搜索展示/点击，或拥有外部引用域的 URL，视为重点 URL。
3. 仅当新站存在主题和用户意图相同的新文章、模型页或专题页时才做 301；没有对应内容的已退役产品页和指南页返回 410。不得把无关旧页全部重定向到首页。
4. 先在 Vercel Preview 环境部署，并设置 `noindex`；验收跳转、410、canonical、sitemap、robots、结构化数据和页脚产品链接。
5. Vercel 项目负责人在验收通过后执行正式部署，并将 `deepseekv4flash.com` 切换到新版。

## 7. 上线验收清单

- [ ] 站点只提供英文；旧多语言 URL 已明确迁移或下线。
- [ ] 所有公开页面均为服务端渲染，并适配移动端。
- [ ] 每篇公开文章都有标题、Description、canonical URL、来源和 Article JSON-LD。
- [ ] 草稿、后台与 API 不会被搜索引擎收录。
- [ ] RSS 采集路由受 `CRON_SECRET` 保护；手工提交来源必须由管理员登录后操作。
- [ ] 草稿没有来源、正文、Slug、审核通过记录或已验证的媒体授权时，无法发布。
- [ ] 页脚只存在一个指向 `https://deepseekv4pro.com/` 的品牌产品链接。
- [ ] 所有重点旧 URL 在上线前已明确标记为 301 或 410。
- [ ] Supabase migration、环境变量和 Vercel Preview 已验证后，才允许正式上线。

## 8. 职责与交接

- **内容负责人：** 决定选题、核验事实、批准草稿和发布内容。
- **开发负责人：** 维护 Next.js 应用、Supabase schema、采集任务和 SEO 实现。
- **Vercel 项目负责人：** 配置部署环境变量、执行 Preview/Production 部署及域名切换。未经该负责人的确认，不从代码仓库直接改动团队 Vercel 或 DNS 配置。
