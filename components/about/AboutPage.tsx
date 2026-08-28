"use client";

import React from "react";
import GeometricAtmosphere from "@/components/ui/GeometricAtmosphere";
import AboutHero from "./AboutHero";
import AboutMission from "./AboutMission";
import AboutVisionary from "./AboutVisionary";
import AboutCEO from "./AboutCEO";
import AboutValues from "./AboutValues";
import AboutCTA from "./AboutCTA";

/* ================================================================
   HVTI COMPANY OVERVIEW PAGE — MASTER CONTAINER
   File: components/about/AboutPage.tsx

   Storytelling & Viewport progression:
   - Viewport 1: Hero (Center, 28+ Years Highlight, Location & Facility Photo)
   - Viewport 2: Indigenous Innovation & "Made in India" Mission (Left Text / Right Photo)
   - Viewport 3: In Memory of Our Visionary — Mr. Umed Singh (Left Portrait / Right Text)
   - Viewport 4: CEO's Message — Raghbindra Singh (Left Text / Right Portrait)
   - Viewport 5: Our 5 Core Values (Pillars Grid)
   - Viewport 6: Facilities & Campus Gateway CTA Component (Bottom)
   ================================================================ */

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#05070D]">
      {/* 1. Continuous Reusable Architectural Blueprint Atmospheric Background */}
      <GeometricAtmosphere variant="about" />

      {/* 2. Viewport 1 — Hero */}
      <AboutHero />

      {/* 3. Viewport 2 — Indigenous Innovation & "Made in India" */}
      <AboutMission />

      {/* 4. Viewport 3 — In Memory of Our Visionary (Mr. Umed Singh) */}
      <AboutVisionary />

      {/* 5. Viewport 4 — CEO's Message (Raghbindra Singh) */}
      <AboutCEO />

      {/* 6. Viewport 5 — 5 Core Values */}
      <AboutValues />

      {/* 7. Bottom CTA — Discover Our Facilities Gateway */}
      <AboutCTA />
    </main>
  );
}
