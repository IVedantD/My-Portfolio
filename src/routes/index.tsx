import { createFileRoute } from "@tanstack/react-router";
import { useLayoutEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import doodlesBg from "@/assets/doodles-bg.jpg";

const projects = [
  {
    name: "PDFNectar.ai",
    type: "AI document companion",
    description:
      "A full-stack AI document assistant that lets users upload PDFs, generate summaries, and ask context-based questions with source citations in Hindi and English.",
    highlights: [
      "Built a full-stack web app in Python, FastAPI, React, and TypeScript where users upload long PDFs and chat with their documents in real time.",
      "Built a Retrieval-Augmented Generation (RAG) pipeline with LangChain to extract PDF text, chunk content, generate Gemini embeddings, and run semantic search.",
      "Connected FastAPI REST endpoints to a MongoDB Atlas Vector Search index and React frontend so answers stay grounded with source citations.",
      "Added bilingual support so users can generate summaries and ask context-aware questions in both Hindi and English.",
      "Offloaded heavy embedding workloads to the Hugging Face Inference API after analyzing deployment logs, fixing memory crashes on large files.",
      "Handled session state and request validation cleanly across the API and UI so multi-turn document Q&A stays responsive and reliable.",
    ],
    stack: ["Python", "FastAPI", "React", "TypeScript", "LangChain", "Gemini API", "Hugging Face", "MongoDB Atlas Vector Search"],
  },
  {
    name: "Medicare",
    type: "Healthcare management",
    description:
      "A role-based healthcare platform for patients, doctors, and administrators, bringing appointments, secure access, and timely notifications into one place.",
    highlights: [
      "Built separate role-based workflows and dashboard views in React for patients, doctors, and administrators so each user only sees the tools and records meant for them.",
      "Secured user sign-in and protected routes with JWT authentication and bcrypt password hashing.",
      "Built REST APIs in Node.js and Express to manage patient bookings, doctor availability, and administrative controls.",
      "Structured MongoDB collections for user profiles, schedules, and appointment states so records stay organized and easy to query.",
      "Automated appointment scheduling flows and connected them to timely notification alerts for upcoming visits and status updates.",
      "Added request validation and clear error handling across frontend forms and backend endpoints to prevent booking conflicts and invalid inputs.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "JWT Auth"],
  },
  {
    name: "The Green Table",
    type: "Dining and reservations",
    description:
      "A full-stack dining and reservations platform designed around concurrent orders, reliable state updates, secure sessions, and fast data retrieval during busy periods.",
    highlights: [
      "Built full-stack table booking and dining order flows so guests and staff can reserve slots, place orders, and track table availability in real time.",
      "Applied object-oriented design in Node.js and Express.js to structure booking rules, manage concurrent requests, and prevent double-booking or state conflicts.",
      "Designed relational MySQL schemas and indexed queries using Sequelize / Prisma ORM to keep table lookups and order histories fast under heavier traffic.",
      "Built clean RESTful APIs with request validation and clear error responses so overlapping reservations and invalid order states are caught early.",
      "Added secure session handling and role-aware access controls to protect customer bookings and staff management actions.",
      "Synchronized frontend reservation views with backend state updates so busy service hours stay responsive and consistent across screens.",
    ],
    stack: ["Node.js", "Express.js", "MySQL", "Sequelize / Prisma ORM", "System Design", "RESTful APIs"],
  },
  {
    name: "Pet-Shop Platform",
    type: "Full-stack e-commerce",
    description:
      "A modern pet commerce platform with a seamless product catalogue, fast server-rendered pages, and synchronized state across the client and database.",
    highlights: [
      "Built responsive product browsing, filtering, and cart interfaces in React, Next.js, and Tailwind CSS so shoppers can explore items smoothly across devices.",
      "Used the Next.js App Router for server-rendered product pages, improving initial page load speed and search visibility.",
      "Built REST APIs in Node.js and Express to handle product catalogue queries, inventory updates, and checkout requests.",
      "Structured MongoDB schemas for product listings, stock levels, and order transactions so purchase records stay consistent.",
      "Kept cart and inventory state synchronized between the client UI and database to prevent stale stock or duplicate order submissions.",
      "Added input validation and clear API error handling across product and order routes so checkout flows stay dependable.",
    ],
    stack: ["Next.js", "React", "Node.js", "Express", "Tailwind CSS", "MongoDB"],
  },
  {
    name: "E3L Application",
    type: "Mobile learning ecosystem",
    description:
      "A cross-platform education app built around learning modules, interactive navigation, and a fast, dependable mobile experience.",
    highlights: [
      "Converted the existing E3L web platform into a cross-platform mobile application using Flutter and Dart.",
      "Built responsive mobile UI components and core screens—including the Home, Program, and G2C pages—for smooth navigation across screen sizes.",
      "Integrated backend REST APIs into mobile views to load course content and keep user flows connected to live data.",
      "Managed screen states and asynchronous API calls cleanly so transitions and content loading feel responsive.",
      "Tracked down and resolved layout, styling, and navigation bugs through hands-on device testing and debugging.",
      "Collaborated with the engineering team using Git and GitHub for version control to ship assigned features on schedule.",
    ],
    stack: ["Flutter", "Dart", "REST APIs", "Git", "GitHub"],
  },
  {
    name: "Pig Game & Guess My Number",
    type: "Interactive browser games",
    description:
      "Two zero-dependency browser games exploring JavaScript algorithms, direct DOM updates, state logic, and responsive interactions.",
    highlights: [
      "Built two interactive browser games from scratch using vanilla JavaScript, HTML5, and CSS3 with zero external libraries.",
      "Wrote game-state logic to handle player turns, active scores, high scores, and win/loss conditions cleanly.",
      "Added input and turn validation—such as handling dice roll resets, guess limits, and invalid or out-of-range guesses—so game states never break mid-round.",
      "Updated DOM elements directly on user actions to keep scoreboards, hints, and status messages immediate and clear.",
      "Used event listeners and CSS transitions to keep button clicks and visual feedback smooth and responsive across screen sizes.",
      "Structured the game functions and reset flows clearly so starting a new round or debugging edge cases stayed straightforward.",
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "DOM API"],
  },
];

type Project = (typeof projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const highlightsRef = useRef<HTMLUListElement>(null);
  const [overflows, setOverflows] = useState(false);
  const [clipsLastLine, setClipsLastLine] = useState(false);

  useLayoutEffect(() => {
    const list = highlightsRef.current;
    if (!list) return;

    const measure = () => {
      const limit = list.clientHeight;
      const items = [...list.querySelectorAll("li")];
      setOverflows(list.scrollHeight > limit + 1);
      setClipsLastLine(items.some((item) => item.offsetTop < limit && item.offsetTop + item.offsetHeight > limit + 1));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    return () => observer.disconnect();
  }, [project.highlights]);

  return (
    <article className="flex h-[34rem] w-full shrink-0 snap-start flex-col rounded-lg border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1 sm:w-[72%] lg:w-[48%]">
      <div className="flex items-start justify-between gap-4">
        <span className="font-display text-3xl text-accent-strong">0{index + 1}</span>
        <span className="text-right text-xs font-semibold uppercase text-muted-foreground">{project.type}</span>
      </div>
      <h3 className="mt-7 font-serif text-2xl">{project.name}</h3>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.description}</p>
      <div className="relative mt-5 min-h-0 flex-1">
        <ul ref={highlightsRef} className="h-full space-y-3 overflow-hidden text-sm leading-6 text-foreground/90">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        {clipsLastLine ? <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-card to-transparent" /> : null}
      </div>
      {overflows ? (
        <Dialog>
          <DialogTrigger asChild>
            <button type="button" className="mt-3 self-start font-semibold text-accent-strong underline decoration-accent-strong underline-offset-2">
              Read more
            </button>
          </DialogTrigger>
          <DialogContent className="flex max-h-[min(85vh,42rem)] w-[calc(100%-2rem)] max-w-2xl flex-col gap-0 overflow-hidden border-border bg-card p-0 sm:rounded-lg">
            <div className="overflow-y-auto px-6 py-6 pr-12">
              <p className="text-xs font-semibold uppercase text-muted-foreground">{project.type}</p>
              <DialogTitle className="mt-3 font-serif text-2xl font-normal tracking-normal">{project.name}</DialogTitle>
              <DialogDescription className="mt-4 text-sm leading-7">{project.description}</DialogDescription>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-foreground/90">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-border bg-secondary/70 px-3 py-1 text-xs text-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ) : null}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full border border-border bg-secondary/70 px-3 py-1 text-xs">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

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
    period: "Jan 2026 – Jul 2026",
    location: "Pune, Maharashtra",
    highlights: [
      {
        label: "Full-Stack Feature Delivery",
        text: "Built and shipped end-to-end features across live web and AI products by connecting frontend UI views with backend REST APIs so ideas reach real users as working software.",
      },
      {
        label: "Backend APIs & Data Layer",
        text: "Developed Python and FastAPI backend services backed by MySQL and MongoDB Atlas Vector Search to handle request validation, structured data storage, and semantic retrieval.",
      },
      {
        label: "RAG & Agent Pipeline (DataDeck)",
        text: "Built a RAG chatbot and LangGraph agent workflow over financial and ESG documents using LangChain and Gemini—combining vector search, tool/function calling, and structured outputs wired to frontend views.",
      },
      {
        label: "Background Automation & Routing",
        text: "Automated background task assignment and backend routing logic so routine jobs move through the system without manual handoffs.",
      },
      {
        label: "Testing, Code Reviews & AI Workflows",
        text: "Cut post-deployment defects by 25% by writing automated tests, checking changes in a sandbox, doing code reviews, and using AI coding tools alongside manual verification.",
      },
      {
        label: "Production Bug Fixes & Rate Limiting",
        text: "Fixed a bug where user state was lost on page refresh and added Redis rate limiting in FastAPI to protect backend endpoints under load.",
      },
    ],
  },
  {
    company: "Softtrain Solution Pvt. Ltd",
    role: "Software Developer Intern",
    period: "Apr 2025 – Jun 2025",
    location: "Pune, Maharashtra",
    highlights: [
      {
        label: "Web-to-Mobile App Conversion",
        text: "Turned the E3L web platform into a cross-platform mobile app using Flutter and Dart so users could access learning features on mobile devices.",
      },
      {
        label: "Core Mobile Screens & UI",
        text: "Built responsive UI screens and components—including the Home, Program, and G2C pages—focused on clear layout and smooth navigation.",
      },
      {
        label: "REST API Integration",
        text: "Connected mobile screens to backend REST APIs so live data and user flows worked cleanly inside the app.",
      },
      {
        label: "Device Testing & Bug Fixes",
        text: "Tracked down and resolved layout, styling, and navigation issues through hands-on mobile testing and debugging.",
      },
      {
        label: "Team Collaboration & Version Control",
        text: "Worked closely with the team using Git and GitHub to manage code changes, review updates, and ship assigned features on schedule.",
      },
      {
        label: "Maintainable App Delivery",
        text: "Kept UI components and screen updates organized so the app stayed steady and easy for the team to maintain across sprints.",
      },
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
          I build reliable full-stack web apps, backend APIs, and practical AI features—always curious, always learning, and still excited when an idea becomes real.
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
                    {job.highlights.map((highlight) => {
                      const label = typeof highlight === "string" ? null : highlight.label;
                      const text = typeof highlight === "string" ? highlight : highlight.text;

                      return (
                        <li key={label ?? text} className="flex gap-3">
                          <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/30" />
                          <span>
                            {label ? <strong className="font-semibold text-foreground">{label}: </strong> : null}
                            {text}
                          </span>
                        </li>
                      );
                    })}
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
            className="no-scrollbar flex w-full snap-x snap-mandatory items-start gap-5 overflow-x-auto overscroll-x-contain py-2"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
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
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="section-kicker">03 · Tech stack</p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl md:text-4xl">Tools I reach for—and keep learning</h2>
          <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="border-b border-foreground/20 pb-3 font-serif text-base">{group.title}</h3>
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
              <div className="text-sm sm:text-right"><p>2021–2024</p><p className="text-muted-foreground">CGPA 7.5</p></div>
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
