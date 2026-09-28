// Shared draft chip (placeholder marker) with the data-draft-chip hook the
// build assertions key on — one markup, list + home stay in sync.
export function DraftChip({ label }: { label: string }) {
  return (
    <span
      data-draft-chip
      className="ml-2 rounded-full border border-border px-2 py-0.5 align-middle text-xs font-normal text-muted-foreground"
    >
      {label}
    </span>
  );
}
