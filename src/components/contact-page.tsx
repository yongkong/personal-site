import { PageShell } from "@/components/page-shell";
import { getDictionary, type Lang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function ContactPage({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  const entries: { label: string; value: string; href: string }[] = [
    { label: dict.emailLabel, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { label: dict.bookCallLabel, value: siteConfig.bookCallUrl, href: siteConfig.bookCallUrl },
    { label: dict.githubLabel, value: siteConfig.github, href: siteConfig.github },
    { label: dict.linkedinLabel, value: siteConfig.linkedinUrl, href: siteConfig.linkedinUrl },
  ];

  return (
    <PageShell title={dict.contactTitle} subtitle={dict.contactSubtitle}>
      <ul className="mt-10 flex flex-col gap-6">
        {entries.map((entry) => (
          <li key={entry.label} className="border-b border-border pb-6 last:border-0">
            <p className="text-sm text-muted-foreground">{entry.label}</p>
            <a
              href={entry.href}
              target={entry.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="mt-1 block text-lg underline underline-offset-4"
            >
              {entry.value}
            </a>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
