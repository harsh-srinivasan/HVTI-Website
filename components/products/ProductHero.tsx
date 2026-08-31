"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ProductHighlights from "./ProductHighlights";
import HVACTestingKitRender from "@/components/renders/HVACTestingKitRender";
import VoltageDetectorTPS9Render from "@/components/renders/VoltageDetectorTPS9Render";
import HelmetDetectorViewer from "@/components/renders/HelmetDetectorViewer";
import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT HERO SYSTEM
   File: components/products/ProductHero.tsx

   - Full-scale, high-contrast engineering hero composition
   - Large realistic 3D hardware render or high-res product photo on luminous floor energy ring
   - Dynamic highlights adaptation (2, 3, 4, 5+ items)
   - Dynamic 3D model resolver supporting both system & tool models
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
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3V15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 11L12 16L17 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 20H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function render3DModel(product: ProductData) {
  if (product.modelUrl === "/models/hv-ac-testing-kit.glb") {
    return <HVACTestingKitRender />;
  }
  if (
    product.slug === "helmet-mounted-voltage-detector" ||
    product.modelUrl?.includes("detector_helmet_mounted") ||
    product.modelUrl?.includes("helmet_detector") ||
    product.modelUrl?.includes("helmet_mounted")
  ) {
    return <HelmetDetectorViewer />;
  }
  return <VoltageDetectorTPS9Render modelUrl={product.modelUrl} />;
}

/* ================================================================
   DESKTOP HERO
   ================================================================ */

