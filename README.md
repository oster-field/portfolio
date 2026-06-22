# Andrei Tregubov — Personal Portfolio

## EN

Static single-page portfolio site. No build step, no dependencies — just drop the three files on any web server.

**File structure**

```
index.html   — markup and page structure
Style.css    — all styles (tokens, layout, animations, responsive)
Main.js      — translations (EN/DE), hero wave canvas, publication visualisations, scroll/counter observers
```

**Deployment**

Upload all three files to the same directory on your server. The site is fully self-contained; the only external requests are Google Fonts and Google Analytics (`G-R2S0KK9753`).

**Editing content**

Most visible text is managed through the translation object at the top of `Main.js` (keys `en` and `de`). Hard-coded strings that don't need translation (dates, DOIs, links) live directly in `index.html`.

---

## DE

Statische Einzelseiten-Portfolio-Website. Kein Build-Schritt, keine Abhängigkeiten — einfach die drei Dateien auf einen Webserver legen.

**Dateistruktur**

```
index.html   — Markup und Seitenstruktur
Style.css    — Alle Styles (Tokens, Layout, Animationen, Responsive)
Main.js      — Übersetzungen (EN/DE), Hero-Wave-Canvas, Publikations-Visualisierungen, Scroll-/Counter-Observer
```

**Deployment**

Alle drei Dateien in dasselbe Verzeichnis auf dem Server hochladen. Die Seite ist vollständig eigenständig; die einzigen externen Anfragen sind Google Fonts und Google Analytics (`G-R2S0KK9753`).

**Inhalte bearbeiten**

Die meisten sichtbaren Texte werden über das Übersetzungsobjekt am Anfang von `Main.js` verwaltet (Schlüssel `en` und `de`). Hart kodierte Zeichenketten, die keine Übersetzung benötigen (Daten, DOIs, Links), befinden sich direkt in `index.html`.