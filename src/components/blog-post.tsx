import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

import type { BlogPost } from "@/lib/content";
import { formatDate } from "@/lib/dates";
import { getDictionary, type Lang } from "@/lib/i18n";

export function BlogPostView({ lang, post }: { lang: Lang; post: BlogPost }) {
  const dict = getDictionary(lang);

  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-16">
      <Link href={dict.blogHref} className="text-sm text-muted underline-offset-4 hover:underline">
        ← {dict.blogBackLabel}
      </Link>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">{post.title}</h1>
      <p className="mt-2 text-sm text-muted">
        {dict.postedOnLabel} {formatDate(post.date, lang)}
      </p>
      <div className="prose mt-8 max-w-none dark:prose-invert">
        <MDXRemote source={post.body} />
      </div>
    </article>
  );
}
