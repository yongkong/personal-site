import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import type { Lang } from "./i18n";

export type ContentItem = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date (YYYY-MM-DD)
  draft: boolean; // true while placeholder content awaits its real write-up
  featured: boolean; // curated onto the homepage's Featured section
  body: string; // MDX source
};

export type BlogPost = ContentItem;
export type CaseStudy = ContentItem;

const CONTENT_ROOT = path.join(process.cwd(), "content");

// Canonical Case Study section headings per language (CONTEXT.md glossary:
// 背景 → 我的角色 → 技术决策 → 结果). Bodies are validated against these at
// build time so the four-part template cannot silently drift.
export const CASE_STUDY_SECTIONS: Record<Lang, string[]> = {
  en: ["Background", "My role", "Technical decisions", "Outcome"],
  zh: ["背景", "我的角色", "技术决策", "结果"],
};

// Read at build time only: the site is statically exported (ADR-0001), so
// every page that calls this is prerendered with the content baked in.
function loadCollection(lang: Lang, dirName: string): ContentItem[] {
  const dir = path.join(CONTENT_ROOT, lang, dirName);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? "");
      const title = String(data.title ?? "");
      // Content bugs must fail the build, not render silently broken pages.
      if (!title || !date) {
        throw new Error(`Invalid frontmatter in ${file}: title and date are required.`);
      }
      return {
        slug: path.basename(file, ".mdx"),
        title,
        description: String(data.description ?? ""),
        date,
        draft: data.draft === true,
        featured: data.featured === true,
        body: content.trim(),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogPosts(lang: Lang): BlogPost[] {
  return loadCollection(lang, "blog");
}

export function getBlogPost(lang: Lang, slug: string): BlogPost | undefined {
  return getBlogPosts(lang).find((post) => post.slug === slug);
}

export function getCaseStudies(lang: Lang): CaseStudy[] {
  const sections = CASE_STUDY_SECTIONS[lang];
  return loadCollection(lang, "case-studies").map((study) => {
    const missing = sections.filter((heading) => !study.body.includes(`## ${heading}`));
    if (missing.length > 0) {
      throw new Error(
        `Case study "${study.slug}" (${lang}) is missing sections: ${missing.join(", ")}`,
      );
    }
    return study;
  });
}

export function getCaseStudy(lang: Lang, slug: string): CaseStudy | undefined {
  return getCaseStudies(lang).find((study) => study.slug === slug);
}
