import { CONDITION_CODES, QUALITY } from "@/lib/content";
import { SectionHead } from "./SectionHead";

export function Quality() {
  return (
    <section id="quality" className="section-x scroll-mt-28 pb-20">
      <SectionHead
        eyebrow="Assurance"
        title="Quality & compliance"
        standfirst="How a claim on a quotation becomes something a regulator or an auditor will accept."
        standfirstWidth="max-w-[44ch]"
      />

      <div data-stagger className="mt-[34px] grid gap-x-[34px] gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {QUALITY.map((item) => (
          <div key={item.title}>
            <h3 className="font-sans text-[11px] uppercase tracking-[0.16em] text-gold-deep">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-[1.8] text-ink/78 sm:text-justify">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <div data-stagger="0.045" className="mt-10 flex flex-wrap items-center gap-3.5 border-t border-ink/12 pt-[26px]">
        <span className="micro mr-1.5">Condition codes</span>
        {CONDITION_CODES.map((code) => (
          <span
            key={code}
            className="rounded-[3px] border border-gold/60 px-[11px] py-[5px] font-sans text-[11px] tracking-[0.08em] text-gold-deep"
          >
            {code}
          </span>
        ))}
      </div>
    </section>
  );
}
