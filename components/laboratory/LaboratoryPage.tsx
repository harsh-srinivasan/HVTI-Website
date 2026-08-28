"use client";

import React from "react";
import GeometricAtmosphere from "@/components/ui/GeometricAtmosphere";
import LaboratoryCommitment from "./LaboratoryCommitment";
import LaboratoryHero from "./LaboratoryHero";
import LaboratoryInfrastructure from "./LaboratoryInfrastructure";
import LaboratorySection from "./LaboratorySection";

/* ================================================================
   HVTI LABORATORY FACILITIES PAGE — MASTER CONTAINER
   File: components/laboratory/LaboratoryPage.tsx

   Storytelling & Viewport progression:
   - Viewport 1: Hero (Center, Title & Location)
   - Viewport 2: State-of-the-Art Infrastructure (15,000 Sq. Ft. & Product Lifecycle Flow)
   - Viewport 3: Research & Development (R&D) Center (Photo Left / Text Right)
   - Viewport 4: Manufacturing Excellence (Text Left / Photo Right, 800 kV Highlight)
   - Viewport 5: Testing & Quality Assurance (Photo Left / Text Right)
   - Viewport 6: Commitment to Excellence (Center, Closing Pillars & Photo)
   ================================================================ */

export default function LaboratoryPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#05070D]">
      {/* 1. Continuous Architectural Blueprint Atmospheric Background */}
      <GeometricAtmosphere variant="laboratory" />

      {/* 2. Viewport 1 — Hero */}
      <LaboratoryHero />

      {/* 3. Viewport 2 — State-of-the-Art Infrastructure & Lifecycle Flow */}
      <LaboratoryInfrastructure />

      {/* 4. Viewport 3 — Research and Development (R&D) Center */}
      <LaboratorySection
        id="rnd-center"
        layout="image-left"
        eyebrow="INNOVATION & ENGINEERING"
        titleWhite="Research and Development"
        titlePurple="(R&D) Center"
        imageSrc="/images/office/hvti-rd-workshop-hd.jpg"
        imageAlt="HVTI In-House High-Voltage Research and Development Testing Center"
      >
        <p>
          Innovation is at the heart of everything we do, and our dedicated R&amp;D
          center reflects this core value.
        </p>
        <p>
          Equipped with the latest technologies and staffed by a team of
          experienced electrical engineers and researchers, the center focuses on
          developing groundbreaking solutions for the electrical industry.
        </p>
        <p>
          Here, our engineers explore new materials, technologies, and
          methodologies to push the boundaries of electrical testing and safety
          equipment.
        </p>
        <p className="text-[#94A3B8]">
          Whether it&apos;s enhancing safety features or designing equipment for
          specialized testing environments, our R&amp;D teams work closely with
          clients to create tailored solutions that address unique challenges.
        </p>
      </LaboratorySection>

      {/* 5. Viewport 4 — Manufacturing Excellence */}
      <LaboratorySection
        id="manufacturing-excellence"
        layout="image-right"
        eyebrow="HIGH-VOLTAGE PRECISION"
        titleWhite="Manufacturing"
        titlePurple="Excellence"
        imageSrc="/images/office/hvti-operations-floor-hd.jpg"
        imageAlt="HVTI High-Voltage Manufacturing and Assembly Floor"
        highlightBadge={{
          text: "UP TO 800 kV",
          subtext: "EQUIPMENT RATING CAPABILITY",
        }}
      >
        <p>
          Our manufacturing units within the laboratory are outfitted with
          cutting-edge machinery and tools, enabling the production of a wide
          range of electrical testing, measuring, and safety equipment rated{" "}
          <strong className="font-semibold text-[#F97316]">up to 800 kV</strong>.
        </p>
        <p>
          Every step of the production process is meticulously monitored to
          ensure adherence to stringent quality standards.
        </p>
        <p>
          By integrating modern technology into our manufacturing processes, we
          maintain the highest levels of efficiency and precision while offering
          customization based on client needs.
        </p>
        <p className="text-[#94A3B8]">
          Our skilled in-house engineers and technicians work collaboratively to
          improve product performance and optimize production timelines.
        </p>
      </LaboratorySection>

      {/* 6. Viewport 5 — Testing and Quality Assurance */}
      <LaboratorySection
        id="testing-quality-assurance"
        layout="image-left"
        eyebrow="RIGOROUS VALIDATION"
        titleWhite="Testing and"
        titlePurple="Quality Assurance"
        imageSrc="/images/products/product-testing.jpg"
        imageAlt="HVTI High-Voltage Testing Bay and Quality Assurance Laboratory"
      >
        <p>
          At HVTI, <strong className="font-semibold text-white">quality is non-negotiable</strong>.
        </p>
        <p>
          Our laboratory includes comprehensive testing and quality assurance
          labs, where every product undergoes rigorous evaluations under
          simulated real-world conditions.
        </p>
        <p>
          Equipped with high-voltage test bays and specialized equipment, our
          testing facilities are designed to conduct precise measurements,
          reliability tests, and performance validations.
        </p>
        <p>
          These ensure that every product meets industry safety standards and
          operates reliably throughout its lifecycle.
        </p>
        <p className="text-[#94A3B8]">
          We also offer custom testing solutions for clients, enabling them to
          verify system performance before deployment.
        </p>
      </LaboratorySection>

      {/* 7. Viewport 6 — Commitment to Excellence */}
      <LaboratoryCommitment />
    </main>
  );
}
