import { STATS } from "@/lib/content";
import { RfqForm } from "./RfqForm";

export function Hero() {
  return (
    <section
      id="top"
      className="section-x grid scroll-mt-28 items-start gap-12 pt-14 pb-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-16 lg:pt-[76px]"
    >
      <div className="min-w-0">
        <div data-hero className="eyebrow">
          General engineering &amp; supply chain · Dubai, UAE
        </div>

        <h1
          data-hero
          className="mt-[22px] font-display text-[clamp(2.75rem,7vw,76px)] leading-[1.02] font-normal tracking-[-0.5px] text-pretty"
        >
          Engineering support and supplier, held to the record.
        </h1>

        <p
          data-hero
          className="mt-[26px] max-w-[56ch] text-[16.5px] leading-[1.75] text-ink/82 sm:text-justify"
        >
          We support aircraft operators, maintenance organisations, airports and
          government fleets across engineering and maintenance, the supply of
          parts and equipment, and the integration of ground and security
          systems. The common thread is documentation: anyone can find a part or
          quote a job — the difference is what arrives with it, and whether the
          file still stands up when an auditor asks in two years&rsquo; time.
        </p>

        <dl data-hero className="mt-11 border-y border-ink/18">
          <div className="ruled flush grid-cols-2 sm:grid-cols-4 md:[--flush:20px]">
            {STATS.map((stat) => (
              <div key={stat.label} className="py-5">
                <dd
                  className="tnum font-display text-[38px] leading-none"
                  data-count={stat.countTo}
                  data-count-suffix={stat.suffix}
                >
                  {stat.figure}
                </dd>
                <dt className="micro mt-2">{stat.label}</dt>
              </div>
            ))}
          </div>
        </dl>
      </div>

      <RfqForm />
    </section>
  );
}
