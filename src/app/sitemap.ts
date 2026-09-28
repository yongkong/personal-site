import type { MetadataRoute } from "next";

import { getBlogPosts, getCaseStudies } from "@/lib/content";
import type { Lang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of ["en", "zh"] as const satisfies Lang[]) {
    const prefix = lang === "en" ? "" : "/zh";
    entries.push({ url: `${base}${prefix}/`, priority: 1, changeFrequency: "monthly" });
    entries.push({ url: `${base}${prefix}/case-studies/`, priority: 0.8, changeFrequency: "monthly" });
    entries.push({ url: `${base}${prefix}/blog/`, priority: 0.7, changeFrequency: "weekly" });
    entries.push({ url: `${base}${prefix}/about/`, priority: 0.5 });
    entries.push({ url: `${base}${prefix}/contact/`, priority: 0.8 });
    for (const study of getCaseStudies(lang)) {
      entries.push({ url: `${base}${prefix}/case-studies/${study.slug}/`, priority: 0.9 });
    }
    for (const post of getBlogPosts(lang)) {
      entries.push({ url: `${base}${prefix}/blog/${post.slug}/`, priority: 0.6 });
    }
  }

  return entries;
}
