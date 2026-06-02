# Handoff: Sparkle your Life — website (Fanny, life coach)

## Overview
Een moderne, conversiegerichte **one-page website** voor Fanny, transformatiecoach en
"vereenvoudiger" (merknaam: **Sparkle your Life**). De pagina vervangt haar verouderde
Strato-site. Doel: bezoekers in één vloeiende scroll meenemen van herkenning naar
vertrouwen naar actie (een kennismakingsgesprek aanvragen).

De site bevat één bijzondere feature: een **ingebouwde stijl-switcher** (rechtsonder)
waarmee live tussen drie complete visuele thema's (A / B / C) geschakeld kan worden.
Dit is bedoeld als keuzehulp voor de opdrachtgever; in productie kan dit één vast thema
worden (of als feature blijven).

## About the Design Files
De bestanden in dit pakket zijn **design-referenties, gemaakt in HTML/CSS** — een
high-fidelity prototype dat de beoogde look, content en interactie toont. Het is **geen
productiecode om klakkeloos over te nemen**.

De opdracht is om dit ontwerp te **herbouwen in de doelomgeving** met de daar geldende
patronen en libraries. Is er nog geen codebase, dan is voor een marketing one-pager als
deze een statische generator of licht framework het meest passend (bijvoorbeeld
**Astro**, **Next.js (static export)**, **Eleventy** of **SvelteKit**). Houd de site
licht: het is grotendeels statische content met wat CSS en een paar regels JS.

`index.html` + `styles.css` draaien out-of-the-box: open `index.html` in een browser om
het gedrag exact te zien. Gebruik dat als levende referentie naast deze README.

## Fidelity
**High-fidelity (hifi).** Kleuren, typografie, spacing en interacties zijn definitief.
Bouw de UI pixel-getrouw na. Alle exacte waarden staan onder *Design Tokens*.

---

## Information architecture (volgorde van de pagina)
De secties volgen bewust een psychologische funnel, niet de oude menustructuur:

1. **Sticky nav** — logo + ankerlinks + primaire CTA
2. **Hero** — belofte + CTA + portret
3. **Wat kun je verwachten** — rustige intro/quote
4. **Sparkle-band** — full-bleed glitterfoto met quote (visuele adempauze)
5. **Dit ben jij** — herkenning (donker/gekleurd accentblok)
6. **Dit doe ik** — aanpak + 5 genummerde beloften
7. **Mijn aanbod** — 6 diensten in een 2-koloms grid, met een accentkaart als scheiding
8. **Dit ben ik** — Fanny's verhaal + portret (sticky beeld)
9. **Closing / contact** — logo, slot-CTA, e-mail
10. **Footer**

Ankers: `#top`, `#jij`, `#doe`, `#aanbod`, `#ik`, `#contact`.

---

## Theming (kern van het ontwerp)
De hele site wordt gestyled via **CSS custom properties** die per thema worden gezet op
`<html data-theme="a|b|c">`. De layout is identiek voor alle drie; alleen de tokens
(kleur, font, vormtaal) verschillen. Implementeer dit met dezelfde token-aanpak
(CSS variables, of de theming-laag van je framework / design system).

| Thema | Naam | Sfeer | Display-font | Body-font | Vormtaal beeld |
|-------|------|-------|--------------|-----------|----------------|
| **A** (default) | Aardse Ziel | warm, geaard, ceremonieel | Marcellus (400) | Mulish | organische "blob" |
| **B** | Stille Helderheid | rustig, editorial, premium | Newsreader (500) | Karla | strakke rechthoek (3px) |
| **C** | Zachte Gloed | warm, vrouwelijk, hoopvol | Cormorant Garamond (600) | Nunito Sans | ronde hoeken (28px) + gloed |

Fonts via Google Fonts (zie `<link>` in `index.html`).

### Design tokens per thema
Alle tokens zijn CSS-variabelen. Hieronder de waarden.

**Thema A — Aardse Ziel (`:root`, `[data-theme="a"]`)**
```
--bg:        #f4ece0   /* pagina-achtergrond, warm crème */
--bg-alt:    #ece0cf   /* alternerende secties, zand */
--ink:       #372f28   /* tekst */
--muted:     #6e6253   /* secundaire tekst */
--accent:    #a96746   /* terracotta/klei — knoppen, accenten */
--accent-deep:#8a4f33  /* hover / diepere accent */
--accent-2:  #5f6a4d   /* mosgroen, secundair accent */
--line:      rgba(120,90,60,.20)        /* hairlines/borders */
--hero-bg:   linear-gradient(180deg,#f8f1e7,#efe1cf)
--band-bg:   #a96746   /* "Dit ben jij" + closing blok */
--band-fg:   #f6ede3   /* tekst op band */
--img-radius:47% 53% 56% 44% / 46% 44% 56% 54%   /* organische blob */
--card-radius:18px
--fd:'Marcellus',serif    --fdw:400
--fb:'Mulish',sans-serif
--glow:none
```

