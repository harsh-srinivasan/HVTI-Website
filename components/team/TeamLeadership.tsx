"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { leadershipMembers } from "@/data/team";

/* ================================================================
   HVTI TEAM — 1-VIEWPORT-PER-LEADER EXECUTIVE SPOTLIGHT
   File: components/team/TeamLeadership.tsx

   - Each Leadership Card occupies its OWN complete 100vh viewport
   - Substantially larger, grander, and more prominent than core talent cards
   - Centered 2-column layout matching Management Office & About page standard
   - Mobile: Text ALWAYS 1st, Photo ALWAYS 2nd
   - Desktop: Strict alternating Left / Right balance
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

function LeadershipViewportCard({
  member,
  index,
}: {
  member: (typeof leadershipMembers)[0];
  index: number;
}) {
  const { ref, visible } = useReveal(0.2);
  const isEven = index % 2 === 0; // index 0: CEO (Text Left / Photo Right), index 1: Founder (Photo Left / Text Right)

  return (
    <section
      id={`leadership-${member.id}`}
      className="
        relative
        z-10
        flex
        min-h-[100svh]
        min-h-screen
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        px-6
        py-12
        sm:px-10
        sm:py-16
        lg:px-14
        xl:px-20
      "
    >
      <div
        ref={ref}
        className={`
          my-auto
          mx-auto
          grid
          w-full
          max-w-[1120px]
          grid-cols-1
          items-center
          gap-8
          transition-all
          duration-[1800ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          md:grid-cols-12
          md:gap-12
          lg:gap-16
          ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        {/* ========================================================
            TEXT COLUMN
            Mobile: order-1 (ALWAYS FIRST)
            Desktop: md:order-1 (if isEven) or md:order-2 (if !isEven)
            ======================================================== */}
        <div
          className={`
            order-1
            flex
            flex-col
            justify-center
            md:col-span-7
            ${isEven ? "md:order-1" : "md:order-2"}
          `}
        >
          {/* Eyebrow Pill */}
          <div className="flex items-center gap-2.5">
            <span className="h-[1.5px] w-6 bg-[#F97316]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.20em] text-[#F97316]">
              {member.badge}
            </span>
          </div>

          {/* Name */}
          <h2
            className="
              mt-3
              font-heading
              text-2xl
              font-bold
              tracking-[-0.03em]
              text-white
              drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]
              sm:text-3xl
              md:text-[36px]
              lg:text-[42px]
              leading-[1.1]
            "
          >
            {member.name}
          </h2>

          {/* Role */}
          <p
            className={`
              mt-1.5
              font-sans
              text-[15px]
              font-semibold
              sm:text-[16.5px]
              ${member.role.includes("Founder") ? "text-[#F97316]" : "text-[#A855F7]"}
            `}
          >
            {member.role}
          </p>

          {/* Pedigree Badges */}
          <div className="mt-3.5 flex flex-wrap gap-2">
            {member.pedigree.map((item, idx) => (
              <span
                key={idx}
                className="
                  rounded-full
                  border
                  border-white/[0.12]
                  bg-[#0A0F1D]/80
                  px-3
                  py-1
                  font-mono
                  text-[11px]
                  font-medium
                  text-[#CBD5E1]
                  backdrop-blur-sm
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* Orange Accent Bar */}
          <div className="my-4 h-[2px] w-12 bg-[#F97316]" />

          {/* Biography */}
          <p className="font-sans text-[14px] leading-[1.75] text-[#CBD5E1] sm:text-[15px] lg:text-[15.5px]">
            {member.bio}
          </p>

          {/* Signature Quote Callout */}
          {member.quote && (
            <div className="mt-5 rounded-2xl border border-[#A855F7]/30 bg-[#0A0F1D]/90 p-4.5 sm:p-5 shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
              <div className="flex items-start gap-3">
                <span className="font-serif text-3xl font-black leading-none text-[#F97316]">
                  “
                </span>
                <p className="font-sans text-[13px] italic leading-[1.65] text-white/90 sm:text-[14px]">
                  {member.quote}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ========================================================
            PHOTO COLUMN (SUBSTANTIALLY LARGER & PROMINENT)
            Mobile: order-2 (ALWAYS SECOND)
            Desktop: md:order-2 (if isEven) or md:order-1 (if !isEven)
            ======================================================== */}
        <div
          className={`
            order-2
            flex
            justify-center
            md:col-span-5
            ${isEven ? "md:order-2" : "md:order-1"}
          `}
        >
          <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
            {/* Luminous Ambient Halo Glow */}
            <div
              className={`
                pointer-events-none
                absolute
                -inset-3
                rounded-[28px]
                blur-[35px]
                ${
                  member.role.includes("Founder")
                    ? "bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.22),rgba(168,85,247,0.14)_50%,transparent_75%)]"
                    : "bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.30),rgba(124,58,237,0.12)_50%,transparent_75%)]"
                }
              `}
            />

            {/* Grand High-Resolution Portrait Card */}
            <div
              className="
                relative
                aspect-[4/4.6]
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-[#A855F7]/35
                bg-[#080D1A]
                shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(168,85,247,0.15)]
              "
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                quality={95}
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 420px"
              />

              {/* Bottom Subtle Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-transparent opacity-50" />

              {/* Verified Leadership Pill at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between rounded-xl border border-white/[0.12] bg-[#05070D]/85 px-3.5 py-2 backdrop-blur-md">
                <div>
                  <p className="font-sans text-[12px] font-bold text-white leading-tight">
                    {member.name}
                  </p>
                  <p className="font-mono text-[9.5px] text-[#A855F7] leading-tight">
                    High Voltage Testing Instruments
                  </p>
                </div>
                <span className="h-2 w-2 rounded-full bg-[#22C55E] shadow-[0_0_8px_#22C55E]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TeamLeadership() {
  return (
    <>
      {leadershipMembers.map((member, index) => (
        <LeadershipViewportCard
          key={member.id}
          member={member}
          index={index}
        />
      ))}
    </>
  );
}
