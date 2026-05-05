import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { testimonials, packages } from "@/lib/data";
import {
  ArrowRight,
  Camera,
  Clock,
  Star,
  Zap,
  Check,
  ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LiveTicker />

      <HowFast />

      <Pricing />
      <Social />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}


function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-40 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-12 lg:pt-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-tighter">
            Shoot. Edit. <br />
            <span className="gradient-text-flash">Posted</span> in
            <span className="ml-3 inline-flex items-baseline">
              <span className="font-mono text-flash">10</span>
              <span className="ml-1 text-muted-foreground">
                min<span className="text-flash">.</span>
              </span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Vetted photographers + on-site editors at your event. Cinematic reels, sharp stills,
            delivered before the music stops.
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-flash px-8 min-h-[56px] w-full sm:w-auto text-base text-primary-foreground hover:opacity-90 shadow-glow"
            >
              <Link to="/book">
                Book a shoot
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}



function LiveTicker() {
  const items = [
    "Wedding · Goa",
    "Nightclub · Bangalore",
    "Brand Launch · Delhi",
    "Birthday · Mumbai",
    "Restaurant · Pune",
    "Car Reveal · Chennai",
    "Concert · Hyderabad",
  ];
  return (
    <section className="border-y border-border/50 bg-ink/40 py-4">
      <div className="flex overflow-hidden">
        <div className="marquee flex shrink-0 items-center gap-12 whitespace-nowrap px-6 font-mono text-sm uppercase tracking-widest text-muted-foreground">
          {[...items, ...items, ...items].map((it, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-flash" />
              {it}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowFast() {
  const steps = [
    {
      icon: <Camera className="h-5 w-5" />,
      title: "Book in 60 sec",
      body: "Pick a vibe, pick a time. We match you with the best on-call creator.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "We arrive, we shoot",
      body: "Pro photographer + on-site editor land at your venue with full kit.",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Delivered in minutes",
      body: "Reels and edits hit your phone before the next song drops.",
    },
  ];
  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-surface/40">
      <div className="absolute inset-0 grid-noise opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-widest text-flash">/ how it works</p>
            <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">
              Three easy steps. No waiting.
            </h2>
            <p className="mt-4 text-muted-foreground">
              No more waiting for weeks. Our photographers and editors work at your event, so you
              get your content instantly.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ol className="space-y-3">
              {steps.map((s, i) => (
                <li
                  key={i}
                  className="group flex gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-flash/50"
                >
                  <div className="font-mono text-sm text-muted-foreground">0{i + 1}</div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-flash/15 text-flash">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Social() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-flash">/ word on the street</p>
      <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">
        What people are saying
      </h2>
      <div className="mt-10 flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            className="w-[85vw] sm:w-[320px] shrink-0 snap-center md:w-auto rounded-2xl border border-border bg-card p-6"
          >
            <div className="text-flash">
              {[...Array(5)].map((_, k) => (
                <Star key={k} className="inline h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 font-display text-xl leading-snug">"{t.quote}"</blockquote>
            <figcaption className="mt-6 text-sm">
              <div className="font-medium">{t.name}</div>
              <div className="text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <div className="text-center mb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-flash">/ pricing</p>
        <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">
          Simple pricing. <span className="gradient-text-flash">No hidden fees.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Three simple packages for your events. Add-ons available at checkout.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {packages.map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-col rounded-3xl border p-8 ${p.accent ? "border-flash/50 bg-gradient-to-b from-flash/15 via-card to-card shadow-flash" : "border-border bg-card"}`}
          >
            {p.accent && (
              <span className="absolute -top-3 left-8 rounded-full bg-flash px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-primary-foreground">
                Most booked
              </span>
            )}
            <div className="font-display text-2xl">{p.name}</div>
            <div className="mt-2 text-sm text-muted-foreground">{p.blurb}</div>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-6xl font-semibold">₹{p.price}</span>
              <span className="text-sm text-muted-foreground">/event</span>
            </div>
            <ul className="mt-8 flex-1 space-y-3 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-flash" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              asChild
              className={`mt-8 w-full rounded-full ${p.accent ? "bg-flash text-primary-foreground hover:opacity-90" : "border border-border bg-surface hover:bg-surface-elevated"}`}
            >
              <Link to="/book">Book {p.name}</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 md:py-24">
      <h2 className="font-display text-3xl font-semibold md:text-4xl text-center">
        Frequently Asked Questions
      </h2>
      <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card">
        {[
          {
            q: "How fast is delivery, really?",
            a: "First reel hits your phone in 10–30 minutes. Full deliverables before the event ends.",
          },
          {
            q: "What gear do you bring?",
            a: "Mirrorless full-frame body, fast primes, on-camera flash, mobile editing rig. Drone and second shooter on Inferno.",
          },
          {
            q: "Can I cancel?",
            a: "Free cancellation up to 1 hour before the booking. After that, 50% of the package.",
          },
          {
            q: "Do you cover other cities?",
            a: "Yes — 38 metros across India today, expanding monthly.",
          },
          {
            q: "How do I pay?",
            a: "We accept all major credit cards, UPI, and bank transfers. 50% is required upfront to secure your booking.",
          },
          {
            q: "What if the event runs late?",
            a: "You can extend our services on the spot at an hourly rate. Just ask your creator!",
          },
          {
            q: "Do you provide raw footage?",
            a: "Yes! Raw footage is included in our top-tier packages and can be purchased as an add-on for others.",
          },
          {
            q: "Can I request specific editing styles?",
            a: "Absolutely. You can share references with our editor during the shoot, and we'll match the vibe.",
          },
        ].map((f) => (
          <details key={f.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between font-display text-lg">
              {f.q}
              <span className="transition duration-300 group-open:rotate-180">
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </span>
            </summary>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-12 pt-12">
      <div className="relative overflow-hidden rounded-3xl border border-flash/30 bg-gradient-to-br from-flash/20 via-surface to-surface p-8 md:p-16">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-flash/30 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
              Need a photographer tonight?
            </h2>
            <p className="mt-3 text-muted-foreground">
              We can have a creator at your venue in under 2 hours. Tap below to start.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-flash px-7 text-base text-primary-foreground hover:opacity-90"
          >
            <Link to="/book">
              Book now <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
