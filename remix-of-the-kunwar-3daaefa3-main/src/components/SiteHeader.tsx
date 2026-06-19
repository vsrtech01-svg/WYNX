import { Link } from "@tanstack/react-router";
import { useState } from "react";
import theLogo from "@/assets/the-logo.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const navLinkClass = "opacity-70 transition-opacity hover:opacity-100";
  const navStyle = { fontFamily: "var(--font-body)", fontWeight: 500 } as const;

  return (
    <header className="relative z-30 mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-7 md:px-20 md:py-10">
      <Link to="/" className="flex items-center" aria-label="The Kunwar — Home">
        <img
          src={theLogo}
          alt="The"
          className="h-[36px] w-auto md:h-[58px]"
          style={{ marginRight: "-6px", transform: "translateY(1px)" }}
        />
        <span
          className="text-lg uppercase tracking-[0.3em] md:text-2xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          KUNWAR
        </span>
      </Link>

      {/* Desktop nav */}
      <nav
        className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] md:flex"
        style={navStyle}
      >
        <Link
          to="/"
          className={navLinkClass}
          activeProps={{ className: "opacity-100" }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={navLinkClass}
          activeProps={{ className: "opacity-100" }}
        >
          About
        </Link>
        <a href="#" className={navLinkClass}>Journal</a>
        <a href="#" className={navLinkClass}>Atelier</a>
        <button
          aria-label="Search"
          className="flex h-9 w-9 items-center justify-center rounded-full border opacity-70 transition-all hover:opacity-100"
          style={{ borderColor: "color-mix(in oklab, var(--outline-variant) 60%, transparent)" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </nav>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full border opacity-80 transition-all hover:opacity-100 md:hidden"
        style={{ borderColor: "color-mix(in oklab, var(--outline-variant) 60%, transparent)" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
          {open ? (
            <>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </>
          ) : (
            <>
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="13" x2="20" y2="13" />
              <line x1="4" y1="19" x2="20" y2="19" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu drawer */}
      {open && (
        <div
          className="absolute left-0 right-0 top-full z-40 mx-6 mt-2 rounded-lg border bg-background/95 p-6 shadow-lg backdrop-blur md:hidden"
          style={{ borderColor: "color-mix(in oklab, var(--outline-variant) 50%, transparent)" }}
        >
          <nav
            className="flex flex-col gap-5 text-sm uppercase tracking-[0.25em]"
            style={navStyle}
            onClick={() => setOpen(false)}
          >
            <Link to="/" className={navLinkClass} activeProps={{ className: "opacity-100" }} activeOptions={{ exact: true }}>
              Home
            </Link>
            <Link to="/about" className={navLinkClass} activeProps={{ className: "opacity-100" }}>
              About
            </Link>
            <a href="#" className={navLinkClass}>Journal</a>
            <a href="#" className={navLinkClass}>Atelier</a>
            <div
              className="mt-2 flex items-center gap-3 border-t pt-5 opacity-70"
              style={{ borderColor: "color-mix(in oklab, var(--outline-variant) 40%, transparent)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="text-xs">Search</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
