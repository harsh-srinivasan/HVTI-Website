"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import GeometricAtmosphere from "@/components/ui/GeometricAtmosphere";
import { BlogPost, getRelatedBlogPosts } from "@/data/blog";
import ReadingProgressBar from "./ReadingProgressBar";
import InteractivePowerCapacityChart from "./InteractivePowerCapacityChart";
import SolarParksInteractiveTable from "./SolarParksInteractiveTable";
import EquipmentHighlightCard from "./EquipmentHighlightCard";
import BlogTableOfContents, { TocItem } from "./BlogTableOfContents";

/* ================================================================
   WORLD-CLASS TECHNICAL ARTICLE READER
   File: components/blog/BlogArticleReader.tsx

   - Viewport 1 (Hero): Exact 1-viewport balanced 2-column hero with
     compact, pleasant image framing (Max 440px) and zero clutter.
   - Content Column (LEFT): Focused topical sections.
   - Table of Contents Column (RIGHT): Slides down along with scroll,
     vertically centered in viewport (`sticky top-1/2 -translate-y-1/2`).
   ================================================================ */

interface BlogArticleReaderProps {
  post: BlogPost;
}

export default function BlogArticleReader({ post }: BlogArticleReaderProps) {
  const relatedPosts = getRelatedBlogPosts(post.slug, 2);
  const isResilientEnergyPost = post.slug === "empowering-a-resilient-energy-future";

  // Define structured TOC items for navigation
  const tocItems: TocItem[] = isResilientEnergyPost
    ? [
        { id: "section-summary", title: "Executive Summary & Overview", shortTitle: "Executive Summary & Grid Challenges" },
        { id: "section-capacity", title: "National Grid Capacity Dynamics", shortTitle: "India Power Capacity (Jan 2025)" },
        { id: "section-solar-parks", title: "Ultra-Mega Solar Parks Matrix", shortTitle: "Ultra-Mega Solar Parks Matrix" },
        { id: "section-safety", title: "Live-Line Safety & TP-S9 Detector", shortTitle: "Live-Line High Voltage Safety" },
        { id: "section-monitoring", title: "Condition Monitoring & SCADA", shortTitle: "Condition Monitoring & Smart Grid" },
      ]
    : post.sections.map((s, idx) => ({
        id: `section-${idx}`,
        title: s.heading || `Section ${idx + 1}`,
      }));

  const [activeSection, setActiveSection] = useState<string>(tocItems[0]?.id || "section-summary");
  const [copied, setCopied] = useState(false);

  // High-precision real-time scroll tracking
  const updateActiveSection = useCallback(() => {
    const sectionIds = tocItems.map((item) => item.id);
    const targetLine = window.innerHeight * 0.35; // 35% from top of viewport
    let currentId = "";

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= targetLine && rect.bottom > targetLine) {
          currentId = id;
        }
      }
    });

    if (!currentId && sectionIds.length > 0) {
      const firstEl = document.getElementById(sectionIds[0]);
      if (firstEl && firstEl.getBoundingClientRect().top > targetLine) {
        currentId = sectionIds[0];
      } else {
        const lastEl = document.getElementById(sectionIds[sectionIds.length - 1]);
        if (lastEl && lastEl.getBoundingClientRect().bottom <= targetLine) {
          currentId = sectionIds[sectionIds.length - 1];
        }
      }
    }

    if (currentId && currentId !== activeSection) {
      setActiveSection(currentId);
    }
  }, [tocItems, activeSection]);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateActiveSection]);

  const handleTocClick = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 95;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleShareLinkedIn = () => {
    if (typeof window !== "undefined") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
        "_blank"
      );
    }
  };

  const handleShareTwitter = () => {
    if (typeof window !== "undefined") {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`,
        "_blank"
      );
    }
  };

  const scrollToContent = () => {
    const el = document.getElementById("article-content-start");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Split title into main and subtitle for balanced typography
  const titleWords = post.title.split(":");
  const mainTitle = titleWords[0];
  const subtitle = titleWords.length > 1 ? titleWords.slice(1).join(":") : "";

  return (
    <main className="relative min-h-screen w-full bg-[#05070D]">
      {/* 1. Procedural Atmosphere Background */}
      <GeometricAtmosphere variant="default" />

      {/* ============================================================
          VIEWPORT 1 — BALANCED 1-VIEWPORT HERO (COMPACT & PROPORTIONATE)
          ============================================================ */}
      <section
        id="article-hero"
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
        <div className="my-auto mx-auto grid w-full max-w-[1120px] grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12 lg:gap-14">
          {/* Left Column: Metadata & Title (7 cols) */}
          <div className="flex flex-col justify-center md:col-span-7">
            {/* Breadcrumb */}
            <nav className="mb-3.5 flex flex-wrap items-center gap-2 font-mono text-[11px] text-[#94A3B8]">
              <Link href="/" className="hover:text-white transition-colors">
                HOME
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">
                BLOG
              </Link>
              <span>/</span>
              <span className="text-[#A855F7] font-semibold">{post.category}</span>
            </nav>

            {/* Badges Strip */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full border border-[#F97316]/50 bg-[#F97316]/10 px-3 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#F97316]">
                {post.category}
              </span>
              <span className="font-mono text-[11.5px] text-[#94A3B8]">{post.date}</span>
              <span className="h-1 w-1 rounded-full bg-[#64748B]" />
              <span className="font-mono text-[11.5px] text-[#94A3B8]">{post.readTime}</span>
            </div>

            {/* Crisp, Proportionate Title */}
            <h1 className="mt-3.5 font-heading text-2xl font-bold leading-[1.2] tracking-[-0.025em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] sm:text-3xl lg:text-[34px]">
              <span>{mainTitle}</span>
              {subtitle && (
                <>
                  <br />
                  <span className="text-[#A855F7] text-[20px] sm:text-[24px] font-medium leading-[1.3]">
                    {subtitle}
                  </span>
                </>
              )}
            </h1>

            {/* Orange Accent Line */}
            <div className="my-3.5 h-[2px] w-10 bg-[#F97316]" />

            {/* Narrative Excerpt */}
            <p className="font-sans text-[13.5px] leading-[1.65] text-[#CBD5E1] line-clamp-3 sm:text-[14px]">
              {post.excerpt}
            </p>

            {/* Author Profile & Share Strip */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 overflow-hidden rounded-full border border-white/[0.15] bg-[#0A0F1D] p-1">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={32}
                    height={32}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-sans text-[12.5px] font-bold text-white leading-tight">
                    {post.author.name}
                  </p>
                  <p className="font-sans text-[10.5px] text-[#94A3B8]">
                    High Voltage Testing Instruments
                  </p>
                </div>
              </div>

              {/* Share Icons */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handleShareLinkedIn}
                  title="Share on LinkedIn"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.10] bg-[#0A0F1D] text-[#94A3B8] hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.7a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3z" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleShareTwitter}
                  title="Share on X"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.10] bg-[#0A0F1D] text-[#94A3B8] hover:border-white hover:text-white transition-all"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  title="Copy Link"
                  className="flex items-center gap-1 rounded-full border border-white/[0.10] bg-[#0A0F1D] px-2.5 py-1 font-mono text-[10px] text-[#94A3B8] hover:border-[#F97316] hover:text-white transition-all"
                >
                  <span>{copied ? "COPIED" : "COPY LINK"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Compact & Proportionate Cover Image (5 cols, max 440px) */}
          <div className="md:col-span-5">
            <div className="relative mx-auto w-full max-w-[440px]">
              {/* Subtle Purple Underglow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-2
                  rounded-[18px]
                  bg-[radial-gradient(ellipse_at_50%_100%,rgba(168,85,247,0.30),rgba(124,58,237,0.10)_50%,transparent_75%)]
                  blur-[20px]
                "
              />

              {/* Clean Thin Border Image Frame with Exact 16:10 Aspect Ratio */}
              <div
                className="
                  relative
                  aspect-[16/10]
                  w-full
                  overflow-hidden
                  rounded-[14px]
                  border
                  border-[#A855F7]/30
                  bg-[#080D1A]
                  shadow-[0_16px_40px_rgba(0,0,0,0.75),0_0_24px_rgba(168,85,247,0.14)]
                "
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  quality={95}
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 440px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Prompt at Bottom of Viewport 1 */}
        <div className="mt-auto pt-4 text-center">
          <button
            type="button"
            onClick={scrollToContent}
            className="
              group
              inline-flex
              flex-col
              items-center
              gap-1
              font-mono
              text-[10.5px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#64748B]
              transition-colors
              hover:text-[#F97316]
            "
          >
            <span>SCROLL TO READ ARTICLE</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="animate-bounce text-[#A855F7] group-hover:text-[#F97316]"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>

      {/* ============================================================
          MAIN BODY LAYOUT — CONTENT LEFT, SLIDING TOC RIGHT
          ============================================================ */}
      <div
        id="article-content-start"
        className="relative z-10 w-full px-6 py-16 sm:px-10 lg:px-14 xl:px-20"
      >
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* ==========================================================
              MAIN EDITORIAL CONTENT COLUMN (LEFT — 8 COLS)
              ========================================================== */}
          <div className="lg:col-span-8 space-y-16">
            {/* Section 1: Executive Summary & Overview */}
            <section id="section-summary" className="space-y-6">
              <div className="rounded-2xl border border-[#A855F7]/30 bg-gradient-to-br from-[#0A0F1D] to-[#05070D] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#A855F7]">
                  <span className="h-2 w-2 rounded-full bg-[#A855F7]" />
                  <span>EXECUTIVE SUMMARY &amp; KEY TAKEAWAYS</span>
                </div>
                <ul className="mt-4 space-y-2.5 font-sans text-[13.5px] leading-[1.65] text-[#CBD5E1]">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 font-bold text-[#F97316]">01.</span>
                    <span>
                      India crossed the historic <strong>100 GW Solar landmark</strong> in early 2025, elevating clean power to <strong>45.4%</strong> of total national grid capacity.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 font-bold text-[#F97316]">02.</span>
                    <span>
                      Gigawatt-scale solar parks like <strong>Bhadla (2,245 MW)</strong> and <strong>Pavagada (2,050 MW)</strong> rely on multi-voltage pooling substations operating under volatile ramp cycles.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 font-bold text-[#F97316]">03.</span>
                    <span>
                      Certified non-contact voltage detectors like the <strong>TP-S9</strong> with built-in self-test eliminate fatal arc-flash risks during live-line substation operations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 font-bold text-[#F97316]">04.</span>
                    <span>
                      Predictive condition monitoring (PD testing + wireless thermal telemetry) is indispensable to prevent catastrophic transformer and BESS outages.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 pt-2">
                <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  The Renewable Transformation and Its Challenges
                </h2>
                <p className="font-sans text-[15px] leading-[1.8] text-[#CBD5E1]">
                  In an era defined by rapid renewable energy growth and ambitious decarbonization targets, ensuring grid reliability and worker safety is paramount. High Voltage Testing Instruments (HVTI) delivers cutting-edge safety equipment and condition-monitoring systems that empower utilities, grid operators, and industrial facilities to integrate renewables seamlessly while protecting personnel and critical grid assets.
                </p>
                <p className="font-sans text-[15px] leading-[1.8] text-[#CBD5E1]">
                  While this monumental energy transition accelerates decarbonization, it introduces complex operational risks: rapid output intermittency, live-line maintenance hazards in solar pooling yards, and accelerated dielectric stress on legacy step-up transformers.
                </p>
              </div>
            </section>

            {/* Section 2: National Grid Capacity Analytics */}
            {isResilientEnergyPost && (
              <section id="section-capacity" className="space-y-5 pt-6 border-t border-white/[0.08]">
                <div className="space-y-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
                    GRID CAPACITY DYNAMICS
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                    India Installed Power Capacity Analysis
                  </h2>
                </div>
                <p className="font-sans text-[15px] leading-[1.8] text-[#CBD5E1]">
                  As of January 2025, India&apos;s installed power capacity stands at <strong className="text-white">466.86 GW</strong>. Thermal coal provides core system inertia, while solar has surged past the landmark 100 GW threshold. Explore the interactive breakdown below:
                </p>

                {/* INTERACTIVE DATA CHART COMPONENT */}
                <InteractivePowerCapacityChart />
              </section>
            )}

            {/* Section 3: Ultra-Mega Solar Parks Matrix */}
            {isResilientEnergyPost && (
              <section id="section-solar-parks" className="space-y-5 pt-6 border-t border-white/[0.08]">
                <div className="space-y-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
                    GIGAWATT-SCALE INFRASTRUCTURE
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                    Ultra-Mega Solar Parks: Pillars of Scale
                  </h2>
                </div>
                <p className="font-sans text-[15px] leading-[1.8] text-[#CBD5E1]">
                  India&apos;s solar revolution is anchored by ultra-mega solar parks that consolidate vast land parcels, pooling substations, and high-voltage transmission lines. Review the operational specifications of India&apos;s leading solar parks:
                </p>

                {/* INTERACTIVE TABLE COMPONENT */}
                <SolarParksInteractiveTable />
              </section>
            )}

            {/* Section 4: Live-Line Safety & The TP-S9 Detector */}
            {isResilientEnergyPost && (
              <section id="section-safety" className="space-y-5 pt-6 border-t border-white/[0.08]">
                <div className="space-y-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
                    PERSONNEL &amp; ASSET PROTECTION
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                    Advanced High Voltage Detection in Live-Line Operations
                  </h2>
                </div>
                <p className="font-sans text-[15px] leading-[1.8] text-[#CBD5E1]">
                  Substation line crews and maintenance engineers must verify zero electrical energy state before touching any overhead line or busbar. HVTI&apos;s TP-S9 detector delivers non-contact, foolproof voltage indication:
                </p>

                {/* INLINE PRODUCT EMBED */}
                <EquipmentHighlightCard />

                {/* Safety Protocol Callout */}
                <div className="rounded-xl border border-[#F97316]/40 bg-[#0C1120]/95 p-5 shadow-[0_0_20px_rgba(249,115,22,0.12)]">
                  <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[#F97316]">
                    <span className="h-2 w-2 rounded-full bg-[#F97316]" />
                    <span>MANDATORY 3-POINT LIVE/DEAD TEST PROTOCOL</span>
                  </div>
                  <p className="mt-2.5 font-sans text-[13.5px] leading-[1.7] text-[#CBD5E1]">
                    Before servicing solar pooling busbars, technicians must strictly follow the 3-point test: <strong>(1) Verify detector on known live source or self-test</strong>, <strong>(2) Test the target circuit to confirm zero voltage</strong>, and <strong>(3) Retest detector on known source</strong> to ensure instrument reliability.
                  </p>
                </div>
              </section>
            )}

            {/* Section 5: Condition Monitoring & Smart Grid */}
            {isResilientEnergyPost && (
              <section id="section-monitoring" className="space-y-5 pt-6 border-t border-white/[0.08]">
                <div className="space-y-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
                    PREDICTIVE DIAGNOSTICS &amp; SCADA
                  </span>
                  <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                    Condition Monitoring &amp; Smart Grid Integration
                  </h2>
                </div>
                <p className="font-sans text-[15px] leading-[1.8] text-[#CBD5E1]">
                  To manage variable clean power without unplanned interruptions, utilities are adopting predictive condition monitoring across generation, conversion, and storage nodes:
                </p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/[0.08] bg-[#0A0F1D] p-5">
                    <span className="font-mono text-[11px] font-bold uppercase text-[#A855F7]">
                      01. PARTIAL DISCHARGE DIAGNOSTICS
                    </span>
                    <p className="mt-2 font-sans text-[13px] leading-[1.65] text-[#CBD5E1]">
                      Acoustic and electrical PD sensors identify microscopic void breakdown in inverter transformers and gas-insulated switchgear before flashovers happen.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[0.08] bg-[#0A0F1D] p-5">
                    <span className="font-mono text-[11px] font-bold uppercase text-[#F97316]">
                      02. WIRELESS THERMAL TELEMETRY
                    </span>
                    <p className="mt-2 font-sans text-[13px] leading-[1.65] text-[#CBD5E1]">
                      Continuous surface temperature arrays monitor hot-spot formation across battery storage modules, busbar joints, and wind turbine nacelles.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Generic Handling for other blog articles */}
            {!isResilientEnergyPost &&
              post.sections.map((section, sIdx) => (
                <section key={sIdx} id={`section-${sIdx}`} className="space-y-5 pt-6 border-t border-white/[0.08]">
                  {section.heading && (
                    <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                      {section.heading}
                    </h2>
                  )}

                  {section.paragraphs.map((p, pIdx) => {
                    if (p.type === "list" && p.items) {
                      return (
                        <ul key={pIdx} className="my-4 space-y-3 pl-2">
                          {p.items.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-3 font-sans text-[14.5px] leading-[1.75] text-[#CBD5E1]">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    return (
                      <p key={pIdx} className="font-sans text-[15px] leading-[1.8] text-[#CBD5E1]">
                        {p.text}
                      </p>
                    );
                  })}
                </section>
              ))}

            {/* Article Footer Actions */}
            <div className="border-t border-white/[0.10] pt-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-md border border-white/[0.08] bg-[#0A0F1D] px-2.5 py-1 font-mono text-[11px] text-[#A855F7]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 font-mono text-[12px] font-bold text-[#F97316] hover:underline"
                >
                  <span>← BACK TO ALL ARTICLES</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ==========================================================
              STICKY SLIDING TABLE OF CONTENTS COLUMN (RIGHT — 4 COLS)
              self-stretch ensures aside spans the full article height!
              sticky top-1/2 -translate-y-1/2 keeps it vertically centered!
              ========================================================== */}
          <aside className="hidden lg:block lg:col-span-4 lg:self-stretch">
            <div className="sticky top-[110px] max-h-[calc(100vh-140px)] overflow-y-auto pl-2 space-y-6">
              {/* Numbered Catalogue-Index Style TOC */}
              <BlogTableOfContents
                items={tocItems}
                activeId={activeSection}
                onItemClick={handleTocClick}
              />

              {/* Technical Consultation Card */}
              <div className="rounded-2xl border border-[#A855F7]/30 bg-[#0A0F1D]/85 p-6 backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
                <div className="flex items-center gap-2 font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#A855F7]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
                  <span>TECHNICAL CONSULTATION</span>
                </div>
                <p className="mt-2 font-sans text-[13px] text-white leading-[1.5]">
                  Need certified testing kits or live-line safety apparatus for your grid evacuation project?
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-[#FB923C]/60 bg-gradient-to-r from-[#F97316] to-[#EA580C] py-2.5 font-sans text-[12px] font-bold text-white shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:scale-[1.02] transition-all"
                >
                  SPEAK WITH AN ENGINEER
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* 6. Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="relative z-10 w-full border-t border-white/[0.08] px-6 py-16 sm:px-10 lg:px-14 xl:px-20">
          <div className="mx-auto w-full max-w-[1240px]">
            <h2 className="font-heading text-2xl font-bold text-white">
              Related Technical Research
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.slug}
                  href={`/blog/${rPost.slug}`}
                  className="group rounded-2xl border border-white/[0.08] bg-[#0A0F1D]/80 p-6 transition-all duration-300 hover:border-[#A855F7]/40 hover:bg-[#0A0F1D]"
                >
                  <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#F97316]">
                    {rPost.category}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-white group-hover:text-[#F97316] transition-colors">
                    {rPost.title}
                  </h3>
                  <p className="mt-2 font-sans text-[13px] text-[#CBD5E1] line-clamp-2">
                    {rPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
