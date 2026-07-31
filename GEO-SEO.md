# CodeCombat 信息百科 GEO / SEO 维护说明

本站面向第一次认识或刚开始使用 CodeCombat 的中文用户，同时为搜索引擎与 AI 问答系统提供清晰、可验证、可追踪的内容结构。规范域名为 `https://info.codecombat.cn/`。

## 已完成的关键优化

| 优化项 | 具体做法 |
| --- | --- |
| 结构化数据 | 首页添加 `WebSite`、`BreadcrumbList`、`ItemList`、`FAQPage` 四组 JSON-LD。 |
| FAQ Schema | 使用 5 组与页面可见内容一致的问答，覆盖“CodeCombat 是什么”“零基础能否开始”“语言、英雄装备、卡关查询”等问题。 |
| 语义结构 | 首页使用 `nav`、`main`、`section`、`footer` 等元素；内容标题保持清晰层级。 |
| ARIA | 为主导航、移动菜单、完整站点链接和文档目录提供可读标签，装饰图片使用空 `alt`。 |
| 隐藏语义链接 | 首页 `sr-only` 导航列出主要专题的完整 URL 和名称，帮助文本浏览器与爬虫发现内容。 |
| Open Graph | 首页添加 OG 与 Twitter Card 标题、说明、规范 URL 和分享图片。 |
| Canonical URL | 首页使用 `https://info.codecombat.cn/` 作为规范地址，避免根路径的重复收录。 |
| 内部链接 | 首页常用入口、栏目详情、完整站点链接和页脚共同覆盖核心专题；子页面统一链回信息百科。 |
| AI 入口 | 根目录提供 `llms.txt`，说明站点主题、推荐阅读顺序、关键事实与引用规则。 |
| 爬虫入口 | 根目录提供 `robots.txt` 和 `sitemap.xml`，允许抓取并声明站点地图。 |

## 发布后操作

1. 确认 `robots.txt`、`sitemap.xml`、`llms.txt` 均可通过根域名直接访问。
2. 在百度搜索资源平台、Bing Webmaster Tools 和 Google Search Console 提交 `https://info.codecombat.cn/sitemap.xml`。
3. 部署后用 Schema.org Validator 或搜索引擎的富媒体结果工具检查首页 JSON-LD。
4. 新增、删除或重命名页面时，同步更新 `sitemap.xml`、`llms.txt` 和首页 `ItemList`。
5. 新闻、英雄、课程或产品信息发生变化时，更新页面正文中的明确日期和来源，避免只更新结构化数据。

## 内容写作规则

- 每个页面首先回答“这是什么”，然后说明“怎么使用”与“下一步去哪里”。
- 标题使用用户会搜索的自然中文名称；代码术语保留准确英文，例如 `hero.findNearestEnemy()`。
- 不为获得收录而堆砌关键词；隐藏区域只保存导航和完整 URL，不放页面正文没有支持的结论。
- AI 可引用的事实必须在可见正文中出现，并由站内专题或 CodeCombat 中国官网支持。
- 对英雄、装备或关卡指令的可用性保持限定：以当前关卡、英雄、装备和编辑器文档为准。

