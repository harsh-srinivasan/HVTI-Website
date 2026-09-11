"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductVariant } from "@/types/product";

interface PDSolutionsEcosystemProps {
  products: ProductVariant[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

const CATEGORY_TABS = [
  { id: "all", label: "All Solutions (6)", icon: "⚡" },
  { id: "pd-lt", label: "Overhead (PD-LT)", icon: "📡" },
  { id: "hfct", label: "HFCT Series", icon: "🧲" },
  { id: "pds", label: "Cables (PDS)", icon: "🔌" },
  { id: "uld-40", label: "Corona (ULD-40)", icon: "✨" },
  { id: "xdp-ii", label: "Expert PD (XDP-II)", icon: "🔬" },
  { id: "ae-150", label: "3D Localization (AE-150)", icon: "📍" },
];

interface SpecItem {
  parameter: string;
  value: string;
}

const PRODUCT_SPECIFICATIONS: Record<string, {
  modelCode: string;
  tagline: string;
  measurementPrinciple: string;
  specs: SpecItem[];
}> = {
  "pd-lt": {
    modelCode: "PD-LT",
    tagline: "Wireless Overhead Apparatus & Cable PD Tester",
    measurementPrinciple: "Capacitive field & contact sensing via universal insulated hotstick probe",
    specs: [
      { parameter: "Operating Principle", value: "Capacitive field & contact sensing" },
      { parameter: "Telemetry Link", value: "Wireless radio link to handheld display unit" },
      { parameter: "Mounting Interface", value: "Standard universal hotstick / sunrise fitting" },
      { parameter: "Display Output", value: "Real-time dB level & audio tone alerts" },
      { parameter: "Battery Autonomy", value: "Over 8 hours continuous rechargeable operation" },
      { parameter: "Application Voltage", value: "Medium & High Voltage distribution/transmission" },
      { parameter: "Enclosure Rating", value: "IP65 weather-resistant rugged field chassis" },
    ],
  },
  "hfct": {
    modelCode: "HFCT-50 / 100 / 140",
    tagline: "High-Frequency Current Transformers for Cable Grounds",
    measurementPrinciple: "Split-core inductive coupling detecting high-frequency discharge pulses (100 kHz – 50 MHz)",
    specs: [
      { parameter: "Frequency Range", value: "100 kHz – 50 MHz (-3 dB bandwidth)" },
      { parameter: "Core Architecture", value: "Split-core clamp with safety latch mechanism" },
      { parameter: "Output Impedance", value: "50 Ω BNC female termination" },
      { parameter: "Aperture Diameters", value: "50 mm / 100 mm / 140 mm inner diameter options" },
      { parameter: "Sensitivity", value: "Sub-picocoulomb (< 1 pC) on shielded cable ground braids" },
      { parameter: "Operating Temperature", value: "-20 °C to +55 °C" },
      { parameter: "Target Applications", value: "Power cable earth sheaths, grounding leads, GIS earth bonds" },
    ],
  },
  "pds": {
    modelCode: "PDS",
    tagline: "Handheld Cable Partial Discharge & Termination Surveyor",
    measurementPrinciple: "Dual inductive clamp & capacitive contact probe with active noise rejection",
    specs: [
      { parameter: "Sensor Compatibility", value: "Inductive HFCT clamp & capacitive contact probe" },
      { parameter: "Measurement Display", value: "Backlit LCD displaying dB, peak pulse level & count" },
      { parameter: "Filtering Architecture", value: "Digital bandpass noise rejection filter" },
      { parameter: "Enclosure Construction", value: "Heavy-duty shock-resistant ABS handheld housing" },
      { parameter: "Battery System", value: "Rechargeable Li-ion with rapid USB charge" },
      { parameter: "Target Equipment", value: "Underground cable terminations, joints & switchgear spouts" },
    ],
  },
  "uld-40": {
    modelCode: "ULD-40",
    tagline: "Directional Ultrasonic Corona & Arcing Detector",
    measurementPrinciple: "Directional 40 kHz ultrasound detection with parabolic concentrator and laser targeting",
    specs: [
      { parameter: "Acoustic Center Frequency", value: "40 kHz ultrasonic frequency (± 1 kHz)" },
      { parameter: "Optical Targeting", value: "Integrated high-visibility red laser pointer" },
      { parameter: "Directional Concentrator", value: "Detachable transparent parabolic dish" },
      { parameter: "Audio Interface", value: "Noise-cancelling industrial headphones" },
      { parameter: "Visual Indication", value: "Multi-segment LED bargraph level meter" },
      { parameter: "Substation Noise Immunity", value: "100% immune to electromagnetic harmonics" },
    ],
  },
  "xdp-ii": {
    modelCode: "XDP-II",
    tagline: "Quantitative Lab & Field Partial Discharge Diagnostic Analyzer",
    measurementPrinciple: "Calibrated apparent charge (pC/dB) with PRPD phase-resolved pattern analysis",
    specs: [
      { parameter: "Measurement Units", value: "Calibrated pC (0.1–100,000 pC) & relative dB" },
      { parameter: "Phase Synchronization", value: "50 / 60 Hz wireless RF or line power reference" },
      { parameter: "Pattern Display", value: "Phase-Resolved PRPD / PRPS pattern display" },
      { parameter: "Sensor Inputs", value: "HFCT, TEV, Capacitive Bus Coupler & Acoustic sensors" },
      { parameter: "Internal Memory", value: "Up to 500 complete waveform recordings" },
      { parameter: "Battery Autonomy", value: "Approx. 7.5 hours continuous field testing" },
      { parameter: "PC Software Suite", value: "USB export with automated IEEE/IEC diagnostic report" },
    ],
  },
  "ae-150": {
    modelCode: "AE-150",
    tagline: "Multi-Sensor 3D Acoustic Partial Discharge Localization System",
    measurementPrinciple: "Multi-channel acoustic time-of-flight speed-of-sound correlation calculating 3D [X,Y,Z] coordinates",
    specs: [
      { parameter: "Localization Method", value: "Acoustic / Electrical Time-of-Flight correlation" },
      { parameter: "Coordinates Output", value: "Real-time 3D coordinate mapping [X, Y, Z] inside tank" },
      { parameter: "Acoustic Sensors", value: "High-sensitivity magnetic clamp piezoelectric sensors" },
      { parameter: "Sensor Connectivity", value: "Wireless multi-channel sensors for rapid mounting" },
      { parameter: "Target Equipment", value: "Power transformers, shunt reactors & oil-filled tanks" },
      { parameter: "Noise Discrimination", value: "Distinguishes internal core/winding faults from external noise" },
    ],
  },
};

export default function PDSolutionsEcosystem({
  products,
  eyebrow = "OUR PD SOLUTIONS",
  title = "Choose the right partial discharge solution.",
  subtitle = "Discover our comprehensive range of 6 dedicated instruments for partial discharge and corona effect detection, diagnosis, and 3D acoustic localization.",
}: PDSolutionsEcosystemProps) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = products.filter((p) => {
    if (activeTab === "all") return true;
    const name = p.name.toLowerCase();
    const model = (p.model || "").toLowerCase();
    const id = (p.id || "").toLowerCase();

    if (activeTab === "pd-lt") return id.includes("pd-lt") || name.includes("pd-lt") || model.includes("pd-lt");
    if (activeTab === "hfct") return id.includes("hfct") || name.includes("hfct") || model.includes("hfct");
    if (activeTab === "pds") return id.includes("pds") || name.includes("pds") || model.includes("pds");
    if (activeTab === "uld-40") return id.includes("uld") || name.includes("uld") || model.includes("uld-40");
    if (activeTab === "xdp-ii") return id.includes("xdp") || name.includes("xdp") || model.includes("xdp-ii");
    if (activeTab === "ae-150") return id.includes("ae-150") || name.includes("ae-150") || model.includes("ae-150");

    return true;
  });

  const handleScrollToSpecs = () => {
    const el = document.getElementById("technical-specifications");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Get corresponding specs when a single tab is selected
  const singleProduct = filteredProducts.length === 1 ? filteredProducts[0] : null;
  const singleSpecs = activeTab !== "all" ? PRODUCT_SPECIFICATIONS[activeTab] : null;

  return (
    <section id="pd-solutions" className="relative z-10 w-full px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-[1360px] relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="h-[2px] w-6 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full" />
              <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">
                {eyebrow}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              {title}
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-gray-400 max-w-2xl">{subtitle}</p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            {activeTab !== "all" && (
              <button
                onClick={() => setActiveTab("all")}
                className="text-xs font-mono text-orange-400 hover:text-orange-300 border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
              >
                ← View All 6 Solutions
              </button>
            )}
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-full">
              {activeTab === "all" ? `Showing All ${products.length} Instruments` : `1 of ${products.length} Selected`}
            </span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-200 shrink-0 border cursor-pointer ${
                  isActive
                    ? "bg-purple-900/40 border-purple-500/60 text-white shadow-lg shadow-purple-950/50"
                    : "bg-white/[0.02] border-white/[0.08] text-gray-400 hover:text-gray-200 hover:bg-white/[0.05] hover:border-white/20"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            CONDITIONAL RENDER: 
            A) ALL SOLUTIONS (3-COLUMN GRID)
            B) SINGLE PRODUCT FOCUSED SHOWCASE (PRODUCT CARD + CORRESPONDING TECH SPECS)
           ========================================================================= */}
        {activeTab === "all" ? (
          /* 3-Column Grid of All Products */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProducts.map((product, idx) => (
              <div
                key={product.id || idx}
                className="group relative flex flex-col justify-between rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#F97316]/40 hover:bg-white/[0.04] backdrop-blur-xl transition-all duration-500 overflow-hidden shadow-xl hover:shadow-[0_12px_32px_rgba(249,115,22,0.12)] p-4 sm:p-5"
              >
                <div>
                  {/* Top Badge */}
                  {product.badge && (
                    <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 font-mono text-[9.5px] font-bold text-[#F97316]">
                      <span>●</span>
                      <span>{product.badge}</span>
                    </div>
                  )}

                  {/* Product Title */}
                  <h3 className="font-heading text-lg font-bold text-white sm:text-xl group-hover:text-orange-300 transition-colors leading-snug">
                    {product.name}
                  </h3>
                  {product.subtitle && (
                    <p className="mt-0.5 font-sans text-xs font-medium text-slate-300">
                      {product.subtitle}
                    </p>
                  )}

                  {/* Product Image Frame */}
                  <div className="relative my-3.5 flex h-32 w-full items-center justify-center rounded-xl border border-white/[0.05] bg-gradient-to-b from-white/[0.03] to-transparent p-2 sm:h-36 overflow-hidden">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <span className="text-xs font-mono text-gray-500">HVTI EQUIPMENT</span>
                    )}
                  </div>

                  {/* Description */}
                  {product.description && (
                    <p className="mb-3 font-sans text-xs leading-relaxed text-slate-300 line-clamp-2">
                      {product.description}
                    </p>
                  )}

                  {/* Highlights list */}
                  {product.highlights && product.highlights.length > 0 && (
                    <ul className="mb-4 space-y-1.5 font-sans text-xs text-slate-200">
                      {product.highlights.slice(0, 4).map((h: string, hIdx: number) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <svg
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F97316]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="leading-snug">{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* View Details CTA Button */}
                <div className="mt-1 pt-3 border-t border-white/[0.06]">
                  <button
                    type="button"
                    onClick={handleScrollToSpecs}
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      font-mono
                      text-[11.5px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-[#F97316]
                      transition-colors
                      hover:text-orange-400
                      cursor-pointer
                    "
                  >
                    <span>View Specifications & Details</span>
                    <span>↓</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : singleProduct ? (
          /* =========================================================================
             FOCUSED CENTERED DUAL-PANE SHOWCASE (CARD + CORRESPONDING TECH SPECS)
             ========================================================================= */
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-6 items-stretch">
              {/* Left Column — Centered Product Card */}
              <div className="group relative flex flex-col justify-between rounded-2xl bg-white/[0.02] border border-orange-500/40 hover:bg-white/[0.04] backdrop-blur-xl transition-all duration-500 overflow-hidden shadow-2xl p-5 sm:p-6">
                <div>
                  {/* Top Badge */}
                  {singleProduct.badge && (
                    <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 font-mono text-[10px] font-bold text-[#F97316]">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                      <span>{singleProduct.badge}</span>
                    </div>
                  )}

                  {/* Product Title & Subtitle */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-orange-300 transition-colors leading-snug">
                    {singleProduct.name}
                  </h3>
                  {singleProduct.subtitle && (
                    <p className="mt-1 font-sans text-xs font-medium text-slate-300">
                      {singleProduct.subtitle}
                    </p>
                  )}

                  {/* Product Featured Image Frame */}
                  <div className="relative my-4 flex h-48 w-full items-center justify-center rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-3 sm:h-52 overflow-hidden">
                    {singleProduct.image ? (
                      <Image
                        src={singleProduct.image}
                        alt={singleProduct.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 420px"
                        className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <span className="text-xs font-mono text-gray-500">HVTI EQUIPMENT</span>
                    )}
                  </div>

                  {/* Description */}
                  {singleProduct.description && (
                    <p className="mb-4 font-sans text-xs sm:text-[13px] leading-relaxed text-slate-300">
                      {singleProduct.description}
                    </p>
                  )}

                  {/* Highlights list */}
                  {singleProduct.highlights && singleProduct.highlights.length > 0 && (
                    <ul className="mb-4 space-y-2 font-sans text-xs text-slate-200">
                      {singleProduct.highlights.map((h: string, hIdx: number) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <svg
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F97316]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="leading-snug">{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Card Action Row */}
                <div className="mt-2 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                  <Link
                    href={`/contact?subject=${encodeURIComponent("Inquiry: " + singleProduct.name)}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#F97316] hover:text-orange-400 transition-colors"
                  >
                    <span>Request Quote</span>
                    <span>→</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setActiveTab("all")}
                    className="font-mono text-[11px] text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    View All 6 Solutions
                  </button>
                </div>
              </div>

              {/* Right Column — Corresponding Technical Specifications Card */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-5 sm:p-6 shadow-2xl flex flex-col justify-between">
                <div>
                  {/* Specification Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/[0.06]">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="h-[2px] w-4 bg-[#A855F7]" />
                        <span className="font-mono text-[10.5px] font-bold uppercase tracking-widest text-[#A855F7]">
                          SPECIFICATIONS // {singleSpecs?.modelCode || singleProduct.model || singleProduct.name}
                        </span>
                      </div>
                      <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                        Core Technical Parameters
                      </h4>
                    </div>

                    <span className="hidden sm:inline-block font-mono text-[10px] text-purple-300 bg-purple-950/50 border border-purple-500/30 px-2.5 py-1 rounded-full">
                      IEC 60270 COMPLIANT
                    </span>
                  </div>

                  {/* Measurement Principle Banner */}
                  {singleSpecs?.measurementPrinciple && (
                    <div className="mb-4 rounded-xl border border-purple-500/20 bg-purple-950/20 p-3">
                      <span className="block font-mono text-[10px] font-bold uppercase tracking-wider text-purple-400 mb-0.5">
                        Measurement Architecture
                      </span>
                      <p className="font-sans text-xs text-slate-200 leading-relaxed">
                        {singleSpecs.measurementPrinciple}
                      </p>
                    </div>
                  )}

                  {/* Technical Specifications Table List */}
                  {singleSpecs?.specs && (
                    <dl className="divide-y divide-white/[0.06] font-sans text-xs">
                      {singleSpecs.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start justify-between py-2.5 gap-4">
                          <dt className="font-medium text-slate-400 shrink-0 max-w-[160px]">
                            {spec.parameter}
                          </dt>
                          <dd className="font-mono font-semibold text-white text-right">
                            {spec.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>

                {/* Footer Action Links */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleScrollToSpecs}
                    className="inline-flex items-center gap-1.5 font-mono text-[11.5px] text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Full Comparison Table</span>
                    <span>↓</span>
                  </button>

                  <Link
                    href={`/contact?subject=${encodeURIComponent("Technical Consultation: " + singleProduct.name)}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-orange-500/15 border border-orange-500/40 px-3 py-1.5 font-mono text-xs font-bold text-orange-300 hover:bg-orange-500/25 transition-all"
                  >
                    <span>Talk to Engineer</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
