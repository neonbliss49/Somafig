# Somatiq — Today Screen: Complete Update
## Figma Make Prompt — 21 Changes
## Apply to the current version (the corrected Bild 2 design)

---

## WHAT THIS PROMPT DOES

Fixes content errors, adds missing interactive elements (expands, bottom sheet), deepens content (endometriosis, iron deficiency, doctor prep), and updates the causal chain. All in one pass.

**Do NOT change the visual design language.** Same colors, same typography sizes, same card treatments, same spacing approach. Only change content, add interactions, and update the elements listed below.

---

## SECTION A: FIXES

### A1. Evening Section
The Evening section currently has too many items and the wrong title.

**Change title** from "Tonight's focus" to **"Evening"**

**Keep exactly 3 items:**
1. "Progesterone" — context: "Supports deep sleep at this cycle phase"
2. "Magnesium 400mg" — context: "Experiment Day 4 of 7"
3. "Sleep before 23:00" — context: "Try to avoid screen 30 minutes before bed"

**Remove** any other items (like "Reduce cognitive load") from the Evening section. That belongs in Through the Day only.

**Only Item 2 (Magnesium) shows "Experiment Day 4 of 7".** The other two items do NOT reference the experiment.

### A2. Experiment Card Title
**Change** "Magnesium Experiment" to **"Magnesium before sleep"**

### A3. Cycle Context — Remove from State Card
**Remove** the line "LUTEAL PHASE · DAY 18 · PERIOD IN ~10 DAYS" from the State Card entirely. The cycle is now a node in the Causal Chain (see Section B).

The State Card now shows only:
- "Low recovery capacity" (headline)
- "3 adjustments for today" (subline)
- "Watch out: Energy dip likely in 3–4 hours" (warning)
- Wearable Strip (HRV, Sleep, RHR, Temp)

Nothing else inside the State Card.

---

## SECTION B: CAUSAL CHAIN UPDATE

The chain currently has 3 nodes. It now has **5 nodes** — showing both measured triggers AND known conditions.

### New Chain Structure (top to bottom):

**Node 1 — Sleep (measured, acute):**
- Circle: 44px, background rgba(42,103,127,0.4)
- Icon: Moon, 20px, stroke cream
- Title: "Sleep depth reduced" — 16px, weight 600, cream
- Subtitle: "3 short nights" — 14px, soft blue

**Node 2 — HRV (measured, acute):**
- Circle: 44px, background rgba(254,122,46,0.2), border 1.5px solid rgba(254,122,46,0.35)
- Icon: Activity/pulse, 20px, stroke orange
- Title: "HRV dropped 15%" — 16px, weight 600, cream
- Subtitle: "Sign of nervous system load" — 14px, soft blue

