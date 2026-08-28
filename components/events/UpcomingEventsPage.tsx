"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import GeometricAtmosphere from "@/components/ui/GeometricAtmosphere";
import { UPCOMING_EVENTS_STATUS, PAST_EVENTS } from "@/data/events";

/* ================================================================
   HVTI UPCOMING EVENTS PAGE
   File: components/events/UpcomingEventsPage.tsx

   - Hero occupies the COMPLETE 100vh viewport height
   - Clear Hero notice: No upcoming events right now, stay tuned!
   - Direct link & highlights to past event archives
   ================================================================ */

export default function UpcomingEventsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#05070D]">
      {/* 1. Procedural Geometric Atmosphere Canvas */}
      <GeometricAtmosphere variant="default" />

      {/* ==========================================================
          2. COMPLETE 1-VIEWPORT HERO SECTION
          ========================================================== */}
      <section
        id="upcoming-hero"
        className="
          relative
          z-10
          flex
          min-h-[100svh]
          min-h-screen
          w-full
          flex-col
          items-center
          justify-center
          overflow-hidden
          px-6
          py-12
          pt-[95px]
          sm:px-10
          sm:py-16
          sm:pt-[110px]
          lg:px-14
          xl:px-20
        "
      >
        <div className="my-auto mx-auto flex w-full max-w-[1140px] flex-col items-center text-center">
          {/* Breadcrumbs */}
          <div className="mb-5 flex flex-wrap items-center justify-center gap-2 font-mono text-[11.5px] uppercase tracking-wider text-[#94A3B8]">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/events" className="transition-colors hover:text-white">
              Events
            </Link>
            <span>/</span>
            <span className="text-[#A855F7]">Upcoming Events</span>
          </div>

          {/* Status Notice Badge */}
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#F97316]/35 bg-[#F97316]/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#F97316] animate-pulse shadow-[0_0_8px_#F97316]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#FB923C]">
              Schedule In Preparation • Stay Tuned
            </span>
          </div>

          {/* Confident 1-Viewport Hero Headline */}
          <h1 className="font-heading text-3xl font-bold leading-[1.10] tracking-[-0.035em] text-white sm:text-4xl md:text-[48px] lg:text-[56px] xl:text-[60px] drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)]">
            <span>No Upcoming Events Right Now.</span>
            <br />
            <span className="bg-gradient-to-r from-[#C084FC] via-[#E2E8F0] to-[#FB923C] bg-clip-text text-transparent">
              Stay Tuned for Our Next Circuit!
            </span>
          </h1>

          {/* Explanatory Subtitle */}
          <p className="mt-5 max-w-[780px] font-sans text-base leading-[1.75] text-[#CBD5E1] sm:text-lg lg:text-[18.5px]">
            Our engineers and technical delegates are currently finalizing the upcoming exhibition schedule for national power grid expos, renewable energy summits, and international trade symposiums.
          </p>

          {/* Quick Action Links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-[#FB923C]/50
                bg-gradient-to-r
                from-[#F97316]
                via-[#EA580C]
                to-[#C2410C]
                px-6
                py-3.5
                font-sans
                text-[12.5px]
                font-bold
                tracking-[0.10em]
                text-white
                shadow-[0_0_24px_rgba(249,115,22,0.30)]
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-[0_0_32px_rgba(249,115,22,0.50)]
              "
            >
              <span>REQUEST ON-SITE DEMONSTRATION</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <Link
              href="/events/past"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-white/5
                px-5
                py-3.5
                font-sans
                text-[13px]
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#A855F7]/40
                hover:bg-[#A855F7]/10
                hover:text-[#C084FC]
              "
            >
              <span>Explore Past Event Archives</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Quick Focus Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {[
              "Live Dielectric Testing",
              "Voltage Detectors (Model TP-S9)",
              "Transformer Monitoring",
              "Substation Telescopic Sticks",
            ].map((pill, idx) => (
              <span
                key={idx}
                className="rounded-full border border-white/[0.09] bg-[#0A0F1D]/80 px-3.5 py-1 font-mono text-[11px] text-[#94A3B8] backdrop-blur-md"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Scroll Down Cue */}
          <div className="mt-10 flex items-center justify-center gap-2 text-xs font-mono text-[#94A3B8] opacity-75">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7] animate-ping" />
            <span>Scroll down for circuit details &amp; past exhibition highlights ↓</span>
          </div>
        </div>
      </section>

      {/* ==========================================================
          3. MAIN STATUS CARD & ROADSHOW NOTICE
          ========================================================== */}
      <section className="relative z-10 w-full py-16 sm:py-20 lg:py-24 border-t border-white/[0.06]">
        <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B101B]/95 via-[#0A0F1D]/90 to-[#070A12]/95 p-7 sm:p-10 lg:p-14 shadow-2xl backdrop-blur-xl">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#A855F7]/10 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#F97316]/10 blur-[100px]" />

            <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center">
              {/* Left Column: Official Statement */}
              <div className="flex flex-col gap-6 lg:col-span-7">
                <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] font-semibold text-[#CBD5E1]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#A855F7]">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Upcoming Circuit Planning</span>
                </div>

                <h2 className="font-heading text-[26px] font-bold leading-snug tracking-tight text-white sm:text-[32px]">
                  Global Industry Exhibitions &amp; Technical Conferences
                </h2>

                <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-[#CBD5E1] sm:text-[16px]">
                  <p>
                    {UPCOMING_EVENTS_STATUS.statusMessage}
                  </p>
                  <p className="text-[#94A3B8]">
                    {UPCOMING_EVENTS_STATUS.description}
                  </p>
                </div>

                {/* Direct Contact & Collaboration Block */}
                <div className="mt-2 flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[#FB923C]/50
                      bg-gradient-to-r
                      from-[#F97316]
                      via-[#EA580C]
                      to-[#C2410C]
                      px-6
                      py-3.5
                      font-sans
                      text-[12.5px]
                      font-bold
                      tracking-[0.10em]
                      text-white
                      shadow-[0_0_24px_rgba(249,115,22,0.30)]
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                      hover:shadow-[0_0_32px_rgba(249,115,22,0.50)]
                    "
                  >
                    <span>SCHEDULE A DEMONSTRATION</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>

                  <a
                    href="mailto:contact@hvti.in"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      py-3.5
                      font-sans
                      text-[13px]
                      font-medium
                      text-[#CBD5E1]
                      transition-all
                      hover:border-white/25
                      hover:bg-white/10
                      hover:text-white
                    "
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#A855F7]">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span>contact@hvti.in</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Roadshow Focus & Direct Hotline */}
              <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#060913]/80 p-6 sm:p-7 backdrop-blur-md lg:col-span-5">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#FFD200]">
                  WHAT TO EXPECT AT OUR BOOTH
                </span>

                <h3 className="font-heading text-[18px] font-semibold text-white">
                  Live Equipment Showcases &amp; Demonstrations
                </h3>

                <ul className="flex flex-col gap-3">
                  {UPCOMING_EVENTS_STATUS.roadshowFocus.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[#CBD5E1]">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#A855F7]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Direct Telephone Contact */}
                <div className="mt-2 flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 font-mono text-[12px] text-[#94A3B8]">
                  <div className="flex items-center justify-between">
                    <span>Direct Hotline:</span>
                    <a href="tel:+919990246301" className="font-bold text-white hover:text-[#A855F7]">
                      +91-9990246301
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Landline (Gurgaon):</span>
                    <a href="tel:01244018357" className="font-bold text-white hover:text-[#A855F7]">
                      0124-4018357
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          4. PAST EVENTS PREVIEW SHOWCASE
          ========================================================== */}
      <section className="relative z-10 w-full pb-20 sm:pb-24 lg:pb-32">
        <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-[2px] w-6 bg-[#A855F7]" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#A855F7]">
                  Exhibition Archive
                </span>
              </div>
              <h2 className="font-heading text-[26px] font-bold text-white sm:text-[32px]">
                Recent Exhibition Highlights
              </h2>
            </div>

            <Link
              href="/events/past"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-mono text-[12px] font-semibold text-white transition-all hover:border-[#A855F7]/40 hover:bg-[#A855F7]/10"
            >
              <span>View All Past Events</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {PAST_EVENTS.map((event) => (
              <div
                key={event.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B101B]/85 transition-all duration-300 hover:border-[#A855F7]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(168,85,247,0.15)]"
              >
                {/* Event Image */}
                <div className="relative h-[240px] w-full overflow-hidden bg-[#04060B]">
                  <Image
                    src={event.galleryImages[0].src}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B101B] via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 rounded-full border border-white/15 bg-[#05070D]/85 px-3 py-1 font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#CBD5E1] backdrop-blur-md">
                    {event.category}
                  </div>

                  {/* Booth Badge */}
                  <div className="absolute top-4 right-4 rounded-md border border-[#FFD200]/40 bg-[#FFD200]/15 px-2.5 py-1 font-mono text-[10.5px] font-bold text-[#FFD200] backdrop-blur-md">
                    {event.booth}
                  </div>
                </div>

                {/* Event Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-2 font-mono text-[12px] font-semibold text-[#A855F7]">
                    {event.date} • {event.city}
                  </div>

                  <h3 className="font-heading text-[20px] font-bold leading-snug text-white transition-colors group-hover:text-[#C084FC]">
                    {event.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-[#94A3B8]">
                    {event.summary}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="font-mono text-[11px] text-[#64748B]">
                      {event.venue}
                    </span>
                    <Link
                      href="/events/past"
                      className="font-mono text-[12px] font-bold text-[#A855F7] hover:underline"
                    >
                      Read Highlights →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
