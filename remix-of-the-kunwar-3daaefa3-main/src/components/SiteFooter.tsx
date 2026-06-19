export function SiteFooter() {
  return (
    <footer
      className="relative z-10 mx-auto w-full max-w-[1440px] border-t px-6 py-8 md:px-20"
      style={{ borderColor: "color-mix(in oklab, var(--outline-variant) 40%, transparent)" }}
    >
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p
          className="text-[10px] uppercase tracking-[0.2em] opacity-40"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        >
          © 2024 THE KUNWAR. ALL RIGHTS RESERVED.
        </p>
        <p
          className="text-[11px] tracking-[0.15em]"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400, color: "var(--on-surface-variant)" }}
        >
          <span className="opacity-60">Designed &amp; Developed by </span>
          <a
            href="https://www.vsr-tech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-opacity hover:opacity-80"
            style={{ color: "#E6B566" }}
          >
            VSR Tech
          </a>
        </p>
      </div>
    </footer>
  );
}
