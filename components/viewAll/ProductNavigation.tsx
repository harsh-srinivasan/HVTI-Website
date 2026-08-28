"use client";

import React, { useEffect, useRef } from "react";

/* ================================================================
   VIEW ALL — STICKY SIDEBAR PRODUCT NAVIGATION (AUTO-SCROLLING)
   File: components/viewAll/ProductNavigation.tsx

   - Elegant, minimalist floating scroll-spy navigation
   - Clean numbered indices (01, 02, 03...)
   - Auto-scrolls the sidebar container as user scrolls past off-screen products
   - Smooth click-to-scroll to corresponding product section
   ================================================================ */

interface ProductNavigationProps {
  items: { id: string; title: string }[];
  activeId: string;
  onItemClick?: (id: string) => void;
}

export default function ProductNavigation({
  items,
  activeId,
  onItemClick,
}: ProductNavigationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Automatically scroll the sidebar container whenever active product changes
  useEffect(() => {
    if (!activeId || !containerRef.current) return;
    const container = containerRef.current;
    const activeBtn = container.querySelector<HTMLElement>(`[data-nav-id="${activeId}"]`);

    if (activeBtn) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();

      // Check if button is out of the comfortable viewport window of the sidebar
      const isAbove = btnRect.top < containerRect.top + 60;
      const isBelow = btnRect.bottom > containerRect.bottom - 60;

      if (isAbove || isBelow) {
        const currentScroll = container.scrollTop;
        const relativeTop = btnRect.top - containerRect.top;
        const targetScroll = currentScroll + relativeTop - (containerRect.height / 2 - btnRect.height / 2);

        container.scrollTo({
          top: Math.max(0, targetScroll),
          behavior: "smooth",
        });
      }
    }
  }, [activeId]);

  const handleClick = (id: string) => {
    if (onItemClick) {
      onItemClick(id);
    } else {
      const el = document.getElementById(`product-${id}`);
      if (el) {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      aria-label="Catalogue Index Navigation"
      className="flex w-full flex-col"
    >
      {/* Navigation Sticky Header */}
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-[#F97316]">
          CATALOGUE INDEX
        </span>
        <span className="h-[1px] flex-1 bg-white/[0.08]" />
      </div>

      {/* Product List (Auto-scrollable container with subtle scrollbar) */}
      <div
        ref={containerRef}
        className="
          flex
          max-h-[calc(100vh-200px)]
          flex-col
          space-y-5
          overflow-y-auto
          pr-3
          [scrollbar-width:thin]
          [scrollbar-color:rgba(255,255,255,0.12)_transparent]
          [&::-webkit-scrollbar]:w-1.5
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-white/10
          hover:[&::-webkit-scrollbar-thumb]:bg-white/20
        "
      >
        {items.map((item, index) => {
          const isActive = item.id === activeId;

          return (
            <button
              key={item.id}
              data-nav-id={item.id}
              type="button"
              onClick={() => handleClick(item.id)}
              className={`
                group
                flex
                items-start
                gap-3.5
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

              {/* Title & Active Tracking Line */}
              <div className="flex flex-1 flex-col gap-1.5">
                <span
                  className={`
                    font-sans
                    text-[14px]
                    font-semibold
                    leading-[1.35]
                    transition-colors
                    ${isActive ? "text-white" : "text-white/40 group-hover:text-white/90"}
                  `}
                >
                  {item.title}
                </span>

                <span
                  className={`
                    h-[1.5px]
                    rounded-full
                    transition-all
                    duration-500
                    ${
                      isActive
                        ? "w-8 bg-[#F97316] shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                        : "w-0 bg-transparent"
                    }
                  `}
                />
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

