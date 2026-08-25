"use client";

import { useEffect, useState } from "react";
import { NAV } from "@/lib/content";
import { Star } from "./Star";

/**
 * The AOG strip plus the sticky masthead. Above `lg` the nav sits inline, as in
 * the original; below it collapses behind a disclosure so the wordmark and the
 * RFQ button — the two things a stranded engineer needs — stay on one line.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);

  // Read-only scroll listener, coalesced to one read per frame. Passive, and it
  // only ever flips a boolean — the size change itself is a CSS transition.
  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setCondensed(window.scrollY > 48);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* AOG desk — the only always-on line on the page */}
      <div className="section-x flex flex-wrap items-center gap-x-3 gap-y-1 bg-night py-[9px] font-sans text-[11.5px] tracking-[0.06em] text-gold-light">
        <span
          aria-hidden="true"
          className="aog-dot size-1.5 shrink-0 rounded-full"
        />
        <span className="sm:hidden">AOG desk — open 24/7</span>
        <span className="hidden sm:inline">
          AOG &amp; technical desk open — staffed around the clock
        </span>
        <a
          href="tel:+971568233312"
          className="border-b border-gold-light/40 text-gold-light hover:text-white"
        >
          +971 56 823 3312
        </a>
        <span className="ml-auto hidden text-white/45 sm:inline">
          Dubai, United Arab Emirates
        </span>
      </div>

      <header
        data-condensed={condensed || undefined}
        className={`section-x sticky top-0 z-20 border-b bg-bg/94 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${
          condensed
            ? "border-ink/14 shadow-[0_1px_16px_rgb(32_31_29/0.07)]"
            : "border-ink/14 shadow-none"
        }`}
      >
        <div
          className={`flex items-center gap-x-3 gap-y-4 transition-[padding] duration-300 sm:gap-x-7 ${
            condensed ? "py-2.5" : "py-4"
          }`}
        >
          <a href="#top" className="flex flex-none items-center gap-3 whitespace-nowrap">
            <Star
              width={34}
              className={`transition-transform duration-300 ${
                condensed ? "scale-90" : "scale-100"
              }`}
            />
            <span className="flex flex-col gap-0.5 border-l border-gold/55 pl-3">
              <span className="font-sans text-[15px] font-bold tracking-[-0.2px] text-[#1c2b25]">
                GT ENGINEERING
              </span>
              <span className="hidden font-sans text-[8.5px] font-medium tracking-[0.34em] text-[#1c2b25]/60 min-[400px]:block">
                SERVICES · DUBAI
              </span>
            </span>
          </a>

          <nav className="ml-auto hidden flex-wrap gap-x-[22px] gap-y-2.5 font-sans text-xs uppercase tracking-[0.08em] whitespace-nowrap lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-transparent pb-[3px] text-ink/72 transition-colors hover:border-gold hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#rfq"
            className="ml-auto flex-none rounded-[4px] border border-gold px-3 py-2 font-sans text-[11px] uppercase tracking-[0.08em] whitespace-nowrap text-gold-deep transition-colors hover:bg-gold/10 hover:text-gold-press sm:px-[18px] sm:py-[9px] sm:text-xs lg:ml-0"
          >
            {/* The CTA keeps its place on every width — only its label gives way */}
            <span className="sm:hidden">RFQ</span>
            <span className="hidden sm:inline">Send an RFQ</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="-mr-2.5 flex size-11 flex-none items-center justify-center rounded-[4px] text-ink/70 transition-colors hover:text-gold-deep lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
              <path
                d={open ? "M2 1 L16 11 M16 1 L2 11" : "M0 1h18M0 6h18M0 11h18"}
                stroke="currentColor"
                strokeWidth="1.25"
              />
            </svg>
          </button>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            className="grid gap-px border-t border-ink/12 bg-ink/12 pb-px lg:hidden"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="bg-bg py-3.5 font-sans text-xs uppercase tracking-[0.14em] text-ink/72 hover:text-gold-deep"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
