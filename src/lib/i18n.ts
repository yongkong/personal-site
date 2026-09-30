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
  aboutStackTitle: string;
  aboutStackGroups: { category: string; items: string[] }[];
  aboutGithubNote: string;
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
  skillChips: [
    "C#/.NET",
    "ASP.NET Core",
    "Angular · Vue",
    "TypeScript/Next.js",
    "Python · Java · PHP",
    "SQL Server",
    "OCR / ML",
    "AI-native workflow",
  ],
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
    "Full-stack engineer with 20+ years shipping systems businesses actually run — twelve of them owning the foundations of an enterprise case-management platform for a US software company, remote from China the whole time. I lead architecture and still write the code; recent years go into putting AI into production: OCR pipelines, deep-learning image analysis, LLM-powered features.",
  aboutWorkingStyle: "Remote, async-friendly, UTC+8 — comfortable overlapping US and European hours.",
  aboutStackTitle: "Tech stack",
  aboutStackGroups: [
    {
      category: "Backend",
      items: [
        "C# / ASP.NET Core",
        ".NET Framework → .NET 8",
        "Java · Python · PHP",
        "REST APIs · Entity Framework · Dapper",
      ],
    },
    {
      category: "Frontend",
      items: [
        "Angular — since the AngularJS era",
        "Vue · TypeScript",
        "Next.js / React",
        "Tailwind CSS · MDX",
      ],
    },
    {
      category: "AI & machine learning",
      items: [
        "OCR pipelines in production",
        "Deep-learning image classification & grading",
        "LLM-powered features",
        "Daily AI coding agents, process-disciplined",
      ],
    },
    {
      category: "Data",
      items: [
        "SQL Server — 12+ years, tens-of-millions rows",
        "Oracle alongside SQL Server",
        "Batch & replication pipelines",
      ],
    },
    {
      category: "Mobile & desktop",
      items: [
        "WeChat Mini Programs — uniapp · Vue 3",
        "Windows desktop — Delphi → .NET",
      ],
    },
  ],
  aboutGithubNote:
    "Code, specs, and the issue trails behind my work live in the open — browse them on GitHub.",
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
  skillChips: [
    "C#/.NET",
    "ASP.NET Core",
    "Angular · Vue",
    "TypeScript/Next.js",
    "Python · Java · PHP",
    "SQL Server",
    "OCR / 机器学习",
    "AI 原生工作流",
  ],
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
    "全栈工程师，20 余年生产级系统经验——其中 12 年独立承担一家美国软件公司企业级案件管理平台的底层建设，全程在中国远程。既做架构设计，也亲手写代码；近年专注把 AI 做进生产系统：OCR 流水线、深度学习图像分析、LLM 功能。",
  aboutWorkingStyle: "支持远程与异步协作，UTC+8，可与美国/欧洲时区重叠工作。",
  aboutStackTitle: "技术栈",
  aboutStackGroups: [
    {
      category: "后端",
      items: [
        "C# / ASP.NET Core",
        ".NET Framework → .NET 8",
        "Java · Python · PHP",
        "REST API · Entity Framework · Dapper",
      ],
    },
    {
      category: "前端",
      items: [
        "Angular——从 AngularJS 时代至今",
        "Vue · TypeScript",
        "Next.js / React",
        "Tailwind CSS · MDX",
      ],
    },
    {
      category: "AI 与机器学习",
      items: [
        "生产环境 OCR 流水线",
        "深度学习图像分类与自动评级",
        "LLM 功能集成",
        "日常使用 AI 编码代理，流程严谨",
      ],
    },
    {
      category: "数据",
      items: [
        "SQL Server——12 年以上，千万行级",
        "SQL Server 与 Oracle 共存架构",
        "批处理与数据复制管道",
      ],
    },
    {
      category: "移动与桌面",
      items: [
        "微信小程序——uniapp · Vue 3",
        "Windows 桌面——Delphi → .NET",
      ],
    },
  ],
  aboutGithubNote: "代码、规格与问题追踪大多公开——欢迎到 GitHub 上查验。",
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
