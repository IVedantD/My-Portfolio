import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import doodlesBg from "@/assets/doodles-bg.jpg";
import orbs from "@/assets/orbs.jpg";

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
      { property: "og:description", content: "A small personal corner of the internet." },
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
      {/* hand-drawn doodles background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage: `url(${watercolorBlob})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Nav />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 pt-16 md:pt-24 pb-24">
        <span className="inline-block text-sm text-muted-foreground px-4 py-1.5 rounded-full bg-secondary/70 border border-border">
          Personal Space
        </span>
        <h1 className="mt-8 font-display text-6xl md:text-8xl leading-[0.95] text-foreground">
          Hello, I'm Vedant
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
          Curious. Always building something. Still figuring it out.
        </p>
        <div className="divider mt-10" />
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 md:px-10 pb-24 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-7 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl">About Me</h2>

          <p>Hello, I'm Vedant.</p>

          <p>
            I've always been the kind of person who can't stop tinkering — opening
            things up, breaking them a little, putting them back together slightly
            different. Computers just happened to be the thing that stuck.
          </p>

          <p>
            I like building software the way some people like cooking — slowly,
            with care, and a small obsession over the little details no one is
            going to notice. Most of what I make starts as a curious question and
            turns into something I can show a friend.
          </p>

          <p>
            Right now I'm studying my MCA in Pune and quietly working on web and
            mobile things on the side. I've tried a lot — frontend, backend, a
            bit of AI, a bit of mobile — not because I'm trying to collect
            buzzwords, but because each one taught me a new way of thinking.
          </p>

          <p>
            I learn out loud. I ship things that are a little rough on the edges.
            I rewrite them when I know better. I'm not in a rush to figure out
            who I am as a developer — I'd rather just keep making things and let
            that answer itself.
          </p>

          <p className="text-muted-foreground italic">
            Still curious. Still building. Still figuring it out.
          </p>

          <div className="pt-6">
            <h3 className="font-serif text-2xl">A few things I love</h3>
            <ul className="mt-4 space-y-2 text-foreground/90">
              <li>— Late-night coding with one good playlist on loop</li>
              <li>— Clean interfaces that don't try too hard</li>
              <li>— Cricket, chai, and very long walks around Pune</li>
              <li>— Reading about how people build things, not just what they build</li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-5 md:sticky md:top-10">
          <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-sm">
            <img
              src={orbs}
              alt="Soft illustration of overlapping circles"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section id="connect" className="mx-auto max-w-6xl px-6 md:px-10 pb-32">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h3 className="font-serif text-2xl">LinkedIn</h3>
            <p className="mt-3 text-muted-foreground">
              Want to connect professionally or follow what I'm exploring?
            </p>
            <a
              href="https://www.linkedin.com/in/vedant-damedhar"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-foreground underline underline-offset-4 decoration-accent decoration-2 hover:decoration-foreground"
            >
              Find me on LinkedIn →
            </a>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <h3 className="font-serif text-2xl">Let's Connect</h3>
            <p className="mt-3 text-muted-foreground">
              Curious conversations, ideas, questions, or just thinking out loud.
            </p>
            <a
              href="mailto:damedharvedant1@gmail.com"
              className="mt-5 inline-block text-foreground underline underline-offset-4 decoration-accent decoration-2 hover:decoration-foreground"
            >
              Say hello over email →
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-8 text-sm text-muted-foreground flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Vedant Damedhar</p>
          <p>Made with care, in Pune.</p>
        </div>
      </footer>
    </div>
  );
}
