# 10: 视觉打磨 v1.5（P0 + 专业技能身份）

**What to build:** 在不推翻现有 neutral 单色体系的前提下，让转化动作突出、让"开发者专业身份"可见：全站唯一强调色（信任蓝）用于 CTA/链接/focus ring；Developer Mono 字体身份（IBM Plex Sans 正文 + JetBrains Mono 代码与数字，@fontsource 自托管，中文 fallback 不变）；自定义 {yk} 字标 favicon（SVG 深浅色自适应 + apple-icon）；首页 hero 加 mono 数字锚点行（20+ 年 / 6 代平台 / 千万行）；Case Study 结果段加 Stat 数字块（MDX 组件）；列表/卡片 hover 微交互（150-250ms 过渡）。明确不做：Brutalism 直角/无过渡、滚动叙事、头像、logo 墙。

**Blocked by:** None（站已成，纯视觉层）

**Status:** resolved

## Resolution

采纳并行会话的设计底座（slate+sky 品牌令牌、mono 眉题与数字、blueprint 网格 hero、编号分区、收尾 CTA），并按项目约束收尾。最终 147 项断言全绿。

关键调和：
- **字体自托管化**：并行版用 next/font/google（构建期联网，违背 ADR-0001 与删 Geist 的先例）→ 换 @fontsource-variable（IBM Plex Sans + JetBrains Mono），globals.css 定义 `--font-plex-sans`/`--font-jetbrains-mono` 变量，下游全部无感
- 自定义 {yk} favicon（SVG 深浅色自适应）+ 零依赖生成的 apple-icon.png；脚手架 favicon.ico 移除
- Stat 组件接入 MDX（case-study-view components map），四份案例双语 Outcome 段上数字块
- 断言经压缩器实测修正：oklch 被 Lightning CSS 转 hex/lab，色相字面量断言改为"令牌定义 + .text-brand 工具类生成"（minifier-proof）
- eslint ignore 掉 .agents/ 第三方技能脚本

- [x] 构建产物 CSS 含强调蓝令牌与两种品牌字体（fontsource 本地加载）
- [x] favicon 为自定义 {yk} 字标（icon.svg 深浅色自适应 + apple-icon.png）
- [x] 双语首页 hero 含 mono 数字锚点行（20+ / 12 / UTC+8 / AI-native 四格）
- [x] 双语 Case Study 详情页结果段渲染 Stat 数字块
- [x] Project Card / 列表项具备 hover 微交互
- [x] lint / typecheck / 147 项断言全绿
