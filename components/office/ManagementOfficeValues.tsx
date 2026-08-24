"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ================================================================
   VIEWPORT 6 — CORE VALUES & CLOSING
   File: components/office/ManagementOfficeValues.tsx

   - Centered composition with electric purple atmosphere
   - High-contrast typography & orange accent line sitting directly on canvas
   - Three restrained value badges: Excellence, Innovation, Sustainability
   - Subtle closing facility photograph with soft purple underglow and quality={95}
   ================================================================ */

function useReveal(threshold = 0.1) {
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

function ExcellenceIcon() {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
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

function SustainabilityIcon() {
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

export default function ManagementOfficeValues() {
  const { ref: contentRef, visible: contentVisible } = useReveal(0.08);
  const { ref: imageRef, visible: imageVisible } = useReveal(0.12);

  const values = [
    {
      id: "excellence",
      label: "EXCELLENCE",
      icon: <ExcellenceIcon />,
    },
    {
      id: "innovation",
      label: "INNOVATION",
      icon: <InnovationIcon />,
    },
    {
      id: "sustainability",
      label: "SUSTAINABILITY",
      icon: <SustainabilityIcon />,
    },
  ];

  return (
    <section
      id="management-office-values"
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
          duration-[900ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${contentVisible ? "translate-y-0 opacity-100" : "translate-y-[24px] opacity-0"}
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
          <span>Embodying HVTI&apos;s</span>{" "}
          <span className="text-[#A855F7]">Core Values</span>
        </h2>

        {/* Orange Accent Line */}
        <div className="my-3.5 h-[2px] w-12 bg-[#F97316]" />

        {/* Exact Body Copy */}
        <p className="max-w-[620px] font-sans text-[14px] leading-[1.75] text-[#CBD5E1] drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)] sm:text-[15px]">
          The Management Office represents the core values of HVTI—
          <strong className="font-semibold text-[#F97316]">excellence</strong>,{" "}
          <strong className="font-semibold text-[#F97316]">innovation</strong>, and{" "}
          <strong className="font-semibold text-[#F97316]">sustainability</strong>
          —while standing as a symbol of our commitment to delivering world-class
          solutions for the electrical industry.
        </p>

        {/* Three Value Badges */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-5 sm:gap-8 md:gap-12">
          {values.map((v) => (
            <div
              key={v.id}
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
                {v.icon}
              </div>
              <span className="font-sans text-[12px] font-bold tracking-[0.14em] text-white">
                {v.label}
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
              alt="HVTI Management Office Facility"
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
