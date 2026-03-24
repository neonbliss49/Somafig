# Somatiq — Today Screen Design
## Figma Design Prompt
## Für: Charlotte (Design in Figma)
## Stand: 23. März 2026

---

## KONTEXT

Somatiq ist ein Health Intelligence Platform. Die Today-Ansicht ist der Hauptscreen — sie zeigt Hanna (49, Perimenopause, Endometriose, Eisenmangel, Oura Ring) ihren personalisierten Tagesplan. Heute ist Samstag. Hanna ist in Luteal Phase Day 18 (~28-Tage-Zyklus). Ihre Recovery ist niedrig (HRV-Drop, schlechter Schlaf). Sie hat im Morning Flow "Conserve Energy" gewählt.

---

## DESIGN-ANFORDERUNGEN

### Farbpalette
- **#F2EDE5** — Warm Cream (Headlines, primärer Text)
- **#AFD2E0** — Light Blue (sekundärer Text, UI-Elemente)
- **#2A677F** — Dark Teal (Strukturfarbe: Flächen, Borders, Tiefe)
- **#FE7A2E** — Orange Akzent (sparsam: Experiment, Morning Insight, FAB)
- **App Background:** Dunkel, muss mit allen vier Farben funktionieren

### Typografie
- Font: DM Sans
- Nur gerade Größen: 28, 20, 16, 14, 12
- Minimum: 12px (nie kleiner)
- Hierarchie über Größe, Weight (400, 500, 600, 700) und Farbe — NICHT über Opacity

### Kontrast & Accessibility
- **WCAG AA Minimum auf allen Texten.** Jeder Text muss auf seinem Hintergrund einen Kontrastverhältnis von mindestens 4.5:1 haben. Kein Text darf "verschwinden" oder schwer lesbar sein.
- **Kontrast ist nicht das Gegenteil von Premium.** Premium heißt: alles ist mühelos lesbar, nichts erfordert Anstrengung. Lesbarer Text auf satten Flächen wirkt hochwertiger als blasser Text auf fast unsichtbaren Cards.
- **Vibrancy:** Der Screen soll lebendig wirken, nicht gedämpft. Es darf Sättigung geben. Es darf Kontrast geben. Cards dürfen sich sichtbar vom Hintergrund abheben. Premium ≠ alles auf 10% Opacity drücken.

### Was zu vermeiden ist
- Keine Borders an den Seiten von Cards (kein left-border Akzent)
- Kein Text unter 12px
- Keine Opacity als primäres Hierarchie-Tool (Farbe statt Opacity)
- Nicht alles gleich behandeln — es muss eine klare visuelle Rangordnung geben

---

## SCREEN-STRUKTUR (von oben nach unten)

Der Screen ist eine scrollbare Seite. Alle Elemente stehen in genau dieser Reihenfolge. Nichts hinzufügen, nichts weglassen.

---

### TOP NAVIGATION (fixed)

Links: Avatar-Circle mit "H"
Mitte: Kalender-Widget — "SAT" Label oben, "22" groß darunter, kleiner oranger Dot darunter
Rechts: Coach/Sparkles-Icon Button

---

### 1. STATE CARD

Die wichtigste Card auf dem Screen. Zeigt wo Hanna steht.

**Inhalt:**
- Headline: "Low recovery capacity" — 28px, Cream, Weight 500
- Zeile 1: "3 adjustments for today" — 14px
- Zeile 2: "Energy dip likely in 3–4 hours" — 12px, leiser als Zeile 1

**Wearable-Strip** (innerhalb der Card, unten, durch eine feine Linie getrennt):
- 4 Werte nebeneinander, jeder zentriert in seinem Viertel:
  - HRV: "28 ↓" (Pfeil in Orange)
  - Sleep: "5h 42m"
  - RHR: "68"
  - Temp: "+0.3°"
- Unter jedem Wert: Label ("HRV", "SLEEP", "RHR", "TEMP") — 12px, uppercase

