"use client";

import React, { useState } from "react";

/* ================================================================
   HVTI BLOG — COMPACT NEWSLETTER BULLETIN SIGNUP
   File: components/blog/BlogNewsletter.tsx
   ================================================================ */

export default function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative z-10 w-full px-6 py-8 sm:px-10 sm:py-10 lg:px-14 xl:px-20">
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[720px]
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.10]
          bg-[#0A0F1D]/85
          p-5
          text-center
          shadow-[0_12px_32px_rgba(0,0,0,0.6),0_0_24px_rgba(168,85,247,0.10)]
          backdrop-blur-md
          sm:p-6
        "
      >
        {/* Ambient Radial Glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-40
            w-[320px]
            -translate-x-1/2
            rounded-full
            bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.16),transparent_70%)]
            blur-[40px]
          "
        />

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2">
          <span className="h-[1.5px] w-4 bg-[#F97316]" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.20em] text-[#F97316]">
            TECHNICAL BULLETIN
          </span>
          <span className="h-[1.5px] w-4 bg-[#F97316]" />
        </div>

        {/* Heading */}
        <h2 className="mt-2 font-heading text-lg font-bold tracking-[-0.02em] text-white sm:text-xl lg:text-[22px]">
          Subscribe to High-Voltage Research &amp; Standards
        </h2>

        {/* Description */}
        <p className="mx-auto mt-2 max-w-[540px] font-sans text-[12.5px] leading-[1.6] text-[#CBD5E1] sm:text-[13px]">
          Join utility engineers, substation managers, and electrical safety officers receiving
          quarterly whitepapers, case studies, and IEC/IS testing standard breakdowns.
        </p>

        {/* Form */}
        {submitted ? (
          <div className="mt-5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-5 py-2 font-mono text-[11.5px] text-emerald-400">
            ✓ Thank you for subscribing to HVTI Technical Insights.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-5 flex max-w-[440px] flex-col gap-2.5 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter corporate email..."
              className="
                w-full
                rounded-full
                border
                border-white/[0.15]
                bg-[#05070D]/80
                px-4
                py-2
                font-sans
                text-[12px]
                text-white
                placeholder-[#64748B]
                focus:border-[#A855F7]
                focus:outline-none
              "
            />
            <button
              type="submit"
              className="
                shrink-0
                rounded-full
                border
                border-[#FB923C]/60
                bg-gradient-to-r
                from-[#F97316]
                to-[#EA580C]
                px-5
                py-2
                font-sans
                text-[11.5px]
                font-bold
                tracking-[0.04em]
                text-white
                shadow-[0_0_15px_rgba(249,115,22,0.30)]
                transition-all
                hover:scale-[1.02]
              "
            >
              SUBSCRIBE
            </button>
          </form>
        )}

        {/* Trust Note */}
        <p className="mt-3.5 font-mono text-[9.5px] text-[#64748B]">
          No spam • Unsubscribe anytime • Curated by HVTI R&amp;D
        </p>
      </div>
    </section>
  );
}
