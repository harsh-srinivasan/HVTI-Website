"use client";

import { useEffect, useRef, useState } from "react";

/* ================================================================
   PRODUCT APPLICATIONS
   File: components/products/ProductApplications.tsx

   Desktop:
   - 2-column premium engineering tile grid
   - Large custom technical SVG illustrations as card centerpieces
   - Center-aligned typography and refined industrial styling
   - Subtle hover glow, lift, and scaling
   - Sequential reveal animation

   Mobile:
   - Standalone mobile section with custom application icons
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

          // Animation only happens once.
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.55,
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
   APPLICATION-SPECIFIC CUSTOM ENGINEERING SVG ILLUSTRATIONS
   ================================================================ */

/* 1. Industrial Electric Motor */
function MotorIcon({ className = "h-[58px] xl:h-[64px] w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Motor Stator Housing Body */}
      <rect
        x="16"
        y="26"
        width="40"
        height="32"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      {/* Stator Longitudinal Cooling Fins */}
      <path
        d="M23 26v32M30 26v32M37 26v32M44 26v32M51 26v32"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeOpacity="0.85"
      />
      {/* Top Electrical Terminal Connection Box */}
      <rect
        x="28"
        y="18"
        width="16"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M33 22h6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Drive Endbell & Bearing Collar */}
      <rect
        x="56"
        y="30"
        width="5"
        height="24"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Rotor Drive Shaft with Keyway */}
      <rect
        x="61"
        y="38"
        width="11"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M64 42h5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Non-Drive End / Rear Cooling Cowl */}
      <rect
        x="10"
        y="28"
        width="6"
        height="28"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13 33v18"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
      {/* Base Mounting Feet with Bolt Slots */}
      <path
        d="M14 58v7h12v-7M42 58v7h12v-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="61.5" r="1.2" fill="currentColor" />
      <circle cx="48" cy="61.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

