import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { packages, categories } from "@/lib/data";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a shoot · Flashshot" },
      {
        name: "description",
        content: "Tell us your event, pick a package, get a creator on the way.",
      },
    ],
  }),
  component: BookPage,
});

/* ─── Zod Validation Schema ─── */
const formSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  phone: z.string().trim().min(5, "Phone is required"),
  email: z.string().trim().email("Please enter a valid email"),
  vertical: z.string().trim().min(1, "Event type is required"),
  pkg: z.string().trim().min(1, "Plan is required"),
  date: z.string().trim().min(1, "Date is required"),
  time: z.string().trim().min(1, "Start time is required"),
  endTime: z.string().trim().optional(),
  address: z.string().trim().min(5, "Address is required"),
  notes: z.string().trim().optional(),
});

type FormValues = z.infer<typeof formSchema>;

/* ─── Styles ─── */
const inpBase =
  "mt-1.5 w-full rounded-md border bg-surface px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-colors";
const inpNormal = "border-border focus:ring-flash/50 focus:border-flash";
const inpError = "border-destructive/50 focus:ring-destructive/50 focus:border-destructive";

const lbl = "block text-xs font-medium uppercase tracking-widest text-muted-foreground";
const req = <span className="text-flash"> *</span>;

/* ─── Page ─── */
function BookPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      endTime: "",
      address: "",
      notes: "",
      pkg: packages[1].name,
      vertical: categories[0].slug,
    },
  });

  // Watch for sidebar updates
  const watchedPkg = watch("pkg");
  const watchedVertical = watch("vertical");

  const onSubmit = (data: FormValues) => {
    setIsLoading(true);
    try {
      const booking = {
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        name: data.name.trim(),
        phone: data.phone.trim(),
        email: data.email.trim(),
        date: data.date,
        time: data.time,
        endTime: data.endTime || "",
        address: data.address.trim(),
        notes: data.notes?.trim() || "",
        package: data.pkg,
        vertical: data.vertical,
        status: "Pending",
      };
      
      const rawBookings = localStorage.getItem("flashshot_bookings");
      const existing = rawBookings ? JSON.parse(rawBookings) : [];
      const existingBookings = Array.isArray(existing) ? existing : [];

      localStorage.setItem("flashshot_bookings", JSON.stringify([...existingBookings, booking]));
      reset();
      setIsSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const selectedPkg = packages.find((p) => p.name === watchedPkg) || packages[1];
  const today = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];

  return (
    <div className="min-h-screen">
      <Header />
      <Toaster theme="dark" />

      <section className="mx-auto max-w-5xl px-5 pb-16 pt-16">
        <p className="font-mono text-xs uppercase tracking-widest text-flash">/ booking</p>
        <h1 className="mt-2 font-display text-5xl font-semibold md:text-6xl">
          Let's get you on a roll.
        </h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Fill out the details below. We'll dispatch a creator the moment you confirm.
        </p>

        {isSubmitted ? (
          <div className="mt-10 flex flex-col items-center justify-center rounded-3xl border border-flash/30 bg-gradient-to-br from-flash/10 via-surface to-surface p-12 text-center md:p-24 shadow-glow">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-flash text-primary-foreground mb-6">
              <Check className="h-10 w-10" />
            </div>
            <h2 className="font-display text-4xl font-semibold md:text-5xl">Booking Confirmed!</h2>
            <p className="mt-4 max-w-lg text-lg text-muted-foreground">
              We've received your request. Our team will reach out to you within the next 5 minutes
              to confirm the details and assign a creator.
            </p>
            <Button
              asChild
              className="mt-8 rounded-full bg-surface border border-border text-foreground hover:bg-surface-elevated"
            >
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit, () => toast.error("Please fix the highlighted fields and try again."))}
            className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3"
            noValidate
          >

            {/* ── Form card ── */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="font-display text-2xl">Your details.</h2>
                <div className="mt-8 grid gap-6">

                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={lbl}>Full name{req}</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Riya K."
                        {...register("name")}
                        className={`${inpBase} ${errors.name ? inpError : inpNormal}`}
                      />
                      {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className={lbl}>Phone{req}</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        {...register("phone")}
                        className={`${inpBase} ${errors.phone ? inpError : inpNormal}`}
                      />
                      {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={lbl}>Email{req}</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@hello.com"
                      {...register("email")}
                      className={`${inpBase} ${errors.email ? inpError : inpNormal}`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
                  </div>

                  {/* Event type + Package */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="vertical" className={lbl}>Event Type{req}</label>
                      <select
                        id="vertical"
                        {...register("vertical")}
                        className={`${inpBase} ${errors.vertical ? inpError : inpNormal}`}
                      >
                        {categories.map((c) => (
                          <option key={c.slug} value={c.slug}>{c.title}</option>
                        ))}
                      </select>
                      {errors.vertical && <p className="mt-1 text-xs text-destructive">{errors.vertical.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="pkg" className={lbl}>Selected Plan{req}</label>
                      <select
                        id="pkg"
                        {...register("pkg")}
                        className={`${inpBase} ${errors.pkg ? inpError : inpNormal}`}
                      >
                        {packages.map((p) => (
                          <option key={p.name} value={p.name}>{p.name} — ₹{p.price}</option>
                        ))}
                      </select>
                      {errors.pkg && <p className="mt-1 text-xs text-destructive">{errors.pkg.message}</p>}
                    </div>
                  </div>

                  {/* Date + Start + End time */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label htmlFor="date" className={lbl}>Date{req}</label>
                      <input
                        id="date"
                        type="date"
                        min={today}
                        {...register("date")}
                        className={`${inpBase} ${errors.date ? inpError : inpNormal}`}
                      />
                      {errors.date && <p className="mt-1 text-xs text-destructive">{errors.date.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="time" className={lbl}>Start Time{req}</label>
                      <input
                        id="time"
                        type="time"
                        {...register("time")}
                        className={`${inpBase} ${errors.time ? inpError : inpNormal}`}
                      />
                      {errors.time && <p className="mt-1 text-xs text-destructive">{errors.time.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="endTime" className={lbl}>End Time (Optional)</label>
                      <input
                        id="endTime"
                        type="time"
                        {...register("endTime")}
                        className={`${inpBase} ${errors.endTime ? inpError : inpNormal}`}
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="address" className={lbl}>Venue address{req}</label>
                    <input
                      id="address"
                      type="text"
                      placeholder="Where's the action?"
                      {...register("address")}
                      className={`${inpBase} ${errors.address ? inpError : inpNormal}`}
                    />
                    {errors.address && <p className="mt-1 text-xs text-destructive">{errors.address.message}</p>}
                  </div>

                  {/* Notes */}
                  <div>
                    <label htmlFor="notes" className={lbl}>Anything special?</label>
                    <textarea
                      id="notes"
                      placeholder="Brief, mood references, deliverables..."
                      rows={3}
                      {...register("notes")}
                      className={`${inpBase} ${inpNormal} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="mt-2 w-full rounded-full bg-flash py-6 text-lg text-primary-foreground hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Confirming…" : (
                      <>Confirm booking <ArrowRight className="ml-2 h-5 w-5" /></>
                    )}
                  </Button>

                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-flash/30 bg-gradient-to-br from-flash/10 via-surface to-surface p-6">
                <div className="font-mono text-xs uppercase tracking-widest text-flash">/ summary</div>
                <div className="mt-3 font-display text-2xl">{watchedPkg} package</div>
                <div className="mt-1 text-sm text-muted-foreground capitalize">{watchedVertical} shoot</div>
                <div className="mt-6 space-y-2 text-sm">
                  {selectedPkg?.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 shrink-0 text-flash" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-end justify-between border-t border-border pt-4">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Estimate</span>
                  <span className="font-display text-3xl text-flash">₹{selectedPkg?.price}</span>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">No charge until your creator arrives.</p>
              </div>
            </aside>

          </form>
        )}
      </section>
      <Footer />
    </div>
  );
}
