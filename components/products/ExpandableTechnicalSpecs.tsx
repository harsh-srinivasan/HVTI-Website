"use client";

import React, { useState } from "react";
import { ProductData, DetailedSpecSection } from "@/types/product";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ExpandableTechnicalSpecsProps {
  product?: ProductData;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  summaryTable?: any;
  fullSpecs?: {
    sections: DetailedSpecSection[];
  };
}

export default function ExpandableTechnicalSpecs({
  product,
  eyebrow,
  title,
  subtitle,
  summaryTable,
  fullSpecs,
}: ExpandableTechnicalSpecsProps) {
  const { ref: sectionRef, visible } = useScrollReveal({ threshold: 0.1 });
  const [isExpanded, setIsExpanded] = useState(false);

  const rawKeyRanges = summaryTable || product?.keyTechnicalRanges;
  const rawFullSpecs = fullSpecs || product?.fullTechnicalSpecs;

  if (!rawKeyRanges) return null;

  // Normalize keyRanges structure if array vs object
  const keyRanges = Array.isArray(rawKeyRanges)
    ? {
        title: title || "Key Specifications",
        description: subtitle,
        headers: ["SYSTEM / PRODUCT", "VOLTAGE RANGE", "CURRENT / POWER RANGE", "KEY DETAILS"],
        rows: rawKeyRanges,
      }
    : rawKeyRanges;

  const displayEyebrow = eyebrow || "TECHNICAL SPECIFICATIONS";
  const displayTitle = title || keyRanges.title || "Key Technical Ranges";
  const displaySubtitle = subtitle || keyRanges.description;

  return (
    <section
      id="technical-specifications"
      className="relative z-10 w-full px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 bg-transparent"
    >
      <div
        ref={sectionRef}
        className={`mx-auto max-w-[1360px] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {/* Header with Title and Description */}
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-2.5 flex items-center gap-3">
              <span className="h-[2px] w-6 bg-[#A855F7]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#A855F7]">
                {displayEyebrow}
              </span>
            </div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {displayTitle}
            </h2>
          </div>

          {displaySubtitle && (
            <p className="max-w-xl font-sans text-xs leading-relaxed text-slate-300 lg:text-[13px]">
              {displaySubtitle}
            </p>
          )}
        </div>

        {/* Summary Table */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] shadow-[0_16px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
              {/* Table Head */}
              {keyRanges.headers && keyRanges.headers.filter(Boolean).length > 0 && (
                <thead>
                  <tr className="border-b border-white/[0.08] bg-white/[0.03]">
                    {keyRanges.headers.map((h: string, hIdx: number) => (
                      <th
                        key={hIdx}
                        className={`p-4 font-mono text-[11px] font-bold uppercase tracking-wider text-[#A855F7] ${
                          hIdx === 0 ? "w-1/3" : ""
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}

              {/* Table Body */}
              <tbody className="divide-y divide-white/[0.05] font-sans text-[13px] sm:text-[13.5px]">
                {keyRanges.rows && keyRanges.rows.map((row: any, rIdx: number) => (
                  <tr
                    key={rIdx}
                    className="transition-colors hover:bg-white/[0.02]"
                  >
                    <td className="py-3 px-4 font-mono font-bold text-white sm:py-3.5 sm:px-5">
                      {row.col1 || row.parameter}
                    </td>
                    <td className="py-3 px-4 text-[#F97316] font-semibold sm:py-3.5 sm:px-5">
                      {row.col2 || row.value}
                    </td>
                    {row.col3 && (
                      <td className="py-3 px-4 text-slate-200 sm:py-3.5 sm:px-5">
                        {row.col3}
                      </td>
                    )}
                    {row.col4 && (
                      <td className="py-3 px-4 text-slate-400 sm:py-3.5 sm:px-5">
                        {row.col4}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Toggle Full Specifications Button */}
          {rawFullSpecs && rawFullSpecs.sections && rawFullSpecs.sections.length > 0 && (
            <div className="border-t border-white/[0.08] bg-white/[0.02] p-4 text-center sm:p-5">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2.5
                  font-mono
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-[#A855F7]
                  transition-all
                  duration-300
                  hover:text-purple-300
                "
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10 text-sm font-semibold transition-transform duration-300 group-hover:scale-110">
                  {isExpanded ? "−" : "+"}
                </span>
                <span>
                  {isExpanded
                    ? "Hide Full Technical Specifications"
                    : "View Full Technical Specifications"}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Expandable Technical Specification Details */}
        {rawFullSpecs && isExpanded && (
          <div className="mt-8 animate-fadeIn space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {rawFullSpecs.sections.map((section: DetailedSpecSection, sIdx: number) => (
                <div
                  key={sIdx}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-xl sm:p-6"
                >
                  <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-[#F97316]">
                    {section.title}
                  </h3>

                  <dl className="divide-y divide-white/[0.06] font-sans text-xs sm:text-[13px]">
                    {section.specs.map((spec: any, specIdx: number) => (
                      <div
                        key={specIdx}
                        className="flex flex-col justify-between py-2.5 sm:flex-row sm:items-center sm:gap-4"
                      >
                        <dt className="font-medium text-slate-300">
                          {spec.parameter}
                        </dt>
                        <dd className="font-mono font-semibold text-white sm:text-right">
                          {spec.value}
                          {spec.details && (
                            <span className="ml-1.5 text-[11px] font-normal text-slate-400">
                              ({spec.details})
                            </span>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
