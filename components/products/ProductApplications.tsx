"use client";

import { useEffect, useRef, useState } from "react";
import { ProductApplication } from "@/types/product";
import { renderProductIcon } from "./ProductIcons";
import { OrbitalEnergyRings } from "./ProductSchematics";

/* ================================================================
   HVTI APPLICATIONS SYSTEM (UNIVERSAL ORBITAL ENERGY LOOP ENGINE)
   File: components/products/ProductApplications.tsx

   - Automatically renders the iconic cosmic orbital energy rings for ALL products
   - Supports 3, 4, 5, 6, 7+ items with tailored orbital coordinate math
   - Central highlighted hub with pulsing orange/purple safety glow
   - Orbiting satellite nodes with high-voltage neon icons & hover scaling
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

// Preset tailored orbital coordinates for 2, 3, 4, 5, 6 satellite nodes
const orbitalPresets: Record<number, { left: string; top: string }[]> = {
  2: [
    { left: "18%", top: "45%" },
    { left: "82%", top: "45%" },
  ],
  3: [
    { left: "20%", top: "18%" },
    { left: "80%", top: "18%" },
    { left: "50%", top: "82%" },
  ],
  4: [
    { left: "16%", top: "15%" },
    { left: "84%", top: "15%" },
    { left: "18%", top: "80%" },
    { left: "82%", top: "80%" },
  ],
  5: [
    { left: "14%", top: "20%" },
    { left: "86%", top: "20%" },
    { left: "22%", top: "80%" },
    { left: "78%", top: "80%" },
    { left: "50%", top: "10%" },
  ],
  6: [
    { left: "14%", top: "18%" },
    { left: "50%", top: "10%" },
    { left: "86%", top: "18%" },
    { left: "16%", top: "80%" },
    { left: "50%", top: "88%" },
    { left: "84%", top: "80%" },
  ],
};

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
        isCenter: idx === 0,
      };
    }
    return app;
  });

  // Identify central hub (item with isCenter=true, or fallback to first item)
  const centerItem = items.find((it) => it.isCenter) || items[0];
  const orbitItems = items.filter((it) => it !== centerItem);
  const orbitCount = orbitItems.length;

  // Calculate satellite positions (preset coordinates or trigonometric circle)
  const getPosition = (index: number) => {
    if (orbitalPresets[orbitCount] && orbitalPresets[orbitCount][index]) {
      return orbitalPresets[orbitCount][index];
    }
    // Fallback: Trigonometric elliptical distribution
    const angle = (index / orbitCount) * 2 * Math.PI - Math.PI / 2;
    const rx = 36; // horizontal radius in %
    const ry = 32; // vertical radius in %
    const left = `${50 + rx * Math.cos(angle)}%`;
    const top = `${50 + ry * Math.sin(angle)}%`;
    return { left, top };
  };

  return (
    <section
      id="applications"
      className="
        relative
        w-full
        overflow-hidden
        bg-transparent
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        {/* ========================================================
            CENTERED SECTION HEADER
            ======================================================== */}
        <div
          ref={headerRef}
          className={`
            mb-12
            text-center
            transition-all
            duration-[1800ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
          `}
        >
          <div className="mb-3 flex items-center justify-center gap-2.5">
            <span
              className={`
                h-[1.5px]
                bg-[#A855F7]
                transition-all
                duration-[1600ms]
                delay-[200ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${headerVisible ? "w-6" : "w-0"}
              `}
            />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A855F7]">
              Applications
            </span>
            <span
              className={`
                h-[1.5px]
                bg-[#A855F7]
                transition-all
                duration-[1600ms]
                delay-[200ms]
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
              text-[28px]
              font-bold
              leading-[1.18]
              tracking-[-0.025em]
              text-white
              sm:text-[34px]
              lg:text-[38px]
            "
          >
            Designed for Critical High-Voltage Applications
          </h2>
        </div>

        {/* ========================================================
            UNIVERSAL ORBITAL ENERGY RING STAGE (DESKTOP >= lg)
            ======================================================== */}
        <div
          ref={orbitRef}
          className={`
            relative
            hidden
            w-full
            transition-all
            duration-[1800ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            lg:block
            ${orbitVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
          `}
        >
          <div className="relative mx-auto h-[460px] w-full max-w-[980px]">
            {/* Background Cosmic Energy Ellipses */}
            <div className="pointer-events-none absolute inset-0">
              <OrbitalEnergyRings opacity={0.35} />
            </div>

            {/* Central Primary Hub (e.g. Substations / Motors) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div
                className="
                  group
                  relative
                  mx-auto
                  flex
                  h-[124px]
                  w-[124px]
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
                {/* Pulsing Outer Orange Energy Ring */}
                <div className="absolute inset-[-8px] animate-pulse rounded-full border border-[#F97316]/50" />
                {renderProductIcon(centerItem.icon || centerItem.title, {
                  className: "h-12 w-12 text-current transition-transform duration-300 group-hover:scale-110",
                  strokeWidth: 1.6,
                })}
              </div>
              <p className="mt-3.5 font-heading text-[18px] font-bold tracking-tight text-white">
                {centerItem.title}
              </p>
              {centerItem.description && (
                <p className="mx-auto mt-1 max-w-[180px] font-sans text-[12px] text-[#94A3B8] line-clamp-1">
                  {centerItem.description}
                </p>
              )}
            </div>

            {/* Orbiting Satellite Application Nodes */}
            {orbitItems.map((app, index) => {
              const pos = getPosition(index);

              return (
                <div
                  key={`${app.title}-${index}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 text-center transition-transform duration-300"
                  style={{ left: pos.left, top: pos.top }}
                >
                  <div
                    className="
                      group
                      mx-auto
                      flex
                      h-[78px]
                      w-[78px]
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
                    {renderProductIcon(app.icon || app.title, {
                      className: "h-8 w-8 text-current",
                      strokeWidth: 1.6,
                    })}
                  </div>
                  <p className="mt-2 font-heading text-[14.5px] font-semibold text-white">
                    {app.title}
                  </p>
                  {app.description && (
                    <p className="mx-auto mt-0.5 max-w-[160px] font-sans text-[11.5px] text-[#94A3B8] line-clamp-1">
                      {app.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            RESPONSIVE MOBILE COMPOSITION (< lg)
            ======================================================== */}
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:hidden">
          {items.map((app, index) => {
            const isHighlighted = app.isCenter ?? (index === 0);

            return (
              <div
                key={`mob-${app.title}-${index}`}
                className={`
                  flex
                  flex-col
                  items-center
                  rounded-xl
                  border
                  p-4
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
                    mb-2.5
                    flex
                    h-[54px]
                    w-[54px]
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
                    className: "h-6 w-6 text-current",
                    strokeWidth: 1.6,
                  })}
                </div>
                <h3 className="font-heading text-[14px] font-semibold text-white">
                  {app.title}
                </h3>
                {app.description && (
                  <p className="mt-1 font-sans text-[11.5px] text-[#94A3B8] line-clamp-2">
                    {app.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}