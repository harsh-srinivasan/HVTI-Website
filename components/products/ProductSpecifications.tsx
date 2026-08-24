"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ProductData, ProductSpecRow } from "@/types/product";
import { HVTestCircuitSchematic, HVBushingSchematic } from "./ProductSchematics";

/* ================================================================
   HVTI TECHNICAL SPECIFICATIONS SYSTEM
   File: components/products/ProductSpecifications.tsx

   Focused, single-viewport desktop engineering composition:
   - Header with clear hierarchy
   - Precision 3-column technical specification table
   - Side-by-side aligned hardware image
   - Subtle flanking vector schematics
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

export default function ProductSpecifications({
  product,
}: {
  product: ProductData;
}) {
  const specRows: ProductSpecRow[] =
    product.specificationsTable ||
    product.specifications?.map((s) => ({
      parameter: s.parameter,
      details: "Standard",
      range: s.value,
    })) ||
    [];

  const specImage = product.specImage;

  const { ref: headerRef, visible: headerVisible } = useReveal(0.2);
  const { ref: tableRef, visible: tableVisible } = useReveal(0.15);

  if (specRows.length === 0) {
    return null;
  }

  return (
    <section
      id="specifications"
      className="
        relative
        flex
        w-full
        min-h-[calc(100vh-80px)]
        flex-col
        justify-center
        overflow-hidden
        bg-transparent
        py-16
        sm:py-20
        lg:py-20
        xl:py-24
      "
    >
      {/* Background ambient lighting */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[1000px]
          -translate-x-1/2
          -translate-y-1/2
          bg-[radial-gradient(ellipse_at_50%_50%,rgba(168,85,247,0.035),transparent_65%)]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        {/* ========================================================
            CENTERED SECTION HEADER
            ======================================================== */}
        <div
          ref={headerRef}
          className={`
            mb-10
            text-center
            transition-all
            duration-[1100ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            lg:mb-12
            ${headerVisible ? "translate-y-0 opacity-100" : "translate-y-[24px] opacity-0"}
          `}
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-7 bg-[#A855F7]" />
            <span className="font-sans text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#A855F7]">
              Technical Specifications
            </span>
            <span className="h-[2px] w-7 bg-[#A855F7]" />
          </div>

          <h2
            className="
              mx-auto
              max-w-[760px]
              font-heading
              text-[30px]
              font-semibold
              leading-[1.15]
              tracking-[-0.025em]
              text-white
              sm:text-[36px]
              xl:text-[40px]
            "
          >
            Detailed specifications for precise performance.
          </h2>
        </div>

        {/* ========================================================
            TECHNICAL SPECIFICATIONS TABLE & ALIGNED HARDWARE PHOTO
            ======================================================== */}
        <div
          ref={tableRef}
          className={`
            relative
            transition-all
            duration-[1200ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${tableVisible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"}
          `}
        >
          {/* Subtle Background Schematics on Large Displays */}
          <div className="pointer-events-none absolute -left-[130px] top-1/2 hidden -translate-y-1/2 2xl:block">
            <HVTestCircuitSchematic opacity={0.09} />
          </div>
          <div className="pointer-events-none absolute -right-[110px] top-1/2 hidden -translate-y-1/2 2xl:block">
            <HVBushingSchematic opacity={0.09} />
          </div>

          <div
            className={`
              grid
              gap-6
              xl:gap-8
              ${specImage ? "lg:grid-cols-[1.45fr_1fr] lg:items-stretch" : "grid-cols-1 max-w-[1020px] mx-auto"}
            `}
          >
            {/* Specification Table */}
            <div
              className="
                flex
                flex-col
                justify-center
                overflow-hidden
                rounded-[12px]
                border
                border-white/[0.09]
                bg-[#080D17]/90
                shadow-[0_16px_48px_rgba(0,0,0,0.4)]
                backdrop-blur-md
              "
            >
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/[0.08] bg-white/[0.035]">
                      <th className="px-5 py-3 text-left font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A855F7] xl:px-6 xl:py-3.5">
                        Parameter
                      </th>
                      <th className="px-5 py-3 text-left font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A855F7] xl:px-6 xl:py-3.5">
                        Details
                      </th>
                      <th className="px-5 py-3 text-left font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A855F7] xl:px-6 xl:py-3.5">
                        Range / Options
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {specRows.map((row, index) => (
                      <tr
                        key={`${row.parameter}-${index}`}
                        className={`
                          transition-colors
                          duration-150
                          hover:bg-white/[0.035]
                          ${index % 2 === 0 ? "bg-transparent" : "bg-white/[0.015]"}
                        `}
                      >
                        <td className="border-t border-white/[0.06] px-5 py-2.5 font-sans text-[13.5px] font-semibold text-white xl:px-6 xl:py-3 xl:text-[14px]">
                          {row.parameter}
                        </td>
                        <td className="border-t border-white/[0.06] px-5 py-2.5 font-sans text-[13px] text-[#CBD5E1] xl:px-6 xl:py-3 xl:text-[13.5px]">
                          {row.details || "—"}
                        </td>
                        <td className="border-t border-white/[0.06] px-5 py-2.5 font-sans text-[13px] text-[#94A3B8] xl:px-6 xl:py-3 xl:text-[13.5px]">
                          {row.range || row.value || "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Hardware Preview Image — Aligned with Table */}
            {specImage && (
              <div
                className="
                  relative
                  hidden
                  min-h-[380px]
                  w-full
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[12px]
                  border
                  border-white/[0.09]
                  bg-[#05070E]
                  p-3
                  shadow-[0_16px_48px_rgba(0,0,0,0.4)]
                  backdrop-blur-md
                  lg:flex
                "
              >
                <div className="relative h-full w-full">
                  <Image
                    src={specImage}
                    alt={product.title}
                    fill
                    className="object-contain object-center transition-transform duration-500 hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Mobile Hardware Image */}
          {specImage && (
            <div className="relative mt-6 h-[260px] w-full overflow-hidden rounded-[10px] border border-white/[0.08] bg-[#05070E] p-2.5 sm:h-[320px] lg:hidden">
              <div className="relative h-full w-full">
                <Image
                  src={specImage}
                  alt={product.title}
                  fill
                  className="object-contain object-center"
                  sizes="100vw"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}