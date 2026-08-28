"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

/* ================================================================
   REUSABLE SINGLE-VIEWPORT INFRASTRUCTURE & STATISTICS MATRIX
   File: components/blog/InfrastructureMatrix.tsx

   UX Enhancements for Scroll Awareness:
   - Bottom & Top gradient fade masks (disappears when at bottom/top)
   - Dynamic item counter pill: "Showing X of Y • Scroll for more ↓"
   - Visible styled thin glowing scrollbar
   - Partial row peeking affordance
   ================================================================ */

export interface MatrixColumn<T> {
  key: keyof T | string;
  header: string;
  align?: "left" | "center" | "right";
  width?: string;
  render?: (item: T, isExpanded?: boolean) => React.ReactNode;
}

export interface MetricBadge {
  label: string;
  value: string;
  color?: string;
  subtext?: string;
}

export interface InfrastructureMatrixProps<T> {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  data: T[];
  columns: MatrixColumn<T>[];
  filterKey?: keyof T;
  searchKeys?: (keyof T)[];
  statBadges?: MetricBadge[];
  sourceImageSrc?: string;
  sourceCaption?: string;
  defaultSortKey?: keyof T;
  maxTableHeight?: string;
  className?: string;
}

export default function InfrastructureMatrix<T extends { id?: string | number }>({
  eyebrow = "INFRASTRUCTURE MATRIX",
  title,
  subtitle,
  data,
  columns,
  filterKey,
  searchKeys = [],
  statBadges,
  sourceImageSrc,
  sourceCaption,
  maxTableHeight = "max-h-[275px]",
  className = "",
}: InfrastructureMatrixProps<T>) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showOriginalImage, setShowOriginalImage] = useState(false);
  const [hoveredRowId, setHoveredRowId] = useState<string | number | null>(null);

  // Scroll detection state for UX indicators
  const tableContainerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const [canScrollUp, setCanScrollUp] = useState(false);

  // Extract unique filter categories
  const filterOptions = useMemo(() => {
    if (!filterKey) return [];
    const set = new Set<string>();
    data.forEach((item) => {
      const val = item[filterKey];
      if (typeof val === "string" && val) set.add(val);
    });
    return ["All", ...Array.from(set)];
  }, [data, filterKey]);

  // Filtered dataset
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      // Category filter
      if (filterKey && activeFilter !== "All") {
        if (item[filterKey] !== activeFilter) return false;
      }
      // Search query
      if (search.trim()) {
        const q = search.toLowerCase();
        const matches = searchKeys.some((k) => {
          const val = item[k];
          return val && String(val).toLowerCase().includes(q);
        });
        if (!matches) return false;
      }
      return true;
    });
  }, [data, filterKey, activeFilter, search, searchKeys]);

  // Check scroll positions
  const checkScroll = () => {
    const el = tableContainerRef.current;
    if (!el) return;
    const hasMoreDown = el.scrollTop + el.clientHeight < el.scrollHeight - 6;
    const hasMoreUp = el.scrollTop > 6;
    setCanScrollDown(hasMoreDown);
    setCanScrollUp(hasMoreUp);
  };

  useEffect(() => {
    checkScroll();
    const el = tableContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [filteredData, showOriginalImage]);

  return (
    <figure
      className={`
        my-8
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.12]
        bg-[#0A0F1D]/95
        p-5
        shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(168,85,247,0.10)]
        backdrop-blur-md
        sm:p-6
        ${className}
      `}
    >
      {/* Header Bar */}
      <div className="flex flex-col justify-between gap-3 border-b border-white/[0.08] pb-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2 font-mono text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
            <span>{eyebrow}</span>
          </div>
          <h3 className="mt-1 font-heading text-lg font-bold tracking-tight text-white sm:text-xl">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-0.5 font-sans text-[11.5px] text-[#94A3B8] line-clamp-1">
              {subtitle}
            </p>
          )}
        </div>

        {/* Source Toggle */}
        {sourceImageSrc && (
          <button
            type="button"
            onClick={() => setShowOriginalImage(!showOriginalImage)}
            className="self-start sm:self-auto rounded-lg border border-white/[0.10] bg-[#05070D]/80 px-2.5 py-1 font-mono text-[10.5px] text-[#CBD5E1] hover:border-[#A855F7] hover:text-white transition-all"
          >
            {showOriginalImage ? "Interactive Matrix" : "Source Graphic"}
          </button>
        )}
      </div>

      {showOriginalImage && sourceImageSrc ? (
        /* Source Graphic Mode */
        <div className="mt-4 flex flex-col items-center">
          <div className="relative aspect-[16/10] w-full max-w-[620px] overflow-hidden rounded-xl border border-white/[0.10] bg-[#05070D]">
            <Image
              src={sourceImageSrc}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
          {sourceCaption && (
            <figcaption className="mt-2 font-mono text-[10.5px] text-[#94A3B8]">
              {sourceCaption}
            </figcaption>
          )}
        </div>
      ) : (
        /* ============================================================
           SINGLE-VIEWPORT HIGH-DENSITY INTERACTIVE MATRIX WITH SCROLL UX
           ============================================================ */
        <div className="mt-4 space-y-3.5">
          {/* Top Metric Badges Strip */}
          {statBadges && statBadges.length > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/[0.06] bg-[#05070D]/80 px-3.5 py-2">
              {statBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: badge.color || "#F97316" }}
                  />
                  <span className="font-mono text-[10px] uppercase text-[#94A3B8]">
                    {badge.label}:
                  </span>
                  <span
                    className="font-mono text-[12px] font-bold"
                    style={{ color: badge.color || "#FFFFFF" }}
                  >
                    {badge.value}
                  </span>
                  {badge.subtext && (
                    <span className="hidden sm:inline font-mono text-[10px] text-[#64748B]">
                      ({badge.subtext})
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Filter and Search Bar + Live Scroll Affordance Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            {/* Search Box */}
            {searchKeys.length > 0 && (
              <div className="relative w-full sm:w-52">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Filter by keyword..."
                  className="w-full rounded-lg border border-white/[0.10] bg-[#05070D]/90 py-1 pl-7 pr-3 font-sans text-[11.5px] text-white placeholder-[#64748B] focus:border-[#A855F7] focus:outline-none"
                />
                <div className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-[#64748B]">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
              </div>
            )}

            {/* Filter Category Chips */}
            {filterOptions.length > 0 && (
              <div className="flex flex-wrap items-center gap-1">
                {filterOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setActiveFilter(opt)}
                    className={`rounded-md px-2 py-0.5 font-mono text-[10px] transition-all ${
                      activeFilter === opt
                        ? "bg-[#A855F7] font-bold text-white shadow-[0_0_8px_rgba(168,85,247,0.4)]"
                        : "border border-white/[0.08] bg-[#05070D] text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Scrollable Container with Visual Fade Masks */}
          <div className="relative w-full">
            {/* Top Fade Mask (when scrolled down) */}
            <div
              className={`pointer-events-none absolute left-0 right-0 top-0 z-20 h-6 bg-gradient-to-b from-[#0A0F1D] to-transparent transition-opacity duration-300 ${
                canScrollUp ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* The Scrollable Table Box with Custom Glowing Scrollbar */}
            <div
              ref={tableContainerRef}
              className={`
                overflow-x-auto
                overflow-y-auto
                rounded-xl
                border
                border-white/[0.08]
                bg-[#05070D]/70
                ${maxTableHeight}
                [&::-webkit-scrollbar]:w-1.5
                [&::-webkit-scrollbar-track]:bg-[#05070D]
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-[#F97316]/50
                hover:[&::-webkit-scrollbar-thumb]:bg-[#F97316]
              `}
            >
              <table className="w-full text-left font-sans text-[12px] text-[#CBD5E1]">
                <thead className="sticky top-0 z-10 border-b border-white/[0.10] bg-[#0A0F1D] font-mono text-[10px] font-bold uppercase tracking-wider text-[#F97316]">
                  <tr>
                    {columns.map((col, idx) => (
                      <th
                        key={String(col.key) || idx}
                        className={`px-3.5 py-2.5 ${col.width || ""} ${
                          col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"
                        }`}
                      >
                        {col.header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05]">
                  {filteredData.map((item, rowIdx) => {
                    const rowId = item.id ?? rowIdx;
                    const isHovered = hoveredRowId === rowId;

                    return (
                      <tr
                        key={String(rowId)}
                        onMouseEnter={() => setHoveredRowId(rowId)}
                        onMouseLeave={() => setHoveredRowId(null)}
                        className={`group transition-colors ${
                          isHovered ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
                        }`}
                      >
                        {columns.map((col, colIdx) => (
                          <td
                            key={String(col.key) || colIdx}
                            className={`px-3.5 py-2.5 align-middle ${
                              col.align === "right"
                                ? "text-right"
                                : col.align === "center"
                                ? "text-center"
                                : "text-left"
                            }`}
                          >
                            {col.render ? col.render(item, isHovered) : String(item[col.key as keyof T] ?? "")}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Bottom Fade Mask (Active when more rows are below) */}
            <div
              className={`pointer-events-none absolute bottom-0 left-0 right-0 z-20 flex h-8 items-center justify-center bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/80 to-transparent transition-opacity duration-300 ${
                canScrollDown ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Footer Bar with Dynamic UX Scroll Cue */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-2.5 font-mono text-[10.5px]">
            {/* Scroll Affordance Badge */}
            <div className="flex items-center gap-1.5 text-[#94A3B8]">
              {canScrollDown ? (
                <span className="flex items-center gap-1 text-[#F97316]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F97316] animate-ping" />
                  <span>Scroll table to view all {filteredData.length} records</span>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="animate-bounce">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                  </svg>
                </span>
              ) : (
                <span className="text-[#64748B]">
                  ✓ All {filteredData.length} entries displayed
                </span>
              )}
            </div>

            {sourceCaption && (
              <span className="text-[#64748B]">
                {sourceCaption}
              </span>
            )}
          </div>
        </div>
      )}
    </figure>
  );
}
