"use client";

import { useEffect, useRef, useState } from "react";

/* ================================================================
   CUSTOM ENGINEERING
   File: components/home/CustomEngineering.tsx

   Desktop:
   - Left content slides in from LEFT
   - Form slides in from RIGHT
   - Background image covers the full section
   - Softer gradient keeps the image visible

   Mobile:
   - Background image remains visible behind the entire section
   - Content stacks vertically
   - Form appears below the feature list
   ================================================================ */


/* ================================================================
   REVEAL HOOK

   IMPORTANT:
   The dependency array is intentionally EMPTY.

   This prevents the React error:
   "The final argument passed to useEffect changed size
   between renders."
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
        threshold: 0.5,
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
   FEATURE DATA
   ================================================================ */

const features = [
  {
    title: "Custom Testing Solutions",
    description:
      "Tailored systems built to meet your unique application and industry standards.",
    accent: "purple",
  },
  {
    title: "Specialized High-Voltage Equipment",
    description:
      "Engineered instruments for safe, reliable and accurate performance.",
    accent: "orange",
  },
  {
    title: "Monitoring & Diagnostic Systems",
    description:
      "Smart solutions for real-time monitoring, analysis and predictive insights.",
    accent: "purple",
  },
];


/* ================================================================
   ICONS
   ================================================================ */

function TestingIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
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
    </svg>
  );
}


function VoltageIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13 2L5 13H11L10 22L19 10H13L13 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function MonitoringIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="15"
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


function FeatureIcon({ index }: { index: number }) {
  if (index === 0) {
    return <TestingIcon />;
  }

  if (index === 1) {
    return <VoltageIcon />;
  }

  return <MonitoringIcon />;
}


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
   FEATURE ITEM
   ================================================================ */

