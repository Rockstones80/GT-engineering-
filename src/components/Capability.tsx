import { CAPABILITIES } from "@/lib/content";
import { SectionHead } from "./SectionHead";

export function Capability() {
  return (
    <section id="capability" className="section-x scroll-mt-28 pb-[76px]">
      <SectionHead
        eyebrow="Capability"
        title="What we do"
        standfirst="Six capability areas. Most programmes draw on more than one — which is the reason they sit inside a single company."
      />

      <ol data-stagger-in="0.05" className="ruled -mx-[30px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {CAPABILITIES.map((item) => (
          <li key={item.n} className="p-[30px]">
            <div className="tnum font-sans text-[10px] tracking-[0.18em] text-gold">
              {item.n}
            </div>
            <h3 className="mt-3.5 font-display text-[26px] leading-[1.2] font-medium">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-[1.75] text-ink/75">{item.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
