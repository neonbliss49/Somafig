# Somatiq — Today Screen Visual Hierarchy Fix
## Korrektur-Prompt für Figma Make
## Problem: Alles sieht gleich aus. Keine visuelle Hierarchie zwischen Zeitphasen.

---

## DAS PROBLEM

Der Today Screen ist inhaltlich korrekt, aber visuell eine gleichförmige Liste von Cards. Es gibt keinen Unterschied in Prominenz zwischen der wichtigsten Action (NOW) und den Items am Horizont (EVENING). Alles hat denselben Kontrast, dieselbe Card-Behandlung, dieselbe Opazität. 

Dieser Prompt ändert NUR die visuelle Behandlung. Keine Inhalte, keine Reihenfolge, keine Texte ändern sich.

---

## FIX 1: PRIMARY ACTION CARD (NOW) — muss dominant sein

Die Primary Action Card ist das Wichtigste auf dem Screen. Sie muss sich visuell von allem anderen abheben.

**Änderungen:**
- Gradient-Hintergrund: stärker, nicht subtil. Links teal (#248aa7) bei 30% Opacity, nach rechts auslaufend in den Card-Hintergrund. Sichtbar, nicht nur ein Hauch.
- Linker Rand: 3px solid teal (#248aa7) Akzentlinie am linken Kartenrand
- Card Padding: erhöhen auf 24px (statt 20px wenn weniger)
- Title ("Take a 10–15 min walk"): 22px statt 20px, font-weight 600
- Buttons: größer. Padding 14px vertikal statt 10px. "Done" Button: stärkerer teal-Hintergrund, nicht transparent.
- Gesamte Card: leichter erhöht wirken — shadow stärker: shadow-[0_8px_32px_-8px_rgba(36,138,167,0.25)]
- Die Card soll sich anfühlen wie "DAS ist dein nächster Schritt" — nicht wie eine von vielen

---

## FIX 2: THROUGH THE DAY — leiser als NOW

Die Through the Day Items sollen wie eine ruhige Checkliste wirken, nicht wie eigene Cards mit Gewicht.

**Änderungen:**
- KEINEN glassmorphism Hintergrund. Stattdessen: transparent background mit nur einer dezenten border-bottom (rgba(255,255,255,0.06)) als Trenner zwischen Items.
- Kein rounded Card-Shape, kein Schatten, kein border ringsherum.
- Checkbox: 20px statt 24px, border-Farbe: white/20 (dezenter)
- Title-Text: 15px statt 16px, white/80 statt white
- Subtitle-Text: 13px, white/40
- Chevron (Expand-Pfeil): white/20 statt white/30
- Expand-Bereich: wenn geöffnet, dezenter Hintergrund (rgba(255,255,255,0.03)), eingerückt unter den Text
- Zwischen Items: 4px gap statt 8px. Kompakter, ruhiger.

Das Ergebnis: Diese Items sind lesbar und interaktiv, aber sie schreien nicht. Sie sind "du kannst das auch noch machen" — nicht "TU DAS JETZT".

---

## FIX 3: EVENING — am Horizont, fast im Hintergrund

Die Evening-Sektion soll visuell am weitesten entfernt wirken. Du siehst sie, aber sie fordert keine Aufmerksamkeit.

**Änderungen (nur im Morning und Midday States):**
- Gesamte Sektion: opacity 55% (statt volle Opazität)
- Section Label "EVENING": white/30 statt white/50
- Items: gleiche Struktur wie Through the Day (kein Card-Shape), aber noch dezenter
- Checkbox: white/15 border
- Title-Text: 14px, white/50
- Subtitle/Context-Text: 12px, white/30
- Kein Expand-Chevron sichtbar im Morning/Midday State. Erst im Evening State werden die Chevrons sichtbar und die Items interaktiv.
- Zwischen Evening-Sektion und Through the Day: 32px Abstand (mehr Luft, optische Trennung)

**Im Evening State:** Alles wird auf volle Opazität hochgefahren, Chevrons erscheinen, Checkboxen werden interaktiv. Die Sektion "wacht auf".

---

## FIX 4: VALIDATING MOMENT — kein Card-Look

Der Sparkles-Text zwischen Evening und Experiment soll sich wie ein eingestreuter Kommentar anfühlen, nicht wie eine weitere Card.

**Änderungen:**
- KEINEN Card-Hintergrund (kein bg-white/5, kein border). Komplett transparent.
- Sparkles Icon: 14px (kleiner), #8ab4f8 bei 60% Opacity
- Text: 13px statt 14px, white/50 statt white/80, italic
- Kein Padding-Box. Nur Icon + Text inline, mit 24px Abstand oben und unten.
- Fühlt sich an wie eine Randbemerkung, ein Flüstern — nicht wie ein UI-Element.

---

## FIX 5: ACTIVE EXPERIMENT CARD — eigenständig, aber nicht dominant

Die Experiment Card soll sich von der Action-Checkliste abheben (es IST etwas anderes — ein laufender Test), aber nicht mit der Primary Action konkurrieren.

**Änderungen:**
- Linker Rand: 3px solid amber (#FFB162) — zeigt an "das ist ein Experiment, kein Task"
- Hintergrund: subtiler als die Primary Action. rgba(255,178,98,0.08) statt starker Gradient.
- Dots: 4 gefüllte Dots (nicht 3 — es ist Day 4 of 7). Dot 1–4 gefüllt, Dot 5–7 outlined.
- Dot Farbe gefüllt: warm cream (#EEE9DF) statt teal
- Card Größe: kompakter als Primary Action. Padding 16px.

---

## FIX 6: LOOKING AHEAD (PREPARE) — kein Card, nur Text

Die Prepare-Sektion soll sich komplett anders anfühlen als die Action-Bereiche. Das ist kein To-Do, das ist ein Blick in die Zukunft.

**Änderungen:**
- KEINE Cards. Nur Textzeilen mit kleinen Icons.
- Jedes Item: Icon (16px, white/30) links + Text rechts, vertikal zentriert
- Trenner zwischen Items: border-bottom rgba(255,255,255,0.05) — kaum sichtbar
- Item-Padding: 16px vertikal
- Text: 14px, white/50 (matter als alles andere)
- Subtext (bei Gynecologist): 12px, white/30
- Die ganze Sektion fühlt sich an wie ein ruhiger Ausblick, nicht wie weitere Tasks
- Abstand zur Experiment Card darüber: 40px (viel Luft)

---

## FIX 7: STATE CARD — bleibt prominent aber klarer

Die State Card ist OK, aber ein kleiner Fix:

**Änderungen:**
- Subline ("3 adjustments for today · Energy dip likely in 3–4 hours"): Die zwei Teile auf ZWEI Zeilen aufteilen.
  - Zeile 1: "3 adjustments for today" — 14px, white/60
  - Zeile 2: "Energy dip likely in 3–4 hours" — 14px, white/40
  - Das schafft lesbare Struktur statt eines langen Strings

---

## FIX 8: SPACING UND ATEMPAUSEN

Zwischen den Sektionen braucht es unterschiedliche Abstände, damit die Seite atmet:

| Zwischen | Abstand |
|----------|---------|
| State Card → Cycle Context | 8px (eng zusammen, gehört inhaltlich zusammen) |
| Cycle Context → NOW | 24px |
| NOW → Through the Day | 32px |
| Through the Day → Evening | 32px |
| Evening → Validating Moment | 24px |
| Validating Moment → Active Experiment | 24px |
| Active Experiment → Looking Ahead | 40px (große Pause, neuer Kontext) |
| Nach Looking Ahead (Seitenende) | 48px padding-bottom |

---

## ZUSAMMENFASSUNG DER VISUELLEN HIERARCHIE (von laut nach leise):

1. **PRIMARY ACTION (NOW)** — lauteste Card, teal Akzent, Schatten, große Buttons
2. **STATE CARD** — prominent aber informativ, kein Call-to-Action
3. **ACTIVE EXPERIMENT** — eigenständig, amber Akzent, kompakt
4. **THROUGH THE DAY** — ruhige Checkliste, transparent, kein Card-Shape
5. **LOOKING AHEAD** — Text mit Icons, am leisesten
6. **EVENING** — sichtbar aber gedimmt (55% Opacity im Morning/Midday)
7. **VALIDATING MOMENT** — Flüstern, italic, kein UI-Element

---

## WAS NICHT ÄNDERN

- Keine Texte ändern
- Keine Reihenfolge ändern
- Keine Elemente hinzufügen oder entfernen
- Keine Funktionalität ändern (Checkboxen, Expand, Buttons funktionieren wie bisher)
- Keine Farben der Akzente ändern (teal bleibt teal, amber bleibt amber, orange bleibt orange)
- Evening Check-out Flow — nicht anfassen
- Morning Flow — nicht anfassen
- Bottom Sheet — nicht anfassen