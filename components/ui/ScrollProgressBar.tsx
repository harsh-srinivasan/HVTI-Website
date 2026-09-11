"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

/* ================================================================
   GLOBAL SCROLL PROGRESS BAR (DUAL-ENGINE HARDWARE-ACCELERATED)
   File: components/ui/ScrollProgressBar.tsx

   - Dual-Engine Sync: hooks into Lenis RAF loop + native window scroll
   - GPU-accelerated direct matrix scaleX transform (0 React re-renders)
   - High visibility z-[999] top hairline with glowing brand gradient
   - Automatically resets to 0% upon route navigation
   ================================================================ */

export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const updateProgress = (progress: number) => {
    if (!barRef.current) return;
    const clamped = Math.min(1, Math.max(0, isNaN(progress) ? 0 : progress));
    barRef.current.style.transform = `scaleX(${clamped})`;
  };

  // Reset to 0 upon route change
  useEffect(() => {
    updateProgress(0);
  }, [pathname]);

  // 1. Primary hook directly into Lenis frame updates
  useLenis((lenis) => {
    if (lenis && typeof lenis.progress === "number") {
      updateProgress(lenis.progress);
    }
  });

  // 2. Initial synchronization on route change
  useEffect(() => {
    const handleInitialSync = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        updateProgress(window.scrollY / totalHeight);
      }
    };
    handleInitialSync();
  }, [pathname]);

  return (
    <div
      className="fixed left-0 top-0 z-[999] h-[3.5px] w-full pointer-events-none bg-white/[0.04]"
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



