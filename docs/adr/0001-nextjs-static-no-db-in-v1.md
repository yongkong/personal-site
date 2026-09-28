# 0001 - 全新 Next.js 代码库，静态化部署，v1 不引入数据库

个人网站需要方便扩展且不复用 phonic-learn，作者有 .NET 背景且最初倾向 shadcn + Express。决定：新建 Next.js（App Router）+ TypeScript + Tailwind + shadcn/ui 代码库（栈同 programmer-nav 脚手架），内容全部走 MDX，静态导出到 Vercel/Cloudflare Pages 免费档，v1 不启用 Prisma/数据库。

## Considered Options

- **Express 后端 + Vite/React 前端**：拒绝——对无常驻服务需求的内容站纯属增加运维负担与冷启动风险；将来真有动态功能时可作为独立边车服务再加。
- **Astro**：拒绝——内容站性能更优，但作者无实战先例，而 Next.js 已有两次交付凭证。
- **复用 phonic-learn**：拒绝——作者明确要求全新代码库。
