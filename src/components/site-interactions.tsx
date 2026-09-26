"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  ["Home", "#home"],
  ["Work", "#work"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <button className="mobile-menu-button" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
        <span className={open ? "menu-lines menu-lines-open" : "menu-lines"}><i/><i/></span>
      </button>
      <AnimatePresence>
        {open && <motion.nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .2 }}>
          <div className="mobile-nav-top"><span>Navigate</span><button type="button" aria-label="Close navigation menu" onClick={() => setOpen(false)}><X size={18}/></button></div>
          <div className="mobile-nav-links">{navItems.map(([label, href], i) => <a href={href} key={href} onClick={() => setOpen(false)}><span><small>0{i + 1}</small>{label}</span><ArrowRight size={18}/></a>)}</div>
          <p>Based in Jabalpur · Working across India & beyond</p>
        </motion.nav>}
      </AnimatePresence>
    </>
  );
}

export function ScrollReveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .55, ease: [0.22, 1, 0.36, 1], delay }}>{children}</motion.div>;
}
