"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ProductHighlights from "./ProductHighlights";
import HVACTestingKitRender from "@/components/renders/HVACTestingKitRender";

/* ================================================================
   PRODUCT HERO
   File: components/products/ProductHero.tsx

   Desktop:
   - Compact premium product-catalogue composition
   - Stronger product typography
   - Controlled entrance animations
   - 3D render has an independent container
   - Render position/size controlled by the parent container
   - Reduced overall vertical footprint

   Mobile:
   - Existing implementation preserved
   ================================================================ */


/* ================================================================
   REVEAL HOOK
   ================================================================ */

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          observer.unobserve(element);
        }
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return {
    ref,
    visible,
  };
}


/* ================================================================
   ARROW ICON
   ================================================================ */

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


/* ================================================================
   DOWNLOAD ICON
   ================================================================ */

function DownloadIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3V15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M7 11L12 16L17 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M5 20H19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* ================================================================
   RENDER PLACEHOLDER

   Replace this with the actual 3D render later.

   IMPORTANT:
   The parent container controls the size and position of the
   render area.

   The actual 3D render component should fill this container.
   ================================================================ */

function RenderPlaceholder() {
  return (
    <div
      className="
        relative
        flex
        h-full
        min-h-[390px]
        items-center
        justify-center
      "
    >
      <div
        className="
          absolute
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#7C3AED]/20
          blur-[100px]
        "
      />

      <div
        className="
          relative
          z-10
          text-center
          text-sm
          uppercase
          tracking-[0.18em]
          text-white/30
        "
      >
        3D Product Render
      </div>
    </div>
  );
}


/* ================================================================
   DESKTOP HERO
   ================================================================ */

