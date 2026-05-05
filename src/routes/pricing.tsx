import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { packages } from "@/lib/data";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing · Flashshot" },
      {
        name: "description",
        content: "Transparent packages for events of any size. No subscriptions.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-20 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-flash">/ pricing</p>
        <h1 className="mt-2 font-display text-5xl font-semibold md:text-7xl">
          Simple pricing. <span className="gradient-text-flash">No hidden fees.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Three simple packages for your events. Add-ons available at checkout.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24">
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

      <section className="mx-auto max-w-4xl px-5 pb-24">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">FAQs</h2>
        <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
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
          ].map((f) => (
            <div key={f.q} className="p-6">
              <div className="font-display text-lg">{f.q}</div>
              <p className="mt-1 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
