# Zus & Zo Suriname - landing page

Overhaul redesign of [zusenzosuriname.com](https://www.zusenzosuriname.com/),
built as a single-page design-system reference. Next.js 16 (App Router, RSC) +
Tailwind v4 + Motion.

## Run

```bash
npm run dev
```

## Redesign brief

Mode: **Overhaul** (new visual system, content / IA / SEO surface preserved).
Dials: `DESIGN_VARIANCE 7` / `MOTION_INTENSITY 4` / `VISUAL_DENSITY 4`.

- **Palette (locked):** warm off-white paper + one warm orange accent
  (`--orange: #d67413`, deepened from the live `#D77911` for WCAG AA on cream) +
  light brand aqua (`--aqua`) used only as a surface tint, never a second
  accent. Tokens in `app/globals.css`.
- **Theme:** locked to light (`color-scheme: light`). The brand is a sunny
  white-and-aqua identity; a dark treatment loses it.
- **Type:** Poppins (display, matches the logo geometry) + Rubik (text). Both
  were already on the live site. Italic emphasis stays in-family.
- **Shape:** soft radius scale (`--radius-sm/md/lg`); buttons are full-pill.
- **One colour-block beat:** the `#menu` section (orange), bordered top and
  bottom by the brand wave (`components/wave.tsx`). No other section inverts.
- **Logo:** the venue's `logo-transparent.png`, unmodified, served as
  `public/logo.png`.

## Preserved from the live site

Primary nav labels (Home, Over ons, Menu, Kamers, Tours), the
`{Paginanaam} - Zus & Zo` title pattern, the brand logo, and the orange / aqua /
wave identity. In-page section IDs mirror the nav: `#top`, `#over-ons`, `#menu`,
`#kamers`, `#tours`, `#contact`.

Not built in this pass: the multi-page routes (room and tour detail pages), the
HTML menu that should replace the flipbook, and the Caldera Forms replacement
(booking is currently `mailto:` / `tel:`; the real form must keep the Caldera
field names `fld_8187097` etc.).

## Images

Zus & Zo's own photography, supplied by the venue. Raw originals live in
`source-photos/` (git-ignored); processed web versions are in `public/images/`.
The `tour-*` thumbnails and `tour-fredberg.jpg` are cropped from
`source-photos/ZusZo-Top-10-Tours-poster-80x80cm-1-scaled.jpg` with `sharp`.

| `lib/images.ts` key | File | Placement |
| --- | --- | --- |
| `hero` | `building.jpg` | Hero, right |
| `worldRestaurant` | `dish-moksi.jpg` | Worlds grid |
| `worldCulture` | `booking-board.jpg` | Worlds grid |
| `worldTours` | `tour-fredberg.jpg` | Worlds grid |
| `worldGuesthouse` | `breakfast.jpg` | Worlds grid |
| `food` | `menu-table.jpg` | `#menu` spread |
| `guesthouseBand` | `building-sunset.jpg` | `#kamers` band |
| `tours[0..3]` | `tour-bigipan / -citytour / -dolphin / -jawjaw` | `#tours` carousel |
| `story` | `toast-group.jpg` | `#over-ons` |

To swap an image, drop a replacement into `public/images/` and update the entry
in `lib/images.ts` (src, alt, w, h).

## Copy

Taken from `zus-en-zo-webteksten.md` (inventory of the live site, Sept 2026):
address `Grote Combéweg 13A`, `+597 520-904`, `info@zusenzosuriname.com`, grand
café 09:00 to 21:00, five rooms from €15, and the tour names / prices /
durations in `components/tours.tsx`.

Still to confirm before launch:

- Social URLs in `components/site-footer.tsx` point to platform roots. Swap for
  the real Zus & Zo profiles.
- The `#menu` breakdown (Ontbijt / Lunch / Diner / Zoet & borrel) is a plain
  language summary; the live menu is a flipbook with no extractable text.
- The "Creatief & cultureel" pillar from the design brief is toned down to what
  the live site actually states.
