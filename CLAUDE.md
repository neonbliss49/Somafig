# CLAUDE.md — Somatiq (Somafig)

## What is this project?

Somatiq is a Health Intelligence Platform. It connects wearable data (Oura Ring), blood values, cycle tracking, medication, symptoms, and lifestyle — and explains what they mean together. It's a demo/prototype for investor presentations.

This is the Figma Make codebase — React + TypeScript + Tailwind CSS + Framer Motion.

## Current state

The app has a working Morning Insight Flow (5 screens) and a Today screen. Other tabs (Insights, You, Journey) are placeholder screens.

### Architecture

- `src/app/App.tsx` — Main app component, contains: Morning Flow (Screen1-4), Transition Animation, Top Navigation, Side Menu, Bottom Navigation, Coach Chat Overlay, Evening Checkout Flow, Experiment Bottom Sheet, Placeholder Screens, State Machine
- `src/app/components/TodayScreenNew.tsx` — The Today screen component with all sub-components (StateCard, CausalChain, InterpretationDecision, NowAction, DiscoveryCard, ThroughTheDay items, Evening items, ValidatingMoment, ExperimentCard, LookingAhead)
- `src/app/components/ui/` — shadcn/ui components
- `src/app/components/figma/` — Figma-specific components

### Tech stack

- React + TypeScript
- Tailwind CSS
- Framer Motion (imported as `motion/react`)
- Lucide React for icons
- Vite build system
- DM Sans font (Google Fonts)

### Design system

**Palette:**
- `#F2EDE5` — Warm Cream (primary text, headlines) — NEVER use pure white (#FFFFFF)
- `#AFD2E0` — Soft Blue (secondary text, labels, supporting UI)
- `#2A677F` — Deep Teal (card backgrounds at low opacity, structural elements)
- `#FE7A2E` — Orange (sparing accent: experiment labels, notable data, FAB)
- `#0E1E26` — App background (very dark teal)

**Typography:**
- Font: DM Sans only
- Only even sizes: 28, 24, 20, 16, 14, 12
- MINIMUM 12px — nothing smaller
- Hierarchy through size, weight, and color — NOT through opacity alone

**Cards:**
- NO borders on cards. No outlines, no left-border accents, no border-bottom on cards.
- Cards defined by background fill (rgba of Deep Teal at various opacities) and spacing
- Glassmorphism: backdrop-blur where appropriate

**Layout:**
- Mobile-first: 390px × 844px container centered on desktop
- Bottom nav: Today | Insights | + FAB | You | Journey

### App states (dev toggles in side menu)

- Morning (default after completing Morning Flow)
- Midday — adjusted
- Midday — not adjusted
- Evening

### Demo persona

**Hanna, 49.** Perimenopause, endometriosis, iron deficiency (Ferritin low — last tested Sep 2024). Takes progesterone cyclically (vaginal, from Day 14). Wears Oura Ring. Today: Saturday, Luteal Phase Day 18, low recovery.

### Content principles

- **Explanation over scoring.** No scores, no numbers without context.
- **Data honesty.** Blood values always shown with measurement date. Never frame old values as current. Always acknowledge values may have changed.
- **One job per screen.** Every location in the app says something only said there.
- **Anti-dependency.** No streaks, no gamification, no alarm language.
- **Cross-layer connections are the USP.** Sleep + HRV + Cycle + Endometriosis + Iron + Medication — the value is in the connections no single device can make.
- **Medical boundary.** Somatiq infers and suggests. It never diagnoses. Always recommend discussing with doctor for medical decisions.

## What NOT to do

- Don't use pure white (#FFFFFF) for text
- Don't add borders to cards
- Don't use text smaller than 12px
- Don't use serif fonts
- Don't use alarm language ("WARNING", "ALERT", "DANGER")
- Don't present blood values as current without showing the test date
- Don't claim Somatiq measures hormone levels — it tracks wearable data + cycle + user input and infers
- Don't use opacity as the primary hierarchy tool — use real color values
