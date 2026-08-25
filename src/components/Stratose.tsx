import { STRATOSE_MODULES } from "@/lib/content";

export function Stratose() {
  return (
    <section id="stratose" className="section-x scroll-mt-28 pb-[76px]">
      <div className="rounded-[4px] border border-ink/16 bg-paper px-6 py-10 sm:px-11 sm:py-12">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
          <div data-reveal>
            <div className="flex items-center gap-3">
              <span className="eyebrow flex-none">Enterprise solution</span>
              <span className="h-px flex-1 bg-gold/40" />
            </div>

            <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,52px)] leading-[1.04] font-normal">
              Stratose — aviation management software
            </h2>

            <p className="mt-5 max-w-[54ch] text-[15.5px] leading-[1.8] text-ink/80 sm:text-justify">
              The record-keeping discipline we apply to every shipment, sold as a
              system. Stratose holds fleet, maintenance, inventory and compliance
              data in one place, so airworthiness status, part traceability and
              document retention are queried rather than reconstructed. Deployed
              on premises or hosted, and configured against your existing
              procedures rather than replacing them.
            </p>

            <div className="mt-[30px] flex flex-wrap gap-3">
              <a href="#rfq" className="btn btn-gold">
                Request a demonstration
              </a>
              <a href="#contact" className="btn btn-quiet">
                Download the module list
              </a>
            </div>
          </div>

          <dl data-stagger-in="0.05" className="ruled-paper -mx-[22px] grid-cols-1 sm:grid-cols-2">
            {STRATOSE_MODULES.map((module) => (
              <div key={module.title} className="px-[22px] py-[22px]">
                <dt className="micro-gold">{module.title}</dt>
                <dd className="mt-2.5 text-[13.5px] leading-[1.75] text-ink/75">
                  {module.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
