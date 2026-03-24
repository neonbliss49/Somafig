# Somatiq — Today Screen Visual Correction
## Figma Make Optimization Prompt
## Reference: Charlotte's Figma design (the better version)

---

## WHAT THIS PROMPT DOES

The Today screen has the right content but the wrong visual treatment. This prompt fixes the styling to match the intended design direction. No content changes, no structural changes, no new elements.

**Only change CSS/styling. Do not change any text, functionality, or component order.**

---

## FIX 1: REMOVE ALL BORDERS FROM CARDS

Every card currently has borders (border via ::after pseudo-elements, border-white/10, border-l, border-b on items). Remove ALL of them.

**Cards are defined by their background fill and spacing, not by lines.**

- Remove all `border` properties from GlassCard's inner div
- Remove all `::after` pseudo-elements that add borders
- Remove `border-l-[3px]` from ValidatingMoment
- Items in Through the Day and Evening: remove `border-b border-[rgba(209,213,220,0.15)]` — use spacing (gap/margin) between items instead

---

## FIX 2: SECTION HEADERS ARE TOO BIG

"Through The Day", "Evening", "Looking ahead" are currently 24px bold. They are competing with the State Card headline. Section headers should organize, not shout.

**Change all section headers (Through The Day, Evening, Looking ahead) to:**
- Font size: 20px (not 24px)
- Font weight: 600 (not 700/bold)
- Color: #F2EDE5

**Keep "What can I do?" at 20px weight 600 — that's correct.**

**"ACTIVE EXPERIMENT" label stays at 13px uppercase — that's correct.**

---

## FIX 3: STATE CARD — CYCLE CONTEXT BELONGS INSIDE

The cycle context line "LUTEAL PHASE · DAY 18 · PERIOD IN ~10 DAYS" is currently missing from the new TodayScreenNew component. Add it back INSIDE the State Card, below the wearable strip.

- Text: "◎ LUTEAL PHASE · DAY 18 · PERIOD IN ~10 DAYS"
- Style: 12px, uppercase, weight 600, letter-spacing 0.8px, color #AFD2E0 at 50% opacity
- Padding top: 14px, with a subtle divider above it (1px solid rgba(255,255,255,0.06)) — this is the ONE allowed divider, inside the card

---

## FIX 4: WEARABLE VALUES NEED COLOR DIFFERENTIATION

Currently all wearable values are the same color. The HRV value dropped — that should be visually distinct.

- HRV "28": color #AFD2E0 (the blue)
- HRV "↓" arrow: color #FE7A2E (orange — this value dropped, it's notable)
- Sleep "5h 42m": color #F2EDE5 (cream — neutral)
- RHR "68": color #F2EDE5 (cream — neutral)
- Temp "+0.3°": color #FE7A2E (orange — elevated, notable)
- Labels below (HRV, SLEEP, RHR, TEMP): color #AFD2E0 at 40% opacity

---

## FIX 5: PRIMARY ACTION CARD — LET THE BACKGROUND IMAGE THROUGH

The primary action card currently has a flat dark gradient. It should have atmosphere — the background landscape image should be subtly visible through this card.

**Change the NowAction GlassCard background:**
- Instead of `rgba(20, 41, 52, 0.9)` use `rgba(20, 41, 52, 0.65)` — more transparent so the bg image bleeds through
- Add a subtle inner gradient overlay from bottom (darker) to top (more transparent) so text stays readable
- The effect should be: you see a hint of the landscape, not a solid dark box

---

## FIX 6: VALIDATING MOMENT — REMOVE CARD TREATMENT

Currently has a border-left, background gradient, backdrop blur, and a glowing icon circle. This is way too heavy for what should be a whisper.

**Replace with:**
- No background, no border, no blur, no glow
- Simple layout: small sparkle icon (14px, color #AFD2E0 at 50%) + italic text
- Text: 16px (not 18px), weight 400, italic, color #F2EDE5 at 70%
- Wrap in quotation marks (use actual " " characters in the text)
- Remove the 32px icon circle entirely — just the bare sparkle icon
- Padding: just 0 8px, with 28px margin top and bottom

---

## FIX 7: EVENING SECTION — MAKE IT VISUALLY QUIETER

Evening items currently look identical to Through the Day items (same 18px text, same colors). They should be noticeably quieter.

**Changes:**
- Item titles: 16px instead of 18px (Through the Day stays at 18px)
- Item title color: #F2EDE5 at 70% (softer than Through the Day which is #F2EDE5 at 100%)
- Context text: 14px, #AFD2E0 at 40%, italic
- Checkbox circles: slightly smaller (22px instead of 24px), border color #AFD2E0 at 20%
- Overall: the Evening section should feel one step further away than Through the Day

---

## FIX 8: DISCOVERY AND EXPERIMENT CARDS — DIFFERENTIATE THEM

Both currently use the same GlassCard component with the same gradient. They should feel different — Discovery is intelligence, Experiment is a running test.

**Discovery card:**
- Keep the glass background but make the "TODAY'S DISCOVERY" label color: #AFD2E0 (the blue, not #88deff)
- The discovery title text should be 20px weight 500 (not 22px bold) — slightly less aggressive

**Experiment card:**
- Add the 7 dots back (currently missing from the new code). 4 filled (#F2EDE5 at 60%), 3 empty (rgba(255,255,255,0.1))
- Add "Deep sleep +18 min avg" as a result line below the title (12px, #AFD2E0)
- The "DAY 4 OF 7" orange label is correct — keep it

---

## FIX 9: LOOKING AHEAD ICONS — TONE THEM DOWN

Currently icons are 24px in #F2EDE5 (cream) — they're as loud as the text. Icons should be supporting elements, not competing.

**Change all PrepareItem icons:**
- Size: 20px (not 24px)
- Color: #AFD2E0 at 40% (not full cream)
- Stroke width: 1.5 (keep)

---

## FIX 10: SPACING AND BREATHING

The current spacing between sections is inconsistent. Apply these gaps:

- State Card → Morning Insight: 16px
- Morning Insight → "What can I do?": 32px
- Primary Action → Discovery: 32px
- Discovery → Through the Day: 36px
- Through the Day → Evening: 36px
- Evening → Validating Moment: 28px
- Validating Moment → Experiment: 32px
- Experiment → Looking Ahead: 44px (biggest gap — new context)
- After Looking Ahead to bottom: 48px padding

---

## SUMMARY

The changes are: remove all borders, fix section header sizes, restore cycle context in state card, color-code wearable values, let bg image through primary action card, strip validating moment to a whisper, quiet down evening section, differentiate discovery from experiment, tone down looking ahead icons, fix spacing.

**Do not change any text content, functionality, component order, or add new elements.**