import { getDictionary, type Lang } from "@/lib/i18n";

export function AboutPage({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{dict.aboutTitle}</h1>
      <p className="mt-6 text-lg leading-relaxed">{dict.aboutBio}</p>
      <p className="mt-4 text-muted">{dict.aboutWorkingStyle}</p>
    </section>
  );
}
