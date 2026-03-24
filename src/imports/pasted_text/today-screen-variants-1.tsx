Refine the existing "Today" screen as ONE component with MULTIPLE VARIANTS.

Do NOT create multiple screens.
Do NOT duplicate layouts.

---

GOAL

Create ONE reusable component:
"Today Screen"

With EXACTLY 3 variants:

1. Morning (default)
2. Action Taken
3. Midday

---

VARIANT SYSTEM (MANDATORY)

Use component variants.

Each variant must:

* share the same layout structure
* but differ in content, tone, and visual emphasis

---

INTERACTION (CRITICAL)

Connect variants using the existing side menu buttons:

* "Morning" → switches to Morning variant
* "Action Taken" → switches to Action Taken variant
* "Midday" → switches to Midday variant

Use "Change to variant" interactions.

---

---

VARIANT 1 — MORNING

State:
Low recovery

Headline:
"Low recovery capacity"

Subtext:
"Driven by sleep debt, HRV drop, and hormonal phase"

Risk:

* Energy drop in ~3–4 hours
* Reduced recovery tomorrow

Primary Action:
"Take a 10–15 min walk"

Visual:

* soft colors
* low contrast
* calm tone

---

---

VARIANT 2 — ACTION TAKEN

State:
User completed primary action

Headline:
"System stabilizing"

Feedback:
"You reduced your risk of an energy crash"

Risk update:

* Energy drop less likely today

Primary Action:
"You did this"

Add:

* visual highlight (glow or stronger emphasis)
* confirmation state (checkmark)

Visual:

* slightly brighter
* positive tone

---

---

VARIANT 3 — MIDDAY

State:
User ignored action

Headline:
"You're exceeding your recovery capacity"

Risk:

* Energy drop likely within ~2 hours
* Tomorrow recovery compromised

Primary Action:
"Take a short walk now"

Label:
"DO THIS NOW"

Visual:

* stronger contrast
* orange accents
* more urgency

---

---

ADDITIONAL RULES

* Keep the same layout and components

* Only change:

  * content
  * emphasis
  * visual intensity

* Each variant must feel different at a glance

* Avoid generic language

---

FINAL GOAL

User can switch states via side menu
and clearly feel:

* Morning = cautious
* Action Taken = stable
* Midday = urgent

WITHOUT redesigning the screen.
