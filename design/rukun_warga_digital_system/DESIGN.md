---
name: Rukun Warga Digital System
colors:
  surface: '#fff8f7'
  surface-dim: '#ffcfcb'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ef'
  surface-container: '#ffe9e7'
  surface-container-high: '#ffe2df'
  surface-container-highest: '#ffdad7'
  on-surface: '#410004'
  on-surface-variant: '#3d4949'
  inverse-surface: '#611113'
  inverse-on-surface: '#ffedeb'
  outline: '#6d7979'
  outline-variant: '#bcc9c8'
  surface-tint: '#006a69'
  primary: '#006a69'
  on-primary: '#ffffff'
  primary-container: '#31aaa9'
  on-primary-container: '#003938'
  inverse-primary: '#68d8d6'
  secondary: '#6e5d2d'
  on-secondary: '#ffffff'
  secondary-container: '#f8e0a4'
  on-secondary-container: '#746332'
  tertiary: '#b32827'
  on-tertiary: '#ffffff'
  tertiary-container: '#ff695f'
  on-tertiary-container: '#6b0007'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#86f4f3'
  primary-fixed-dim: '#68d8d6'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#00504f'
  secondary-fixed: '#f8e0a4'
  secondary-fixed-dim: '#dbc58b'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#544518'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ac'
  on-tertiary-fixed: '#410003'
  on-tertiary-fixed-variant: '#900a12'
  background: '#fff8f7'
  on-background: '#410004'
  surface-variant: '#ffdad7'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system is engineered for local neighborhood governance (Rukun Tetangga / RT), balancing civic responsibility with effortless everyday usability. It bridges multi-generational demographics: neighborhood administrators managing finances, resident registries, and official circulars alongside everyday residents tracking monthly dues, emergency broadcasts, and community events.

The visual style blends **Corporate Modern** with warm, community-first civic clarity:
- **Clean Structure & Accountability:** Highly legible tabular presentations, unambiguous status badges, and rigorous data hierarchies instill trust in neighborhood administration and financial stewardship.
- **Approachable Civic Touch:** Soft organic neutrals and muted cream warmth soften administrative rigidity without compromising efficiency or authority.
- **High-Density Usability:** Clear touch targets, visible focus states, and low cognitive friction accommodate both elderly residents on mobile screens and administrators operating intensive desktop portals.

## Colors

The palette establishes administrative integrity alongside warm community approachability:

- **Primary Teal (`#31AAA9`):** The primary anchor for navigation, active states, key interactive controls, and affirmative validation. It projects civic transparency, freshness, and renewal.
- **Secondary Warm Cream (`#F8E0A4`):** A soft, warm companion tone utilized for subtle feature banners, highlights, and contextual guidance chips. Never used for body text; paired with deep neutral copy for contrast compliance.
- **Alert Crimson (`#A82020`):** Semantic warning, overdue payment flags ("Belum Lunas"), urgent broadcast notices, and destructive confirmation modals.
- **Deep Burgundy (`#6C1A1A`):** Administrative accent providing authority, grounding headers, and high-contrast badges for critical RT security advisories or overdue balances.
- **Neutrals & Surface Tiers:** Canvas surfaces rest on `#F8FAFC` and `#F1F5F9` with structured card surfaces on `#FFFFFF`. Line strokes and structural dividers adhere to a subtle slate palette (`#E2E8F0` and `#CBD5E1`) with slate text hierarchy (`#0F172A` for primary headlines, `#475569` for secondary copy, and `#64748B` for tertiary captions).

## Typography

The typographic hierarchy pairs **Plus Jakarta Sans** for structural display headings with **Inter** for data-heavy reading, dashboards, and operational labels.

- **Headlines (Plus Jakarta Sans):** Introduces friendly, contemporary civic warmth with crisp geometry that maintains poise in administrative headers and metric titles.
- **Body & Data Displays (Inter):** Highly legible, neutral, and micro-optimized for tabular accounting figures (Iuran Warga), resident identification registries (NIK/KK), and descriptive neighborhood letters (Surat Pengantar). Tabular numbers (`font-variant-numeric: tabular-nums`) must be activated for all financial columns and metric readouts.
- **Labels & Badges:** Rendered in medium and semi-bold weights of Inter to guarantee distinct legibility even at reduced sizes on mobile viewpoints.

## Layout & Spacing

The layout is built on a responsive 12-column fluid grid system on desktop that shifts down cleanly for mobile usage:

- **Desktop (1024px+):** 12-column grid with a fixed collapsible sidebar (`260px`), `1.5rem` (`24px`) gutters, and `2rem` (`32px`) canvas margin. Administrative cards and data grids span 4, 6, 8, or 12 columns.
- **Tablet (768px – 1023px):** 8-column grid with `1.25rem` (`20px`) gutters and margins. Side navigation collapses into an off-canvas drawer.
- **Mobile (< 768px):** 4-column fluid layout with `1rem` (`16px`) margins and gutters. Multi-column metric cards stack into single-column cards or 2x2 summary grids.

