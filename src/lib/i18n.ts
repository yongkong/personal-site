export type Lang = "en" | "zh";

export type Dictionary = {
  siteTitle: string;
  siteDescription: string;
  positioningLine: string;
  heroSubline: string;
  skillChips: string[];
  homeHref: string;
  langSwitchLabel: string;
  langSwitchHref: string;
  themeToggleLabel: string;
  footerNote: string;
  githubLabel: string;
  blogLabel: string;
  blogHref: string;
  blogListTitle: string;
  blogListSubtitle: string;
  blogBackLabel: string;
  postedOnLabel: string;
  caseStudiesLabel: string;
  caseStudiesHref: string;
  caseStudiesListTitle: string;
  caseStudiesListSubtitle: string;
  caseStudiesBackLabel: string;
  draftBanner: string;
  draftChip: string;
};

const en: Dictionary = {
  siteTitle: "yongkong — Full-Stack Developer",
  siteDescription:
    "Full-stack engineer with 20+ years shipping production systems, delivered through an AI-native workflow. C#/.NET, TypeScript/Next.js. Remote, async-friendly, UTC+8.",
  positioningLine:
    "Full-stack engineer with 20+ years shipping production systems — now delivered through an AI-native workflow.",
  heroSubline: "C#/.NET · TypeScript/Next.js · Remote, async-friendly, UTC+8",
  skillChips: ["C#/.NET", "TypeScript", "Next.js", "AI-native workflow"],
  homeHref: "/",
  langSwitchLabel: "中文",
  langSwitchHref: "/zh",
  themeToggleLabel: "Theme",
  footerNote: "Built with Next.js, statically exported.",
  githubLabel: "GitHub",
  blogLabel: "Blog",
  blogHref: "/blog/",
  blogListTitle: "Blog",
  blogListSubtitle:
    "Notes on engineering practice, AI-native workflow, and long-term system maintenance.",
  blogBackLabel: "All posts",
  postedOnLabel: "Posted on",
  caseStudiesLabel: "Case Studies",
  caseStudiesHref: "/case-studies/",
  caseStudiesListTitle: "Case Studies",
  caseStudiesListSubtitle:
    "Deep dives into selected work — the background, my role, the technical decisions, and the outcome.",
  caseStudiesBackLabel: "All case studies",
  draftBanner: "Draft — placeholder content. The full write-up is in progress.",
  draftChip: "Draft",
};

const zh: Dictionary = {
  siteTitle: "yongkong — 全栈开发者",
  siteDescription:
    "20 余年全栈工程经验，长期维护生产级系统，如今以 AI 原生工作流交付。C#/.NET、TypeScript/Next.js。支持远程与异步协作，UTC+8。",
  positioningLine: "20 余年全栈工程经验，长期维护生产级系统——如今以 AI 原生工作流交付。",
  heroSubline: "C#/.NET · TypeScript/Next.js · 远程友好 · 异步协作 · UTC+8",
  skillChips: ["C#/.NET", "TypeScript", "Next.js", "AI 原生工作流"],
  homeHref: "/zh",
  langSwitchLabel: "English",
  langSwitchHref: "/",
  themeToggleLabel: "主题",
  footerNote: "基于 Next.js 构建，静态导出。",
  githubLabel: "GitHub",
  blogLabel: "心得",
  blogHref: "/zh/blog/",
  blogListTitle: "开发心得",
  blogListSubtitle: "关于工程实践、AI 原生工作流与长期系统维护的记录。",
  blogBackLabel: "全部心得",
  postedOnLabel: "发布于",
  caseStudiesLabel: "案例研究",
  caseStudiesHref: "/zh/case-studies/",
  caseStudiesListTitle: "案例研究",
  caseStudiesListSubtitle: "精选工作的深度剖析——背景、我的角色、技术决策与结果。",
  caseStudiesBackLabel: "全部案例研究",
  draftBanner: "草稿——当前为占位内容，完整撰写进行中。",
  draftChip: "草稿",
};

export function getDictionary(lang: Lang): Dictionary {
  return lang === "zh" ? zh : en;
}
