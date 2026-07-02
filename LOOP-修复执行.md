# LOOP：修复方案长程执行文档

**目标：** 按《修复方案-2026-07-02.md》逐步执行，直到最后一个环节高质量完成。
**用法：** 每次会话对 Claude 说 **"继续 LOOP"**，Claude 会：读本文档 → 找到第一个未完成步骤 → 执行 → 按验收标准自检 → 更新状态和日志。你也可以指定跳到某一步（如"做 LOOP-18"）。

---

## 📊 状态面板

| 项 | 值 |
|---|---|
| 当前步骤 | **LOOP-02（等你：git push 部署 + Vercel 域名检查）** |
| 最后更新 | 2026-07-02（第二轮批量执行完成） |
| 阻塞项 | 所有代码/内容项已完成，等待部署后才能做线上验证类步骤 |
| 已完成 | 16 / 26（Claude 可独立完成的已全部完成） |

**摸底发现：** 源码在本仓库（Next.js 16 + App Router + Tailwind 4）。`dsflashhub.com` 只硬编码在 `src/lib/site-data.ts` 的 `siteConfig.url` 一处，全站 canonical/og/robots/sitemap 均由它派生——单点修复全站生效。`/zh` `/ja` 目前是单页示例，不是完整翻译站。

**环境说明：** 沙盒 npm registry 被拦截（403），无法本地 build；且 Linux 挂载对 Windows 文件的同步存在滞后（会读到截断的文件内容——已验证 Windows 侧文件完整，此为验证侧假象）。**构建验证以 Vercel 部署成功为准**；部署后若 build 报错，把错误贴给 Claude 即可快速修复。

---

## 👥 角色分工

- **[C] = Claude 直接执行**：本仓库代码修改、页面与文案撰写、本文档更新
- **[你] = 只有你能做**：`git push` 部署、Vercel 控制台（域名/DNS/301）、GSC 与 Bing 操作、注册邮箱、AdSense 申请、跑需要 API key/GPU 的实测
- **[C+你] = 协作**：Claude 写好代码/文章框架，你补一手素材（实测数据、截图、账单）

---

## 🔁 步骤表

状态图例：⬜ 未开始 · 🔄 进行中 · ⏸ 等待你 · ✅ 完成

### 阶段 A · 索引恢复（关键路径）

| # | 谁 | 内容 | 验收标准 | 状态 |
|---|---|---|---|---|
| LOOP-01 | C | 修 `siteConfig.url` → deepseekv4flash.com；删 `keywords` 元标签 | 0 处 dsflashhub 残留 | ✅ 07-02 |
| LOOP-02 | 你 | **→ 现在轮到你**：`git add -A && git commit && git push`；确认 Vercel 部署成功（含 build）；Vercel Domains：主域 Primary、www→apex 301、dsflashhub.com 修 DNS 后设 Redirect | Vercel 部署绿色；域名配置截图或口头确认 | ⏸ |
| LOOP-03 | C | 部署后线上验证：canonical/robots/sitemap/llms.txt 四项 curl；排查 GSC"自动重定向"3 页肇因 | 四项全过；肇因写入日志 | ⬜（依赖 02） |
| LOOP-04 | 你 | GSC：提交 sitemap → 核心页请求索引 → "自动重定向"点验证修复 | GSC sitemap 状态"成功" | ⬜ |
| LOOP-05 | 你 | Bing Webmaster Tools + IndexNow | Bing 收录首页 | ⬜ |

### 阶段 B · AdSense 硬门槛页

| # | 谁 | 内容 | 验收标准 | 状态 |
|---|---|---|---|---|
| LOOP-06 | C | `/about` 页 | 匿名运营者表述（无个人信息）、核实流程、非官方声明、footer+sitemap | ✅ 07-02 |
| LOOP-07 | 你+C | `/contact` 页 ✅（统一用 hello@deepseekv4flash.com）；**你还需**：开通该邮箱（Cloudflare Email Routing 或域名商转发均可） | 邮箱可收信 | 🔄 页面✅/邮箱⏸ |
| LOOP-08 | C | `/privacy`（含 AdSense/DoubleClick cookie 披露、GDPR/CCPA、选择退出链接） | 条款完整 | ✅ 07-02 |
| LOOP-09 | C | `/terms` + footer 更新（法律四页 + News/Guides/FAQ 链接 + 完整商标免责声明） | footer 可达 | ✅ 07-02 |

