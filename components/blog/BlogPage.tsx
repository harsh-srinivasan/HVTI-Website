"use client";

import React, { useMemo, useState } from "react";
import GeometricAtmosphere from "@/components/ui/GeometricAtmosphere";
import { blogPosts } from "@/data/blog";
import BlogHero from "./BlogHero";
import BlogArticleSection from "./BlogArticleSection";
import BlogNewsletter from "./BlogNewsletter";

/* ================================================================
   HVTI MASTER BLOG LISTING PAGE (MANAGEMENT OFFICE STYLE SECTIONS)
   File: components/blog/BlogPage.tsx
   ================================================================ */

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const queryLower = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !queryLower ||
        post.title.toLowerCase().includes(queryLower) ||
        post.excerpt.toLowerCase().includes(queryLower) ||
        post.tags.some((tag) => tag.toLowerCase().includes(queryLower));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#05070D]">
      {/* 1. Procedural Geometric Atmosphere Canvas */}
      <GeometricAtmosphere variant="default" />

      {/* 2. Full-Viewport Hero & Category/Search Controls */}
      <BlogHero
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 3. Management-Office Style Editorial Article Sections */}
      <div id="blog-articles" className="relative z-10 w-full py-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, idx) => (
            <BlogArticleSection key={post.slug} post={post} index={idx} />
          ))
        ) : (
          <div className="py-24 text-center">
            <p className="font-mono text-base text-[#94A3B8]">
              No technical articles found matching your criteria.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 inline-flex items-center rounded-full border border-white/[0.15] bg-[#0A0F1D] px-5 py-2 font-mono text-[12px] text-[#F97316] hover:border-[#F97316]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* 4. Technical Bulletin Newsletter */}
      <BlogNewsletter />
    </main>
  );
}
