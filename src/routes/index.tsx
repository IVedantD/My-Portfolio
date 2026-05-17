import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Orbs } from "@/components/Orbs";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vedant Damedhar — Full Stack Developer" },
      {
        name: "description",
        content:
          "Personal site of Vedant Damedhar — full stack developer building thoughtful AI, web and mobile experiences from Pune, India.",
      },
      { property: "og:title", content: "Vedant Damedhar — Full Stack Developer" },
      {
        property: "og:description",
        content: "Curious. Building out loud. Web, mobile and AI experiences.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const experiences = [
  {
    role: "Full Stack Web Developer Intern",
    org: "The Red Arc",
    period: "Jan 2026 — Present",
    place: "Remote",
    points: [
      "Built and integrated an AI-powered chatbot for the DataDeck platform to handle real-time user queries via backend APIs.",
      "Designed an automated job assignment system that distributes tasks based on defined logic to improve workflow.",
      "Managed backend data with MySQL for efficient storage, retrieval and processing.",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "Softtrain Solution Pvt. Ltd",
    period: "Apr 2025 — Jun 2025",
    place: "Pune, MH",
    points: [
      "Led frontend of the E3L Flutter app — optimized UI performance by 20% and reduced load times by 15%.",
      "Built advanced UI components and animations, lifting user engagement by 12%.",
      "Partnered with backend devs and stakeholders to align features and drive an 18% efficiency increase.",
    ],
  },
];

const projects = [
  {
    name: "PDFNectar.ai",
    tag: "Full-stack RAG · AI Summarizer",
    blurb:
      "A Retrieval-Augmented Generation platform that semantically chunks and summarizes long PDFs in multiple languages using Groq LLM, HuggingFace embeddings and MongoDB Atlas Vector Search.",
    stack: ["React", "FastAPI", "MongoDB Atlas", "Supabase", "Groq", "HuggingFace"],
    tint: "var(--peach)",
  },
  {
    name: "Medicare",
    tag: "Healthcare Management",
    blurb:
      "Full-stack platform with role-based access for Patients, Doctors and Admins. JWT auth, bcrypt, automated appointment scheduling with Twilio SMS/WhatsApp notifications.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Twilio", "Tailwind"],
    tint: "var(--sky)",
  },
  {
    name: "E3L Mobile App",
    tag: "Flutter · Android & iOS",
    blurb:
      "Production mobile app built in Flutter — designed intricate UI components, dynamic layouts and animations mirroring the brand's visual language.",
    stack: ["Flutter", "Dart", "Android", "iOS"],
    tint: "var(--sage)",
  },
];

const skills = {
  Languages: ["JavaScript", "Python", "Java", "Dart", "C/C++"],
  Frontend: ["React.js", "Angular", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express.js", "FastAPI"],
  Databases: ["MySQL", "MongoDB Atlas", "Firebase", "SQLite"],
  "AI / ML": ["RAG", "LLM Integration", "Vector Embeddings", "Gemini API"],
  Tools: ["Git", "GitHub Actions", "Postman", "REST APIs"],
};

function Index() {
  return (
    <div id="top" className="relative min-h-screen">
      <Orbs />
      <Nav />

      {/* HERO */}
      <section className="pt-40 pb-24 px-6">
        <div className="mx-auto max-w-5xl">
          <span className="chip">Personal Space</span>
          <h1 className="mt-6 font-script text-6xl md:text-8xl text-foreground leading-[0.95]">
            Hello, I'm <span className="text-primary">Vedant</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground text-balance">
            Curious. Building out loud. Crafting full-stack web, mobile and AI experiences — one
            small, thoughtful detail at a time.
          </p>
          <div className="mt-8 divider-accent" />
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>📍 Pune, India</span>
            <span className="opacity-40">·</span>
            <a href="mailto:damedharvedant1@gmail.com" className="hover:text-foreground transition-colors">
              damedharvedant1@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="mx-auto max-w-5xl grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">About me</h2>
            <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Hi, I'm Vedant — a developer who likes the quiet satisfaction of making messy ideas
                work. I study a Master of Computer Applications at Dr. D. Y. Patil Center,
                and most days I'm somewhere between a React component and a FastAPI endpoint.
              </p>
              <p>
                I started out curious about how things on a screen come alive. That curiosity grew
                into a habit of shipping — small apps, side projects, the kind of late-night builds
                where you learn three new things by morning.
              </p>
              <p>
                Lately I'm spending a lot of time with AI tooling — RAG pipelines, vector search,
                glueing LLMs to real product surfaces. I care about interfaces that feel calm and
                code that's kind to the next person reading it.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="font-display text-xl text-foreground">A few things I enjoy</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>— Designing small, considered UI details</li>
                <li>— Tinkering with new AI APIs on weekends</li>
                <li>— Reading documentation like it's a short story</li>
                <li>— Long walks where ideas untangle themselves</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative rounded-3xl bg-card border border-border p-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.15)]">
              <img
                src={portrait}
                alt="Soft pastel composition representing Vedant"
                width={1024}
                height={1280}
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Experience</h2>
          <div className="mt-12 space-y-10">
            {experiences.map((e) => (
              <article
                key={e.org}
                className="grid md:grid-cols-12 gap-6 pb-10 border-b border-border last:border-b-0"
              >
                <div className="md:col-span-4">
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">
                    {e.period}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-foreground">{e.org}</h3>
                  <p className="text-sm text-muted-foreground">{e.place}</p>
                </div>
                <div className="md:col-span-8">
                  <p className="font-medium text-foreground">{e.role}</p>
                  <ul className="mt-3 space-y-2 text-muted-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="pl-4 relative">
                        <span
                          className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full"
                          style={{ background: "var(--peach)" }}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Selected work</h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            A small handful of projects I've enjoyed building.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article
                key={p.name}
                className="group relative overflow-hidden rounded-3xl bg-card border border-border p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.2)]"
              >
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                  style={{ background: p.tint, filter: "blur(8px)" }}
                />
                <div className="relative">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</p>
                  <h3 className="mt-2 font-display text-2xl text-foreground">{p.name}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{p.blurb}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
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

      {/* SKILLS */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Toolbox</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="rounded-2xl border border-border bg-card/60 p-6">
                <h3 className="font-display text-lg text-foreground">{cat}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((i) => (
                    <span key={i} className="chip">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section id="connect" className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Let's connect</h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Curious conversations, collaborations, internships, or just a quiet hello —
            my inbox is open.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            <a
              href="mailto:damedharvedant1@gmail.com"
              className="group rounded-2xl border border-border bg-card p-6 hover:border-accent transition-colors"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
              <p className="mt-2 font-display text-lg text-foreground group-hover:text-accent transition-colors">
                damedharvedant1@gmail.com
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/vedantd"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-border bg-card p-6 hover:border-accent transition-colors"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</p>
              <p className="mt-2 font-display text-lg text-foreground group-hover:text-accent transition-colors">
                /in/vedantd →
              </p>
            </a>
            <a
              href="https://github.com/IVedantD"
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-border bg-card p-6 hover:border-accent transition-colors"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground">GitHub</p>
              <p className="mt-2 font-display text-lg text-foreground group-hover:text-accent transition-colors">
                @IVedantD →
              </p>
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-border text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Vedant Damedhar. Built with care.</p>
            <p className="font-script text-base">still figuring things out — and loving it.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
