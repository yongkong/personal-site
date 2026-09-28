import { getDictionary, type Lang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-4 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {year} {siteConfig.authorRealName} ({siteConfig.name}). {dict.footerNote}
        </span>
        <div className="flex items-center gap-4">
          {/* WeChat QR slot exists only in the zh edition (spec: language-differentiated contact surface). */}
          {lang === "zh" && (
            <span data-wechat-qr className="flex items-center gap-2">
              {siteConfig.wechatQrImage ? (
                // eslint-disable-next-line @next/next/no-img-element -- static QR image, no optimization needed
                <img src={siteConfig.wechatQrImage} alt={dict.wechatLabel} className="h-16 w-16" />
              ) : (
                <span className="flex h-16 w-16 items-center justify-center rounded border border-dashed border-border text-center text-[10px] leading-tight">
                  {dict.wechatQrPlaceholder}
                </span>
              )}
              <span>{dict.wechatLabel}</span>
            </span>
          )}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            {dict.githubLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
