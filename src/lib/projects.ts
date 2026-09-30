import type { Lang } from "./i18n";

export type ProjectCardData = {
  name: string;
  url: string;
  stack: string[];
  description: Record<Lang, string>;
};

// Stable site data (not placeholder content): the public repos this site
// shows as Project Cards. Adding a card = adding an entry here.
export const PROJECTS: ProjectCardData[] = [
  {
    name: "learn-mattpocock-skills",
    url: "https://github.com/yongkong/learn-mattpocock-skills",
    stack: ["Next.js", "TypeScript", "MDX"],
    description: {
      en: "Bilingual course site teaching AI-native workflows — built solo in a week.",
      zh: "讲授 AI 原生工作流的双语课程站——一周独立建成。",
    },
  },
  {
    name: "programmer-nav",
    url: "https://github.com/yongkong/programmer-nav",
    stack: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    description: {
      en: "Programmer navigation portal — the scaffold this very site's stack grew from.",
      zh: "程序员导航门户——本站技术栈的起点脚手架。",
    },
  },
  {
    name: "wk-crm-skills",
    url: "https://github.com/yongkong/wk-crm-skills",
    stack: ["Python", "Agent Skills"],
    description: {
      en: "Agent skills toolkit for CRM workflows.",
      zh: "面向 CRM 工作流的 Agent Skills 工具包。",
    },
  },
];
