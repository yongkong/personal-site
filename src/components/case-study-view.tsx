import { MDXRemote } from "next-mdx-remote/rsc";

import { PageShell } from "@/components/page-shell";
import { QrCard } from "@/components/qr-card";
import { Stat } from "@/components/stat";
import type { CaseStudy } from "@/lib/content";
import { formatDate } from "@/lib/dates";
import { getDictionary, type Lang } from "@/lib/i18n";

export function CaseStudyView({ lang, study }: { lang: Lang; study: CaseStudy }) {
  const dict = getDictionary(lang);

  return (
    <PageShell title={study.title} backHref={dict.caseStudiesHref} backLabel={dict.caseStudiesBackLabel}>
      {study.draft && (
        <div
          data-draft="true"
          className="mt-4 rounded-md border border-border bg-muted/10 px-4 py-3 text-sm text-muted-foreground"
          role="note"
        >
          {dict.draftBanner}
        </div>
      )}
      <p className="mt-3 font-mono text-xs tracking-wide text-muted-foreground">
        {dict.postedOnLabel} {formatDate(study.date, lang)}
      </p>
      <div className="prose mt-8 max-w-none dark:prose-invert">
        <MDXRemote source={study.body} components={{ Stat, QrCard }} />
      </div>
    </PageShell>
  );
}
