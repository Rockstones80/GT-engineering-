/**
 * Every section opens the same way: a gold eyebrow, a display heading, and a
 * standfirst pushed to the far margin — the three sitting on one baseline above
 * a rule. Below `lg` they stack and the standfirst returns to the left.
 *
 * The rule is a real element rather than a border so it can draw itself in from
 * the left margin as the section arrives.
 */
export function SectionHead({
  eyebrow,
  title,
  standfirst,
  standfirstWidth = "max-w-[46ch]",
  night = false,
}: {
  eyebrow: string;
  title: string;
  standfirst: string;
  standfirstWidth?: string;
  night?: boolean;
}) {
  return (
    <div className="relative flex flex-col gap-4 pb-4 lg:flex-row lg:items-baseline lg:gap-5">
      <span
        data-reveal
        className={`eyebrow flex-none ${night ? "text-gold-light" : "text-gold-deep"}`}
      >
        {eyebrow}
      </span>
      <h2
        data-reveal
        className="font-display text-[clamp(2rem,4.4vw,44px)] leading-none font-normal"
      >
        {title}
      </h2>
      <p
        data-reveal
        className={`text-[13.5px] leading-[1.7] lg:ml-auto lg:text-right ${standfirstWidth} ${
          night ? "text-white/55" : "text-ink/65"
        }`}
      >
        {standfirst}
      </p>
      <span
        data-rule
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-0 h-px origin-left ${
          night ? "bg-white/18" : "bg-ink/18"
        }`}
      />
    </div>
  );
}
