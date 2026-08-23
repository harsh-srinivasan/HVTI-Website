"use client";

import { useEffect, useRef, useState } from "react";

/* ================================================================
   PRODUCT ENGINEERING AT A GLANCE
   File: components/products/ProductEngineeringAtAGlance.tsx

   Communicates major engineering characteristics visually through
   large purple line icons, crisp values, and clear descriptions.
   Designed to sit directly inside the unified ProductOverview section.
   ================================================================ */

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.55,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    ref,
    visible,
  };
}

/* ================================================================
   CUSTOM ENGINEERING SVG ICONS
   ================================================================ */

function LightningIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6H14M18 6H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="16" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 12H6M10 12H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="8" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 18H12M16 18H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="14" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3L20 7V12C20 17 16.5 20.5 12 22C7.5 20.5 4 17 4 12V7L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L11 14L15 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 12V14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 13H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="1 3" />
    </svg>
  );
}

function TransformerIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8.5" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="15.5" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 7.5V3M15.5 7.5V3M8.5 16.5V21M15.5 16.5V21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 3H11M13 3H18M6 21H11M13 21H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function getIconComponent(icon: string) {
  switch (icon) {
    case "lightning":
    case "voltage":
      return LightningIcon;
    case "sliders":
    case "control":
      return SlidersIcon;
    case "shield":
    case "pd":
      return ShieldIcon;
    case "briefcase":
    case "testing":
      return BriefcaseIcon;
    case "transformer":
    case "power":
    default:
      return TransformerIcon;
  }
}

export type EngineeringItem = {
  id?: string;
  icon: string;
  value: string;
  description: string;
};

export default function ProductEngineeringAtAGlance({
  items,
}: {
  items: EngineeringItem[];
}) {
  const { ref, visible } = useReveal();

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {/* ========================================================
          INTERNAL SECTION HEADER
          ======================================================== */}

      <div
        ref={ref}
        className={`
          mb-8
          text-center

          transition-all
          duration-[1200ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          motion-reduce:transition-none
          motion-reduce:transform-none
          motion-reduce:opacity-100

          ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-[24px] opacity-0"
          }
        `}
      >
        <div className="mb-2.5 flex items-center justify-center gap-3">
          <span className="h-[2px] w-7 bg-[#A855F7]" />

          <span
            className="
              font-sans
              text-[11.5px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#A855F7]
            "
          >
            Engineering At a Glance
          </span>

          <span className="h-[2px] w-7 bg-[#A855F7]" />
        </div>

        <h3
          className="
            mx-auto
            max-w-[640px]
            font-heading
            text-[26px]
            font-semibold
            leading-[1.18]
            tracking-[-0.025em]
            text-white
            sm:text-[28px]
            xl:text-[30px]
          "
        >
          Everything you need for confident high-voltage testing.
        </h3>
      </div>

      {/* ========================================================
          HORIZONTAL METRICS GRID (5 items with vertical dividers)
          ======================================================== */}

      <div
        className="
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          lg:grid-cols-5
          lg:gap-0
        "
      >
        {items.map((item, index) => {
          const IconComponent = getIconComponent(item.icon);
          const isLast = index === items.length - 1;

          return (
            <div
              key={item.value}
              className={`
                group
                relative
                flex
                flex-col
                items-center
                px-4
                py-4
                text-center
                rounded-[8px]
                hover:bg-white/[0.02]

                transition-all
                duration-[1200ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]

                motion-reduce:transition-none
                motion-reduce:transform-none
                motion-reduce:opacity-100

                lg:rounded-none
                ${!isLast ? "lg:border-r lg:border-white/[0.07]" : ""}

                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[24px] opacity-0"
                }
              `}
              style={{
                transitionDelay: `${index * 90 + 90}ms`,
              }}
            >
              {/* Icon */}
              <div
                className="
                  mb-3.5
                  flex
                  h-[48px]
                  w-[48px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#8B5CF6]/10
                  text-[#A855F7]
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:bg-[#8B5CF6]/20
                  group-hover:text-[#C084FC]
                  group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
                "
              >
                <IconComponent />
              </div>

              {/* Value / Title */}
              <h4
                className="
                  font-heading
                  text-[15.5px]
                  font-semibold
                  leading-snug
                  tracking-[-0.015em]
                  text-white
                  sm:text-[16px]
                "
              >
                {item.value}
              </h4>

              {/* Description */}
              <p
                className="
                  mt-1.5
                  max-w-[200px]
                  font-sans
                  text-[13.5px]
                  leading-[1.55]
                  text-[#CBD5E1]
                  sm:text-[14px]
                "
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