### 阶段 C · 去 AI 味重写

| # | 谁 | 内容 | 验收标准 | 状态 |
|---|---|---|---|---|
| LOOP-10 | C | `site-data.ts` 全部文案去元叙事重写（notes/highlights/matrix/adapter points/locale 文案） | 全库扫描 0 元叙事、0 黑名单词 | ✅ 07-02 |
| LOOP-11 | C | 全站 H1/H2/H3 重写：首页、Flash、pricing、compare、models、openclaw×2、flash-vs-pro、api-routing、benchmarks、news、faq | H1 = 关键词+数字/结论；H2 = 问题/步骤句式 | ✅ 07-02 |
| LOOP-12 | C | Title/meta description 全站重写；meta keywords 已删（LOOP-01） | Title ≤60 字符含数字/日期 | ✅ 07-02 |

### 阶段 D · 结构升级

| # | 谁 | 内容 | 验收标准 | 状态 |
|---|---|---|---|---|
| LOOP-13 | C | 导航 6 支柱（News/Models/Guides/OpenClaw/Compare/Pricing）；首页 hero/各区块重写为用户导向 | 导航 6 项 | ✅ 07-02 |
| LOOP-14 | C | `/guides` 索引页（含 30 秒选型表）；`/use-cases`→/guides、`/migration`→迁移指南 301（next.config） | 301 单跳 | ✅ 07-02 |
| LOOP-15 | C | News 改 `/news/[slug]` 独立 URL + NewsArticle schema；重写旧 4 条、删除元叙事社论 1 条、新发 3 条（7-24 倒计时/Ollama 收录/5-6 月大事记） | 6 条独立 URL | ✅ 07-02 |

### 阶段 E · 核心内容页

| # | 谁 | 内容 | 验收标准 | 状态 |
|---|---|---|---|---|
| LOOP-16 | C | ★ `/guides/deepseek-chat-migration`（7-24 迁移，Article+FAQPage schema、ID 对照表、3 语言代码、3 失败模式） | 上线并入 sitemap | ✅ 07-02 |
| LOOP-17 | C+你 | `/guides/run-deepseek-v4-flash-locally`（3 档硬件表、Ollama 命令、何时别本地跑）；社区数据已如实标注。**升级项（可选）**：你有 GPU 的话跑一遍，把 tokens/s 换成一手数据 | 上线；数据来源标注诚实 | ✅ 07-02（一手数据可后补） |
| LOOP-18 | C+你 | `/openclaw` `/openclaw-deepseek-flash` 已重写为用户导向（含 ollama 一行命令）。**待你**：提供真实 OpenClaw config + 一周账单截图，Claude 升级为完整实测教程 | 含可下载 config、真实成本 | 🔄 重写✅/实测素材⏸ |
| LOOP-19 | C | `/pricing` 计算器：加入 Claude Sonnet；模型/输入/输出/cache 命中已可交互 | 计算准确 | ✅ 07-02 |
| LOOP-20 | C | `/guides/deepseek-v4-flash-api-quickstart`（Python/TS/curl、cache 命中工程学、错误码表） | 上线 | ✅ 07-02 |
| LOOP-21 | C+你 | `/guides/deepseek-v4-reasoning-modes` —— **需你的 API key 跑同题对比**，Claude 出题集与文章框架 | 实测延迟/token/正确率表 | ⏸ 等实测 |
| LOOP-22 | C | `/compare/deepseek-v4-flash-vs-gpt-5-4` + `vs-claude` 两篇（结论先行+价格表+FAQ schema）；/compare 索引加深链 | 上线 | ✅ 07-02 |
| LOOP-23 | C+你 | `/benchmarks` 已改为"如何测你自己的工作负载"；**下一步**：Claude 设计 ≥10 任务可复现任务集 → 你跑 Flash/Pro → 发布一手数据 | 方法论公开 | 🔄 重写✅/任务集⬜ |

