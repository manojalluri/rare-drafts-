import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Camera, Send, Sparkles, Truck, Wand2, Zap, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works · Flashshot" },
      {
        name: "description",
        content: "Inside the Flashshot playbook — how we deliver pro reels in minutes.",
      },
    ],
  }),
  component: HowPage,
});

const phases = [
  {
    step: "01",
    icon: <Send className="h-6 w-6" />,
    title: "You tap Book",
    body: "Pick vibe, time, package. We dispatch the nearest matched creator instantly — no back-and-forth.",
    tag: "Instant dispatch",
  },
  {
    step: "02",
    icon: <Truck className="h-6 w-6" />,
    title: "Creator rolls out",
    body: "On-call shooter + on-site editor heads to your venue with full kit and mobile editing rig.",
    tag: "On-site team",
  },
  {
    step: "03",
    icon: <Camera className="h-6 w-6" />,
    title: "We shoot live",
    body: "Wide, tight, candid, B-roll. Your editor cuts in real time on a tethered laptop while we shoot.",
    tag: "Live coverage",
  },
  {
    step: "04",
    icon: <Wand2 className="h-6 w-6" />,
    title: "Cut + caption",
    body: "AI-assisted timing, music sync, captions, color grade. Reviewed by a human editor in 90 seconds.",
    tag: "AI + human edit",
  },
  {
    step: "05",
    icon: <Zap className="h-6 w-6" />,
    title: "Delivered to your phone",
    body: "Reels and stills land in your Flashshot inbox, ready to post or download — before the event ends.",
    tag: "Ready to post",
  },
];

const stats = [
  { value: "240+", label: "Vetted shooters across 38 cities, on-call 24/7." },
  { value: "60+", label: "Staff editors trained on platform-native cuts." },
  { value: "98.4%", label: "Of bookings delivered before the event ends." },
];

function HowPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-noise opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-flash/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-5xl px-5 pb-20 pt-24">
          <p className="font-mono text-xs uppercase tracking-widest text-flash">/ playbook</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl">
            From booked <br />
            to <span className="gradient-text-flash">posted</span>
            <br />in under 2 hours.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            No creative briefs, no week-long edits. Our hybrid model puts creators and editors in the
            same room as your event — so you leave with content.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <Button
              asChild
              className="rounded-full bg-flash px-7 text-primary-foreground hover:opacity-90 shadow-glow"
            >
              <Link to="/book">
                Book now <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-5xl px-5 pb-28">
        <div className="space-y-5">
          {phases.map((p, i) => (
            <div
              key={i}
              className="group relative flex gap-6 rounded-3xl border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:border-flash/40 hover:shadow-[0_0_40px_-10px_rgba(255,51,102,0.2)] hover:-translate-y-0.5"
            >
              {/* Step number background */}
              <div className="absolute right-6 top-6 font-display text-7xl font-bold text-white/[0.03] select-none pointer-events-none md:text-8xl">
                {p.step}
              </div>

              {/* Icon */}
              <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-flash/15 text-flash border border-flash/20 group-hover:bg-flash group-hover:text-white group-hover:border-flash transition-all duration-300 shadow-[0_0_20px_rgba(255,51,102,0.1)]">
                {p.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-flash/60 uppercase tracking-widest">
                    Step {p.step}
                  </span>
                  <span className="rounded-full border border-flash/20 bg-flash/10 px-2.5 py-0.5 text-[10px] font-medium text-flash uppercase tracking-wider">
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold md:text-3xl">{p.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{p.body}</p>
              </div>

              {/* Connecting line for all but last */}
              {i < phases.length - 1 && (
                <div className="absolute -bottom-5 left-[2.75rem] w-px h-5 bg-gradient-to-b from-flash/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Why it works */}
      <section className="mx-auto max-w-5xl px-5 pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-flash/20 bg-gradient-to-br from-flash/10 via-card to-card p-10 md:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-flash/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-flash/10 blur-2xl pointer-events-none" />

          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-flash" />
              <span className="font-mono text-xs uppercase tracking-widest text-flash">/ why it works</span>
            </div>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">
              The numbers <span className="gradient-text-flash">speak.</span>
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6"
                >
                  <div className="font-display text-5xl font-bold gradient-text-flash">{s.value}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="mt-10 rounded-full bg-flash text-primary-foreground hover:opacity-90 px-8 shadow-glow"
            >
              <Link to="/book">
                Try it tonight <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
