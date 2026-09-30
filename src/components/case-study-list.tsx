import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { DraftChip } from "@/components/draft-chip";
import { PageShell } from "@/components/page-shell";
import { getCaseStudies } from "@/lib/content";
import { formatDate } from "@/lib/dates";
import { getDictionary, type Lang } from "@/lib/i18n";

export function CaseStudyList({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const studies = getCaseStudies(lang);

  return (
    <PageShell title={dict.caseStudiesListTitle} subtitle={dict.caseStudiesListSubtitle}>
      <ul className="mt-8">
        {studies.map((study, index) => (
          <li key={study.slug} className="border-b border-border last:border-0">
            <Link
              href={`${dict.caseStudiesHref}${study.slug}/`}
              className="group flex gap-4 py-6"
            >
              <span
                aria-hidden="true"
                className="pt-1 font-mono text-sm text-muted-foreground"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="flex flex-wrap items-center gap-1 text-xl font-medium transition-colors group-hover:text-brand">
                  {study.title}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  />
                  {study.draft && <DraftChip label={dict.draftChip} />}
                </h2>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {dict.postedOnLabel} {formatDate(study.date, lang)}
                </p>
                <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
                  {study.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
