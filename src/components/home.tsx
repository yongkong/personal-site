import Link from "next/link";

import { DraftChip } from "@/components/draft-chip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBlogPosts, getCaseStudies } from "@/lib/content";
import { formatDate } from "@/lib/dates";
import { getDictionary, type Lang } from "@/lib/i18n";
import { PROJECTS } from "@/lib/projects";

const sectionClass = "mx-auto w-full max-w-4xl px-4 py-12";

export function Home({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const studies = getCaseStudies(lang);
  const flagged = studies.filter((study) => study.featured);
  const featured = (flagged.length > 0 ? flagged : studies).slice(0, 2);
  const latest = getBlogPosts(lang).slice(0, 3);

  return (
    <div>
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-24">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {dict.positioningLine}
        </h1>
        <p className="text-lg text-muted-foreground">{dict.heroSubline}</p>
        <ul className="flex flex-wrap gap-2" aria-label="skills">
          {dict.skillChips.map((chip) => (
            <li key={chip} className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
              {chip}
            </li>
          ))}
        </ul>
        <div>
          <Button render={<Link href={dict.contactHref} />} nativeButton={false}>
            {dict.ctaLabel}
          </Button>
        </div>
      </section>

      <section className={sectionClass}>
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">{dict.featuredLabel}</h2>
          <Link href={dict.caseStudiesHref} className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            {dict.viewAllLabel}
          </Link>
        </div>
        <ul className="mt-6 flex flex-col gap-6">
          {featured.map((study) => (
            <li key={study.slug} className="border-b border-border pb-6 last:border-0">
              <Link href={`${dict.caseStudiesHref}${study.slug}/`} className="group block">
                <h3 className="text-xl font-medium underline-offset-4 group-hover:underline">
                  {study.title}
                  {study.draft && <DraftChip label={dict.draftChip} />}
                </h3>
                <p className="mt-2 text-muted-foreground">{study.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={sectionClass}>
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">{dict.latestPostsLabel}</h2>
          <Link href={dict.blogHref} className="text-sm text-muted-foreground underline-offset-4 hover:underline">
            {dict.viewAllLabel}
          </Link>
        </div>
        <ul className="mt-6 flex flex-col gap-4">
          {latest.map((post) => (
            <li key={post.slug}>
              <Link href={`${dict.blogHref}${post.slug}/`} className="group block">
                <span className="font-medium underline-offset-4 group-hover:underline">{post.title}</span>
                <span className="ml-3 text-sm text-muted-foreground">{formatDate(post.date, lang)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={sectionClass}>
        <h2 className="text-2xl font-semibold tracking-tight">{dict.projectsLabel}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <Card key={project.name}>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description[lang]}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline underline-offset-4"
                >
                  GitHub
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
