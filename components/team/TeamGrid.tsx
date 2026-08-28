"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { coreTeamMembers, TeamMember } from "@/data/team";

/* ================================================================
   HVTI TEAM — 1-VIEWPORT-PER-3-CARDS CORE TALENT ENGINE
   File: components/team/TeamGrid.tsx

   - Exactly 3 cards per 100vh viewport
   - Full-height generous card length filling down towards the bottom of viewport
   - Taller portrait frames, rich biographies, and anchored footer badges
   - Automatically paginates/chunks new members into subsequent full viewports
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

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function TeamViewportChunk({
  members,
  chunkIndex,
  totalChunks,
}: {
  members: TeamMember[];
  chunkIndex: number;
  totalChunks: number;
}) {
  const { ref, visible } = useReveal(0.2);

  return (
    <section
      id={`core-team-page-${chunkIndex + 1}`}
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
        py-8
        sm:px-10
        sm:py-10
        lg:px-14
        xl:px-20
      "
    >
      <div
        ref={ref}
        className={`
          my-auto
          mx-auto
          flex
          h-full
          w-full
          max-w-[1380px]
          flex-col
          justify-between
          transition-all
          duration-[1800ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        {/* Section Header (Integrated per Viewport) */}
        <div className="mb-5 text-center sm:mb-6">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-6 bg-[#F97316]" />
            <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#F97316]">
              CORE ENGINEERING TALENT {totalChunks > 1 ? `• PART 0${chunkIndex + 1}` : ""}
            </span>
            <span className="h-[1.5px] w-6 bg-[#F97316]" />
          </div>
          <h2 className="mt-1.5 font-heading text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl lg:text-[32px]">
            Technical Specialists &amp; Engineers
          </h2>
          <p className="mt-1 font-sans text-[13px] text-[#94A3B8] sm:text-[14px]">
            Aerospace, electronics, and manufacturing specialists building mission-critical high-voltage instruments.
          </p>
        </div>

        {/* 3 Full-Length Cards Grid (Stretching to Fill Available Viewport Height) */}
        <div className="grid flex-1 grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="
                group
                relative
                flex
                h-full
                flex-col
                justify-between
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.09]
                bg-[#0A0F1D]/85
                p-5
                shadow-[0_16px_40px_rgba(0,0,0,0.6)]
                backdrop-blur-md
                transition-all
                duration-500
                hover:border-[#A855F7]/45
                hover:bg-[#0A0F1D]
                hover:shadow-[0_0_35px_rgba(168,85,247,0.20)]
                sm:p-6
              "
            >
              {/* Corner Ambient Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-14
                  -top-14
                  h-40
                  w-40
                  rounded-full
                  bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_70%)]
                  blur-[40px]
                "
              />

              <div className="flex flex-col">
                {/* Generous High-Definition Portrait Frame */}
                <div
                  className="
                    relative
                    h-[210px]
                    w-full
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/[0.10]
                    bg-[#05070D]
                    shadow-[0_8px_24px_rgba(0,0,0,0.5)]
                    sm:h-[235px]
                    lg:h-[245px]
                    xl:h-[260px]
                  "
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    quality={95}
                    className="
                      object-cover
                      object-top
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 440px"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-transparent opacity-60" />

                  {/* Badge Overlay */}
                  <div className="absolute bottom-3 left-3 z-20">
                    <span className="rounded-md border border-white/10 bg-[#05070D]/85 px-2.5 py-1 font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#A855F7] backdrop-blur-md">
                      {member.badge}
                    </span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="mt-4">
                  <h3 className="font-heading text-[18px] font-bold text-white leading-tight sm:text-[20px]">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 font-sans text-[13px] font-semibold text-[#F97316]">
                    {member.role}
                  </p>

                  {/* Pedigree Badges */}
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {member.pedigree.map((item, idx) => (
                      <span
                        key={idx}
                        className="
                          rounded-full
                          border
                          border-white/[0.10]
                          bg-[#05070D]/80
                          px-2.5
                          py-0.5
                          font-mono
                          text-[10px]
                          text-[#CBD5E1]
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Biography (Full generous copy filling card height) */}
                  <p className="mt-3 font-sans text-[12.5px] leading-[1.68] text-[#CBD5E1] sm:text-[13px]">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Anchored Bottom Credentials Line */}
              <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3 font-mono text-[10px] text-[#94A3B8]">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
                  <span>HVTI Engineering Team</span>
                </span>
                <span className="text-[#A855F7] font-semibold">Verified Talent</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TeamGrid() {
  // Chunk members into 3-per-viewport arrays
  const memberChunks = chunkArray(coreTeamMembers, 3);

  return (
    <>
      {memberChunks.map((chunk, index) => (
        <TeamViewportChunk
          key={index}
          members={chunk}
          chunkIndex={index}
          totalChunks={memberChunks.length}
        />
      ))}
    </>
  );
}
