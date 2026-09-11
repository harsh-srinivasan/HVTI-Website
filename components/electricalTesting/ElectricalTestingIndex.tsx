"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MotorIcon,
  GeneratorIcon,
  SwitchgearIcon,
  CableIcon,
  TransformerIcon,
  SubstationFieldIcon,
} from "@/components/products/ProductIcons";

interface CategoryDefinition {
  id: string;
  title: string;
  categoryNumber: string;
  phase: "active" | "next-phase";
  tagline: string;
  description: string;
  equipmentTypes: string[];
  image: string;
  href: string;
  accent: "orange" | "purple" | "cyan";
}

const CATEGORIES: CategoryDefinition[] = [
  {
    id: "high-voltage-ac-dc-testing-systems",
    categoryNumber: "01",
    phase: "active",
    title: "High Voltage AC & DC Testing Systems",
    tagline: "Dielectric Withstand & Insulation Integrity",
    description:
      "High voltage AC and DC test systems engineered for dielectric proof testing, insulation breakdown analysis, and quality assurance in field and laboratory environments up to 300 kV.",
    equipmentTypes: [
      "HV AC Testing Kits (25–300 kV)",
      "HV DC Testing Kits (15–300 kV)",
      "Ultra-Light SMPS DC Sets (60–300 kV)",
      "Resin-Cast & Oil-Filled Transformers",
    ],
    image: "/images/products/electrical-testing/high-voltage-ac-dc-testing-kits-hipot-kits.png",
    href: "/products/high-voltage-ac-dc-testing-systems",
    accent: "orange",
  },
  {
    id: "high-voltage-measurement-dividers",
    categoryNumber: "02",
    phase: "active",
    title: "High Voltage Measurement & Dividers",
    tagline: "Precision Calibration & Potential Division",
    description:
      "Precision measurement systems, resistive/capacitive voltage dividers, and standardized sphere gaps delivering laboratory-grade accuracy (0.5 / 1.0 class) up to 300 kV.",
    equipmentTypes: [
      "AC/DC Voltage Dividers (Resistive & Capacitive)",
      "Digital kV Measurement Systems (10–300 kV)",
      "Standard Sphere Gaps (20–1500 mm)",
      "Automated Gap Controllers",
    ],
    image: "/images/products/electrical-testing/high-voltage-ac-dc-dividers.png",
    href: "/products/high-voltage-measurement-dividers",
    accent: "purple",
  },
  {
    id: "current-injection-protection-testing",
    categoryNumber: "03",
    phase: "active",
    title: "Current Injection & Protection Testing",
    tagline: "Primary & Secondary Relay Protection Verification",
    description:
      "Complementary high-current primary injection systems (up to 10,000 A) and precision secondary injection test sets (up to 200 A) for circuit breakers, CTs, and protective relays.",
    equipmentTypes: [
      "Primary Injection Sets (500 A – 10,000 A)",
      "Secondary Relay Test Sets (30 A – 200 A)",
      "CT Ratio & Burden Measurement",
      "Switchgear Trip Timing & Protection Logic",
    ],
    image: "/images/products/electrical-testing/primary-secondary-current-injection-testing-sets.png",
    href: "/products/current-injection-protection-testing",
    accent: "orange",
  },
  {
    id: "circuit-breaker-testing-analysis",
    categoryNumber: "04",
    phase: "active",
    title: "Circuit Breaker Testing & Analysis",
    tagline: "Contact Resistance & Dynamic Motion Profiling",
    description:
      "Comprehensive diagnostic platform combining DRM/LRM/MM series micro-ohmmeters for static/dynamic contact resistance with SA series analyzers for timing, travel, and velocity profiling.",
    equipmentTypes: [
      "Micro-ohmmeters (DRM, LRM & MM Series up to 900 A)",
      "Switchgear Analyzers (SA Series Timing & Travel)",
      "LV & Trip Coil Verification Systems",
      "Dynamic Resistance Measurement (DRM)",
    ],
    image: "/images/products/electrical-testing/circuit-breaker-testing.png",
    href: "/products/circuit-breaker-testing-analysis",
    accent: "purple",
  },
  {
    id: "partial-discharge-solutions",
    categoryNumber: "05",
    phase: "active",
    title: "Partial Discharge Solutions",
    tagline: "Online Detection, 3D Localization & Continuous Monitoring",
    description:
      "Unified Partial Discharge ecosystem spanning handheld spot detectors, acoustic 3D tank localization systems, ultrasonic corona detectors, and continuous 24/7 online monitoring networks.",
    equipmentTypes: [
      "Online Spot Detectors (PD-LT, PDS, ADD)",
      "Handheld Analyzers (XDP-II & HFCT Series)",
      "3D Acoustic Localization (AE-150)",
      "Ultrasonic Corona Detectors (ULD-40)",
      "Continuous Online Monitoring Systems",
    ],
    image: "/images/products/electrical-testing/partial-discharge-testing-of-transformer-localization-system.png",
    href: "/products/partial-discharge-solutions",
    accent: "orange",
  },
  {
    id: "transformer-testing-diagnostics",
    categoryNumber: "06",
    phase: "next-phase",
    title: "Transformer Testing & Diagnostics",
    tagline: "Turns Ratio, Winding Resistance & Oil Quality Analysis",
    description:
      "Dedicated instruments for comprehensive transformer health evaluation, including 3-phase turns ratio, DC winding resistance, automated oil BDV breakdown testing, and moisture analysis.",
    equipmentTypes: [
      "ART-3D Automatic Ratio Testers",
      "WRT-10D Winding Resistance Testers",
      "OTS Automatic Oil Breakdown Testers (BDV)",
      "Interfacial Tension & Moisture Meters (VM-III)",
    ],
    image: "/images/products/electrical-testing/transformer-testing.png",
    href: "/products/transformer-testing-benches",
    accent: "purple",
  },
  {
    id: "cable-fault-location-testing",
    categoryNumber: "07",
    phase: "next-phase",
    title: "Cable Fault Location & Testing",
    tagline: "Pre-Location, Thumping & Acoustic Pinpointing",
    description:
      "Advanced underground power cable fault location equipment utilizing Time Domain Reflectometry (TDR), capacitive surge pulse discharge, and acoustic pin-pointing technologies.",
    equipmentTypes: [
      "TDR Cable Fault Pre-Locators",
      "Surge Voltage Generators & Thumpers",
      "Acoustic & Magnetic Pin-Pointing Receivers",
      "Cable Sheath Fault Locating Systems",
    ],
    image: "/images/products/electrical-testing/cable-fault-locating-equipment.png",
    href: "/products/miscellaneous-testing-equipment",
    accent: "cyan",
  },
  {
    id: "specialized-electrical-testing-equipment",
    categoryNumber: "08",
    phase: "next-phase",
    title: "Specialized Electrical Testing Equipment",
    tagline: "DC Earth Faults, Timing Meters & SF6 Handling",
    description:
      "Specialized utility diagnostic tools including online DC earth fault locators for control circuits, precision time interval meters, SF6 gas handling systems, and relay calibration toolkits.",
    equipmentTypes: [
      "Online DC Earth Fault Locators",
      "Digital Time Interval Meters (DTIM)",
      "SF6 Gas Recovery, Vacuum & Refilling Units",
      "Relay Calibration & Maintenance Toolkits",
    ],
    image: "/images/products/electrical-testing/dc-earth-fault-locator.png",
    href: "/products/dc-earth-fault-locator",
    accent: "purple",
  },
];

