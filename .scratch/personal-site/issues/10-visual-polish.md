# 10: 视觉打磨 v1.5（P0 + 专业技能身份）

**What to build:** 在不推翻现有 neutral 单色体系的前提下，让转化动作突出、让"开发者专业身份"可见：全站唯一强调色（信任蓝）用于 CTA/链接/focus ring；Developer Mono 字体身份（IBM Plex Sans 正文 + JetBrains Mono 代码与数字，@fontsource 自托管，中文 fallback 不变）；自定义 {yk} 字标 favicon（SVG 深浅色自适应 + apple-icon）；首页 hero 加 mono 数字锚点行（20+ 年 / 6 代平台 / 千万行）；Case Study 结果段加 Stat 数字块（MDX 组件）；列表/卡片 hover 微交互（150-250ms 过渡）。明确不做：Brutalism 直角/无过渡、滚动叙事、头像、logo 墙。

**Blocked by:** None（站已成，纯视觉层）

**Status:** claimed

- [ ] 构建产物 CSS 含强调蓝令牌与两种品牌字体（fontsource 本地加载）
- [ ] favicon 为自定义 {yk} 字标（icon.svg 深浅色自适应 + apple-icon.png），不再是脚手架默认
- [ ] 双语首页 hero 含 mono 数字锚点行
- [ ] 双语 Case Study 详情页结果段渲染 Stat 数字块
- [ ] Project Card / 列表项具备 hover 微交互（过渡不引起布局跳动）
- [ ] lint / typecheck / 全部断言绿
