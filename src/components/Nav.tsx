const links = [
  { href: "#about", label: "About Me" },
  { href: "#connect", label: "Connect" },
  { href: "https://www.linkedin.com/in/vedant-damedhar", label: "LinkedIn", external: true },
];

export function Nav() {
  return (
    <header className="relative z-30">
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="font-serif text-lg tracking-tight">
          Vedant Damedhar
        </a>
        <nav className="flex items-center gap-6 md:gap-10 text-sm text-muted-foreground">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              className="hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
