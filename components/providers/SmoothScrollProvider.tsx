"use client";

import React, { useEffect, useRef, createContext, useContext, useCallback } from "react";
import { ReactLenis, LenisRef } from "lenis/react";
import { usePathname } from "next/navigation";

interface SmoothScrollContextValue {
  scrollTo: (
    target: string | HTMLElement | number,
    options?: {
      offset?: number;
      duration?: number;
      immediate?: boolean;
      lock?: boolean;
      onComplete?: () => void;
    }
  ) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  const lenisRef = useRef<LenisRef>(null);
  const pathname = usePathname();

  // Programmatic scroll helper accessible via context or global events
  const scrollTo = useCallback(
    (
      target: string | HTMLElement | number,
      options?: {
        offset?: number;
        duration?: number;
        immediate?: boolean;
        lock?: boolean;
        onComplete?: () => void;
      }
    ) => {
      const lenis = lenisRef.current?.lenis;
      if (!lenis) {
        // Native fallback
        if (typeof target === "number") {
          window.scrollTo({ top: target, behavior: options?.immediate ? "instant" : "smooth" });
        } else if (typeof target === "string") {
          const el = document.querySelector(target);
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY + (options?.offset ?? -85);
            window.scrollTo({ top, behavior: options?.immediate ? "instant" : "smooth" });
          }
        } else if (target instanceof HTMLElement) {
          const top = target.getBoundingClientRect().top + window.scrollY + (options?.offset ?? -85);
          window.scrollTo({ top, behavior: options?.immediate ? "instant" : "smooth" });
        }
        return;
      }

      lenis.scrollTo(target, {
        offset: options?.offset ?? -85,
        duration: options?.duration ?? 1.15,
        immediate: options?.immediate ?? false,
        lock: options?.lock ?? false,
        onComplete: options?.onComplete,
      });
    },
    []
  );

  // 1. Reset scroll to top instantly & recalculate limits upon route navigation
  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Stepwise resize calls to accommodate Next.js layout mounting and image loads
    const t1 = setTimeout(() => lenisRef.current?.lenis?.resize(), 60);
    const t2 = setTimeout(() => lenisRef.current?.lenis?.resize(), 280);
    const t3 = setTimeout(() => lenisRef.current?.lenis?.resize(), 750);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  // 2. Dynamic ResizeObserver: keeps Lenis limits in sync with DOM mutations & accordions
  useEffect(() => {
    if (typeof window === "undefined" || !("ResizeObserver" in window)) return;

    let resizeTimer: NodeJS.Timeout | null = null;
    const observer = new ResizeObserver(() => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        lenisRef.current?.lenis?.resize();
      }, 50);
    });

    observer.observe(document.body);
    return () => {
      observer.disconnect();
      if (resizeTimer) clearTimeout(resizeTimer);
    };
  }, []);

  // 3. Handle smooth scrolling for in-page hash/anchor links (#facilities, #overview, etc.)
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;

      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        scrollTo(element as HTMLElement, {
          offset: -85,
          duration: 1.15,
        });
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, [scrollTo]);

  // 4. Listen to global custom smooth-scroll events
  useEffect(() => {
    const handleCustomScroll = (e: Event) => {
      const customEvent = e as CustomEvent<{
        target: string | HTMLElement | number;
        offset?: number;
        duration?: number;
        immediate?: boolean;
      }>;
      if (customEvent.detail?.target !== undefined) {
        scrollTo(customEvent.detail.target, customEvent.detail);
      }
    };

    window.addEventListener("hvti-scroll-to", handleCustomScroll);
    return () => window.removeEventListener("hvti-scroll-to", handleCustomScroll);
  }, [scrollTo]);

  return (
    <SmoothScrollContext.Provider value={{ scrollTo }}>
      <ReactLenis
        ref={lenisRef}
        root
        options={{
          duration: 1.15, // Luxury fluid momentum
          smoothWheel: true,
          wheelMultiplier: 1.0, // Natural 1:1 wheel & trackpad response
          touchMultiplier: 1.2,
          syncTouch: false, // Clean native touch momentum on mobile
          autoResize: true,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential luxury deceleration curve
          prevent: (node) => {
            if (!node || node.nodeType !== 1) return false;
            const el = node as HTMLElement;
            // Only isolate scrolling if an element or its ancestor explicitly requires it AND is scrollable
            const preventEl = el.closest("[data-lenis-prevent], .lenis-prevent") as HTMLElement | null;
            if (preventEl) {
              return preventEl.scrollHeight > preventEl.clientHeight;
            }
            return false;
          },
        }}
      >
        {children}
      </ReactLenis>
    </SmoothScrollContext.Provider>
  );
}
