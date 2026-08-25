import Image from "next/image";
import airframe from "../../public/images/airframe.jpg";
import avionics from "../../public/images/avionics.jpg";
import { CATALOGUE_PARTS, CATALOGUE_SYSTEMS } from "@/lib/content";
import { SectionHead } from "./SectionHead";

const PLATE =
  "h-[190px] w-full rounded-[3px] border border-ink/14 bg-paper object-cover p-1.5 saturate-[.9]";

/** Numbered supply lines — the count runs unbroken across both columns, 01–11. */
function Lines({ items, from }: { items: readonly string[]; from: number }) {
  return (
    <ul data-stagger="0.055" className="text-sm">
      {items.map((item, i) => (
        <li
          key={item}
          className="flex gap-3 py-[9px] not-last:border-b not-last:border-ink/10"
        >
          <span className="tnum font-sans text-[10.5px] text-ink/40">
            {String(from + i).padStart(2, "0")}
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Catalogue() {
  return (
    <section id="catalogue" className="section-x scroll-mt-28 py-[76px]">
      <SectionHead
        eyebrow="Catalogue"
        title="Scope of supply"
        standfirst="Eleven categories in two sections. Availability, condition and price come by quotation."
        standfirstWidth="max-w-[48ch]"
      />

      <div className="mt-9 grid gap-12 lg:grid-cols-2 lg:gap-[52px]">
        <div className="flex flex-col gap-4">
          <Image src={airframe} alt="Airframe under work in a hangar" placeholder="blur" sizes="(max-width: 1024px) 100vw, 640px" data-plate className={PLATE} />
          <div data-reveal>
            <div className="micro-gold">Section one · 01–08</div>
            <h3 className="mt-2.5 font-display text-[27px] font-medium">
              Aircraft parts &amp; components
            </h3>
          </div>
          <Lines items={CATALOGUE_PARTS} from={1} />
        </div>

        <div className="flex flex-col gap-4">
          <Image src={avionics} alt="Avionics and systems work at a bench" placeholder="blur" sizes="(max-width: 1024px) 100vw, 640px" data-plate className={PLATE} />
          <div data-reveal>
            <div className="micro-gold">Section two · 09–11</div>
            <h3 className="mt-2.5 font-display text-[27px] font-medium">
              Systems &amp; integration
            </h3>
          </div>
          <Lines items={CATALOGUE_SYSTEMS} from={9} />

          <p data-reveal className="mt-1.5 text-[13.5px] leading-[1.75] text-ink/70 sm:text-justify">
            Designed as one installation and handed over working, rather than
            delivered as a pallet of compatible boxes — threat assessment first,
            integrated commissioning at the end.
          </p>
          <a data-reveal href="#contact" className="btn btn-gold mt-1 self-stretch text-center">
            Request the full catalogue
          </a>
        </div>
      </div>
    </section>
  );
}
