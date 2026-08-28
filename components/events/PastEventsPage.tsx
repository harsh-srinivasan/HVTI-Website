"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import GeometricAtmosphere from "@/components/ui/GeometricAtmosphere";
import { PAST_EVENTS, PastEvent } from "@/data/events";

/* ================================================================
   HVTI PAST EVENTS & EXHIBITIONS — ACCORDION VIEWPORT ARCHITECTURE
   File: components/events/PastEventsPage.tsx

   - Accordion expansion matching the reference format
   - Clicking an event smoothly expands its full single-viewport showcase
   - Next accordion item shifts down smoothly
   - High-contrast dark luxury architectural aesthetic (#05070D)
   - Real booth photography, lightbox preview, and authentic text
   ================================================================ */

export default function PastEventsPage() {
  // All accordion items closed by default
  const [openEventId, setOpenEventId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);

  const eventRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleToggleEvent = (id: string) => {
    setOpenEventId((prev) => (prev === id ? null : id));
  };

  // Smooth scroll into view when expanding an item
  useEffect(() => {
    if (openEventId && eventRefs.current[openEventId]) {
      const el = eventRefs.current[openEventId];
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 150);
      }
    }
  }, [openEventId]);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#05070D]">
      {/* 1. Procedural Geometric Atmosphere Canvas */}
      <GeometricAtmosphere variant="default" />

      {/* 2. Header Section */}
      <section className="relative z-10 w-full pt-[105px] pb-8 sm:pt-[120px] sm:pb-10">
        <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12">
          {/* Breadcrumbs */}
          <div className="mb-4 flex flex-wrap items-center gap-2 font-mono text-[11.5px] uppercase tracking-wider text-[#94A3B8]">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/events" className="transition-colors hover:text-white">
              Events
            </Link>
            <span>/</span>
            <span className="text-[#A855F7]">Past Events</span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#A855F7]/30 bg-[#A855F7]/10 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#C084FC]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
                Exhibition Archive
              </div>
              <h1 className="font-heading text-[32px] font-bold text-white sm:text-[40px] lg:text-[48px]">
                Past Events
              </h1>
            </div>

            <Link
              href="/events/upcoming"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-mono text-[12px] font-semibold text-white transition-all hover:border-[#A855F7]/40 hover:bg-[#A855F7]/10"
            >
              <span>Upcoming Events Schedule →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Interactive Accordion Stack (1 Event Takes 1 Viewport) */}
      <section className="relative z-10 w-full pb-20 sm:pb-24 lg:pb-32">
        <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-4 sm:gap-5">
            {PAST_EVENTS.map((event) => {
              const isOpen = openEventId === event.id;

              return (
                <div
                  key={event.id}
                  ref={(el) => {
                    eventRefs.current[event.id] = el;
                  }}
                  className={`
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "border-[#A855F7]/50 bg-gradient-to-br from-[#0B101B]/98 via-[#0A0F1D]/95 to-[#070A12]/98 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(168,85,247,0.18)] backdrop-blur-2xl"
                        : "border-white/10 bg-[#0B101B]/70 hover:border-white/20 hover:bg-[#0B101B]/90 backdrop-blur-xl"
                    }
                  `}
                >
                  {/* Accordion Clickable Header Bar */}
                  <button
                    type="button"
                    onClick={() => handleToggleEvent(event.id)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-4
                      px-6
                      py-5
                      text-left
                      transition-colors
                      sm:px-8
                      sm:py-6
                    "
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      {/* Plus / Minus Indicator */}
                      <span
                        className={`
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          border
                          font-mono
                          text-[15px]
                          font-bold
                          transition-all
                          duration-300
                          ${
                            isOpen
                              ? "border-[#A855F7] bg-[#A855F7] text-white shadow-[0_0_12px_#A855F7]"
                              : "border-white/15 bg-white/5 text-[#CBD5E1] group-hover:border-white/30"
                          }
                        `}
                      >
                        {isOpen ? "−" : "+"}
                      </span>

                      {/* Main Title & Bracketed Meta */}
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="font-heading text-[16px] font-bold uppercase tracking-[0.02em] text-white sm:text-[18px] lg:text-[19px]">
                          {event.title}
                        </span>
                        <span className="font-sans text-[14px] font-medium text-[#94A3B8] sm:text-[15px]">
                          ({event.date}, {event.city})
                        </span>
                      </div>
                    </div>

                    {/* Category / Stall Badges on Right */}
                    <div className="hidden items-center gap-2 sm:flex">
                      <span className="rounded-md border border-[#FFD200]/40 bg-[#FFD200]/10 px-2.5 py-1 font-mono text-[11px] font-bold text-[#FFD200]">
                        {event.booth}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] font-semibold text-[#CBD5E1]">
                        {event.category}
                      </span>
                    </div>
                  </button>

                  {/* Expanded Accordion Body (1 Event Takes Full Viewport) */}
                  <div
                    className={`
                      grid
                      transition-all
                      duration-500
                      ease-in-out
                      ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/10 p-6 sm:p-8 lg:p-10">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
                          {/* ==============================================
                              LEFT COLUMN: EVENT NARRATIVE & SHOWCASED PRODUCTS (7 COLS)
                              ============================================== */}
                          <div className="flex flex-col gap-5 lg:col-span-7">
                            {/* Venue & Coordinates */}
                            <div className="flex flex-wrap items-center gap-3 text-[13px] text-[#06B6D4]">
                              <span className="flex items-center gap-1.5 font-mono">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                  <circle cx="12" cy="10" r="3" />
                                </svg>
                                {event.venue}, {event.location}
                              </span>
                              <span className="text-white/30">•</span>
                              <span className="font-mono text-[#A855F7] font-semibold">
                                {event.date}
                              </span>
                            </div>

                            {/* Theme Banner if available */}
                            {event.theme && (
                              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 font-sans text-[13.5px] italic text-[#E2E8F0]">
                                <span className="font-mono text-[11px] font-bold uppercase not-italic text-[#FFD200] block mb-0.5">
                                  EXHIBITION THEME
                                </span>
                                &ldquo;{event.theme}&rdquo;
                              </div>
                            )}

                            {/* Authentic Description Paragraphs */}
                            <div className="flex flex-col gap-3.5 text-[14.5px] leading-relaxed text-[#CBD5E1] sm:text-[15.5px]">
                              {event.description.map((p, pIdx) => (
                                <p key={pIdx}>{p}</p>
                              ))}
                            </div>

                            {/* Showcased Technologies Grid */}
                            <div className="mt-2 flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#060913]/85 p-5">
                              <div className="flex items-center justify-between">
                                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#FFD200]">
                                  TECHNOLOGIES SHOWCASED AT OUR BOOTH
                                </span>
                                <span className="font-mono text-[11px] text-[#94A3B8]">
                                  {event.booth}
                                </span>
                              </div>

                              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                {event.showcasedProducts.map((prod, pIdx) => (
                                  <li key={pIdx} className="flex items-start gap-2.5 text-[13px] leading-snug text-[#CBD5E1]">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#A855F7]" />
                                    <span>{prod}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Key Industry Engagements */}
                            {event.keyEngagements && (
                              <div className="flex flex-col gap-2 border-t border-white/10 pt-4 font-mono text-[12px] text-[#94A3B8]">
                                <span className="font-bold text-white uppercase tracking-wider text-[11px]">
                                  Key Industry Engagements &amp; Discussions:
                                </span>
                                <ul className="flex flex-col gap-1.5">
                                  {event.keyEngagements.map((eng, eIdx) => (
                                    <li key={eIdx} className="flex items-start gap-2 text-[#CBD5E1]">
                                      <span className="text-[#A855F7] font-bold">▸</span>
                                      <span>{eng}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          {/* ==============================================
                              RIGHT COLUMN: REAL BOOTH PHOTOGRAPHY & METRICS (5 COLS)
                              ============================================== */}
                          <div className="flex flex-col gap-5 lg:col-span-5">
                            {/* Main High-Res Booth Photo Card */}
                            <div
                              onClick={() => setSelectedImage(event.galleryImages[0])}
                              className="group relative h-[320px] w-full cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#04060B] shadow-2xl sm:h-[380px]"
                            >
                              <Image
                                src={event.galleryImages[0].src}
                                alt={event.galleryImages[0].alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#05070D]/95 via-[#05070D]/20 to-transparent" />

                              {/* Enlarge Photo Button */}
                              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-[#05070D]/85 px-3 py-1.5 text-[11px] font-mono text-white backdrop-blur-md transition-all group-hover:border-[#A855F7] group-hover:bg-[#A855F7]/30">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <polyline points="15 3 21 3 21 9" />
                                  <polyline points="9 21 3 21 3 15" />
                                  <line x1="21" y1="3" x2="14" y2="10" />
                                  <line x1="3" y1="21" x2="10" y2="14" />
                                </svg>
                                <span>Enlarge Photo</span>
                              </div>

                              {/* Caption */}
                              <div className="absolute bottom-4 left-4 right-32 text-[12px] leading-snug text-[#CBD5E1]">
                                {event.galleryImages[0].caption}
                              </div>
                            </div>

                            {/* Exhibition Banner (if available) */}
                            {event.bannerImage && (
                              <div className="relative h-[85px] w-full overflow-hidden rounded-xl border border-white/10 bg-white">
                                <Image
                                  src={event.bannerImage}
                                  alt={`${event.title} Banner`}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            )}

                            {/* Stats Grid */}
                            {event.stats && (
                              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {event.stats.map((st, sIdx) => (
                                  <div
                                    key={sIdx}
                                    className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center"
                                  >
                                    <span className="font-mono text-[17px] font-bold text-[#FFD200]">
                                      {st.value}
                                    </span>
                                    <span className="mt-0.5 text-[10.5px] text-[#94A3B8]">
                                      {st.label}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Direct Consultation Link */}
                            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3.5">
                              <span className="text-[12.5px] text-[#CBD5E1]">
                                Need equipment featured in this event?
                              </span>
                              <Link
                                href="/contact"
                                className="font-mono text-[12px] font-bold text-[#A855F7] hover:underline"
                              >
                                Request Quote →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Photo Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl border border-white/20 bg-[#0B101B] p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/75 text-white hover:bg-black"
            >
              ✕
            </button>
            <div className="relative h-[65vh] w-[80vw] max-w-[1000px]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 text-center font-mono text-[13px] text-[#CBD5E1]">
              {selectedImage.caption}
            </div>
          </div>
        </div>
      )}

      {/* 5. Bottom Direct Connect Section */}
      <section className="relative z-10 w-full border-t border-white/10 bg-[#070A12] py-16 text-center">
        <div className="mx-auto max-w-[720px] px-5">
          <h3 className="font-heading text-[24px] font-bold text-white sm:text-[30px]">
            Partner with HVTI at the Next Exhibition
          </h3>
          <p className="mt-3 text-[15px] text-[#94A3B8]">
            Interested in scheduling a dedicated technical meeting or discussing custom high-voltage testing solutions? Connect with our senior engineering team.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-[#F97316] to-[#EA580C] px-7 py-3 font-sans text-[12.5px] font-bold tracking-[0.10em] text-white shadow-[0_0_24px_rgba(249,115,22,0.35)] hover:scale-105 transition-all"
            >
              CONNECT WITH OUR ENGINEERS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
