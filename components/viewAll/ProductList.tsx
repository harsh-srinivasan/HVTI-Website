"use client";

import React, { useEffect, useState, useCallback } from "react";
import { CategoryProduct } from "@/types/category";
import Product from "./Product";
import ProductNavigation from "./ProductNavigation";

/* ================================================================
   VIEW ALL — PRODUCT LIST WITH STICKY SCROLL-TRACKING NAVIGATION
   File: components/viewAll/ProductList.tsx

   - Aside self-stretches across the full height of the products column
   - Sticky container floats down with scroll (top-[120px])
   - Real-time scroll calculation tracks the active product
   ================================================================ */

export default function ProductList({
  products,
}: {
  products: CategoryProduct[];
}) {
  const [activeId, setActiveId] = useState<string>(products[0]?.id ?? "");

  /*
   * High-precision real-time scroll tracking
   */
  const updateActiveSection = useCallback(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-product-section]");
    if (!sections.length) return;

    const targetLine = window.innerHeight * 0.35; // 35% from top of viewport
    let currentId = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= targetLine && rect.bottom > targetLine) {
        currentId = section.getAttribute("data-product-id") || "";
      }
    });

    // Fallback if before first or after last
    if (!currentId) {
      const firstRect = sections[0].getBoundingClientRect();
      if (firstRect.top > targetLine) {
        currentId = sections[0].getAttribute("data-product-id") || "";
      } else {
        const lastSection = sections[sections.length - 1];
        const lastRect = lastSection.getBoundingClientRect();
        if (lastRect.bottom <= targetLine) {
          currentId = lastSection.getAttribute("data-product-id") || "";
        }
      }
    }

    if (currentId && currentId !== activeId) {
      setActiveId(currentId);
    }
  }, [activeId]);

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

  const navItems = products.map((p) => ({
    id: p.id,
    title: p.title,
  }));

  const handleItemClick = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(`product-${id}`);
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

  return (
    <section
      id="products"
      className="
        relative
        z-10
        w-full
        px-6
        py-12
        sm:px-10
        sm:py-16
        lg:px-14
        lg:py-20
        xl:px-20
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1540px]
          grid-cols-1
          lg:grid-cols-[280px_minmax(0,1fr)]
          lg:gap-14
          xl:grid-cols-[300px_minmax(0,1fr)]
          xl:gap-16
        "
      >
        {/* ===================================================
            STICKY SIDEBAR NAVIGATION COLUMN
            self-stretch ensures aside spans the full product column height!
            =================================================== */}
        <aside className="hidden lg:block lg:self-stretch">
          <div className="sticky top-[110px]">
            <ProductNavigation
              items={navItems}
              activeId={activeId}
              onItemClick={handleItemClick}
            />
          </div>
        </aside>

        {/* ===================================================
            PRODUCT CONTENT COLUMN
            =================================================== */}
        <div className="min-w-0 w-full">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
