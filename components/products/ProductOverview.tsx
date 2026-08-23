"use client";

import { useEffect, useRef, useState } from "react";
import ProductAtAGlance from "./ProductAtAGlance";
import ProductEngineeringAtAGlance from "./ProductEngineeringAtAGlance";

/* ================================================================
   UNIFIED PRODUCT OVERVIEW & INFORMATION SECTION
   File: components/products/ProductOverview.tsx

   Combines:
   1. Product Overview narrative (Left)
   2. Product At a Glance technical matrix (Right)
   3. Engineering At a Glance key characteristics (Lower)

   into ONE continuous, cohesive, single-viewport product story.
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

export default function ProductOverview({
  product,
}: {
  product: any;
}) {
  const {
    ref: contentRef,
    visible: contentVisible,
  } = useReveal();

  return (
    <section
      id="overview"
      className="
        relative
        overflow-hidden
        border-b
        border-white/[0.08]
        bg-transparent
      "
    >
      {/* ==========================================================
          ATMOSPHERIC STUDIO LIGHTING
          ========================================================== */}

      {/* Subtle purple field behind Product At a Glance (Top Right) */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_85%_35%,rgba(168,85,247,0.045),transparent_55%)]
        "
      />

      {/* Soft centered purple atmosphere behind Engineering At a Glance (Lower Center) */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_50%_80%,rgba(124,58,237,0.035),transparent_55%)]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1280px]
          px-5
          py-10
          sm:px-8
          sm:py-12
          lg:px-10
          lg:py-16
          xl:px-12
        "
      >
        {/* ========================================================
            DESKTOP TOP: OVERVIEW + AT A GLANCE MATRIX
            ======================================================== */}

        <div
          className="
            hidden
            lg:grid
            lg:grid-cols-[1.05fr_1.15fr]
            lg:items-center
            lg:gap-12
            xl:gap-16
          "
        >
          {/* OVERVIEW CONTENT — LEFT */}
          <div
            ref={contentRef}
            className={`
              transition-all
              duration-[1200ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]

              motion-reduce:transition-none
              motion-reduce:transform-none
              motion-reduce:opacity-100

              ${
                contentVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-[24px] opacity-0"
              }
            `}
          >
            {/* Section Eyebrow */}
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#A855F7]" />

              <span
                className="
                  font-sans
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#A855F7]
                "
              >
                Product Overview
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-[540px]
                font-heading
                text-[34px]
                font-semibold
                leading-[1.12]
                tracking-[-0.02em]
                text-white
                xl:text-[38px]
              "
            >
              Built for reliable high-voltage testing.
            </h2>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-[520px]
                font-sans
                font-normal
                text-[17px]
                leading-[1.68]
                text-[#CBD5E1]
                xl:text-[18px]
              "
            >
              {product.overview || product.description}
            </p>
          </div>

          {/* PRODUCT AT A GLANCE — RIGHT */}
          <div className="flex justify-end">
            <ProductAtAGlance
              items={product.atAGlance || []}
            />
          </div>
        </div>

        {/* ========================================================
            MOBILE TOP: STACKED OVERVIEW + AT A GLANCE
            ======================================================== */}

        <div className="space-y-6 lg:hidden">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#A855F7]" />

              <span
                className="
                  font-sans
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#A855F7]
                "
              >
                Product Overview
              </span>
            </div>

            <h2
              className="
                font-heading
                text-[28px]
                font-semibold
                leading-[1.14]
                tracking-[-0.02em]
                text-white
                sm:text-[32px]
              "
            >
              Built for reliable
              <br />
              high-voltage testing.
            </h2>

            <p
              className="
                mt-3
                font-sans
                font-normal
                text-[15px]
                leading-[1.65]
                text-[#CBD5E1]
              "
            >
              {product.overview || product.description}
            </p>
          </div>

          <div>
            <ProductAtAGlance
              items={product.atAGlance || []}
            />
          </div>
        </div>

        {/* ========================================================
            INTERNAL SUBTLE DIVIDER (No full-width border)
            ======================================================== */}

        {product.engineeringAtAGlance && (
          <>
            <div className="my-8 border-t border-white/[0.06] sm:my-10 lg:my-12" />

            {/* ====================================================
                LOWER: ENGINEERING AT A GLANCE
                ==================================================== */}

            <ProductEngineeringAtAGlance
              items={product.engineeringAtAGlance}
            />
          </>
        )}
      </div>
    </section>
  );
}