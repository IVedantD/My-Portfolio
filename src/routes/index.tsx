import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vedant Damedhar — Full Stack Developer" },
      {
        name: "description",
        content:
          "Vedant Damedhar — full-stack developer in Pune. Web, mobile and AI products built with React, FastAPI, Node and Flutter.",
      },
      { property: "og:title", content: "Vedant Damedhar — Full Stack Developer" },
      { property: "og:description", content: "Web, mobile and AI products. Built in Pune." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700;900&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

const experiences = [
  {
    period: "2026 →",
    role: "Full Stack Web Developer Intern",
    org: "The Red Arc",
    place: "Remote",
    points: [
      "AI-powered chatbot for the DataDeck platform, handling real-time queries via backend APIs.",
      "Automated job-assignment system distributing tasks by defined logic.",
      "Backend data handling on MySQL — storage, retrieval, processing.",
    ],
  },
  {
    period: "Apr — Jun 25",
    role: "Software Developer Intern",
    org: "Softtrain Solution Pvt. Ltd",
    place: "Pune",
    points: [
      "Led frontend of E3L Flutter app — UI perf +20%, load time −15%.",
      "Designed advanced UI components & animations — engagement +12%.",
      "Drove cross-team alignment — efficiency +18%.",
    ],
  },
];

const projects = [
  {
    n: "01",
    name: "PDFNectar.ai",
    tag: "FULL-STACK RAG",
    year: "2025",
    blurb:
      "A Retrieval-Augmented Generation platform that chunks and summarizes long PDFs in multiple languages — Groq LLM, HuggingFace embeddings, MongoDB Atlas Vector Search.",
    stack: ["React", "FastAPI", "MongoDB", "Supabase", "Groq", "HuggingFace"],
  },
  {
    n: "02",
    name: "Medicare",
    tag: "HEALTHCARE PLATFORM",
    year: "2025",
    blurb:
      "Full-stack healthcare app — RBAC for Patients, Doctors, Admins. JWT + bcrypt auth. Automated appointment scheduling with Twilio SMS / WhatsApp.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Twilio"],
  },
  {
    n: "03",
    name: "E3L Mobile",
    tag: "FLUTTER · ANDROID & iOS",
    year: "2025",
    blurb:
      "Production Flutter mobile app. Intricate UI components, dynamic layouts and animations mirroring the brand's visual identity.",
    stack: ["Flutter", "Dart", "Android", "iOS"],
  },
];

const stack: Record<string, string[]> = {
  LANGUAGES: ["JavaScript", "TypeScript", "Python", "Java", "Dart", "C/C++"],
  FRONTEND: ["React", "Angular", "Tailwind CSS", "HTML5", "CSS3"],
  BACKEND: ["Node.js", "Express", "FastAPI"],
  DATA: ["MySQL", "MongoDB Atlas", "Firebase", "SQLite"],
  "AI / ML": ["RAG", "LLM Integration", "Gemini API", "Vector Embeddings"],
  TOOLS: ["Git", "GitHub Actions", "Postman", "REST APIs"],
};

const marqueeWords = [
  "FULL-STACK",
  "AI / RAG",
  "REACT",
  "FASTAPI",
  "FLUTTER",
  "NODE.JS",
  "MONGODB",
  "DESIGN-MINDED",
  "BUILDS IN PUNE",
];

