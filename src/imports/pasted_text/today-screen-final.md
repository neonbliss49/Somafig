# Somatiq — Today Screen: Final Implementation
## Figma Make Prompt
## Reference: The narrative prototype (somatiq_today_narrative.html)

---

## WHAT THIS PROMPT DOES

Rebuild the Today screen to follow a narrative flow. This replaces the current TodayScreenNew component entirely. The Morning Flow (Screen1Hero through Screen4Decision) and the Transition Animation stay unchanged. Only the Today screen after the transition changes.

---

## PALETTE

- **#F2EDE5** — Warm Cream. All primary text. Never use pure white (#FFFFFF).
- **#AFD2E0** — Soft Blue. Secondary text, subtitles, labels, muted elements.
- **#2A677F** — Deep Teal. Card backgrounds (at low opacity), structural elements, borders.
- **#FE7A2E** — Orange. Sparing accent: max 5 uses on screen (HRV arrow, Temp value, PRIMARY ACTION label, DAY 4 OF 7 label, TONIGHT badge, AFTERNOON badge, highlighted words in interpretation quote, 22% in discovery).
- **Background:** #0E1E26

## TYPOGRAPHY

- Font: DM Sans
- Only even sizes: 28, 24, 20, 16, 14, 12. Nothing smaller than 12px.
- Hierarchy through size, weight, and color value. NOT through opacity.
- Key italic moments use DM Sans italic, not a separate font.

## HARD RULES

- NO borders on cards. No outlines, no left-borders, no border-bottom on cards. Cards are defined by background fill only.
- Subtle horizontal dividers (1px, rgba(42,103,127,0.08)) are allowed ONLY between list items within a section and inside the State Card between the wearable strip and cycle context.
- Every text must be readable. WCAG AA minimum contrast.
- NO identical sections. Each section on the screen must have a distinct visual character.

---

## SCREEN STRUCTURE (exact order, top to bottom)

---

### TOP NAVIGATION (unchanged, keep as-is)

Avatar (H) left, Calendar (SAT 22) center, Coach sparkles right.

---

### 1. STATE CARD

Background: rgba(42,103,127,0.18). Border-radius: 20px. Padding: 24px.

**Content:**
- "Low recovery capacity" — 28px, weight 500, #F2EDE5
- "3 adjustments for today" — 14px, rgba(175,210,224,0.7)
- "Watch out: Energy dip likely in 3–4 hours" — 12px, rgba(175,210,224,0.45)

**Wearable Strip** (inside card, below text, separated by 1px line rgba(42,103,127,0.2), padding-top 18px):
- Four values side by side, each centered in its quarter:
  - "28 ↓" — value in #AFD2E0, arrow in #FE7A2E
  - "5h 42m" — #F2EDE5 at 75%
  - "68" — #F2EDE5 at 75%
  - "+0.3°" — #FE7A2E (elevated = notable)
- Labels below each: "HRV", "SLEEP", "RHR", "TEMP" — 12px, uppercase, rgba(175,210,224,0.3)
- Quarter dividers: 1px solid rgba(42,103,127,0.12)

**Cycle Context** (inside card, below wearable strip, separated by 1px line rgba(42,103,127,0.12), padding-top 14px):
- Droplet icon (14px, opacity 0.5) + "LUTEAL PHASE · DAY 18 · PERIOD IN ~10 DAYS"
- 12px, weight 600, rgba(175,210,224,0.35), uppercase, letter-spacing 0.8px

---

### 2. CAUSAL CHAIN

Margin-top: 36px from State Card.

**Section label:** "WHAT'S DRIVING THIS" — 12px, weight 700, rgba(175,210,224,0.3), uppercase, letter-spacing 1.5px. Margin-bottom: 24px.

**Three nodes connected by a vertical line:**

