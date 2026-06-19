import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | THE KUNWAR — Bespoke Tailoring & Quiet Luxury" },
      {
        name: "description",
        content:
          "At The Kunwar, every creation begins with your story. Bespoke garments crafted with precision, purpose, and an uncompromising commitment to excellence.",
      },
      { property: "og:title", content: "About — THE KUNWAR" },
      {
        property: "og:description",
        content:
          "Bespoke clothing as a reflection of identity, character, and personal distinction.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-primary">
      <div className="kw-grain" />

      {/* Header */}
      <SiteHeader />


      {/* Content */}
      <main className="relative z-10 mx-auto w-full max-w-[1100px] px-6 py-12 md:px-20 md:py-20">
        <div className="mb-12 md:mb-20">
          <span
            className="block text-[11px] uppercase tracking-[0.3em] opacity-50"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Our Story
          </span>
          <h1
            className="mt-5 text-[44px] uppercase leading-[1.05] tracking-tight md:text-[88px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            About
            <br />
            <span className="italic lowercase">the house</span>
          </h1>
          <div className="kw-draw-line mt-8" />
        </div>

        <article
          className="space-y-8 text-[18px] leading-[1.85] md:text-[20px] md:leading-[1.9]"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "var(--on-surface-variant)" }}
        >
          <p>
            At <span className="text-primary" style={{ fontFamily: "var(--font-display)" }}>The KUNWAR</span>,
            every creation begins with a story — your story. We believe clothing should be more than
            something you wear; it should be a reflection of identity, character, and personal
            distinction.
          </p>
          <p>
            Our bespoke approach allows us to create garments that are uniquely yours — crafted with
            precision, purpose, and an uncompromising commitment to excellence.
          </p>
        </article>

        <div className="mt-16 flex flex-wrap items-center gap-6 border-t pt-10"
          style={{ borderColor: "color-mix(in oklab, var(--outline-variant) 50%, transparent)" }}
        >
          <Link
            to="/"
            className="text-sm uppercase tracking-[0.25em] decoration-1 underline-offset-8 opacity-70 transition-all hover:underline hover:opacity-100"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            ← Return Home
          </Link>
        </div>
      </main>

      <SiteFooter />

    </div>
  );
}
