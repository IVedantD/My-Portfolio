import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vedant Damedhar — Full Stack Developer" },
      {
        name: "description",
        content:
          "Vedant Damedhar — full-stack developer in Pune building AI, web and mobile products with React, FastAPI, Node and Flutter.",
      },
      { property: "og:title", content: "Vedant Damedhar — Full Stack Developer" },
      {
        property: "og:description",
        content: "Building thoughtful AI, web and mobile products.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

const experiences = [
  {
    period: "2026 — Now",
    role: "Full Stack Web Developer Intern",
    org: "The Red Arc",
    place: "Remote",
    points: [
      "Built an AI-powered chatbot for the DataDeck platform handling real-time queries via backend APIs.",
      "Designed an automated job-assignment system that distributes tasks by defined logic.",
      "Owned backend data handling on MySQL for efficient storage, retrieval and processing.",
    ],
  },
  {
    period: "Apr — Jun 2025",
    role: "Software Developer Intern",
    org: "Softtrain Solution Pvt. Ltd",
    place: "Pune, MH",
    points: [
      "Led frontend of the E3L Flutter app — UI perf +20%, load times −15%.",
      "Built advanced UI components and animations, lifting engagement by 12%.",
      "Aligned with backend and stakeholders to drive an 18% efficiency gain.",
    ],
  },
];

const projects = [
  {
    n: "01",
    name: "PDFNectar.ai",
    tag: "Full-stack RAG · AI Summarizer",
    blurb:
      "Retrieval-Augmented Generation platform that chunks and summarizes long PDFs in multiple languages using Groq LLM, HuggingFace embeddings and MongoDB Atlas Vector Search.",
    stack: ["React", "FastAPI", "MongoDB Atlas", "Supabase", "Groq", "HuggingFace"],
    year: "2025",
  },
  {
    n: "02",
    name: "Medicare",
    tag: "Healthcare Management",
    blurb:
      "Full-stack platform with role-based access for Patients, Doctors and Admins. JWT + bcrypt auth, automated appointment scheduling with Twilio SMS / WhatsApp.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Twilio", "Tailwind"],
    year: "2025",
  },
  {
    n: "03",
    name: "E3L Mobile App",
    tag: "Flutter · Android & iOS",
    blurb:
      "Production mobile app in Flutter — intricate UI components, dynamic layouts and animations mirroring the brand's visual language.",
    stack: ["Flutter", "Dart", "Android", "iOS"],
    year: "2025",
  },
];

