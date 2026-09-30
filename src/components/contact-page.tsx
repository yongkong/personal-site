import { ArrowUpRight } from "lucide-react";

import { PageShell } from "@/components/page-shell";
import { getDictionary, type Lang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function ContactPage({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  const entries: { label: string; value: string; href: string }[] = [
    { label: dict.emailLabel, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { label: dict.githubLabel, value: siteConfig.github, href: siteConfig.github },
  ];

  return (
    <PageShell title={dict.contactTitle} subtitle={dict.contactSubtitle}>
      <ul className="mt-8">
        {entries.map((entry) => (
          <li key={entry.label} className="border-b border-border last:border-0">
            <a
              href={entry.href}
              target={entry.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-5"
            >
              <span>
                <span className="block font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  {entry.label}
                </span>
                <span className="mt-1 block text-lg underline underline-offset-4 decoration-border transition-colors group-hover:text-brand group-hover:decoration-brand">
                  {entry.value}
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
              />
            </a>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
