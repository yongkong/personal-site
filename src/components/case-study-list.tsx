import Link from "next/link";

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
      <ul className="mt-10 flex flex-col gap-8">
        {studies.map((study) => (
          <li key={study.slug} className="border-b border-border pb-8 last:border-0">
            <Link href={`${dict.caseStudiesHref}${study.slug}/`} className="group block">
              <h2 className="text-xl font-medium underline-offset-4 group-hover:underline">
                {study.title}
                {study.draft && <DraftChip label={dict.draftChip} />}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {dict.postedOnLabel} {formatDate(study.date, lang)}
              </p>
              <p className="mt-2 text-muted-foreground">{study.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
