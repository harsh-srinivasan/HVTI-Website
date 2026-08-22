# HVTI Website — Design System & Build Reference

> **Purpose:** This document is the single source of truth for the HVTI website design.  
> Keep it in the repository and refer to it before creating or modifying any page/component so the visual language stays consistent.

---

## 1. Project Direction

### Brand

**HVTI — High Voltage Testing & Instrumentation**

The website should communicate:

- Engineering precision
- Electrical safety
- High-voltage expertise
- Industrial reliability
- Technical competence
- Modern engineering
- Premium B2B positioning
- Indian manufacturing capability

The design should feel **premium industrial + modern technology**, not like a generic corporate website.

### Primary visual feeling

**Dark industrial / high-tech / electrical energy**

The site should feel:

- Dark
- Clean
- Technical
- Premium
- Minimal but visually rich
- Strong contrast
- Purple electrical energy
- Orange safety/energy accents
- Realistic industrial photography
- Subtle futuristic details

Avoid:

- Bright corporate white layouts
- Excessive gradients
- Overly colorful UI
- Cartoon-style illustrations
- Generic stock-business imagery
- Excessive glassmorphism
- Heavy decorative effects that reduce readability

---

# 2. Reference Websites

The original references supplied for the project are:

- HVTI current website: https://hvti.in/
- Reference 1: https://jarshsafety.com/
- Reference 2: https://www.safeguardequipment.com/

These are **references for structure, content inspiration and industry positioning**, not designs to copy directly.

The final HVTI site should have its own visual identity based on the theme documented here.

---

# 3. Core Color Palette

## Brand Colors

| Name | Hex | Usage |
|---|---|---|
| Deep Purple | `#7C3AED` | Primary brand accent |
| Purple Light | `#A78BFA` | Secondary purple accent |
| Purple Dark | `#4C1D95` | Deep purple backgrounds/details |
| HVTI Orange | `#F97316` | Primary CTA / safety accent |
| Orange Light | `#FB923C` | Hover / lighter orange |

## Backgrounds

| Name | Hex | Usage |
|---|---|---|
| Background | `#05070D` | Main page background |
| Surface 1 | `#080D17` | Cards / panels |
| Surface 2 | `#111827` | Secondary surfaces / subtle UI |

## Text

| Name | Hex | Usage |
|---|---|---|
| Text Primary | `#F8FAFC` | Main headings |
| Text Secondary | `#CBD5E1` | Body text |
| Text Muted | `#94A3B8` | Supporting text |
| Text Dim | `#64748B` | Placeholder / low-priority text |

## Borders

Default borders should be subtle:

```text
border-white/[0.08]
border-white/[0.10]
border-white/[0.12]
```

Do not use strong grey borders everywhere.

---

# 4. Color Usage Rules

### Purple

Purple represents:

- Technology
- Monitoring
- Electrical intelligence
- Advanced engineering
- Data / diagnostics

Typical usage:

```text
#7C3AED
#A855F7
#A78BFA
```

### Orange

Orange represents:

- Safety
- Energy
- Action
- High voltage
- CTAs

Typical usage:

```text
#F97316
#FB923C
```

### Important rule

Do **not** make every component purple + orange at the same time.

Instead:

- Choose one primary accent for the component.
- Use the other color sparingly.
- Orange should generally remain the strongest action color.

---

# 5. Typography

Typography should be:

- Modern
- Highly readable
- Strong
- Industrial / technical without becoming futuristic
- Clean at large sizes

## Headings

Characteristics:

- Semibold
- Tight letter spacing
- Strong contrast
- Large desktop scale
- Responsive mobile scale

Typical Tailwind patterns:

```text
font-semibold
tracking-[-0.035em]
leading-[1.05]
```

## Body text

Use:

```text
text-[#CBD5E1]
text-[#94A3B8]
```

Body text should have comfortable line-height.

Avoid tiny body copy.

