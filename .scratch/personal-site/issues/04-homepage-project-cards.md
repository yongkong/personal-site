# 04: 首页组装 + Project Card

**What to build:** 首页成为转化入口（服务 Primary Audience 与 Conversion Action）：定位语（几秒内看清"20 年全栈 + AI 原生工作流"）、精选 Case Study 入口、最新 Blog Post 列表、Project Card 网格（名称、一句话、技术栈、GitHub 直链；结构化配置数据：phonic-learn、programmer-nav、wk-crm-skills 起步，新增卡片不改代码）、指向 Contact 的醒目 CTA。双语完整。

**Blocked by:** 02（Blog Post 集合）、03（Case Study 集合）

**Status:** resolved

## Resolution

红→绿完成：113 项断言全过，lint/typecheck/build 干净。shadcn/ui 初始化落地（Base UI 组件库，components.json + button/card/badge 首批组件；CLI 交互式选择经管道输入完成）。/code-review 两轴通过（Standards 0 硬违规），采纳修复：DraftChip 组件化（补 data-draft-chip 标记，列表/首页同源）；首页日期本地化；**featured 精选机制**（frontmatter 旗标 + 回退最新两条，替代"按日期取前二"）；PageShell 增加返回链接并完成对两份详情页的壳去重；验证脚本按日期排序推导（修复 readdir 字母序误判）、projects URL 从 projects.ts 解析（单一事实源）。

决议与备注：
- PageShell 抽取（05 决议移交）随 shadcn 迁移顺带落地本工单；text-muted → text-muted-foreground 全站迁移是 shadcn 令牌体系的强制连带
- 首页 hero 文案仍居 i18n 字典（UI 文案层），符合 01 决议

- [x] 首页含定位语、精选案例、最新心得、Project Card 网格、联系 CTA
- [x] Project Card 数据来自结构化配置，新增条目不需改站点代码
- [x] 双语完整，无混语
- [x] 构建后断言：首页包含 Contact CTA 链接与 Project Card 的 GitHub 直链
- [x] shadcn/ui 初始化完成（components.json + 首批组件自 04 起引入，工单 01 决议移交）
