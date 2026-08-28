"use client";

import React, { useEffect, useRef, useState } from "react";

/* ================================================================
   VIEWPORT 5 — OUR 5 FOUNDATIONAL CORE VALUES
   File: components/about/AboutValues.tsx

   - 5 Core Values sitting directly on the continuous blueprint canvas:
     1. Client Focus
     2. Quality Excellence
     3. Uncompromising Integrity
     4. Cohesive Teamwork
     5. Passion & Professionalism
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

const coreValues = [
  {
    num: "01",
    title: "Client Focus",
    subtitle: "Trusted Engineering Advisors",
    description:
      "As trusted technical advisors, every testing system and safety protocol we engineer is built to create uncompromising value for our clients.",
    accent: "orange",
  },
  {
    num: "02",
    title: "Quality Excellence",
    subtitle: "Precision & Verification",
    description:
      "We are proud to stand firmly behind the precision, reliability, and international calibration accuracy of every product we deliver.",
    accent: "purple",
  },
  {
    num: "03",
    title: "Uncompromising Integrity",
    subtitle: "Honesty & Accountability",
    description:
      "We act with absolute integrity through technical honesty, total fairness, and rigorous accountability across all operations.",
    accent: "purple",
  },
  {
    num: "04",
    title: "Cohesive Teamwork",
    subtitle: "Engineering as One Family",
    description:
      "As a united engineering family, we ask for help, offer proactive collaboration, and elevate each other to achieve breakthroughs.",
    accent: "orange",
  },
  {
    num: "05",
    title: "Passion & Professionalism",
    subtitle: "Dedication with Joy",
    description:
      "We work with relentless technical passion, maintain consummate professionalism, and celebrate the journey of powering a safer world.",
    accent: "purple",
  },
];

export default function AboutValues() {
  const { ref: headerRef, visible: headerVisible } = useReveal(0.2);
  const { ref: gridRef, visible: gridVisible } = useReveal(0.2);

  return (
    <section
      id="about-values"
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
      {/* Central Constrained Canvas (Max Width: 1040px) */}
      <div className="relative z-10 mx-auto w-full max-w-[1040px]">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`
            flex
            flex-col
            items-center
            text-center
            transition-all
            duration-[1800ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${headerVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
          `}
        >
          <div className="flex items-center gap-3">
            <span
              className={`
                h-[2px]
                bg-[#F97316]
                transition-all
                duration-[1600ms]
                delay-[200ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${headerVisible ? "w-9" : "w-0"}
              `}
            />
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
              OUR FOUNDATIONAL PILLARS
            </span>
            <span
              className={`
                h-[2px]
                bg-[#F97316]
                transition-all
                duration-[1600ms]
                delay-[200ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${headerVisible ? "w-9" : "w-0"}
              `}
            />
          </div>

          <h2
            className="
              mt-3
              font-heading
              text-[28px]
              font-bold
              tracking-[-0.02em]
              text-white
              drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]
              sm:text-[34px]
              lg:text-[38px]
            "
          >
            <span>Core Values That</span>{" "}
            <span className="text-[#A855F7]">Drive HVTI</span>
          </h2>

          <p className="mt-3 max-w-[620px] font-sans text-[14px] leading-relaxed text-[#94A3B8] sm:text-[15px]">
            The foundational principles guiding our high-voltage engineers,
            researchers, and leadership in every product and partnership.
          </p>
        </div>

        {/* 5 Core Values Grid */}
        <div
          ref={gridRef}
          className="
            mt-12
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-6
          "
        >
          {coreValues.map((val, index) => {
            const isFourth = index === 3;
            const isFifth = index === 4;

            let colClass = "lg:col-span-2";
            if (isFourth) {
              colClass = "lg:col-span-2 lg:col-start-2";
            } else if (isFifth) {
              colClass =
                "lg:col-span-2 sm:col-span-2 sm:max-w-[calc(50%-10px)] sm:mx-auto lg:max-w-none";
            }

            const delays = [
              "delay-[150ms]",
              "delay-[300ms]",
              "delay-[450ms]",
              "delay-[600ms]",
              "delay-[750ms]",
            ];

            return (
              <div
                key={val.num}
                className={`
                  group
                  relative
                  flex
                  w-full
                  flex-col
                  justify-between
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-[#0A0F1D]/80
                  p-5
                  shadow-[0_8px_24px_rgba(0,0,0,0.5)]
                  backdrop-blur-sm
                  transition-all
                  duration-[1800ms]
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:border-[#A855F7]/40
                  hover:bg-[#0A0F1D]
                  hover:shadow-[0_0_24px_rgba(168,85,247,0.15)]
                  ${delays[index] || "delay-[150ms]"}
                  ${gridVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
                  ${colClass}
                `}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[18px] font-bold text-[#A855F7]/60 group-hover:text-[#A855F7]">
                      {val.num}
                    </span>
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        val.accent === "orange" ? "bg-[#F97316]" : "bg-[#A855F7]"
                      }`}
                    />
                  </div>

                  <h3 className="mt-3 font-heading text-[18px] font-bold text-white">
                    {val.title}
                  </h3>
                  <span className="font-mono text-[10.5px] font-semibold uppercase tracking-wider text-[#94A3B8]">
                    {val.subtitle}
                  </span>

                  <p className="mt-2.5 font-sans text-[13px] leading-relaxed text-[#CBD5E1]">
                    {val.description}
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
