import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Button } from "@/components/ui/button";
import doodlesBg from "@/assets/doodles-bg.jpg";

const projects = [
  {
    name: "PDFNectar.ai",
    type: "AI document companion",
    description:
      "A full-stack tool that turns long PDFs into searchable knowledge. I built the flow from secure sign-in and document processing to semantic search and clear, responsive answers.",
    stack: ["React", "TypeScript", "FastAPI", "MongoDB", "RAG"],
  },
  {
    name: "Medicare",
    type: "Healthcare management",
    description:
      "A role-based healthcare platform for patients, doctors, and administrators, bringing appointments, secure access, and timely notifications into one place.",
    stack: ["Java", "React", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    name: "The Green Table",
    type: "Dining and reservations",
    description:
      "A full-stack reservation system designed around concurrent orders, reliable state updates, secure sessions, and fast data retrieval during busy periods.",
    stack: ["Node.js", "Express", "MongoDB", "System Design"],
  },
];

const skillGroups = [
  { title: "Languages", items: ["Java", "C / C++", "Python", "JavaScript", "TypeScript", "Dart"] },
  { title: "Frontend", items: ["React", "Next.js", "HTML & CSS", "Tailwind CSS", "Redux", "Flutter"] },
  { title: "Backend", items: ["Node.js", "Express", "FastAPI", "REST APIs", "System Design", "OOP & DSA"] },
  { title: "Data & AI", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "RAG", "Vector Search"] },
  { title: "Tools", items: ["Git", "Docker", "GitHub Actions", "Render", "API Integration"] },
];

const certifications = [
  { name: "Programming in Java", detail: "Elite + Silver · 82%", year: "2026" },
  { name: "Cloud Computing", detail: "Elite · 65%", year: "2026" },
  { name: "Internet of Things", detail: "Elite · 60%", year: "2026" },
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

      <section id="about" className="scroll-mt-24 border-y border-border bg-card/55">
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
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4">
            <p className="section-kicker">01 · Experience</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">One year, many hats</h2>
          </div>
          <div className="space-y-5 text-lg md:col-span-7 md:col-start-6">
            <p>I've spent about a year building and improving software in professional teams—from responsive interfaces and cross-platform apps to backend systems and AI-assisted products.</p>
            <p className="text-muted-foreground">The most valuable part wasn't a particular framework. It was learning to understand requirements, ask better questions, work through trade-offs, and take responsibility for the details that make software dependable.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-24 md:px-10">
        <p className="section-kicker">02 · Selected work</p>
        <div className="mt-3 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <h2 className="font-serif text-3xl md:text-4xl">Things I've built</h2>
          <p className="max-w-md text-muted-foreground">A few projects where I followed the problem across interfaces, systems, data, and deployment.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.name} className="flex min-h-80 flex-col rounded-lg border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-3xl text-accent-strong">0{index + 1}</span>
                <span className="text-right text-xs font-semibold uppercase text-muted-foreground">{project.type}</span>
              </div>
              <h3 className="mt-8 font-serif text-2xl">{project.name}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {project.stack.map((item) => <span key={item} className="rounded-full border border-border bg-secondary/70 px-3 py-1 text-xs">{item}</span>)}
              </div>
            </article>
          ))}
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
