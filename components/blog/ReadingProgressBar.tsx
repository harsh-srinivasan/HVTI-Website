"use client";

import React, { useEffect, useRef } from "react";

/* ================================================================
   READING PROGRESS BAR (HARDWARE-ACCELERATED)
   File: components/blog/ReadingProgressBar.tsx
   ================================================================ */

export default function ReadingProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (barRef.current) {
            const totalHeight =
              document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
              const currentProgress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
              barRef.current.style.transform = `scaleX(${currentProgress})`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[60] h-[3.5px] w-full pointer-events-none bg-white/[0.04]"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-gradient-to-r from-[#F97316] via-[#EA580C] to-[#A855F7] shadow-[0_0_14px_rgba(249,115,22,0.9),0_0_22px_rgba(168,85,247,0.7)] will-change-transform"
        style={{
          transform: "scaleX(0)",
          transformOrigin: "left center",
        }}
      />
    </div>
  );
}

