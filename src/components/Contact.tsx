import { CONTACTS } from "@/lib/content";
import { Star } from "./Star";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-x scroll-mt-28 bg-night pt-20 pb-16 text-bg"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div data-reveal>
          <h2 data-reveal className="font-display text-[clamp(2.5rem,6vw,58px)] leading-[1.05] font-normal">
            Tell us the requirement.
          </h2>
          <p className="mt-[22px] max-w-[52ch] text-base leading-[1.8] text-white/70 sm:text-justify">
            A part number, a defect, a fleet upgrade or an aerodrome system. We
            will tell you what we can do, to what standard, on what
            documentation, and how fast.
          </p>
          <a href="#rfq" className="btn btn-onnight mt-[30px] text-xs">
            Send a requirement
          </a>
        </div>

        <dl data-stagger="0.07" className="grid gap-x-[30px] gap-y-[26px] sm:grid-cols-2">
          {CONTACTS.map((contact) => (
            <div key={contact.label}>
              <dt className="font-sans text-[9.5px] uppercase tracking-[0.18em] text-gold-mid">
                {contact.label}
              </dt>
              <dd className="mt-[9px] text-[15px]">
                <a href={contact.href} className="text-bg hover:text-gold-light">
                  {contact.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-[60px] flex flex-wrap items-center gap-3.5 border-t border-white/16 pt-[22px] font-sans text-[11px] tracking-[0.08em] text-white/45">
        <Star width={22} variant="flat" />
        <span>GT ENGINEERING SERVICES LLC · Dubai, United Arab Emirates</span>
        <span className="sm:ml-auto">www.gtengineering.me · © 2026</span>
      </div>
    </section>
  );
}
