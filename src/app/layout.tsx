import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./site.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING?.toLowerCase() === "true";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
let siteUrl: URL | undefined;
if (configuredSiteUrl) {
  const parsed = new URL(configuredSiteUrl);
  const isLocalHttp = parsed.protocol === "http:" && ["localhost", "127.0.0.1"].includes(parsed.hostname);
  if ((!isLocalHttp && parsed.protocol !== "https:") || parsed.pathname !== "/" || parsed.search || parsed.hash || parsed.username || parsed.password) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be a site origin using HTTPS (HTTP is allowed on localhost). Set it without a path, query, or trailing slash.");
  }
  siteUrl = parsed;
}
const metadataBase = siteUrl ?? new URL("http://localhost:3000");

export const metadata: Metadata = {
  metadataBase,
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  title: {
    default: "Zero One — Websites for local businesses",
    template: "%s | Zero One",
  },
  description:
    "Zero One designs and develops modern websites for local businesses. Based in Jabalpur, working across India and beyond.",
  applicationName: "Zero One",
  keywords: ["web design", "web development", "Jabalpur", "small business websites", "India"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Zero One",
    title: "Zero One — Websites for local businesses",
    description: "Modern websites that help local businesses look professional and get contacted.",
    ...(siteUrl ? { url: siteUrl.toString() } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero One — Websites for local businesses",
    description: "Modern websites that help local businesses look professional and get contacted.",
  },
  robots: { index: allowIndexing, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body><a className="skip-link" href="#main-content">Skip to content</a>{children}</body>
    </html>
  );
}
