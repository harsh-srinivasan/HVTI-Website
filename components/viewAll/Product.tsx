"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { CategoryProduct } from "@/types/category";

/* ================================================================
   VIEW ALL — SINGLE PRODUCT SECTION COMPONENT
   File: components/viewAll/Product.tsx

   - Full spacious product showcase
   - 2-Column Split: Text & 3 Key Feature Rows (Left) | Photo Frame (Right)
   - High-voltage capsule CTA button
   ================================================================ */

function useReveal(threshold = 0.2) {
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

export default function Product({
  product,
}: {
  product: CategoryProduct;
}) {
  const { ref: sectionRef, visible: sectionVisible } = useReveal(0.2);
  const targetHref = product.slug ? `/products/${product.slug}` : `/contact?subject=${encodeURIComponent(product.title)}`;
  const actionLabel = product.slug ? "View Product" : "Inquire Product";

  return (
    <div
      id={`product-${product.id}`}
      data-product-section
      data-product-id={product.id}
      data-product-title={product.title}
      className="
        relative
        w-full
        border-b
        border-white/[0.07]
        py-16
        first:pt-6
        last:border-b-0
        sm:py-20
        lg:py-24
      "
    >
      <div
        ref={sectionRef}
        className={`
          grid
          w-full
          grid-cols-1
          items-center
          gap-10
          transition-all
          duration-[1800ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          lg:grid-cols-[1.1fr_0.9fr]
          lg:gap-12
          xl:gap-16
          ${sectionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        {/* =====================================================
            LEFT SIDE — PRODUCT SPECIFICATION TEXT & FEATURES
            ===================================================== */}
        <div className="w-full">
          {/* Eyebrow */}
          <div className="mb-3.5 flex items-center gap-3">
            <span
              className={`
                h-[2px]
                shrink-0
                bg-[#F97316]
                transition-all
                duration-[1600ms]
                delay-[200ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${sectionVisible ? "w-7" : "w-0"}
              `}
            />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
              {product.badge || product.categoryTitle}
            </span>
          </div>

          {/* Product Title */}
          <h2
            className="
              font-heading
              text-2xl
              font-bold
              leading-[1.1]
              tracking-[-0.03em]
              text-white
              drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]
              sm:text-3xl
              lg:text-[34px]
              xl:text-[38px]
            "
          >
            {product.title}
          </h2>

          {/* Subtitle */}
          {product.subtitle && (
            <p className="mt-1.5 font-sans text-[13.5px] font-medium text-[#C084FC]">
              {product.subtitle}
            </p>
          )}

          {/* Description */}
          <p className="mt-4 max-w-[620px] font-sans text-[14px] leading-[1.7] text-[#CBD5E1] sm:text-[14.5px]">
            {product.description}
          </p>

          {/* 3 Key Feature Rows */}
          {product.features && product.features.length > 0 && (
            <div className="mt-6 space-y-3.5">
              {product.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="
                    border-t
                    border-white/[0.08]
                    pt-3.5
                  "
                >
                  <h3 className="font-heading text-[14.5px] font-bold text-white sm:text-[15.5px]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 max-w-[600px] font-sans text-[13px] leading-[1.6] text-[#94A3B8]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Product Action Button */}
          <div className="mt-8 pt-2">
            <Link
              href={targetHref}
              className="
                group
                inline-flex
                h-[48px]
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-[#FB923C]/50
                bg-gradient-to-r
                from-[#F97316]
                via-[#EA580C]
                to-[#C2410C]
                px-7
                font-sans
                text-[12.5px]
                font-bold
                tracking-[0.08em]
                text-white
                shadow-[0_0_25px_rgba(249,115,22,0.30)]
                transition-all
                duration-300
                hover:border-[#FB923C]
                hover:shadow-[0_0_35px_rgba(249,115,22,0.55)]
                hover:scale-[1.02]
                active:scale-[0.98]
              "
            >
              <span>{actionLabel.toUpperCase()}</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE — PRODUCT IMAGE FRAME
            ===================================================== */}
        <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none">
          {/* Subtle Purple Underglow */}
          <div
            className="
              pointer-events-none
              absolute
              -inset-2
              rounded-[20px]
              bg-[radial-gradient(ellipse_at_50%_100%,rgba(168,85,247,0.28),rgba(124,58,237,0.08)_50%,transparent_75%)]
              blur-[20px]
            "
          />

          {/* Clean Thin Border Frame */}
          <div
            className="
              relative
              aspect-[4/3.2]
              w-full
              overflow-hidden
              rounded-[14px]
              border
              border-white/[0.10]
              bg-[#080D1A]
              p-6
              shadow-[0_16px_40px_rgba(0,0,0,0.7),0_0_24px_rgba(168,85,247,0.12)]
              transition-all
              duration-500
              hover:border-[#A855F7]/40
            "
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              quality={95}
              className="
                object-contain
                p-4
                transition-transform
                duration-700
                hover:scale-105
              "
              sizes="(max-width: 768px) 100vw, 480px"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-transparent opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
}
