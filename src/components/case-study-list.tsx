import Link from "next/link";

import { getCaseStudies } from "@/lib/content";
import { formatDate } from "@/lib/dates";
import { getDictionary, type Lang } from "@/lib/i18n";

export function CaseStudyList({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const studies = getCaseStudies(lang);

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{dict.caseStudiesListTitle}</h1>
      <p className="mt-2 text-muted">{dict.caseStudiesListSubtitle}</p>

      <ul className="mt-10 flex flex-col gap-8">
        {studies.map((study) => (
          <li key={study.slug} className="border-b border-border pb-8 last:border-0">
            <Link href={`${dict.caseStudiesHref}${study.slug}/`} className="group block">
              <h2 className="text-xl font-medium underline-offset-4 group-hover:underline">
                {study.title}
                {study.draft && (
                  <span
                    data-draft-chip
                    className="ml-2 rounded-full border border-border px-2 py-0.5 align-middle text-xs font-normal text-muted"
                  >
                    {dict.draftChip}
                  </span>
                )}
              </h2>
              <p className="mt-1 text-sm text-muted">
                {dict.postedOnLabel} {formatDate(study.date, lang)}
              </p>
              <p className="mt-2 text-muted">{study.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
