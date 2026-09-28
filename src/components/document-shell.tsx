import { ThemeInitScript } from "@/components/theme-init-script";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Lang } from "@/lib/i18n";

// Shared root document for both language trees ((en) and (zh) route groups
// each own their <html> so the lang attribute is correct per language).
export function DocumentShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeInitScript />
        <div className="flex min-h-screen flex-col">
          <SiteHeader lang={lang} />
          <main className="flex-1">{children}</main>
          <SiteFooter lang={lang} />
        </div>
      </body>
    </html>
  );
}
