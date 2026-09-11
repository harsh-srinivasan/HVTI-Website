"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Universal high-performance Scroll Reveal Hook
 * Optimized with eager rootMargin (140px bottom lead) to ensure animations
 * trigger smoothly BEFORE or instantly AS elements enter the viewport,
 * eliminating blank scrolling delays on mobile and desktop.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.05,
  rootMargin = "120px 0px 80px 0px",
  once = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback for environments where IntersectionObserver might not be available
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return { ref, visible };
}

export default useScrollReveal;

