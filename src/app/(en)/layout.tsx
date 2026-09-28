import type { Metadata } from "next";

import { DocumentShell } from "@/components/document-shell";
import { getDictionary } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

const dict = getDictionary("en");

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: dict.siteTitle,
  description: dict.siteDescription,
  openGraph: {
    title: dict.siteTitle,
    description: dict.siteDescription,
    type: "website",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: dict.siteTitle }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DocumentShell lang="en">{children}</DocumentShell>;
}
