import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/pricing", label: "Pricing" },
  { to: "/admin", label: "Admin" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              activeProps={{
                className: "rounded-full px-4 py-2 text-sm text-foreground bg-surface",
              }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex rounded-full bg-flash text-primary-foreground hover:opacity-90"
          >
            <Link to="/book">Book a shoot</Link>
          </Button>
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background px-5 py-6 flex flex-col gap-4 absolute top-full left-0 w-full shadow-2xl">
          <nav className="flex flex-col gap-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                activeProps={{
                  className:
                    "px-4 py-3 rounded-xl text-base font-medium text-foreground bg-surface",
                }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Button
            asChild
            className="w-full rounded-xl bg-flash text-primary-foreground hover:opacity-90 h-12 mt-2"
          >
            <Link to="/book" onClick={() => setIsMobileMenuOpen(false)}>
              Book a shoot
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
