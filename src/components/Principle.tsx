import Image from "next/image";
import hangar from "../../public/images/hangar.jpg";

export function Principle() {
  return (
    <section className="section-x pb-[72px]">
      <div className="relative rounded-[4px] border border-ink/14 bg-paper p-2.5">
        <div data-plate className="overflow-hidden rounded-[2px]">
          <Image
            src={hangar}
            alt="Wide-body aircraft under maintenance in a hangar"
            placeholder="blur"
            priority
            sizes="(max-width: 1440px) 100vw, 1344px"
            data-parallax
            className="h-[220px] w-full object-cover contrast-[1.03] saturate-[.88] sm:h-[280px] lg:h-[340px]"
          />
        </div>
        <div
          data-reveal
          className="mt-2.5 max-w-[420px] rounded-[3px] bg-night/85 px-[22px] py-4 text-bg sm:absolute sm:bottom-[34px] sm:left-[34px] sm:mt-0"
        >
          <div className="font-sans text-[9.5px] uppercase tracking-[0.2em] text-gold-light">
            Operating principle
          </div>
          <p className="mt-[9px] font-display text-2xl leading-[1.3]">
            Nothing moves without a record. A part we cannot trace is declined
            rather than quoted with a caveat.
          </p>
        </div>
      </div>
    </section>
  );
}
