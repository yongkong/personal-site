"use client";

// Stateless on purpose: the button label is static per language, and the
// authoritative dark state lives on document.documentElement — read it at
// click time instead of mirroring it in React state.
export function ThemeToggle({ label }: { label: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // private mode: theme persists for this page view only
    }
  };

  return (
    <button
      type="button"
      data-theme-toggle
      aria-label={label}
      onClick={toggle}
      className="rounded-md border border-border px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
    >
      {label}
    </button>
  );
}
