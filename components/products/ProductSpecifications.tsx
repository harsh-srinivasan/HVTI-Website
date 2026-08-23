"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ================================================================
   PRODUCT SPECIFICATIONS
   File: components/products/ProductSpecifications.tsx

   Features a 3-column technical specification table paired with an
   industrial hardware preview card matching the visual reference.
   ================================================================ */

function useReveal(threshold = 0.55) {
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
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return {
    ref,
    visible,
  };
}

export type SpecRow = {
  parameter: string;
  details?: string;
  range?: string;
  value?: string;
};

export default function ProductSpecifications({
  product,
}: {
  product: any;
}) {
  const specRows: SpecRow[] =
    product.specificationsTable ||
    product.specifications?.map((s: { parameter: string; value: string }) => ({
      parameter: s.parameter,
      details: "Standard",
      range: s.value,
    })) ||
    [];

  const specImage = product.specImage || "/images/products/product-testing.jpg";

  const { ref: headingRef, visible: headingVisible } = useReveal(0.55);
  const { ref: contentRef, visible: contentVisible } = useReveal(0.55);

  return (
    <section
      id="specifications"
      className="
        relative
        overflow-hidden
        border-b
        border-white/[0.08]
        bg-transparent
      "
    >
      {/* Subtle cool, precise atmospheric gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_15%_75%,rgba(30,41,59,0.18),transparent_60%)]
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
          py-14
          sm:px-8
          sm:py-16
          lg:px-10
          lg:py-18
          xl:px-12
        "
      >
        {/* ========================================================
            SECTION HEADER
            ======================================================== */}

        <div
          ref={headingRef}
          className={`
            mb-8

            transition-all
            duration-[1200ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]

            motion-reduce:transition-none
            motion-reduce:transform-none
            motion-reduce:opacity-100

            ${
              headingVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[24px] opacity-0"
            }
          `}
        >
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
              Technical Specifications
            </span>
          </div>

          <h2
            className="
              font-heading
              text-[32px]
              font-semibold
              leading-[1.12]
              tracking-[-0.02em]
              text-white
              sm:text-[36px]
              xl:text-[38px]
            "
          >
            Detailed specifications for precise performance.
          </h2>
        </div>

        {/* ========================================================
            DESKTOP SPLIT: TABLE + HARDWARE PREVIEW
            ======================================================== */}

        <div
          ref={contentRef}
          className={`
            hidden
            lg:grid
            lg:grid-cols-[1.4fr_1fr]
            lg:items-stretch
            lg:gap-8
            xl:gap-10

            transition-all
            duration-[1200ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]

            motion-reduce:transition-none
            motion-reduce:transform-none
            motion-reduce:opacity-100

            ${
              contentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[24px] opacity-0"
            }
          `}
        >
          {/* ======================================================
              3-COLUMN TECHNICAL SPECIFICATION TABLE
              ====================================================== */}

          <div
            className="
              overflow-hidden
              rounded-[10px]
              border
              border-white/[0.09]
              bg-[#080D17]
            "
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.035]">
                  <th
                    className="
                      w-[35%]
                      px-5
                      py-3.5
                      text-left
                      font-sans
                      text-[11.5px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-[#A855F7]
                    "
                  >
                    Parameter
                  </th>

                  <th
                    className="
                      w-[35%]
                      px-5
                      py-3.5
                      text-left
                      font-sans
                      text-[11.5px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-[#A855F7]
                    "
                  >
                    Details
                  </th>

                  <th
                    className="
                      w-[30%]
                      px-5
                      py-3.5
                      text-left
                      font-sans
                      text-[11.5px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-[#A855F7]
                    "
                  >
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

                      ${
                        index % 2 === 0
                          ? "bg-transparent"
                          : "bg-white/[0.015]"
                      }
                    `}
                  >
                    <td
                      className="
                        border-t
                        border-white/[0.06]
                        px-5
                        py-3.5
                        font-sans
                        text-[14.5px]
                        font-semibold
                        leading-snug
                        text-white
                        xl:text-[15px]
                      "
                    >
                      {row.parameter}
                    </td>

                    <td
                      className="
                        border-t
                        border-white/[0.06]
                        px-5
                        py-3.5
                        font-sans
                        text-[14px]
                        font-normal
                        leading-relaxed
                        text-[#CBD5E1]
                        xl:text-[14.5px]
                      "
                    >
                      {row.details || "—"}
                    </td>

                    <td
                      className="
                        border-t
                        border-white/[0.06]
                        px-5
                        py-3.5
                        font-sans
                        text-[14px]
                        font-normal
                        leading-relaxed
                        text-[#94A3B8]
                        xl:text-[14.5px]
                      "
                    >
                      {row.range || row.value || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ======================================================
              HARDWARE PREVIEW CARD
              ====================================================== */}

          <div
            className="
              relative
              flex
              min-h-[420px]
              overflow-hidden
              rounded-[12px]
              border
              border-white/[0.09]
              bg-[#080D17]
            "
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070D]/80 via-transparent to-transparent z-10" />

            <Image
              src={specImage}
              alt={product.title}
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />

            {/* Corner Registration Mark */}
            <div className="pointer-events-none absolute right-3 top-3 font-mono text-[9px] text-white/30 z-20">
              +
            </div>

            {/* Subtle bottom badge */}
            <div className="absolute bottom-4 left-4 z-20">
              <span className="rounded-[4px] border border-white/10 bg-[#05070D]/80 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-[#A855F7] backdrop-blur-md">
                HV Control & Test Setup
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================
            MOBILE SPECIFICATIONS
            ======================================================== */}

        <div className="block lg:hidden">
          <div className="overflow-x-auto rounded-[10px] border border-white/[0.09] bg-[#080D17]">
            <table className="w-full min-w-[500px] border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.035]">
                  <th className="px-4 py-3 text-left font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-[#A855F7]">
                    Parameter
                  </th>
                  <th className="px-4 py-3 text-left font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-[#A855F7]">
                    Details
                  </th>
                  <th className="px-4 py-3 text-left font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-[#A855F7]">
                    Range / Options
                  </th>
                </tr>
              </thead>
              <tbody>
                {specRows.map((row, index) => (
                  <tr
                    key={`mob-${row.parameter}-${index}`}
                    className={index % 2 === 0 ? "bg-transparent" : "bg-white/[0.015]"}
                  >
                    <td className="border-t border-white/[0.06] px-4 py-3 font-sans text-[13.5px] font-semibold text-white">
                      {row.parameter}
                    </td>
                    <td className="border-t border-white/[0.06] px-4 py-3 font-sans text-[13px] font-normal text-[#CBD5E1]">
                      {row.details || "—"}
                    </td>
                    <td className="border-t border-white/[0.06] px-4 py-3 font-sans text-[13px] font-normal text-[#94A3B8]">
                      {row.range || row.value || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}