### 阶段 F · GEO 与收尾

| # | 谁 | 内容 | 验收标准 | 状态 |
|---|---|---|---|---|
| LOOP-24 | C | JSON-LD：FAQPage（faq+全部 guides/compare）、NewsArticle（news/[slug]）、Article（guides/compare）、Organization/WebSite（layout 原有）；`public/llms.txt` | 部署后你跑 Rich Results Test 贴结果 | ✅ 07-02（线上验证待部署） |
| LOOP-25 | C+你 | `/zh` `/ja` 从示例页升级为真实翻译版（先日文核心 4 页）+ hreflang 互声明 | 日文版真人可读 | ⬜ |
| LOOP-26 | C+你 | 最终验收：《修复方案》§8.1 全项 + GSC 基线记录 → ads.txt → AdSense 申请 | §8.1 全 ✅ | ⬜ |

---

## 📌 质量门（每步通用）

1. 代码改动以 **Vercel 部署构建成功** 为准（沙盒无法本地 build）
2. 新页面必须同时更新：导航/footer（如适用）+ sitemap + 本文档状态
3. 文案过《修复方案》§6.2 黑名单；数字必须有来源与核实日期
4. 内容页硬标准：≥1 项一手/可验证素材、FAQ 小节、"Last verified" 块；未实测的数据必须如实标注"社区来源"
5. 每步完成后更新状态面板和执行日志

---

## 📝 执行日志

- **07-02 建档** 摸底：dsflashhub 硬编码仅 site-data.ts 一处；页面 canonical 相对自指（随 metadataBase 自动修复）；无 next.config 重定向。
- **07-02 LOOP-01 ✅** siteConfig.url 单点修复 + 删 meta keywords。
- **07-02 环境** npm 403 无法本地 build → 构建验证转移到 Vercel；另发现 Linux 挂载读 Windows 文件有同步滞后（会见到截断内容），已用 Read 工具核实 Windows 侧文件完整，验证时注意。
- **07-02 第二轮批量执行 ✅**（LOOP-06~16、19、20、22 全部完成；17/18/23 完成 Claude 可做部分）：
  - **新增 13 个文件**：about/contact/privacy/terms 四页；guides 索引 + 迁移指南 + 本地部署 + API quickstart 三篇长文；compare 两篇对比长文；news/[slug] 动态页；public/llms.txt
  - **重写 6 个文件**：site-data.ts（全部文案去元叙事 + news 数据结构化 slug/body + 新增 guidePages/legalPages 导出 + lastVerified 更新）；SiteFrame（6 支柱导航 + 三栏 footer 含法律页与完整商标声明）；faq（9 问全部对准 GSC 真实查询 + FAQPage schema）；news 列表页；sitemap.ts（全部新路由）；next.config.ts（2 条 301）
  - **精修 9 个页面**的 H1/Title/desc/SectionHeading：首页、deepseek-v4-flash、pricing、compare、models、openclaw、openclaw-deepseek-flash、flash-vs-pro、api-routing、benchmarks
  - **自检通过**：全库扫描 0 处 dsflashhub 残留、0 处元叙事句（"DSFlashHub should / site should / lead story"等）、0 处 AI 黑名单词（unlock/delve/in conclusion 等）
  - 注：/use-cases 与 /migration 旧页面文件保留但已被 301 覆盖（Next.js redirects 优先于文件路由），部署确认后可删
- → **下一步（等你）：LOOP-02** —— push 部署 + Vercel Domains 三项检查（详见步骤表），完成后说"继续 LOOP"，Claude 做 LOOP-03 线上验证。若 Vercel build 报错，把日志贴给 Claude。
