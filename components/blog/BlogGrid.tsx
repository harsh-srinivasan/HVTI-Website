"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogPost } from "@/data/blog";

/* ================================================================
   HVTI BLOG — ARTICLES GRID
   File: components/blog/BlogGrid.tsx
   ================================================================ */

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="font-mono text-base text-[#94A3B8]">
          No technical articles found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <section className="relative z-10 w-full px-6 py-8 sm:px-10 lg:px-14 xl:px-20">
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="
                group
                relative
                flex
                flex-col
                justify-between
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#0A0F1D]/85
                shadow-[0_16px_40px_rgba(0,0,0,0.6)]
                backdrop-blur-md
                transition-all
                duration-500
                hover:border-[#A855F7]/40
                hover:bg-[#0A0F1D]
                hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]
              "
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#05070D]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    quality={95}
                    className="
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
                  />
                  {/* Category Pill Over Image */}
                  <div className="absolute left-3 top-3 rounded-full border border-white/[0.15] bg-[#05070D]/85 px-3 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#F97316] backdrop-blur-md">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  {/* Meta */}
                  <div className="flex items-center gap-2 font-mono text-[11px] text-[#94A3B8]">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-[#64748B]" />
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 font-heading text-[18px] font-bold leading-[1.3] text-white transition-colors duration-200 group-hover:text-[#F97316]">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 font-sans text-[13px] leading-[1.65] text-[#CBD5E1] line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-md border border-white/[0.06] bg-[#05070D]/70 px-2 py-0.5 font-mono text-[9.5px] text-[#94A3B8]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="border-t border-white/[0.07] px-6 py-4 sm:px-7">
                <div className="flex items-center justify-between font-mono text-[11.5px]">
                  <span className="text-[#64748B]">HVTI RESEARCH</span>
                  <div className="flex items-center gap-1 font-bold text-[#F97316] group-hover:translate-x-1 transition-transform duration-200">
                    <span>READ</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
