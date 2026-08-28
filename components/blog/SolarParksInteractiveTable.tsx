"use client";

import React from "react";
import InfrastructureMatrix, { MatrixColumn, MetricBadge } from "./InfrastructureMatrix";

/* ================================================================
   ULTRA-MEGA SOLAR PARKS MATRIX (REUSABLE INSTANCE)
   File: components/blog/SolarParksInteractiveTable.tsx

   - Uses the generic InfrastructureMatrix component
   - Compact 1-viewport table fitting all 8 solar parks with zero overflow
   ================================================================ */

export interface SolarPark {
  id: string;
  project: string;
  state: string;
  capacityMW: number;
  capacityDisplay: string;
  commissioned: string;
  keyFeatures: string;
}

const solarParksData: SolarPark[] = [
  {
    id: "bhadla",
    project: "Bhadla Solar Park",
    state: "Rajasthan",
    capacityMW: 2245,
    capacityDisplay: "2,245 MW",
    commissioned: "Dec 2018",
    keyFeatures:
      "World's largest PV park; four phases; 14,000 acres; 10M panels; →4 mt CO₂ saved/yr.",
  },
  {
    id: "pavagada",
    project: "Pavagada 'Shakti Sthala'",
    state: "Karnataka",
    capacityMW: 2050,
    capacityDisplay: "2,050 MW",
    commissioned: "Dec 2019",
    keyFeatures:
      "13,000 acres leased from 2,300 farmers; 40 blocks; offsets 3.6 mt CO₂/yr; drought-land repurpose.",
  },
  {
    id: "rewa",
    project: "Rewa Ultra Mega Solar",
    state: "Madhya Pradesh",
    capacityMW: 750,
    capacityDisplay: "750 MW",
    commissioned: "Jan 2020",
    keyFeatures:
      "Grid parity at ₹2.97/unit; supplies 24% of Delhi Metro power; 1,590 acres; World Bank CTF loan.",
  },
  {
    id: "kurnool",
    project: "Kurnool Ultra Mega Park",
    state: "Andhra Pradesh",
    capacityMW: 1000,
    capacityDisplay: "1,000 MW",
    commissioned: "Mar 2017",
    keyFeatures:
      "24 km²; 4M modules; generates 8 GWh/day; ₹70 bn investment; four 220/33 kV pooling stations.",
  },
  {
    id: "np-kunta",
    project: "NP Kunta Ultra Mega Park",
    state: "Andhra Pradesh",
    capacityMW: 978.5,
    capacityDisplay: "978.5 MW",
    commissioned: "2019",
    keyFeatures:
      "Spread over 32 km²; step toward 1,500 MW masterplan; Southern Grid interconnection.",
  },
  {
    id: "kurnool-greenko",
    project: "Kurnool (Greenko) Phase",
    state: "Andhra Pradesh",
    capacityMW: 816,
    capacityDisplay: "816 MW",
    commissioned: "Mar 2017",
    keyFeatures:
      "Commissioned in record 166 days; tier-1 global modules; air-freighted central inverters.",
  },
  {
    id: "charanka",
    project: "Charanka Solar Park",
    state: "Gujarat",
    capacityMW: 615,
    capacityDisplay: "615 MW",
    commissioned: "2012",
    keyFeatures:
      "India's pioneering solar park under National Solar Mission; pioneered competitive tariff bidding.",
  },
  {
    id: "kadapa",
    project: "Kadapa Ultra Mega Park",
    state: "Andhra Pradesh",
    capacityMW: 250,
    capacityDisplay: "250 MW (pl.)",
    commissioned: "2018",
    keyFeatures:
      "Initial 250 MW commissioned; tendered to reach 1,000 MW under central NSM park scheme.",
  },
];

const maxParkCapacity = 2245;

const solarParkColumns: MatrixColumn<SolarPark>[] = [
  {
    key: "project",
    header: "Solar Project",
    width: "w-[26%]",
    render: (park, isHovered) => (
      <div>
        <div
          className={`font-semibold transition-colors ${
            isHovered ? "text-[#F97316]" : "text-white"
          }`}
        >
          {park.project}
        </div>
        <span className="mt-0.5 inline-block rounded border border-white/[0.08] bg-[#0C1120] px-1.5 py-0.2 font-mono text-[9px] text-[#A855F7]">
          {park.state}
        </span>
      </div>
    ),
  },
  {
    key: "capacityMW",
    header: "Capacity (MW)",
    width: "w-[20%]",
    align: "right",
    render: (park) => {
      const pct = (park.capacityMW / maxParkCapacity) * 100;
      return (
        <div className="flex flex-col items-end">
          <span className="font-mono text-[11.5px] font-bold text-white">
            {park.capacityDisplay}
          </span>
          <div className="mt-1 h-1 w-16 overflow-hidden rounded-full bg-white/[0.08]">
            <div
              className="h-full bg-gradient-to-r from-[#F97316] to-[#A855F7]"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      );
    },
  },
  {
    key: "commissioned",
    header: "Commissioned",
    width: "w-[15%]",
    render: (park) => (
      <span className="font-mono text-[11px] text-[#94A3B8]">
        {park.commissioned}
      </span>
    ),
  },
  {
    key: "keyFeatures",
    header: "Infrastructure & Grid Features",
    width: "w-[39%]",
    render: (park) => (
      <span className="font-sans text-[11.5px] leading-[1.4] text-[#CBD5E1] line-clamp-2">
        {park.keyFeatures}
      </span>
    ),
  },
];

const statBadges: MetricBadge[] = [
  {
    label: "Total Capacity in Matrix",
    value: "8,704.5 MW",
    color: "#F97316",
    subtext: "8 Mega Parks",
  },
  {
    label: "Largest Installation",
    value: "Bhadla (2,245 MW)",
    color: "#A855F7",
    subtext: "World's Largest PV",
  },
  {
    label: "Regional Coverage",
    value: "4 Major States",
    color: "#38BDF8",
    subtext: "RJ, KA, MP, AP, GJ",
  },
];

export default function SolarParksInteractiveTable() {
  return (
    <InfrastructureMatrix<SolarPark>
      eyebrow="INFRASTRUCTURE MATRIX"
      title="Ultra-Mega Solar Parks: Pillars of Scale"
      subtitle="Operational gigawatt-scale parks driving India's 500 GW clean-energy transition."
      data={solarParksData}
      columns={solarParkColumns}
      filterKey="state"
      searchKeys={["project", "keyFeatures", "state"]}
      statBadges={statBadges}
      sourceImageSrc="/images/blog/ultra-mega-solar-parks-table.png"
      sourceCaption="Data Source: Ministry of New and Renewable Energy (MNRE) & Central Electricity Authority (CEA)."
      maxTableHeight="max-h-[270px] sm:max-h-[290px]"
    />
  );
}
