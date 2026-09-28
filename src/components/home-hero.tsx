import { getDictionary, type Lang } from "@/lib/i18n";

export function HomeHero({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-24">
      <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        {dict.positioningLine}
      </h1>
      <p className="text-lg text-muted">{dict.heroSubline}</p>
      <ul className="flex flex-wrap gap-2" aria-label="skills">
        {dict.skillChips.map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-border px-3 py-1 text-sm text-muted"
          >
            {chip}
          </li>
        ))}
      </ul>
    </section>
  );
}
