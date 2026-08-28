"use client";

import { useEffect, useRef, useState } from "react";
import { ProductFeature } from "@/types/product";

/* ================================================================
   HVTI EDITORIAL FEATURES SYSTEM
   File: components/products/ProductFeatures.tsx

   Editorial engineering layout with prominent orange numbers (01, 02..),
   strong typography hierarchy, generous negative space, and zero
   unnecessary card containers.
   ================================================================ */

function useReveal(threshold = 0.2) {
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
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function ProductFeatures({
  features,
}: {
  features: ProductFeature[];
}) {
  const { ref: headerRef, visible: headerVisible } = useReveal(0.2);
  const { ref: listRef, visible: listVisible } = useReveal(0.15);

  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section
      id="features"
      className="
        relative
        w-full
        overflow-hidden
        bg-transparent
        py-20
        sm:py-24
        lg:py-32
      "
    >
      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        {/* ========================================================
            CENTERED SECTION HEADER
            ======================================================== */}
        <div
          ref={headerRef}
          className={`
            mb-16
            text-center
            transition-all
            duration-[1800ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
          `}
        >
          <div className="mb-3.5 flex items-center justify-center gap-3">
            <span
              className={`
                h-[2px]
                bg-[#F97316]
                transition-all
                duration-[1600ms]
                delay-[200ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${headerVisible ? "w-8" : "w-0"}
              `}
            />
            <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-[#F97316]">
              Features
            </span>
            <span
              className={`
                h-[2px]
                bg-[#F97316]
                transition-all
                duration-[1600ms]
                delay-[200ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${headerVisible ? "w-8" : "w-0"}
              `}
            />
          </div>

          <h2
            className="
              mx-auto
              max-w-[720px]
              font-heading
              text-[32px]
              font-semibold
              leading-[1.15]
              tracking-[-0.025em]
              text-white
              sm:text-[38px]
              xl:text-[42px]
            "
          >
            Engineered for dependable performance.
          </h2>
        </div>

        {/* ========================================================
            EDITORIAL MULTI-COLUMN FEATURE GRID
            ======================================================== */}
        <div
          ref={listRef}
          className={`
            grid
            grid-cols-1
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-x-12
            lg:gap-y-12
            transition-all
            duration-[1800ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${listVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
          `}
        >
          {features.map((feature, index) => {
            const featureNumber = feature.code || String(index + 1).padStart(2, "0");

            return (
              <div
                key={`${feature.title}-${index}`}
                className="
                  group
                  relative
                  flex
                  flex-col
                  border-t
                  border-white/[0.08]
                  pt-6
                  transition-all
                  duration-300
                  hover:border-[#F97316]/50
                "
              >
                {/* Number Callout */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-heading text-[24px] font-bold text-[#F97316] transition-transform duration-300 group-hover:translate-x-1">
                    {featureNumber}
                  </span>
                  <span className="h-[1px] w-8 bg-white/[0.08] transition-colors group-hover:bg-[#F97316]/50" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-[18px] font-semibold leading-snug tracking-tight text-white transition-colors group-hover:text-[#F8FAFC]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 font-sans text-[14.5px] leading-[1.65] text-[#CBD5E1] transition-colors group-hover:text-[#E2E8F0]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}