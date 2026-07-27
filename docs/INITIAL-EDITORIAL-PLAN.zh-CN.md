# Open Source Model Blog — 首发选题与来源清单

**状态：** 待内容负责人确认  
**目的：** 确认真实选题与可核验来源，再开始用这些内容填充本地前台。  
**原则：** 每篇文章独立写作。官方公告、文档、代码库和论文是事实依据；媒体报道只用于报道型文章，不得伪造为官方说法；社媒只作为后续观点线索。

## 1. 首发内容组合

首期不建议一次性承诺 20–30 篇未经核验的文章。先确认下列 **10 个可填充首页、专题、模型库与对比页的真实内容包**，完成前台与内容工作流验证；随后按同一标准每周增加 5–8 篇。

| 优先级 | 建议英文题目/页面 | 分类 | 来源状态 | 主要原始来源 | 编辑边界 |
| --- | --- | --- | --- | --- | --- |
| P0 | `Kimi K3: What Moonshot Has Announced So Far` | 模型发布 / Kimi 模型页 | 可写 | [Kimi K3 Tech Blog](https://www.kimi.com/blog/kimi-k3)、[Kimi K3 API docs](https://platform.kimi.ai/docs/guide/kimi-k3-quickstart) | 只写官方已公布的架构、上下文、可用性、定价和发布时间；benchmark 需标明来自发布方。 |
| P0 | `Qwen3.5: Native Multimodal Agents, Explained` | 模型发布 / Qwen 模型页 | 可写 | [Qwen3.5 官方发布](https://www.alibabacloud.com/blog/qwen3-5-towards-native-multimodal-agents_602894)、[官方 GitHub](https://github.com/QwenLM/Qwen3.5) | 把参数、激活参数、开放权重、模型尺寸与发布时间分别核对，不将发布方基准写成独立测评。 |
| P0 | `Qwen-AgentWorld and the Rise of Language World Models` | World Models 专题 | 可写 | [Qwen-AgentWorld 官方代码库](https://github.com/QwenLM/Qwen-AgentWorld)、[技术报告](https://arxiv.org/abs/2606.24597) | 解释“language world model”概念、训练目标和适用范围；不要把研究结果外推为通用能力事实。 |
| P0 | `What Is a Looped Transformer? Loopie and LoopFormer in Context` | Loops 专题 | 可写，但须标注论文状态 | [Loopie 论文](https://arxiv.org/abs/2607.16051)、[LoopFormer 项目页](https://loopformer.github.io/) | 区分预印本、会议论文和已发布产品；不把论文性能直接当作商业模型表现。 |
| P0 | `GPT-5.6: OpenAI’s July Release, Availability and Product Changes` | 模型更新 / OpenAI | 可写 | [OpenAI GPT-5.6 发布](https://openai.com/index/gpt-5-6/)、[模型 Release Notes](https://help.openai.com/en/articles/9624314-model-release-notes) | 以公开可用性、产品范围和官方描述为主；避免“最佳”“领先”等未经独立验证的判断。 |
| P1 | `What Anthropic’s Economic Index Connector Can—and Cannot—Show` | AI Agents / 行业动态 | 可写 | [Anthropic 官方公告](https://www.anthropic.com/news/anthropic-economic-index-connector) | 重点解释数据集性质与局限，不把 Claude 使用数据等同于整体劳动力市场。 |
| P1 | `DeepSeek’s Reported Four-Hour Investor Meeting: What Is Verifiable` | DeepSeek / 报道解读 | 谨慎可写 | [Reuters 报道转载](https://kelofm.com/2026/07/23/founder-says-deepseek-prioritises-agi-over-profit-likely-to-keep-top-models-open-source-yicai-reports/)、[Bloomberg Law 报道](https://news.bloomberglaw.com/capital-markets/deepseek-champions-chinas-bid-to-flood-the-world-with-cheap-ai) | 标题与正文必须使用 `reported` / `according to reporting`；不得将流传纪要、融资金额或引语当作官方证实。 |
| P1 | `Baidu’s Reported 2026 OKRs: Signals for AI Commercialization` | 行业动态 / Baidu | 谨慎可写 | [36Kr 报道](https://36kr.com/p/3677431731774085) | 仅作为媒体分析文章；除非取得百度一手文件或公告，不称为“Baidu announced”。 |
| P1 | `Open Models in July 2026: Kimi K3, Qwen3.5 and Deployment Questions` | 模型对比 / 聚合 | 在前三篇核验后可写 | 仅引用本站已完成核验的 Kimi、Qwen 原始来源 | 对比维度限于公开许可、尺寸、上下文、部署和官方可用性；不编造统一 benchmark 排名。 |
| P2 | `World Models vs Agent Models: A Practical Vocabulary Guide` | 专题解释 | 在 AgentWorld/论文来源核验后可写 | Qwen-AgentWorld、相关论文与官方技术文档 | 明确这是术语解释，不暗示行业存在统一定义。 |

## 2. 首发页面覆盖

这 10 个内容包可同时形成以下真实页面骨架：

- **首页：** Kimi K3 或 Qwen3.5 作为 Featured Article；其余内容进入最新文章卡片与 research notes。
- **Topics：** World Models、AI Agents、Loops、AI Coding、Long Context 先建立目录；只有拥有已发布文章的专题才展示文章数。
- **Model Library：** Kimi、Qwen、DeepSeek、OpenAI、Anthropic 先创建来源明确的基础资料卡；Baidu 仅在确认具体模型或项目后进入模型库。
- **Comparisons：** 首期先做解释型比较框架或 Kimi K3 vs Qwen3.5 的公开规格比较，不在没有同口径评测时下结论。

## 3. 写作与审核规则

1. 每一条参数、可用性、定价、发布日期或 benchmark 说法都要在 `claims` 中记录原始 URL 与核查时间。
2. 对新闻报道使用“报道指出”“据 X 报道”，不把二手报道变成公司立场。
3. 无法访问、无日期、无作者或来源互相矛盾的材料不进入首发事实清单。
4. 图片使用官方明确授权素材或网站自制规格卡/时间线；不使用新闻站、X、Reddit 或竞对配图。
5. AI 可以依据资料包形成英文草稿，但不能写入资料包之外的具体事实。

## 4. 待确认事项

- 是否接受上表作为本地开发时的第一批真实内容来源与示例文章方向？
- DeepSeek 四小时会议、百度 OKR 是否接受以“报道解读”形式发表，且在找到一手来源前不作为站点核心事实页？
- 首页首个 Featured Article 在 Kimi K3 与 Qwen3.5 中选择哪一个？
