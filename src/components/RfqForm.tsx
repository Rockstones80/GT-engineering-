"use client";

import { useState } from "react";

const FIELD =
  "w-full min-w-0 rounded-[4px] border border-ink/25 bg-field px-[13px] py-[11px] " +
  "font-body text-[13.5px] text-ink placeholder:text-ink/40 caret-gold " +
  "transition-colors hover:border-ink/45 focus:border-gold focus:outline-none";

const LABEL = "micro";

/**
 * There is no submit endpoint behind this site, so the form composes the
 * enquiry into a mail draft instead of pretending to send it — same fields, and
 * the AOG flag lands in the subject line where the desk actually filters on it.
 */
export function RfqForm() {
  const [part, setPart] = useState("");
  const [aircraft, setAircraft] = useState("");
  const [condition, setCondition] = useState("");
  const [aog, setAog] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `${aog ? "AOG — " : ""}RFQ${part ? `: ${part}` : ""}`;
    const body = [
      `Part number or defect: ${part || "—"}`,
      `Aircraft type: ${aircraft || "—"}`,
      `Condition required: ${condition || "—"}`,
      `AOG: ${aog ? "Yes" : "No"}`,
      "",
      "Requirement:",
    ].join("\n");

    window.location.href = `mailto:rfq@gtengineering.me?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      id="rfq"
      onSubmit={handleSubmit}
      className="flex min-w-0 scroll-mt-28 flex-col gap-[18px] rounded-[4px] border border-ink/16 bg-paper p-6 sm:p-[30px]"
    >
      <div>
        <div className="eyebrow tracking-[0.2em]">Start an enquiry</div>
        <h2 className="mt-3 font-display text-[29px] leading-[1.2] font-medium">
          Send a part number. Or a problem.
        </h2>
        <p className="mt-2.5 text-[13.5px] leading-[1.7] text-ink/70">
          We reply within the working day with condition, certification type and
          lead time — line by line.
        </p>
      </div>

      <label className="flex flex-col gap-[7px]">
        <span className={LABEL}>Part number or defect</span>
        <input
          type="text"
          name="part"
          value={part}
          onChange={(e) => setPart(e.target.value)}
          placeholder="e.g. 3214-6, or: A320 nose gear actuator leak"
          className={FIELD}
        />
      </label>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-[7px]">
          <span className={LABEL}>Aircraft type</span>
          <input
            type="text"
            name="aircraft"
            value={aircraft}
            onChange={(e) => setAircraft(e.target.value)}
            placeholder="A320neo"
            className={FIELD}
          />
        </label>
        <label className="flex flex-col gap-[7px]">
          <span className={LABEL}>Condition required</span>
          <input
            type="text"
            name="condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            placeholder="OH / SV / NE"
            className={FIELD}
          />
        </label>
      </div>

      <label className="flex cursor-pointer items-center gap-2.5 text-[13.5px] text-ink/80">
        <input
          type="checkbox"
          name="aog"
          checked={aog}
          onChange={(e) => setAog(e.target.checked)}
          className="size-[15px] accent-gold"
        />
        This is an AOG requirement
      </label>

      <button
        type="submit"
        className="btn btn-gold w-full py-[13px] text-xs tracking-[0.1em] active:bg-gold/20"
      >
        Send requirement
      </button>

      <p className="text-xs leading-[1.6] text-ink/50">
        Or write to{" "}
        <a href="mailto:rfq@gtengineering.me">rfq@gtengineering.me</a> — state
        AOG in the subject line.
      </p>
    </form>
  );
}
