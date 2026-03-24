# Somatiq — Today Screen Rebuild
## Figma Make Prompt — March 2026
## Persona: Hanna (49, Perimenopause, Endometriose, Iron Deficiency, Oura Ring)
## Cycle: Luteal Phase Day 18, ~28-day cycle, period expected in ~10 days

---

## WHAT THIS PROMPT DOES

This prompt replaces the current Morning Insight Flow Screen 5 (Screen5Response) and rebuilds the Today/Summary screen. The Morning Flow Screens 1–4 stay as they are. After Screen 4 (Decision), a new transition animation plays, then the rebuilt Today screen loads.

**Do NOT change:** Screen1Hero, Screen2Causality, Screen3Interpretation, Screen4Decision. These stay exactly as they are.

**Remove entirely:** Screen5Response. It no longer exists.

**Rebuild:** The transition after Screen 4 and the entire Today/Summary screen.

---

## CHANGE 1: TRANSITION ANIMATION (replaces Screen 5)

After the user taps "Continue" on Screen 4 (Decision), Screen5Response no longer appears. Instead:

### What happens:

1. Screen 4 fades out (300ms)
2. A full-screen transition appears on the same dark background (#122F3A) with the same background image, centered vertically:
   - **Line 1** fades in (400ms): Large text, white, 28px, font-weight 500, centered
   - **Line 2** fades in after 800ms delay: Smaller text, white/60 opacity, 16px, centered, below Line 1
3. After 2.5 seconds total, the transition fades out and Today screen loads

### Content — depends on decision:

**If "Conserve Energy" was chosen:**
- Line 1: "Adjusting your day for active recovery."
- Line 2: "Preparing your plan..."

**If "Push Through" was chosen:**
- Line 1: "Supporting your system through the load."
- Line 2: "Preparing your plan..."

### Visual style:
- No cards, no buttons, no UI elements
- Just text on the atmospheric background
- Feels like the system is working, not like a loading screen
- Subtle: a very small pulsing dot (white, 6px, opacity cycling 0.3–0.8) centered below the text, appearing with Line 2

---

## CHANGE 2: TODAY SCREEN (complete rebuild)

After the transition, Today loads. The bottom navigation appears. The user sees their personalized day plan.

Today is ONE scrollable screen. No tabs within it, no sub-navigation. Top to bottom, this is the exact order of elements. Nothing else, nothing less.

### Dev State Toggle (Side Menu)

Replace the current 3 dev toggles with 4 new ones:

- **Morning** (default after completing the flow)
- **Midday — adjusted** (replaces "Action Taken")
- **Midday — not adjusted** (replaces "Midday Ignored")
- **Evening**

Each state changes Today's content as described below.

---

### TOP NAVIGATION (unchanged)

Keep exactly as is: Avatar (H) left, Calendar center (Sat 22), Coach trigger (Sparkles) right.

---

### ELEMENT 1: STATE CARD

Always visible at the top. Rounded card (20px radius), glassmorphism background, full width minus padding.

**This card is FORWARD-LOOKING. It shows status + progress + prognosis. It does NOT repeat the Morning Flow causality chain.**

**Surface (always visible):**

| State | Headline | Subline | Accent |
|-------|----------|---------|--------|
| Morning | Low recovery capacity | 3 adjustments for today · Energy dip likely in 3–4 hours | Default (white/teal) |
| Midday — adjusted | System stabilizing | 1 of 3 done · Energy dip less likely | Teal glow |
| Midday — not adjusted | Still running on low recovery | 0 of 3 done · Energy may taper within 1–2 hours | Subtle warm (not alarm) |
| Evening | Closing your day | How did today feel? | Warm, soft |

**Expand (on tap) — only for Morning, Midday adjusted, Midday not adjusted:**
- Section "Outlook without adjustments": bullet points about short-term and next-day impact
- Section "Hormonal context": one paragraph about how current cycle phase affects recovery
- Section "Pattern Insight": highlighted box — "On similar days where you adjusted early, your next-day recovery improved significantly."

**Expand is NOT available in Evening state.** The Evening state card is the entry point to the Evening Check-out (see Element 8).

---

### ELEMENT 2: CYCLE CONTEXT

Directly below the State Card. Not a card — just a single line of text with an icon.

- Icon: Droplets (same as in Morning Flow Screen 2), 16px, white/60
- Text: "Luteal Phase · Day 18 · Period expected in ~10 days"
- Style: 13px, white/50, tracking wide, uppercase
- No expand, no tap action — this is ambient context

---

### ELEMENT 3: NOW (Primary Action)

Section label: "NOW" — 13px, bold, uppercase, tracking 1.5px, white/50

One prominent action card. This is the most important thing on the screen.

**Morning state:**

Card with glassmorphism background, teal-tinted gradient left border or glow.

- Label: "Primary Action" — 12px, bold, uppercase, teal (#248aa7)
- Title: "Take a 10–15 min walk" — 20px, font-weight 500, white
- Subtitle: "Stabilizes energy for the afternoon." — 15px, white/70
- Two buttons side by side: "Start" (white/10 bg) and "Done" (teal bg with checkmark icon)
- Expand (on tap card body, not buttons): "Why this works" explanation + "How to execute" list + "Done" button at bottom

**Midday — adjusted state:**

The card transforms into a completed banner:
- Teal glow background
- Checkmark circle icon (teal, 48px)
- "You did this" — 20px, white
- "Your early adjustment shifted your nervous system out of active stress." — 14px, white/80
- Below: "Likely reduced tomorrow's fatigue" with moon icon, 13px, light blue (#8ab4f8)

**Midday — not adjusted state:**

The card becomes urgent but NOT alarming:
- Orange-tinted gradient (subtle, not bright)
- Label changes to: "DO THIS NOW" — 12px, bold, uppercase, orange (#fe7a2e)
- Title: "Take a short walk now" — 20px, white
- Only one button: "Done" (orange bg)

**Evening state:**

The NOW section is not visible. It has served its purpose.

---

### ELEMENT 4: THROUGH THE DAY

Section label: "THROUGH THE DAY" — same style as NOW label

These items are VISUALLY QUIETER than the NOW card. Smaller, more compact, less contrast.

Each item is a row with: checkbox circle (left) + text + expand chevron (right). Same component as current SecondaryActionCard but without the gradient glow.

**Item 1: "Eat steady, protein-focused meals"**
- Subtitle visible: "Keeps energy stable — your system is sensitive to blood sugar dips right now"
- Expand: "Why today" (explains luteal phase sensitivity) + "How to execute" (Breakfast: eggs, yogurt. Lunch: balanced protein + fats. Avoid: sugar spikes alone.) + "Explore food options" link button

**Item 2: "Limit caffeine after 14:00"**
- No subtitle on surface
- Expand: "Why this works" (caffeine half-life + deep sleep impact)

**Item 3: "Reduce cognitive load where you can"**
- Subtitle visible: "It's Saturday — a good day to let your system rest"
- Expand: "Why this works" (brain energy cost + nervous system) + "How" suggestions adapted for WEEKEND: "Postpone complex decisions. Keep plans light. Give yourself permission to do less."

**IMPORTANT: Item 3 mentions Saturday explicitly. This is NOT a weekday. Do NOT suggest "avoid back-to-back meetings" or "turn off work notifications." Suggestions must match the day of the week.**

When an item's checkbox is tapped, it gets a filled circle with checkmark, text gets line-through and opacity drops to 60%. The State Card updates its count ("1 of 3 done", "2 of 3 done", etc.)

**In Evening state:** All Through the Day items are collapsed, showing completion state (checked or unchecked), but not interactive anymore.

---

### ELEMENT 5: EVENING

Section label: "EVENING" — same style as other labels

These items appear VISUALLY FURTHEST from action — lowest contrast, most muted. They are on the horizon, not demanding attention now.

**Item 1: "Progesterone tonight"**
- Context line below title (always visible, not behind expand): "At this point in your cycle, your supplement supports the deep sleep your recovery needs right now."
- Style of context line: 13px, white/50, italic
- Checkbox to confirm when taken
- No expand needed — the context line IS the explanation

**Item 2: "Magnesium 400mg before sleep"**
- Context line: "Part of your active experiment (Day 4 of 7)"
- Checkbox to confirm
- Expand: "Why this works" (GABA activity support, complements progesterone effect)

**Item 3: "Sleep before 23:00"**
- No subtitle
- Expand: "Why tonight" (nervous system repair + HRV stabilization)

**In Morning/Midday states:** Evening section is visible but muted (opacity ~70% on the whole section). It's there, you can see what's coming, but it's not asking for your attention.

**In Evening state:** Evening section becomes full opacity and prominent. Items are interactive (checkboxes work).

---

### ELEMENT 6: VALIDATING MOMENT

Between the Evening section and the Experiment card. Not a card — just a text block.

- Sparkles icon (16px, #8ab4f8) + text beside it
- Text: "Day 4 of this pattern. Each time you've adjusted early, recovery improved. You know your body."
- Style: 14px, white/80, line-height 1.4
- Background: subtle white/5 with white/10 border, rounded 16px, padding 16px
- Same component style as the current InlineCoachMessage

**This text changes per state:**

| State | Text |
|-------|------|
| Morning | "Day 4 of this pattern. Each time you've adjusted early, recovery improved. You know your body." |
| Midday — adjusted | "That was a good call. Your system often responds well when you reduce load early." |
| Midday — not adjusted | "It's not too late. Even small adjustments now still help tomorrow's recovery." |
| Evening | "You made it through the day. Whatever you managed today counts." |

---

### ELEMENT 7: ACTIVE EXPERIMENT

Section label: "ACTIVE EXPERIMENT" — same style as other labels

One compact card. Glassmorphism background, subtle amber left border.

- Label: "Day 4 of 7" — 12px, bold, uppercase, amber (#FFB162)
- Title: "Magnesium before sleep" — 18px, white, font-weight 500
- Result so far: "Deep sleep +18 min avg" — 14px, white/70
- Visual: 7 dots in a row. Dots 1–4 filled (warm cream color). Dots 5–7 outlined (white/20). Each dot is 10px with 8px gap.
- Tap card → Bottom Sheet opens (see BOTTOM SHEET below)

**The experiment card does NOT have a checkbox. The Magnesium item in the Evening section serves as the daily check-in for the experiment. When that checkbox is tapped, Dot 4 gets a subtle fill animation.**

---

### ELEMENT 8: PREPARE

Section label: "LOOKING AHEAD" — same style as other labels

Three items, no cards — just text rows with subtle separators (border-bottom white/8).

**Item 1: Outlook**
- Icon: small calendar icon, white/40
- Text: "Next few days may stay heavy. Follicular phase in ~10 days typically brings relief."
- Style: 15px, white/70

**Item 2: Doctor Prep**
- Icon: small medical cross icon, white/40
- Text: "Gynecologist in 12 days"
- Subtext: "Collecting: HRV trend, sleep patterns, symptom log, cycle data"
- Style: 15px white/70 for main text, 13px white/50 for subtext
- Tap → Bottom Sheet (NOT part of this prompt — just show tap affordance with arrow icon)

**Item 3: Somatiq is watching**
- Icon: small eye icon, white/40
- Text: "Your HRV drops more steeply in luteal phase than 3 months ago. 2 more cycles needed."
- Style: 15px, white/70

---

### ELEMENT 9: EVENING CHECK-OUT (only visible in Evening state)

When dev toggle is set to "Evening", the State Card (Element 1) transforms. Instead of showing status/progress, it becomes the entry point to the check-out.

**State Card in Evening mode:**
- Headline: "Closing your day"
- Subline: "Reflect on today to improve tomorrow's insights."
- Button: "Close your day" — full width, teal bg, white text, 16px, rounded 12px
- Tap button → Evening Check-out Flow starts as a FULL SCREEN OVERLAY (not bottom sheet)

**Evening Check-out Flow — 4 steps, each its own screen within the overlay:**

**Step 1: Day Review**
- "How did your day feel overall?" — 24px, white, centered
- Three buttons stacked vertically (same style as Morning Flow energy buttons):
  - "Better than expected"
  - "As expected"
  - "Harder than expected"
- Tap one → auto-advance to Step 2 after 1 second

**Step 2: Medication Confirmation**
- "Did you take your Progesterone tonight?" — 24px, white, centered
- Two buttons side by side: "Yes" (teal bg) / "No" (white/10 bg)
- Tap → auto-advance to Step 3

**Step 3: Symptoms**
- "Any symptoms today?" — 24px, white, centered
- 5 tappable tag pills in a wrap layout (not a single row). Each pill: rounded-full, white/10 bg, white/70 text, 14px. On tap: pill gets teal bg + white text.
- Tags: **Pain** · **Bloating** · **Brain fog** · **Mood low** · **Hot flashes**
- These are MULTI-SELECT. User can tap multiple or none.
- Below tags: "Skip" link (white/50, 15px) + "Continue" button (teal, full width)
- "Continue" is only visible after at least one tag is selected. If no tags selected, only "Skip" is visible (which also advances).

**Step 4: Closing**
- Centered text, fading in:
  - "Noted." — 20px, white, font-weight 500
  - After 600ms: "This feeds tomorrow's insights." — 16px, white/60
  - After 1200ms: "Sleep well, Hanna." — 18px, white/80
- After 3 seconds total → overlay closes, returns to Today screen

**Visual style of the Check-out Flow:**
- Same dark background as Morning Flow
- Same atmospheric image behind content
- Progress dots at top (4 dots, same style as onboarding if it existed)
- Back arrow on Steps 2, 3, 4 to go to previous step
- No bottom navigation visible during the flow
- Feels like the Evening counterpart to the Morning Flow — bookends the day

---

## BOTTOM SHEET: EXPERIMENT DETAIL

Triggered by tapping the Experiment card (Element 7). Slides up from bottom, dark background (darker than main bg), rounded top corners (20px). Drag-down to close. Background dims 50%.

**Content:**

- Header: "Magnesium before sleep" — 22px, white, font-weight 600
- Subtitle: "Active Experiment · Day 4 of 7" — 13px, amber, uppercase

- **Hypothesis card** (glassmorphism, subtle amber left border):
  - "If you take Magnesium before sleep, your deep sleep should improve."
  - 15px, white/80

- **Protocol:**
  - "What to do:" — "Take 400mg Magnesium Glycinate 30–60 min before bed"
  - "What Somatiq tracks:" — "Deep sleep duration, sleep onset time, HRV"
  - Each as label (11px, white/40, uppercase) + text (14px, white/70)

- **Progress Tracker:**
  - 7 circles (32px each) in a row, with day labels below (Mon, Tue, Wed, Thu, Fri, Sat, Sun)
  - Mon–Thu: filled warm cream
  - Fri–Sun: outlined white/20
  - Below each filled day: deep sleep value (e.g., "1h 38m", "1h 22m", "1h 41m", "1h 35m")

- **Results So Far:**
  - "Before experiment (7-day avg):" — "Deep Sleep 1h 12m"
  - "During experiment (so far):" — "Deep Sleep 1h 34m"
  - Delta: "+22 min (+31%)" in amber
  - Small line chart: 7 pre-experiment values (muted) + 4 experiment values (amber), simple thin line

- Footer: "Cancel Experiment" as a subtle text link (white/40, 13px)

---

## WHAT NOT TO DO

- Do NOT add any elements not listed above. No extra cards, no extra sections.
- Do NOT use alarm colors (bright red, bright orange backgrounds). Warm subtle tints only.
- Do NOT show wearable numbers (HRV value, sleep score, temperature) on Today. Those belong elsewhere.
- Do NOT repeat the Morning Flow causality chain on Today. The State Card looks forward, not backward.
- Do NOT use the word "WARNING" or "ALERT" anywhere.
- Do NOT create a separate Nutrition section. All actions live in the time-phase structure (Now / Through the day / Evening).
- Do NOT make the Evening Check-out a bottom sheet. It is a full-screen overlay, like the Morning Flow.
- Do NOT add "Explore further" links at the bottom. Those lived on Screen 5 which no longer exists.
- Do NOT use weekday-specific language (meetings, work notifications) — today is Saturday.
- Do NOT claim Somatiq measures hormone levels. It tracks wearable data + cycle phase + user input. It INFERS, it does not MEASURE.

---

## SUMMARY OF FILES TO CHANGE

All changes happen in `src/app/App.tsx`:

1. **Remove:** `Screen5Response` component entirely
2. **Add:** `TransitionAnimation` component (between Screen 4 and Today)
3. **Rebuild:** `SummaryScreen` component (now called TodayScreen)
4. **Rebuild:** `StateRiskCard` → `StateCard` (forward-looking)
5. **Add:** `CycleContext` component
6. **Rebuild:** Action sections into Now / Through the day / Evening structure
7. **Add:** `ExperimentCard` component
8. **Add:** `PrepareSection` component
9. **Add:** `ValidatingMoment` component
10. **Add:** `EveningCheckout` component (full-screen overlay, 4 steps)
11. **Add:** `ExperimentDetailSheet` component (bottom sheet)
12. **Update:** `InsightFlow` to skip Screen 5 and show transition instead
13. **Update:** Dev toggles in Side Menu to 4 states (Morning, Midday adjusted, Midday not adjusted, Evening)
14. **Update:** `appState` type to include "evening" state