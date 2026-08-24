"use client";

import { useEffect, useRef, useState } from "react";
import { ProductMetric } from "@/types/product";
import { renderProductIcon } from "./ProductIcons";

/* ================================================================
   HVTI ENGINEERING AT A GLANCE
   File: components/products/ProductEngineeringAtAGlance.tsx

   Centered composition communicating key engineering characteristics
   via floating circular line-art badges along a glowing energy path.
   ================================================================ */

function useReveal(threshold = 0.3) {
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

export default function ProductEngineeringAtAGlance({
  items,
}: {
  items: ProductMetric[];
}) {
  const { ref, visible } = useReveal();

  if (!items || items.length === 0) {
    return null;
  }

  // Find center item or explicit highlighted item for visual emphasis
  const centerIndex = Math.floor(items.length / 2);

  return (
    <section
      id="engineering-at-a-glance"
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
          ref={ref}
          className={`
            mb-16
            text-center
            transition-all
            duration-[1100ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${visible ? "translate-y-0 opacity-100" : "translate-y-[24px] opacity-0"}
          `}
        >
          <div className="mb-3.5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#A855F7]" />
            <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-[#A855F7]">
              Engineering At a Glance
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
            Everything you need for confident high-voltage testing.
          </h2>
        </div>

        {/* ========================================================
            DESKTOP FLOATING WAVE METRICS (>= lg)
            ======================================================== */}
        <div className="relative hidden w-full lg:block">
          {/* Subtle Horizontal Connecting Energy Arc */}
          <svg
            className="pointer-events-none absolute left-0 top-[42px] -z-10 h-[60px] w-full"
            viewBox="0 0 1200 60"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 40 30 Q 300 10, 600 30 T 1160 30"
              stroke="#A855F7"
              strokeWidth="1.5"
              strokeOpacity="0.4"
              strokeDasharray="4 6"
            />
            <path
              d="M 40 30 Q 300 10, 600 30 T 1160 30"
              stroke="url(#glanceEnergyGrad)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="glanceEnergyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.2" />
                <stop offset="30%" stopColor="#A855F7" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#F97316" stopOpacity="0.95" />
                <stop offset="70%" stopColor="#A855F7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          <div
            className="
              grid
              items-start
              justify-center
              gap-4
              xl:gap-8
            "
            style={{
              gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
            }}
          >
            {items.map((item, index) => {
              const isCenterHighlight = item.highlighted ?? (index === centerIndex && items.length >= 3);

              return (
                <div
                  key={`${item.value}-${index}`}
                  className={`
                    group
                    relative
                    flex
                    flex-col
                    items-center
                    px-3
                    py-2
                    text-center
                    transition-all
                    duration-[1100ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${visible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"}
                  `}
                  style={{
                    transitionDelay: `${index * 100 + 100}ms`,
                  }}
                >
                  {/* Circular Technical Badge */}
                  <div
                    className={`
                      relative
                      mb-5
                      flex
                      items-center
                      justify-center
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        isCenterHighlight
                          ? `h-[88px] w-[88px] border-2 border-[#A855F7] bg-[#110B22] text-[#C084FC] shadow-[0_0_36px_rgba(168,85,247,0.35)] group-hover:scale-110 group-hover:border-[#C084FC] group-hover:shadow-[0_0_50px_rgba(168,85,247,0.55)]`
                          : `h-[68px] w-[68px] border border-white/[0.12] bg-[#0A0F1D] text-[#A855F7] group-hover:scale-110 group-hover:border-[#A855F7]/60 group-hover:bg-[#110B22] group-hover:text-[#C084FC] group-hover:shadow-[0_0_24px_rgba(168,85,247,0.25)]`
                      }
                    `}
                  >
                    {/* Pulsing halo ring on center highlight */}
                    {isCenterHighlight && (
                      <div className="absolute inset-[-6px] animate-pulse rounded-full border border-[#F97316]/40" />
                    )}

                    {renderProductIcon(item.icon || item.id, {
                      className: isCenterHighlight ? "h-9 w-9 text-current" : "h-7 w-7 text-current",
                      strokeWidth: 1.7,
                    })}
                  </div>

                  {/* Value / Headline */}
                  <h3
                    className={`
                      font-heading
                      font-semibold
                      leading-snug
                      tracking-[-0.02em]
                      text-white
                      ${
                        isCenterHighlight
                          ? "text-[20px] xl:text-[22px] text-[#F8FAFC]"
                          : "text-[16.5px] xl:text-[17.5px]"
                      }
                    `}
                  >
                    {item.value}
                  </h3>

                  {/* Description */}
                  {item.description && (
                    <p
                      className="
                        mt-2
                        max-w-[210px]
                        font-sans
                        text-[13.5px]
                        leading-[1.55]
                        text-[#94A3B8]
                        transition-colors
                        group-hover:text-[#CBD5E1]
                      "
                    >
                      {item.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            MOBILE BALANCED LIST (< lg)
            ======================================================== */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
          {items.map((item, index) => {
            const isCenterHighlight = item.highlighted ?? (index === centerIndex);

            return (
              <div
                key={`mob-${item.value}-${index}`}
                className={`
                  flex
                  items-start
                  gap-4
                  rounded-[12px]
                  border
                  p-5
                  transition-all
                  ${
                    isCenterHighlight
                      ? "border-[#A855F7]/40 bg-[#110B22]/70 shadow-[0_0_24px_rgba(168,85,247,0.15)]"
                      : "border-white/[0.08] bg-[#080D17]/70"
                  }
                `}
              >
                {/* Circular Badge */}
                <div
                  className={`
                    flex
                    h-[54px]
                    w-[54px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    ${
                      isCenterHighlight
                        ? "border border-[#A855F7] bg-[#A855F7]/20 text-[#C084FC]"
                        : "border border-white/10 bg-[#0E1526] text-[#A855F7]"
                    }
                  `}
                >
                  {renderProductIcon(item.icon || item.id, {
                    className: "h-6 w-6 text-current",
                    strokeWidth: 1.6,
                  })}
                </div>

                <div>
                  <h3 className="font-heading text-[16px] font-semibold text-white">
                    {item.value}
                  </h3>
                  {item.description && (
                    <p className="mt-1 font-sans text-[13.5px] leading-relaxed text-[#94A3B8]">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
