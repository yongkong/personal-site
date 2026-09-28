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
};

export function getDictionary(lang: Lang): Dictionary {
  return lang === "zh" ? zh : en;
}
