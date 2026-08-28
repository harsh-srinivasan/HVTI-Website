"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";

/* ================================================================
   SINGLE-VIEWPORT HIGH-DENSITY VERTICAL BAR CHART:
   India Installed Power Capacity by Source (Jan 2025)
   File: components/blog/InteractivePowerCapacityChart.tsx

   - Designed to fit completely within 1 single viewport for instant visual comparison.
   - Side-by-side vertical bar columns matching the authoritative CEA chart layout.
   - Color-coded: Coal (Cyan), Solar (Crimson), Wind (Rust), Hydro (Red),
     Oil & Gas (Slate), Bio (Maroon), Nuclear (Emerald), Small Hydro (Gold).
   ================================================================ */

interface SourceData {
  source: string;
  shortSource: string;
  capacityGW: number;
  color: string;
  category: "Renewable" | "Fossil" | "Nuclear";
  description: string;
}

const capacityData: SourceData[] = [
  {
    source: "Coal",
    shortSource: "Coal",
    capacityGW: 220.49,
    color: "#06B6D4", // Cyan
    category: "Fossil",
    description: "Base-load thermal generation across central & state utilities (47.2%).",
  },
  {
    source: "Solar",
    shortSource: "Solar",
    capacityGW: 100.33,
    color: "#B91C1C", // Crimson
    category: "Renewable",
    description: "Crossed historic 100 GW milestone in early 2025 (21.5% of grid).",
  },
  {
    source: "Wind",
    shortSource: "Wind",
    capacityGW: 48.37,
    color: "#9A3412", // Rust
    category: "Renewable",
    description: "Onshore wind farms across Gujarat, Tamil Nadu, Karnataka, and Rajasthan.",
  },
  {
    source: "Hydro",
    shortSource: "Hydro",
    capacityGW: 46.97,
    color: "#EF4444", // Red
    category: "Renewable",
    description: "Large hydroelectric dams providing essential grid peaking & frequency support.",
  },
  {
    source: "Oil & Gas",
    shortSource: "Oil & Gas",
    capacityGW: 25.41,
    color: "#475569", // Slate
    category: "Fossil",
    description: "Combined-cycle gas turbines and backup diesel generation assets.",
  },
  {
    source: "Bio-Power",
    shortSource: "Bio",
    capacityGW: 11.41,
    color: "#831843", // Maroon
    category: "Renewable",
    description: "Biomass power, bagasse cogeneration, and urban waste-to-energy projects.",
  },
  {
    source: "Nuclear",
    shortSource: "Nuclear",
    capacityGW: 8.18,
    color: "#059669", // Emerald
    category: "Nuclear",
    description: "NPCIL pressurized heavy-water and light-water nuclear reactors.",
  },
  {
    source: "Small Hydro",
    shortSource: "Sm. Hydro",
    capacityGW: 5.10,
    color: "#D97706", // Gold
    category: "Renewable",
    description: "Run-of-the-river small hydro installations below 25 MW capacity.",
  },
];

const totalCapacity = capacityData.reduce((acc, item) => acc + item.capacityGW, 0);
const renewableTotal = capacityData
  .filter((i) => i.category === "Renewable")
  .reduce((acc, i) => acc + i.capacityGW, 0);
const fossilTotal = capacityData
  .filter((i) => i.category === "Fossil")
  .reduce((acc, i) => acc + i.capacityGW, 0);