**Thema B — Stille Helderheid (`[data-theme="b"]`)**
```
--bg:#f7f4ef  --bg-alt:#efeae1  --ink:#272320  --muted:#6c665c
--accent:#b3863c  --accent-deep:#8a6526  --accent-2:#b3863c
--line:rgba(40,34,28,.14)
--hero-bg:#f7f4ef
--band-bg:#272320  --band-fg:#f1ece3
--img-radius:3px   --card-radius:3px
--fd:'Newsreader',serif  --fdw:500   --fb:'Karla',sans-serif
--glow:none
/* knoppen: border-radius 2px, geen schaduw (zie .btn override) */
```

**Thema C — Zachte Gloed (`[data-theme="c"]`)**
```
--bg:#fbf4ec  --bg-alt:#f6e2d0  --ink:#4a3a30  --muted:#8a7567
--accent:#cf8463  --accent-deep:#b5673f  --accent-2:#c19a5b
--line:rgba(150,90,55,.18)
--hero-bg:radial-gradient(120% 92% at 72% 14%,#fff6ec,#fbeede 40%,#f3d8c4)
--band-bg:linear-gradient(120deg,#d98a64,#c9764f)  --band-fg:#fff7f0
--img-radius:28px  --card-radius:24px
--fd:'Cormorant Garamond',serif  --fdw:600  --fb:'Nunito Sans',sans-serif
--glow:0 22px 54px rgba(150,90,55,.22)   /* zachte gloed onder beelden/knoppen */
/* hero krijgt extra radiale lichtgloed achter het portret (::before) */
```

### Typografie-schaal (responsive, clamp)
```
Hero h1:        clamp(44px, 6.4vw, 80px)   line-height 1.08
Sectie h2:      clamp(34px, 4.6vw, 52px)
Intro "big":    clamp(26px, 3.3vw, 40px)   line-height 1.3
Sparkleband q:  clamp(28px, 3.8vw, 46px)   line-height 1.26
Closing h2:     clamp(36px, 5vw, 58px)
Offer h3:       30px      Belofte h3: 26px
Body:           18px (mobiel 17px)  line-height 1.72
Lead:           20–21px   kleur --muted
Eyebrow:        13px, letter-spacing 3.4px, uppercase, 700, kleur --accent
```

### Spacing / radius
```
Section padding:     120px verticaal (mobiel 80px)
Content max-width:    1180px (.wrap) / 880px (.narrow), side-padding 40px (mobiel 28→20px)
Grid gaps:            24px (cards) – 64px (hero/2-koloms blokken)
Knop:                 padding 15px 30px, radius 40px (thema B: 2px)
Card radius:          var(--card-radius)
```

---

## Schermen / secties (detail)

### 1. Nav (`header.nav`)
- Sticky top, `z-index:40`, halftransparante `--bg` met `backdrop-filter: blur(10px)` + onderlijn `--line`.
- Links: rond **logo-muntje** (38px, `border-radius:50%`, 1px accent-ring, lichte schaduw) + woordmerk "Sparkle your Life" in display-font (23px).
- Rechts: ankerlinks (*Dit ben jij, Dit doe ik, Aanbod, Dit ben ik*) in `--muted` 15px/600, hover → `--ink`; daarna primaire knop **"Plan een kennismaking"**.
- Mobiel (<900px): ankerlinks verbergen (`display:none`), logo + CTA blijven. **Aanbeveling voor productie:** voeg een hamburger-menu toe voor de ankerlinks op mobiel.

### 2. Hero (`.hero`)
- Achtergrond `--hero-bg`. 2-koloms grid `1.05fr .95fr`, gap 64px, padding 90px/110px.
- Links: eyebrow "Life Coach · Vereenvoudiger" (gebruik **middot ·**, geen streepje), h1 "Vind jouw / Sparkle terug", lead (origineletekst), twee knoppen (primair + ghost).
- Rechts: portret (`uploads/IMG_6416...jpeg`), `aspect-ratio 4/4.7`, `object-position center 22%`, `border-radius:var(--img-radius)`. Erachter een offset **frame** (1.5px accent-border, zelfde radius; verborgen in thema C). Klein rond **glitter-muntje** (118px) rechtsonder als accent. Thema C: extra radiale lichtgloed achter portret.
- Mobiel: één kolom, beeld bovenaan (`order:-1`), max-width 420px.

