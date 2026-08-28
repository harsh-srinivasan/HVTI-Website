"use client";

import React from "react";
import { CategoryData } from "@/types/category";
import ViewAllCanvas from "./ViewAllCanvas";
import Hero from "./hero";
import ProductList from "./ProductList";

/* ================================================================
   HVTI MASTER REUSABLE VIEW ALL / CATEGORY PAGE
   File: components/viewAll/ViewAllPage.tsx

   - Minimalist bespoke technical canvas
   - 2-Column Category Hero
   - Sticky Sidebar Scroll-Spy Product Showcase (overflow visible for sticky)
   ================================================================ */

export default function ViewAllPage({
  category,
}: {
  category: CategoryData;
}) {
  return (
    <main className="relative min-h-screen w-full bg-[#05070D]">
      {/* 1. Minimalist Bespoke Technical Canvas */}
      <ViewAllCanvas />

      {/* 2. Category Hero */}
      <Hero category={category} />

      {/* 3. Product List with Sticky Sidebar Navigation */}
      <ProductList products={category.products} />
    </main>
  );
}