The vertical line runs along the left side, connecting the three node circles. It is 1.5px wide, with a gradient from rgba(175,210,224,0.3) at top to rgba(254,122,46,0.5) at middle to rgba(254,122,46,0.3) at bottom.

**Node 1 — Sleep:**
- Circle: 44px, background rgba(42,103,127,0.4)
- Icon inside: Moon icon, 20px, stroke #F2EDE5, stroke-width 1.5
- Text right of circle (14px gap):
  - "Fragmented Sleep" — 16px, weight 600, #F2EDE5
  - "3 short nights detected" — 14px, rgba(175,210,224,0.55)

**32px gap to next node.**

**Node 2 — HRV:**
- Circle: 44px, background rgba(254,122,46,0.2), border 1.5px solid rgba(254,122,46,0.35)
- Icon inside: Activity/pulse icon, 20px, stroke #FE7A2E, stroke-width 1.5
- Text right:
  - "HRV Dropped" — 16px, weight 600, #F2EDE5
  - "15% below baseline" — 14px, rgba(175,210,224,0.55)

**32px gap to next node.**

**Node 3 — Result:**
- Circle: 44px, background rgba(242,237,229,0.1)
- Inside: solid circle dot, 12px, #FE7A2E
- Text right:
  - "Reduced recovery capacity" — 16px, weight 600, #F2EDE5
  - No subtitle

**Below chain (20px gap):**
- "Luteal Phase Day 18 · Pattern seen in 4 of 6 cycles" — 12px, rgba(175,210,224,0.35)

**NO card background around the chain. It floats on the main background. NO borders around nodes.**

---

### 3. INTERPRETATION + DECISION

Margin-top: 40px. Separated from chain by 1px line rgba(42,103,127,0.1). Padding-top: 32px.

**The Quote:**
- "Your body is shifting energy from **performance** to **regulation**."
- 24px, weight 400, italic, #F2EDE5, line-height 1.35
- The words "performance" and "regulation" are #FE7A2E, weight 500 (orange highlight within the italic text)
- Include actual quotation marks: " " around the text

**Body text below (16px gap):**
- "Your nervous system is prioritizing restoration. This is a natural response to your current hormonal phase. Pushing hard now will likely extend recovery."
- 14px, weight 400, rgba(175,210,224,0.6), line-height 1.55

**Decision Badge below (20px gap):**
- Inline-flex pill: padding 8px 16px 8px 10px, background rgba(42,103,127,0.25), border-radius 100px
- Inside: small circle dot (8px, rgba(175,210,224,0.6)) + "CONSERVING ENERGY" text (12px, weight 700, rgba(242,237,229,0.7), uppercase, letter-spacing 1px)

---

### 4. PRIMARY ACTION

Margin-top: 36px.

**Narrative intro:** "Your plan adjusts to conserve energy." — 14px, weight 400, italic, rgba(175,210,224,0.5). Margin-bottom: 8px.

**Section heading:** "What can I do?" — 20px, weight 600, #F2EDE5. Margin-bottom: 16px.

**Action Card:**
- Background: rgba(42,103,127,0.14). Border-radius: 20px. Padding: 24px.
- "PRIMARY ACTION" — 12px, weight 700, #FE7A2E, uppercase, letter-spacing 1.2px
- "Take a 10–15 min walk" — 20px, weight 500, #F2EDE5. Margin-top: 10px.
- "Light movement helps your nervous system shift out of stress — especially effective at this cycle phase." — 14px, rgba(175,210,224,0.6), line-height 1.5. Margin-top: 10px.
- Two buttons (gap: 12px, margin-top: 20px):
  - "Start" — transparent bg, 1.5px solid rgba(242,237,229,0.25), color #F2EDE5, 14px weight 600, border-radius 14px, padding 14px
  - "Done" — bg #F2EDE5, color #0E1E26, 14px weight 600, border-radius 14px, padding 14px

---

### 5. DISCOVERY

Margin-top: 40px. NO card background. Just typography.