## Eyebrows / labels

Use:

```text
uppercase
font-semibold
tracking-[0.10em]
```

Orange or purple depending on the component.

---

# 6. Global Layout

## Maximum content width

Primary content container:

```text
max-w-[1440px]
```

Typical desktop horizontal padding:

```text
px-10
```

Tablet:

```text
px-8
```

Mobile:

```text
px-5 / px-6
```

The site should not allow content to stretch indefinitely on large monitors.

---

# 7. Responsive Strategy

Responsiveness is a first-class requirement.

We are deliberately designing **desktop and mobile versions separately where the composition needs to differ**, instead of forcing one layout to work everywhere.

Typical pattern:

```text
Desktop:
hidden md:block
```

or

```text
Mobile:
block md:hidden
```

For more complex sections, use separate:

```text
DesktopComponent
MobileComponent
```

This is intentional.

Do not sacrifice the desktop composition simply to make the mobile CSS easier.

---

# 8. Navbar

## Visual

Navbar:

- Dark background
- Thin bottom border
- HVTI logo on left
- Navigation centered
- CTA on right
- Language selector on far right
- Large enough navigation typography for readability

Navigation:

```text
Products
Solutions
Industries
About HVTI
Resources
Clients
```

CTA:

```text
REQUEST A QUOTE
```

Primary CTA uses HVTI orange.

## Scroll behavior

Navbar is fixed.

When scrolling:

- Navbar remains available
- It becomes more opaque
- It can subtly reveal the content underneath
- It should not completely block the page
- It should feel like a floating/overlay navigation system

## Hero relationship

The hero begins **below the navbar**.

Do not allow the hero's main content to hide underneath the navbar.

---

# 9. Hero Section

The current homepage hero establishes the main visual language.

## Hero messaging

```text
ENHANCING SAFETY, EMPOWERING ENERGY

Engineering Safety.
Testing Power.
Monitoring Performance.
```

The third line uses purple.

Supporting copy:

```text
High-voltage safety, electrical testing and condition monitoring
solutions engineered and manufactured in India.
```

## CTAs

Primary:

```text
EXPLORE PRODUCTS
```

Orange.

Secondary:

```text
TALK TO AN ENGINEER
```

Dark / transparent with subtle white border.

## Hero image

Hero uses a dramatic electrical-grid / high-voltage industrial background.

Visual characteristics:

- Power transmission towers
- Electrical infrastructure
- Dark environment
- Purple electrical energy
- Warm orange horizon / energy
- Strong depth
- Cinematic industrial photography

The image must remain secondary to the text.

Use overlays to maintain text readability.

## Mobile hero

A separate mobile background image may be used.

Do not simply crop the desktop image if doing so harms composition.

---

# 10. Hero Stats

The hero ends with a horizontal statistics strip.

Current stats:

```text
30+
YEARS
Industry Experience

800 kV
HIGH VOLTAGE
Testing Capability

ISO 9001:2015
CERTIFIED
Quality Management

INDIA
DESIGNED &
Manufactured
```

## Design

Each stat:

- Icon inside circular outlined container
- Orange or purple accent
- Large orange number/value
- White category
- Muted supporting text

Desktop:

- Four equal columns
- Vertical dividers
- Top border
- No unnecessary bottom section separator

Mobile:

- Two-column layout
- Responsive wrapping
- Preserve readability

---

# 11. Section Separator Rule

This is important.

Sections should generally have:

```text
border-t border-white/[0.10]
```

at the **top only**.

Avoid:

```text
border-y
```

when two adjacent sections would visually create two lines.

The goal is:

```text
SECTION A
────────────
SECTION B
────────────
SECTION C
```

not:

```text
SECTION A
────────────
────────────
SECTION B
────────────
────────────
SECTION C
```

Internal borders are allowed when they serve a component structure.

---

# 12. Product Types Section

This section comes immediately after the hero.

