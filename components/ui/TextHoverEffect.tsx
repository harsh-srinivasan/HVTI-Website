"use client";

import React, { useRef, useEffect, useState, useId } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/* ================================================================
   HVTI TEXT HOVER EFFECT (Aceternity UI Customization)
   File: components/ui/TextHoverEffect.tsx

   - Tailored to HVTI Brand: Deep Purple (#7C3AED), Electric Violet (#A855F7),
     and High-Voltage Safety Orange (#F97316 / #FB923C).
   - Resets automatically when scrolling out of view (upwards) or on page change.
   - High viewport trigger threshold: triggers only when directly in view.
   - Slower, cinematic stroke drawing with cubic-bezier easing ([0.16, 1, 0.3, 1]).
   - Fluid spotlight radial mask tracking cursor movement.
   ================================================================ */

export const TextHoverEffect = ({
  text = "HVTI",
  duration = 0.5,
  viewportAmount = 0.6,
  viewportMargin = "0px 0px -80px 0px",
  once = false,
  className,
}: {
  text?: string;
  duration?: number;
  viewportAmount?: number | "some" | "all";
  viewportMargin?: string;
  once?: boolean;
  automatic?: boolean;
  className?: string;
}) => {
  const rawId = useId();
  const uniqueId = rawId.replace(/[^a-zA-Z0-9-_]/g, "");
  const gradientId = `hvtiTextGradient-${uniqueId}`;
  const maskGradientId = `hvtiRevealMask-${uniqueId}`;
  const maskId = `hvtiTextMask-${uniqueId}`;

  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      if (svgRect.width > 0 && svgRect.height > 0) {
        const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
        const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
        setMaskPosition({
          cx: `${cxPercentage}%`,
          cy: `${cyPercentage}%`,
        });
      }
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setCursor({ x: null, y: null });
        setMaskPosition({ cx: "50%", cy: "50%" });
      }}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer block overflow-visible", className)}
    >
      <defs>
        {/* HVTI Electric Energy Spectrum (Deep Purple -> Electric Violet -> Lavender Spark -> Amber -> Safety Orange) */}
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="22%" stopColor="#A855F7" />
          <stop offset="48%" stopColor="#E9D5FF" />
          <stop offset="72%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>

        {/* Dynamic Spotlight Radial Mask with Silky Easing */}
        <motion.radialGradient
          id={maskGradientId}
          gradientUnits="userSpaceOnUse"
          r="28%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{
            duration: duration ?? 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="65%" stopColor="white" stopOpacity="0.85" />
          <stop offset="100%" stopColor="black" stopOpacity="0" />
        </motion.radialGradient>

        <mask id={maskId}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#${maskGradientId})`}
          />
        </mask>
      </defs>

      {/* Layer 1: Resting ambient wireframe outline (subtle glow on hover) */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-white/[0.08] font-sans text-7xl font-bold tracking-[0.05em] transition-opacity duration-700 ease-out"
        style={{ opacity: hovered ? 0.75 : 0 }}
      >
        {text}
      </text>

      {/* Layer 2: Slow, Ultra-Smooth In-Viewport Sketching Stroke (Resets when scrolled up out of view or route changed) */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.35"
        className="fill-transparent stroke-[#7C3AED] font-sans text-7xl font-bold tracking-[0.05em] dark:stroke-[#A855F7]/85"
        initial={{
          strokeDashoffset: 1000,
          strokeDasharray: 1000,
          opacity: 0,
        }}
        whileInView={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
          opacity: 1,
        }}
        viewport={{
          once: once,
          amount: viewportAmount ?? 0.6,
          margin: (viewportMargin as any) ?? "0px 0px -80px 0px",
        }}
        transition={{
          strokeDashoffset: {
            duration: 6.2,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2,
          },
          opacity: {
            duration: 1.8,
            ease: "easeOut",
            delay: 0.15,
          },
        }}
      >
        {text}
      </motion.text>

      {/* Layer 3: Interactive Plasma Spotlight Gradient (Revealed on Cursor Hover) */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke={`url(#${gradientId})`}
        strokeWidth="0.38"
        mask={`url(#${maskId})`}
        className="fill-transparent font-sans text-7xl font-bold tracking-[0.05em] transition-all duration-300"
        style={{
          filter: hovered
            ? "drop-shadow(0 0 16px rgba(168, 85, 247, 0.65))"
            : "none",
        }}
      >
        {text}
      </text>
    </svg>
  );
};

/* ================================================================
   HVTI FOOTER BACKGROUND GRADIENT
   ================================================================ */
export const FooterBackgroundGradient = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
    >
      {/* Deep Industrial Radial Halo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, rgba(5, 7, 13, 0.7) 40%, rgba(124, 58, 237, 0.08) 75%, rgba(249, 115, 22, 0.05) 100%)",
        }}
      />

      {/* Subtle Corner Ambient Glows */}
      <div
        className="absolute -left-[120px] bottom-0 h-[400px] w-[400px] rounded-full blur-[90px]"
        style={{
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -right-[120px] top-0 h-[400px] w-[400px] rounded-full blur-[90px]"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.07) 0%, transparent 70%)",
        }}
      />
    </div>
  );
};
