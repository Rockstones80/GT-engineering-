"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const EASE = "power3.out";
const START = "top 86%";

/**
 * One orchestrator for the whole page.
 *
 * The sections stay server components and only carry `data-*` marks; this
 * mounts once and wires every trigger from here. Two consequences worth
 * knowing: the animated markup ships zero client JS of its own, and the whole
 * motion design is legible in a single file instead of scattered across nine
 * wrappers.
 *
 * Everything animates transform and opacity only — no layout properties — and
 * the entire set is behind `prefers-reduced-motion`, so the reduced case is not
 * a degraded animation but no animation at all.
 */
export function Motion() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      /* ── Hero: the one timeline that runs on load rather than on scroll ── */
      const heroItems = gsap.utils.toArray<HTMLElement>("[data-hero]");
      if (heroItems.length) {
        gsap.timeline({ delay: 0.15 }).fromTo(
          heroItems,
          { y: 26, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: EASE,
            stagger: 0.085,
            clearProps: "transform",
          },
        );
      }

      /* ── Counters — the SSR markup already holds the final value, so this
            only ever rewinds and replays it. ── */
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const suffix = el.dataset.countSuffix ?? "";
        if (!Number.isFinite(target)) return;

        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.5,
          delay: 0.5,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${Math.round(counter.value)}${suffix}`;
          },
          scrollTrigger: { trigger: el, start: START, once: true },
        });
      });

      /* ── Section rules draw in from the margin ── */
      gsap.utils.toArray<HTMLElement>("[data-rule]").forEach((rule) => {
        gsap.fromTo(
          rule,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.1,
            ease: "power2.inOut",
            scrollTrigger: { trigger: rule, start: "top 94%", once: true },
          },
        );
      });

      /* ── The general case: anything marked reveals once on approach ── */
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: EASE,
            clearProps: "transform",
            scrollTrigger: { trigger: el, start: START, once: true },
          },
        );
      });

      /* ── Grids and lists come in as a run, not all at once.
            Two targeting modes, and the difference matters:

            `data-stagger`    animates the direct children. Only safe where
                              nothing is painted behind them.
            `data-stagger-in` animates the children's contents instead. The
                              ruled grids paint their hairlines as the PARENT's
                              background and punch the cells back over it — fade
                              those cells out and the whole block reads as a
                              solid tinted rectangle until the run finishes. So
                              there the rules stay drawn and the copy populates
                              into the scaffold. ── */
      const runStagger = (group: HTMLElement, selector: string, amount: number) => {
        const items = gsap.utils.toArray<HTMLElement>(selector, group);
        if (!items.length) return;

        gsap.fromTo(
          items,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: EASE,
            stagger: amount,
            clearProps: "transform",
            scrollTrigger: { trigger: group, start: START, once: true },
          },
        );
      };

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        runStagger(group, ":scope > *", Number(group.dataset.stagger) || 0.07);
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger-in]").forEach((group) => {
        runStagger(group, ":scope > * > *", Number(group.dataset.staggerIn) || 0.05);
      });

      /* ── Plates open from the centre band outward ── */
      gsap.utils.toArray<HTMLElement>("[data-plate]").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(14% 0% 14% 0%)", opacity: 0 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          },
        );
      });

      /* ── A little drift on the hangar plate. Scaled up first so the frame
            never runs out of image at either end of the scrub. ── */
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.set(el, { scale: 1.16 });
        gsap.fromTo(
          el,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          },
        );
      });

      /* Triggers cache their start/end positions at setup. The display:swap
         webfonts land after that and reflow the page, which would leave every
         position stale — measurably so on the long text sections. Re-measure
         once the faces are in. */
      let stale = true;
      void document.fonts?.ready.then(() => {
        if (stale) ScrollTrigger.refresh();
      });

      return () => {
        stale = false;
        /* matchMedia reverts the inline styles it set; this only clears the
           counters' rewound text, which lives outside GSAP's control. */
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          el.textContent = `${el.dataset.count}${el.dataset.countSuffix ?? ""}`;
        });
      };
    });

    return () => mm.revert();
  });

  return null;
}