- "TODAY'S DISCOVERY" — 12px, weight 700, rgba(175,210,224,0.4), uppercase, letter-spacing 1.5px. Margin-bottom: 16px.
- "Your deep sleep improved **22%** since starting Magnesium" — 24px, weight 500, #F2EDE5, line-height 1.25
  - "22%" is #FE7A2E, weight 600
- "Consistent across 4 nights · Oura sleep data + experiment tracking" — 12px, rgba(175,210,224,0.4). Margin-top: 12px.

---

### 6. THROUGH THE DAY

Margin-top: 44px.

**Narrative intro:** "Small adjustments that protect your recovery." — 14px, italic, rgba(175,210,224,0.5). Margin-bottom: 8px.

**Section heading:** "Through the Day" — 20px, weight 600, #F2EDE5. Margin-bottom: 16px.

**Three checklist items.** Each item is a row — NO card background. Items separated by 1px line rgba(42,103,127,0.08). Padding: 18px 0 per item.

Each item layout: checkbox (left) + content (center, flex-1) + chevron (right)

**Checkbox:** 24px circle, 1.5px solid rgba(175,210,224,0.25). When tapped: fills with #F2EDE5, shows checkmark in #0E1E26, title gets line-through and reduced opacity.

**Item 1:**
- "Eat steady, protein-focused meals" — 16px, weight 500, rgba(242,237,229,0.85)
- "Your system is sensitive to blood sugar dips right now" — 12px, rgba(175,210,224,0.4). Margin-top: 4px.

**Item 2:**
- "Limit caffeine after 14:00" — 16px, weight 500, rgba(242,237,229,0.85)
- Right of title (same line): "AFTERNOON" — 12px, weight 700, #FE7A2E, uppercase, letter-spacing 1px

**Item 3:**
- "Reduce cognitive load where you can" — 16px, weight 500, rgba(242,237,229,0.85)
- "It's Saturday — a good day to let your system rest" — 12px, rgba(175,210,224,0.4). Margin-top: 4px.

**Chevron:** 18px, rgba(175,210,224,0.2), ChevronDown icon

---

### 7. EVENING

Margin-top: 40px.

**Narrative intro:** "Tonight is about recovery support." — 14px, italic, rgba(175,210,224,0.5). Margin-bottom: 8px.

