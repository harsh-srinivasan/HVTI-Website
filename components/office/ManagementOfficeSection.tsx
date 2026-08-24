"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

/* ================================================================
   REUSABLE EDITORIAL SECTION COMPONENT
   File: components/office/ManagementOfficeSection.tsx

   - Strict alternating layout:
     * layout="image-left": Photo on LEFT, Text on RIGHT
     * layout="image-right": Text on LEFT, Photo on RIGHT
   - Tightened, natural vertical spacing (py-12 sm:py-16)
   - 100% seamless text integration directly on the dark canvas
   - Exact 4:3 native aspect ratio framing for zero zoom/crop distortion
   - Clean, delicate image border with subtle purple underglow
   ================================================================ */

export interface ManagementOfficeSectionProps {
  id: string;
  layout: "image-left" | "image-right";
  titleWhite: string;
  titlePurple: string;
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
}

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

export default function ManagementOfficeSection({
  id,
  layout,
  titleWhite,
  titlePurple,
  imageSrc,
  imageAlt,
  children,
}: ManagementOfficeSectionProps) {
  const { ref: sectionRef, visible: sectionVisible } = useReveal(0.08);

  const isImageLeft = layout === "image-left";

  return (
    <section
      id={id}
      className="
        relative
        w-full
        overflow-hidden
        px-6
        py-12
        sm:px-8
        sm:py-16
        lg:px-12
        lg:py-20
      "
    >
      {/* Central Constrained Canvas (Max Width: 900px) */}
      <div
        ref={sectionRef}
        className={`
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[900px]
          grid-cols-1
          items-center
          gap-8
          transition-all
          duration-[900ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          md:grid-cols-2
          md:gap-12
          lg:gap-16
          ${sectionVisible ? "translate-y-0 opacity-100" : "translate-y-[24px] opacity-0"}
        `}
      >
        {isImageLeft ? (
          <>
            {/* Photo LEFT */}
            <div className="w-full">
              <SectionImage imageSrc={imageSrc} imageAlt={imageAlt} />
            </div>

            {/* Text RIGHT */}
            <div className="w-full">
              <SectionText titleWhite={titleWhite} titlePurple={titlePurple}>
                {children}
              </SectionText>
            </div>
          </>
        ) : (
          <>
            {/* Text LEFT */}
            <div className="w-full">
              <SectionText titleWhite={titleWhite} titlePurple={titlePurple}>
                {children}
              </SectionText>
            </div>

            {/* Photo RIGHT */}
            <div className="w-full">
              <SectionImage imageSrc={imageSrc} imageAlt={imageAlt} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function SectionText({
  titleWhite,
  titlePurple,
  children,
}: {
  titleWhite: string;
  titlePurple: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-10 flex flex-col justify-center">
      {/* Heading */}
      <h2
        className="
          font-heading
          text-[25px]
          font-bold
          leading-[1.2]
          tracking-[-0.02em]
          text-white
          drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]
          sm:text-[28px]
          lg:text-[31px]
        "
      >
        <span>{titleWhite}</span>
        <br />
        <span className="text-[#A855F7]">{titlePurple}</span>
      </h2>

      {/* Orange Accent Line */}
      <div className="mb-4 mt-3 h-[2px] w-9 bg-[#F97316]" />

      {/* Narrative Body Copy */}
      <div className="space-y-3.5 font-sans text-[14px] leading-[1.7] text-[#CBD5E1] drop-shadow-[0_1px_8px_rgba(0,0,0,0.75)] sm:text-[14.5px]">
        {children}
      </div>
    </div>
  );
}

function SectionImage({
  imageSrc,
  imageAlt,
}: {
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div className="relative w-full">
      {/* Subtle Purple Underglow & Ambient Halo */}
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

      {/* Clean Delicate Border Image Frame with Exact 4:3 Native Ratio */}
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
          src={imageSrc}
          alt={imageAlt}
          fill
          quality={95}
          className="object-cover object-center transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 440px"
        />
      </div>
    </div>
  );
}
