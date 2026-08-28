"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

/* ================================================================
   REUSABLE EDITORIAL SECTION COMPONENT
   File: components/office/ManagementOfficeSection.tsx

   - Mobile: Text ALWAYS rendered first, Photo ALWAYS second
     (Eliminates back-to-back adjacent images across sections)
   - Desktop (md+): Strict alternating left/right layout
     * layout="image-left": Photo on LEFT (md:order-1), Text on RIGHT (md:order-2)
     * layout="image-right": Text on LEFT (md:order-1), Photo on RIGHT (md:order-2)
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

export default function ManagementOfficeSection({
  id,
  layout,
  titleWhite,
  titlePurple,
  imageSrc,
  imageAlt,
  children,
}: ManagementOfficeSectionProps) {
  const { ref: sectionRef, visible: sectionVisible } = useReveal(0.2);

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
          duration-[1800ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          md:grid-cols-2
          md:gap-12
          lg:gap-16
          ${sectionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        {/* Narrative Text Column (Always 1st on mobile; alternates on desktop) */}
        <div className={`w-full ${isImageLeft ? "md:order-2" : "md:order-1"}`}>
          <SectionText
            titleWhite={titleWhite}
            titlePurple={titlePurple}
            visible={sectionVisible}
          >
            {children}
          </SectionText>
        </div>

        {/* Photo Column (Always 2nd on mobile; alternates on desktop) */}
        <div className={`w-full ${isImageLeft ? "md:order-1" : "md:order-2"}`}>
          <SectionImage imageSrc={imageSrc} imageAlt={imageAlt} />
        </div>
      </div>
    </section>
  );
}

function SectionText({
  titleWhite,
  titlePurple,
  visible,
  children,
}: {
  titleWhite: string;
  titlePurple: string;
  visible: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-10 flex flex-col justify-center">
      {/* Heading */}
      <h2
        className="
          font-heading
          text-[24px]
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
          ${visible ? "w-10" : "w-0"}
        `}
      />

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
    <div className="relative mx-auto w-full max-w-[420px] md:max-w-none">
      {/* Subtle Purple Underglow */}
      <div
        className="
          pointer-events-none
          absolute
          -inset-2
          rounded-[18px]
          bg-[radial-gradient(ellipse_at_50%_100%,rgba(168,85,247,0.30),rgba(124,58,237,0.10)_50%,transparent_75%)]
          blur-[20px]
        "
      />

      {/* Clean Thin Border Image Frame with Exact 4:3 Aspect Ratio */}
      <div
        className="
          relative
          aspect-[4/3]
          w-full
          overflow-hidden
          rounded-[12px]
          border
          border-[#A855F7]/30
          bg-[#080D1A]
          shadow-[0_16px_40px_rgba(0,0,0,0.75),0_0_24px_rgba(168,85,247,0.14)]
        "
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          quality={95}
          className="object-cover object-center transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 420px"
        />
      </div>
    </div>
  );
}
