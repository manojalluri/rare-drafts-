import { Logo } from "./Logo";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-8 lg:mt-16 border-t border-border/40 bg-ink/60">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 sm:grid-cols-2 md:grid-cols-4">
        <div className="col-span-1 sm:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Pro photographers and reels-editors at your event. Shot, edited and delivered before the
            night ends.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/book" className="hover:text-flash">
                Book a shoot
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-flash">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="hover:text-flash">
                How it works
              </Link>
            </li>

          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-flash" href="#">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-flash" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:text-flash" href="#">
                Press
              </a>
            </li>
            <li>
              <a className="hover:text-flash" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 px-5 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Flashshot Studios — quick content, no waiting.</span>
          <span className="font-mono">v1.0 · made with grain &amp; flash</span>
        </div>
      </div>
    </footer>
  );
}
