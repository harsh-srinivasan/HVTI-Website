"use client";

import React from "react";
import GeometricAtmosphere from "@/components/ui/GeometricAtmosphere";
import TeamHero from "./TeamHero";
import TeamLeadership from "./TeamLeadership";
import TeamGrid from "./TeamGrid";
import TeamCulture from "./TeamCulture";
import TeamCTA from "./TeamCTA";

/* ================================================================
   HVTI MASTER TEAM PAGE COMPONENT
   File: components/team/TeamPage.tsx
   ================================================================ */

export default function TeamPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#05070D]">
      {/* 1. Procedural Geometric Atmosphere Canvas */}
      <GeometricAtmosphere variant="default" />

      {/* 2. Team Hero */}
      <TeamHero />

      {/* 3. Leadership Spotlight */}
      <TeamLeadership />

      {/* 4. Core Technical Team Grid */}
      <TeamGrid />

      {/* 5. Engineering Culture & 4 Pillars */}
      <TeamCulture />

      {/* 6. Consultation & Collaboration CTA */}
      <TeamCTA />
    </main>
  );
}
