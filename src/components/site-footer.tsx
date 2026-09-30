import { getDictionary, type Lang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span className="font-mono text-xs">
          © {year} {siteConfig.name}. {dict.footerNote}
        </span>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs underline underline-offset-4 transition-colors hover:text-brand"
        >
          {dict.githubLabel}
        </a>
      </div>
    </footer>
  );
}