## Header

Eyebrow:

```text
PRODUCT TYPES
```

Heading:

```text
Solutions for Every
Critical Need
```

Supporting copy:

```text
Engineered and manufactured high-voltage safety,
electrical testing, and condition monitoring solutions
built for reliability, accuracy, and safety.
```

CTA:

```text
VIEW ALL PRODUCTS
```

## Product categories

1. Electrical Safety Equipment
2. Electrical Testing Equipment
3. Condition Monitoring Systems
4. Thermal & Imaging Systems

## Cards

Cards use:

- Dark surface
- Subtle border
- Rounded corners
- Product image
- Small icon
- Strong title
- Accent line
- Description
- Explore link
- Small bottom accent line

Accent pattern:

```text
Orange
Purple
Purple
Orange
```

## Desktop

Four-column layout at large widths.

Cards animate into view individually.

Animation:

- Slight vertical movement
- Fade in
- Slow / smooth easing
- Staggered entrance

Current desktop stagger:

```text
220ms
```

## Mobile

Cards are stacked vertically.

There should be visible spacing between cards.

Each card has its own reveal observer.

Do not make mobile cards feel compressed.

---

# 13. Product Card Imagery

Product images should look:

- Photorealistic
- High resolution
- Premium product photography
- Dark studio / industrial environment
- Controlled lighting
- Purple/orange highlights where appropriate

Avoid text inside generated product images.

The actual title/description should be rendered by HTML.

Current asset paths:

```text
/images/products/product-safety.jpg
/images/products/product-testing.jpg
/images/products/product-monitoring.jpg
/images/products/product-thermal.jpg
```

---

# 14. Trusted By Section

Purpose:

Show credibility through recognized organizations.

Current visual:

```text
TRUSTED BY INDUSTRY LEADERS
```

followed by organization logos.

## Logo marquee

The logos continuously move:

```text
RIGHT → LEFT
```

The movement should feel like:

```text
← ← ← ← ←
```

not independent groups moving separately.

Implementation uses duplicated sequences to create a seamless continuous loop.

Desktop speed:

```text
32s
```

Mobile:

```text
26s
```

Current organization assets:

```text
/images/organizations/
```

The actual logos should be supplied as clean transparent assets.

---

# 15. Custom Engineering Section

This section addresses users who cannot find a standard product.

## Core message

```text
CUSTOM ENGINEERING

Can't find what
you're looking for?
```

Supporting copy:

```text
We also develop customized solutions tailored to
your specific requirements.
```

## Features

1. Custom Testing Solutions
2. Specialized High-Voltage Equipment
3. Monitoring & Diagnostic Systems

Each feature contains:

- Icon
- Title
- Description
- Subtle divider

## Desktop layout

Two-column:

```text
LEFT
Content + features

RIGHT
Enquiry form
```

The background image spans the section.

## Desktop animation

The form slides in from the right.

The left content remains immediately visible.

Animation should be slow and smooth.

## Mobile layout

Stack:

```text
Main content
↓
Features
↓
Enquiry form
```

The background image is used only behind the **main text/features area**.

The enquiry form sits on the normal dark page background.

Do not allow the mobile background image to continue behind the entire form.

## Background

Current asset:

```text
/images/home/custom-engineering-bg.png
```

The background should remain visible enough to contribute to the visual identity while overlays preserve readability.

---

# 16. Forms

Forms should match the dark industrial theme.

## Inputs

Dark transparent/dark surface:

```text
bg-[#03050A]/65
```

Subtle border:

```text
border-white/[0.14]
```

Focus:

```text
border-[#8B5CF6]/70
```

Text:

```text
text-white
```

Placeholder:

```text
text-[#64748B]
```

## Primary form CTA

Use:

```text
#F97316
```

Do not use multi-color gradient buttons for primary actions.

Primary CTA should be visually simple and strong.

---

# 17. Buttons

## Primary