**Node 3 — Cycle (tracked, contextual):**
- Circle: 44px, background rgba(42,103,127,0.3)
- Icon: Droplets, 20px, stroke soft blue (#AFD2E0)
- Title: "Luteal Phase · Day 18" — 16px, weight 600, cream
- Subtitle: "Shifting toward regulation" — 14px, soft blue

**Node 4 — Endometriosis (profile, chronic):**
- Circle: 44px, background rgba(254,122,46,0.1)
- Icon: Flame or Zap, 20px, stroke rgba(254,122,46,0.6)
- Title: "Endometriosis" — 16px, weight 600, cream
- Subtitle: "Increases baseline energy demand" — 14px, soft blue

**Node 5 — Result:**
- Circle: 44px, background rgba(242,237,229,0.1)
- Inside: solid dot 12px, orange (#FE7A2E)
- Title: "Reduced recovery capacity" — 16px, weight 600, cream
- No subtitle

**Vertical connecting line:** Same as before (1.5px, gradient from blue to orange), but now longer to connect all 5 nodes. Gap between nodes: 28px.

**Below the chain (16px gap):**
- "Amplified by: Low Ferritin (last tested Jan 2026)" — 12px, rgba(175,210,224,0.4), italic

**Section label stays:** "WHAT'S DRIVING THIS"

---

## SECTION C: INTERPRETATION UPDATE

The interpretation text below the causal chain changes to include endometriosis context and the integrated pattern quote.

### The Quote (unchanged):
"Your body is shifting energy from **performance** to **regulation**."
— 24px, italic, cream. "performance" and "regulation" in orange.

### The Body Text (updated):
Replace the current body text with:

"Endometriosis increases your body's baseline energy demand — especially in late luteal phase, this amplifies the impact of sleep debt. Your nervous system is prioritizing restoration over output. Day 4 of this pattern: each time you've adjusted early, recovery improved."

— 14px, rgba(175,210,224,0.6), line-height 1.55

Note: The old "pattern quote" element that used to sit between Evening and Experiment is now integrated here as the last sentence. **Remove the standalone Validating Moment / pattern quote element from its old position.** It no longer exists as a separate element.

### Decision Badge (unchanged):
"● CONSERVING ENERGY" pill badge stays as-is below the body text.

---

## SECTION D: EXPAND CONTENT FOR THROUGH THE DAY

Each Through the Day item gets expandable content. Tapping the chevron (or the item row) toggles the expand open/closed with a smooth animation (height auto, 300ms ease).

### Item 1: "Eat steady, protein-focused meals"
**Expand content:**

**Why today**
"Your current hormonal phase makes your energy more sensitive to blood sugar changes. Your last Ferritin was low (January 2026) — iron-rich meals are especially important right now."
— 14px, rgba(175,210,224,0.6)

**How to do it**
- "Breakfast: eggs + dark leafy greens, or yogurt with pumpkin seeds"
- "Lunch: protein + healthy fats + complex carbs"
- "Include iron-rich foods: lentils, spinach, dark chocolate"
- "Avoid: sugar spikes on their own"
— 14px, rgba(175,210,224,0.5), each item on its own line with a small dot marker (6px, rgba(175,210,224,0.2))

**Personal context** (highlighted box, subtle background rgba(42,103,127,0.08), border-radius 12px, padding 14px):
Sparkle icon (14px) + "Low Ferritin amplifies fatigue during luteal phase. Steady iron intake supports both energy and overnight recovery."
— 14px, rgba(175,210,224,0.6)

### Item 2: "Limit caffeine after 14:00"
**Expand content:**

**Why today**
"Caffeine has a half-life of 5–6 hours. Consuming it after 14:00 can delay deep sleep onset — which your recovery depends on tonight."
— 14px, rgba(175,210,224,0.6)

**How to do it**
- "Switch to decaf, herbal tea, or water after 2 PM"
- "If you need an energy lift, try a 10-minute walk instead"
— 14px, rgba(175,210,224,0.5)

### Item 3: "Reduce cognitive load where you can"
**Expand content:**

**Why today**
"Your brain consumes up to 20% of your energy. On a low-recovery day, reducing cognitive strain frees resources for physical restoration."
— 14px, rgba(175,210,224,0.6)

**How to do it**
- "Postpone complex decisions to Monday"
- "Keep plans light — it's Saturday"
- "Give yourself permission to do less"
— 14px, rgba(175,210,224,0.5)

### Expand styling (all items):
- "Why today" label: 12px, weight 700, rgba(175,210,224,0.35), uppercase, letter-spacing 1px
- "How to do it" label: 12px, weight 700, rgba(175,210,224,0.35), uppercase, letter-spacing 1px
- "Personal context" label (if present): 12px, weight 700, rgba(42,103,127,0.7), uppercase
- Content appears below the item subtitle, indented to align with the title text (not the checkbox)
- Top border: 1px solid rgba(42,103,127,0.08) separating the expand from the item above
- Padding top: 16px

---

## SECTION E: EXPAND CONTENT FOR EVENING

Same expand behavior as Through the Day. Tapping chevron toggles open/closed.

### Item 1: "Progesterone"
**Expand content:**

**Why tonight**
"At this point in your cycle, your natural progesterone is at its peak. Your supplemental dose supports GABA activity in the brain, promoting deeper and more restorative sleep."
— 14px, rgba(175,210,224,0.6)

### Item 2: "Magnesium 400mg"
**Expand content:**

**Why tonight**
"Magnesium Glycinate supports GABA activity and complements the sleep-promoting effect of progesterone. This is Day 4 of your active experiment — consistency matters for reliable results."
— 14px, rgba(175,210,224,0.6)

### Item 3: "Sleep before 23:00"
**Expand content:**

**Why tonight**
"Early sleep cycles are critical for nervous system repair. Your HRV typically recovers faster when you're asleep before 23:00 — especially during luteal phase."
— 14px, rgba(175,210,224,0.6)

---

## SECTION F: STATE CARD EXPAND

Tapping the State Card (or a chevron indicator on the right side of the headline) expands additional detail below the wearable strip.

### Expand content:

**Outlook without adjustments**
- "Short-term: Energy taper within 3–4 hours"
- "Next-day: Slightly increased recovery needs"
— Label: 12px, weight 700, rgba(175,210,224,0.35), uppercase
— Items: 14px, rgba(175,210,224,0.5), each as a bullet line

**Hormonal context**
"Your current luteal phase makes recovery more sensitive to poor sleep. Endometriosis adds additional baseline demand. Adjusting early has a stronger impact today."
— Label: 12px, weight 700, rgba(175,210,224,0.35), uppercase
— Text: 14px, rgba(175,210,224,0.6)

**Pattern insight** (highlighted box, same style as Through the Day personal context):
Sparkle icon + "On similar days where you adjusted early, your next-day recovery improved significantly. This pattern has been consistent across 4 of 6 similar cycles."
— 14px, rgba(175,210,224,0.6)

### Expand styling:
- Appears below the wearable strip (or below the State Card content area)
- Top border: 1px solid rgba(42,103,127,0.12)
- Padding top: 18px
- Same animation as other expands (height auto, 300ms ease)
- A small chevron (ChevronDown, 18px) on the right side of the State Card headline indicates expandability. Rotates 180° when expanded.

---

## SECTION G: EXPERIMENT BOTTOM SHEET

Tapping the Experiment Card opens a bottom sheet that slides up from the bottom. Background dims 50%. Drag-down to close. Rounded top corners (20px).

### Bottom Sheet Content:

**Header:**
- "Magnesium before sleep" — 20px, weight 500, cream
- "Active Experiment · Day 4 of 7" — 12px, weight 700, orange, uppercase

**Hypothesis Card** (background rgba(42,103,127,0.1), border-radius 14px, padding 16px):
- "If you take Magnesium before sleep, your deep sleep should improve."
- 14px, rgba(175,210,224,0.7)

**Protocol:**
- Label "What to do:" — 12px, weight 700, rgba(175,210,224,0.35), uppercase
- "Take 400mg Magnesium Glycinate 30–60 min before bed" — 14px, rgba(175,210,224,0.6)
- Label "What Somatiq tracks:" — 12px, weight 700, rgba(175,210,224,0.35), uppercase
- "Deep sleep duration, sleep onset time, HRV" — 14px, rgba(175,210,224,0.6)

**Progress Tracker:**
- 7 circles in a row (32px each, gap 10px), with day labels below (Mon, Tue, Wed, Thu, Fri, Sat, Sun) in 12px
- Mon–Thu: filled cream at 60%
- Fri–Sun: outlined rgba(42,103,127,0.2)
- Below each filled day: deep sleep value — "1h 38m", "1h 22m", "1h 41m", "1h 35m" — 12px, rgba(175,210,224,0.5)

**Results So Far:**
- "Before experiment (7-day avg):" — 12px label, then "Deep Sleep 1h 12m" — 16px, cream
- "During experiment (so far):" — 12px label, then "Deep Sleep 1h 34m" — 16px, cream
- Delta: "+22 min (+31%)" — 14px, weight 600, orange
- Below: small line chart showing 7 pre-experiment values (muted thin line, rgba(175,210,224,0.2)) and 4 experiment values (orange thin line). Chart height ~80px, minimal — no axis labels, no grid. Just the two lines showing the difference.

**Footer:**
- "Cancel Experiment" — 12px, rgba(175,210,224,0.3), centered. Tap shows confirmation dialog.

### Bottom Sheet styling:
- Background: #0E1E26 (solid dark, not transparent)
- Max height: 85% of screen
- Scrollable if content exceeds
- Close via drag-down or tap outside (dimmed area)
- Slide-up animation: 350ms spring ease

---

## SECTION H: LOOKING AHEAD UPGRADE

Replace the current Looking Ahead section entirely with this enriched version.

### Section intro:
"What Somatiq sees coming." — 14px, italic, rgba(175,210,224,0.5). Margin-bottom: 8px.

### Section heading:
"Looking ahead" — 20px, weight 600, cream. Margin-bottom: 20px.

### Item 1: Recovery Outlook
- Calendar icon (18px, rgba(175,210,224,0.25))
- **"Recovery may stay low through the week"** — 14px, weight 500, cream at 80%
- "Your luteal phase continues for ~10 more days. Follicular phase typically brings relief. Expect gradual improvement if you maintain today's adjustments." — 14px, rgba(175,210,224,0.45), margin-top 4px

### Item 2: Doctor Prep (richer, expandable)
- Medical cross or stethoscope icon (18px, rgba(175,210,224,0.25))
- **"Gynecologist in 12 days"** — 14px, weight 500, cream at 80%
- "Somatiq is preparing your visit" — 12px, rgba(175,210,224,0.4)
- Arrow icon on right (tappable indicator)

**Expand on tap (or this could be a bottom sheet — but expand is simpler for now):**

**Suggested topics to discuss:**
- "Ferritin recheck — your last value was low (January 2026). Worth retesting to track improvement."
- "Oral progesterone 200mg — may improve deep sleep quality. Your data shows consistent sleep disruption in luteal phase."
- "Endometriosis management — your symptom patterns suggest increasing baseline load."
— Each as a row: small teal dot (6px) + text (14px, rgba(175,210,224,0.6))

**What Somatiq can export for your doctor:**
"3 months of: HRV trends, sleep architecture, cycle patterns, symptom log, experiment results"
— 14px, rgba(175,210,224,0.5)

Button: "Preview export" — ghost style (transparent, cream border, 14px weight 600, border-radius 12px, padding 12px). For demo: tapping shows a toast "Export preview coming soon."

### Item 3: Somatiq is watching
- Eye icon (18px, rgba(175,210,224,0.25))
- **"Tracking: HRV response in luteal phase"** — 14px, weight 500, cream at 80%
- "Your HRV drops more steeply in luteal phase than 3 months ago. 2 more cycles of data needed before Somatiq can confirm this as a pattern." — 14px, rgba(175,210,224,0.45), margin-top 4px

### Item separators:
1px solid rgba(42,103,127,0.06) between items. Padding: 18px 0 per item.

---

## SECTION I: REMOVE STANDALONE PATTERN QUOTE

The element that currently sits between Evening and Active Experiment — the italic quote with sparkle icon ("Day 4 of this pattern...") — is **REMOVED**. Its content has been integrated into the Interpretation body text (Section C).

**Delete this element entirely.** Do not move it, do not hide it.

---

## WHAT NOT TO CHANGE

- Top Navigation (avatar, calendar, coach button)
- State Card visual treatment (background color, border-radius, padding)
- Primary Action card (content, buttons, visual treatment)
- Discovery section (content, typography)
- Through the Day item titles and subtitles (only ADD expand content)
- Evening visual treatment (opacity, sizing)
- Experiment card visual treatment (only fix title, add bottom sheet)
- Bottom Navigation
- Morning Flow (Screens 1–4)
- Transition Animation
- Dev state toggles in side menu
- Evening Check-out flow
- Coach chat overlay
- Any colors, font family, font sizes, border-radius values
- The narrative transition texts before sections

---

## CHANGE SUMMARY

| # | What | Type |
|---|------|------|
| 1 | Evening: 3 items, title "Evening" | Fix |
| 2 | Experiment title: "Magnesium before sleep" | Fix |
| 3 | Only Magnesium shows experiment reference | Fix |
| 4 | Cycle context removed from State Card | Fix |
| 5 | Luteal Phase added as Chain Node 3 | New content |
| 6 | Endometriosis added as Chain Node 4 | New content |
| 7 | Chain now has 5 nodes total | Structure change |
| 8 | "Low Ferritin" context below chain | New content |
| 9 | Interpretation body text updated (endometriosis + pattern) | Content update |
| 10 | Standalone pattern quote removed | Removal |
| 11 | "Eat steady meals" expand content | New interaction |
| 12 | "Limit caffeine" expand content | New interaction |
| 13 | "Reduce cognitive load" expand content | New interaction |
| 14 | "Progesterone" expand content | New interaction |
| 15 | "Magnesium 400mg" expand content | New interaction |
| 16 | "Sleep before 23:00" expand content | New interaction |
| 17 | State Card expandable | New interaction |
| 18 | Experiment Bottom Sheet | New interaction |
| 19 | Looking Ahead: Recovery Outlook enriched | Content update |
| 20 | Looking Ahead: Doctor Prep with topics + export | New content |
| 21 | Looking Ahead: "Watching" enriched | Content update |