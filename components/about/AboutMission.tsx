"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

/* ================================================================
   VIEWPORT 2 — INDIGENOUS INNOVATION & "MADE IN INDIA" MISSION
   File: components/about/AboutMission.tsx

   - Import substitution & Indian manufacturing leadership
   - Sectors served badge matrix (Generation, Transmission, Heavy Industry)
   - High-voltage testing setup photo (4:3 aspect ratio)
   - Sits directly over the continuous architectural canvas
   ================================================================ */

function useReveal(threshold = 0.25) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

const industries = [
  "Power Generation Companies",
  "Power Transmission Companies",
  "Power Distribution Utilities",
  "Steel Plants & Metal Processing",
  "Cement & Heavy Infrastructure",
  "Aluminium & Continuous Process Plants",
];

export default function AboutMission() {
  const { ref: sectionRef, visible: sectionVisible } = useReveal(0.2);

  return (
    <section
      id="about-mission"
      className="
        relative
        w-full
        overflow-hidden
        px-6
        py-16
        sm:px-8
        sm:py-20
        lg:px-12
        lg:py-24
      "
    >
      {/* Central Constrained Canvas (Max Width: 960px) */}
      <div
        ref={sectionRef}
        className={`
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[960px]
          grid-cols-1
          items-center
          gap-10
          transition-all
          duration-[1800ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          md:grid-cols-2
          md:gap-14
          lg:gap-16
          ${sectionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        {/* Text Column (LEFT) */}
        <div className="flex flex-col justify-center">
          <span className="font-sans text-[11px] font-bold tracking-[0.18em] text-[#A855F7]">
            INDIGENOUS INNOVATION &amp; IMPORT SUBSTITUTION
          </span>

          <h2
            className="
              mt-2
              font-heading
              text-[26px]
              font-bold
              leading-[1.2]
              tracking-[-0.02em]
              text-white
              drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]
              sm:text-[30px]
              lg:text-[34px]
            "
          >
            <span>Pioneering High-Voltage</span>
            <br />
            <span className="text-[#A855F7]">Engineering in India</span>
          </h2>

          <div
            className={`
              mb-4
              mt-3
              h-[2px]
              bg-[#F97316]
              transition-all
              duration-[1600ms]
              delay-[200ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${sectionVisible ? "w-12" : "w-0"}
            `}
          />

          <div className="space-y-3.5 font-sans text-[14px] leading-[1.75] text-[#CBD5E1] drop-shadow-[0_1px_8px_rgba(0,0,0,0.75)] sm:text-[14.5px]">
            <p>
              HVTI Pvt Ltd is engaged in the manufacturing, supply, and distribution
              of advanced <strong className="font-semibold text-white">High Voltage Electrical Testing Equipment</strong> and{" "}
              <strong className="font-semibold text-white">Electrical Safety Equipment</strong>.
            </p>
            <p>
              Historically, most specialized high-voltage testing instruments were
              imported due to a lack of domestic manufacturing technology. HVTI is
              proud to develop and produce these advanced systems indigenously in
              India—serving vital national utilities and expanding into international export markets.
            </p>
            <p className="text-[#94A3B8]">
              With over <strong className="font-semibold text-[#F97316]">28 years of specialized experience</strong> in
              product design, manufacturing, and high-tech electrical management, our team delivers world-class accuracy and uncompromising safety.
            </p>
          </div>

          {/* Industries Served Pills */}
          <div className="mt-6">
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-[#94A3B8]">
              Key Industry Sectors Served:
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="
                    rounded-full
                    border
                    border-white/[0.10]
                    bg-[#0C1120]/80
                    px-3
                    py-1
                    font-sans
                    text-[11.5px]
                    font-medium
                    text-[#CBD5E1]
                    shadow-[0_2px_12px_rgba(0,0,0,0.3)]
                  "
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Photo Column (RIGHT) */}
        <div className="relative w-full">
          {/* Subtle Purple Underglow */}
          <div
            className="
              pointer-events-none
              absolute
              -inset-2
              rounded-[18px]
              bg-[radial-gradient(ellipse_at_50%_100%,rgba(168,85,247,0.28),rgba(124,58,237,0.10)_50%,transparent_75%)]
              blur-[18px]
            "
          />

          {/* Clean Border Image Frame with Exact 4:3 Aspect Ratio */}
          <div
            className="
              relative
              aspect-[4/3]
              w-full
              overflow-hidden
              rounded-[12px]
              border
              border-[#A855F7]/25
              bg-[#080D1A]
              shadow-[0_14px_36px_rgba(0,0,0,0.7),0_0_20px_rgba(168,85,247,0.10)]
            "
          >
            <Image
              src="/images/office/hvti-rd-workshop-hd.jpg"
              alt="HVTI High-Voltage Testing & Manufacturing Setup"
              fill
              quality={95}
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
