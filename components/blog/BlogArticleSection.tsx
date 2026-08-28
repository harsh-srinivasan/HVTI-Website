"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BlogPost } from "@/data/blog";

/* ================================================================
   MANAGEMENT-OFFICE STYLE EDITORIAL BLOG ARTICLE SECTION
   File: components/blog/BlogArticleSection.tsx

   - Strict alternating 2-column layout (Referenced from Management Office):
     * layout="image-left": Photo on LEFT (md:order-1), Text on RIGHT (md:order-2)
     * layout="image-right": Text on LEFT (md:order-1), Photo on RIGHT (md:order-2)
   - Mobile: Text ALWAYS 1st, Photo ALWAYS 2nd (Eliminates adjacent images)
   - Exact 16:10 / 4:3 native aspect ratio framing with purple aura underglow
   - High-voltage capsule CTA linking to the full dynamic article reader
   ================================================================ */

interface BlogArticleSectionProps {
  post: BlogPost;
  index: number;
}

function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function BlogArticleSection({ post, index }: BlogArticleSectionProps) {
  const { ref: sectionRef, visible: sectionVisible } = useReveal(0.08);

  // Alternate: Even index = image-right, Odd index = image-left
  const isImageLeft = index % 2 !== 0;

  // Split title into two parts for White + Purple aesthetic
  const titleWords = post.title.split(":");
  const mainTitle = titleWords[0];
  const subtitle = titleWords.length > 1 ? titleWords.slice(1).join(":") : "";

  return (
    <section
      id={post.slug}
      className="
        relative
        w-full
        overflow-hidden
        px-6
        py-12
        sm:px-8
        sm:py-16
        lg:px-12
        lg:py-20
      "
    >
      {/* Central Constrained Canvas (Max Width: 980px) */}
      <div
        ref={sectionRef}
        className={`
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[980px]
          grid-cols-1
          items-center
          gap-8
          transition-all
          duration-[900ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          md:grid-cols-2
          md:gap-12
          lg:gap-16
          ${sectionVisible ? "translate-y-0 opacity-100" : "translate-y-[24px] opacity-0"}
        `}
      >
        {/* Narrative Text Column (Always 1st on mobile; alternates on desktop) */}
        <div className={`w-full ${isImageLeft ? "md:order-2" : "md:order-1"}`}>
          <div className="relative z-10 flex flex-col justify-center">
            {/* Eyebrow & Category */}
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
                {post.category}
              </span>
              <span className="h-1 w-1 rounded-full bg-[#64748B]" />
              <span className="font-mono text-[11px] text-[#94A3B8]">
                {post.date}
              </span>
            </div>

            {/* Heading with White + Purple styling */}
            <h2
              className="
                mt-2.5
                font-heading
                text-[23px]
                font-bold
                leading-[1.25]
                tracking-[-0.02em]
                text-white
                drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]
                sm:text-[26px]
                lg:text-[29px]
              "
            >
              <span>{mainTitle}</span>
              {subtitle && (
                <>
                  <br />
                  <span className="text-[#A855F7] text-[20px] sm:text-[23px] font-medium leading-[1.3]">
                    {subtitle}
                  </span>
                </>
              )}
            </h2>

            {/* Orange Accent Line */}
            <div className="mb-4 mt-3 h-[2px] w-9 bg-[#F97316]" />

            {/* Narrative Excerpt */}
            <p className="font-sans text-[13.5px] leading-[1.75] text-[#CBD5E1] drop-shadow-[0_1px_8px_rgba(0,0,0,0.75)] sm:text-[14px]">
              {post.excerpt}
            </p>

            {/* Tags & Meta Badges */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {post.tags.slice(0, 3).map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="rounded-md border border-white/[0.06] bg-[#0A0F1D]/80 px-2 py-0.5 font-mono text-[10px] text-[#94A3B8]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action CTA Button */}
            <div className="mt-6 flex items-center gap-4">
              <Link
                href={`/blog/${post.slug}`}
                className="
                  inline-flex
                  h-[40px]
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  border
                  border-[#FB923C]/60
                  bg-gradient-to-r
                  from-[#F97316]
                  to-[#EA580C]
                  px-6
                  font-sans
                  text-[12px]
                  font-bold
                  tracking-[0.06em]
                  text-white
                  shadow-[0_0_18px_rgba(249,115,22,0.3)]
                  transition-all
                  duration-200
                  hover:scale-[1.02]
                  hover:shadow-[0_0_26px_rgba(249,115,22,0.55)]
                "
              >
                <span>READ FULL ARTICLE</span>
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
              </Link>

              <span className="font-mono text-[11.5px] text-[#94A3B8]">
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Photo Column (Always 2nd on mobile; alternates on desktop) */}
        <div className={`w-full ${isImageLeft ? "md:order-1" : "md:order-2"}`}>
          <div className="relative mx-auto w-full max-w-[440px] md:max-w-none">
            {/* Subtle Purple Underglow */}
            <div
              className="
                pointer-events-none
                absolute
                -inset-2
                rounded-[18px]
                bg-[radial-gradient(ellipse_at_50%_100%,rgba(168,85,247,0.32),rgba(124,58,237,0.10)_50%,transparent_75%)]
                blur-[20px]
              "
            />

            {/* Clean Thin Border Image Frame with Exact 16:10 / 4:3 Aspect Ratio */}
            <Link
              href={`/blog/${post.slug}`}
              className="
                group/img
                relative
                block
                aspect-[16/10]
                w-full
                overflow-hidden
                rounded-[14px]
                border
                border-[#A855F7]/30
                bg-[#080D1A]
                shadow-[0_16px_40px_rgba(0,0,0,0.75),0_0_24px_rgba(168,85,247,0.14)]
                transition-all
                duration-300
                hover:border-[#A855F7]/60
                hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]
              "
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                quality={95}
                className="object-cover object-center transition-transform duration-700 group-hover/img:scale-105"
                sizes="(max-width: 768px) 100vw, 440px"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