**Design-Hinweis:** Diese Card sollte die stärkste Präsenz haben. Sie ist der Anker.

---

### 2. CYCLE CONTEXT

Direkt unter der State Card. Keine Card — eine einzelne Textzeile mit Icon.

- Droplet-Icon (klein) + "LUTEAL PHASE · DAY 18 · PERIOD IN ~10 DAYS"
- 12px, uppercase, tracking breit
- Deutlich leiser als die State Card — aber lesbar

---

### 3. MORNING INSIGHT REOPEN

Ein tappbarer Bereich, der den Morning Flow nochmal öffnen lässt.

- Links: Kleines rundes Icon (Sun/Sparkle, Orange-getönt)
- Zeile 1: "YOUR MORNING INSIGHT" — 12px, uppercase, in Orange-Ton
- Zeile 2: "Low-recovery phase · sleep debt + hormonal shift · conserving" — 14px

**Design-Hinweis:** Subtil, aber tappbar erkennbar. Kein voller Card-Look, eher eine kompakte Zeile.

---

### 4. NOW — Primary Action

Section Label: "NOW" — 12px, uppercase, Weight 700, tracking 1.5px

Eine prominente Card. Das Wichtigste was Hanna jetzt tun kann.

**Inhalt:**
- Label: "PRIMARY ACTION" — 12px, uppercase, Weight 700
- Titel: "Take a 10–15 min walk" — 20px, Weight 500, Cream
- Kontext: "Light movement helps your nervous system shift out of stress — especially effective at this cycle phase." — 14px
- Zwei Buttons nebeneinander: "Start" (Ghost-Style) + "Done" (Solid mit Checkmark-Icon)

**Design-Hinweis:** Diese Card muss sich von allen anderen abheben. Sie ist die Action. Stärkerer Hintergrund, mehr Präsenz, größere Buttons.

---

### 5. TODAY'S DISCOVERY

Section Label: "TODAY'S DISCOVERY" — 12px, uppercase, Weight 700

Eine Card die zeigt was Somatiq gelernt hat. Der Aha-Moment.

**Inhalt:**
- Sparkle-Icon + "INSIGHT" Label — 12px, uppercase
- Titel: "Your deep sleep improved 22% since starting Magnesium" — 16px, Weight 500
- Evidenz: "Consistent across 4 nights · Oura sleep data + experiment tracking" — 12px

**Design-Hinweis:** Sollte sich von den Action-Cards unterscheiden — das ist keine Handlung, sondern eine Erkenntnis. Anderer visueller Charakter.

---

### 6. THROUGH THE DAY

Section Label: "THROUGH THE DAY" — 12px, uppercase, Weight 700

Drei Checklisten-Items. Leiser als die Primary Action, aber klar lesbar und interaktiv.

**Item 1:**
- Checkbox (leer) + "Eat steady, protein-focused meals" — 16px, Weight 500
- Subtitle: "Your system is sensitive to blood sugar dips right now" — 12px
- Rechts: Expand-Chevron

**Item 2:**
- Checkbox + "Limit caffeine after 14:00" — 16px, Weight 500
- Zeitangabe: "afternoon" — 12px, uppercase
- Rechts: Expand-Chevron

**Item 3:**
- Checkbox + "Reduce cognitive load where you can" — 16px, Weight 500
- Subtitle: "It's Saturday — a good day to let your system rest" — 12px
- Rechts: Expand-Chevron

**Design-Hinweis:** Visuell ruhiger als NOW, aber nicht unsichtbar. Eine leise aber saubere Checkliste. Ob diese Items Cards sind oder offene Zeilen — dein Call.

---

### 7. EVENING

Section Label: "EVENING" — 12px, uppercase, Weight 700

Drei Items, visuell am leisesten. Sie sind am Horizont — noch nicht relevant, aber sichtbar.

**Item 1:**
- Checkbox + "Progesterone tonight" — 14px, Weight 500
- Kontextzeile (immer sichtbar): "Supports deep sleep at this cycle phase" — 12px, italic