function FeatureItem({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const isOrange = feature.accent === "orange";

  return (
    <div
      className="
        flex
        items-start
        gap-4
        border-b
        border-white/[0.10]
        py-5
        last:border-b-0
        sm:gap-5
        sm:py-6
      "
    >
      {/* ==========================================================
          ICON
          ========================================================== */}

      <div
        className={`
          flex
          h-[52px]
          w-[52px]
          shrink-0
          items-center
          justify-center
          rounded-[10px]
          border
          bg-[#05070D]/70

          ${
            isOrange
              ? "border-[#F97316]/70 text-[#F97316]"
              : "border-[#8B5CF6]/70 text-[#A855F7]"
          }
        `}
      >
        <FeatureIcon index={index} />
      </div>

      {/* ==========================================================
          TEXT
          ========================================================== */}

      <div className="pt-[1px]">
        <h3
          className="
            text-[16px]
            font-semibold
            leading-6
            text-white
            sm:text-[17px]
          "
        >
          {feature.title}
        </h3>

        <p
          className="
            mt-1.5
            max-w-[520px]
            text-[13px]
            leading-6
            text-[#CBD5E1]
            sm:text-[14px]
            sm:leading-6
          "
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
}


/* ================================================================
   FORM INPUT
   ================================================================ */

function FormInput({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span
        className="
          mb-2
          block
          text-[13px]
          font-medium
          text-[#CBD5E1]
          sm:text-[14px]
        "
      >
        {label}
      </span>

      <input
        type="text"
        placeholder={placeholder}
        className="
          h-[52px]
          w-full
          rounded-[7px]
          border
          border-white/[0.14]
          bg-[#03050A]/65
          px-4
          text-[14px]
          text-white
          outline-none
          placeholder:text-[#64748B]
          transition-colors
          duration-200
          focus:border-[#8B5CF6]/70
          focus:bg-[#03050A]/80
        "
      />
    </label>
  );
}


/* ================================================================
   ENQUIRY FORM
   ================================================================ */

function EnquiryForm() {
  return (
    <div
      className="
        w-full
        rounded-[16px]
        border
        border-white/[0.12]
        bg-[#05070D]/90
        p-6
        shadow-[0_20px_70px_rgba(0,0,0,0.35)]
        backdrop-blur-md
        sm:p-7
        lg:p-8
      "
    >
      {/* ==========================================================
          FORM HEADER
          ========================================================== */}

      <div className="mb-7">
        <p
          className="
            text-[13px]
            font-semibold
            uppercase
            tracking-[0.14em]
            text-[#A855F7]
            sm:text-[14px]
          "
        >
          Tell Us What You Need
        </p>

        <p
          className="
            mt-2
            text-[14px]
            leading-6
            text-[#94A3B8]
            sm:text-[15px]
          "
        >
          Our team will get back to you with the right solution.
        </p>
      </div>

      {/* ==========================================================
          FORM FIELDS
          ========================================================== */}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormInput
          label="Full Name"
          placeholder="Enter your name"
        />

        <FormInput
          label="Organization"
          placeholder="Enter organization name"
        />

        <FormInput
          label="Email Address"
          placeholder="Enter your email"
        />

        <FormInput
          label="Phone Number"
          placeholder="Enter phone number"
        />
      </div>

      {/* ==========================================================
          REQUIREMENT
          ========================================================== */}

      <label className="mt-5 block">
        <span
          className="
            mb-2
            block
            text-[13px]
            font-medium
            text-[#CBD5E1]
            sm:text-[14px]
          "
        >
          Tell Us About Your Requirement
        </span>

        <textarea
          rows={5}
          placeholder="Describe your requirement in detail..."
          className="
            min-h-[145px]
            w-full
            resize-none
            rounded-[7px]
            border
            border-white/[0.14]
            bg-[#03050A]/65
            px-4
            py-3.5
            text-[14px]
            leading-6
            text-white
            outline-none
            placeholder:text-[#64748B]
            transition-colors
            duration-200
            focus:border-[#8B5CF6]/70
            focus:bg-[#03050A]/80
          "
        />
      </label>

      {/* ==========================================================
          SEND ENQUIRY BUTTON

          Centered rather than full width.
          ========================================================== */}

      <div className="mt-7 flex justify-center">
        <button
          type="button"
          className="
            group
            inline-flex
            h-[56px]
            min-w-[210px]
            items-center
            justify-center
            gap-3
            rounded-[7px]
            bg-[#F97316]
            px-8
            text-[13px]
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
          <span>Send Enquiry</span>

          <span
            className="
              transition-transform
              duration-200
              group-hover:translate-x-1
            "
          >
            <ArrowIcon />
          </span>
        </button>
      </div>
    </div>
  );
}


/* ================================================================
   DESKTOP VERSION
   ================================================================ */

/* ================================================================
   DESKTOP VERSION
   ================================================================ */

function DesktopCustomEngineering() {
  /* ==============================================================
     RIGHT FORM REVEAL ONLY

     The left content is intentionally static.

     Only the enquiry form slides in from the RIGHT.
     ============================================================== */

  const {
    ref: rightRef,
    visible: rightVisible,
  } = useReveal();

  return (
    <section
      id="custom-engineering"
      className="
        relative
        hidden
        min-h-[820px]
        w-full
        overflow-hidden
        border-t
        border-white/[0.08]
        bg-[#05070D]
        lg:block
      "
    >
      {/* ==========================================================
          DESKTOP BACKGROUND IMAGE
          ========================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage:
            "url('/images/home/custom-engineering-bg.png')",
        }}
      />

      {/* ==========================================================
          IMAGE GRADIENT

          Keeps the background visible while maintaining
          readability for the content.
          ========================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(90deg,rgba(3,6,13,0.78)_0%,rgba(3,6,13,0.48)_30%,rgba(3,6,13,0.20)_52%,rgba(3,6,13,0.55)_78%,rgba(3,6,13,0.82)_100%)]
        "
      />

      {/* ==========================================================
          BOTTOM FADE
          ========================================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[220px]
          bg-gradient-to-t
          from-[#05070D]
          via-[#05070D]/45
          to-transparent
        "
      />

      {/* ==========================================================
          DESKTOP CONTENT
          ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[820px]
          w-full
          max-w-[1440px]
          items-center
          gap-14
          px-10
          py-20
          xl:gap-20
        "
      >
        {/* ========================================================
            LEFT SIDE

            NO REVEAL ANIMATION.

            This content is immediately visible when the section
            enters the viewport.
            ======================================================== */}

        <div
          className="
            w-[46%]
            max-w-[650px]
          "
        >
          {/* ======================================================
              EYEBROW
              ====================================================== */}

          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#A855F7]" />

            <span
              className="
                text-[13px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#A855F7]
              "
            >
              Custom Engineering
            </span>
          </div>

          {/* ======================================================
              HEADING
              ====================================================== */}

          <h2
            className="
              max-w-[650px]
              text-[48px]
              font-semibold
              leading-[1.05]
              tracking-[-0.035em]
              text-white
              xl:text-[48px]
            "
          >
            Can't find what
            <br />
            you're looking for?
          </h2>

          {/* ======================================================
              ORANGE LINE
              ====================================================== */}

          <div className="mt-7 h-[2px] w-[172px] bg-[#F97316]" />

          {/* ======================================================
              DESCRIPTION
              ====================================================== */}

          <p
            className="
              mt-7
              max-w-[570px]
              text-[17px]
              leading-8
              text-[#CBD5E1]
            "
          >
            We also develop customized solutions tailored to
            your specific requirements.
          </p>

          {/* ======================================================
              FEATURES
              ====================================================== */}

          <div className="mt-10">
            {features.map((feature, index) => (
              <FeatureItem
                key={feature.title}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* ========================================================
            RIGHT SIDE — ENQUIRY FORM

            ONLY THIS PART ANIMATES.

            Slides in from the RIGHT.
            ======================================================== */}

        <div
          ref={rightRef}
          className={`
            ml-auto
            w-[50%]
            max-w-[760px]

            transition-all
            duration-[3000ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              rightVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-[80px] opacity-0"
            }
          `}
        >
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   MOBILE VERSION
   ================================================================ */

function MobileCustomEngineering() {
  const {
    ref: contentRef,
    visible: contentVisible,
  } = useReveal();

  const {
    ref: formRef,
    visible: formVisible,
  } = useReveal();

  return (
    <section
      id="custom-engineering-mobile"
      className="
        relative
        block
        w-full
        overflow-hidden
        border-t
        border-white/[0.08]
        bg-[#05070D]
        lg:hidden
      "
    >
      {/* ==========================================================
          MOBILE BACKGROUND

          Background image is ONLY behind the main content area
          above the enquiry form.

          It does NOT extend behind the form.
          ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-[720px]
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage:
            "url('/images/home/custom-engineering-bg.png')",
        }}
      />

      {/* ==========================================================
          MOBILE IMAGE OVERLAY

          Applies only to the background-image area.
          ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-[720px]
          bg-[linear-gradient(180deg,rgba(3,6,13,0.62)_0%,rgba(3,6,13,0.48)_28%,rgba(3,6,13,0.32)_55%,rgba(3,6,13,0.72)_100%)]
        "
      />

      {/* ==========================================================
          MOBILE BOTTOM FADE

          Ends the image naturally before the form area.
          ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-[500px]
          h-[220px]
          bg-gradient-to-t
          from-[#05070D]
          via-[#05070D]/55
          to-transparent
        "
      />

      {/* ==========================================================
          MOBILE CONTENT
          ========================================================== */}

      <div className="relative z-10 px-5 py-14 sm:px-7 sm:py-16">
        {/* ========================================================
            LEFT CONTENT
            ======================================================== */}

        <div
          ref={contentRef}
          className={`
            transition-all
            duration-[1200ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              contentVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-[50px] opacity-0"
            }
          `}
        >
          {/* Eyebrow */}

          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#A855F7]" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.13em]
                text-[#A855F7]
              "
            >
              Custom Engineering
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              text-[34px]
              font-semibold
              leading-[1.08]
              tracking-[-0.035em]
              text-white
              sm:text-[40px]
            "
          >
            Can't find what
            <br />
            you're looking for?
          </h2>

          {/* Orange line */}

          <div className="mt-5 h-[2px] w-[125px] bg-[#F97316]" />

          {/* Description */}

          <p
            className="
              mt-5
              max-w-[540px]
              text-[14px]
              leading-6
              text-[#CBD5E1]
              sm:text-[15px]
              sm:leading-7
            "
          >
            We also develop customized solutions tailored to
            your specific requirements.
          </p>

          {/* Features */}

          <div className="mt-7">
            {features.map((feature, index) => (
              <FeatureItem
                key={feature.title}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* ========================================================
            MOBILE FORM

            Form remains on the normal dark background.
            ======================================================== */}

        <div
          ref={formRef}
          className={`
            mt-8

            transition-all
            duration-[1200ms]
            delay-[180ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              formVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-[50px] opacity-0"
            }
          `}
        >
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   MAIN COMPONENT
   ================================================================ */

export default function CustomEngineering() {
  return (
    <>
      {/* ============================================================
          DESKTOP
          ============================================================ */}

      <DesktopCustomEngineering />

      {/* ============================================================
          MOBILE
          ============================================================ */}

      <MobileCustomEngineering />
    </>
  );
}