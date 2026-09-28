import type { ContentItem } from "./content";
import type { Lang } from "./i18n";

// Shared helpers for the thin per-language [slug] route files, so each page
// file stays a few lines instead of repeating the same loop logic.
export function staticParamsFor(
  lang: Lang,
  list: (lang: Lang) => ContentItem[],
): { slug: string }[] {
  return list(lang).map((item) => ({ slug: item.slug }));
}

export async function metadataFor(
  lang: Lang,
  get: (lang: Lang, slug: string) => ContentItem | undefined,
  slug: string,
): Promise<{ title?: string; description?: string }> {
  const item = get(lang, slug);
  return item ? { title: item.title, description: item.description } : {};
}
