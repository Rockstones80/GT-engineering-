import { APPROACH } from "@/lib/content";
import { SectionHead } from "./SectionHead";

export function Approach() {
  return (
    <section className="section-x bg-night py-[72px] text-bg">
      <SectionHead
        night
        eyebrow="Approach"
        title="How we work"
        standfirst="Five steps — a single part number or a fleet-wide programme."
        standfirstWidth="max-w-none"
      />

      <ol data-stagger="0.09" className="mt-[38px] grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {APPROACH.map((step) => (
          <li key={step.n}>
            <div className="tnum font-display text-[46px] leading-none text-gold-light/35">
              {step.n}
            </div>
            <h3 className="mt-3.5 font-sans text-xs uppercase tracking-[0.14em]">
              {step.title}
            </h3>
            <p className="mt-2.5 text-[13.5px] leading-[1.75] text-white/68">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