**Header row:** "Evening" (20px, weight 600, #F2EDE5) on left, "TONIGHT" (12px, weight 700, #FE7A2E, uppercase) on right. Margin-bottom: 12px.

**Three items.** Same structure as Through the Day but VISUALLY QUIETER:
- Entire item opacity: 0.55
- Title: 14px (not 16px), weight 500, rgba(242,237,229,0.7)
- Context: 12px, italic, rgba(175,210,224,0.35)
- Checkbox: 22px (not 24px), border rgba(175,210,224,0.15)
- Chevron: 16px, rgba(175,210,224,0.12)
- Items separated by 1px line rgba(42,103,127,0.06)

**Item 1:**
- "Progesterone"
- "Supports deep sleep at this cycle phase"

**Item 2:**
- "Magnesium 400mg"
- "Experiment Day 4 of 7"

**Item 3:**
- "Sleep before 23:00"
- "Try to avoid screen 30 minutes before bed"

---

### 8. VALIDATING MOMENT

Margin-top: 32px. NO background. NO card. NO icon circle.

- Sparkle icon: 14px, rgba(175,210,224,0.35). Flex-shrink: 0.
- Text: "Day 4 of this pattern. Each time you've adjusted early, recovery improved. You know your body."
- 14px, italic, rgba(242,237,229,0.45), line-height 1.5
- Include quotation marks in the text
- Layout: icon left + text right, aligned top, 12px gap

---

### 9. ACTIVE EXPERIMENT

Margin-top: 36px.

**Section label:** "ACTIVE EXPERIMENT" — 12px, weight 700, rgba(175,210,224,0.35), uppercase, letter-spacing 1.5px. Margin-bottom: 14px.

**Card:** background rgba(42,103,127,0.1), border-radius 16px, padding 20px.

- "DAY 4 OF 7" — 12px, weight 700, #FE7A2E, uppercase, letter-spacing 1px
- "Magnesium before sleep" — 16px, weight 500, rgba(242,237,229,0.85). Margin-top: 8px.
- "Deep sleep +18 min avg" — 12px, rgba(175,210,224,0.45). Margin-top: 6px.
- 7 dots (margin-top: 14px, gap: 6px): dots 1–4 filled rgba(242,237,229,0.55), dots 5–7 empty rgba(42,103,127,0.2). Each dot: 8px circle.

---

### 10. LOOKING AHEAD

Margin-top: 48px.

**Narrative intro:** "What Somatiq sees coming." — 14px, italic, rgba(175,210,224,0.5). Margin-bottom: 8px.

**Section heading:** "Looking ahead" — 20px, weight 600, #F2EDE5. Margin-bottom: 16px.

**Three text rows.** No cards. Each row: icon (18px, rgba(175,210,224,0.25)) + text. Items separated by 1px line rgba(42,103,127,0.06). Padding: 16px 0.

**Row 1:**
- Calendar icon
- "Next few days may stay heavy. Follicular phase in ~10 days typically brings relief." — 14px, rgba(175,210,224,0.45)

**Row 2:**
- Clock icon
- "Gynecologist in 12 days" — 14px, rgba(175,210,224,0.45)
- "Collecting: HRV trend, sleep, symptoms, cycle" — 12px, rgba(175,210,224,0.25). Margin-top: 3px.
- Arrow icon right side (tappable indicator)

**Row 3:**
- Eye icon
- "Your HRV drops more steeply in luteal phase than 3 months ago. 2 more cycles needed." — 14px, rgba(175,210,224,0.45)

---

### BOTTOM NAVIGATION (unchanged, keep as-is)

Today (active) | Insights | + FAB (orange) | You | Journey

---

## WHAT CHANGED FROM THE PREVIOUS VERSION

1. **Morning Insight card is REMOVED.** Replaced by the Causal Chain + Interpretation block which serves the same purpose better.
2. **Causal Chain ADDED** — 3 visual nodes showing Sleep → HRV → Recovery with connecting line
3. **Interpretation quote ADDED** — large italic text: "Your body is shifting energy from performance to regulation." with orange highlights
4. **Decision badge ADDED** — "CONSERVING ENERGY" pill visible on Today
5. **Discovery has NO card background** — typography alone (24px title, "22%" in orange)
6. **Narrative transitions ADDED** — italic intro sentences before 4 sections
7. **Section headers** are 20px weight 600 (not 24px bold)

## WHAT DID NOT CHANGE

- State Card (same content, same wearable strip, same cycle context)
- Primary Action card (same content, same buttons)
- Through the Day items (same text, same checkboxes, same expand)
- Evening items (same text, same checkboxes)
- Validating Moment (same text, but now with quotation marks)
- Experiment card (same content, same dots)
- Looking Ahead items (same text, same icons)
- Top Navigation
- Bottom Navigation
- All colors, all font family, all border-radius values
- All interactive behavior (checkboxes, expand, buttons)
- Dev state toggles in side menu
- Evening Check-out flow
- Coach chat overlay

## WHAT NOT TO DO

- Do NOT add any elements not listed above
- Do NOT add borders on cards (no outline, no left-border)
- Do NOT use a serif or italic serif font — use DM Sans italic only
- Do NOT make all cards look the same
- Do NOT use pure white (#FFFFFF) for any text
- Do NOT use text smaller than 12px
- Do NOT move the bottom navigation into the scrollable content
- Do NOT add the Stitch reference image or any image content to the screen
- Do NOT change the Morning Flow (Screen1–4) or the Transition Animation