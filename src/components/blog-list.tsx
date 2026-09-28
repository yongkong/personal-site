import Link from "next/link";

import { PageShell } from "@/components/page-shell";
import { getBlogPosts } from "@/lib/content";
import { formatDate } from "@/lib/dates";
import { getDictionary, type Lang } from "@/lib/i18n";

export function BlogList({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const posts = getBlogPosts(lang);

  return (
    <PageShell title={dict.blogListTitle} subtitle={dict.blogListSubtitle}>
      <ul className="mt-10 flex flex-col gap-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-border pb-8 last:border-0">
            <Link href={`${dict.blogHref}${post.slug}/`} className="group block">
              <h2 className="text-xl font-medium underline-offset-4 group-hover:underline">
                {post.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {dict.postedOnLabel} {formatDate(post.date, lang)}
              </p>
              <p className="mt-2 text-muted-foreground">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
