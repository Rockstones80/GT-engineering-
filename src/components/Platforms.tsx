import { PLATFORMS } from "@/lib/content";
import { SectionHead } from "./SectionHead";

export function Platforms() {
  return (
    <section id="platforms" className="section-x scroll-mt-28 pb-[76px]">
      <SectionHead
        eyebrow="Coverage"
        title="Platforms supported"
        standfirst="Western and CIS-origin fleets, civil and state."
        standfirstWidth="max-w-none"
      />

      <div data-stagger-in="0.05" className="ruled flush mt-2 grid-cols-2 md:grid-cols-3 md:[--flush:22px] xl:grid-cols-6">
        {PLATFORMS.map((entry) => (
          <div key={entry.group} className="py-[26px]">
            <div className="font-sans text-[9.5px] uppercase tracking-[0.16em] text-ink/50">
              {entry.group}
            </div>
            <ul className="mt-3 text-sm leading-[1.9]">
              {entry.types.map((type) => (
                <li key={type}>{type}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p data-reveal className="mt-[22px] text-[13px] text-ink/55 italic">
        Platform not listed? Coverage is driven by sourcing and workshop reach
        rather than by fleet type — send the requirement.
      </p>
    </section>
  );
}
