"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ================================================================
   PRODUCT DOCUMENTS
   File: components/products/ProductDocuments.tsx

   Desktop:
   - Designed to sit inside the shared Documents + CTA module.
   - No standalone full-width section spacing.
   - Larger readable document typography.
   - Brochure card slides in from the left.
   - Reusable across all product pages.

   Mobile:
   - Existing design preserved.
   ================================================================ */


/* ================================================================
   REVEAL HOOK
   ================================================================ */

function useReveal() {
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
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    ref,
    visible,
  };
}


/* ================================================================
   DOWNLOAD ICON
   ================================================================ */

function DownloadIcon() {
  return (
    <svg
      width="18"
      height="18"
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
   DESKTOP DOCUMENTS CONTENT

   IMPORTANT:

   This is intentionally NOT wrapped in a <section>.

   ProductPage will place this beside ProductCTA inside the shared
   desktop Documents + CTA module.
   ================================================================ */

function DesktopDocumentsContent({
  product,
}: {
  product: any;
}) {
  /* ==============================================================
     DOCUMENT REVEAL
     ============================================================== */

  const {
    ref: contentRef,
    visible: contentVisible,
  } = useReveal();

  return (
    <div className="hidden lg:block">
      <div
        ref={contentRef}
        className={`
          transition-all
          duration-[1100ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            contentVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-[30px] opacity-0"
          }
        `}
      >
        {/* ========================================================
            SECTION HEADER
            ======================================================== */}

        <div className="mb-3 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#A855F7]" />

          <span
            className="
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#A855F7]
            "
          >
            Documents
          </span>
        </div>

        <h2
          className="
            text-[32px]
            font-semibold
            leading-[1.1]
            tracking-[-0.03em]
            text-white
          "
        >
          Product resources
        </h2>

        {/* ========================================================
            BROCHURE CARD
            ======================================================== */}

        <div className="mt-6 w-full max-w-[560px]">
          <div
            className="
              group
              flex
              min-h-[82px]
              items-center
              justify-between
              rounded-[10px]
              border
              border-white/[0.09]
              bg-[#080D17]
              px-5
              py-4

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-[#8B5CF6]/40
              hover:shadow-[0_8px_24px_rgba(124,58,237,0.10)]
            "
          >
            {/* ====================================================
                DOCUMENT INFORMATION
                ==================================================== */}

            <div>
              <p
                className="
                  text-[15.5px]
                  font-semibold
                  leading-6
                  text-white
                "
              >
                Product Brochure
              </p>

              <p
                className="
                  mt-1
                  text-[13.5px]
                  leading-5
                  text-[#94A3B8]
                "
              >
                Technical product information
              </p>
            </div>

            {/* ====================================================
                DOWNLOAD BUTTON
                ==================================================== */}

            <Link
              href={product.brochure || "#"}
              aria-label="Download product brochure"
              className="
                flex
                h-[42px]
                w-[42px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#A855F7]/40
                bg-[#0B1020]
                text-[#A855F7]

                transition-all
                duration-200

                group-hover:border-[#A855F7]
                group-hover:bg-[#A855F7]/15
                group-hover:text-[#C084FC]
              "
            >
              <DownloadIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


/* ================================================================
   MAIN COMPONENT
   ================================================================ */

export default function ProductDocuments({
  product,
  layout = "all",
}: {
  product: any;
  layout?: "desktop" | "mobile" | "all";
}) {
  return (
    <>
      {/* ==========================================================
          DESKTOP
          ========================================================== */}

      {(layout === "desktop" || layout === "all") && (
        <DesktopDocumentsContent product={product} />
      )}

      {/* ==========================================================
          MOBILE
          ========================================================== */}

      {(layout === "mobile" || layout === "all") && (
        <section
          id="documents"
          className="
            border-b
            border-white/[0.08]
            bg-[#05070D]
            lg:hidden
          "
        >
        <div
          className="
            mx-auto
            w-full
            px-5
            py-12
            sm:px-8
          "
        >
          {/* ======================================================
              MOBILE HEADER
              ====================================================== */}

          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#A855F7]" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#A855F7]
              "
            >
              Documents
            </span>
          </div>

          <h2
            className="
              text-[29px]
              font-semibold
              tracking-[-0.03em]
              text-white
            "
          >
            Product resources
          </h2>

          {/* ======================================================
              MOBILE BROCHURE
              ====================================================== */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-between
              rounded-[9px]
              border
              border-white/[0.09]
              bg-[#080D17]
              px-4
              py-4
            "
          >
            <div>
              <p className="text-[13px] font-semibold text-white">
                Product Brochure
              </p>

              <p className="mt-1 text-[11px] text-[#64748B]">
                Technical product information
              </p>
            </div>

            <Link
              href={product.brochure || "#"}
              className="text-[#A855F7]"
              aria-label="Download product brochure"
            >
              <DownloadIcon />
            </Link>
          </div>
        </div>
      </section>
      )}
    </>
  );
}