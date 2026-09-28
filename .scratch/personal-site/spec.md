# Spec: Personal Site（个人网站 v1）

Status: ready-for-agent

## Problem Statement

yongkong 是有 20+ 年经验的全栈开发者（C#/.NET · TypeScript/Next.js · AI 原生工作流），寻找欧美远程合作机会。但他的 GitHub 主页无法承载他的真实履历：12 年企业级 case-management 平台的经验（最强背书）因 NDA 完全不可见；"AI-native, process-disciplined" 的定位没有展开论证的地方；潜在客户没有一条低摩擦的途径了解他并发起联系。

## Solution

一个双语（默认英文 `/`、完整中文版 `/zh`）、静态托管、加载飞快的个人网站：首页直接亮出定位与精选案例；2 篇深度 Case Study（匿名版 12 年企业平台、phonic-learn 3 天构建复盘）证明深度与交付速度；3 篇 Blog Post 支撑 "AI-native, process-disciplined" 的持续可信度；About 与 Contact 页给出一步到位的联系途径（邮箱 + 预约通话）。网站本身用 spec→tickets→implement 流程构建，上线后成为第三篇 Case Study。

## User Stories

1. 作为海外潜在客户，我希望打开首页几秒内看清你是谁、定位是什么（20 年全栈 + AI 原生工作流），以便判断与我的项目是否相关
2. 作为海外潜在客户，我希望读到深度 Case Study，以便评估真实能力而非口号
3. 作为海外潜在客户，我希望读到匿名化的 12 年企业平台案例（背景、我的角色、技术决策、结果），以便评估长期维护复杂系统的可靠性
4. 作为海外潜在客户，我希望读到 phonic-learn 3 天构建复盘，以便看到 AI 工作流带来的交付速度
5. 作为海外潜在客户，我希望网站是英文优先（默认 `/`），没有二等公民感
6. 作为海外潜在客户，我希望 Contact 页有邮箱和预约通话链接（Cal.com），以便用最低摩擦迈出第一步
7. 作为海外潜在客户，我希望看到真名 + yongkong 并用的署名，以便在 LinkedIn/GitHub 交叉验证身份
8. 作为海外潜在客户，我希望看到 Project Card 列表并直链 GitHub 仓库，以便亲自检查代码
9. 作为海外潜在客户，我希望读到英文 Blog Post，以便评估你的技术思考质量
10. 作为海外潜在客户，我希望看到时区与异步协作方式说明，以便建立远程合作预期
11. 作为海外潜在客户，我希望在手机上舒适浏览，以便随时随地阅读
12. 作为海外潜在客户，我希望页面秒开，以便不因等待而流失
13. 作为海外潜在客户，我希望分享你的页面时社交卡片（OG 标签）正常展开，以便推荐给同事时显得专业
14. 作为中文访客，我希望 `/zh` 是完整而非阉割的中文版，以便向国内人脉推荐你
15. 作为中文访客，我希望在中文版页脚找到微信二维码，以便加微信联系
16. 作为同行/技术人脉，我希望持续读到开发心得，以便建立对你的长期技术信任
17. 作为同行/技术人脉，我希望便捷跳转到你的 GitHub，以便关注与交流
18. 作为搜索引擎用户，我希望搜你的名字或 yongkong 能找到本站，以便到达所有上述内容
19. 作为站长，我希望用中文 MDX 先写心得、日后再补英文版，且不需要改代码——每种语言版本只列出该语言已有的文章
20. 作为站长，我希望新增 Case Study / Blog Post / Project Card 只需新增 MDX 或配置条目，不需要改站点代码
21. 作为站长，我希望 git push 即完成部署（静态托管），不需要运维服务器
22. 作为站长，我希望网站代码本身体现 spec→tickets→implement 的方法论，以便写成第三篇 Case Study
23. 作为站长，我希望支持深浅色模式（跟随系统 + 手动切换），以便访客舒适阅读

## Implementation Decisions

- 全新 Next.js（App Router）+ TypeScript + Tailwind + shadcn/ui 代码库，pnpm 管理；内容全 MDX；静态导出；v1 无 Prisma/数据库/后端（ADR-0001）
- 双语采用路由级方案：默认 locale `en` 在 `/`，`/zh` 为完整中文版；两套独立内容目录；UI 文案全双语（ADR-0002）
- 内容分四类集合：Case Study（双语精写）、Blog Post（中文成稿后补英文版）、Project Card（结构化配置数据）、站点文案（导航/页脚等 UI 文案按 locale 组织）
- 语言版本规则：某语言版本的文章列表只显示该语言已有的文章；Case Study 必须两语齐全才算完成
- 联系机制：Contact 页 = 域名邮箱 + Cal.com 预约链接 + GitHub/LinkedIn 入口；微信二维码仅出现在 `/zh` 页脚
- 身份署名：真名 + yongkong 并用（真名素材未到位前用醒目占位符）
- 托管：Vercel 或 Cloudflare Pages 免费档 + 自定义域名 yongkong.dev（已确认可注册）
- 每页按语言生成 OG/meta 标签；sitemap 与 robots 齐备
- 深浅色模式：Tailwind 实现，跟随系统 + 手动切换
- 用户素材（真名、邮箱、LinkedIn、Cal.com、微信二维码）以集中配置管理，占位符清晰标注，替换不需要动组件

## Testing Decisions

- 全项目唯一测试接缝：`next build` 产出的静态渲染路由（已与作者确认）
- 好的测试只断言外部行为：路由存在、预期内容渲染、链接与联系机制出现；不断言实现细节
- 必测行为举例：`/` 与 `/zh` 各自的路由全集存在；只有中文版的心得出现在 `/zh/blog` 而不出现在 `/en`（即 `/`）列表；Contact 页渲染邮箱与预约链接；Case Study 两种语言版本都在；OG 标签按语言正确生成
- 不做组件级单测；绿地项目无先例，测试以构建后断言脚本的形式进入 CI
- 将来出现动态功能（API/数据库）时再为其开独立接缝

## Out of Scope

- newsletter、站内搜索、评论系统、RSS（RSS 为上线后第一候选）
- 独立分析面板/统计仪表（上线后按需加轻量方案）
- 大陆访问优化（CDN/双镜像）
- Prisma、API、任何服务端运行时
- 第三篇 Case Study（本站构建复盘）的正文写作——上线后进行，v1 仅保证结构可挂载
- wk-crm-skills 之外的仓库逐个深写（一律走 Project Card）

## Further Notes

- 站长需提供的素材（不阻塞构建工单，用占位符推进）：真名、域名邮箱（hello@yongkong.dev，需先购域名配转发）、LinkedIn 主页、Cal.com 账号、微信二维码图片
- 购买域名 yongkong.dev 是仅人类可完成的动作，宜尽早（已查 RDAP：当前可注册）
- 内容是长杆：2 篇 Case Study × 2 语言 + 3 篇 Blog Post，写作与建站并行；构建工单不等待最终文案，占位内容清晰标注即可
- 时间盒：站点本体 1–2 天搭完，一周内内容补齐上线
- 词汇表见根目录 CONTEXT.md；架构决策见 docs/adr/0001、0002
