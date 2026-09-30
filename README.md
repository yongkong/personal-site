# yongkong.dev — Personal Site

The source code behind [**yongkong.dev**](https://yongkong.dev) — my bilingual (English / 中文) home on the web: deep case studies, dev notes, and a way to get in touch. Built for one audience and one action: remote clients and employers, and the email they send after reading.

The repo is public on purpose — code, specs, and decision records behind the site stay in the open.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router) · React 19 · TypeScript |
| Styling | Tailwind CSS 4 · Base UI + shadcn-style primitives · lucide-react |
| Content | MDX via `next-mdx-remote`, frontmatter via `gray-matter` |
| Typography | IBM Plex Sans & JetBrains Mono (variable, self-hosted) |
| Hosting | Cloudflare — static asset deployment via Wrangler, no server runtime |

## How it's put together

- **Static export, zero server** — `output: "export"` produces `out/`, uploaded as-is to Cloudflare ([ADR-0001](docs/adr/0001-nextjs-static-no-db-in-v1.md))
- **Bilingual routing** — English at `/`, 中文 at `/zh`, directory-style routes with trailing slashes ([ADR-0002](docs/adr/0002-bilingual-routing-default-en.md))
- **Content as MDX collections** — `content/en` and `content/zh` mirror each other; lists and pages are prerendered from frontmatter
- **Content bugs fail the build** — every case study must contain the four canonical sections (Background → My role → Technical decisions → Outcome), enforced at build time; missing frontmatter throws too
- **Light/dark theme**, sitemap, robots, and generated apple-touch icon

## Getting started

Requires Node 20+ and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Other scripts:

```bash
pnpm build      # static export to out/
pnpm verify     # assert the rendered routes in out/ match the spec
pnpm lint       # eslint
pnpm typecheck  # tsc --noEmit
```

## Writing content

Drop an `.mdx` file into `content/<lang>/case-studies/` or `content/<lang>/blog/` — keeping both languages in sync. Frontmatter:

```yaml
---
title: "Title"
description: "One-paragraph summary shown in lists"
date: 2026-09-30    # YYYY-MM-DD, sorts the lists
draft: true         # optional: draft banner, marked in lists
featured: true      # optional (case studies): curated onto the homepage
---
```

Case-study bodies must include `## Background`, `## My role`, `## Technical decisions`, `## Outcome` (`## 背景 / ## 我的角色 / ## 技术决策 / ## 结果` in Chinese) — the build throws if a section is missing.

## Project structure

```
src/app/(en)/        # English routes: /, /about, /blog, /case-studies, /contact
src/app/(zh)/zh/     # Chinese mirror: /zh, /zh/about, …
src/components/      # shared bilingual page components
src/lib/             # i18n dictionary, site config, content loaders, project cards
content/en|zh/       # MDX collections: case-studies/ and blog/
docs/adr/            # architecture decision records
scripts/             # icon/OG generation, static-output verification
```

## 中文简介

这是 [yongkong.dev](https://yongkong.dev) 的源码——一个双语(中/英)个人网站，包含深度案例研究、开发心得与联系方式，面向海外远程客户与雇主。技术栈：Next.js 16(纯静态导出)+ Tailwind CSS 4 + MDX,部署在 Cloudflare。案例研究采用固定四段结构(背景 → 我的角色 → 技术决策 → 结果)，构建时强校验，缺一段都会构建失败。

---

Site content © yongkong. The code is open for transparency, not for reuse — but if something here is useful, take it and say hello: [yongkong@outlook.com](mailto:yongkong@outlook.com)
