"use client";

import { useRef, useEffect } from "react";
import { useLenis } from "lenis/react";
import HomeStoryCanvas from "./canvas/HomeStoryCanvas";
import HomeStoryDOM from "./overlays/HomeStoryDOM";

/* ================================================================
   HOME STORY EXPERIENCE — MASTER ORCHESTRATOR
   File: components/home/HomeStoryExperience.tsx

   Phase 1: Foundation & Movement 1 — POWER
   - Viewport-locked sticky stage (sticky top-0 h-screen)
   - Zero Drei ScrollControls — connects directly to root Lenis instance
   - Normalized local progress tracking [0, 1] across the story track
   - Mounts 3D continuous world canvas & synchronized DOM narrative
   ================================================================ */

const STORY_TRACK_HEIGHT = "240vh"; // Calibrated scroll distance for Movement 1: POWER

export default function HomeStoryExperience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef<number>(0);

  // 1. Primary synchronization via Lenis smooth-scroll loop
  useLenis((lenis) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const scrollableDistance = trackRef.current.offsetHeight - window.innerHeight;

    if (scrollableDistance > 0) {
      const p = Math.min(1, Math.max(0, -rect.top / scrollableDistance));
      scrollProgressRef.current = p;
    }
  });

  // 2. Native scroll listener fallback for immediate initial mount sync
  useEffect(() => {
    const handleNativeScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const scrollableDistance = trackRef.current.offsetHeight - window.innerHeight;

      if (scrollableDistance > 0) {
        const p = Math.min(1, Math.max(0, -rect.top / scrollableDistance));
        scrollProgressRef.current = p;
      }
    };

    window.addEventListener("scroll", handleNativeScroll, { passive: true });
    handleNativeScroll();

    return () => window.removeEventListener("scroll", handleNativeScroll);
  }, []);

  return (
    <div className="relative w-full bg-[#05070D]">
      {/* Multi-Viewport Scroll Track */}
      <div
        ref={trackRef}
        className="relative w-full select-none"
        style={{ height: STORY_TRACK_HEIGHT }}
        aria-label="HVTI Electrical Systems Story"
      >
        {/* Viewport-Locked Sticky Stage: Active throughout the scroll journey */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#05070D]">
          {/* Layer 0: Continuous 3D WebGL World */}
          <HomeStoryCanvas scrollProgressRef={scrollProgressRef} />

          {/* Layer 1: Synchronized HTML/DOM Narrative Overlay */}
          <HomeStoryDOM scrollProgressRef={scrollProgressRef} />
        </div>
      </div>
    </div>
  );
}
