# Somatiq — Today Screen: Narrative Layer
## Figma Make Enhancement Prompt
## This adds narrative elements to the EXISTING Today screen. Do NOT redesign anything.

---

## WHAT THIS PROMPT DOES

Add two things to the existing Today screen:
1. A compact Causal Chain visualization between the State Card and "What can I do?"
2. Short narrative transition texts before each section

**Do NOT change any existing elements.** Same cards, same colors, same layout, same typography, same checkboxes, same buttons. Only ADD the new elements described below.

---

## ADDITION 1: COMPACT CAUSAL CHAIN

**Location:** After the State Card (including its wearable strip and cycle context). Before the Morning Insight card.

**Purpose:** Shows WHY Hanna is in a low-recovery state — the drivers at a glance. This replaces the need to re-read the Morning Flow.

### Layout

A vertical chain of 3 connected nodes. Each node is a row with an icon circle and text. A thin vertical line connects them top to bottom.

### Structure (top to bottom):

**Node 1:**
- Circle: 36px, background rgba(42,103,127,0.3), centered icon: Moon (18px, cream)
- Text right of circle:
  - Title: "Fragmented Sleep" — 16px, weight 500, #F2EDE5
  - Subtitle: "3 short nights detected" — 12px, #AFD2E0

**Connecting line:** 
- Thin vertical line (1.5px) from bottom of Node 1 circle to top of Node 2 circle
- Color: gradient from rgba(175,210,224,0.5) to rgba(254,122,46,0.7)
- Length: about 24px visible between the nodes

**Node 2:**
- Circle: 36px, background rgba(254,122,46,0.2), border 1.5px solid rgba(254,122,46,0.4), centered icon: Activity (18px, #FE7A2E)
- Text right of circle:
  - Title: "HRV Dropped" — 16px, weight 500, #F2EDE5
  - Subtitle: "15% below baseline" — 12px, #AFD2E0

**Connecting line:**
- Same as above, continuing the gradient toward orange
- Length: about 24px

**Node 3 (conclusion):**
- Circle: 36px, background rgba(242,237,229,0.15), centered: small filled circle (10px, #FE7A2E)
- Text right of circle:
  - Title: "Reduced recovery capacity" — 16px, weight 600, #F2EDE5

**Below the chain, with 12px margin top:**
- A single line of context:
- "Luteal Phase Day 18 · Pattern seen in 4 of 6 cycles" — 12px, #AFD2E0 at 60%

### Spacing:
- 28px margin above the chain (from State Card bottom)
- 28px margin below the context line (to the Morning Insight card)
- Nodes are left-aligned with 20px left padding
- Text starts 14px right of each circle

### Visual notes:
- NO card background around the chain. It floats on the main background.
- NO borders or boxes around nodes
- The vertical connecting line is the only visual structure
- Keep it compact — the entire chain should be about 200px tall, not more

---

## ADDITION 2: NARRATIVE TRANSITION TEXTS

Add a short introductory sentence before certain sections. These are NOT replacements for section labels — they come BEFORE the existing label, as a narrative bridge.

### Style for all transition texts:
- Font: 14px, weight 400, italic
- Color: #AFD2E0 at 70%
- Margin bottom: 8px (then the existing section label follows)
- No icon, no background, no card treatment — just italic text

### Where to add them:

**Before "What can I do?" section:**
- Add: "Your plan adjusts to conserve energy."
- Then the existing "What can I do?" heading follows as normal

**Before "Through The Day" section:**
- Add: "Small adjustments that protect your recovery."
- Then the existing "Through The Day" heading follows

**Before "Evening" section:**
- Add: "Tonight is about recovery support."
- Then the existing "Evening" heading + "TONIGHT" badge follows

**Before "Looking ahead" section:**
- Add: "What Somatiq sees coming."
- Then the existing "Looking ahead" heading follows

### Where NOT to add them:
- Do NOT add a transition text before the State Card
- Do NOT add a transition text before the Causal Chain
- Do NOT add a transition text before Morning Insight
- Do NOT add a transition text before the Validating Moment
- Do NOT add a transition text before Active Experiment

---

## WHAT NOT TO CHANGE

- Do NOT modify the State Card (content, layout, colors)
- Do NOT modify the Wearable Strip
- Do NOT modify the Primary Action card
- Do NOT modify the Discovery card
- Do NOT modify Through the Day items (text, checkboxes, expand behavior)
- Do NOT modify Evening items
- Do NOT modify the Validating Moment
- Do NOT modify the Experiment card
- Do NOT modify Looking Ahead items
- Do NOT modify the Bottom Navigation
- Do NOT modify the Top Navigation
- Do NOT modify any colors, fonts, card backgrounds, or border treatments
- Do NOT remove any existing elements
- Do NOT add any elements other than the Causal Chain and the 4 transition texts

---

## SUMMARY

Two additions only:
1. Compact Causal Chain (3 connected nodes with vertical line) — placed between State Card and Morning Insight
2. Four italic transition sentences — placed before "What can I do?", "Through The Day", "Evening", and "Looking ahead"

Everything else stays exactly as it is.