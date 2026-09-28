# 03: Case Study 集合

**What to build:** Case Study（案例研究）模板与页面：详情页呈现四段结构（背景 → 我的角色 → 技术决策 → 结果），路由模式同 Blog（英文 `/case-studies`、中文 `/zh/case-studies`）。挂载两篇占位案例：12 年企业平台（匿名）、phonic-learn 3 天复盘，占位文案清晰标注待填。

**Blocked by:** 01（站点骨架与双语路由打通）

**Status:** resolved

## Resolution

红→绿完成：验证断言扩至 69 项（全过），lint/typecheck/build 干净。/code-review 两轴通过，采纳修复：draft 状态数据驱动（frontmatter `draft: true` → 详情页醒目横幅 + 列表草稿章，工单 07 填真文翻标志即可）；断言从内容目录动态推导（标题/slug/draft/四段结构逐篇×双语覆盖，不再锚定占位标题字面量）。

决议与备注：
- 兑现 02 的移交：抽 `src/lib/route-helpers.ts`（staticParamsFor/metadataFor），blog 与 case study 的 `[slug]` 页共用；**default export 页组件仍保留同形薄文件**（Next 文件约定所迫，进一步抽工厂收益递减，停手）
- 列表/详情组件与 blog 组件存在 ~25 行同形重复——**第三个内容集合出现时再抽共享形状**（避免过早抽象）
- 范围蔓延（保留）：构建期四段结构校验、导航"案例研究"链接、postedOnLabel 复用
- "Case Studies" 与 "案例研究" 均按 CONTEXT.md 术语，未与 Blog Post / Project Card 混用

- [x] 双语言的 Case Study 列表与详情路由存在
- [x] 详情页完整呈现四段叙事结构
- [x] 两篇占位案例挂载且占位状态醒目（draft 横幅 + 草稿章）
- [x] 构建后断言覆盖路由与结构存在