function Index() {
  return (
    <div id="top" className="relative">
      <Nav />

      {/* HERO */}
      <section className="pt-28 pb-12 border-b border-ink">
        {/* Top meta row */}
        <div className="mx-auto max-w-[1400px] px-6 grid grid-cols-12 gap-6 font-mono text-[11px] uppercase tracking-[0.2em] pb-8 border-b border-ink/30">
          <div className="col-span-3">Vol. 01 — Portfolio</div>
          <div className="col-span-3">Pune · Maharashtra · IN</div>
          <div className="col-span-3">MCA · Dr. D. Y. Patil</div>
          <div className="col-span-3 text-right flex items-center justify-end gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Available 2026
          </div>
        </div>

        {/* MASSIVE TYPE */}
        <div className="mx-auto max-w-[1400px] px-6 pt-12">
          <h1 className="font-display font-black uppercase leading-[0.82] text-[18vw] md:text-[14vw] text-balance">
            VEDANT<br />
            DAMEDHAR<span className="text-accent">.</span>
          </h1>
        </div>

        {/* lower hero grid */}
        <div className="mx-auto max-w-[1400px] px-6 pt-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-3">
              ▍ Currently
            </p>
            <p className="text-xl md:text-2xl font-medium leading-snug">
              Building <span className="marker-underline">AI-native, full-stack products</span> — web, mobile, and everything sticky in between.
            </p>
          </div>

          <div className="hidden md:block md:col-span-2" />

          <div className="col-span-12 md:col-span-5 md:border-l border-ink md:pl-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-3">▍ Index</p>
            <ul className="font-mono text-sm space-y-1.5">
              <li className="flex justify-between border-b border-ink/30 pb-1.5">
                <a href="#work" className="hover:text-accent">01 — Selected work</a><span>03</span>
              </li>
              <li className="flex justify-between border-b border-ink/30 pb-1.5">
                <a href="#experience" className="hover:text-accent">02 — Experience</a><span>02</span>
              </li>
              <li className="flex justify-between border-b border-ink/30 pb-1.5">
                <a href="#stack" className="hover:text-accent">03 — Stack</a><span>06</span>
              </li>
              <li className="flex justify-between">
                <a href="#contact" className="hover:text-accent">04 — Contact</a><span>↗</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-b border-ink bg-ink text-paper overflow-hidden py-5">
        <div className="marquee font-display font-black uppercase text-3xl md:text-5xl">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="flex items-center gap-12">
              {w}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT slab */}
      <section className="border-b border-ink">
        <div className="mx-auto max-w-[1400px] px-6 py-24 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em]">§ 00</p>
            <h2 className="mt-3 font-display font-black uppercase text-4xl leading-none">About<span className="text-accent">.</span></h2>
          </div>
          <div className="col-span-12 md:col-span-9 md:border-l border-ink md:pl-10">
            <p className="font-display text-3xl md:text-5xl font-medium leading-[1.05] text-balance">
              I'm Vedant — a full-stack developer who likes <span className="marker-underline">shipping things</span>. Currently an MCA student at Dr. D. Y. Patil and a Full Stack Developer Intern at The Red Arc.
            </p>
            <p className="mt-8 text-lg max-w-2xl text-foreground/80 leading-relaxed">
              I spend most of my time gluing React frontends to FastAPI / Node backends, plumbing LLMs into real product surfaces, and occasionally pulling Flutter apps into shape. Calm interfaces. Code that's kind to the next person reading it. That's the whole pitch.
            </p>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="border-b border-ink">
        <SectionHead n="01" title="Selected work" right="03 projects" />
        <div className="mx-auto max-w-[1400px] px-6">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group grid grid-cols-12 gap-6 py-10 border-t border-ink hover:bg-ink hover:text-paper transition-colors cursor-default"
            >
              <div className="col-span-2 font-mono text-sm">
                <p>{p.n}</p>
                <p className="mt-1 opacity-60">{p.year}</p>
              </div>
              <div className="col-span-12 md:col-span-7 order-3 md:order-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{p.tag}</p>
                <h3 className="mt-2 font-display font-black uppercase text-5xl md:text-7xl leading-[0.9]">
                  {p.name}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-relaxed opacity-90">{p.blurb}</p>
              </div>
              <div className="col-span-10 md:col-span-3 order-2 md:order-3 flex md:justify-end items-start">
                <div className="flex flex-wrap gap-1.5 md:justify-end">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] uppercase tracking-widest px-2 py-1 border border-current"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-b border-ink">
        <SectionHead n="02" title="Experience" right="02 roles" />
        <div className="mx-auto max-w-[1400px] px-6">
          {experiences.map((e) => (
            <div key={e.org} className="grid grid-cols-12 gap-6 py-12 border-t border-ink">
              <div className="col-span-12 md:col-span-3 font-mono text-sm uppercase tracking-widest">
                <p>{e.period}</p>
                <p className="mt-1 opacity-60">{e.place}</p>
              </div>
              <div className="col-span-12 md:col-span-9 md:border-l border-ink md:pl-10">
                <h3 className="font-display font-black uppercase text-3xl md:text-5xl leading-[0.95]">
                  {e.org}
                </h3>
                <p className="mt-2 font-mono text-sm uppercase tracking-widest">{e.role}</p>
                <ul className="mt-6 space-y-2.5 max-w-2xl">
                  {e.points.map((pt) => (
                    <li key={pt} className="pl-6 relative leading-relaxed">
                      <span className="absolute left-0 top-2.5 w-3 h-px bg-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="border-b border-ink">
        <SectionHead n="03" title="Stack" right="Toolbox" />
        <div className="mx-auto max-w-[1400px] px-6 grid grid-cols-2 md:grid-cols-3">
          {Object.entries(stack).map(([cat, items], i) => (
            <div
              key={cat}
              className={`p-8 border-t border-ink ${i % 3 !== 0 ? "md:border-l" : ""} ${
                i % 2 !== 0 ? "border-l md:border-l" : ""
              }`}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{cat}</p>
              <ul className="mt-4 space-y-1.5">
                {items.map((it) => (
                  <li key={it} className="font-display text-xl md:text-2xl font-medium">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-b border-ink">
        <SectionHead n="04" title="Contact" right="Say hi" />
        <div className="mx-auto max-w-[1400px] px-6 py-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] mb-6">▍ Open for</p>
            <h3 className="font-display font-black uppercase text-5xl md:text-8xl leading-[0.88] text-balance">
              Internships,<br />
              freelance,<br />
              <span className="marker-underline">collabs.</span>
            </h3>
            <a
              href="mailto:damedharvedant1@gmail.com"
              className="mt-10 inline-block font-mono text-lg md:text-xl underline underline-offset-4 hover:text-accent"
            >
              damedharvedant1@gmail.com ↗
            </a>
          </div>

          <div className="col-span-12 md:col-span-5 md:border-l border-ink md:pl-10">
            <Row label="Email" value="damedharvedant1@gmail.com" href="mailto:damedharvedant1@gmail.com" />
            <Row label="Phone" value="+91 81492 05703" href="tel:+918149205703" />
            <Row label="GitHub" value="@IVedantD" href="https://github.com/IVedantD" />
            <Row label="LinkedIn" value="/in/vedant-damedhar" href="https://www.linkedin.com/" />
            <Row label="Location" value="Pune, MH, India" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="mx-auto max-w-[1400px] px-6 py-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Vedant Damedhar · All rights, no wrongs.</p>
          <p>Designed & built from scratch in Pune.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ n, title, right }: { n: string; title: string; right: string }) {
  return (
    <div className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em]">
        <span>§ {n} / {title}</span>
        <span className="text-accent">{right} ●</span>
      </div>
    </div>
  );
}

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="grid grid-cols-12 gap-3 py-3 border-b border-ink group">
      <span className="col-span-4 font-mono text-[11px] uppercase tracking-[0.2em] pt-1">
        {label}
      </span>
      <span className="col-span-8 font-display text-lg md:text-xl group-hover:text-accent transition-colors break-words">
        {value}
      </span>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  ) : inner;
}
