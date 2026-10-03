const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#connect", label: "Connect" },
];

export function Nav() {
  return (
    <header className="relative z-30 border-b border-border/60 bg-background/75 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 md:h-20 md:flex-row md:items-center md:justify-between md:gap-8 md:px-10 md:py-0">
        <a href="#top" className="shrink-0 font-serif text-lg">
          Vedant Damedhar
        </a>
        <nav aria-label="Main navigation" className="no-scrollbar flex w-full items-center gap-5 overflow-x-auto pb-1 text-sm text-muted-foreground md:w-auto md:gap-7 md:pb-0">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="shrink-0 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
