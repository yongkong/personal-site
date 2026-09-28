import { PageShell } from "@/components/page-shell";
import { getDictionary, type Lang } from "@/lib/i18n";

export function AboutPage({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <PageShell title={dict.aboutTitle}>
      <p className="mt-6 text-lg leading-relaxed">{dict.aboutBio}</p>
      <p className="mt-4 text-muted-foreground">{dict.aboutWorkingStyle}</p>
    </PageShell>
  );
}
