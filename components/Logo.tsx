/**
 * Custom logo mark — a forward route node.
 * Two motion chevrons (speed) leading into a tracked waypoint (safety/GPS).
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="10"
        stroke="#2C2C2C"
        strokeWidth="1.5"
        fill="#0D0D0D"
      />
      {/* motion chevrons */}
      <path
        d="M9 14l6 6-6 6"
        stroke="#FF5B29"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 14l6 6-6 6"
        stroke="#FF5B29"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
      {/* tracked waypoint */}
      <circle cx="30" cy="20" r="4.5" fill="none" stroke="#F4F4F2" strokeWidth="2" />
      <circle cx="30" cy="20" r="1.6" fill="#FF5B29" />
    </svg>
  );
}
