"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

interface PageTransitionProviderProps {
  children: React.ReactNode;
}

/* ================================================================
   HVTI MASTER LUXURY CINEMATIC PAGE TRANSITION SYSTEM
   File: components/providers/PageTransitionProvider.tsx

   A deliberate, ultra-premium cinematic dark veil transition:
   1. Departure: Screen gracefully dims to obsidian #05070D over 380ms
   2. Intermission: Subtle glowing HVTI emblem & ambient electrical aura
   3. Arrival: Seamlessly unveils the new page over 650ms with luxury easing
   ================================================================ */

export default function PageTransitionProvider({
  children,
}: PageTransitionProviderProps) {
  const pathname = usePathname();
  const router = useRouter();

  // "idle" | "darkening" | "holding" | "revealing"
  const [transitionState, setTransitionState] = useState<
    "idle" | "darkening" | "holding" | "revealing"
  >("idle");

  const pendingRouteRef = useRef<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const prevPathnameRef = useRef<string>(pathname);

  // Clear any active timeouts safely
  const clearActiveTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Handle route change completion (when Next.js commits new pathname)
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;

      // Brief luxury pause to allow the new page DOM to stabilize
      setTransitionState("holding");
      clearActiveTimeout();

      timeoutRef.current = setTimeout(() => {
        // Start the smooth 920ms reveal dissolve
        setTransitionState("revealing");

        timeoutRef.current = setTimeout(() => {
          setTransitionState("idle");
          pendingRouteRef.current = null;
        }, 920);
      }, 220);
    }

    return () => clearActiveTimeout();
  }, [pathname, clearActiveTimeout]);

  // Handle browser back/forward buttons (popstate)
  useEffect(() => {
    const handlePopState = () => {
      setTransitionState("darkening");
      clearActiveTimeout();

      timeoutRef.current = setTimeout(() => {
        setTransitionState("revealing");
        timeoutRef.current = setTimeout(() => {
          setTransitionState("idle");
        }, 920);
      }, 500);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [clearActiveTimeout]);

  // Intercept internal link clicks for the cinematic departure transition
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      // Ignore clicks with modifier keys (new tab, new window, etc.)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
        return;
      }

      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      // Ignore if explicitly marked to bypass transition
      if (target.hasAttribute("data-no-transition")) return;
      if (target.getAttribute("target") === "_blank") return;
      if (target.getAttribute("download") !== null) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore in-page hash links, mailto, tel, or javascript:
      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:")
      ) {
        return;
      }

      // Check if external domain
      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;

        // Ignore if clicking link to current page
        if (url.pathname === window.location.pathname && url.search === window.location.search) {
          if (!url.hash) {
            e.preventDefault();
          }
          return;
        }

        // Valid internal route transition!
        e.preventDefault();
        pendingRouteRef.current = href;

        // 1. Start smooth darkening (520ms)
        setTransitionState("darkening");
        clearActiveTimeout();

        // 2. After darkening has comfortably enveloped the screen, execute route change
        timeoutRef.current = setTimeout(() => {
          router.push(href);

          // Safety fallback: if router takes longer than 2.5s, auto-reveal
          timeoutRef.current = setTimeout(() => {
            setTransitionState("idle");
          }, 2500);
        }, 480);
      } catch {
        // Fallback for invalid URLs
      }
    };

    document.addEventListener("click", handleLinkClick, true);
    return () => {
      document.removeEventListener("click", handleLinkClick, true);
      clearActiveTimeout();
    };
  }, [router, clearActiveTimeout]);

  const isCurtainVisible =
    transitionState === "darkening" ||
    transitionState === "holding" ||
    transitionState === "revealing";

  const isCurtainOpaque =
    transitionState === "darkening" || transitionState === "holding";

  return (
    <>
      {/* ============================================================
          CINEMATIC DARK OBSIDIAN TRANSITION VEIL
          ============================================================ */}
      <div
        className={`
          fixed
          inset-0
          z-[9999]
          bg-[#05070D]
          transition-opacity
          [transform:translateZ(0)]
          ${
            isCurtainOpaque
              ? "pointer-events-auto opacity-100 duration-[520ms] ease-[cubic-bezier(0.32,1,0.23,1)]"
              : isCurtainVisible
              ? "pointer-events-none opacity-0 duration-[920ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              : "pointer-events-none opacity-0"
          }
        `}
        aria-hidden="true"
      >
        {/* Top Edge High-Voltage Shimmering Energy Beam */}
        <div
          className={`
            absolute
            left-0
            top-0
            h-[2.5px]
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#F97316]
            to-[#A855F7]
            shadow-[0_0_16px_rgba(249,115,22,0.9),0_0_28px_rgba(168,85,247,0.6)]
            transition-opacity
            duration-300
            ${isCurtainVisible ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* Center Faint Ambient Violet Glow Pulse */}
        <div
          className={`
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.09)_0%,rgba(124,58,237,0.03)_40%,transparent_70%)]
            transition-all
            duration-700
            ${isCurtainOpaque ? "scale-100 opacity-100" : "scale-90 opacity-0"}
          `}
        />

        {/* Center Glowing Minimalist Brand Insignia */}
        <div
          className={`
            absolute
            left-1/2
            top-1/2
            flex
            -translate-x-1/2
            -translate-y-1/2
            flex-col
            items-center
            justify-center
            gap-3
            transition-all
            duration-700
            ease-out
            ${
              isCurtainOpaque
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0"
            }
          `}
        >
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.12] bg-[#0A0F1D]/90 p-2.5 shadow-[0_0_35px_rgba(168,85,247,0.30)] backdrop-blur-xl">
            <img
              src="/images/brand/hvti-logo.png"
              alt="HVTI"
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.25em] text-[#CBD5E1]">
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#F97316]" />
            <span className="bg-gradient-to-r from-white via-[#CBD5E1] to-[#A855F7] bg-clip-text text-transparent">
              HVTI
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================
          PAGE CONTENT WRAPPER WITH SMOOTH LUXURY REVEAL
          ============================================================ */}
      <div key={pathname} className="animate-page-enter">
        {children}
      </div>
    </>
  );
}

