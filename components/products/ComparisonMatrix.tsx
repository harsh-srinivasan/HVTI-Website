"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductData } from "@/types/product";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ================================================================
   HVTI COMPARISON MATRIX COMPONENT (VIEWPORT OPTIMIZED)
   File: components/products/ComparisonMatrix.tsx

   - Compact, high-precision technical decision-making matrix
   - Designed to fit gracefully within the desktop viewport
   - Streamlined cell padding, compact headers, and subtle highlights
   ================================================================ */

export default function ComparisonMatrix({ product }: { product: ProductData }) {
  const { ref: sectionRef, visible } = useScrollReveal({ threshold: 0.1 });

  if (!product.comparisonMatrix || !product.comparisonMatrix.columns.length) {
    return null;
  }

  const { title = "Product Comparison", fullSpecLink, columns, rows } = product.comparisonMatrix;

  return (
    <section
      id="comparison-table"
      className="relative z-10 w-full px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 bg-transparent"
    >
      <div
        ref={sectionRef}
        className={`mx-auto max-w-[1360px] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {/* Header with Title & Full Specs Link */}
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-[2px] w-6 bg-[#F97316]" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#F97316]">
                TECHNICAL COMPARISON
              </span>
            </div>
            <h2 className="font-heading text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
              {title}
            </h2>
          </div>

          {fullSpecLink && (
            <Link
              href={fullSpecLink}
              className="
                inline-flex
                items-center
                gap-1.5
                font-mono
                text-[11px]
                font-bold
                uppercase
                tracking-wider
                text-[#F97316]
                transition-colors
                hover:text-orange-400
              "
            >
              <span>View full specifications</span>
              <span>→</span>
            </Link>
          )}
        </div>

        {/* Compact Table Wrapper */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] border-collapse text-left">
              {/* Table Head */}
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.03]">
                  <th className="w-1/4 p-3.5 font-mono text-[11.5px] font-bold uppercase tracking-wider text-slate-300 sm:p-4">
                    Specification
                  </th>
                  {columns.map((col) => (
                    <th key={col.id} className="p-3 text-center sm:p-4">
                      {col.image && (
                        <div className="relative mx-auto mb-1.5 h-13 w-13 sm:h-14 sm:w-14">
                          <Image
                            src={col.image}
                            alt={col.name}
                            fill
                            sizes="70px"
                            className="object-contain"
                          />
                        </div>
                      )}
                      <div className="font-heading text-sm font-bold text-white sm:text-[15px]">
                        {col.name}
                      </div>
                      {col.tag && (
                        <span className="font-mono text-[10.5px] font-semibold text-[#F97316]">
                          {col.tag}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-white/[0.04] font-sans text-[13px] sm:text-[13.5px]">
                {rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className={`transition-colors hover:bg-white/[0.02] ${
                      row.highlight ? "bg-orange-500/[0.03]" : ""
                    }`}
                  >
                    <td className="py-2.5 px-3.5 font-mono font-bold text-slate-200 sm:py-3 sm:px-4.5">
                      <div className="flex items-center gap-1.5">
                        {row.highlight && <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />}
                        <span>{row.parameter}</span>
                      </div>
                    </td>
                    {columns.map((col) => (
                      <td
                        key={col.id}
                        className={`py-2.5 px-3 text-center text-slate-200 sm:py-3 sm:px-4 ${
                          row.highlight ? "font-semibold text-white" : ""
                        }`}
                      >
                        {row.values[col.id] || "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

              {/* Table Footer with Quote CTAs */}
              <tfoot>
                <tr className="border-t border-white/[0.08] bg-white/[0.02]">
                  <td className="py-2.5 px-3.5 font-mono text-xs font-semibold text-slate-300 sm:py-3 sm:px-4.5">Actions</td>
                  {columns.map((col) => (
                    <td key={col.id} className="py-2.5 px-3 text-center sm:py-3 sm:px-4">
                      <Link
                        href={`/contact?subject=${encodeURIComponent(col.name + " Quotation Inquiry")}`}
                        className="
                          inline-flex
                          items-center
                          gap-1
                          font-mono
                          text-xs
                          font-bold
                          text-[#F97316]
                          transition-colors
                          hover:text-orange-400
                        "
                      >
                        <span>Inquire</span>
                        <span>→</span>
                      </Link>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
