import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { getDictionary, type Lang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between px-4">
        <Link href={dict.homeHref} className="font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href={dict.langSwitchHref}
            className="rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            {dict.langSwitchLabel}
          </Link>
          <ThemeToggle label={dict.themeToggleLabel} />
        </div>
      </div>
    </header>
  );
}
