"use client";

import { useEffect, useRef, useState } from "react";
import { ProductBenefit } from "@/types/product";
import { renderProductIcon } from "./ProductIcons";

/* ================================================================
   HVTI ENGINEERED VALUE & BENEFITS SYSTEM
   File: components/products/ProductBenefits.tsx

   Floating trust statements along an atmospheric energy curve.
   Renders conditionally only when meaningful benefits data exists.
   ================================================================ */

function useReveal(threshold = 0.25) {
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

export default function ProductBenefits({
  benefits,
}: {
  benefits: ProductBenefit[];
}) {
  const { ref: headerRef, visible: headerVisible } = useReveal(0.2);
  const { ref: contentRef, visible: contentVisible } = useReveal(0.15);

  if (!benefits || benefits.length === 0) {
    return null;
  }

  return (
    <section
      id="benefits"
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
      {/* Warm subtle orange atmospheric light transition */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-1/2
          h-[600px]
          w-[800px]
          -translate-y-1/2
          bg-[radial-gradient(ellipse_at_70%_50%,rgba(249,115,22,0.035),transparent_60%)]
        "
      />

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
            duration-[1100ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${headerVisible ? "translate-y-0 opacity-100" : "translate-y-[24px] opacity-0"}
          `}
        >
          <div className="mb-3.5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#A855F7]" />
            <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-[#A855F7]">
              Engineered Value
            </span>
            <span className="h-[2px] w-8 bg-[#A855F7]" />
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
            Reasons engineers trust HVTI test kits.
          </h2>
        </div>

        {/* ========================================================
            FLOATING VALUE PROPOSITIONS (Dynamic Columns)
            ======================================================== */}
        <div
          ref={contentRef}
          className={`
            grid
            items-start
            gap-8
            sm:gap-10
            transition-all
            duration-[1200ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${contentVisible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"}
          `}
          style={{
            gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
          }}
        >
          {benefits.map((benefit, index) => (
            <div
              key={`${benefit.title}-${index}`}
              className="
                group
                flex
                items-start
                gap-5
                p-2
                transition-all
                duration-300
              "
            >
              {/* Circular Technical Badge */}
              <div
                className="
                  flex
                  h-[64px]
                  w-[64px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.12]
                  bg-[#0A0F1E]
                  text-[#A855F7]
                  shadow-[0_0_24px_rgba(168,85,247,0.18)]
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:border-[#A855F7]
                  group-hover:bg-[#120B24]
                  group-hover:text-[#C084FC]
                  group-hover:shadow-[0_0_36px_rgba(168,85,247,0.35)]
                "
              >
                {renderProductIcon(benefit.icon || benefit.id, {
                  className: "h-7 w-7 text-current",
                  strokeWidth: 1.6,
                })}
              </div>

              {/* Text */}
              <div>
                <h3 className="font-heading text-[18px] font-semibold leading-snug tracking-tight text-white transition-colors group-hover:text-[#F8FAFC]">
                  {benefit.title}
                </h3>
                <p className="mt-2 font-sans text-[14.5px] leading-[1.65] text-[#CBD5E1]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
