/**
 * The house mark: a five-point star carrying three chevrons. Two cuts —
 * `gradient` for the light ground (a gold that turns as it falls), and `flat`
 * for the night footer, where the chevrons are punched out in the ground colour.
 */
export function Star({
  width = 34,
  variant = "gradient",
  className,
}: {
  width?: number;
  variant?: "gradient" | "flat";
  className?: string;
}) {
  const height = Math.round((width * 184) / 200);
  const star =
    "M100 6 L123.2 68.2 L189.7 71.2 L137.7 112.4 L155.1 176.6 L100 140.4 " +
    "L44.9 176.6 L62.3 112.4 L10.3 71.2 L76.8 68.2 Z";

  if (variant === "flat") {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 200 184"
        aria-hidden="true"
        className={className}
      >
        <path d={star} fill="#c99a48" />
        <path d="M100 40 L117 96 L100 86 L83 96 Z" fill="#141311" />
        <path d="M100 100 L120 152 L100 139 L80 152 Z" fill="#141311" />
      </svg>
    );
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 184"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="gt-star" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e6c477" />
          <stop offset=".38" stopColor="#c69a45" />
          <stop offset=".62" stopColor="#a9762a" />
          <stop offset="1" stopColor="#d8b062" />
        </linearGradient>
      </defs>
      <path d={star} fill="url(#gt-star)" />
      <path d="M100 36 L118 92 L100 81.5 L82 92 Z" fill="#f3f2f2" />
      <path d="M100 90 L120 128 L100 116.5 L80 128 Z" fill="#f3f2f2" />
      <path d="M100 124 L122 163 L100 150.5 L78 163 Z" fill="#f3f2f2" />
    </svg>
  );
}
