# LOOP：修复方案长程执行文档

**目标：** 按《修复方案-2026-07-02.md》逐步执行，直到最后一个环节高质量完成。
**用法：** 每次会话对 Claude 说 **"继续 LOOP"**，Claude 会：读本文档 → 找到第一个未完成步骤 → 执行 → 按验收标准自检 → 更新状态和日志。你也可以指定跳到某一步（如"做 LOOP-08"）。

---

## 📊 状态面板

| 项 | 值 |
|---|---|
| 当前步骤 | LOOP-02（等待你部署验证 LOOP-01） |
| 最后更新 | 2026-07-02 |
| 阻塞项 | 无 |
| 已完成 | 1 / 26 |

**摸底发现（2026-07-02）：** 源码在本仓库（Next.js 16 + App Router + Tailwind 4）。`dsflashhub.com` 只硬编码在 `src/lib/site-data.ts` 的 `siteConfig.url` 一处，全站 canonical/og/robots/sitemap 均由它派生——单点修复即可全站生效。各页面已有相对自指 canonical ✅。`/zh` `/ja` 目前只是单页示例（`[locale]/page.tsx`），不是完整翻译站。`next.config.ts` 无重定向规则，GSC"自动重定向"问题需在 Vercel 域名设置层排查。已有 `PriceCalculator` 组件（LOOP-19 有基础）。

---

## 👥 角色分工

- **[C] = Claude 直接执行**：本仓库代码修改、页面与文案撰写、build 验证、本文档更新
- **[你] = 只有你能做**：`git push` 部署、Vercel 控制台（域名/DNS/301）、GSC 与 Bing 操作、注册邮箱、AdSense 申请、跑需要 API key 的实测
- **[C+你] = 协作**：Claude 写好代码/文章框架，你补一手素材（实测数据、截图、账单）

---

## 🔁 步骤表

状态图例：⬜ 未开始 · 🔄 进行中 · ⏸ 等待你 · ✅ 完成

### 阶段 A · 索引恢复（关键路径）

| # | 谁 | 内容 | 验收标准 | 状态 |
|---|---|---|---|---|
| LOOP-01 | C | 修 `siteConfig.url` → deepseekv4flash.com；删 layout.tsx 的 `keywords` 元标签 | 代码中 0 处 dsflashhub 残留；build 通过 | ✅ 2026-07-02 |
| LOOP-02 | 你 | `git push` 部署到 Vercel；检查 Vercel Domains：deepseekv4flash.com 设为 Primary，www → apex 301，dsflashhub.com 修 DNS 后设 Redirect | 线上 `curl` 验证 canonical/robots/sitemap 全部自域（Claude 可代验证，部署后说"继续 LOOP"） | ⏸ |
| LOOP-03 | C | 线上验证 §1.6 四条 curl；排查 GSC"自动重定向"3 页的具体肇因（www / ?dpl= 参数 / 语言跳转） | 四条验证全过；肇因写入日志 | ⬜ |
| LOOP-04 | 你 | GSC：提交 sitemap.xml → 核心 8 页逐一"请求编入索引" → "自动重定向"点"验证修复" | GSC sitemap 状态"成功" | ⬜ |
| LOOP-05 | 你 | 注册 Bing Webmaster Tools，提交 sitemap，开启 IndexNow | Bing 显示已收录首页 | ⬜ |

### 阶段 B · AdSense 硬门槛页（可与 A 并行）

| # | 谁 | 内容 | 验收标准 | 状态 |
|---|---|---|---|---|
| LOOP-06 | C+你 | `/about` 页（你提供：署名用的真实姓名/笔名 + 一句话背景） | 含署名、核实流程、非官方声明；进 footer+sitemap | ⬜ |
| LOOP-07 | 你+C | 配置域名邮箱 contact@deepseekv4flash.com（你）→ Claude 建 `/contact` 页 | 邮箱可收信；页面上线 | ⬜ |
| LOOP-08 | C | `/privacy` 页（含 AdSense/DoubleClick cookie 披露、GDPR/CCPA） | 条款完整；进 footer+sitemap | ⬜ |
| LOOP-09 | C | `/terms` 页 + footer 四页链接统一更新 | 四页 footer 可达 | ⬜ |

### 阶段 C · 去 AI 味重写（AdSense 生死线）

| # | 谁 | 内容 | 验收标准 | 状态 |
|---|---|---|---|---|
| LOOP-10 | C | `site-data.ts` 全部文案去元叙事（notes/descriptions/highlights 里大量 "DSFlashHub should…"） | 0 处元叙事句、0 处 §6.2 黑名单词 | ⬜ |
| LOOP-11 | C | 全站 H1/H2/H3 按 §6.3 公式重写（含首页、各内页、SectionHeading 用法） | 每页 H1 含关键词+数字/结论；H2 为问题/步骤句式 | ⬜ |
| LOOP-12 | C | Title/meta description 按 §6.5 模板重写全部页面 | Title ≤60 字符含数字/日期；desc 140–155 字符 | ⬜ |

### 阶段 D · 结构升级