function DesktopProductHero({
  product,
}: {
  product: any;
}) {
  /* ==============================================================
     INDIVIDUAL REVEALS
     ============================================================== */

  const {
    ref: breadcrumbRef,
    visible: breadcrumbVisible,
  } = useReveal(0.15);

  const {
    ref: categoryRef,
    visible: categoryVisible,
  } = useReveal(0.15);

  const {
    ref: titleRef,
    visible: titleVisible,
  } = useReveal(0.15);

  const {
    ref: descriptionRef,
    visible: descriptionVisible,
  } = useReveal(0.15);

  const {
    ref: highlightsRef,
    visible: highlightsVisible,
  } = useReveal(0.15);

  const {
    ref: ctaRef,
    visible: ctaVisible,
  } = useReveal(0.15);

  const {
    ref: renderRef,
    visible: renderVisible,
  } = useReveal(0.1);

  return (
    <section
      id="product-hero-desktop"
      className="
        relative
        hidden
        min-h-screen
        overflow-hidden
        border-b
        border-white/[0.08]
        bg-transparent
        lg:flex
        lg:flex-col
        lg:justify-center
      "
    >

      {/* ==========================================================
          SUBTLE BOTTOM FADE
          ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-[120px]
          bg-gradient-to-t
          from-[#05070D]
          to-transparent
        "
      />

      {/* ==========================================================
          HERO CONTENT
          ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1280px]
          items-center
          gap-8
          px-10
          pb-10
          pt-[88px]
          xl:gap-12
          xl:px-12
        "
      >
        {/* ========================================================
            LEFT CONTENT
            ======================================================== */}

        <div
          className="
            w-[48%]
            max-w-[620px]
            shrink-0
          "
        >
          {/* ======================================================
              BREADCRUMB
              ====================================================== */}

          <div
            ref={breadcrumbRef}
            className={`
              mb-5
              text-[12px]
              font-medium
              text-[#64748B]

              transition-all
              duration-[900ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${breadcrumbVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[18px] opacity-0"
              }
            `}
          >
            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>

            <span className="mx-2 text-white/20">
              /
            </span>

            <Link
              href="/products"
              className="transition-colors hover:text-white"
            >
              Products
            </Link>

            <span className="mx-2 text-white/20">
              /
            </span>

            <span className="text-[#A855F7]">
              {product.category}
            </span>
          </div>

          {/* ======================================================
              EYEBROW / CATEGORY
              ====================================================== */}

          <div
            ref={categoryRef}
            className={`
              mb-3
              flex
              items-center
              gap-3

              transition-all
              duration-[900ms]
              delay-[80ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${categoryVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[20px] opacity-0"
              }
            `}
          >
            <span className="h-[2px] w-9 bg-[#F97316]" />

            <span
              className="
                font-sans
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#F97316]
              "
            >
              {product.category}
            </span>
          </div>

          {/* ======================================================
              PRODUCT TITLE
              ====================================================== */}

          <div
            ref={titleRef}
            className={`
              transition-all
              duration-[1100ms]
              delay-[140ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${titleVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[28px] opacity-0"
              }
            `}
          >
            <h1
              className="
                max-w-[580px]
                font-heading
                text-[56px]
                font-bold
                leading-[1.06]
                tracking-[-0.03em]
                text-white
                xl:text-[62px]
              "
            >
              {product.title}
            </h1>
          </div>

          {/* ======================================================
              DESCRIPTION
              ====================================================== */}

          <div
            ref={descriptionRef}
            className={`
              transition-all
              duration-[1000ms]
              delay-[240ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${descriptionVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[25px] opacity-0"
              }
            `}
          >
            <p
              className="
                mt-4
                max-w-[570px]
                font-sans
                font-normal
                text-[17px]
                leading-[1.68]
                text-[#CBD5E1]
                xl:text-[18px]
              "
            >
              {product.description}
            </p>
          </div>

          {/* ======================================================
              HIGHLIGHTS
              ====================================================== */}

          <div
            ref={highlightsRef}
            className={`
              mt-5

              transition-all
              duration-[1000ms]
              delay-[340ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${highlightsVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[25px] opacity-0"
              }
            `}
          >
            <ProductHighlights
              highlights={product.highlights || []}
            />
          </div>

          {/* ======================================================
              CTA
              ====================================================== */}

          <div
            ref={ctaRef}
            className={`
              mt-6
              flex
              items-center
              gap-5

              transition-all
              duration-[1000ms]
              delay-[440ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]

              ${ctaVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-[25px] opacity-0"
              }
            `}
          >
            <Link
              href="/contact"
              className="
                group
                inline-flex
                h-[52px]
                items-center
                justify-center
                gap-3
                rounded-[7px]
                bg-[#F97316]
                px-7
                text-[12px]
                font-semibold
                uppercase
                tracking-wide
                text-white
                transition-all
                duration-200
                hover:bg-[#FB923C]
                hover:shadow-[0_0_30px_rgba(249,115,22,0.20)]
              "
            >
              <span>
                Request a Quote
              </span>

              <span
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              >
                <ArrowIcon />
              </span>
            </Link>

            <Link
              href="#documents"
              className="
                inline-flex
                items-center
                gap-2
                text-[12px]
                font-semibold
                uppercase
                tracking-wide
                text-[#A855F7]
                transition-colors
                hover:text-[#C084FC]
              "
            >
              <span>
                Download Brochure
              </span>

              <DownloadIcon />
            </Link>
          </div>
        </div>

        {/* ========================================================
            RIGHT — 3D RENDER CONTAINER

            IMPORTANT:

            This DIV controls the size and position of the render.

            The actual 3D component will be placed INSIDE this
            container later.

            Do not move sizing logic into the render component.
            ======================================================== */}

        <div
          id="product-hero-render-desktop"
          ref={renderRef}
          className={`
            relative
            ml-auto
            h-[480px]
            w-[50%]
            max-w-[640px]
            shrink-0
            xl:h-[520px]

            transition-all
            duration-[1200ms]
            delay-[180ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]

            motion-reduce:transition-none
            motion-reduce:transform-none
            motion-reduce:opacity-100

            ${renderVisible
              ? "translate-x-0 scale-100 opacity-100"
              : "translate-x-[20px] scale-[0.98] opacity-0"
            }
          `}
        >
          <HVACTestingKitRender />
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   MOBILE HERO

   EXISTING MOBILE IMPLEMENTATION PRESERVED.
   ================================================================ */

function MobileProductHero({
  product,
}: {
  product: any;
}) {
  return (
    <section
      id="product-hero-mobile"
      className="
        relative
        block
        overflow-hidden
        border-b
        border-white/[0.08]
        bg-transparent
        lg:hidden
      "
    >
      {/* ==========================================================
          MOBILE CONTENT CONTAINER (Unified tight vertical rhythm)
          ========================================================== */}

      <div className="relative z-10 flex flex-col px-5 pb-10 pt-[92px] sm:px-8 sm:pt-[98px]">
        {/* Breadcrumb */}
        <div
          className="
            mb-3.5
            flex
            items-center
            overflow-hidden
            whitespace-nowrap
            text-[10px]
            font-medium
            text-[#64748B]
          "
        >
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>

          <span className="mx-1.5 text-white/20">
            /
          </span>

          <Link href="/products" className="transition-colors hover:text-white">
            Products
          </Link>

          <span className="mx-1.5 text-white/20">
            /
          </span>

          <span className="font-semibold text-[#A855F7]">
            {product.category}
          </span>
        </div>

        {/* Eyebrow */}
        <div className="mb-2.5 flex items-center gap-2.5">
          <span className="h-[2px] w-6 bg-[#F97316]" />

          <span
            className="
              font-sans
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#F97316]
            "
          >
            {product.category}
          </span>
        </div>

        {/* Title */}
        <h1
          className="
            font-heading
            text-[34px]
            font-bold
            leading-[1.08]
            tracking-[-0.025em]
            text-white
            sm:text-[38px]
          "
        >
          {product.title}
        </h1>

        {/* Description */}
        <p
          className="
            mt-3
            max-w-[480px]
            font-sans
            font-normal
            text-[15px]
            leading-[1.65]
            text-[#CBD5E1]
            sm:text-[15.5px]
          "
        >
          {product.description}
        </p>

        {/* Compact Highlights */}
        <div className="mt-4">
          <ProductHighlights
            highlights={product.highlights || []}
          />
        </div>

        {/* ========================================================
            3D PRODUCT RENDER (Dominant visual centerpiece)
            ======================================================== */}

        <div
          id="product-hero-render-mobile"
          className="
            relative
            mt-3
            h-[350px]
            w-full
            sm:h-[400px]
          "
        >
          <HVACTestingKitRender />
        </div>

        {/* ========================================================
            CTA GROUP (Natural document flow below render)
            ======================================================== */}

        <div className="mt-4 flex flex-col gap-3">
          <Link
            href="/contact"
            className="
              group
              inline-flex
              h-[50px]
              w-full
              items-center
              justify-center
              gap-2.5
              rounded-[8px]
              bg-[#F97316]
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.08em]
              text-white
              shadow-[0_4px_20px_rgba(249,115,22,0.30)]
              transition-all
              duration-200
              hover:bg-[#EA580C]
              active:scale-[0.99]
            "
          >
            <span>
              Request a Quote
            </span>

            <ArrowIcon />
          </Link>

          <Link
            href="#documents"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              py-1.5
              text-[11.5px]
              font-semibold
              uppercase
              tracking-[0.08em]
              text-[#A855F7]
              transition-colors
              duration-200
              hover:text-[#C084FC]
            "
          >
            <span>
              Download Brochure
            </span>

            <DownloadIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   MAIN PRODUCT HERO
   ================================================================ */

export default function ProductHero({
  product,
}: {
  product: any;
}) {
  return (
    <>
      {/* ============================================================
          DESKTOP
          ============================================================ */}

      <DesktopProductHero product={product} />

      {/* ============================================================
          MOBILE
          ============================================================ */}

      <MobileProductHero product={product} />
    </>
  );
}