const stack = {
  Languages: ["JavaScript", "TypeScript", "Python", "Java", "Dart", "C/C++"],
  Frontend: ["React", "Angular", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express", "FastAPI"],
  Data: ["MySQL", "MongoDB Atlas", "Firebase", "SQLite"],
  "AI / ML": ["RAG", "LLM Integration", "Gemini API", "Vector Embeddings"],
  Tools: ["Git", "GitHub Actions", "Postman", "REST APIs"],
};

const marqueeItems = [
  "React", "FastAPI", "Node.js", "Flutter", "MongoDB", "Python",
  "RAG", "TypeScript", "Tailwind", "Supabase", "Groq", "MySQL",
];

function Index() {
  return (
    <div id="top" className="relative min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="relative pt-40 pb-32 px-6">
        <div aria-hidden className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-6xl">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground flex items-center gap-3">
            <span className="badge-dot">Available for opportunities</span>
            <span className="opacity-40">·</span>
            <span>Pune, India</span>
          </div>

          <h1 className="font-display mt-8 text-5xl sm:text-6xl md:text-8xl font-semibold leading-[0.95] text-balance">
            Full-stack developer
            <br />
            <span className="text-muted-foreground">building </span>
            <span className="text-primary">AI-native</span>
            <span className="text-muted-foreground"> products.</span>
          </h1>

          <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground">Vedant Damedhar</span> — I design and ship
            full-stack web, mobile and AI experiences. Currently a Full Stack Developer Intern at
            The Red Arc, and an MCA student at Dr. D. Y. Patil.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow-ring"
            >
              View my work
              <span aria-hidden>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              Get in touch
            </a>
          </div>

          {/* terminal-ish identity card */}
          <div className="mt-20 max-w-2xl card-surface overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/40">
              <span className="w-3 h-3 rounded-full bg-destructive/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">~ whoami</span>
            </div>
            <div className="px-5 py-5 font-mono text-sm leading-7">
              <p><span className="text-muted-foreground">$</span> name <span className="text-primary">→</span> Vedant Damedhar</p>
              <p><span className="text-muted-foreground">$</span> role <span className="text-primary">→</span> Full-Stack Developer (Web · Mobile · AI)</p>
              <p><span className="text-muted-foreground">$</span> stack <span className="text-primary">→</span> React, FastAPI, Node, Flutter, MongoDB</p>
              <p><span className="text-muted-foreground">$</span> currently <span className="text-primary">→</span> shipping RAG & full-stack at The Red Arc</p>
              <p>
                <span className="text-muted-foreground">$</span> status <span className="text-primary">→</span>{" "}
                <span className="text-foreground">open to internships & collabs</span>
                <span className="ml-1 inline-block w-2 h-4 align-middle bg-primary animate-pulse" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-10 border-y border-border bg-background/40 overflow-hidden">
        <div className="marquee font-mono text-sm text-muted-foreground uppercase tracking-widest">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-12">
              {item}
              <span className="w-1 h-1 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader index="01" title="Selected work" />

          <div className="mt-16 space-y-4">
            {projects.map((p) => (
              <article
                key={p.name}
                className="group card-surface p-7 md:p-10 transition-all duration-500 hover:border-primary/50 hover:-translate-y-0.5"
              >
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-2 font-mono text-sm text-muted-foreground">
                    <p>{p.n}</p>
                    <p className="mt-1 opacity-60">{p.year}</p>
                  </div>
                  <div className="md:col-span-7">
                    <p className="font-mono text-xs uppercase tracking-widest text-primary">
                      {p.tag}
                    </p>
                    <h3 className="mt-2 font-display text-3xl md:text-4xl font-semibold">
                      {p.name}
                    </h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
                      {p.blurb}
                    </p>
                  </div>
                  <div className="md:col-span-3 flex flex-wrap gap-1.5 md:justify-end">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] px-2 py-1 rounded border border-border text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader index="02" title="Experience" />

          <div className="mt-16 grid md:grid-cols-12 gap-x-8">
            {experiences.map((e, idx) => (
              <div key={e.org} className="md:col-span-12 grid md:grid-cols-12 gap-x-8 py-10 border-t border-border">
                <div className="md:col-span-3">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {e.period}
                  </p>
                  <p className="mt-2 font-mono text-xs text-muted-foreground/70">{String(idx + 1).padStart(2, "0")}</p>
                </div>
                <div className="md:col-span-9 mt-4 md:mt-0">
                  <h3 className="font-display text-2xl font-semibold">
                    {e.role} <span className="text-muted-foreground">@ {e.org}</span>
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {e.place}
                  </p>
                  <ul className="mt-5 space-y-2.5 text-muted-foreground max-w-2xl">
                    {e.points.map((pt) => (
                      <li key={pt} className="pl-5 relative leading-relaxed">
                        <span className="absolute left-0 top-2.5 w-2 h-px bg-primary" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader index="03" title="Stack" />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {Object.entries(stack).map(([cat, items]) => (
              <div key={cat} className="bg-background p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-primary">{cat}</p>
                <ul className="mt-4 space-y-1.5">
                  {items.map((i) => (
                    <li key={i} className="font-mono text-sm text-foreground/85">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader index="04" title="Contact" />

          <div className="mt-16 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <h3 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
                Have a project in mind, or just want to{" "}
                <span className="text-primary">say hi?</span>
              </h3>
              <a
                href="mailto:damedharvedant1@gmail.com"
                className="mt-8 inline-block font-mono text-lg md:text-xl text-foreground link-underline"
              >
                damedharvedant1@gmail.com →
              </a>
            </div>

            <div className="md:col-span-5 space-y-3">
              <ContactRow label="Email" value="damedharvedant1@gmail.com" href="mailto:damedharvedant1@gmail.com" />
              <ContactRow label="Phone" value="+91 81492 05703" href="tel:+918149205703" />
              <ContactRow label="GitHub" value="@IVedantD" href="https://github.com/IVedantD" />
              <ContactRow label="LinkedIn" value="/in/vedant-damedhar" href="https://www.linkedin.com/" />
              <ContactRow label="Location" value="Pune, Maharashtra, India" />
            </div>
          </div>

          <div className="hairline mt-24" />
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <p>© {new Date().getFullYear()} Vedant Damedhar</p>
            <p>Designed & built from scratch.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-border pb-4">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-primary">[{index}]</span>
        <h2 className="font-display text-2xl md:text-3xl font-semibold">{title}</h2>
      </div>
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        — scroll
      </span>
    </div>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center justify-between py-3 border-b border-border group">
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
        {value}
      </span>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}
