# Somatiq — Today Screen (Narrative Flow)
## Lovable Prompt
## March 2026

---

## THE PRODUCT

Somatiq is a Health Intelligence Platform. It connects wearable data, blood values, cycle tracking, nutrition, and lifestyle — and explains what they mean together. No scores. Explanations, connections, one clear action per moment.

This is the Today screen — the daily home screen. It shows a personalized day plan for Hanna (49, perimenopause, endometriosis, iron deficiency, Oura Ring). Today is Saturday. Luteal Phase Day 18. Low recovery. She completed a Morning Insight Flow and chose "Conserve Energy."

---

## THE DESIGN PRINCIPLE

**This is NOT a dashboard. This is NOT a checklist. This is a guided narrative.**

The user scrolls through her day like a story — each section flows into the next. The Morning Flow (which the user just completed) was immersive and cinematic: big typography, atmospheric backgrounds, one thought per screen. Today should feel like a continuation of that experience — the same visual language, the same confidence — but now with interactive elements (checkboxes, buttons, expandable details) woven into the narrative.

Think of it as: **the Morning Flow told the story. Today is the living plan that came from it.**

Every section should feel different from the one before — different visual weight, different treatment. The screen should have rhythm: a loud moment, then a quiet one, then something warm, then something minimal. Not a stack of identical cards.

---

## VISUAL LANGUAGE

**This must match the Morning Flow aesthetic — atmospheric, immersive, warm-dark.**

### Palette
- **#F2EDE5** — Warm Cream. Primary text, headlines. Never use pure white.
- **#AFD2E0** — Soft Blue. Secondary text, supporting labels, quiet UI elements.
- **#2A677F** — Deep Teal. Card backgrounds, surfaces, structure, depth.
- **#FE7A2E** — Orange. Sparing accent only: experiment label, morning insight badge, FAB button, notable data points. Maximum 3–4 uses on the entire screen.
- **Background:** #0E1E26 or similar very dark teal. A subtle atmospheric landscape image should be faintly visible in the upper portion of the screen (behind the hero area and primary action), adding depth and warmth. The image fades to the solid background color as you scroll down.

### Typography
- **Font:** DM Sans (Google Fonts)
- **Sizes (only even numbers):** 28, 24, 20, 16, 14, 12
- **Minimum:** 12px — nothing smaller, ever
- **Hierarchy through size + weight + color.** Not through opacity. Every text element gets a real color value, not rgba with low alpha.
- **Bold moments:** Some key phrases within the narrative can be larger or bolder than their surroundings. Like in the Stitch reference — when Somatiq makes a key statement, the typography should reflect its importance. Not everything is 14px body text.

### Hard Design Rules
- **NO borders on cards.** No outlines, no left-border accents, no bottom-border separators on cards. Cards are defined by their fill, their spacing, and their content — not by lines.
- **NO identical cards.** The State Card, Primary Action, Discovery, and Experiment must each look visually distinct. Different background intensity, different padding, different typographic treatment. The user should never think "this is just another card."
- **Dividers between list items** (Through the Day, Evening, Looking Ahead) may use a very subtle horizontal line (rgba white at 4-6%) or just spacing. No heavy dividers.
- **WCAG AA contrast minimum** on every piece of text. Premium = effortlessly readable.
- **Mobile frame:** 390px × 844px, centered on desktop with a very dark background behind it.

### What Makes It Premium
- **Atmospheric depth** — the background image bleeding through the hero area
- **Typographic confidence** — key moments get big, bold text
- **Visual variety** — each section has its own character
- **Warm cream instead of cold white** — everything feels human, not clinical
- **Generous spacing** — content breathes, nothing is cramped
- **Restraint** — not everything is a card, not everything has an icon, not everything is interactive

---

## SCREEN CONTENT — THE NARRATIVE FLOW

All elements below must appear in this exact order. All text is exact. Nothing may be added or removed.

---

### TOP NAVIGATION (fixed, always visible)

- Left: Circle avatar, letter "H", subtle teal-tinted background
- Center: "SAT" small label above, "22" large below, tiny orange dot beneath
- Right: Sparkles icon (coach trigger)

Background: Semi-transparent, blurs content behind it on scroll.

---

### SECTION 1: "Where you stand"

**State Card** — The anchor. The loudest element on the screen.

