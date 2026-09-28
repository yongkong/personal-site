import Link from "next/link";

// Shared page shell (extracted at its 6th duplication — ticket 05 resolution).
// Detail pages pass backHref/backLabel to render the "← all posts" link
// above the title.
export function PageShell({
  title,
  subtitle,
  backHref,
  backLabel,
  children,
}: {
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-16">
      {backHref && backLabel && (
        <Link href={backHref} className="text-sm text-muted-foreground underline-offset-4 hover:underline">
          ← {backLabel}
        </Link>
      )}
      <h1 className={`${backHref ? "mt-4 " : ""}text-3xl font-semibold tracking-tight`}>{title}</h1>
      {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
      {children}
    </section>
  );
}
