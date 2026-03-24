Design a highly engaging, state-driven “Today” screen for a personalized health app.

This is NOT a static dashboard.
It is a dynamic decision and feedback system that adapts throughout the day.

---

CORE EXPERIENCE PRINCIPLES

* The screen must feel alive and reactive
* The user should feel: “This responds to me”
* Focus on action → consequence → feedback → learning
* Avoid static lists or generic health advice

---

SCREEN STRUCTURE (BASE STATE – MORNING)

1. HEADER (STATE + CONTEXT)

* Small label: current mode (e.g. “Conserving Energy”)
* Main title: clear, human-readable state (e.g. “Your recovery capacity is reduced today”)
* Subtext: drivers (sleep debt, HRV drop, hormonal phase)

---

2. PREDICTION (CREATE TENSION)

Add a clear, time-bound consequence:

* “Without adjustment, you’ll likely feel a noticeable energy drop in ~3–4 hours”
* Optional contrast:
  “If you adjust now, your energy will likely stay more stable”

This must feel actionable, not informational.

---

3. PRIMARY ACTION (HERO ELEMENT)

This is the visual and functional center of the screen.

* Large, prominent card
* Example:
  “Take a 10–15 min walk now”

Include:

* immediate benefit (“stabilizes your system”)
* future outcome (“reduces afternoon fatigue risk”)

---

INTERACTION:

When user taps “Done” or “I did this”:

→ trigger immediate UI change (same screen, no navigation)

---

4. IMMEDIATE FEEDBACK STATE (CRITICAL FOR WOW)

After completion, dynamically update the UI:

* Replace or overlay primary action with feedback:

Examples:

* “You’ve started stabilizing your system”
* “Energy drop risk has decreased”

Add subtle visual reinforcement:

* progress indicator
* soft highlight / glow / animation

This is the key engagement moment.

---

5. SUPPORTING ACTIONS (SECONDARY, LOWER WEIGHT)

2–3 additional suggestions:

* “Reduce cognitive load today”
* “Sleep before 23:00”

Visually less dominant than primary action.

---

6. NUTRITION & SUPPORT (CONTEXTUAL, NOT GENERIC)

Include only if relevant.

Format:

* “Magnesium (~400mg, evening) → supports nervous system and sleep”

Optional expansion on tap.

---

7. PERSONAL PATTERN INSIGHT (WOW MOMENT)

Must be visible (not hidden in links).

Example:

* “On similar days where you adjusted early, your recovery improved the next day”

This creates trust and personal relevance.

---

8. MIDDAY RE-CHECK (ADAPTIVE STATE)

If user has NOT completed the primary action:

Show subtle prompt:

* “You’re still exceeding your recovery capacity”
* Offer:
  [Adjust now] [Ignore]

If user HAS completed:

* “You adjusted early. Your system is stabilizing”

---

9. EVENING LEARNING (FUTURE STATE PREVIEW)

Optional small section:

* “Today’s adjustment likely reduced tomorrow’s fatigue”

This reinforces behavior over time.

---

10. LIGHT EXPLORATION (LOW PRIORITY)

Keep at bottom:

* “See similar days”
* “Understand your baseline”

Do NOT compete with primary action.

---

AI COACH INTEGRATION

Do NOT create a separate screen.

Instead:

* Add contextual triggers:
  “Not sure this fits your day?”
  → opens conversational AI coach

* After action:
  “How did that feel?”
  → micro coaching interaction

---

INTERACTION STATES (MANDATORY)

Design 3 distinct visual states:

1. Morning (before action)
2. After action (feedback state)
3. Midday (adaptive check)

The screen must visibly change between these states.

---

CONSTRAINTS

* No long lists
* No generic advice
* Max 1 primary action
* Max 3 secondary actions
* Every element must answer:
  “Why does this matter right now?”

---

FINAL GOAL

The user should feel:

* “This understands my body”
* “This helps me decide what to do”
* “This reacts when I act”
* “I want to come back and see what changed”

This is not a dashboard.
This is a living system.
