// Outcome metric for case studies, usable directly in MDX bodies
// (<Stat value="12" label="years" />). Inline-flex so consecutive stats
// flow as a row and wrap on narrow screens.
export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div data-stat="true" className="mr-10 mb-6 inline-flex flex-col gap-1 align-top">
      <span className="font-mono text-3xl font-semibold tracking-tight text-brand">{value}</span>
      <span className="text-xs leading-snug text-muted-foreground">{label}</span>
    </div>
  );
}
