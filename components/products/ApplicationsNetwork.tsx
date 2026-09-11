"use client";

import React from "react";
import { ProductApplication } from "@/types/product";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ================================================================
   HVTI APPLICATIONS NETWORK & GRID COMPONENT
   File: components/products/ApplicationsNetwork.tsx

   - Displays applications in a structured, high-tech dark card grid
   - Supports subtle high-voltage neon aura and technical node aesthetics
   ================================================================ */

export default function ApplicationsNetwork({
  applications,
  title = "Applications",
  subtitle = "Where high-precision testing makes a critical difference.",
}: {
  applications: (string | ProductApplication)[];
  title?: string;
  subtitle?: string;
}) {
  const { ref: sectionRef, visible } = useScrollReveal({ threshold: 0.1 });

  if (!applications || applications.length === 0) return null;

  const normalizedApps = applications.map((app) =>
    typeof app === "string" ? { title: app, description: "" } : app
  );

  return (
    <section className="relative z-10 w-full px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.06),transparent_70%)] blur-[90px]" />

      <div
        ref={sectionRef}
        className={`mx-auto max-w-[1440px] transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-6 bg-[#F97316]" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
              {title.toUpperCase()}
            </span>
          </div>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {subtitle}
          </h2>
        </div>

        {/* Application Cards Grid */}
        <div
          className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ${
            normalizedApps.length > 5 ? "xl:grid-cols-4" : ""
          }`}
        >
          {normalizedApps.map((app, idx) => (
            <div
              key={idx}
              className="
                group
                relative
                flex
                flex-col
                justify-between
                rounded-2xl
                border
                border-white/[0.07]
                bg-[#0A0D16]/80
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-purple-500/30
                hover:bg-[#0E121E]
                hover:shadow-[0_10px_30px_rgba(168,85,247,0.08)]
              "
            >
              <div>
                {/* Node Accent Icon */}
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400 transition-colors group-hover:border-orange-500/30 group-hover:bg-orange-500/10 group-hover:text-orange-400">
                  <span className="font-mono text-xs font-bold">0{idx + 1}</span>
                </div>

                <h3 className="font-heading text-base font-bold text-white sm:text-lg">
                  {app.title}
                </h3>

                {app.description && (
                  <p className="mt-2.5 font-sans text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {app.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
