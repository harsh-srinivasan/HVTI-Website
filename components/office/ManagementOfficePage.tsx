"use client";

import React from "react";
import GeometricAtmosphere from "@/components/ui/GeometricAtmosphere";
import ManagementOfficeHero from "./ManagementOfficeHero";
import ManagementOfficeSection from "./ManagementOfficeSection";
import ManagementOfficeValues from "./ManagementOfficeValues";

/* ================================================================
   HVTI MANAGEMENT OFFICE PAGE — MASTER CONTAINER
   File: components/office/ManagementOfficePage.tsx

   Alternating narrative sequence:
   - Viewport 1: Hero (Center)
   - Viewport 2: Section 1 — Prime Location (Photo Left / Text Right)
   - Viewport 3: Section 2 — Core Functions (Text Left / Photo Right)
   - Viewport 4: Section 3 — In-House R&D & Testing (Photo Left / Text Right)
   - Viewport 5: Section 4 — Sustainable Operations (Text Left / Photo Right)
   - Viewport 6: Core Values & Closing (Center)
   ================================================================ */

export default function ManagementOfficePage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#05070D]">
      {/* Continuous Architectural Blueprint Atmospheric Background */}
      <GeometricAtmosphere variant="office" />

      {/* Viewport 1 — Hero */}
      <ManagementOfficeHero />

      {/* Viewport 2 — Section 1: Prime Location & Strategic Connectivity */}
      <ManagementOfficeSection
        id="prime-location"
        layout="image-left"
        titleWhite="Prime Location &"
        titlePurple="Strategic Connectivity"
        imageSrc="/images/office/hvti-reception-lobby-hd.jpg"
        imageAlt="HVTI Corporate Reception Lobby in Gurgaon"
      >
        <p>
          Situated in the heart of Gurgaon&apos;s commercial hub, the Management
          Office offers seamless connectivity to corporate hubs, transit routes,
          and industrial zones across Delhi-NCR.
        </p>
        <p>
          Its strategic location ensures effortless accessibility for clients,
          partners, and team members alike.
        </p>
      </ManagementOfficeSection>

      {/* Viewport 3 — Section 2: Core Functions & Operational Excellence */}
      <ManagementOfficeSection
        id="core-functions"
        layout="image-right"
        titleWhite="Core Functions &"
        titlePurple="Operational Excellence"
        imageSrc="/images/office/hvti-operations-floor-hd.jpg"
        imageAlt="HVTI Corporate Operations Floor with Engineering Workstations"
      >
        <p>
          The Management Office serves as the nerve center for HVTI&apos;s
          strategic operations, housing leadership teams, project management,
          business development, client relations, and administrative functions.
        </p>
        <p>
          Designed for seamless collaboration, the facility fosters innovation,
          streamlined decision-making, and operational efficiency to support our
          growing client base across India and beyond.
        </p>
      </ManagementOfficeSection>

      {/* Viewport 4 — Section 3: In-House R&D & Testing Facility */}
      <ManagementOfficeSection
        id="rd-testing"
        layout="image-left"
        titleWhite="In-House R&D &"
        titlePurple="Testing Facility"
        imageSrc="/images/office/hvti-rd-workshop-hd.jpg"
        imageAlt="HVTI In-House Research & Development Electrical Testing Bay"
      >
        <p>
          Beyond corporate operations, the facility features an in-house
          workshop and testing setup dedicated to research and development.
        </p>
        <p>
          This enables our engineering team to continuously innovate, validate,
          and refine our high-voltage testing solutions—ensuring every product
          meets the highest standards of safety, accuracy, and reliability before
          deployment.
        </p>
      </ManagementOfficeSection>

      {/* Viewport 5 — Section 4: Sustainable Operations — 15 kW Solar Setup */}
      <ManagementOfficeSection
        id="sustainable-operations"
        layout="image-right"
        titleWhite="Sustainable Operations —"
        titlePurple="15 kW Solar Setup"
        imageSrc="/images/office/hvti-solar-rooftop-hd.jpg"
        imageAlt="HVTI 15kW Rooftop Solar Photovoltaic Installation"
      >
        <p>
          Reflecting HVTI&apos;s commitment to environmental responsibility, the
          Management Office is powered by an in-house 15 kW rooftop solar
          installation.
        </p>
        <p>
          This green energy initiative significantly reduces our carbon footprint
          and powers daily operations with clean, renewable energy—aligning our
          corporate practices with the sustainable future we strive to build.
        </p>
      </ManagementOfficeSection>

      {/* Viewport 6 — Core Values & Closing */}
      <ManagementOfficeValues />
    </main>
  );
}