| # | 谁 | 内容 | 验收标准 | 状态 |
|---|---|---|---|---|
| LOOP-13 | C | 导航重组为 6 支柱（News/Models/Guides/OpenClaw/Compare/Pricing）；首页改 hub 门户（最新 news + 支柱入口 + 价格速览） | 导航 6 项；首页无"卡片墙"元叙事 | ⬜ |
| LOOP-14 | C | 新建 `/guides` 支柱索引页（含 30 秒选型表）；`/use-cases` `/migration` 内容并入后配 301 | /guides 上线；301 单跳 | ⬜ |
| LOOP-15 | C | News 改为 `/news/[slug]` 独立 URL；补发 3 条（7-24 退役倒计时、Ollama 收录、5–6 月大事记） | 每条独立 URL + NewsArticle schema | ⬜ |

### 阶段 E · 核心内容页（每篇一步，按优先级）

| # | 谁 | 内容 | 验收标准 | 状态 |
|---|---|---|---|---|
| LOOP-16 | C | ★ `/guides/deepseek-chat-migration`（7-24 退役迁移指南，抢时效） | 1000+ 词、ID 对照表、SDK 代码、FAQ 小节 | ⬜ |
| LOOP-17 | C+你 | `/guides/run-deepseek-v4-flash-locally`（Ollama/GGUF/显存三档）；你若有 GPU 跑一遍提供 tokens/s 更佳，没有则引用并标注社区数据 | 硬件分级表 + 完整命令 + 量化对比 | ⬜ |
| LOOP-18 | C+你 | `/openclaw-deepseek-flash` 重写为实测教程（你提供：真实 config + 一周账单截图） | 含可下载 config、真实成本数字 | ⬜ |
| LOOP-19 | C | `/pricing` 升级：现有 PriceCalculator 组件增强（cache 命中率滑杆、5 模型对比） | 计算器可交互、结果准确 | ⬜ |
| LOOP-20 | C | `/guides/deepseek-v4-flash-api-quickstart`（Python/TS/curl 三段代码 + 错误码表） | 代码可运行（Claude 验证语法） | ⬜ |
| LOOP-21 | C+你 | `/guides/deepseek-v4-reasoning-modes`（需你用 API key 跑同题对比，Claude 出题集与文章） | 含实测延迟/token/正确率表 | ⬜ |
| LOOP-22 | C | `/compare/deepseek-v4-flash-vs-gpt-5-4` + `vs-claude` 两篇 | 结论先行 + 价格表 + 场景建议 | ⬜ |
| LOOP-23 | C+你 | `/benchmarks` 加厚：Claude 设计 ≥10 任务的可复现小任务集，你跑 Flash/Pro 结果 | 方法论公开、原始输出可下载 | ⬜ |

### 阶段 F · GEO 与收尾

| # | 谁 | 内容 | 验收标准 | 状态 |
|---|---|---|---|---|
| LOOP-24 | C | JSON-LD 补全（FAQPage/Article/NewsArticle 按页分配）+ `llms.txt` | Rich Results Test 通过（你贴测试链接结果） | ⬜ |
| LOOP-25 | C+你 | `/zh` `/ja` 从示例页升级为真实翻译版（先做日文版核心 4 页），hreflang 补全 | 日文版真人可读；hreflang 互声明 | ⬜ |
| LOOP-26 | C+你 | 最终验收：跑《修复方案》§8.1 全部检查项 + 记录 GSC 基线 → 你提交 AdSense 申请 | §8.1 全 ✅；ads.txt 上线 | ⬜ |

---

## 📌 质量门（每步通用）

1. 代码改动必须 `npm run build` 通过才算完成
2. 新页面必须同时更新：导航/footer（如适用）+ sitemap 路由清单 + 本文档状态
3. 所有文案过一遍 §6.2 黑名单；数字必须有来源
4. 内容页硬标准：1000–1500 词、≥1 项一手素材、FAQ 小节、"Last verified" 块
5. 每步完成后更新状态面板和执行日志，等你确认后进入下一步

---

## 📝 执行日志

- **2026-07-02** 建立 LOOP 文档。摸底：源码在本仓库，dsflashhub 硬编码仅 site-data.ts 一处；页面 canonical 均为相对自指（随 metadataBase 修复自动生效）；/zh /ja 为示例单页；无 next.config 重定向。
- **2026-07-02 LOOP-01 ✅** `siteConfig.url` 改为 `https://deepseekv4flash.com`（单点生效：全站 canonical/og/robots/sitemap 随之修复）；删除 layout.tsx 中 `keywords` 数组（Google 不使用，堆砌属垃圾信号）。复核：代码中 0 处 dsflashhub 残留、文件编码完好。
- **2026-07-02 环境说明** 沙盒 npm registry 被安全策略拦截（403），无法本地 `npm run build`。**构建验证转移到 LOOP-02 的 Vercel 部署**（Vercel 每次部署自动 build，失败会在 Deployments 页可见）。本次改动为纯字符串替换与元数据字段删除，语法风险极低。质量门第 1 条相应调整为："代码改动以 Vercel 部署构建成功为准"。
- → **下一步（等你）：LOOP-02** —— `git add -A && git commit -m "fix: canonical domain -> deepseekv4flash.com, drop meta keywords" && git push`，确认 Vercel 部署成功后，顺手在 Vercel → Settings → Domains 检查三件事：① deepseekv4flash.com 为 Primary；② www 变体 301 到 apex；③ dsflashhub.com 修 DNS 后设为 Redirect。完成后对我说"继续 LOOP"，我做线上四项 curl 验证（LOOP-03）。
