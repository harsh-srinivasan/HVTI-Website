"use client";

import Image from "next/image";
import React, { useState } from "react";
import { clientLogos } from "@/data/clients";

/* ================================================================
   HVTI CLIENTS — FULL-VIEWPORT CLIENT PARTNERS LOGO SHOWCASE
   File: components/clients/ClientGrid.tsx

   - Card-free minimalist logo presentation directly on canvas
   - Filterable by sector (Power, Heavy Industry, Energy, Tech, Railways)
   - Smooth hover brightness & subtle micro-scale
   ================================================================ */

const filterTabs = [
  { id: "all", label: "All Sectors" },
  { id: "power", label: "Power & Grid" },
  { id: "heavy-industry", label: "Heavy Industry & Steel" },
  { id: "energy", label: "Energy & Mining" },
  { id: "tech", label: "Technology & OEMs" },
  { id: "railways", label: "Railways & Transit" },
];

export default function ClientGrid() {
  const [activeSector, setActiveSector] = useState<string>("all");

  const filteredLogos =
    activeSector === "all"
      ? clientLogos
      : clientLogos.filter((logo) => logo.sector === activeSector);

  return (
    <section
      id="clients-grid"
      className="
        relative
        z-10
        flex
        min-h-screen
        w-full
        flex-col
        items-center
        justify-center
        bg-transparent
        px-6
        py-16
        sm:px-10
        sm:py-20
        lg:px-14
        xl:px-20
      "
    >
      <div className="mx-auto my-auto w-full max-w-[1500px]">
        {/* Section Header */}
        <div className="mb-10 text-center sm:mb-12">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-6 bg-[#F97316]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#F97316]">
              CLIENT PORTFOLIO
            </span>
            <span className="h-[1.5px] w-6 bg-[#F97316]" />
          </div>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl lg:text-[36px]">
            National &amp; Global Organizations We Power
          </h2>
          <p className="mt-2 font-sans text-[13.5px] text-[#94A3B8] sm:text-[14.5px]">
            Selected utilities, public sector undertakings (PSUs), and private industrial conglomerates.
          </p>

          {/* Sector Filter Tabs */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => {
              const isActive = tab.id === activeSector;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveSector(tab.id)}
                  className={`
                    rounded-full
                    px-4
                    py-1.5
                    font-sans
                    text-[12px]
                    font-semibold
                    tracking-wide
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "border border-[#F97316]/60 bg-[#F97316]/15 text-[#F97316] shadow-[0_0_16px_rgba(249,115,22,0.25)]"
                        : "border border-white/[0.10] bg-[#0A0F1D]/75 text-[#94A3B8] hover:border-[#A855F7]/40 hover:text-white"
                    }
                  `}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Card-Free Client Logos Grid */}
        <div
          className="
            grid
            grid-cols-2
            items-center
            gap-x-8
            gap-y-10
            sm:grid-cols-3
            sm:gap-x-10
            sm:gap-y-12
            md:grid-cols-4
            lg:grid-cols-5
            lg:gap-x-12
            lg:gap-y-14
            xl:grid-cols-6
          "
        >
          {filteredLogos.map((item) => (
            <div
              key={item.id}
              className="
                group
                relative
                flex
                h-[60px]
                w-full
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-105
                sm:h-[70px]
                lg:h-[76px]
              "
            >
              {/* Logo Image */}
              <div className="relative h-full w-full">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  quality={95}
                  className="
                    object-contain
                    opacity-80
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    group-hover:drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]
                  "
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