function DesktopProductHero({ product }: { product: ProductData }) {
  const { ref: breadcrumbRef, visible: breadcrumbVisible } = useReveal(0.15);
  const { ref: categoryRef, visible: categoryVisible } = useReveal(0.15);
  const { ref: titleRef, visible: titleVisible } = useReveal(0.15);
  const { ref: descriptionRef, visible: descriptionVisible } = useReveal(0.15);
  const { ref: highlightsRef, visible: highlightsVisible } = useReveal(0.15);
  const { ref: ctaRef, visible: ctaVisible } = useReveal(0.15);
  const { ref: renderRef, visible: renderVisible } = useReveal(0.1);

  const highlights = product.highlights || [];
  const brochureLink = product.brochure || product.cta?.brochureUrl;
  const hasVisual = (product.renderType === "3d" && product.modelUrl) || product.image || product.specImage;

  return (
    <section
      id="product-hero-desktop"
      className="
        relative
        hidden
        min-h-screen
        overflow-hidden
        bg-transparent
        lg:flex
        lg:flex-col
        lg:justify-center
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1360px]
          items-center
          gap-8
          px-10
          pb-12
          pt-[100px]
          xl:gap-12
          xl:px-14
        "
      >
        {/* Left Content Column */}
        <div className={`w-[48%] max-w-[620px] shrink-0 ${!hasVisual ? "mx-auto text-center" : ""}`}>
          {/* Breadcrumb */}
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
              ${breadcrumbVisible ? "translate-y-0 opacity-100" : "translate-y-[18px] opacity-0"}
              ${!hasVisual ? "justify-center flex" : ""}
            `}
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-white/20">/</span>
            <Link href="/products" className="transition-colors hover:text-white">
              Products
            </Link>
            <span className="mx-2 text-white/20">/</span>
            <span className="text-[#A855F7]">{product.category}</span>
          </div>

          {/* Eyebrow */}
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
              ${categoryVisible ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"}
              ${!hasVisual ? "justify-center" : ""}
            `}
          >
            <span className="h-[2px] w-9 bg-[#F97316]" />
            <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-[#F97316]">
              {product.category}
            </span>
          </div>

          {/* Title */}
          <div
            ref={titleRef}
            className={`
              transition-all
              duration-[1100ms]
              delay-[140ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${titleVisible ? "translate-y-0 opacity-100" : "translate-y-[28px] opacity-0"}
            `}
          >
            <h1
              className={`
                font-heading
                text-[50px]
                font-bold
                leading-[1.06]
                tracking-[-0.03em]
                text-white
                xl:text-[58px]
                ${!hasVisual ? "mx-auto max-w-[800px]" : "max-w-[620px]"}
              `}
            >
              {product.title}
            </h1>
          </div>

          {/* Description */}
          <div
            ref={descriptionRef}
            className={`
              transition-all
              duration-[1000ms]
              delay-[240ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${descriptionVisible ? "translate-y-0 opacity-100" : "translate-y-[25px] opacity-0"}
            `}
          >
            <p
              className={`
                mt-4
                font-sans
                font-normal
                text-[16.5px]
                leading-[1.68]
                text-[#CBD5E1]
                xl:text-[17.5px]
                ${!hasVisual ? "mx-auto max-w-[720px]" : "max-w-[560px]"}
              `}
            >
              {product.description}
            </p>
          </div>

          {/* Highlights */}
          {highlights.length > 0 && (
            <div
              ref={highlightsRef}
              className={`
                mt-6
                transition-all
                duration-[1000ms]
                delay-[340ms]
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${highlightsVisible ? "translate-y-0 opacity-100" : "translate-y-[25px] opacity-0"}
                ${!hasVisual ? "flex justify-center" : ""}
              `}
            >
              <ProductHighlights highlights={highlights} />
            </div>
          )}

          {/* Actions */}
          <div
            ref={ctaRef}
            className={`
              mt-8
              flex
              items-center
              gap-6
              transition-all
              duration-[1000ms]
              delay-[440ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${ctaVisible ? "translate-y-0 opacity-100" : "translate-y-[25px] opacity-0"}
              ${!hasVisual ? "justify-center" : ""}
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
                px-8
                text-[12.5px]
                font-semibold
                uppercase
                tracking-wider
                text-white
                transition-all
                duration-200
                hover:bg-[#FB923C]
                hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]
              "
            >
              <span>Request a Quote</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>

            {brochureLink && brochureLink !== "#" && (
              <Link
                href={brochureLink}
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  text-[12.5px]
                  font-semibold
                  uppercase
                  tracking-wider
                  text-[#A855F7]
                  transition-colors
                  hover:text-[#C084FC]
                "
              >
                <span>Download Brochure</span>
                <DownloadIcon />
              </Link>
            )}
          </div>
        </div>

        {/* Right Hero Visual Stage */}
        {hasVisual && (
          <div
            id="product-hero-render-desktop"
            ref={renderRef}
            className={`
              relative
              ml-auto
              h-[500px]
              w-[52%]
              max-w-[680px]
              shrink-0
              xl:h-[560px]
              transition-all
              duration-[1200ms]
              delay-[180ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${renderVisible ? "translate-x-0 scale-100 opacity-100" : "translate-x-[20px] scale-[0.98] opacity-0"}
            `}
          >
            {/* Circular Ground Ambient Glow Ring beneath Model / Image */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-[40px]
                left-1/2
                h-[360px]
                w-[540px]
                -translate-x-1/2
                rounded-full
                bg-[radial-gradient(ellipse_at_50%_50%,rgba(168,85,247,0.18),rgba(249,115,22,0.06)_50%,transparent_75%)]
                blur-[32px]
              "
            />
            {product.renderType === "3d" && product.modelUrl ? (
              render3DModel(product)
            ) : (product.image || product.specImage) ? (
              <div className="relative flex h-full w-full items-center justify-center p-4">
                <div className="relative h-[440px] w-full overflow-hidden rounded-[16px] border border-white/[0.12] bg-[#080D1A]/90 p-3 shadow-[0_24px_64px_rgba(0,0,0,0.6)] backdrop-blur-md">
                  <div className="relative h-full w-full overflow-hidden rounded-[12px]">
                    <Image
                      src={(product.image || product.specImage)!}
                      alt={product.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070D]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 z-20">
                      <span className="rounded-[4px] border border-white/10 bg-[#05070D]/85 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[#A855F7] backdrop-blur-md">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}

/* ================================================================
   MOBILE HERO
   ================================================================ */

function MobileProductHero({ product }: { product: ProductData }) {
  const highlights = product.highlights || [];
  const brochureLink = product.brochure || product.cta?.brochureUrl;
  const hasVisual = (product.renderType === "3d" && product.modelUrl) || product.image || product.specImage;

  return (
    <section
      id="product-hero-mobile"
      className="
        relative
        block
        overflow-hidden
        bg-transparent
        lg:hidden
      "
    >
      <div className="relative z-10 flex flex-col px-5 pb-12 pt-[96px] sm:px-8 sm:pt-[104px]">
        {/* Breadcrumb */}
        <div
          className="
            mb-3.5
            flex
            items-center
            overflow-hidden
            whitespace-nowrap
            text-[11px]
            font-medium
            text-[#64748B]
          "
        >
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span className="mx-1.5 text-white/20">/</span>
          <Link href="/products" className="transition-colors hover:text-white">
            Products
          </Link>
          <span className="mx-1.5 text-white/20">/</span>
          <span className="font-semibold text-[#A855F7]">{product.category}</span>
        </div>

        {/* Eyebrow */}
        <div className="mb-2.5 flex items-center gap-2.5">
          <span className="h-[2px] w-6 bg-[#F97316]" />
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F97316]">
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
            sm:text-[40px]
          "
        >
          {product.title}
        </h1>

        {/* Description */}
        <p
          className="
            mt-3.5
            max-w-[480px]
            font-sans
            font-normal
            text-[15.5px]
            leading-[1.65]
            text-[#CBD5E1]
          "
        >
          {product.description}
        </p>

        {/* Highlights */}
        {highlights.length > 0 && (
          <div className="mt-5">
            <ProductHighlights highlights={highlights} />
          </div>
        )}

        {/* Hero Visual Stage */}
        {hasVisual && (
          <div
            id="product-hero-render-mobile"
            className="
              relative
              mt-4
              h-[340px]
              w-full
              sm:h-[400px]
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                bottom-[20px]
                left-1/2
                h-[240px]
                w-[320px]
                -translate-x-1/2
                rounded-full
                bg-[radial-gradient(ellipse_at_50%_50%,rgba(168,85,247,0.18),transparent_70%)]
                blur-[24px]
              "
            />
            {product.renderType === "3d" && product.modelUrl ? (
              render3DModel(product)
            ) : (
              <div className="relative h-full w-full overflow-hidden rounded-[14px] border border-white/[0.10] bg-[#080D1A]/90 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
                <div className="relative h-full w-full overflow-hidden rounded-[10px]">
                  <Image
                    src={(product.image || product.specImage)!}
                    alt={product.title}
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070D]/85 via-transparent to-transparent" />
                </div>
              </div>
            )}
          </div>
        )}

        {/* CTA Group */}
        <div className="mt-5 flex flex-col gap-3.5">
          <Link
            href="/contact"
            className="
              group
              inline-flex
              h-[52px]
              w-full
              items-center
              justify-center
              gap-2.5
              rounded-[8px]
              bg-[#F97316]
              text-[12.5px]
              font-semibold
              uppercase
              tracking-wider
              text-white
              shadow-[0_4px_24px_rgba(249,115,22,0.30)]
              transition-all
              duration-200
              hover:bg-[#FB923C]
              active:scale-[0.99]
            "
          >
            <span>Request a Quote</span>
            <ArrowIcon />
          </Link>

          {brochureLink && brochureLink !== "#" && (
            <Link
              href={brochureLink}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                py-2
                text-[12px]
                font-semibold
                uppercase
                tracking-wider
                text-[#A855F7]
                transition-colors
                hover:text-[#C084FC]
              "
            >
              <span>Download Brochure</span>
              <DownloadIcon />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default function ProductHero({ product }: { product: ProductData }) {
  return (
    <>
      <DesktopProductHero product={product} />
      <MobileProductHero product={product} />
    </>
  );
}