Spacing follows an 8pt modular rhythm (`4px`, `8px`, `16px`, `24px`, `40px`) to enforce mathematical predictability across form controls, data table padding, and administrative card spacing.

## Elevation & Depth

Visual hierarchy prioritizes precision through crisp low-contrast outlines supplemented by soft, functional ambient elevation:

- **Surface Layering:**
  - Base canvas: `#F8FAFC`.
  - Secondary grouping canvas / tables: `#F1F5F9`.
  - Primary interactive panels and cards: `#FFFFFF` framed by a subtle 1px border (`#E2E8F0`).
- **Elevation Steps:**
  - **Flat / Surface Level (Cards, Fields, Tables):** 1px border (`#E2E8F0`), no shadow.
  - **Level 1 (Hovered items, Popovers, Dropdowns):** `box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)`.
  - **Level 2 (Modals, Action Sheets, Floating Drawers):** `box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)`, overlaid against a backdrop of `rgba(15, 23, 42, 0.45)` with a `4px` blur filter.

## Shapes

The design system employs a **Rounded** shape model (`0.5rem` / `8px` default radius):
- **Buttons, Inputs, Selectors, and Chips:** `8px` (`0.5rem`) for accessible, friendly click and touch targets.
- **Cards, Administrative Panels, and Dialogs:** `16px` (`1rem`) using `rounded-lg` to create clear, softened bounding boxes for administrative modules.
- **Badges and Status Tags:** Pill-shaped (`9999px`) to visually differentiate metadata tags from interactive square buttons and input fields.

## Components

### Buttons
- **Primary:** Solid Teal (`#31AAA9`) background, `#FFFFFF` text, `font-weight: 600`. Hover: `#288E8D`. Active: `#217574`. Focus: 2px offset outline in `#31AAA9`.
- **Secondary / Outlined:** 1px border (`#31AAA9`), transparent background, `#288E8D` text. Hover: `#F0FDFA`.
- **Destructive:** Solid Crimson (`#A82020`) or outlined crimson, `#FFFFFF` text. Used for resident removal, emergency broadcasts, or rejection workflows.
- **Ghost / Tertiary:** Transparent background, slate text (`#475569`). Hover: `#F1F5F9`.

### Status Badges (Status Pembayaran & Surat)
Rendered as pill-shaped (`9999px`) badges with `6px 12px` padding and `12px` semi-bold text:
- **Lunas / Disetujui (Paid / Approved):** Background `#E6F7F7`, border `#A2E3E2`, text `#1B6B6A`.
- **Belum Lunas / Ditolak (Unpaid / Overdue):** Background `#FEECEB`, border `#F8A8A8`, text `#A82020`.
- **Diproses (In Progress):** Background `#FEF9E7`, border `#F8E0A4`, text `#8D6B14`.
- **Selesai / Terverifikasi (Completed):** Background `#F1F5F9`, border `#CBD5E1`, text `#334155`.

### Data Tables (Daftar Warga & Kas RT)
- **Container:** Wrapped in a rounded-lg (`16px`) container with `#E2E8F0` border and `#FFFFFF` background.
- **Header:** Background `#F8FAFC`, uppercase `11px` Inter semi-bold, letter-spacing `0.05em`, color `#64748B`.
- **Rows:** Minimum height `52px`, hover state `#F8FAFC`, bottom border `1px solid #F1F5F9`. Numeric columns use monospace/tabular figures and align right.

### Input Fields & Controls
- **Text Inputs & Dropdowns:** Minimum height `44px`, background `#FFFFFF`, border `1px solid #CBD5E1`, radius `8px`. Focus state shifts border to `#31AAA9` with a subtle teal glow (`0 0 0 3px rgba(49, 170, 169, 0.2)`).
- **Checkboxes & Radios:** `18px x 18px`, primary teal active state with white indicator check.

### Administrative Metric Cards
- Background `#FFFFFF`, border `1px solid #E2E8F0`, padding `24px`, radius `16px`. Features metric headline (`headline-md`), small label (`label-sm` in `#64748B`), and an accent icon badge colored in teal (`#31AAA9`) or warm cream (`#F8E0A4`).

### Modal Dialogs (Pengajuan Surat & Input Iuran)
- Centered overlay modal, max-width `540px` (or `720px` for multi-step resident forms), radius `16px`, background `#FFFFFF`. Features explicit header bar with close trigger, padded body (`24px`), and sticky bottom action bar containing aligned Cancel and Confirmation actions.