const ECOSYSTEM_WORKFLOW = [
  {
    step: "01",
    phase: "TEST",
    title: "Dielectric Withstand",
    desc: "Verify insulation integrity and withstand ratings under high AC & DC potential.",
    categories: ["HV AC/DC Testing Systems"],
  },
  {
    step: "02",
    phase: "MEASURE",
    title: "Precision Calibration",
    desc: "Measure exact voltage ratios and calibrate measurement standards with high precision.",
    categories: ["HV Measurement & Dividers"],
  },
  {
    step: "03",
    phase: "DIAGNOSE",
    title: "Partial Discharge & Faults",
    desc: "Detect, pinpoint, and trend micro-insulation degradation before catastrophic failure.",
    categories: ["Partial Discharge Solutions", "Cable Fault Location"],
  },
  {
    step: "04",
    phase: "ANALYSE",
    title: "Switchgear & Protection",
    desc: "Evaluate mechanical motion, dynamic contact resistance, and relay trip characteristics.",
    categories: ["Circuit Breaker Testing", "Current Injection"],
  },
  {
    step: "05",
    phase: "MAINTAIN",
    title: "Asset Condition Assessment",
    desc: "Monitor transformer dielectric oil quality, control circuit earth faults, and gas health.",
    categories: ["Transformer Testing", "Specialized Equipment"],
  },
];