export default function InteractivePowerCapacityChart() {
  const [filter, setFilter] = useState<"All" | "Renewable" | "Fossil">("All");
  const [hoveredSource, setHoveredSource] = useState<SourceData | null>(null);
  const [showOriginalImage, setShowOriginalImage] = useState(false);

  const filteredData = useMemo(() => {
    if (filter === "All") return capacityData;
    return capacityData.filter((d) => d.category === filter);
  }, [filter]);

  const maxCapacity = 230; // Scale top limit (above 220.49 GW)

  return (
    <figure className="my-8 w-full overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0A0F1D]/95 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(168,85,247,0.10)] backdrop-blur-md sm:p-6">
      {/* Header Bar */}
      <div className="flex flex-col justify-between gap-3 border-b border-white/[0.08] pb-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2 font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
            <span>NATIONAL GRID DATA ANALYTICS (JAN 2025)</span>
          </div>
          <h3 className="mt-1 font-heading text-lg font-bold tracking-tight text-white sm:text-xl">
            India Installed Power Capacity by Source
          </h3>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Filter Pills */}
          <div className="flex items-center rounded-lg border border-white/[0.10] bg-[#05070D] p-0.5">
            {(["All", "Renewable", "Fossil"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-md px-2.5 py-1 font-mono text-[10.5px] transition-all ${
                  filter === f
                    ? "bg-[#F97316] font-bold text-white shadow-[0_0_10px_rgba(249,115,22,0.4)]"
                    : "text-[#94A3B8] hover:text-white"
                }`}
              >
                {f === "All" ? "All (8)" : f}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setShowOriginalImage(!showOriginalImage)}
            className="rounded-lg border border-white/[0.10] bg-[#05070D]/80 px-2.5 py-1 font-mono text-[10.5px] text-[#CBD5E1] hover:border-[#A855F7] hover:text-white transition-all"
          >
            {showOriginalImage ? "Interactive" : "Source Chart"}
          </button>
        </div>
      </div>

      {showOriginalImage ? (
        /* Source Graphic View */
        <div className="mt-4 flex flex-col items-center">
          <div className="relative aspect-[16/10] w-full max-w-[620px] overflow-hidden rounded-xl border border-white/[0.10] bg-[#05070D]">
            <Image
              src="/images/blog/india-installed-capacity-chart-jan2025.png"
              alt="India Installed Power Capacity by Source Official Chart"
              fill
              className="object-contain"
            />
          </div>
          <figcaption className="mt-2 font-mono text-[10.5px] text-[#94A3B8]">
            Figure 1.1: Ministry of Power / CEA installed generation matrix (Jan 2025).
          </figcaption>
        </div>
      ) : (
        /* ============================================================
           COMPACT SIDE-BY-SIDE VERTICAL COLUMN BAR CHART (1-VIEWPORT)
           ============================================================ */
        <div className="mt-4 space-y-4">
          {/* Quick Metric Badges Strip */}
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/[0.06] bg-[#05070D]/80 px-3.5 py-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase text-[#94A3B8]">Total Grid:</span>
              <span className="font-mono text-[12px] font-bold text-white">
                {totalCapacity.toFixed(2)} GW
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
              <span className="font-mono text-[10px] uppercase text-[#94A3B8]">Clean / Renewable:</span>
              <span className="font-mono text-[12px] font-bold text-[#22C55E]">
                {renewableTotal.toFixed(2)} GW ({((renewableTotal / totalCapacity) * 100).toFixed(1)}%)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
              <span className="font-mono text-[10px] uppercase text-[#94A3B8]">Thermal / Fossil:</span>
              <span className="font-mono text-[12px] font-bold text-[#38BDF8]">
                {fossilTotal.toFixed(2)} GW ({((fossilTotal / totalCapacity) * 100).toFixed(1)}%)
              </span>
            </div>
          </div>

          {/* Vertical Bar Chart Stage */}
          <div className="relative flex h-[220px] w-full items-end justify-between gap-1.5 pt-8 pb-1 border-b border-white/[0.12] sm:h-[240px] sm:gap-3">
            {/* Background Grid Lines */}
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between opacity-15">
              <div className="w-full border-b border-dashed border-white" />
              <div className="w-full border-b border-dashed border-white" />
              <div className="w-full border-b border-dashed border-white" />
              <div className="w-full border-b border-dashed border-white" />
            </div>

            {filteredData.map((item) => {
              const heightPercent = (item.capacityGW / maxCapacity) * 100;
              const sharePercent = (item.capacityGW / totalCapacity) * 100;
              const isHovered = hoveredSource?.source === item.source;

              return (
                <div
                  key={item.source}
                  onMouseEnter={() => setHoveredSource(item)}
                  onMouseLeave={() => setHoveredSource(null)}
                  className="group relative flex h-full flex-1 flex-col items-center justify-end"
                >
                  {/* Capacity Label on Top of Bar */}
                  <span
                    className={`
                      mb-1.5
                      font-mono
                      text-[10px]
                      font-bold
                      whitespace-nowrap
                      transition-all
                      duration-200
                      sm:text-[11px]
                      ${isHovered ? "scale-110 text-white font-black" : "text-[#CBD5E1]"}
                    `}
                  >
                    {item.capacityGW.toFixed(1)}
                    <span className="hidden sm:inline text-[9px] text-[#94A3B8]"> GW</span>
                  </span>

                  {/* The Vertical Column Bar */}
                  <div
                    className={`
                      w-full
                      max-w-[48px]
                      rounded-t-md
                      transition-all
                      duration-500
                      ease-out
                      ${isHovered ? "brightness-125 scale-x-105" : "opacity-95"}
                    `}
                    style={{
                      height: `${Math.max(6, heightPercent)}%`,
                      backgroundColor: item.color,
                      boxShadow: isHovered
                        ? `0 0 20px ${item.color}, 0 0 35px ${item.color}80`
                        : `0 0 10px ${item.color}40`,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* X-Axis Labels Row */}
          <div className="flex w-full items-start justify-between gap-1.5 sm:gap-3">
            {filteredData.map((item) => {
              const sharePercent = (item.capacityGW / totalCapacity) * 100;
              const isHovered = hoveredSource?.source === item.source;

              return (
                <div
                  key={item.source}
                  className="flex flex-1 flex-col items-center text-center"
                >
                  <span
                    className={`
                      font-sans
                      text-[10px]
                      font-semibold
                      leading-tight
                      transition-colors
                      sm:text-[11.5px]
                      ${isHovered ? "text-[#F97316] font-bold" : "text-white/80"}
                    `}
                  >
                    <span className="sm:hidden">{item.shortSource}</span>
                    <span className="hidden sm:inline">{item.source}</span>
                  </span>
                  <span className="font-mono text-[9px] text-[#94A3B8] sm:text-[10px]">
                    {sharePercent.toFixed(1)}%
                  </span>
                </div>
              );
            })}
          </div>

          {/* Dynamic Context Tooltip (Fixed height so layout never shifts) */}
          <div className="min-h-[36px] rounded-lg border border-white/[0.06] bg-[#05070D]/90 px-3 py-1.5 text-center">
            {hoveredSource ? (
              <p className="font-sans text-[11.5px] text-[#CBD5E1] leading-tight">
                <strong className="text-white">{hoveredSource.source}</strong> ({hoveredSource.capacityGW.toFixed(2)} GW /{" "}
                {((hoveredSource.capacityGW / totalCapacity) * 100).toFixed(1)}%):{" "}
                <span className="text-[#94A3B8]">{hoveredSource.description}</span>
              </p>
            ) : (
              <p className="font-mono text-[10.5px] text-[#64748B]">
                Hover over any column to inspect sector capacity and grid contribution.
              </p>
            )}
          </div>
        </div>
      )}
    </figure>
  );
}
