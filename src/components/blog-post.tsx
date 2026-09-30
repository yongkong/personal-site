import { MDXRemote } from "next-mdx-remote/rsc";

import { PageShell } from "@/components/page-shell";
import type { BlogPost } from "@/lib/content";
import { formatDate } from "@/lib/dates";
import { getDictionary, type Lang } from "@/lib/i18n";

export function BlogPostView({ lang, post }: { lang: Lang; post: BlogPost }) {
  const dict = getDictionary(lang);

  return (
    <PageShell title={post.title} backHref={dict.blogHref} backLabel={dict.blogBackLabel}>
      <p className="mt-3 font-mono text-xs tracking-wide text-muted-foreground">
        {dict.postedOnLabel} {formatDate(post.date, lang)}
      </p>
      <div className="prose mt-8 max-w-none dark:prose-invert">
        <MDXRemote source={post.body} />
      </div>
    </PageShell>
  );
}