### 3. Wat kun je verwachten (`.verwacht`)
- Achtergrond `--bg-alt`, gecentreerd, `.narrow` (880px).
- Eyebrow + grote quote (display-font, `.big`) + twee body-paragrafen in `--muted`.

### 4. Sparkle-band (`.sparkleband`)
- Full-bleed sectie, `min-height:440px`. Achtergrondfoto = **glitter** (`uploads/photo-1514413333301-...jpeg`), `object-fit:cover`.
- Donkere tint-overlay: `linear-gradient(180deg, color-mix(accent-deep 55%, rgba(20,14,10,.5)), rgba(20,14,10,.72))` voor leesbaarheid.
- Witte gecentreerde quote (display-font): *"Laten we samen op ontdekkingsreis gaan en die 'Sparkle in your Life' weer laten schijnen."*

### 5. Dit ben jij (`.jij`)
- Volledig **gekleurd accentblok**: achtergrond `--band-bg`, tekst `--band-fg`.
- 2-koloms grid `.9fr 1.1fr`: links portret (`uploads/IMG_6344...jpeg`, wijzend), rechts eyebrow + h2 "Je staat op een kruispunt in je leven" + meerdere paragrafen + afsluitende `.closer` (display-font).
- Mobiel: één kolom.

### 6. Dit doe ik (`.ik-doe`)
- `.wrap`. Sectie-head (eyebrow + h2 "Weer overzicht, rust en richting"), 3 intro-paragrafen (`.doe-intro`, 20px).
- Divider-label "Wat kun je van mij verwachten?" (centrale tekst met hairlines links/rechts).
- **5 beloften** (`.belofte`): grid `72px 1fr`, hairline-scheiding boven elke rij (laatste ook onder). Groot genummerd (01–05) in display-font + accentkleur, h3 (26px) + paragraaf in `--muted`. Mobiel: nummer boven tekst.

### 7. Mijn aanbod (`.aanbod`)
- Achtergrond `--bg-alt`. Sectie-head + lead.
- **2-koloms grid** (`.offers`) met 7 kaarten (`.offer`): witte kaart (`--bg`), 1px `--line` border, `var(--card-radius)`, hover lift + schaduw.
  - Elke kaart: kicker (uppercase accent), h3 (dienstnaam), `.short` (vetgedrukte korte zin), `.more` (uitgebreide paragraaf in `--muted`).
  - **4e kaart is een accent-/scheidingskaart** ("Maar ook"): achtergrond `--band-bg`, tekst `--band-fg`, geen short — scheidt de 1-op-1 diensten van de groepsvormen.
- Mobiel: één kolom.

### 8. Dit ben ik (`.ik`)
- 2-koloms grid `.85fr 1.15fr`, `align-items:start`. Links **sticky** portret (`.figcol`, `top:96px`, `uploads/IMG_6348...jpeg`). Rechts eyebrow + h2 "Hoi, ik ben Fanny!" + verhaal. Eerste en laatste alinea als `.signal` (display-font, `--accent-deep`).
- Mobiel: sticky uit, één kolom.

### 9. Closing / contact (`.closing`)
- Achtergrond `--band-bg`, gecentreerd. **Groot rond logo** (132px, lichte rand). h2 "Klaar om jouw Sparkle weer terug te vinden?", paragraaf, lichte knop "Plan een kennismaking" (mailto), e-mailadres als onderstreepte link.

### 10. Footer (`.foot`)
- Donkerbruin (`#2b2620`; thema C `#3a2c24`). Woordmerk links, ankerlinks midden, e-mail rechts.

