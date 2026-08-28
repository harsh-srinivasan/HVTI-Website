"use client";

import React from "react";

/* ================================================================
   VIEWALL-STYLE VERTICALLY CENTERED STICKY TABLE OF CONTENTS
   File: components/blog/BlogTableOfContents.tsx

   - Positioned on the RIGHT of article content
   - Sticks vertically centered in viewport (`sticky top-1/2 -translate-y-1/2`)
   - Clean numbered indices (01, 02, 03...)
   - Active tracking glow indicator (#F97316 / #A855F7)
   - Smooth click-to-scroll with navbar clearance
   ================================================================ */

export interface TocItem {
  id: string;
  title: string;
  shortTitle?: string;
}

interface BlogTableOfContentsProps {
  items: TocItem[];
  activeId: string;
  onItemClick?: (id: string) => void;
}

export default function BlogTableOfContents({
  items,
  activeId,
  onItemClick,
}: BlogTableOfContentsProps) {
  const handleClick = (id: string) => {
    if (onItemClick) {
      onItemClick(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -95;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      aria-label="Table of Contents Navigation"
      className="
        flex
        w-full
        flex-col
        rounded-2xl
        border
        border-white/[0.08]
        bg-[#0A0F1D]/85
        p-6
        backdrop-blur-md
        shadow-[0_16px_40px_rgba(0,0,0,0.6)]
      "
    >
      {/* Header Label */}
      <div className="mb-6 flex items-center gap-3">
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#F97316]">
          TABLE OF CONTENTS
        </span>
        <span className="h-[1px] flex-1 bg-white/[0.08]" />
      </div>

      {/* Index Items */}
      <div className="flex flex-col space-y-4">
        {items.map((item, index) => {
          const isActive = item.id === activeId;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleClick(item.id)}
              className={`
                group
                flex
                items-start
                gap-3
                text-left
                transition-all
                duration-300
                ${
                  isActive
                    ? "text-white"
                    : "text-white/40 hover:text-white/80"
                }
              `}
            >
              {/* Number Index */}
              <span
                className={`
                  pt-0.5
                  font-mono
                  text-[11px]
                  font-bold
                  tracking-wider
                  transition-colors
                  duration-300
                  ${
                    isActive
                      ? "text-[#F97316]"
                      : "text-white/30 group-hover:text-[#A855F7]"
                  }
                `}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title & Active Indicator Line */}
              <div className="flex flex-col">
                <span
                  className={`
                    font-sans
                    text-[12.5px]
                    leading-[1.4]
                    transition-all
                    duration-300
                    line-clamp-2
                    ${
                      isActive
                        ? "font-semibold text-white translate-x-0.5"
                        : "font-normal text-[#94A3B8] group-hover:text-white"
                    }
                  `}
                >
                  {item.shortTitle || item.title}
                </span>

                {/* Subtle active glowing bar */}
                {isActive && (
                  <span className="mt-1.5 h-[2px] w-6 rounded-full bg-gradient-to-r from-[#F97316] to-[#A855F7] shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
