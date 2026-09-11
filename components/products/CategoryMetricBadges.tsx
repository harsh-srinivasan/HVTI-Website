"use client";

import React from "react";
import { ProductMetric } from "@/types/product";
import { renderProductIcon } from "./ProductIcons";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ================================================================
   HVTI CATEGORY METRIC BADGES
   File: components/products/CategoryMetricBadges.tsx

   Horizontal floating technical metric badges with circular neon icons.
   ================================================================ */

export default function CategoryMetricBadges({
  items,
  metrics,
}: {
  items?: ProductMetric[];
  metrics?: ProductMetric[];
}) {
  const { ref: sectionRef, visible } = useScrollReveal({ threshold: 0.1 });
  const displayItems = metrics || items;

  if (!displayItems || displayItems.length === 0) return null;

  return (
    <section className="relative z-10 w-full px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-16">
      <div
        ref={sectionRef}
        className={`mx-auto max-w-[1360px] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div
          className={`grid gap-5 sm:gap-6 ${
            displayItems.length === 2
              ? "grid-cols-1 md:grid-cols-2"
              : displayItems.length === 3
              ? "grid-cols-1 md:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {displayItems.map((item, idx) => (
            <div
              key={idx}
              className="
                group
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#0A0D16]/85
                p-5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#A855F7]/40
                hover:shadow-[0_8px_30px_rgba(168,85,247,0.12)]
                sm:p-6
              "
            >
              {/* Circular Technical Badge */}
              <div
                className="
                  relative
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#A855F7]/40
                  bg-[#110B22]
                  text-[#C084FC]
                  shadow-[0_0_24px_rgba(168,85,247,0.25)]
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:border-[#C084FC]
                  group-hover:shadow-[0_0_36px_rgba(168,85,247,0.45)]
                "
              >
                {renderProductIcon(item.icon || item.id, {
                  className: "h-6 w-6 text-current",
                  strokeWidth: 1.8,
                })}
              </div>

              <div>
                {item.label && (
                  <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#A855F7]">
                    {item.label}
                  </span>
                )}
                <h3 className="font-heading text-lg font-bold text-white sm:text-xl">
                  {item.value}
                </h3>
                {item.description && (
                  <p className="mt-0.5 font-sans text-xs leading-relaxed text-slate-300 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