### Stijl-switcher (`.switcher`)
- Fixed rechtsonder (`z-index:60`), pill met label "Stijl" + drie ronde knoppen A/B/C.
- Actieve knop: `aria-pressed="true"`, gevuld met de themakleur (A=#a96746, B=#272320, C=#cf8463).
- Mobiel (<560px): label verbergen, knoppen blijven.

---

## Interactions & Behavior
- **Stijl-switcher**: klik zet `data-theme` op `<html>`, update `aria-pressed`, en bewaart de keuze in `localStorage` onder sleutel `sparkleTheme`. Bij laden wordt de bewaarde keuze hersteld. Standaard = `a`. Themawissel animeert via `transition: background .4s` op `body` en gekleurde secties.
- **Reveal-on-scroll**: elementen met `.reveal` starten op `opacity:0; translateY(22px)` en krijgen `.in` (→ zichtbaar) via een `IntersectionObserver` (`threshold 0.12`, `rootMargin '0px 0px -8% 0px'`). Respecteer `prefers-reduced-motion: reduce` (dan direct zichtbaar, geen transitie). Zonder IO-support: alles direct zichtbaar.
- **Knoppen**: hover lift `translateY(-2px)` + `--accent-deep`. Ghost-knop: transparante achtergrond, accent-border, lichte fill op hover.
- **Cards**: hover lift + schaduw.
- **Smooth scroll** op ankerlinks (`html{scroll-behavior:smooth}`, uit bij reduced-motion).
- **CTA's** linken naar `mailto:info@sparkleyourlife.nl`. In productie: vervang door een echte contact-/boekingsflow (formulier of agenda-tool zoals Calendly).

## State Management
Minimaal:
- `theme` (`'a' | 'b' | 'c'`), gepersisteerd in `localStorage` (`sparkleTheme`).
- Reveal-zichtbaarheid is puur DOM/observer, geen app-state nodig.

Geen data fetching. Statische content.

## Responsive behavior
- Breakpoints: **900px** (grids → één kolom, nav-links verborgen, kleinere section-padding) en **560px** (kleinere side-padding, belofte-nummer boven tekst, switcher-label verborgen).
- Geen horizontale overflow; beelden `max-width:100%`.
- Adviseer mobiel hamburger-menu toe te voegen (zie Nav).

## Assets
Alle beeld zit in dit pakket onder `uploads/` en `assets/`.

| Bestand | Gebruik |
|---------|---------|
| `assets/logo-sparkle.png` (500×500) | logo: nav-muntje, closing (groot), favicon. Heeft een warme radiale achtergrond (niet transparant). |
| `uploads/IMG_6416-cmid_x3swe-protdo.jpeg` | hero-portret (Fanny bij raam) |
| `uploads/IMG_6344-cmid_x3sw2-wmqjd.jpeg` | "Dit ben jij" (wijzend) |
| `uploads/IMG_6348-cmid_x3sw8-uaagyj.jpeg` | "Dit ben ik" (contemplatief) |
| `uploads/photo-1514413333301-5e0bfed46893.jpeg` | gouden glitter: hero-accent + sparkle-band achtergrond |

**Extra beschikbaar** (niet in deze layout gebruikt, wel nuttig voor toekomstige
pagina's/detailpagina's): `IMG_6337`, `IMG_6336` (extra portretten), `photo-1520533881-...`
(silhouet met zon), `photo-1586257078534-...` (lichtbol in handen). Vraag de opdrachtgever
om deze indien gewenst aan te leveren.

**Aanbeveling productie:** optimaliseer de foto's (WebP/AVIF, responsive `srcset`); de
JPEGs zijn nu groot (tot ~2 MB). Een transparante PNG/SVG-versie van het logo is wenselijk
voor flexibeler gebruik op verschillende achtergronden.

## Copy (belangrijk)
- **Alle zichtbare teksten staan letterlijk in `index.html`.** De originele teksten van de
  opdrachtgever zijn één-op-één overgenomen en alleen licht uitgebreid voor body; de tone of
  voice (warm, nuchter, direct, niet-oordelend) moet intact blijven.
- **Geen em-dash (—) gebruiken, nergens.** Expliciete wens van de opdrachtgever. Vervang door
  komma, punt, "en" of dubbele punt. Houd dit aan bij alle nieuwe of aangepaste copy.
- Het aanbod heeft per dienst een korte zin (`.short`) plus een uitgebreidere toelichting
  (`.more`); die uitgebreide teksten zijn nieuw geschreven in Fanny's stijl.

## Files in dit pakket
- `index.html` — volledige werkende prototype-pagina (alle content + switcher + reveal-JS).
- `styles.css` — alle styling: tokens voor 3 thema's, layout, componenten, responsive.
- `assets/`, `uploads/` — alle gebruikte beelden (zie *Assets*).
- `reference/Sparkle Concepten.html` (+ `content.js`, `design-canvas.jsx`, `directions/`) —
  het oorspronkelijke vergelijkingscanvas met de 3 losse concepten. Puur referentie;
  niet nodig voor implementatie van de uiteindelijke site.

## Aanbevolen vervolgstappen (optioneel, met opdrachtgever afstemmen)
- Detailpagina per aanbod-onderdeel (goed voor SEO en gericht zoekverkeer); de architectuur
  is hierop voorbereid.
- Echte boekings-/contactflow i.p.v. mailto.
- Eén thema vastzetten als definitieve merkstijl (of de switcher bewust behouden).
- Foto-optimalisatie + transparant logo.
