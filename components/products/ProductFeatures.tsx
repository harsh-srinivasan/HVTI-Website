"use client";

import { useEffect, useRef, useState } from "react";

/* ================================================================
   PRODUCT FEATURES
   File: components/products/ProductFeatures.tsx

   Desktop:
   - Designed to sit inside the shared Applications + Features
     two-column desktop layout.
   - No standalone full-width section spacing.
   - Larger important-information typography.
   - Compact editorial feature list.
   - Sequential feature reveal animation.

   Mobile:
   - Existing design preserved.
   ================================================================ */


/* ================================================================
   REVEAL HOOK
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

          // Animation only happens once.
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
   DESKTOP FEATURES CONTENT

   IMPORTANT:

   This is intentionally NOT wrapped in a <section>.

   ProductPage will place this beside ProductApplications inside
   the shared Applications + Features desktop module.
   ================================================================ */

function DesktopFeaturesContent({
  features,
}: {
  features: {
    title: string;
    description: string;
  }[];
}) {
  /* ==============================================================
     DESKTOP HEADING REVEAL
     ============================================================== */

  const {
    ref: headingRef,
    visible: headingVisible,
  } = useReveal();

  /* ==============================================================
     DESKTOP FEATURES REVEAL
     ============================================================== */

  const {
    ref: featuresRef,
    visible: featuresVisible,
  } = useReveal();

  return (
    <div className="hidden lg:block">
      {/* ==========================================================
          SECTION HEADER
          ========================================================== */}

      <div
        ref={headingRef}
        className={`
          mb-6

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
        {/* ======================================================
            EYEBROW
            ====================================================== */}

        <div className="mb-3 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#F97316]" />

          <span
            className="
              font-sans
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#F97316]
            "
          >
            Features
          </span>
        </div>

        {/* ======================================================
            HEADING
            ====================================================== */}

        <h2
          className="
            max-w-[430px]
            font-heading
            text-[32px]
            font-semibold
            leading-[1.1]
            tracking-[-0.02em]
            text-white
            sm:text-[34px]
          "
        >
          Engineered for dependable
          <br />
          performance
        </h2>
      </div>

      {/* ==========================================================
          DESKTOP FEATURE LIST

          Compact editorial layout.
          ========================================================== */}

      <div
        ref={featuresRef}
        className="
          grid
          grid-cols-1
          gap-0
        "
      >
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`
              group
              rounded-[6px]
              border-b
              border-white/[0.08]
              px-2.5
              py-3.5
              -mx-2.5

              transition-all
              duration-[1200ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]

              motion-reduce:transition-none
              motion-reduce:transform-none
              motion-reduce:opacity-100

              hover:bg-white/[0.02]

              ${
                index === features.length - 1
                  ? "border-b-0"
                  : ""
              }

              ${
                featuresVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[24px] opacity-0"
              }
            `}
            style={{
              transitionDelay: `${index * 90 + 90}ms`,
            }}
          >
            <div className="flex gap-4">
              {/* ==================================================
                  FEATURE NUMBER
                  ================================================== */}

              <span
                className="
                  w-[24px]
                  shrink-0
                  pt-[2px]
                  font-sans
                  text-[13px]
                  font-semibold
                  leading-6
                  text-[#F97316]
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* ==================================================
                  FEATURE CONTENT
                  ================================================== */}

              <div>
                <h3
                  className="
                    font-heading
                    text-[16.5px]
                    font-semibold
                    leading-6
                    text-white
                    xl:text-[17.5px]
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-1
                    max-w-[500px]
                    font-sans
                    text-[15px]
                    font-normal
                    leading-[1.68]
                    text-[#CBD5E1]
                    xl:text-[15.5px]
                  "
                >
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


/* ================================================================
   MAIN COMPONENT
   ================================================================ */

export default function ProductFeatures({
  product,
  layout = "all",
}: {
  product: any;
  layout?: "desktop" | "mobile" | "all";
}) {
  const features = product.features || [];

  return (
    <>
      {/* ==========================================================
          DESKTOP
          ========================================================== */}

      {(layout === "desktop" || layout === "all") && (
        <DesktopFeaturesContent features={features} />
      )}

      {/* ==========================================================
          MOBILE
          ========================================================== */}

      {(layout === "mobile" || layout === "all") && (
        <section
          id="features"
          className="
            border-b
            border-white/[0.08]
            bg-[#05070D]
            lg:hidden
          "
        >
        <div
          className="
            mx-auto
            w-full
            px-5
            py-14
            sm:px-8
          "
        >
          {/* ======================================================
              MOBILE HEADER
              ====================================================== */}

          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#F97316]" />

            <span
              className="
                font-sans
                text-[11.5px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#F97316]
              "
            >
              Features
            </span>
          </div>

          <h2
            className="
              font-heading
              text-[29px]
              font-semibold
              leading-[1.1]
              tracking-[-0.02em]
              text-white
              sm:text-[32px]
            "
          >
            Engineered for
            <br />
            dependable performance
          </h2>

          {/* ======================================================
              MOBILE FEATURE LIST
              ====================================================== */}

          <div className="mt-6">
            {features.map(
              (
                feature: {
                  title: string;
                  description: string;
                },
                index: number
              ) => (
                <div
                  key={feature.title}
                  className="
                    border-b
                    border-white/[0.08]
                    py-5
                  "
                >
                  <div className="flex gap-3">
                    <span
                      className="
                        font-sans
                        text-[12px]
                        font-semibold
                        text-[#F97316]
                      "
                    >
                      0{index + 1}
                    </span>

                    <div>
                      <h3
                        className="
                          font-heading
                          text-[15.5px]
                          font-semibold
                          text-white
                        "
                      >
                        {feature.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          font-sans
                          text-[14.5px]
                          font-normal
                          leading-[1.65]
                          text-[#CBD5E1]
                        "
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        </section>
      )}
    </>
  );
}