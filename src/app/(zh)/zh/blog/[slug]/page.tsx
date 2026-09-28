import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogPostView } from "@/components/blog-post";
import { getBlogPost, getBlogPosts } from "@/lib/content";
import { metadataFor, staticParamsFor } from "@/lib/route-helpers";

export function generateStaticParams() {
  return staticParamsFor("zh", getBlogPosts);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return metadataFor("zh", getBlogPost, slug);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost("zh", slug);
  if (!post) notFound();
  return <BlogPostView lang="zh" post={post} />;
}
