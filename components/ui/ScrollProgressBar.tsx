"use client";

import React, { useEffect, useState } from "react";

/* ================================================================
   GLOBAL SCROLL PROGRESS BAR (PREMIUM MINIMALIST TOUCH)
   File: components/ui/ScrollProgressBar.tsx

   - Ultra-thin 2px height for a subtle, state-of-the-art feel
   - Brand theme gradient: Electric Orange (#F97316) -> Royal Purple (#A855F7) -> Deep Violet (#7C3AED)
   - Subtle soft leading glow
   - Smooth 60fps frame interpolation
   ================================================================ */

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const current = (window.scrollY / totalHeight) * 100;
            const clamped = Math.min(100, Math.max(0, current));
            setProgress(clamped);
            setIsVisible(clamped > 0.5);
          } else {
            setIsVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        fixed
        left-0
        top-0
        z-[100]
        h-[2px]
        w-full
        pointer-events-none
        bg-transparent
        transition-opacity
        duration-300
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
      aria-hidden="true"
    >
      <div
        className="
          h-full
          bg-gradient-to-r
          from-[#F97316]
          via-[#A855F7]
          to-[#7C3AED]
          shadow-[0_0_8px_rgba(249,115,22,0.45),0_0_14px_rgba(168,85,247,0.30)]
          transition-[width]
          duration-150
          ease-out
        "
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
