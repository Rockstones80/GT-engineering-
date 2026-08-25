export const NAV = [
  { href: "#capability", label: "Capability" },
  { href: "#catalogue", label: "Catalogue" },
  { href: "#stratose", label: "Stratose" },
  { href: "#platforms", label: "Platforms" },
  { href: "#quality", label: "Quality" },
  { href: "#contact", label: "Contact" },
] as const;

type Stat = {
  figure: string;
  label: string;
  countTo?: number;
  suffix?: string;
};

/**
 * `countTo` opts a figure into the count-up on reveal; `figure` is what the
 * server renders, so the animation only ever replays a value that is already
 * correct in the HTML. 24/7 is a ratio, not a quantity — it does not count.
 */
export const STATS: readonly Stat[] = [
  { figure: "24/7", label: "Technical & AOG desk" },
  { figure: "6", label: "Capability areas", countTo: 6 },
  { figure: "11", label: "Supply categories", countTo: 11 },
  { figure: "100%", label: "Lines with release docs", countTo: 100, suffix: "%" },
];

export const CAPABILITIES = [
  {
    n: "01",
    title: "Maintenance & engineering support",
    body: "Inspection, fault diagnosis and repair management for fixed-wing and rotary fleets, through approved workshops under our own engineering oversight.",
  },
  {
    n: "02",
    title: "Modernisation & upgrades",
    body: "Avionics retrofit, cockpit digitalisation and life-extension programmes carried out to approved design data, with mod status recorded on handover.",
  },
  {
    n: "03",
    title: "Supply chain & spare parts",
    body: "Rotables, consumables and expendables — sourced, qualified and delivered with a certificate of conformity or release on every line.",
  },
  {
    n: "04",
    title: "Training & technical support",
    body: "Type and maintenance training, simulator supply and modernisation, and on-site assistance — until your people can run it without us in the room.",
  },
  {
    n: "05",
    title: "Security & special systems",
    body: "Perimeter detection, access control, fire systems and counter-UAS for airports and critical sites — integrated as one system, not a pallet of boxes.",
  },
  {
    n: "06",
    title: "Stratose — aviation management software",
    body: "Our enterprise platform for fleet, maintenance, inventory and compliance records — the documentation discipline behind everything above, in one auditable system.",
  },
] as const;

export const APPROACH = [
  {
    n: "01",
    title: "Scope",
    body: "Part number, condition, standard, effectivity and date established before anything is priced.",
  },
  {
    n: "02",
    title: "Source",
    body: "Approved channels only: OEMs, licensed distributors and repair stations we have qualified ourselves.",
  },
  {
    n: "03",
    title: "Certify",
    body: "Release and test documentation collected at intake, not chased after delivery.",
  },
  {
    n: "04",
    title: "Move",
    body: "Custody, packing and dangerous-goods handling logged at each transfer point.",
  },
  {
    n: "05",
    title: "Prove",
    body: "The complete file is handed over with the goods and retained on our side for audit.",
  },
] as const;

export const CATALOGUE_PARTS = [
  "Rotables & repairables",
  "Consumables & expendables",
  "Seals & sealing",
  "Hydraulics & pneumatics",
  "Avionics & electrical",
  "Wheels, brakes & landing gear",
  "Cabin, interiors & safety",
  "Hard-to-find & obsolete",
] as const;

export const CATALOGUE_SYSTEMS = [
  "Security & surveillance systems",
  "Training & simulation systems",
  "Stratose management software",
] as const;

export const STRATOSE_MODULES = [
  {
    title: "Fleet & airworthiness",
    body: "Aircraft, component and life-limited part status with effectivity and mod standard held per tail.",
  },
  {
    title: "Maintenance planning",
    body: "Task cards, scheduled checks, defect and deferral tracking against the approved programme.",
  },
  {
    title: "Inventory & procurement",
    body: "Stock, consignment, shelf life and RFQ-to-purchase-order flow with supplier qualification built in.",
  },
  {
    title: "Documents & audit",
    body: "Release certificates and trace files attached to the line they belong to, retained and retrievable.",
  },
  {
    title: "Reliability reporting",
    body: "Removal rates, MTBUR and repeat-defect analysis exported in the regulator's format.",
  },
  {
    title: "Integration",
    body: "API and file exchange with ERP, finance and OEM data sources; role-based access and audit log.",
  },
] as const;

export const PLATFORMS = [
  {
    group: "Narrow body",
    types: ["Boeing 737 CL / NG / MAX", "Airbus A320 family / neo", "Boeing 727"],
  },
  {
    group: "Wide body",
    types: ["Boeing 777-200 / 300", "Boeing 787 · 747", "Airbus A310 / A330"],
  },
  {
    group: "Regional",
    types: ["ATR 42 / ATR 72", "Bombardier DHC Q400", "Antonov An-26 / An-32"],
  },
  {
    group: "Civil rotary",
    types: ["Airbus H125 / H155", "Bell 212 / 412", "Leonardo AW109 / AW139"],
  },
  {
    group: "Mi-class rotary",
    types: ["Mil Mi-8 / Mi-17", "Mil Mi-24 / Mi-35", "TV3-117, VR-14 / VR-24"],
  },
  {
    group: "State fleets",
    types: ["L-29 / L-39 trainers", "Su-25 / MiG-29", "Transport & utility fixed-wing"],
  },
] as const;

export const QUALITY = [
  {
    title: "Approved sources",
    body: "Parts and repairs come from OEMs, licensed distributors and certified repair stations. Each source is qualified before first use and reviewed on a set cycle.",
  },
  {
    title: "Documentation",
    body: "Release certificates, conformity certificates, test reports and packing declarations are collected at intake and travel with the goods.",
  },
  {
    title: "Traceability",
    body: "Serial and lot numbers are recorded on receipt. Every line can be traced to the last certified source and to the shipment that carried it.",
  },
  {
    title: "Dangerous goods",
    body: "Batteries, fluids, pressurised units and pyrotechnic items are classified and shipped under IATA, IMDG or ADR by trained staff.",
  },
  {
    title: "Configuration control",
    body: "Modification status, software standard and effectivity are confirmed before supply and stated on the handover documentation.",
  },
  {
    title: "Records retention",
    body: "The complete file is retained and retrievable for audit, including for parts supplied several years earlier.",
  },
] as const;

export const CONDITION_CODES = [
  "FN Factory new",
  "NE New surplus",
  "NS New old stock",
  "OH Overhauled",
  "SV Serviceable",
  "RP Repaired",
  "AR As removed",
] as const;

export const CONTACTS = [
  { label: "Technical desk · 24/7", value: "+971 56 823 3312", href: "tel:+971568233312" },
  { label: "Quotations", value: "rfq@gtengineering.me", href: "mailto:rfq@gtengineering.me" },
  { label: "Technical", value: "technical@gtengineering.me", href: "mailto:technical@gtengineering.me" },
  { label: "General", value: "info@gtengineering.me", href: "mailto:info@gtengineering.me" },
] as const;