export default function ElectricalTestingIndex() {
  const [activeTab, setActiveTab] = useState<"all" | "primary" | "diagnostics">("all");

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30 selection:text-orange-200">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-28 pb-20 overflow-hidden border-b border-white/[0.06]">
        {/* Background Atmospheric Glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-purple-900/15 blur-[160px] pointer-events-none rounded-full" />
        <div className="absolute top-10 right-1/4 w-[500px] h-[400px] bg-orange-600/10 blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-gray-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-orange-400">Electrical Testing Equipment</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[2px] w-8 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full" />
              <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">
                HIGH VOLTAGE TESTING INSTRUMENTS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Electrical Testing Equipment
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              Precision engineering test systems designed for commissioning, routine diagnostic evaluation, and maintenance of high-voltage power apparatus across substations, power plants, and industrial infrastructure.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#solutions-explorer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-semibold tracking-wide shadow-lg shadow-orange-500/25 transition-all duration-200"
              >
                Explore 8 Testing Disciplines
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] text-gray-200 text-sm font-semibold tracking-wide transition-all duration-200"
              >
                Consult an Application Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TESTING ECOSYSTEM WORKFLOW (Test → Measure → Diagnose → Analyse → Maintain) */}
      <section className="relative w-full py-16 bg-neutral-950/60 border-b border-white/[0.06] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full" />
              <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">
                INTEGRATED TESTING WORKFLOW
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              End-to-End High Voltage Asset Assurance
            </h2>
            <p className="mt-2 text-sm text-gray-400 max-w-2xl">
              HVTI instruments operate as complementary engineering modules supporting every phase of apparatus lifecycle verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {ECOSYSTEM_WORKFLOW.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                    {step.phase}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-1.5 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-gray-400 leading-relaxed flex-grow">
                  {step.desc}
                </p>

                <div className="mt-3 pt-3 border-t border-white/[0.06] flex flex-wrap gap-1">
                  {step.categories.map((c, cIdx) => (
                    <span key={cIdx} className="text-[10px] font-mono text-purple-300/80 bg-purple-950/40 px-1.5 py-0.5 rounded">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TESTING SOLUTIONS EXPLORER (8 CATEGORIES GRID) */}
      <section id="solutions-explorer" className="relative w-full py-20 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-[2px] w-6 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full" />
                <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">
                  PRODUCT CATALOGUE
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Explore Testing Disciplines
              </h2>
              <p className="mt-2 text-sm text-gray-400 max-w-2xl">
                Select a testing discipline to view specialized instrument families, technical specifications, and application configurations.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-full">
                8 Core Product Families
              </span>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="group relative flex flex-col sm:flex-row rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/50 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden shadow-xl hover:shadow-purple-950/30"
              >
                {/* Product Cutout Image Frame */}
                <div className="relative sm:w-2/5 h-64 sm:h-auto bg-neutral-900/80 border-b sm:border-b-0 sm:border-r border-white/[0.06] flex items-center justify-center p-6 overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-transparent to-transparent pointer-events-none" />

                  {cat.image ? (
                    <div className="relative w-full h-full min-h-[160px]">
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                  ) : (
                    <div className="text-gray-400 font-mono text-xs">HVTI EQUIPMENT</div>
                  )}

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 border border-white/10 backdrop-blur-md text-[11px] font-mono text-orange-400 font-bold">
                    {cat.categoryNumber}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 font-semibold">
                      {cat.tagline}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-300 transition-colors mt-1 leading-snug">
                      {cat.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Equipment list */}
                    <div className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-3.5">
                      {cat.equipmentTypes.slice(0, 3).map((item, iIdx) => (
                        <div key={iIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                          <span className="text-xs text-gray-300 leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explore Button */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <Link
                      href={cat.href}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-orange-400 hover:text-orange-300 group/btn transition-colors"
                    >
                      <span>Explore Category</span>
                      <svg
                        className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>

                    {cat.phase === "active" ? (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20 uppercase">
                        Active Solution
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-purple-300/60 uppercase">
                        HVTI Series
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ASSET APPLICATIONS SECTION */}
      <section className="relative w-full py-20 bg-neutral-950/80 border-t border-white/[0.06] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full" />
              <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">
                APPLICATIONS & ASSETS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Engineered for Critical High Voltage Assets
            </h2>
            <p className="mt-3 text-base text-gray-400 max-w-2xl">
              Proven testing and diagnostic capabilities deployed across utilities, power generation, transmission substations, and heavy industrial facilities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              { name: "Transformers", icon: <TransformerIcon className="w-7 h-7" />, role: "Ratio, Winding, PD & BDV" },
              { name: "Circuit Breakers", icon: <SwitchgearIcon className="w-7 h-7" />, role: "Timing, Travel & Contact R" },
              { name: "Power Cables", icon: <CableIcon className="w-7 h-7" />, role: "Withstand, Fault Locating & PD" },
              { name: "Motors & Generators", icon: <MotorIcon className="w-7 h-7" />, role: "Insulation & Hipot Proof" },
              { name: "Substations & GIS", icon: <SubstationFieldIcon className="w-7 h-7" />, role: "Primary Injection & Protection" },
              { name: "Industrial Facilities", icon: <GeneratorIcon className="w-7 h-7" />, role: "MCC, PCC & Relay Calibrations" },
            ].map((asset, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/50 hover:bg-purple-950/20 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-purple-400 group-hover:text-orange-400 group-hover:border-orange-500/40 transition-all mb-3">
                  {asset.icon}
                </div>
                <span className="text-xs font-bold text-white group-hover:text-orange-200 transition-colors">
                  {asset.name}
                </span>
                <span className="text-[11px] text-gray-400 mt-1 leading-tight">
                  {asset.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EXPERT CONSULTATION & SUPPORT CTA */}
      <section className="relative w-full py-20 bg-black overflow-hidden border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative rounded-3xl bg-gradient-to-b from-purple-950/40 via-neutral-950/90 to-black p-8 sm:p-12 lg:p-16 border border-purple-500/30 overflow-hidden shadow-2xl">
            {/* Ambient corner glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-orange-500/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
                  EXPERT ENGINEERING SUPPORT
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 leading-tight">
                  Need assistance selecting the right testing configuration?
                </h2>
                <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                  Our high-voltage application specialists work closely with utilities, EPC contractors, and testing service companies to configure exact voltage, current, and measurement ratings tailored to your operational standards.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-bold tracking-wide shadow-xl shadow-orange-500/30 transition-all duration-200"
                >
                  Talk to an Engineer &rarr;
                </Link>
                <Link
                  href="/contact?type=quote"
                  className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-gray-300 text-sm font-semibold transition-all duration-200"
                >
                  Request a Formal Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
