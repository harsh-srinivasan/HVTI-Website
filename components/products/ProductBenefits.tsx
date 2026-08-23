"use client";

import { useEffect, useRef, useState } from "react";

/* ================================================================
   PRODUCT BENEFITS / ENGINEERED VALUE
   File: components/products/ProductBenefits.tsx

   Communicates why engineers trust HVTI test kits through 3
   horizontal benefit panels with custom engineering iconography.
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
   BENEFIT ICONS
   ================================================================ */

function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
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
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 12V14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function getBenefitIcon(icon: string) {
  switch (icon) {
    case "shield":
      return ShieldIcon;
    case "gear":
      return GearIcon;
    case "briefcase":
    default:
      return BriefcaseIcon;
  }
}

export type BenefitItem = {
  id?: string;
  icon: string;
  title: string;
  description: string;
};

export default function ProductBenefits({
  benefits,
}: {
  benefits: BenefitItem[];
}) {
  const { ref, visible } = useReveal();

  if (!benefits || benefits.length === 0) {
    return null;
  }

  return (
    <section
      id="benefits"
      className="
        relative
        overflow-hidden
        border-b
        border-white/[0.08]
        bg-transparent
      "
    >
      {/* Subtle warm orange atmospheric accent */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_75%_50%,rgba(249,115,22,0.025),transparent_60%)]
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
          ref={ref}
          className={`
            mb-10

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
              Engineered Value
            </span>
          </div>

          <h2
            className="
              font-heading
              text-[30px]
              font-semibold
              leading-[1.15]
              tracking-[-0.02em]
              text-white
              sm:text-[34px]
              xl:text-[36px]
            "
          >
            Reasons engineers trust HVTI test kits.
          </h2>
        </div>

        {/* ========================================================
            BENEFITS CARDS (3-column horizontal grid)
            ======================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-3
          "
        >
          {benefits.map((benefit, index) => {
            const IconComponent = getBenefitIcon(benefit.icon);

            return (
              <div
                key={benefit.title}
                className={`
                  group
                  relative
                  flex
                  items-start
                  gap-4
                  rounded-[12px]
                  border
                  border-white/[0.08]
                  bg-[#080D17]
                  p-6

                  transition-all
                  duration-[1200ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  motion-reduce:transition-none
                  motion-reduce:transform-none
                  motion-reduce:opacity-100

                  hover:-translate-y-1
                  hover:border-[#8B5CF6]/40
                  hover:bg-[#0B1020]
                  hover:shadow-[0_10px_28px_rgba(124,58,237,0.10)]

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
                    flex
                    h-[48px]
                    w-[48px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[8px]
                    border
                    border-[#8B5CF6]/20
                    bg-[#8B5CF6]/10
                    text-[#A855F7]
                    transition-all
                    duration-300
                    group-hover:border-[#8B5CF6]/40
                    group-hover:bg-[#8B5CF6]/20
                    group-hover:text-[#C084FC]
                  "
                >
                  <IconComponent />
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="
                      font-heading
                      text-[16.5px]
                      font-semibold
                      leading-snug
                      text-white
                      sm:text-[17px]
                    "
                  >
                    {benefit.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      font-sans
                      text-[14px]
                      leading-[1.6]
                      text-[#CBD5E1]
                      sm:text-[14.5px]
                    "
                  >
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
