import type { Lang } from "./i18n";

export function formatDate(iso: string, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === "zh" ? "zh-CN" : "en-US", {
    dateStyle: "long",
  }).format(new Date(iso));
}
