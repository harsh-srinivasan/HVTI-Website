"use client";

import React, { useEffect, useRef, useState } from "react";

/* ================================================================
   HOME — CUSTOM ENGINEERING & DIRECT INQUIRIES (CARD-FREE CANVAS)
   File: components/home/CustomEngineering.tsx

   - Seamlessly sits on the continuous canvas without boxed cards
   - Left side: 3 sleek, borderless capability pillars with refined typography
   - Right side: Generous glassmorphic consultation module
   - Fits comfortably in a single desktop viewport
   ================================================================ */

function useReveal(threshold = 0.25) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

const engineeringCapabilities = [
  {
    title: "Custom Testing Solutions",
    subtitle: "Tailored Test Benches & Consoles",
    description:
      "Automated testing bays, high-precision control consoles, and multi-tier safety interlocking engineered to exact utility and OEM specifications.",
    accent: "orange",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3L19 6V11C19 15.5 16.2 19.2 12 21C7.8 19.2 5 15.5 5 11V6L12 3Z" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export default function CustomEngineering() {
  const { ref: sectionRef, visible: isVisible } = useReveal(0.2);

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
        sm:py-14
        lg:min-h-screen
        lg:px-10
        lg:py-16
      "
    >
      {/* Background Subtle Violet Ambient Nebula */}
      <div
        className={`
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
              text-[26px]
              font-bold
              tracking-[-0.025em]
              text-white
              drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]
              sm:text-[32px]
              lg:text-[36px]
              transition-all
              duration-[1800ms]
              delay-[100ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
            `}
          >
            <span>Custom High-Voltage Solutions,</span>{" "}
            <span className="text-[#A855F7]">Engineered to Order</span>
          </h2>
        </div>

        {/* ========================================================
            2-COLUMN GRID (CARD-FREE CAPABILITIES + FORM)
            ======================================================== */}
        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16 xl:gap-24">
          {/* ======================================================
              LEFT COLUMN: CARD-FREE CAPABILITY PILLARS (5 Cols)
              ====================================================== */}
          <div className="flex flex-col justify-center space-y-6 lg:col-span-5">
            {engineeringCapabilities.map((item, index) => {
              const isOrange = item.accent === "orange";
              const isLast = index === engineeringCapabilities.length - 1;
              const delayClass =
                index === 0
                  ? "delay-[300ms]"
                  : index === 1
                  ? "delay-[450ms]"
                  : "delay-[600ms]";

              return (
                <div
                  key={item.title}
                  className={`
                    group
                    relative
                    flex
                    items-center
                    gap-4.5
                    transition-all
                    duration-[1800ms]
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

          {/* ======================================================
              RIGHT COLUMN: CARD-FREE TECHNICAL INQUIRY FORM (7 Cols)
              ====================================================== */}
          <div
            className={`
              relative
              flex
              flex-col
              justify-between
              transition-all
              duration-[1900ms]
              delay-[400ms]
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
            <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div>
                  <label className="block font-sans text-[11.5px] font-medium text-[#CBD5E1]">
                    Full Name <span className="text-[#F97316]">*</span>
                  </label>
                  <input
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
                      bg-[#0A0F1D]/75
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
                  <label className="block font-sans text-[11.5px] font-medium text-[#CBD5E1]">
                    Organization <span className="text-[#F97316]">*</span>
                  </label>
                  <input
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
                      bg-[#0A0F1D]/75
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
                  <label className="block font-sans text-[11.5px] font-medium text-[#CBD5E1]">
                    Official Email <span className="text-[#F97316]">*</span>
                  </label>
                  <input
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
                      bg-[#0A0F1D]/75
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
                  <label className="block font-sans text-[11.5px] font-medium text-[#CBD5E1]">
                    Phone Number
                  </label>
                  <input
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
                      bg-[#0A0F1D]/75
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
                <label className="block font-sans text-[11.5px] font-medium text-[#CBD5E1]">
                  Technical Requirement / Voltage Specifications <span className="text-[#F97316]">*</span>
                </label>
                <textarea
                  rows={2}
                  required
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
                    bg-[#0A0F1D]/75
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