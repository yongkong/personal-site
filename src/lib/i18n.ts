export type Lang = "en" | "zh";

export type HeroStat = {
  value: string;
  label: string;
};

export type Dictionary = {
  siteTitle: string;
  siteDescription: string;
  positioningLine: string;
  heroSubline: string;
  heroEyebrow: string;
  heroStats: HeroStat[];
  secondaryCtaLabel: string;
  closingCtaTitle: string;
  closingCtaSubtitle: string;
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
  aboutLabel: string;
  aboutHref: string;
  contactLabel: string;
  contactHref: string;
  aboutTitle: string;
  aboutBio: string;
  aboutWorkingStyle: string;
  contactTitle: string;
  contactSubtitle: string;
  emailLabel: string;
  featuredLabel: string;
  latestPostsLabel: string;
  projectsLabel: string;
  ctaLabel: string;
  viewAllLabel: string;
};

const en: Dictionary = {
  siteTitle: "yongkong — Full-Stack Developer",
  siteDescription:
    "Full-stack engineer with 20+ years shipping production systems, delivered through an AI-native workflow. C#/.NET, TypeScript/Next.js. Remote, async-friendly, UTC+8.",
  positioningLine:
    "Full-stack engineer with 20+ years shipping production systems — now delivered through an AI-native workflow.",
  heroSubline: "C#/.NET · TypeScript/Next.js · Remote, async-friendly, UTC+8",
  heroEyebrow: "Full-stack engineering",
  heroStats: [
    { value: "20+", label: "years shipping production systems" },
    { value: "12", label: "years owning one enterprise platform for a US client" },
    { value: "UTC+8", label: "async-friendly, overlaps US & EU hours" },
    { value: "AI-native", label: "delivery workflow, process-disciplined" },
  ],
  secondaryCtaLabel: "View case studies",
  closingCtaTitle: "Have a system to build — or to keep alive for the next decade?",
  closingCtaSubtitle:
    "Long-term ownership is the rare part. Tell me about your product and I'll tell you how I'd approach it.",
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
  aboutLabel: "About",
  aboutHref: "/about/",
  contactLabel: "Contact",
  contactHref: "/contact/",
  aboutTitle: "About",
  aboutBio:
    "[PLACEHOLDER — full narrative arrives with the launch content pass.] In short: 20+ years of full-stack engineering, 12 of them owning an enterprise case-management platform for a US client — now delivering through an AI-native workflow.",
  aboutWorkingStyle: "Remote, async-friendly, UTC+8 — comfortable overlapping US and European hours.",
  contactTitle: "Contact",
  contactSubtitle: "The fastest way to start a conversation.",
  emailLabel: "Email",
  featuredLabel: "Featured work",
  latestPostsLabel: "Latest posts",
  projectsLabel: "Open-source projects",
  ctaLabel: "Get in touch",
  viewAllLabel: "View all",
};

const zh: Dictionary = {
  siteTitle: "yongkong — 全栈开发者",
  siteDescription:
    "20 余年全栈工程经验，长期维护生产级系统，如今以 AI 原生工作流交付。C#/.NET、TypeScript/Next.js。支持远程与异步协作，UTC+8。",
  positioningLine: "20 余年全栈工程经验，长期维护生产级系统——如今以 AI 原生工作流交付。",
  heroSubline: "C#/.NET · TypeScript/Next.js · 远程友好 · 异步协作 · UTC+8",
  heroEyebrow: "全栈工程",
  heroStats: [
    { value: "20+", label: "年生产级系统开发经验" },
    { value: "12", label: "年独立承担美国客户的企业级平台" },
    { value: "UTC+8", label: "异步协作，可重叠美欧工作时区" },
    { value: "AI 原生", label: "交付工作流，流程严谨" },
  ],
  secondaryCtaLabel: "查看案例研究",
  closingCtaTitle: "有系统要构建——还是要让它再稳定运行十年？",
  closingCtaSubtitle: "长期守护才是稀缺能力。聊聊你的产品，我会给出我的技术判断与做法。",
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
  aboutLabel: "关于",
  aboutHref: "/zh/about/",
  contactLabel: "联系",
  contactHref: "/zh/contact/",
  aboutTitle: "关于",
  aboutBio:
    "【占位——完整履历随上线内容批次补充。】简版：20 余年全栈工程经验，其中 12 年独立承担美国客户的企业级案件管理平台——如今以 AI 原生工作流交付。",
  aboutWorkingStyle: "支持远程与异步协作，UTC+8，可与美国/欧洲时区重叠工作。",
  contactTitle: "联系",
  contactSubtitle: "最快开始交流的方式。",
  emailLabel: "邮箱",
  featuredLabel: "精选案例",
  latestPostsLabel: "最新心得",
  projectsLabel: "开源项目",
  ctaLabel: "联系我",
  viewAllLabel: "查看全部",
};

export function getDictionary(lang: Lang): Dictionary {
  return lang === "zh" ? zh : en;
}
