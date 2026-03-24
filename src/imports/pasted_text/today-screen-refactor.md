Refine the existing "Today" screen. Do NOT redesign it from scratch.

Keep layout, style, and structure.
BUT enforce real interaction, state changes, and personalization.

---

GOAL

The screen must feel alive and reactive.
User actions must visibly change the system.

---

STATE SYSTEM (MANDATORY)

Use the existing dev menu states:

1. Morning (default)
2. Action Taken
3. Midday (ignored or adapted)

Each state MUST visibly differ in:

* headline
* risk level
* tone
* feedback

---

---

1. ADD SUBJECTIVE CHECK (TOP, BELOW HEADER)

Add a compact card:

"Still aligned with your energy?"

Buttons:

* Yes
* Not really

---

Behavior:

IF "Not really":
→ change tone to more cautious
→ highlight immediate action stronger

---

---

2. UPGRADE PRIMARY ACTION (CRITICAL)

Current:
"Take a walk"

Replace with:

Title:
"Take a 10–15 min walk"

Add buttons:

* Start
* Done

---

Behavior:

IF user taps "Done":
→ switch to "Action Taken" state
→ update screen content immediately

---

---

3. ACTION TAKEN STATE (VISIBLE FEEDBACK)

Headline changes to:

"System stabilizing"

Add feedback card:

"You stabilized your system early"

Subtext:

"You’ll likely feel more steady this afternoon"

---

Update risk section:

Before:
"Energy drop likely in 3–4 hours"

After:
"Energy drop less likely today"

---

---

4. MIDDAY STATE (CONSEQUENCE)

If no action taken:

Headline:

"You’re exceeding your recovery capacity"

Risk becomes stronger:

"Energy drop likely within ~2 hours"

---

If action was taken:

Headline:

"Energy holding steady"

Subtext:

"Your earlier adjustment is helping"

---

---

5. PERSONALIZATION (HANNA – REQUIRED)

Update state explanation:

"Driven by sleep debt, HRV drop, and your current hormonal phase (luteal)"

Add small section:

"Hormonal context"

Text:

"Your current phase makes recovery more sensitive to poor sleep.
Adjusting early has a stronger impact today."

---

---

6. UPGRADE NUTRITION (REMOVE GENERIC TEXT)

Replace simple magnesium line with:

"NUTRITION SUPPORT"

* Magnesium (400mg, evening)
  → may improve sleep quality tonight

* Eat steady meals today
  → helps avoid afternoon energy dips

* Limit caffeine after 14:00
  → supports recovery overnight

---

---

7. MAKE ACTIONS INTERACTIVE

Each task must be tappable:

* checkbox or toggle
* expands on tap

Example:

"Reduce cognitive load"
→ expands:
"Avoid back-to-back meetings today"

---

---

8. ADD MICRO FEEDBACK (MANDATORY)

After ANY action:

Show short feedback:

"Good call — this reduces your chance of an afternoon crash"

---

---

9. KEEP VISUAL CONSISTENCY

* keep glassmorphism cards
* keep typography
* do not redesign layout

BUT:

* highlight changed states visually (color / emphasis)
* ensure Action Taken state feels different

---

---

FINAL CHECK

The screen must clearly show:

* user can decide
* user can act
* system reacts
* outcome changes

Avoid generic phrases like:
"improves recovery" or "better energy"

Always describe:

* WHEN (today, afternoon, tomorrow)
* WHAT changes (focus, fatigue, sleep)

---

END
