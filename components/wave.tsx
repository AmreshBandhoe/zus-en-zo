/*
 * The brand wave. Systematised version of the hand-drawn orange divider from
 * the current site. Used once, on the single orange colour-block section, at
 * both its edges. `fill` follows `currentColor`, so the wrapper sets the colour.
 */
export function Wave({
  flip = false,
  className = "",
}: {
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 90"
      preserveAspectRatio="none"
      className={`block h-[clamp(28px,5vw,64px)] w-full ${className}`}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <path
        d="M0,46 C140,12 260,10 400,40 C540,70 620,78 760,52 C900,26 1030,20 1200,50 L1200,90 L0,90 Z"
        fill="currentColor"
      />
    </svg>
  );
}
