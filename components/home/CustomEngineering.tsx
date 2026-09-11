"use client";

import React, { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ================================================================
   HOME — CUSTOM ENGINEERING & DIRECT INQUIRIES
   File: components/home/CustomEngineering.tsx

   - Mobile: Clean capability overview card + ergonomic glassmorphic consultation card
   - Desktop: 12-column architectural layout with capability pillars & form module
   - Zero hydration mismatch, clean responsive proportions
   ================================================================ */

const engineeringCapabilities = [
  {
    title: "Custom Testing Solutions",
    subtitle: "Tailored Test Benches & Consoles",
    description:
      "Automated testing bays, high-precision control consoles, and multi-tier safety interlocking engineered to exact utility and OEM specifications.",
    accent: "orange",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="sm:h-[22px] sm:w-[22px]">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 14L9.5 10L12 13L14.5 8L17 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Specialized HV Equipment",
    subtitle: "Up to 800 kV Engineering",
    description:
      "Custom voltage dividers, calibrated discharge systems, surge testers, and specialized proximity detectors designed for extreme industrial environments.",
    accent: "purple",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="sm:h-[22px] sm:w-[22px]">
        <path d="M13 2L5 13H11L10 22L19 10H13L13 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Condition Monitoring & Telemetry",
    subtitle: "Real-Time Diagnostic Systems",
    description:
      "Smart acoustic/thermal sensor arrays, fiber-optic isolation channels, and custom SCADA telemetry for predictive failure prevention.",
    accent: "purple",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="sm:h-[22px] sm:w-[22px]">
        <path d="M12 3L19 6V11C19 15.5 16.2 19.2 12 21C7.8 19.2 5 15.5 5 11V6L12 3Z" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export default function CustomEngineering() {
  const { ref: sectionRef, visible: isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "-40px 0px -40px 0px",
  });

  const [formState, setFormState] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    requirement: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", org: "", email: "", phone: "", requirement: "" });
    }, 4000);
  };

  return (
    <section
      id="custom-engineering"
      className="
        relative
        flex
        w-full
        flex-col
        justify-center
        overflow-hidden
        bg-transparent
        px-5
        py-12
        sm:px-8
        sm:py-16
        lg:min-h-screen
        lg:px-10
        lg:py-20
      "
    >
      {/* Background Subtle Violet Ambient Nebula */}
      <div
        className={`
          hidden
          lg:block
          pointer-events-none
          absolute
          right-[-100px]
          top-1/2
          h-[600px]
          w-[800px]
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),rgba(124,58,237,0.03)_50%,transparent_70%)]
          blur-[100px]
          transition-opacity
          duration-[3000ms]
          ease-out
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
        aria-hidden="true"
      />

      <div
        ref={sectionRef}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1300px]
        "
      >
        {/* ========================================================
            SECTION HEADER
            ======================================================== */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div
            className={`
              flex
              items-center
              gap-2.5
              transition-all
              duration-[1600ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
            `}
          >
            <span
              className={`
                h-[2px]
                bg-[#F97316]
                transition-all
                duration-[1400ms]
                delay-[150ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "w-7 opacity-100" : "w-0 opacity-0"}
              `}
            />
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
              Custom Engineering &amp; R&amp;D
            </span>
            <span
              className={`
                h-[2px]
                bg-[#F97316]
                transition-all
                duration-[1400ms]
                delay-[150ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "w-7 opacity-100" : "w-0 opacity-0"}
              `}
            />
          </div>

          {/* Heading */}
          <h2
            className={`
              mt-2.5
              font-heading
              text-[22px]
              font-bold
              tracking-[-0.025em]
              text-white
              drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]
              sm:text-[30px]
              lg:text-[36px]
              transition-all
              duration-500
              delay-75
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
            `}
          >
            <span>Custom High-Voltage Solutions,</span>{" "}
            <span className="text-[#A855F7]">Engineered to Order</span>
          </h2>

          <p
            className={`
              mt-2
              max-w-[620px]
              font-sans
              text-[12.5px]
              leading-relaxed
              text-[#94A3B8]
              sm:text-[14px]
              transition-all
              duration-500
              delay-100
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
            `}
          >
            Direct technical collaboration with HVTI senior engineers for custom voltage classes,
            automated test benches, and utility apparatus.
          </p>
        </div>

        {/* ========================================================
            MOBILE VIEW (lg:hidden): COMPACT PILLARS + INQUIRY CARD
            ======================================================== */}
        <div className="mt-8 block lg:hidden space-y-8">
          {/* Part 1: 3 Compact Capability Pillars (Structured Stack) */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0A0F1D]/75 p-4 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md space-y-3">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
              <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#A855F7]">
                Core Engineering Capabilities
              </span>
              <span className="font-mono text-[9px] font-semibold text-[#CBD5E1] bg-white/[0.06] px-2 py-0.5 rounded-full">
                Up to 800 kV
              </span>
            </div>

            {engineeringCapabilities.map((item, index) => {
              const isOrange = item.accent === "orange";
              const isLast = index === engineeringCapabilities.length - 1;
              return (
                <div
                  key={`mob-cap-${item.title}`}
                  className={`flex items-center gap-3.5 ${!isLast ? "border-b border-white/[0.05] pb-3" : ""}`}
                >
                  <div
                    className={`
                      flex
                      h-[36px]
                      w-[36px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      ${
                        isOrange
                          ? "border-[#F97316]/50 bg-[#F97316]/10 text-[#F97316]"
                          : "border-[#A855F7]/50 bg-[#A855F7]/10 text-[#A855F7]"
                      }
                    `}
                  >
                    {item.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="font-heading text-[13.5px] font-bold text-white truncate">
                        {item.title}
                      </h3>
                      <span className="font-mono text-[9px] font-semibold text-[#64748B] shrink-0">
                        0{index + 1}
                      </span>
                    </div>
                    <span className="mt-0.5 block font-mono text-[9.5px] font-semibold uppercase tracking-wider text-[#A855F7]">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Part 2: Ergonomic Glassmorphic Inquiry Card */}
          <div className="rounded-2xl border border-white/[0.10] bg-[#0A0F1D]/90 p-4.5 shadow-[0_12px_36px_rgba(0,0,0,0.5)] backdrop-blur-md">
            {/* Header */}
            <div className="flex flex-col gap-1 border-b border-white/[0.08] pb-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="font-mono text-[9.5px] font-bold uppercase tracking-[0.14em] text-[#A855F7]">
                  Direct Technical Inquiries
                </span>
                <h3 className="font-heading text-[17px] font-bold text-white sm:text-[19px]">
                  Request Custom Specifications
                </h3>
              </div>

              {/* Status Badge */}
              <div className="mt-1 sm:mt-0 flex items-center gap-1.5 self-start rounded-full border border-[#F97316]/30 bg-[#F97316]/10 px-2.5 py-0.5 font-mono text-[9.5px] font-semibold text-[#FB923C]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F97316]" />
                <span>Senior Engineer Response</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-3.5 space-y-3" suppressHydrationWarning>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="mob-eng-name" className="block font-sans text-[11px] font-medium text-[#CBD5E1]">
                    Full Name <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    id="mob-eng-name"
                    name="name"
                    autoComplete="name"
                    suppressHydrationWarning
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Rajesh Kumar"
                    className="
                      mt-1
                      h-[40px]
                      w-full
                      rounded-xl
                      border
                      border-white/[0.10]
                      bg-[#05070D]/80
                      px-3
                      font-sans
                      text-[12.5px]
                      text-white
                      placeholder:text-[#64748B]
                      outline-none
                      transition-all
                      duration-200
                      focus:border-[#A855F7]/70
                      focus:bg-[#03050A]
                    "
                  />
                </div>

                <div>
                  <label htmlFor="mob-eng-org" className="block font-sans text-[11px] font-medium text-[#CBD5E1]">
                    Organization <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    id="mob-eng-org"
                    name="organization"
                    autoComplete="organization"
                    suppressHydrationWarning
                    type="text"
                    required
                    value={formState.org}
                    onChange={(e) => setFormState({ ...formState, org: e.target.value })}
                    placeholder="e.g. Tata Power / NTPC"
                    className="
                      mt-1
                      h-[40px]
                      w-full
                      rounded-xl
                      border
                      border-white/[0.10]
                      bg-[#05070D]/80
                      px-3
                      font-sans
                      text-[12.5px]
                      text-white
                      placeholder:text-[#64748B]
                      outline-none
                      transition-all
                      duration-200
                      focus:border-[#A855F7]/70
                      focus:bg-[#03050A]
                    "
                  />
                </div>

                <div>
                  <label htmlFor="mob-eng-email" className="block font-sans text-[11px] font-medium text-[#CBD5E1]">
                    Official Email <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    id="mob-eng-email"
                    name="email"
                    autoComplete="email"
                    suppressHydrationWarning
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@company.com"
                    className="
                      mt-1
                      h-[40px]
                      w-full
                      rounded-xl
                      border
                      border-white/[0.10]
                      bg-[#05070D]/80
                      px-3
                      font-sans
                      text-[12.5px]
                      text-white
                      placeholder:text-[#64748B]
                      outline-none
                      transition-all
                      duration-200
                      focus:border-[#A855F7]/70
                      focus:bg-[#03050A]
                    "
                  />
                </div>

                <div>
                  <label htmlFor="mob-eng-phone" className="block font-sans text-[11px] font-medium text-[#CBD5E1]">
                    Phone Number
                  </label>
                  <input
                    id="mob-eng-phone"
                    name="phone"
                    autoComplete="tel"
                    suppressHydrationWarning
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="
                      mt-1
                      h-[40px]
                      w-full
                      rounded-xl
                      border
                      border-white/[0.10]
                      bg-[#05070D]/80
                      px-3
                      font-sans
                      text-[12.5px]
                      text-white
                      placeholder:text-[#64748B]
                      outline-none
                      transition-all
                      duration-200
                      focus:border-[#A855F7]/70
                      focus:bg-[#03050A]
                    "
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mob-eng-requirement" className="block font-sans text-[11px] font-medium text-[#CBD5E1]">
                  Technical Requirement / Voltage Specifications <span className="text-[#F97316]">*</span>
                </label>
                <textarea
                  id="mob-eng-requirement"
                  name="requirement"
                  rows={2}
                  required
                  suppressHydrationWarning
                  value={formState.requirement}
                  onChange={(e) => setFormState({ ...formState, requirement: e.target.value })}
                  placeholder="Describe voltage class (e.g. 33kV, 400kV, 800kV), testing requirements, and timeline..."
                  className="
                    mt-1
                    h-[68px]
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/[0.10]
                    bg-[#05070D]/80
                    px-3
                    py-2
                    font-sans
                    text-[12.5px]
                    leading-relaxed
                    text-white
                    placeholder:text-[#64748B]
                    outline-none
                    transition-all
                    duration-200
                    focus:border-[#A855F7]/70
                    focus:bg-[#03050A]
                  "
                />
              </div>

              <div className="pt-1 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-sans text-[10.5px] text-[#64748B]">
                  🔒 Direct confidential communication with HVTI engineering.
                </p>

                {/* Capsule CTA Button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="
                    group
                    inline-flex
                    h-[42px]
                    w-full
                    sm:w-auto
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-[#FB923C]/50
                    bg-gradient-to-r
                    from-[#F97316]
                    via-[#EA580C]
                    to-[#C2410C]
                    px-6
                    font-sans
                    text-[11.5px]
                    font-bold
                    tracking-wide
                    text-white
                    shadow-[0_0_20px_rgba(249,115,22,0.32)]
                    transition-all
                    duration-300
                    hover:border-[#FB923C]
                    hover:shadow-[0_0_28px_rgba(249,115,22,0.55)]
                    active:scale-[0.98]
                    disabled:opacity-75
                  "
                >
                  {submitted ? (
                    <span className="text-[#FFFFFF]">✓ Specifications Sent</span>
                  ) : (
                    <>
                      <span>SUBMIT SPECIFICATIONS</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ========================================================
            DESKTOP VIEW (hidden lg:grid): 12-COL GRID
            ======================================================== */}
        <div className="mt-12 hidden lg:grid lg:grid-cols-12 lg:gap-16 xl:gap-20 items-center">
          {/* LEFT COLUMN: Capability Pillars (5 Cols) */}
          <div className="flex flex-col justify-center space-y-6 lg:col-span-5">
            {engineeringCapabilities.map((item, index) => {
              const isOrange = item.accent === "orange";
              const isLast = index === engineeringCapabilities.length - 1;
              const delayClass =
                index === 0
                  ? "delay-[50ms]"
                  : index === 1
                  ? "delay-[100ms]"
                  : "delay-[150ms]";

              return (
                <div
                  key={`desk-cap-${item.title}`}
                  className={`
                    group
                    relative
                    flex
                    items-center
                    gap-4.5
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${!isLast ? "border-b border-white/[0.07] pb-6" : ""}
                    ${delayClass}
                    ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                  `}
                >
                  {/* Icon Container */}
                  <div
                    className={`
                      flex
                      h-[48px]
                      w-[48px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      transition-all
                      duration-300
                      group-hover:scale-105
                      ${
                        isOrange
                          ? "border-[#F97316]/50 bg-[#F97316]/10 text-[#F97316] group-hover:border-[#F97316] group-hover:shadow-[0_0_16px_rgba(249,115,22,0.25)]"
                          : "border-[#A855F7]/50 bg-[#A855F7]/10 text-[#A855F7] group-hover:border-[#A855F7] group-hover:shadow-[0_0_16px_rgba(168,85,247,0.25)]"
                      }
                    `}
                  >
                    {item.icon}
                  </div>

                  {/* Content (Headings Only) */}
                  <div className="flex-1">
                    <h3 className="font-heading text-[17px] font-bold text-white transition-colors duration-200 sm:text-[18px]">
                      {item.title}
                    </h3>

                    <span className="mt-1 block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#A855F7]">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Technical Inquiry Card (7 Cols) */}
          <div
            className={`
              relative
              flex
              flex-col
              justify-between
              rounded-2xl
              border
              border-white/[0.10]
              bg-[#0A0F1D]/85
              p-6
              shadow-[0_12px_36px_rgba(0,0,0,0.5)]
              backdrop-blur-md
              transition-all
              duration-500
              delay-100
              ease-[cubic-bezier(0.16,1,0.3,1)]
              lg:col-span-7
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
            `}
          >
            {/* Form Top Accent */}
            <div className="flex flex-col gap-1 border-b border-white/[0.08] pb-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#A855F7]">
                  Direct Technical Inquiries
                </span>
                <h3 className="font-heading text-[18px] font-bold text-white sm:text-[20px]">
                  Request Custom Specifications
                </h3>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-1.5 self-start rounded-full border border-[#F97316]/30 bg-[#F97316]/10 px-3 py-0.5 font-mono text-[10.5px] font-semibold text-[#FB923C] sm:self-auto">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F97316]" />
                <span>Senior Engineer Response</span>
              </div>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="mt-4 space-y-3.5" suppressHydrationWarning>
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div>
                  <label htmlFor="desk-eng-name" className="block font-sans text-[11.5px] font-medium text-[#CBD5E1]">
                    Full Name <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    id="desk-eng-name"
                    name="name"
                    autoComplete="name"
                    suppressHydrationWarning
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Rajesh Kumar"
                    className="
                      mt-1
                      h-[44px]
                      w-full
                      rounded-xl
                      border
                      border-white/[0.12]
                      bg-[#05070D]/80
                      px-3.5
                      font-sans
                      text-[13px]
                      text-white
                      placeholder:text-[#64748B]
                      outline-none
                      transition-all
                      duration-200
                      focus:border-[#A855F7]/70
                      focus:bg-[#03050A]
                    "
                  />
                </div>

                <div>
                  <label htmlFor="desk-eng-org" className="block font-sans text-[11.5px] font-medium text-[#CBD5E1]">
                    Organization <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    id="desk-eng-org"
                    name="organization"
                    autoComplete="organization"
                    suppressHydrationWarning
                    type="text"
                    required
                    value={formState.org}
                    onChange={(e) => setFormState({ ...formState, org: e.target.value })}
                    placeholder="e.g. Tata Power / NTPC"
                    className="
                      mt-1
                      h-[44px]
                      w-full
                      rounded-xl
                      border
                      border-white/[0.12]
                      bg-[#05070D]/80
                      px-3.5
                      font-sans
                      text-[13px]
                      text-white
                      placeholder:text-[#64748B]
                      outline-none
                      transition-all
                      duration-200
                      focus:border-[#A855F7]/70
                      focus:bg-[#03050A]
                    "
                  />
                </div>

                <div>
                  <label htmlFor="desk-eng-email" className="block font-sans text-[11.5px] font-medium text-[#CBD5E1]">
                    Official Email <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    id="desk-eng-email"
                    name="email"
                    autoComplete="email"
                    suppressHydrationWarning
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@company.com"
                    className="
                      mt-1
                      h-[44px]
                      w-full
                      rounded-xl
                      border
                      border-white/[0.12]
                      bg-[#05070D]/80
                      px-3.5
                      font-sans
                      text-[13px]
                      text-white
                      placeholder:text-[#64748B]
                      outline-none
                      transition-all
                      duration-200
                      focus:border-[#A855F7]/70
                      focus:bg-[#03050A]
                    "
                  />
                </div>

                <div>
                  <label htmlFor="desk-eng-phone" className="block font-sans text-[11.5px] font-medium text-[#CBD5E1]">
                    Phone Number
                  </label>
                  <input
                    id="desk-eng-phone"
                    name="phone"
                    autoComplete="tel"
                    suppressHydrationWarning
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="
                      mt-1
                      h-[44px]
                      w-full
                      rounded-xl
                      border
                      border-white/[0.12]
                      bg-[#05070D]/80
                      px-3.5
                      font-sans
                      text-[13px]
                      text-white
                      placeholder:text-[#64748B]
                      outline-none
                      transition-all
                      duration-200
                      focus:border-[#A855F7]/70
                      focus:bg-[#03050A]
                    "
                  />
                </div>
              </div>

              <div>
                <label htmlFor="desk-eng-requirement" className="block font-sans text-[11.5px] font-medium text-[#CBD5E1]">
                  Technical Requirement / Voltage Specifications <span className="text-[#F97316]">*</span>
                </label>
                <textarea
                  id="desk-eng-requirement"
                  name="requirement"
                  rows={2}
                  required
                  suppressHydrationWarning
                  value={formState.requirement}
                  onChange={(e) => setFormState({ ...formState, requirement: e.target.value })}
                  placeholder="Describe voltage class (e.g. 33kV, 400kV, 800kV), testing requirements, and project timeline..."
                  className="
                    mt-1
                    h-[76px]
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/[0.12]
                    bg-[#05070D]/80
                    px-3.5
                    py-2.5
                    font-sans
                    text-[13px]
                    leading-relaxed
                    text-white
                    placeholder:text-[#64748B]
                    outline-none
                    transition-all
                    duration-200
                    focus:border-[#A855F7]/70
                    focus:bg-[#03050A]
                  "
                />
              </div>

              <div className="pt-1.5 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="font-sans text-[11px] text-[#64748B]">
                  🔒 Direct confidential communication with HVTI engineering.
                </p>

                {/* Capsule CTA Button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="
                    group
                    inline-flex
                    h-[46px]
                    w-full
                    sm:w-auto
                    items-center
                    justify-center
                    gap-2.5
                    rounded-full
                    border
                    border-[#FB923C]/50
                    bg-gradient-to-r
                    from-[#F97316]
                    via-[#EA580C]
                    to-[#C2410C]
                    px-7
                    font-sans
                    text-[12px]
                    font-bold
                    tracking-wide
                    text-white
                    shadow-[0_0_22px_rgba(249,115,22,0.32)]
                    transition-all
                    duration-300
                    hover:border-[#FB923C]
                    hover:shadow-[0_0_32px_rgba(249,115,22,0.55)]
                    hover:scale-[1.02]
                    active:scale-[0.98]
                    disabled:opacity-75
                  "
                >
                  {submitted ? (
                    <span className="text-[#FFFFFF]">✓ Specifications Sent</span>
                  ) : (
                    <>
                      <span>SUBMIT SPECIFICATIONS</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}