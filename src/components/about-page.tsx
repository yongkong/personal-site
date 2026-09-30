import { PageShell } from "@/components/page-shell";
import { getDictionary, type Lang } from "@/lib/i18n";

export function AboutPage({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <PageShell title={dict.aboutTitle} eyebrow={dict.heroEyebrow}>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed">{dict.aboutBio}</p>
      <p className="mt-4 max-w-2xl border-l-2 border-brand pl-4 text-muted-foreground">
        {dict.aboutWorkingStyle}
      </p>
      <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
        {dict.heroStats.map((stat) => (
          <div key={stat.value} className="flex flex-col gap-1">
            <dt className="order-2 text-xs leading-snug text-muted-foreground">{stat.label}</dt>
            <dd className="order-1 font-mono text-2xl font-semibold tracking-tight text-brand">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </PageShell>
  );
}
