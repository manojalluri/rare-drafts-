import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2 font-display text-xl font-bold tracking-tight ${className}`}
    >
      <span className="relative flex h-7 w-7 items-center justify-center rounded-md gradient-flash shadow-flash">
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary-foreground" fill="currentColor">
          <path d="M13 2L4 14h6l-2 8 10-13h-6l1-7z" />
        </svg>
      </span>
      <span>
        FLASH<span className="text-flash">SHOT</span>
      </span>
    </Link>
  );
}
