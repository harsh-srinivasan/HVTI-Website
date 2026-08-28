"use client";

import React from "react";
import GeometricAtmosphere from "@/components/ui/GeometricAtmosphere";
import ClientsHero from "./ClientsHero";
import ClientGrid from "./ClientGrid";
import ClientSectors from "./ClientSectors";
import ClientWhyChoose from "./ClientWhyChoose";
import ClientCTA from "./ClientCTA";

/* ================================================================
   HVTI MASTER CLIENTS PAGE
   File: components/clients/ClientsPage.tsx
   ================================================================ */

export default function ClientsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#05070D]">
      {/* 1. Procedural Geometric Atmosphere Canvas */}
      <GeometricAtmosphere variant="default" />

      {/* 2. Clients Hero */}
      <ClientsHero />

      {/* 3. Client Logo Showcase Grid with Sector Filter */}
      <ClientGrid />

      {/* 4. Core Industry Sectors */}
      <ClientSectors />

      {/* 5. Why Industry Leaders Choose HVTI */}
      <ClientWhyChoose />

      {/* 6. Partner Consultation CTA */}
      <ClientCTA />
    </main>
  );
}
