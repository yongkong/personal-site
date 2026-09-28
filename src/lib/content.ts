import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import type { Lang } from "./i18n";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date (YYYY-MM-DD)
  body: string; // MDX source
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

// Read at build time only: the site is statically exported (ADR-0001), so
// every page that calls this is prerendered with the content baked in.
export function getBlogPosts(lang: Lang): BlogPost[] {
  const dir = path.join(CONTENT_ROOT, lang, "blog");
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
        body: content.trim(),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogPost(lang: Lang, slug: string): BlogPost | undefined {
  return getBlogPosts(lang).find((post) => post.slug === slug);
}
