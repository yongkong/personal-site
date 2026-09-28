import type { Metadata } from "next";

import { DocumentShell } from "@/components/document-shell";
import { getDictionary } from "@/lib/i18n";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.siteTitle,
  description: dict.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DocumentShell lang="en">{children}</DocumentShell>;
}
