import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

import type { CaseStudy } from "@/lib/content";
import { formatDate } from "@/lib/dates";
import { getDictionary, type Lang } from "@/lib/i18n";

export function CaseStudyView({ lang, study }: { lang: Lang; study: CaseStudy }) {
  const dict = getDictionary(lang);

  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-16">
      <Link href={dict.caseStudiesHref} className="text-sm text-muted underline-offset-4 hover:underline">
        ← {dict.caseStudiesBackLabel}
      </Link>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">{study.title}</h1>
      {study.draft && (
        <div
          data-draft="true"
          className="mt-4 rounded-md border border-border bg-muted/10 px-4 py-3 text-sm text-muted"
          role="note"
        >
          {dict.draftBanner}
        </div>
      )}
      <p className="mt-2 text-sm text-muted">
        {dict.postedOnLabel} {formatDate(study.date, lang)}
      </p>
      <div className="prose mt-8 max-w-none dark:prose-invert">
        <MDXRemote source={study.body} />
      </div>
    </article>
  );
}
