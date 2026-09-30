import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { getDictionary, type Lang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between gap-3 px-4">
        <Link
          href={dict.homeHref}
          className="font-semibold tracking-tight transition-colors hover:text-brand"
        >
          {siteConfig.name}
          <span className="font-mono text-brand">.dev</span>
        </Link>
        <nav
          aria-label="primary"
          className="flex items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <Link
            href={dict.caseStudiesHref}
            className="rounded-md px-2 py-1.5 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
          >
            {dict.caseStudiesLabel}
          </Link>
          <Link
            href={dict.blogHref}
            className="rounded-md px-2 py-1.5 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
          >
            {dict.blogLabel}
          </Link>
          <Link
            href={dict.aboutHref}
            className="rounded-md px-2 py-1.5 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
          >
            {dict.aboutLabel}
          </Link>
          <Link
            href={dict.contactHref}
            className="rounded-md border border-border px-2.5 py-1.5 text-sm whitespace-nowrap transition-colors hover:border-brand/60 hover:text-brand"
          >
            {dict.contactLabel}
          </Link>
          <Link
            href={dict.langSwitchHref}
            hrefLang={lang === "en" ? "zh" : "en"}
            className="rounded-md px-2 py-1.5 font-mono text-xs whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
          >
            {dict.langSwitchLabel}
          </Link>
          <ThemeToggle label={dict.themeToggleLabel} />
        </nav>
      </div>
    </header>
  );
}
