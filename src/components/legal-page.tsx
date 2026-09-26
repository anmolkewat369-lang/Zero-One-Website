import type { ReactNode } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="legal-shell">
      <header className="legal-header">
        <div className="container legal-header-inner">
          <Link href="/" aria-label="Zero One home"><Logo /></Link>
          <nav aria-label="Legal page navigation"><Link href="/">Home</Link><Link href="/#contact">Contact</Link></nav>
        </div>
      </header>
      <main id="main-content" className="container legal-main">
        <p className="eyebrow">ZERO ONE · JABALPUR, INDIA</p>
        <h1>{title}</h1>
        <p className="legal-updated">Last updated 25 September 2026</p>
        <article className="legal-copy">{children}</article>
      </main>
      <footer className="legal-footer"><div className="container"><span>© {new Date().getFullYear()} Zero One</span><nav aria-label="Legal pages"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav></div></footer>
    </div>
  );
}
