import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyView } from "@/components/case-study-view";
import { getCaseStudies, getCaseStudy } from "@/lib/content";
import { metadataFor, staticParamsFor } from "@/lib/route-helpers";

export function generateStaticParams() {
  return staticParamsFor("zh", getCaseStudies);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return metadataFor("zh", getCaseStudy, slug);
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy("zh", slug);
  if (!study) notFound();
  return <CaseStudyView lang="zh" study={study} />;
}
