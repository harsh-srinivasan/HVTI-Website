"use client";

/* ================================================================
   PRODUCT HIGHLIGHTS
   File: components/products/ProductHighlights.tsx

   2x2 grid of key product capability highlights with circular
   orange checkmark badges.
   ================================================================ */

function CheckIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 12.5L9.5 17.5L19.5 6.5"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProductHighlights({
  highlights,
}: {
  highlights: string[];
}) {
  return (
    <div
      id="product-highlights"
      className="
        grid
        grid-cols-1
        gap-x-6
        gap-y-3
        sm:grid-cols-2
      "
    >
      {highlights.map((highlight) => (
        <div
          key={highlight}
          className="
            flex
            items-center
            gap-3
            font-sans
            text-[14.5px]
            font-medium
            leading-snug
            tracking-[-0.01em]
            text-[#F1F5F9]
            sm:text-[15px]
          "
        >
          <span
            className="
              flex
              h-[20px]
              w-[20px]
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#F97316]/40
              bg-[#F97316]/15
              text-[#F97316]
            "
          >
            <CheckIcon />
          </span>

          <span>{highlight}</span>
        </div>
      ))}
    </div>
  );
}