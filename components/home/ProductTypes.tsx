"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ================================================================
   PRODUCT TYPES DATA
   File: components/home/ProductTypes.tsx
   ================================================================ */

const products = [
  {
    title: "Electrical Safety Equipment",
    description:
      "Reliable safety equipment for live line working and personnel protection.",
    image: "/images/products/product-safety.jpg",
    accent: "orange",
    href: "/products/electrical-safety",
  },
  {
    title: "Electrical Testing Equipment",
    description:
      "Advanced testing solutions for substations, switchgears, transformers and more.",
    image: "/images/products/product-testing.jpg",
    accent: "purple",
    href: "/products/electrical-testing",
  },
  {
    title: "Condition Monitoring Systems",
    description:
      "Real-time monitoring solutions to detect abnormalities and prevent failures.",
    image: "/images/products/product-monitoring.jpg",
    accent: "orange",
    href: "/products/condition-monitoring",
  },
  {
    title: "Thermal & Imaging Systems",
    description:
      "High-performance cameras for inspection, diagnostics and leak detection.",
    image: "/images/products/product-thermal.jpg",
    accent: "purple",
    href: "/products/thermal-imaging",
  },
];

/* ================================================================
   REVEAL HOOK

   Watches an element and sets visible = true once it enters
   the viewport.

   Each element is only revealed once.
   ================================================================ */

function useReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          // Animation only happens once.
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return {
    ref,
    visible,
  };
}

/* ================================================================
   ICONS
   ================================================================ */

function SafetyIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 3L19 6V11C19 15.5 16.2 19.2 12 21C7.8 19.2 5 15.5 5 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M13 7L9.5 13H12L11.5 17L15 11H12.5L13 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TestingIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 12H6L8 6L11 18L14 8L16 14L18 11H21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MonitoringIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M7 14L9.5 10L12 13L14.5 8L17 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8 21H16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ThermalIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="7"
        y="3"
        width="10"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M12 6V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <circle
        cx="12"
        cy="17"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M12 11V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
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
   PRODUCT ICON SELECTOR
   ================================================================ */

function ProductIcon({ index }: { index: number }) {
  if (index === 0) {
    return <SafetyIcon />;
  }

  if (index === 1) {
    return <TestingIcon />;
  }

  if (index === 2) {
    return <MonitoringIcon />;
  }

  return <ThermalIcon />;
}

/* ================================================================
   DESKTOP PRODUCT CARD
   ================================================================ */

