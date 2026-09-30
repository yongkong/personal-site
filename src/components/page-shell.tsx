import Link from "next/link";

// Shared page shell (extracted at its 6th duplication — ticket 05 resolution).
// Detail pages pass backHref/backLabel to render the "← all posts" link
// above the title.
export function PageShell({
  title,
  subtitle,
  backHref,
  backLabel,
  eyebrow,
  children,
}: {
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-16">
      {backHref && backLabel && (
        <Link
          href={backHref}
          className="font-mono text-xs tracking-wider text-muted-foreground underline-offset-4 transition-colors hover:text-brand hover:underline"
        >
          ← {backLabel}
        </Link>
      )}
      {eyebrow && (
        <p className="mt-3 font-mono text-sm font-medium tracking-widest text-brand uppercase">
          {"// "}
          {eyebrow}
        </p>
      )}
      <h1
        className={`${backHref || eyebrow ? "mt-4 " : ""}text-3xl font-semibold tracking-tight text-balance`}
      >
        {title}
      </h1>
      {subtitle && <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>}
      {children}
    </section>
  );
}
