import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { DraftChip } from "@/components/draft-chip";
import { GithubMark } from "@/components/github-mark";
import { Button } from "@/components/ui/button";
import { getBlogPosts, getCaseStudies } from "@/lib/content";
import { formatDate } from "@/lib/dates";
import { getDictionary, type Lang } from "@/lib/i18n";
import { PROJECTS } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

const sectionClass = "mx-auto w-full max-w-4xl px-4 pt-16";

function SectionHeader({
  num,
  title,
  viewAllHref,
  viewAllLabel,
}: {
  num: string;
  title: string;
  viewAllHref?: string;
  viewAllLabel?: string;
}) {
  return (
    <header className="border-t border-border pt-5">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="flex items-baseline gap-3 text-xl font-semibold tracking-tight">
          <span className="font-mono text-sm font-medium text-brand" aria-hidden="true">
            {num}
          </span>
          {title}
        </h2>
        {viewAllHref && viewAllLabel && (
          <Link
            href={viewAllHref}
            className="font-mono text-xs tracking-wider text-muted-foreground underline-offset-4 transition-colors hover:text-brand hover:underline"
          >
            {viewAllLabel} →
          </Link>
        )}
      </div>
    </header>
  );
}

export function Home({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const studies = getCaseStudies(lang);
  const flagged = studies.filter((study) => study.featured);
  const featured = (flagged.length > 0 ? flagged : studies).slice(0, 2);
  const latest = getBlogPosts(lang).slice(0, 3);

  return (
    <div>
      <section className="relative border-b border-border">
        <div
          aria-hidden="true"
          className="bg-blueprint absolute inset-0 [mask-image:radial-gradient(ellipse_70%_80%_at_30%_20%,black_20%,transparent_75%)]"
        />
        <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-20 sm:py-28">
          <p className="font-mono text-sm font-medium tracking-widest text-brand uppercase">
            {"// "}
            {dict.heroEyebrow}
          </p>
          <h1 className="max-w-2xl text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
            {dict.positioningLine}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">{dict.heroSubline}</p>
          <ul className="flex flex-wrap gap-2" aria-label="skills">
            {dict.skillChips.map((chip) => (
              <li
                key={chip}
                className="rounded-md border border-border bg-muted/60 px-2 py-1 font-mono text-[13px] text-muted-foreground"
              >
                {chip}
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="px-5"
              render={<Link href={dict.contactHref} />}
              nativeButton={false}
            >
              {dict.ctaLabel}
              <ArrowRight aria-hidden="true" data-icon="inline-end" />
            </Button>
            <Link
              href={dict.caseStudiesHref}
              className="font-mono text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-brand hover:underline"
            >
              {dict.secondaryCtaLabel} →
            </Link>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-brand hover:underline"
            >
              <GithubMark className="size-3.5" />
              {dict.githubLabel} →
            </a>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
            {dict.heroStats.map((stat) => (
              <div key={stat.value} className="flex flex-col gap-1">
                <dt className="order-2 text-xs leading-snug text-muted-foreground">{stat.label}</dt>
                <dd className="order-1 font-mono text-2xl font-semibold tracking-tight text-brand">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={sectionClass}>
        <SectionHeader
          num="01"
          title={dict.featuredLabel}
          viewAllHref={dict.caseStudiesHref}
          viewAllLabel={dict.viewAllLabel}
        />
        <ul className="mt-2">
          {featured.map((study, index) => (
            <li key={study.slug} className="border-b border-border last:border-0">
              <Link
                href={`${dict.caseStudiesHref}${study.slug}/`}
                className="group flex gap-4 py-5"
              >
                <span
                  aria-hidden="true"
                  className="pt-0.5 font-mono text-sm text-muted-foreground"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="flex flex-wrap items-center gap-1 text-lg font-medium transition-colors group-hover:text-brand">
                    {study.title}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                    />
                    {study.draft && <DraftChip label={dict.draftChip} />}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {study.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={sectionClass}>
        <SectionHeader
          num="02"
          title={dict.latestPostsLabel}
          viewAllHref={dict.blogHref}
          viewAllLabel={dict.viewAllLabel}
        />
        <ul className="mt-2">
          {latest.map((post, index) => (
            <li key={post.slug} className="border-b border-border last:border-0">
              <Link
                href={`${dict.blogHref}${post.slug}/`}
                className="group flex items-baseline gap-4 py-4"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-sm text-muted-foreground"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium underline-offset-4 transition-colors group-hover:text-brand group-hover:underline">
                  {post.title}
                </span>
                <span className="ml-auto font-mono text-xs whitespace-nowrap text-muted-foreground">
                  {formatDate(post.date, lang)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={sectionClass}>
        <SectionHeader
          num="03"
          title={dict.projectsLabel}
          viewAllHref={siteConfig.github}
          viewAllLabel={dict.githubLabel}
        />
        <ul className="mt-6 grid gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <li key={project.name}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-brand/60"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-medium">{project.name}</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  />
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description[lang]}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 pb-20">
        <div className="relative overflow-hidden rounded-xl border border-border bg-card p-8 sm:p-10">
          <div
            aria-hidden="true"
            className="bg-blueprint absolute inset-0 [mask-image:radial-gradient(ellipse_80%_100%_at_100%_0%,black_10%,transparent_70%)]"
          />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight text-balance">
                {dict.closingCtaTitle}
              </h2>
              <p className="mt-3 text-muted-foreground">{dict.closingCtaSubtitle}</p>
            </div>
            <Button
              size="lg"
              className="px-5"
              render={<Link href={dict.contactHref} />}
              nativeButton={false}
            >
              {dict.ctaLabel}
              <ArrowRight aria-hidden="true" data-icon="inline-end" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