function DesktopProductCard({
  product,
  index,
  visible,
}: {
  product: (typeof products)[number];
  index: number;
  visible: boolean;
}) {
  const isOrange = product.accent === "orange";

  return (
    <article
      className={`
        group
        relative
        flex
        min-h-[405px]
        flex-col
        overflow-hidden
        rounded-[12px]
        border
        border-white/[0.10]
        bg-[#080D17]/90

        transition-all
        duration-[750ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]

        hover:-translate-y-1
        hover:border-white/[0.18]

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-[45px] opacity-0"
        }
      `}
      style={{
        transitionDelay: `${index * 220}ms`,
      }}
    >
      {/* ============================================================
          PRODUCT IMAGE
          ============================================================ */}

      <div className="relative h-[200px] w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.04]
          "
        />

        {/* Image fade */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#080D17]
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* ============================================================
          CARD CONTENT
          ============================================================ */}

      <div
        className="
          flex
          flex-1
          flex-col
          px-5
          pb-5
        "
      >
        {/* Icon */}
        <div
          className={`
            relative
            -mt-6
            mb-3
            flex
            h-[44px]
            w-[44px]
            shrink-0
            items-center
            justify-center
            rounded-[9px]
            border
            bg-[#080D17]

            ${
              isOrange
                ? "border-[#F97316]/70 text-[#F97316]"
                : "border-[#8B5CF6]/70 text-[#8B5CF6]"
            }
          `}
        >
          <ProductIcon index={index} />
        </div>

        {/* Title */}
        <h3
          className="
            max-w-[250px]
            text-[20px]
            font-semibold
            leading-[1.15]
            tracking-[-0.02em]
            text-white
          "
        >
          {product.title}
        </h3>

        {/* Accent line */}
        <div
          className={`
            mt-4
            h-[2px]
            w-[32px]

            ${
              isOrange
                ? "bg-[#F97316]"
                : "bg-[#8B5CF6]"
            }
          `}
        />

        {/* Description */}
        <p
          className="
            mt-4
            max-w-[270px]
            text-[13px]
            leading-[1.55]
            text-[#94A3B8]
          "
        >
          {product.description}
        </p>

        {/* Explore */}
        <Link
          href={product.href}
          className={`
            group/explore
            mt-auto
            flex
            items-center
            gap-2
            pt-5
            text-[11px]
            font-semibold
            uppercase
            tracking-wide

            ${
              isOrange
                ? "text-[#F97316]"
                : "text-[#A855F7]"
            }
          `}
        >
          <span>Explore</span>

          <span
            className="
              transition-transform
              duration-200
              group-hover/explore:translate-x-1
            "
          >
            <ArrowIcon />
          </span>
        </Link>
      </div>

      {/* ============================================================
          CARD BOTTOM ACCENT

          Internal card decoration only.
          Not a section separator.
          ============================================================ */}

      <div
        className={`
          absolute
          bottom-0
          left-0
          h-[2px]
          w-full

          ${
            isOrange
              ? "bg-[#F97316]"
              : "bg-[#8B5CF6]"
          }
        `}
      />
    </article>
  );
}

/* ================================================================
   MOBILE PRODUCT CARD
   ================================================================ */

function MobileProductCard({
  product,
  index,
  visible,
}: {
  product: (typeof products)[number];
  index: number;
  visible: boolean;
}) {
  const isOrange = product.accent === "orange";

  return (
    <article
      className={`
        group
        relative
        min-h-[400px]
        overflow-hidden
        rounded-[12px]
        border
        border-white/[0.10]
        bg-[#080D17]/95

        transition-all
        duration-[650ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-[30px] opacity-0"
        }
      `}
    >
      {/* ============================================================
          MOBILE IMAGE
          ============================================================ */}

      <div className="relative h-[190px] w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="
            h-full
            w-full
            object-cover
          "
        />

        {/* Image fade */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#080D17]
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* ============================================================
          MOBILE CONTENT
          ============================================================ */}

      <div
        className="
          flex
          min-h-[210px]
          flex-col
          px-5
          pb-6
        "
      >
        {/* Icon */}
        <div
          className={`
            relative
            -mt-6
            mb-3
            flex
            h-[46px]
            w-[46px]
            shrink-0
            items-center
            justify-center
            rounded-[9px]
            border
            bg-[#080D17]

            ${
              isOrange
                ? "border-[#F97316]/70 text-[#F97316]"
                : "border-[#8B5CF6]/70 text-[#8B5CF6]"
            }
          `}
        >
          <ProductIcon index={index} />
        </div>

        {/* Title */}
        <h3
          className="
            text-[20px]
            font-semibold
            leading-[1.2]
            text-white
          "
        >
          {product.title}
        </h3>

        {/* Accent line */}
        <div
          className={`
            mt-3
            h-[2px]
            w-[30px]

            ${
              isOrange
                ? "bg-[#F97316]"
                : "bg-[#8B5CF6]"
            }
          `}
        />

        {/* Description */}
        <p
          className="
            mt-3
            max-w-[500px]
            text-[13px]
            leading-6
            text-[#94A3B8]
          "
        >
          {product.description}
        </p>

        {/* Explore */}
        <Link
          href={product.href}
          className={`
            mt-auto
            flex
            items-center
            gap-2
            pt-5
            text-[11px]
            font-semibold
            uppercase
            tracking-wide

            ${
              isOrange
                ? "text-[#F97316]"
                : "text-[#A855F7]"
            }
          `}
        >
          <span>Explore</span>

          <ArrowIcon />
        </Link>
      </div>

      {/* ============================================================
          MOBILE CARD BOTTOM ACCENT
          ============================================================ */}

      <div
        className={`
          absolute
          bottom-0
          left-0
          h-[2px]
          w-full

          ${
            isOrange
              ? "bg-[#F97316]"
              : "bg-[#8B5CF6]"
          }
        `}
      />
    </article>
  );
}

/* ================================================================
   DESKTOP PRODUCT TYPES
   ================================================================ */

function DesktopProductTypes() {
  /* ==============================================================
     HEADING OBSERVER

     Only controls the Product Types heading.
     ============================================================== */

  const {
    ref: headingRef,
    visible: headingVisible,
  } = useReveal({
    threshold: 0.35,
  });

  /* ==============================================================
     CARDS OBSERVER

     Completely independent from the heading observer.

     The cards do NOT start animating when the heading appears.
     ============================================================== */

  const {
    ref: cardsRef,
    visible: cardsVisible,
  } = useReveal({
    threshold: 0.7,
  });

  return (
    <section
      className="
        hidden
        border-t
        border-white/[0.10]
        bg-[#05070D]
        py-16
        md:block
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-8
          lg:px-10
        "
      >

        {/* ==========================================================
    SECTION HEADER

    Independent reveal from the cards.
    ========================================================== */}

<div
  ref={headingRef}
  className={`
    mb-8
    ml-4
    max-w-[720px]

    transition-all
    duration-[2000ms]
    delay-[120ms]
    ease-[cubic-bezier(0.05,1,0.65,1)]

    ${
      headingVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-[35px] opacity-0"
    }
  `}
>
  {/* ==========================================================
      EYEBROW
      ========================================================== */}

  <div className="mb-5 flex items-center gap-4">
    <span className="h-[2px] w-11 bg-[#F97316]" />

    <span
      className="
        text-[14px]
        font-semibold
        uppercase
        tracking-[0.10em]
        text-[#F97316]
      "
    >
      Product Types
    </span>
  </div>

  {/* ==========================================================
      HEADING
      ========================================================== */}

  <h2
    className="
      text-[38px]
      font-semibold
      leading-[1.08]
      tracking-[-0.035em]
      text-white
      lg:text-[44px]
    "
  >
    Solutions for Every
    <br />
    Critical Need
  </h2>

  {/* ==========================================================
      GRADIENT LINE
      ========================================================== */}

  <div
    className="
      mt-5
      h-[2px]
      w-[300px]
      bg-gradient-to-r
      from-[#F97316]
      via-[#A855F7]
      to-transparent
    "
  />

  {/* ==========================================================
      DESCRIPTION
      ========================================================== */}

  <p
    className="
      mt-5
      max-w-[650px]
      text-[16px]
      leading-7
      text-[#B4BFCE]
    "
  >
    Engineered and manufactured high-voltage safety,
    electrical testing, and condition monitoring solutions
    built for reliability, accuracy, and safety.
  </p>

  {/* ==========================================================
      VIEW ALL PRODUCTS
      ========================================================== */}

  <Link
    href="/products"
    className="
      group
      mt-6
      inline-flex
      items-center
      gap-2.5
      text-[14px]
      font-semibold
      uppercase
      tracking-wide
      text-[#F97316]
    "
  >
    <span>View All Products</span>

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
</div>

        {/* ==========================================================
            DESKTOP PRODUCT GRID

            Separate observer from heading.

            Cards reveal sequentially once THIS grid enters
            the viewport.
            ========================================================== */}

        <div
          ref={cardsRef}
          className="
            grid
            grid-cols-2
            gap-4
            xl:grid-cols-4
          "
        >
          {products.map((product, index) => (
            <DesktopProductCard
              key={product.title}
              product={product}
              index={index}
              visible={cardsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   MOBILE PRODUCT TYPES
   ================================================================ */

function MobileProductTypes() {
  return (
    <section
      className="
        block
        border-t
        border-white/[0.10]
        bg-[#05070D]
        py-12
        md:hidden
      "
    >
      <div className="w-full px-5">
        {/* ==========================================================
            MOBILE HEADER
            ========================================================== */}

        <div className="mb-8">
          {/* Eyebrow */}
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#F97316]" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.10em]
                text-[#F97316]
              "
            >
              Product Types
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              text-[31px]
              font-semibold
              leading-[1.08]
              tracking-[-0.035em]
              text-white
            "
          >
            Solutions for Every
            <br />
            Critical Need
          </h2>

          {/* Gradient line */}
          <div
            className="
              mt-4
              h-[2px]
              w-[195px]
              bg-gradient-to-r
              from-[#F97316]
              via-[#A855F7]
              to-transparent
            "
          />

          {/* Description */}
          <p
            className="
              mt-4
              text-[13px]
              leading-6
              text-[#94A3B8]
            "
          >
            Engineered and manufactured high-voltage safety,
            electrical testing, and condition monitoring solutions
            built for reliability, accuracy, and safety.
          </p>

          {/* View all */}
          <Link
            href="/products"
            className="
              group
              mt-5
              inline-flex
              items-center
              gap-2
              text-[11px]
              font-semibold
              uppercase
              tracking-wide
              text-[#F97316]
            "
          >
            <span>View All Products</span>

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
        </div>

        {/* ==========================================================
            MOBILE PRODUCT LIST

            20px gap between cards.
            Each card has its own observer.
            ========================================================== */}

        <div className="flex flex-col gap-10">
          {products.map((product, index) => (
            <MobileProductCardReveal
              key={product.title}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   MOBILE CARD REVEAL WRAPPER

   Each mobile card has its own IntersectionObserver.

   Cards reveal individually as the user scrolls.
   ================================================================ */

function MobileProductCardReveal({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const {
    ref,
    visible,
  } = useReveal({
    threshold: 0.8,
  });

  return (
    <div
      ref={ref}
      className="
        transition-all
        duration-[1200ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]
      "
      style={{
        transitionDelay: `${Math.min(index*500)}ms`,
      }}
    >
      <MobileProductCard
        product={product}
        index={index}
        visible={visible}
      />
    </div>
  );
}

/* ================================================================
   MAIN PRODUCT TYPES COMPONENT
   ================================================================ */

export default function ProductTypes() {
  return (
    <>
      {/* ============================================================
          DESKTOP VERSION
          ============================================================ */}

      <DesktopProductTypes />

      {/* ============================================================
          MOBILE VERSION
          ============================================================ */}

      <MobileProductTypes />
    </>
  );
}