This should feel substantial — the strongest background fill, the most visual weight. This is where the user's eyes land first.

Content:
- **"Low recovery capacity"** — 28px, weight 500, cream. This is the headline of the entire screen.
- **"3 adjustments for today"** — 14px, cream at ~80%
- **"Watch out: Energy dip likely in 3–4 hours"** — 12px, soft blue

**Wearable Data Strip** — Inside the State Card, below the text, separated by a subtle horizontal divider (the only allowed divider inside a card):
- Four values side by side, each centered in its quarter:
  - **28 ↓** (HRV) — the value in soft blue, the ↓ arrow in ORANGE (this dropped — it's notable)
  - **5h 42m** (SLEEP) — cream
  - **68** (RHR) — cream
  - **+0.3°** (TEMP) — ORANGE (elevated — notable)
- Below each value: label in 12px uppercase, very muted

**Cycle Context** — Inside the State Card, below the wearable strip:
- "◎ LUTEAL PHASE · DAY 18 · PERIOD IN ~10 DAYS"
- 12px, uppercase, tracking wide, muted but readable

---

### SECTION 2: "What Somatiq saw this morning"

**Morning Insight Reopen** — A compact, tappable element. Not a full card — more like a warm-tinted row.

- Small circle icon with orange tint (sun or sparkle)
- **"YOUR MORNING INSIGHT"** — 12px, uppercase, weight 700, orange-tinted
- **"Low-recovery phase · sleep debt + hormonal shift · conserving"** — 14px, soft blue

Subtle warm background tint (orange at very low opacity). Clearly tappable but not a prominent card.

---

### SECTION 3: "What you can do right now"

This is the narrative turning point — from "here's what's happening" to "here's what to do."

**Section intro:** "What can I do?" — 20px, weight 600, cream. This feels like a headline within the story, not a section label.

**Primary Action Card** — The centerpiece. The most atmospheric card on the screen.

This card should have the background image faintly visible through it — a hint of landscape behind the content, creating depth and warmth. Not a flat rectangle.

Content:
- **"PRIMARY ACTION"** — 12px, uppercase, weight 700, ORANGE
- **"Take a 10–15 min walk"** — 20px, weight 500, cream
- **"Light movement helps your nervous system shift out of stress — especially effective at this cycle phase."** — 14px, soft blue. This sentence is the narrative bridge — it explains WHY this action, for THIS person, on THIS day.
- **Two buttons** side by side:
  - "Start" — ghost style (transparent with cream border)
  - "Done" — solid cream background with dark text. This is the primary CTA.

---

### SECTION 4: "What Somatiq discovered"

**Discovery Card** — Visually DISTINCT from the Primary Action. This is intelligence, not a task.

Different background treatment than the action card. Perhaps slightly cooler tint, or a different padding rhythm.

Content:
- **"TODAY'S DISCOVERY"** — 12px, uppercase, weight 700, soft blue
- Sparkle icon + **"INSIGHT"** label in small text
- **"Your deep sleep improved 22% since starting Magnesium"** — 20px, weight 500, cream. This is a big moment — the aha. Let the typography reflect it.
- **"Consistent across 4 nights · Oura sleep data + experiment tracking"** — 12px, soft blue

---

### SECTION 5: "Your plan for the rest of the day"

**Section heading:** "Through The Day" — 20px, weight 600, cream

Three checklist items. These are NOT cards. They're a clean, open list. Each item:

- **Empty circle checkbox** (24px, tappable, cream border, fills on tap)
- **Title** — 16px, weight 500, cream
- **Optional subtitle** — 12px, soft blue
- **Expand chevron** on the right — 20px, very muted
- Tapping the checkbox marks it done (line-through, muted)
- Tapping the row expands additional detail

**Item 1:**
- "Eat steady, protein-focused meals"
- Subtitle: "Your system is sensitive to blood sugar dips right now"

**Item 2:**
- "Limit caffeine after 14:00"
- Right-aligned badge: **"AFTERNOON"** in 12px, uppercase, ORANGE

**Item 3:**
- "Reduce cognitive load where you can"
- Subtitle: "It's Saturday — a good day to let your system rest"

---

### SECTION 6: "Tonight"

**Section heading:** "Evening" — 20px, weight 600, cream. On the right side: **"TONIGHT"** — 12px, uppercase, weight 700, ORANGE

Three items, visually QUIETER than Through the Day. The text is slightly smaller, the colors slightly more muted. These are on the horizon.

Each item has: checkbox + title + optional context (italic) + expand chevron

**Item 1:**
- "Progesterone" — 14px, weight 500 (note: 14px, not 16px like Through the Day)
- Context: "Supports deep sleep at this cycle phase" — 12px, italic, muted

**Item 2:**
- "Magnesium 400mg"
- Context: "Experiment Day 4 of 7" — 12px, italic, muted

**Item 3:**
- "Sleep before 23:00"
- Context: "Try to avoid screen 30 minutes before bed" — 12px, italic, muted

---

### SECTION 7: "A word from Somatiq"

**Validating Moment** — No card. No background. No icon circle. Just a quiet, personal note.

- Small sparkle icon (14px, very muted)
- Text in quotes, italic: **"Day 4 of this pattern. Each time you've adjusted early, recovery improved. You know your body."**
- 14px, italic, cream at ~70%

This should feel like a handwritten note in the margin. The quietest UI element on the entire screen.

---

### SECTION 8: "Your running experiment"

**Section label:** "ACTIVE EXPERIMENT" — 12px, uppercase, weight 700, soft blue

**Experiment Card** — Compact, with one accent: the orange label.

Content:
- **"DAY 4 OF 7"** — 12px, uppercase, weight 700, ORANGE (the only orange element in this section)
- **"Magnesium before sleep"** — 16px, weight 500, cream
- **"Deep sleep +18 min avg"** — 12px, soft blue
- **7 dots in a row:** 4 filled (cream at 60%), 3 empty (very subtle). Each dot ~8px.

---

### SECTION 9: "What's coming"

**Section heading:** "Looking ahead" — 20px, weight 600, cream

Three text rows with small icons. No cards. The quietest section on the screen.

Each row: small icon (20px, muted) + text

**Row 1:**
- Calendar icon
- "Next few days may stay heavy. Follicular phase in ~10 days typically brings relief." — 14px, soft blue

**Row 2:**
- Clock icon
- "Gynecologist in 12 days" — 14px, soft blue
- Subtext: "Collecting: HRV trend, sleep patterns, symptom log, cycle data" — 12px, very muted
- Arrow icon on the right (tappable)

**Row 3:**
- Eye icon
- "Your HRV drops more steeply in luteal phase than 3 months ago. 2 more cycles needed." — 14px, soft blue

---

### BOTTOM NAVIGATION (fixed)

5 items equally spaced:
- **Today** (active — cream or teal highlight)
- **Insights** (muted)
- **+ FAB** (orange circle, raised above the nav bar, with "+" icon)
- **You** (muted)
- **Journey** (muted)

Nav background: very dark, slightly transparent with blur.

---

## SPACING RHYTHM

The spacing between sections should vary — this creates the narrative rhythm:

- State Card → Morning Insight: **16px** (closely connected)
- Morning Insight → "What can I do?": **36px** (breathing room, new chapter)
- Primary Action → Discovery: **36px** (breathing room)
- Discovery → Through the Day: **40px** (transition from intelligence to action)
- Through the Day → Evening: **36px**
- Evening → Validating Moment: **32px**
- Validating Moment → Experiment: **36px**
- Experiment → Looking Ahead: **48px** (biggest gap — new context, winding down)
- After Looking Ahead: **48px** bottom padding before nav

---

## TECH STACK

- React + TypeScript + Tailwind CSS
- Framer Motion (motion/react) for animations and transitions
- Lucide React for icons
- DM Sans from Google Fonts
- Mobile container: 390px × 844px centered on desktop

---

## WHAT NOT TO DO

- Don't add any elements not listed above
- Don't use borders on cards (no outline, no left-border, no border-bottom on cards)
- Don't make all cards look the same — each must have distinct visual character
- Don't use text smaller than 12px
- Don't use pure white (#FFFFFF) — use warm cream (#F2EDE5)
- Don't use opacity as the main way to create hierarchy — use real color values
- Don't make Evening as visually prominent as Through the Day
- Don't put the bottom navigation inside the scrollable content — it's fixed
- Don't use the word "WARNING" or alarm language
- Don't use a serif font — stay with DM Sans throughout
- Don't stack identical cards — if two things look the same, one of them needs a redesign