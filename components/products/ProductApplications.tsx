"use client";

import { useEffect, useRef, useState } from "react";
import { ProductApplication } from "@/types/product";
import { renderProductIcon } from "./ProductIcons";
import { OrbitalEnergyRings } from "./ProductSchematics";

/* ================================================================
   HVTI APPLICATIONS SYSTEM (DYNAMIC ORBITAL & BALANCED LAYOUTS)
   File: components/products/ProductApplications.tsx

   Dynamically adapts based on application count:
   - 5 items: Iconic centered orbital energy ellipse
   - 3-4 items: Balanced triangular / radial composition
   - 2 items: Centered paired composition
   - 6+ items: Clean engineering tile grid
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

export default function ProductApplications({
  applications,
}: {
  applications: (string | ProductApplication)[];
}) {
  const { ref: headerRef, visible: headerVisible } = useReveal(0.2);
  const { ref: orbitRef, visible: orbitVisible } = useReveal(0.15);

  if (!applications || applications.length === 0) {
    return null;
  }

  // Normalize string[] or ProductApplication[] to consistent objects
  const items: ProductApplication[] = applications.map((app, idx) => {
    if (typeof app === "string") {
      return {
        id: app.toLowerCase().replace(/\s+/g, "-"),
        title: app,
        icon: app.toLowerCase(),
        isCenter: idx === 0 && applications.length === 5,
      };
    }
    return app;
  });

  const count = items.length;
  // If count is 5, identify center item (first item marked isCenter, or item 0)
  const centerItem = items.find((it) => it.isCenter) || items[0];
  const orbitItems = items.filter((it) => it !== centerItem);

  return (
    <section
      id="applications"
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
            mb-14
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
              Applications
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
            Designed for critical applications.
          </h2>
        </div>

        {/* ========================================================
            DESKTOP COMPOSITION ENGINE (>= lg)
            ======================================================== */}
        <div
          ref={orbitRef}
          className={`
            relative
            hidden
            w-full
            transition-all
            duration-[1200ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            lg:block
            ${orbitVisible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"}
          `}
        >
          {/* SCENARIO A: EXACT 5 ITEMS — ICONIC ORBITAL ENERGY LOOP */}
          {count === 5 && (
            <div className="relative mx-auto h-[460px] w-full max-w-[980px]">
              {/* Background Orbital Rings */}
              <div className="pointer-events-none absolute inset-0">
                <OrbitalEnergyRings opacity={0.35} />
              </div>

              {/* Center Application Badge: e.g. Motors */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div
                  className="
                    group
                    relative
                    mx-auto
                    flex
                    h-[130px]
                    w-[130px]
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-[#A855F7]
                    bg-[#100B24]
                    text-[#C084FC]
                    shadow-[0_0_50px_rgba(168,85,247,0.45)]
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:shadow-[0_0_70px_rgba(168,85,247,0.7)]
                  "
                >
                  <div className="absolute inset-[-8px] animate-pulse rounded-full border border-[#F97316]/50" />
                  {renderProductIcon(centerItem.icon || centerItem.title, {
                    className: "h-14 w-14 text-current transition-transform duration-300 group-hover:scale-110",
                    strokeWidth: 1.6,
                  })}
                </div>
                <p className="mt-4 font-heading text-[20px] font-bold tracking-tight text-white">
                  {centerItem.title}
                </p>
              </div>

              {/* Orbit Item 1: Top Left (e.g. Generators) */}
              <div className="absolute left-[14%] top-[12%] text-center">
                <div
                  className="
                    group
                    mx-auto
                    flex
                    h-[80px]
                    w-[80px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.15]
                    bg-[#090F1E]
                    text-[#A855F7]
                    shadow-[0_0_24px_rgba(168,85,247,0.2)]
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:border-[#A855F7]
                    hover:bg-[#120B24]
                    hover:text-[#C084FC]
                    hover:shadow-[0_0_36px_rgba(168,85,247,0.4)]
                  "
                >
                  {renderProductIcon(orbitItems[0]?.icon || orbitItems[0]?.title, {
                    className: "h-9 w-9 text-current",
                    strokeWidth: 1.6,
                  })}
                </div>
                <p className="mt-2.5 font-heading text-[15.5px] font-semibold text-white">
                  {orbitItems[0]?.title}
                </p>
              </div>

              {/* Orbit Item 2: Top Right (e.g. Switchgears) */}
              <div className="absolute right-[14%] top-[12%] text-center">
                <div
                  className="
                    group
                    mx-auto
                    flex
                    h-[80px]
                    w-[80px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.15]
                    bg-[#090F1E]
                    text-[#A855F7]
                    shadow-[0_0_24px_rgba(168,85,247,0.2)]
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:border-[#A855F7]
                    hover:bg-[#120B24]
                    hover:text-[#C084FC]
                    hover:shadow-[0_0_36px_rgba(168,85,247,0.4)]
                  "
                >
                  {renderProductIcon(orbitItems[1]?.icon || orbitItems[1]?.title, {
                    className: "h-9 w-9 text-current",
                    strokeWidth: 1.6,
                  })}
                </div>
                <p className="mt-2.5 font-heading text-[15.5px] font-semibold text-white">
                  {orbitItems[1]?.title}
                </p>
              </div>

              {/* Orbit Item 3: Bottom Left (e.g. Cables) */}
              <div className="absolute bottom-[8%] left-[20%] text-center">
                <div
                  className="
                    group
                    mx-auto
                    flex
                    h-[80px]
                    w-[80px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.15]
                    bg-[#090F1E]
                    text-[#A855F7]
                    shadow-[0_0_24px_rgba(168,85,247,0.2)]
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:border-[#A855F7]
                    hover:bg-[#120B24]
                    hover:text-[#C084FC]
                    hover:shadow-[0_0_36px_rgba(168,85,247,0.4)]
                  "
                >
                  {renderProductIcon(orbitItems[2]?.icon || orbitItems[2]?.title, {
                    className: "h-9 w-9 text-current",
                    strokeWidth: 1.6,
                  })}
                </div>
                <p className="mt-2.5 font-heading text-[15.5px] font-semibold text-white">
                  {orbitItems[2]?.title}
                </p>
              </div>

              {/* Orbit Item 4: Bottom Right (e.g. Transformers) */}
              <div className="absolute bottom-[8%] right-[20%] text-center">
                <div
                  className="
                    group
                    mx-auto
                    flex
                    h-[80px]
                    w-[80px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.15]
                    bg-[#090F1E]
                    text-[#A855F7]
                    shadow-[0_0_24px_rgba(168,85,247,0.2)]
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:border-[#A855F7]
                    hover:bg-[#120B24]
                    hover:text-[#C084FC]
                    hover:shadow-[0_0_36px_rgba(168,85,247,0.4)]
                  "
                >
                  {renderProductIcon(orbitItems[3]?.icon || orbitItems[3]?.title, {
                    className: "h-9 w-9 text-current",
                    strokeWidth: 1.6,
                  })}
                </div>
                <p className="mt-2.5 font-heading text-[15.5px] font-semibold text-white">
                  {orbitItems[3]?.title}
                </p>
              </div>
            </div>
          )}

          {/* SCENARIO B: 2 TO 4 OR 6+ ITEMS — BALANCED RADIAL / GRID LAYOUT */}
          {count !== 5 && (
            <div
              className="
                mx-auto
                grid
                max-w-[1100px]
                items-center
                justify-center
                gap-8
              "
              style={{
                gridTemplateColumns: `repeat(${Math.min(count, 4)}, minmax(180px, 1fr))`,
              }}
            >
              {items.map((app, index) => (
                <div
                  key={`${app.title}-${index}`}
                  className="
                    group
                    flex
                    flex-col
                    items-center
                    p-4
                    text-center
                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      mb-4
                      flex
                      h-[88px]
                      w-[88px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/[0.14]
                      bg-[#080E1C]
                      text-[#A855F7]
                      shadow-[0_0_28px_rgba(168,85,247,0.2)]
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:border-[#A855F7]
                      group-hover:bg-[#110B24]
                      group-hover:text-[#C084FC]
                      group-hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]
                    "
                  >
                    {renderProductIcon(app.icon || app.title, {
                      className: "h-10 w-10 text-current",
                      strokeWidth: 1.6,
                    })}
                  </div>
                  <h3 className="font-heading text-[17px] font-semibold text-white">
                    {app.title}
                  </h3>
                  {app.description && (
                    <p className="mt-1.5 max-w-[200px] font-sans text-[13.5px] text-[#94A3B8]">
                      {app.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ========================================================
            MOBILE COMPOSITION (< lg)
            ======================================================== */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:hidden">
          {items.map((app, index) => {
            const isHighlighted = app.isCenter ?? (index === 0 && count === 5);

            return (
              <div
                key={`mob-${app.title}-${index}`}
                className={`
                  flex
                  flex-col
                  items-center
                  rounded-[12px]
                  border
                  p-5
                  text-center
                  ${
                    isHighlighted
                      ? "border-[#A855F7]/50 bg-[#120B24]/70 shadow-[0_0_24px_rgba(168,85,247,0.2)]"
                      : "border-white/[0.08] bg-[#080D17]/70"
                  }
                `}
              >
                <div
                  className={`
                    mb-3
                    flex
                    h-[60px]
                    w-[60px]
                    items-center
                    justify-center
                    rounded-full
                    ${
                      isHighlighted
                        ? "border border-[#A855F7] bg-[#A855F7]/20 text-[#C084FC]"
                        : "border border-white/10 bg-[#0A1020] text-[#A855F7]"
                    }
                  `}
                >
                  {renderProductIcon(app.icon || app.title, {
                    className: "h-7 w-7 text-current",
                    strokeWidth: 1.6,
                  })}
                </div>
                <h3 className="font-heading text-[15px] font-semibold text-white">
                  {app.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}