**Item 2:**
- Checkbox + "Magnesium 400mg before sleep" — 14px, Weight 500
- Kontextzeile: "Experiment Day 4 of 7" — 12px, italic

**Item 3:**
- Checkbox + "Sleep before 23:00" — 14px, Weight 500

**Design-Hinweis:** Die Evening-Sektion muss sich sichtbar von Through the Day unterscheiden. Leiser, weiter weg, am Horizont. Aber: NOCH LESBAR. Nicht wegretuschieren. Vielleicht unterschiedliche Textgröße (14px statt 16px), vielleicht andere Farbstufe, vielleicht weniger Spacing.

---

### 8. VALIDATING MOMENT

Kein Card-Hintergrund. Nur Text mit einem kleinen Icon.

- Sparkle-Icon (klein) + Text
- "Day 4 of this pattern. Each time you've adjusted early, recovery improved. You know your body."
- 14px, italic
- Fühlt sich an wie eine Randnotiz, ein Flüstern von Somatiq

---

### 9. ACTIVE EXPERIMENT

Section Label: "ACTIVE EXPERIMENT" — 12px, uppercase, Weight 700

Eine kompakte Card.

**Inhalt:**
- Label: "DAY 4 OF 7" — 12px, uppercase, Weight 700, in ORANGE (#FE7A2E)
- Titel: "Magnesium before sleep" — 16px, Weight 500
- Ergebnis: "Deep sleep +18 min avg" — 12px
- 7 Dots: 4 gefüllt, 3 leer

**Design-Hinweis:** Orange-Label hebt dieses Element heraus. Es ist weder eine Action noch ein Status — es ist ein laufender Test. Darf sich visuell eigenständig anfühlen.

---

### 10. LOOKING AHEAD

Section Label: "LOOKING AHEAD" — 12px, uppercase, Weight 700

Drei Textzeilen mit Icons. Keine Cards. Das ist der ruhigste Bereich.

**Item 1:**
- Kalender-Icon + "Next few days may stay heavy. Follicular phase in ~10 days typically brings relief." — 14px

**Item 2:**
- Uhr-Icon + "Gynecologist in 12 days" — 14px
- Subtext: "Collecting: HRV trend, sleep, symptoms, cycle" — 12px
- Rechts: Pfeil-Icon (tappbar)

**Item 3:**
- Auge-Icon + "HRV drops more steeply in luteal phase than 3 months ago. 2 more cycles needed." — 14px

---

### BOTTOM NAVIGATION (fixed)

5 Elemente: Today (aktiv) | Insights | + FAB (Orange) | You | Journey
FAB ist ein oranger Kreis mit "+" der über die Nav-Bar hinausragt.

---

## VISUELLE HIERARCHIE (Zusammenfassung)

Von oben nach unten nimmt die Präsenz ab:

1. **STATE CARD** — stärkste Fläche, größter Text, Wearable-Daten
2. **NOW / Primary Action** — zweitstärkste Card, große Buttons, klar "mach das"
3. **DISCOVERY** — mittelstarke Card, Erkenntnis, andere Qualität als Actions
4. **THROUGH THE DAY** — ruhige Checkliste, lesbar aber nicht dominant
5. **EXPERIMENT** — kompakte Card mit Orange-Akzent, eigenständig
6. **EVENING** — leiseste Items, am Horizont
7. **LOOKING AHEAD** — reiner Text, der ruhigste Bereich
8. **VALIDATING MOMENT** — ein Flüstern zwischen den Sektionen

---

## WAS DIESER PROMPT NICHT ABDECKT

- Interaktionen (Expand, Checkboxen, Tap-Verhalten) — wird in einem separaten Implementierungs-Prompt definiert
- Andere App-States (Midday adjusted, Midday not adjusted, Evening) — wird nach dem Morning-State designed
- Evening Check-out Flow — eigener Screen, eigener Prompt
- Andere Tabs (Insights, You, Journey) — kommt nach Today