// Scan-to-try card for the Chinese edition (WeChat-only surface, so it is
// deliberately absent from the en edition — asserted in verify-static).
export function QrCard({ src, title, note }: { src: string; title: string; note: string }) {
  return (
    <div className="not-prose my-8 flex flex-col items-center gap-3 rounded-lg border border-border bg-muted/10 px-6 py-6">
      {/* eslint-disable-next-line @next/next/no-img-element -- static QR image, no optimization needed */}
      <img
        src={src}
        alt={title}
        width={176}
        height={176}
        className="rounded-md border border-border bg-white p-1"
      />
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs text-muted-foreground">{note}</p>
    </div>
  );
}
