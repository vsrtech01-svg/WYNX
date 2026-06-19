import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroDesktopAsset from "@/assets/hero-desktop.png.asset.json";
import theLogo from "@/assets/the-logo.png";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";


const HERO_DESKTOP = heroDesktopAsset.url;
const HERO_MOBILE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCBCYSkZs3k540x1HQrTAWRkSPbsCM-h9ilq6DKVNx9ynSmL_tb3rgfgqzOfL184GA1g_eHQYbs-vS6AAtgSRmSWvhBIgNmpgGduBce416T9X4lhXL3aiKfgpbXGi0AY0h_lXSPjAXrRHUsMwlASukOiH0bdl179ESd0oWVu3RRayaSF4O4iHhWGZsoocVyQfFaZCAukjZfUuzcEaQsSl_HThgQXPI4AtIcMtb-MAYWhGSnhnRq21lPUExDm4HMPcseF6pzj5fF6oc";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "THE KUNWAR | A Refined Experience is Coming Soon" },
      {
        name: "description",
        content:
          "The Kunwar — modern bespoke tailoring & quiet luxury. A refined online experience is coming soon.",
      },
      { property: "og:title", content: "THE KUNWAR | Coming Soon" },
      {
        property: "og:description",
        content: "A legacy of quiet luxury. Modern bespoke tailoring, coming soon.",
      },
      { property: "og:image", content: HERO_DESKTOP },
    ],
  }),
  component: Index,
});

const KUNWAR = "KUNWAR".split("");

function Index() {
  // Only play intro the first time the site loads in this session.
  const [shouldPlayIntro] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return sessionStorage.getItem("kw_intro_played") !== "1";
    } catch {
      return true;
    }
  });
  const [introDone, setIntroDone] = useState(!shouldPlayIntro);

  useEffect(() => {
    if (!shouldPlayIntro) return;
    // Mark the intro as played immediately so it never re-triggers,
    // even if the user navigates away before the animation finishes.
    try {
      sessionStorage.setItem("kw_intro_played", "1");
    } catch {
      /* ignore */
    }
    const t = setTimeout(() => {
      setIntroDone(true);
    }, 5200);
    return () => clearTimeout(t);
  }, [shouldPlayIntro]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-primary">
      <div className="kw-grain" />

      {/* Intro overlay — only renders on the very first site load per session */}
      {shouldPlayIntro && (
      <div
        className={`fixed inset-0 z-[60] flex items-center justify-center bg-background transition-opacity duration-[1500ms] ${
          introDone ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="kw-logo-container kw-light-sweep flex items-center">
          <img
            src={theLogo}
            alt="The"
            className="h-[56px] w-auto md:h-[90px]"
            style={{ marginRight: "-8px", transform: "translateY(2px)" }}
          />
          <div
            className="flex text-4xl uppercase tracking-[0.4em] md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {KUNWAR.map((ch, i) => (
              <span
                key={i}
                className="kw-letter"
                style={{ animationDelay: `${1.6 + i * 0.22}s` }}
              >
                {ch}
              </span>
            ))}
          </div>
        </div>

      </div>
      )}

      {/* Main content */}
      <div
        className={`flex min-h-screen flex-col transition-opacity duration-[1500ms] ${
          introDone ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Header */}
        <SiteHeader />


        {/* Hero */}
        <section className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col gap-10 px-6 py-10 md:flex-row md:gap-8 md:px-20 md:py-16">
          {/* Text */}
          <div className="order-2 flex w-full flex-col justify-center md:order-1 md:w-1/2">
            <div className="max-w-xl space-y-8">
              <h1
                className="text-[40px] uppercase leading-[1.1] tracking-tight md:text-[64px] md:leading-[1.08]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                A Refined Experience
                <br />
                <span className="italic lowercase" style={{ fontWeight: 400 }}>
                  is coming soon
                </span>
              </h1>

              <div className="kw-draw-line" />

              <p
                className="kw-fade-up max-w-lg text-[17px] leading-[1.7] opacity-80 md:text-lg"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300, color: "var(--on-surface-variant)" }}
              >
                We are currently enhancing The Kunwar online experience. Please return shortly
                to explore our world of modern tailoring. Until then, discover our latest
                pieces on Instagram.
              </p>

              <div
                className="kw-fade-up flex flex-wrap gap-12 border-t pt-8"
                style={{ borderColor: "color-mix(in oklab, var(--outline-variant) 50%, transparent)" }}
              >
                <div className="space-y-3">
                  <span
                    className="block text-[11px] uppercase tracking-[0.2em] opacity-50"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    Contact
                  </span>
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:+919983799328"
                      className="text-base tracking-wide decoration-1 underline-offset-8 transition-all hover:underline md:text-lg"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      +91 99837 99328
                    </a>
                    <a
                      href="mailto:thekunwar.co@gmail.com"
                      className="text-base tracking-wide decoration-1 underline-offset-8 transition-all hover:underline md:text-lg"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      thekunwar.co@gmail.com
                    </a>
                  </div>
                </div>
                <div className="space-y-3">
                  <span
                    className="block text-[11px] uppercase tracking-[0.2em] opacity-50"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    Connect
                  </span>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.instagram.com/thekunwar.co?igsh=aG9oNTVpMXZucXpv"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex h-11 w-11 items-center justify-center rounded-full border transition-all hover:bg-primary hover:text-background"
                      style={{ borderColor: "color-mix(in oklab, var(--outline-variant) 60%, transparent)" }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/919983799328"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="flex h-11 w-11 items-center justify-center rounded-full border transition-all hover:bg-primary hover:text-background"
                      style={{ borderColor: "color-mix(in oklab, var(--outline-variant) 60%, transparent)" }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 w-full md:order-2 md:w-1/2">
            <div
              className="relative aspect-[3/4] w-full overflow-hidden border shadow-sm md:aspect-[4/5]"
              style={{
                backgroundColor: "var(--surface-container)",
                borderColor: "color-mix(in oklab, var(--outline-variant) 40%, transparent)",
              }}
            >
              <img
                src={HERO_DESKTOP}
                alt="Bespoke tan tailored jacket on a wooden mannequin in a sunlit Parisian atelier — The Kunwar"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <SiteFooter />

      </div>
    </div>
  );
}
