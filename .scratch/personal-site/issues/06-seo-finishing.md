# 06: SEO 与站点收尾

**What to build:** 按语言生成的页面元数据：og:title / og:description / OG 图（占位）、页面 title 与 description；sitemap.xml 覆盖全部双语言路由；robots.txt；favicon；404 页（双语）。

**Blocked by:** 04（首页组装 + Project Card）、05（About 页 + Contact 页 + 联系机制）

**Status:** resolved

## Resolution

红→绿完成：133 项断言全过，lint/typecheck/build 干净。/code-review 抓到三处硬伤并已修复：(1) 详情页 og:title 被布局级 openGraph 覆盖成站名 → metadataFor 逐页注入 openGraph，断言升级为 meta 标签级严格匹配；(2) og:title 抽查因 blogMeta 缺 slug 从未真正执行（假绿）→ 补 slug；(3) sitemap 断言锚定占位 slug → 改为内容目录动态推导。OG 占位图以零依赖脚本生成（public/og.png，1200×630，工单 09 换品牌图）。

决议与备注：
- **404 双语言在多根布局 + 静态导出架构下不可达**（路由组 not-found 不会导出，根级 not-found 需根布局）：已删除死代码文件与字典键，生产 404 由托管平台回退提供。若上线后需要品牌 404，需重估架构或在托管层注入——记为已知限制
- 布局 openGraph 两份近似重复（en/zh 各一）——可接受（语言差异即内容）

- [x] 每页按语言生成正确的 title / description / OG 标签（含逐页 og:title 元标签级断言）
- [x] sitemap 覆盖全部双语言路由，robots 允许收录
- [x] favicon 生效；404 为托管平台回退（双语 404 记为已知限制，见决议）
- [x] 构建后断言抽查 OG 标签按语言正确
- [x] OG 图（占位）：public/og.png 零依赖生成，og:image 已接线