Orange:

```text
bg-[#F97316]
hover:bg-[#FB923C]
```

Characteristics:

- Rounded but not pill-shaped
- Strong uppercase label
- Medium/semibold weight
- Arrow icon when appropriate
- Subtle orange glow on hover

## Secondary

Dark/transparent:

```text
bg-white/[0.02]
border-white/50
```

Hover:

```text
border-white
bg-white/[0.06]
```

## Important

Avoid excessive gradient buttons.

The design direction specifically moved away from overly colorful multi-color gradient CTAs.

---

# 18. Icons

Icons should be:

- Simple
- Line-based
- Technical
- Consistent stroke weight
- Purple/orange according to context

Typical stroke:

```text
1.5–1.8
```

Do not mix radically different icon styles.

---

# 19. Cards

General card style:

```text
rounded-[10px]
rounded-[12px]
border border-white/[0.10]
bg-[#080D17]/90
```

Cards should have subtle depth, not heavy shadows.

Hover effects should be restrained:

- Small upward movement
- Slight border brightness
- Image scale around 1.04
- Accent color remains consistent

---

# 20. Image Treatment

All photography should follow one visual language:

### Industrial

- High voltage
- Substations
- Switchgear
- Transmission towers
- Electrical testing
- Engineers / technicians
- Industrial facilities
- Testing equipment

### Lighting

Prefer:

- Dark environments
- Blue/purple ambient light
- Orange highlights
- Cinematic contrast
- Controlled highlights

### Avoid

- Generic office photography
- Generic smiling business teams
- Bright stock photography
- Flat white backgrounds unless product photography specifically requires it

---

# 21. Generated Asset Rules

When generating image assets:

### Quality

Assets should be generated at sufficiently high resolution for web use.

Prefer:

- 16:9 for hero/background photography
- Wide crops for section backgrounds
- High-resolution product images
- Transparent PNG/SVG for logos/icons when applicable

### Composition

When the image is used behind text:

- Keep important subjects away from the text area
- Leave negative space where HTML content will sit
- Do not generate text inside the image
- Do not generate fake UI elements

### Product images

Prefer:

- Product isolated or cleanly staged
- Dark background
- Realistic materials
- Sharp details
- Correct industrial proportions
- No written labels that may become distorted

---

# 22. Logo Rules

The HVTI logo should ideally be:

```text
Transparent PNG
```

or preferably:

```text
SVG
```

Do not use a logo asset containing a baked-in checkerboard transparency pattern.

The checkerboard seen in an image editor/viewer must not be part of the actual image.

---

# 23. Animation Philosophy

Animations should feel:

**slow + premium + deliberate**

Not:

**fast + flashy + distracting**

Preferred easing:

```text
cubic-bezier(0.22,1,0.36,1)
```

or similarly smooth easing.

## Scroll reveal

Use IntersectionObserver for section/component reveals.

Typical pattern:

```text
opacity: 0 → 1
translateY(30–50px) → 0
```

Desktop product cards:

- Reveal one by one
- Slow
- Staggered

Mobile:

- Each card can have its own observer
- Reveal as it enters viewport

## Important

Animations should run once when an element first enters the viewport.

---

# 24. Responsive Design Philosophy

Always check:

### Desktop

- 1440px
- 1280px
- 1024px

### Mobile

- 390px
- 375px
- 360px

Important:

Do not simply shrink desktop elements.

Mobile layouts should be intentionally composed.

---

# 25. Current Home Page Component Order

Current homepage structure:

```text
Navbar
↓
Hero
↓
Product Types
↓
Trusted By
↓
Custom Engineering
↓
Footer
```

Minor visual changes may happen later, but this is the current foundation.

---

# 26. Current Component / Asset Structure

Recommended structure:

