"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogPost } from "@/data/blog";

/* ================================================================
   HVTI BLOG — FEATURED ARTICLE SPOTLIGHT
   File: components/blog/BlogFeatured.tsx
   ================================================================ */

interface BlogFeaturedProps {
  post: BlogPost;
}

export default function BlogFeatured({ post }: BlogFeaturedProps) {
  return (
    <section className="relative z-10 w-full px-6 py-6 sm:px-10 lg:px-14 xl:px-20">
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="mb-4 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#A855F7]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
          <span>FEATURED TECHNICAL ARTICLE</span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="
            group
            relative
            grid
            grid-cols-1
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.10]
            bg-[#0A0F1D]/85
            shadow-[0_20px_50px_rgba(0,0,0,0.6)]
            backdrop-blur-md
            transition-all
            duration-500
            hover:border-[#A855F7]/50
            hover:shadow-[0_0_40px_rgba(168,85,247,0.22)]
            lg:grid-cols-12
          "
        >
          {/* Image Column (7 cols) */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#05070D] lg:col-span-7 lg:aspect-auto lg:h-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              quality={95}
              className="
                object-cover
                object-center
                transition-transform
                duration-700
                group-hover:scale-105
              "
              sizes="(max-width: 1024px) 100vw, 750px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-transparent lg:hidden" />
          </div>

          {/* Content Column (5 cols) */}
          <div className="flex flex-col justify-between p-7 sm:p-9 lg:col-span-5 lg:p-10">
            <div>
              {/* Category & Meta */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/[0.12] bg-[#05070D]/80 px-3 py-1 font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#F97316]">
                  {post.category}
                </span>
                <span className="font-mono text-[11px] text-[#94A3B8]">
                  {post.date}
                </span>
                <span className="h-1 w-1 rounded-full bg-[#64748B]" />
                <span className="font-mono text-[11px] text-[#94A3B8]">
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-4 font-heading text-xl font-bold leading-[1.25] text-white transition-colors duration-200 group-hover:text-[#F97316] sm:text-2xl lg:text-[25px]">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="mt-3 font-sans text-[13.5px] leading-[1.65] text-[#CBD5E1] line-clamp-3 sm:text-[14px]">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {post.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-md border border-white/[0.06] bg-[#05070D]/70 px-2 py-0.5 font-mono text-[10px] text-[#94A3B8]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Read Article CTA */}
            <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5">
              <div className="flex items-center gap-2.5">
                <div className="h-6 w-6 rounded-full border border-white/[0.15] bg-[#05070D] p-0.5">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={20}
                    height={20}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="font-sans text-[12px] font-medium text-[#94A3B8]">
                  {post.author.name}
                </span>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-[12px] font-bold text-[#F97316] group-hover:translate-x-1 transition-transform duration-200">
                <span>READ ARTICLE</span>
                <svg
                  width="13"
                  height="13"
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
      </div>
    </section>
  );
}