/* 2. Electrical Generator */
function GeneratorIcon({ className = "h-[58px] xl:h-[64px] w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Stator Casing & Flange */}
      <circle
        cx="40"
        cy="40"
        r="28"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="40"
        cy="40"
        r="24"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="3 3"
        strokeOpacity="0.6"
      />
      {/* Inner Electromagnetic Rotor Hub */}
      <circle
        cx="40"
        cy="40"
        r="11"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      {/* Alternating Current (AC) Sine Wave at Center */}
      <path
        d="M33 40c2-4 4-4 7 0s5 4 7 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* 8-Pole Stator Excitation Coils */}
      <path
        d="M40 12v6M40 62v6M12 40h6M62 40h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M20 20l4.5 4.5M55.5 55.5L60 60M20 60l4.5-4.5M55.5 24.5L60 20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Stator External Terminal Lugs / Output Posts */}
      <rect
        x="36"
        y="6"
        width="8"
        height="6"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      {/* Base Skid Stand Brackets */}
      <path
        d="M22 68h36M28 64v4M52 64v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* 3. High-Voltage Switchgear Panel */
function SwitchgearIcon({ className = "h-[58px] xl:h-[64px] w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Main Switchgear Enclosure Cabinet */}
      <rect
        x="18"
        y="10"
        width="44"
        height="60"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      {/* Upper Metering & Control Compartment */}
      <path
        d="M18 28h44"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      {/* Digital Control Display Panel */}
      <rect
        x="24"
        y="15"
        width="16"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M28 19h8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Status Pilot LEDs */}
      <circle cx="47" cy="17" r="1.4" fill="currentColor" />
      <circle cx="53" cy="17" r="1.4" fill="currentColor" />
      <circle cx="47" cy="21.5" r="1.4" fill="currentColor" />
      <circle cx="53" cy="21.5" r="1.4" fill="currentColor" />
      {/* Middle Circuit Breaker Compartment */}
      <path
        d="M18 50h44"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      {/* Disconnect Knife Switch / Breaker Mechanism */}
      <rect
        x="24"
        y="33"
        width="32"
        height="12"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="31" cy="39" r="2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="49" cy="39" r="2" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M33 39l11-4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Lower Busbar / Cable Termination Compartment */}
      <path
        d="M26 60h28M32 55v9M40 55v9M48 55v9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Base Foundation / Plinth */}
      <path
        d="M14 70h52"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* 4. High-Voltage Multi-Layer Cable */
function CableIcon({ className = "h-[58px] xl:h-[64px] w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Layer 1: Outer Protective Jacket */}
      <rect
        x="8"
        y="24"
        width="22"
        height="32"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      {/* Jacket Texture / Armor Bands */}
      <path
        d="M15 24v32M22 24v32"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeOpacity="0.8"
      />
      <path
        d="M8 32l7-4M8 44l7-4M8 56l7-4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.6"
      />
      {/* Layer 2: Metallic Screen & Bedding */}
      <rect
        x="30"
        y="28"
        width="14"
        height="24"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M37 28v24"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="2 2"
      />
      {/* Layer 3: XLPE Dielectric Insulation */}
      <rect
        x="44"
        y="32"
        width="13"
        height="16"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Layer 4: Stranded Conductor Core */}
      <rect
        x="57"
        y="36"
        width="11"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      {/* Individual Stranded Wires / Cable Termination */}
      <path
        d="M68 37.5h4M68 40h4.5M68 42.5h4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Concentric Cable Cross-Section Indicator */}
      <circle cx="68" cy="18" r="7" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="68" cy="18" r="4.5" stroke="currentColor" strokeWidth="1.1" strokeDasharray="2 2" />
      <circle cx="68" cy="18" r="2" fill="currentColor" />
    </svg>
  );
}

/* 5. High-Voltage Transformer */
function TransformerIcon({ className = "h-[58px] xl:h-[64px] w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Primary & Secondary Magnetic Induction Coils */}
      <circle
        cx="29"
        cy="44"
        r="14"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="51"
        cy="44"
        r="14"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      {/* Laminated Magnetic Core Tie-Bars */}
      <path
        d="M15 30h50M15 58h50"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Core Center Magnetic Coupling Axis */}
      <path
        d="M40 26v36"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeDasharray="3 3"
        strokeOpacity="0.7"
      />
      {/* High-Voltage Ceramic Bushing 1 (Left) */}
      <path
        d="M29 16v14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M24 22h10M25.5 26h7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="29" cy="13" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      {/* High-Voltage Ceramic Bushing 2 (Right) */}
      <path
        d="M51 16v14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M46 22h10M47.5 26h7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="51" cy="13" r="2.5" stroke="currentColor" strokeWidth="1.4" />
      {/* Ground Skid Rails */}
      <path
        d="M20 66h40M27 62v4M53 62v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function getApplicationIcon(application: string, className?: string) {
  const normalized = application.toLowerCase().trim();
  if (normalized.includes("motor")) return <MotorIcon className={className} />;
  if (normalized.includes("generator")) return <GeneratorIcon className={className} />;
  if (normalized.includes("switchgear")) return <SwitchgearIcon className={className} />;
  if (normalized.includes("cable")) return <CableIcon className={className} />;
  if (normalized.includes("transformer")) return <TransformerIcon className={className} />;
  return <MotorIcon className={className} />;
}


/* ================================================================
   DESKTOP APPLICATION TILE CARD
   ================================================================ */

function DesktopApplicationCard({
  application,
  index,
  visible,
}: {
  application: string;
  index: number;
  visible: boolean;
}) {
  return (
    <div
      className={`
        group
        relative
        flex
        min-h-[140px]
        flex-col
        items-center
        justify-between
        overflow-hidden
        rounded-[10px]
        border
        border-white/[0.08]
        bg-[#080D17]
        px-3.5
        py-3.5
        xl:min-h-[148px]
        xl:py-4

        transition-all
        duration-[1200ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]

        motion-reduce:transition-none
        motion-reduce:transform-none
        motion-reduce:opacity-100

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-[24px] opacity-0"
        }

        hover:-translate-y-1
        hover:border-[#8B5CF6]/50
        hover:bg-[#0B1020]
        hover:shadow-[0_8px_24px_rgba(124,58,237,0.12)]
      `}
      style={{
        transitionDelay: `${index * 90 + 90}ms`,
      }}
    >
      {/* ==========================================================
          SUBTLE ATMOSPHERIC RADIAL GLOW BEHIND ICON
          ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            h-[85px]
            w-[85px]
            rounded-full
            bg-[#7C3AED]/0
            blur-[24px]
            transition-all
            duration-300
            group-hover:bg-[#7C3AED]/15
          "
        />
      </div>

      {/* ==========================================================
          SUBTLE TECHNICAL CORNER REGISTRATION MARKS
          ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-2
          top-2
          font-mono
          text-[8px]
          text-white/[0.06]
          transition-colors
          duration-300
          group-hover:text-[#A855F7]/30
        "
      >
        +
      </div>

      <div
        className="
          pointer-events-none
          absolute
          right-2
          top-2
          font-mono
          text-[8px]
          text-white/[0.06]
          transition-colors
          duration-300
          group-hover:text-[#A855F7]/30
        "
      >
        +
      </div>

      {/* ==========================================================
          HERO ENGINEERING SVG ILLUSTRATION
          ========================================================== */}

      <div
        className="
          relative
          z-10
          flex
          w-full
          flex-1
          items-center
          justify-center
          text-[#A855F7]
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:text-[#C084FC]
          group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.30)]
        "
      >
        {getApplicationIcon(application, "h-[58px] xl:h-[64px] w-auto")}
      </div>

      {/* ==========================================================
          APPLICATION TITLE
          ========================================================== */}

      <span
        className="
          relative
          z-10
          mt-2
          text-center
          font-sans
          text-[14.5px]
          font-semibold
          leading-tight
          tracking-[-0.01em]
          text-[#F1F5F9]
          transition-colors
          duration-200
          group-hover:text-white
          xl:text-[15.5px]
        "
      >
        {application}
      </span>
    </div>
  );
}


/* ================================================================
   DESKTOP APPLICATIONS CONTENT

   IMPORTANT:
   This is intentionally NOT wrapped in <section>.

   ProductPage owns the shared Applications + Features section.
   ================================================================ */

function DesktopApplicationsContent({
  applications,
}: {
  applications: string[];
}) {
  /* ==============================================================
     HEADER REVEAL
     ============================================================== */

  const {
    ref: headingRef,
    visible: headingVisible,
  } = useReveal();

  /* ==============================================================
     APPLICATION CARDS REVEAL
     ============================================================== */

  const {
    ref: cardsRef,
    visible: cardsVisible,
  } = useReveal();

  return (
    <div className="hidden lg:block">
      {/* ==========================================================
          APPLICATIONS HEADER
          ========================================================== */}

      <div
        ref={headingRef}
        className={`
          mb-6

          transition-all
          duration-[1200ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          motion-reduce:transition-none
          motion-reduce:transform-none
          motion-reduce:opacity-100

          ${
            headingVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[24px] opacity-0"
          }
        `}
      >
        {/* ======================================================
            EYEBROW
            ====================================================== */}

        <div className="mb-3 flex items-center gap-3">
          <span className="h-[2px] w-8 bg-[#A855F7]" />

          <span
            className="
              font-sans
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#A855F7]
            "
          >
            Applications
          </span>
        </div>

        {/* ======================================================
            HEADING
            ====================================================== */}

        <h2
          className="
            max-w-[400px]
            font-heading
            text-[32px]
            font-semibold
            leading-[1.1]
            tracking-[-0.02em]
            text-white
            sm:text-[34px]
          "
        >
          Designed for critical
          <br />
          applications
        </h2>
      </div>

      {/* ==========================================================
          APPLICATION TILE GRID (3-column desktop grid matching reference)
          ========================================================== */}

      <div
        ref={cardsRef}
        className="
          grid
          grid-cols-3
          gap-3
          xl:gap-3.5
        "
      >
        {applications.map(
          (application: string, index: number) => (
            <DesktopApplicationCard
              key={application}
              application={application}
              index={index}
              visible={cardsVisible}
            />
          )
        )}
      </div>
    </div>
  );
}


/* ================================================================
   MAIN COMPONENT
   ================================================================ */

export default function ProductApplications({
  product,
  layout = "all",
}: {
  product: any;
  layout?: "desktop" | "mobile" | "all";
}) {
  const applications = product.applications || [];

  return (
    <>
      {/* ==========================================================
          DESKTOP
          ========================================================== */}

      {(layout === "desktop" || layout === "all") && (
        <DesktopApplicationsContent
          applications={applications}
        />
      )}

      {/* ==========================================================
          MOBILE
          ========================================================== */}

      {(layout === "mobile" || layout === "all") && (
        <section
          id="applications"
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
              py-14
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
                  font-sans
                  text-[11.5px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#A855F7]
                "
              >
                Applications
              </span>
            </div>

            <h2
              className="
                font-heading
                text-[29px]
                font-semibold
                leading-[1.1]
                tracking-[-0.02em]
                text-white
                sm:text-[32px]
              "
            >
              Designed for critical
              <br />
              applications
            </h2>

            {/* ======================================================
                MOBILE APPLICATION GRID (2-column compact engineering cards)
                ====================================================== */}

            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              {applications.map((application: string, index: number) => {
                const isLastOdd =
                  index === applications.length - 1 &&
                  applications.length % 2 !== 0;
                return (
                  <div
                    key={application}
                    className={`
                      group
                      relative
                      flex
                      flex-col
                      items-center
                      justify-center
                      rounded-[10px]
                      border
                      border-white/[0.09]
                      bg-[#080D17]
                      p-4
                      text-center
                      transition-all
                      duration-300
                      hover:border-[#8B5CF6]/50
                      hover:bg-[#0B1020]
                      ${
                        isLastOdd
                          ? "col-span-2 mx-auto w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.5rem)]"
                          : ""
                      }
                    `}
                  >
                    {/* Custom Technical SVG Icon (Centerpiece ~45% emphasis) */}
                    <div className="mb-2.5 flex h-[48px] w-[48px] items-center justify-center text-[#A855F7] transition-transform duration-300 group-hover:scale-105">
                      {getApplicationIcon(application, "h-[42px] w-auto")}
                    </div>

                    {/* Application Name */}
                    <span className="font-sans text-[14px] font-semibold tracking-[-0.01em] text-white">
                      {application}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}