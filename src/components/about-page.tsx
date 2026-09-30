import { GithubMark } from "@/components/github-mark";
import { PageShell } from "@/components/page-shell";
import { getDictionary, type Lang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

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

      <section aria-labelledby="about-stack" className="mt-12 border-t border-border pt-8">
        <h2
          id="about-stack"
          className="text-xl font-semibold tracking-tight"
        >
          {dict.aboutStackTitle}
        </h2>
        <dl className="mt-6 grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {dict.aboutStackGroups.map((group) => (
            <div key={group.category}>
              <dt className="font-mono text-xs tracking-widest text-brand uppercase">
                {group.category}
              </dt>
              <dd className="mt-2">
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <a
        href={siteConfig.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-12 flex w-fit items-center gap-2.5 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-brand/60 hover:text-foreground"
      >
        <GithubMark className="size-4 shrink-0" />
        <span>{dict.aboutGithubNote}</span>
        <span className="font-mono text-brand">github.com/yongkong →</span>
      </a>
    </PageShell>
  );
}
