import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Button } from "@/components/ui/button";
import doodlesBg from "@/assets/doodles-bg.jpg";

const projects = [
  {
    name: "PDFNectar.ai",
    type: "AI document companion",
    description:
      "A full-stack document intelligence platform that turns long PDFs into searchable knowledge and delivers context-aware answers in real time.",
    highlights: [
      "Built a fault-tolerant Python and FastAPI pipeline for document extraction, vector embeddings, and semantic search.",
      "Moved heavy embedding workloads to cloud inference and combined session management with vector search to resolve memory crashes during large-file processing.",
    ],
    stack: ["Python", "FastAPI", "React", "TypeScript", "MongoDB Atlas", "Supabase", "RAG", "Groq API"],
  },
  {
    name: "Medicare",
    type: "Healthcare management",
    description:
      "A role-based healthcare platform for patients, doctors, and administrators, bringing appointments, secure access, and timely notifications into one place.",
    highlights: [
      "Secured role-based user sessions with JWT authentication and bcrypt.",
      "Automated appointment scheduling and connected it to timely notification delivery.",
    ],
    stack: ["Java", "React", "Node.js", "Express", "MongoDB", "REST APIs", "JWT Auth"],
  },
  {
    name: "The Green Table",
    type: "Dining and reservations",
    description:
      "A full-stack dining and reservations platform designed around concurrent orders, reliable state updates, secure sessions, and fast data retrieval during busy periods.",
    highlights: [
      "Applied object-oriented design to manage concurrent booking flows and prevent state conflicts.",
      "Designed indexed database queries to keep response times low under heavier traffic.",
    ],
    stack: ["Node.js", "Express.js", "MySQL", "Sequelize / Prisma ORM", "System Design", "RESTful APIs"],
  },
  {
    name: "Pet-Shop Platform",
    type: "Full-stack e-commerce",
    description:
      "A modern pet commerce platform with a seamless product catalogue, fast server-rendered pages, and synchronized state across the client and database.",
    highlights: [
      "Used the Next.js App Router to deliver server-rendered page loading and stronger search visibility.",
      "Architected REST APIs for inventory routing and structured MongoDB schemas for order transactions.",
    ],
    stack: ["Next.js", "React", "Node.js", "Express", "Tailwind CSS", "MongoDB"],
  },
  {
    name: "E3L Application",
    type: "Mobile learning ecosystem",
    description:
      "A cross-platform education app built around video delivery, interactive learning flows, and a fast, dependable mobile experience.",
    highlights: [
      "Refactored state management and asset loading to cut initial UI load times by 15% and improve runtime speed by 20%.",
      "Integrated asynchronous APIs for real-time course tracking and user authentication.",
    ],
    stack: ["Flutter", "Dart", "REST APIs", "Provider", "GetX"],
  },
  {
    name: "Weather App",
    type: "Real-time forecast analytics",
    description:
      "A responsive weather app that turns live location, hourly forecast, and atmospheric data into a clear experience across devices.",
    highlights: [
      "Implemented asynchronous third-party data fetching with clear error states for unreliable networks.",
      "Built dynamic weather visualizations with modular interface components and responsive grid layouts.",
    ],
    stack: ["JavaScript", "React", "Node.js", "OpenWeather API", "Tailwind CSS", "REST APIs"],
  },
  {
    name: "Pig Game & Guess My Number",
    type: "Interactive browser games",
    description:
      "Two zero-dependency browser games exploring JavaScript algorithms, direct DOM updates, state logic, and responsive interactions.",
    highlights: [
      "Designed game-state logic for score persistence, turn validation, and immediate interface updates.",
      "Optimized event listeners and CSS transitions to keep interactions smooth at 60 frames per second.",
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "DOM API"],
  },
];

