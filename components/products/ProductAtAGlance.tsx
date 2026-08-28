"use client";

import { useEffect, useRef, useState } from "react";

/* ================================================================
   PRODUCT AT A GLANCE
   File: components/products/ProductAtAGlance.tsx

   Precision engineering specification matrix.
   Constructed as a unified instrument panel with subtle internal
   dividers, integrated purple technical codes, and tight typography.
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

export type GlanceItem = {
  id?: string;
  code?: string;
  label?: string;
  value: string;
  description?: string;
  subtext?: string;
  highlighted?: boolean;
};

export default function ProductAtAGlance({
  items,
}: {
  items: GlanceItem[];
}) {
  const { ref, visible } = useReveal();

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div
      ref={ref}
      id="product-at-a-glance"
      className="w-full max-w-[640px]"
    >
      {/* ==========================================================
          SECTION EYEBROW
          ========================================================== */}

      <div
        className={`
          mb-3
          flex
          items-center
          gap-2.5

          transition-all
          duration-[1200ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          motion-reduce:transition-none
          motion-reduce:transform-none
          motion-reduce:opacity-100

          ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-[15px] opacity-0"
          }
        `}
      >
        <span className="h-[2px] w-6 bg-[#F97316]" />

        <span
          className="
            font-sans
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.14em]
            text-[#F97316]
          "
        >
          Product At a Glance
        </span>
      </div>

      {/* ==========================================================
          UNIFIED TECHNICAL SPECIFICATION MATRIX PANEL
          Single outer border with 1px internal grid divider lines
          ========================================================== */}

      <div
        className={`
          overflow-hidden
          rounded-[10px]
          border
          border-white/[0.09]
          bg-white/[0.07]
          shadow-[0_12px_36px_rgba(0,0,0,0.35)]

          transition-all
          duration-[1200ms]
          delay-[100ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          motion-reduce:transition-none
          motion-reduce:transform-none
          motion-reduce:opacity-100

          sm:rounded-[12px]

          ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-[20px] opacity-0"
          }
        `}
      >
        {/* Subtle Top Ambient Gradient Line */}
        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#A855F7]/60 to-transparent" />

        {/* 3x2 (Desktop) / 2x3 (Mobile) Specification Grid */}
        <div
          className="
            grid
            grid-cols-2
            gap-[1px]
            bg-white/[0.07]
            lg:grid-cols-3
          "
        >
          {items.map((item, index) => {
            return (
              <div
                key={`${item.label}-${index}`}
                className="
                  group
                  relative
                  flex
                  flex-col
                  justify-start
                  bg-[#080D17]
                  p-3.5
                  transition-colors
                  duration-200
                  hover:bg-[#0D1526]
                  sm:p-4
                  xl:p-4.5
                "
              >
                {/* Header: Code + Label */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {item.code && (
                    <span
                      className="
                        font-mono
                        text-[9px]
                        font-bold
                        tracking-wider
                        text-[#A855F7]
                        sm:text-[9.5px]
                      "
                    >
                      {item.code}
                    </span>
                  )}

                  {item.code && (
                    <span className="text-[8px] text-white/20 sm:text-[9px]">
                      /
                    </span>
                  )}

                  <p
                    className="
                      truncate
                      font-sans
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.14em]
                      text-[#94A3B8]
                      transition-colors
                      group-hover:text-[#CBD5E1]
                      sm:text-[10.5px]
                    "
                  >
                    {item.label}
                  </p>
                </div>

                {/* Value */}
                <p
                  className="
                    mt-1.5
                    font-heading
                    text-[14.5px]
                    font-semibold
                    leading-[1.3]
                    tracking-[-0.02em]
                    text-white
                    sm:text-[15.5px]
                    xl:text-[16.5px]
                  "
                >
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}