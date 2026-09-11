"use client";

import { useEffect, useRef, useState } from "react";
import { ProductFeature } from "@/types/product";

/* ================================================================
   HVTI EDITORIAL FEATURES SYSTEM (0.8x 1-VIEWPORT FIT)
   File: components/products/ProductFeatures.tsx

   - Fits strictly inside 1 desktop viewport (lg:h-screen lg:max-h-screen)
   - Editorial engineering layout with prominent orange numbers (01, 02..),
     strong typography hierarchy, and restrained card container aesthetics.
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
  title = "Engineered for dependable performance.",
  eyebrow = "KEY FEATURES",
}: {
  features: ProductFeature[];
  title?: string;
  eyebrow?: string;
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
        px-5
        py-12
        sm:px-8
        lg:h-screen
        lg:max-h-screen
        lg:flex
        lg:flex-col
        lg:justify-center
        lg:py-0
        lg:px-12
        xl:px-16
      "
    >
      <div className="relative z-10 mx-auto w-full max-w-[1360px]">
        {/* ========================================================
            CENTERED SECTION HEADER (0.8x Compact)
            ======================================================== */}
        <div
          ref={headerRef}
          className={`
            mb-6
            text-center
            sm:mb-8
            transition-all
            duration-[1400ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${headerVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
          `}
        >
          <div className="mb-2 flex items-center justify-center gap-2.5">
            <span
              className={`
                h-[2px]
                bg-[#F97316]
                transition-all
                duration-[1200ms]
                delay-[150ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${headerVisible ? "w-6" : "w-0"}
              `}
            />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
              {eyebrow}
            </span>
            <span
              className={`
                h-[2px]
                bg-[#F97316]
                transition-all
                duration-[1200ms]
                delay-[150ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${headerVisible ? "w-6" : "w-0"}
              `}
            />
          </div>

          <h2
            className="
              mx-auto
              max-w-[720px]
              font-heading
              text-xl
              font-bold
              leading-[1.18]
              tracking-tight
              text-white
              sm:text-2xl
              lg:text-3xl
            "
          >
            {title}
          </h2>
        </div>

        {/* ========================================================
            EDITORIAL MULTI-COLUMN FEATURE GRID (0.8x Compact)
            ======================================================== */}
        <div
          ref={listRef}
          className={`
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-x-8
            lg:gap-y-6
            transition-all
            duration-[1400ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${listVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
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
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-[#0A0D16]/80
                  p-4
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#F97316]/40
                  hover:bg-[#0E121E]
                  hover:shadow-[0_8px_24px_rgba(249,115,22,0.1)]
                  sm:p-5
                "
              >
                {/* Number Callout */}
                <div className="mb-2.5 flex items-center justify-between">
                  <span className="font-mono text-lg font-bold text-[#F97316] transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
                    {featureNumber}
                  </span>
                  <span className="h-[1px] w-6 bg-white/[0.08] transition-colors group-hover:bg-[#F97316]/50" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-sm font-bold text-white transition-colors group-hover:text-[#F8FAFC] sm:text-base">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 line-clamp-3 font-sans text-xs leading-relaxed text-[#CBD5E1] transition-colors group-hover:text-[#E2E8F0]">
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