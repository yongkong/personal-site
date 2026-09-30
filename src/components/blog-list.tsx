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
      <ul className="mt-8">
        {posts.map((post, index) => (
          <li key={post.slug} className="border-b border-border last:border-0">
            <Link
              href={`${dict.blogHref}${post.slug}/`}
              className="group flex items-baseline gap-4 py-5"
            >
              <span
                aria-hidden="true"
                className="font-mono text-sm text-muted-foreground"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-medium underline-offset-4 transition-colors group-hover:text-brand group-hover:underline">
                  {post.title}
                </h2>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
              </div>
              <span className="ml-auto font-mono text-xs whitespace-nowrap text-muted-foreground">
                {formatDate(post.date, lang)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
