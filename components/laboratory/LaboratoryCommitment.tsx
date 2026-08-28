"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

/* ================================================================
   VIEWPORT 6 — COMMITMENT TO EXCELLENCE & CLOSING
   File: components/laboratory/LaboratoryCommitment.tsx

   - Centered composition with electric purple atmosphere
   - High-contrast typography & orange accent line sitting directly on canvas
   - Three key capability badges: Infrastructure, Innovation, QA up to 800 kV
   - Subtle closing facility photograph with soft purple underglow and quality={95}
   ================================================================ */

function useReveal(threshold = 0.2) {
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

function InfrastructureIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

function InnovationIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18h6M10 22h4" />
      <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3.5 5.5.5.5 1 1.5 1 2.5h5c0-1 .5-2 1-2.5 2-1 3.5-3 3.5-5.5a7 7 0 0 0-7-7z" />
      <path d="M12 6v3M9.5 7.5l2 1.5M14.5 7.5l-2 1.5" />
    </svg>
  );
}

function HighVoltageIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export default function LaboratoryCommitment() {
  const { ref: contentRef, visible: contentVisible } = useReveal(0.2);
  const { ref: imageRef, visible: imageVisible } = useReveal(0.25);

  const pillars = [
    {
      id: "infrastructure",
      label: "15,000 SQ. FT. FACILITY",
      icon: <InfrastructureIcon />,
    },
    {
      id: "rnd",
      label: "DEDICATED R&D",
      icon: <InnovationIcon />,
    },
    {
      id: "voltage",
      label: "RATED UP TO 800 kV",
      icon: <HighVoltageIcon />,
    },
  ];

  return (
    <section
      id="commitment-to-excellence"
      className="
        relative
        flex
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        px-6
        py-16
        sm:px-8
        sm:py-20
        lg:px-12
        lg:py-24
      "
    >
      {/* Central Content Container (constrained to ~860px max width) */}
      <div
        ref={contentRef}
        className={`
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[860px]
          flex-col
          items-center
          text-center
          transition-all
          duration-[1800ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${contentVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        {/* Section Heading */}
        <h2
          className="
            font-heading
            text-[26px]
            font-bold
            tracking-[-0.02em]
            text-white
            drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]
            sm:text-[31px]
            md:text-[35px]
          "
        >
          <span>Commitment to</span>{" "}
          <span className="text-[#A855F7]">Excellence</span>
        </h2>

        {/* Orange Accent Line */}
        <div
          className={`
            my-3.5
            h-[2px]
            bg-[#F97316]
            transition-all
            duration-[1600ms]
            delay-[200ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${contentVisible ? "w-12" : "w-0"}
          `}
        />

        {/* Exact Body Copy */}
        <div className="max-w-[660px] space-y-4 font-sans text-[14.5px] leading-[1.75] text-[#CBD5E1] drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)] sm:text-[15.5px]">
          <p>
            The laboratory reflects HVTI&apos;s commitment to delivering
            high-quality, innovative, and reliable solutions.
          </p>
          <p className="text-[#94A3B8]">
            With its expansive infrastructure, dedicated R&amp;D capabilities,
            and stringent quality assurance processes, HVTI is well-equipped to
            meet the most demanding requirements of the electrical testing and
            safety equipment industry.
          </p>
        </div>

        {/* Three Capability Badges */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-5 sm:gap-8 md:gap-10">
          {pillars.map((p) => (
            <div
              key={p.id}
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/[0.08]
                bg-[#0C1120]/75
                px-4.5
                py-2
                shadow-[0_4px_24px_rgba(0,0,0,0.4)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#A855F7]/40
                hover:bg-[#0C1120]
                hover:shadow-[0_0_24px_rgba(168,85,247,0.2)]
              "
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#A855F7]/40 bg-[#7C3AED]/15 text-[#A855F7] transition-transform duration-300 group-hover:scale-110">
                {p.icon}
              </div>
              <span className="font-sans text-[12px] font-bold tracking-[0.14em] text-white">
                {p.label}
              </span>
            </div>
          ))}
        </div>

        {/* Closing Subtle Facility Photograph with Soft Purple Underglow */}
        <div
          ref={imageRef}
          className={`
            relative
            mt-12
            w-full
            max-w-[440px]
            transition-all
            duration-[1000ms]
            delay-[140ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${imageVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-[20px] scale-[0.98] opacity-0"}
          `}
        >
          {/* Subtle Purple Underglow */}
          <div
            className="
              pointer-events-none
              absolute
              -inset-2
              rounded-[16px]
              bg-[radial-gradient(ellipse_at_50%_100%,rgba(168,85,247,0.26),rgba(124,58,237,0.08)_50%,transparent_75%)]
              blur-[18px]
            "
          />

          <div
            className="
              relative
              aspect-[16/9]
              w-full
              overflow-hidden
              rounded-[10px]
              border
              border-[#A855F7]/25
              bg-[#080D1A]
              shadow-[0_12px_30px_rgba(0,0,0,0.7),0_0_18px_rgba(168,85,247,0.10)]
            "
          >
            <Image
              src="/images/office/hvti-building-bottom-hd.jpg"
              alt="HVTI Laboratory Facility Building"
              fill
              quality={95}
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 440px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