const skillGroups = [
  { title: "Languages", items: ["Java", "C / C++", "Python", "JavaScript", "TypeScript", "Dart"] },
  { title: "Frontend", items: ["React", "Next.js", "HTML & CSS", "Tailwind CSS", "Radix UI", "Redux", "Flutter"] },
  { title: "Backend", items: ["Node.js", "Express", "FastAPI", "REST APIs", "System Design", "OOD & DSA", "Distributed Systems", "Multithreading"] },
  { title: "Data", items: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Redis", "Vector Search", "Database Indexing"] },
  { title: "AI & ML", items: ["RAG", "Gemini API", "Groq API", "HuggingFace", "Vector Embeddings"] },
  { title: "Tools & DevOps", items: ["Git", "Docker", "GitHub Actions", "Render", "API Integration"] },
];

const certifications = [
  { name: "Programming in Java", detail: "Elite + Silver · 82%", year: "2026" },
  { name: "Cloud Computing", detail: "Elite · 65%", year: "2026" },
  { name: "Internet of Things", detail: "Elite · 60%", year: "2026" },
];

const experience = [
  {
    company: "The Red Arc",
    role: "Full Stack AI Web Developer",
    period: "Jan 2026 – Sept 2026",
    location: "Pune, Maharashtra",
    highlights: [
      "Owned 3 production platforms in parallel end to end — shaping feature roadmaps, wiring integrations, and driving each release cycle to launch.",
      "Took an AI chatbot for DataDeck from zero to production — a RAG pipeline on FastAPI and the Gemini API that ingests long financial and corporate PDFs and turns them into instant answers for executive decisions.",
      "Engineered an automated job-assignment and task-dispatch engine with custom backend routing logic, so work keeps moving without a human middleman.",
      "Designed MySQL and MongoDB schemas and indexing strategies that cut query latency under real traffic, behind clean, object-oriented RESTful APIs.",
      "Owned the messy parts too — debugging live production edge cases, writing unit tests, and running Docker + CI/CD pipelines all the way to cloud deployment.",
    ],
  },
  {
    company: "Softtrain Solution Pvt. Ltd",
    role: "Software Developer Intern",
    period: "Apr 2025 – Jul 2025",
    location: "Pune, Maharashtra",
    highlights: [
      "Led the cross-platform mobile frontend for the E3L app in Flutter and Dart.",
      "Reworked state management to cut load times by 15% and lift overall app performance by 20%, while helping the team ship sprint features 18% faster.",
    ],
  },
];

const experienceTakeaways = [
  "End-to-end ownership",
  "Production debugging",
  "AI & LLM integration",
  "Performance under load",
  "Agile teamwork",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vedant Damedhar — Hello" },
      {
        name: "description",
        content:
          "Hello, I'm Vedant. Builder, learner, quietly making things on the internet.",
      },
      { property: "og:title", content: "Vedant Damedhar — Hello" },
      { property: "og:description", content: "Software developer building thoughtful products across web, full stack, and AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Nunito+Sans:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const projectsScrollerRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: "previous" | "next") => {
    const scroller = projectsScrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement,
    );
    if (cards.length === 0) return;

    const currentIndex = cards.reduce((closestIndex, card, index) => {
      const currentDistance = Math.abs(cards[closestIndex].offsetLeft - scroller.scrollLeft);
      const nextDistance = Math.abs(card.offsetLeft - scroller.scrollLeft);
      return nextDistance < currentDistance ? index : closestIndex;
    }, 0);
    const offset = direction === "next" ? 1 : -1;
    const targetIndex = Math.min(Math.max(currentIndex + offset, 0), cards.length - 1);

    scroller.scrollTo({
      left: cards[targetIndex].offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <div id="top" className="relative min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage: `url(${doodlesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Nav />

      <main>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <span className="inline-block rounded-full border border-border bg-secondary/70 px-4 py-1.5 text-sm text-muted-foreground">
          Hey there 👋
        </span>
        <h1 className="mt-8 max-w-4xl font-display text-6xl leading-none text-foreground md:text-8xl">
          Hello, I'm Vedant
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          I build thoughtful software across the web, full stack, and AI—always curious, always learning, and still excited when an idea becomes real.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg"><a href="#projects">See what I've built <ArrowUpRight /></a></Button>
          <Button asChild size="lg" variant="outline"><a href="mailto:damedharvedant1@gmail.com">Say hello</a></Button>
        </div>
        <div className="divider mt-12" />
      </section>

      <section id="about" className="scroll-mt-24 border-y border-border bg-blush-soft/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="section-kicker">About</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            A small-town kid who found magic on a screen.
          </h2>

          <p className="mt-10 max-w-4xl text-xl leading-relaxed text-foreground md:text-2xl">
            I'm Vedant—born in a small town, now based in Pune, and a recent MCA graduate with a year of building real software. Somewhere along the way, I fell in love with making things on a screen, and I never quite got over it.
          </p>

          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I didn't grow up around computers. The first time I wrote a few lines of code and saw something actually happen, it felt a little bit like magic. I'm honestly still chasing that feeling. Most of what I build now starts the same way—a tiny "wait, can I make this?" that I can't put down until I've tried.
              </p>
              <p>
                Over the last year, I've worked on real products with real constraints: understanding what people need, collaborating with a team, chasing down stubborn bugs, and learning how good software takes shape beyond the first working version.
              </p>
            </div>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I don't fit neatly into one label. Some days I'm shaping an interface, some days I'm deep in an API or database, and some days I'm figuring out how AI can make a product genuinely more useful. I like being able to follow a problem wherever it leads.
              </p>
              <p>
                Outside of code, I'm usually the friend who texts at 1 AM about a song, a movie scene, or a thought that wouldn't leave me alone. I like long conversations more than long meetings, quiet mornings, loud cricket matches, and the kind of evenings where nothing is happening but everything feels okay.
              </p>
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-10">
            <h3 className="font-serif text-2xl">Small joys</h3>
            <ul className="mt-6 grid gap-x-10 gap-y-3 text-foreground/90 sm:grid-cols-2">
              <li>— Filter coffee, the kind that takes its time</li>
              <li>— Rewatching the same three films and finding something new</li>
              <li>— The first cool breeze in Pune after a long summer</li>
              <li>— Notebooks I'll probably never finish, but keep buying anyway</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 border-y border-border bg-card/55">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-24">
              <p className="section-kicker">01 · Experience</p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">A year of building real things</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                I've spent the last year taking real products from idea to production — owning features from the first requirement to the deployed, debugged, running system.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {experienceTakeaways.map((item) => (
                  <span key={item} className="rounded-full border border-border bg-secondary/70 px-3 py-1 text-xs text-muted-foreground">{item}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-8">
            <ol className="relative space-y-14 border-l border-border pl-8 md:pl-12">
              {experience.map((job) => (
                <li key={job.company} className="relative">
                  <span aria-hidden className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-accent-strong md:-left-[45px]" />
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl">{job.role}</h3>
                      <p className="mt-1 text-lg font-medium text-accent-strong">{job.company}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p className="whitespace-nowrap rounded-full border border-border bg-secondary/70 px-3 py-1">{job.period}</p>
                      <p className="mt-2">{job.location}</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-4 leading-relaxed text-foreground/90">
                    {job.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/30" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-24 md:px-10">
        <p className="section-kicker">02 · Selected work</p>
        <div className="mt-3 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <h2 className="font-serif text-3xl md:text-4xl">Things I've built</h2>
          <p className="max-w-md text-muted-foreground">A few projects where I followed the problem across interfaces, systems, data, and deployment.</p>
        </div>
        <div className="relative mt-10">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 shadow-sm sm:-left-5"
            aria-label="Previous project"
            onClick={() => scrollProjects("previous")}
          >
            <ArrowLeft />
          </Button>
          <div
            ref={projectsScrollerRef}
            className="no-scrollbar flex w-full snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain py-2"
          >
            {projects.map((project, index) => (
              <article key={project.name} className="flex min-h-[31rem] w-full shrink-0 snap-start flex-col rounded-lg border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1 sm:w-[72%] lg:w-[48%]">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-3xl text-accent-strong">0{index + 1}</span>
                  <span className="text-right text-xs font-semibold uppercase text-muted-foreground">{project.type}</span>
                </div>
                <h3 className="mt-7 font-serif text-2xl">{project.name}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.description}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-foreground/90">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  {project.stack.map((item) => <span key={item} className="rounded-full border border-border bg-secondary/70 px-3 py-1 text-xs">{item}</span>)}
                </div>
              </article>
            ))}
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/90 shadow-sm sm:-right-5"
            aria-label="Next project"
            onClick={() => scrollProjects("next")}
          >
            <ArrowRight />
          </Button>
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 border-y border-border bg-sage-soft/55">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <p className="section-kicker">03 · Tech stack</p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl md:text-4xl">Tools I reach for—and keep learning</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="border-b border-foreground/20 pb-3 font-serif text-lg">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="section-kicker">04 · Education</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">The formal part</h2>
          </div>
          <div className="divide-y divide-border border-y border-border md:col-span-7 md:col-start-6">
            <div className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:gap-6">
              <div><h3 className="font-serif text-xl">Master of Computer Applications</h3><p className="mt-1 text-sm text-muted-foreground">Dr. D. Y. Patil Center for Management & Research · Pune</p></div>
              <div className="text-sm sm:text-right"><p>2024–2026</p><p className="text-muted-foreground">CGPA 8.16</p></div>
            </div>
            <div className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:gap-6">
              <div><h3 className="font-serif text-xl">Bachelor of Computer Applications</h3><p className="mt-1 text-sm text-muted-foreground">Brijlal Biyani Science College · Amravati</p></div>
              <div className="text-sm sm:text-right"><p>2021–2024</p><p className="text-muted-foreground">CGPA 7.8</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="scroll-mt-24 border-y border-border bg-blush-soft/50">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
          <p className="section-kicker">05 · Certifications</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">A little more learning</h2>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {certifications.map((certificate, index) => (
              <div key={certificate.name} className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr_auto_auto] sm:items-center sm:gap-6">
                <span className="hidden font-display text-2xl text-accent-strong sm:block">0{index + 1}</span>
                <div><h3 className="font-serif text-xl">{certificate.name}</h3><p className="text-sm text-muted-foreground">NPTEL · IIT Kharagpur</p></div>
                <p className="text-sm">{certificate.detail}</p>
                <p className="text-sm text-muted-foreground">{certificate.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="connect" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="max-w-2xl">
          <p className="section-kicker">06 · Connect</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Have an idea, a question, or just want to say hello?</h2>
          <p className="mt-5 text-muted-foreground">I'm always happy to meet thoughtful people and hear about interesting problems. Pick whichever corner of the internet suits you.</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild><a href="mailto:damedharvedant1@gmail.com"><Mail /> Email me</a></Button>
          <Button asChild variant="outline"><a href="https://www.linkedin.com/in/vedant-damedhar" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a></Button>
          <Button asChild variant="outline"><a href="https://github.com/IVedantD" target="_blank" rel="noreferrer"><Github /> GitHub</a></Button>
        </div>
      </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-8 text-sm text-muted-foreground flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Vedant Damedhar</p>
          <p>Made with curiosity, in Pune.</p>
        </div>
      </footer>
    </div>
  );
}