```text
components/
└── home/
    ├── Hero.tsx
    ├── ProductTypes.tsx
    ├── TrustedBy.tsx
    ├── CustomEngineering.tsx
    └── ...

public/
└── images/
    ├── hero/
    │   └── electrical-grid-hero.jpg
    │
    ├── products/
    │   ├── product-safety.jpg
    │   ├── product-testing.jpg
    │   ├── product-monitoring.jpg
    │   └── product-thermal.jpg
    │
    ├── organizations/
    │   └── ...
    │
    └── home/
        └── custom-engineering-bg.png
```

---

# 27. Development Rules

## Next.js

The website is being built from scratch using:

- Next.js
- React
- TypeScript
- Tailwind CSS

## Component philosophy

Components should be:

- Self-contained
- Clearly commented
- Responsive
- Easy to locate
- Easy to replace
- Easy to modify later

Every significant component should have a clear file-level comment identifying the component.

## Desktop/mobile

When desktop and mobile compositions differ substantially, keep separate implementations inside the same component file or separate components.

---

# 28. Code Change Convention

When modifying code, clearly identify the exact section being changed.

Use comments such as:

```tsx
/* ================================================================
   HERO BACKGROUND
   File: components/home/Hero.tsx
   ================================================================ */
```

This makes it easy to locate changes.

Do not unnecessarily rewrite unrelated sections of a component when making a targeted visual change.

---

# 29. Design Principles

The entire website should consistently communicate:

### 1. Safety

Orange accents and strong engineering imagery.

### 2. Technology

Purple accents, monitoring visuals and technical line icons.

### 3. Reliability

Structured layouts, clean typography and restrained motion.

### 4. Industrial expertise

Realistic equipment and infrastructure photography.

### 5. Premium B2B

Generous spacing, strong hierarchy, subtle borders and high-quality imagery.

---

# 30. Things We Explicitly Decided Against

Do not drift into:

- Bright white corporate layouts
- Excessive glassmorphism
- Excessive neon effects
- Heavy gradient borders everywhere
- Multi-color gradient CTA buttons
- Excessive rounded/pill UI
- Generic stock imagery
- Overly animated interfaces
- Tiny unreadable typography
- Two adjacent section separator lines

A gradient border may be explored later, but it is **not currently part of the default section treatment**.

---

# 31. Design Reference Summary

If the visual direction ever becomes unclear, return to this sentence:

> **HVTI should look like a premium dark industrial engineering company operating at the intersection of electrical safety, high-voltage testing, monitoring technology and modern energy infrastructure.**

The dominant visual language is:

```text
Dark Navy / Black
        +
Purple Technology
        +
Orange Safety / Energy
        +
Industrial Photography
        +
Clean Technical Typography
        +
Subtle Motion
```

That combination should remain recognizable across every page.

---

# 32. Page-by-Page Workflow

For every new page:

### Step 1 — Design

First create a visual design/mockup for:

- Desktop
- Mobile

### Step 2 — Finalize

Discuss:

- Layout
- Typography
- Spacing
- Images
- Cards
- CTA placement
- Animations
- Mobile composition

### Step 3 — Assets

Generate or prepare required image assets.

### Step 4 — Code

Build the page/component in Next.js.

### Step 5 — Responsive pass

Test desktop and mobile independently.

### Step 6 — Polish

Only after the structure is correct:

- Adjust spacing
- Typography
- Borders
- Image positioning
- Hover effects
- Animation timing

---

# 33. Current Status

## Homepage

Completed foundation:

- Navbar
- Hero
- Hero statistics
- Product Types
- Product card assets
- Trusted By marquee
- Custom Engineering
- Footer

Minor refinements may still be made later.

## Next phase

Build remaining pages **one page at a time**.

For each page:

```text
Reference
↓
Desktop visual
↓
Mobile visual
↓
Finalize design
↓
Generate assets
↓
Build components
↓
Responsive testing
```

This document should be treated as the project's persistent design reference so the visual theme does not need to be re-established from screenshots every time.
