import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors ${
        scrolled ? "bg-background border-ink" : "bg-background/80 backdrop-blur border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-display text-base font-black tracking-tight">
          VEDANT<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.2em]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:damedharvedant1@gmail.com"
          className="font-mono text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 border border-ink hover-bg-ink"
        >
          Hire me ↗
        </a>
      </div>
    </header>
  );
}
