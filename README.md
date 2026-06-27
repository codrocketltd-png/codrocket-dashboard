# CodRocket — Video

A [Remotion](https://www.remotion.dev) project for producing CodRocket's
"Car Shipping" promo video. Scaffolded with `npx create-video` and themed to
match the [CodRocket dashboard](./codrocket-dashboard.html) (brand red
`#E8332A`, navy `#0D1B2A`, Space Grotesk + Inter).

## Commands

```bash
npm install        # install dependencies
npm run studio     # open the Remotion Studio preview/editor
npm run render     # render to out/codrocket-promo.mp4
npm run render:still   # render a single poster frame
npm run upgrade    # upgrade Remotion to the latest version
```

## Composition

`CodRocketPromo` — 12s, 1920×1080 @ 30fps — is built from four scenes
(`src/scenes/`), stitched together in `src/CodRocketPromo.tsx`:

| Scene     | Frames | What it shows                                            |
| --------- | ------ | -------------------------------------------------------- |
| `Intro`   | 0–90   | Rocket logo pop + "CodRocket" wordmark reveal            |
| `Tagline` | 90–180 | "Car shipping, reimagined."                              |
| `Stats`   | 180–285| Animated KPI counters (real dashboard numbers)           |
| `Outro`   | 285–360| Logo + "Ship smarter. Start today." CTA                  |

The KPIs in `Stats` (284 orders, 67 in transit, $1.24M MTD revenue, 93.3%
on-time) are pulled straight from the dashboard. Brand tokens live in
`src/theme.ts` so colors and fonts stay in sync.

## Project structure

```
src/
  index.ts            # registerRoot entry point
  Root.tsx            # <Composition> registration
  CodRocketPromo.tsx  # main timeline (Series of scenes)
  theme.ts            # brand colors, fonts, video format
  components/
    RocketLogo.tsx    # the CodRocket rocket mark
  scenes/
    Intro.tsx · Tagline.tsx · Stats.tsx · Outro.tsx
```

## Rendering in a restricted/sandboxed environment

Remotion normally downloads its own Chrome Headless Shell on first render. If
outbound downloads or TLS are restricted (e.g. a sandboxed CI/web session),
point it at a pre-installed headless Chromium and skip the download:

```bash
npm run render -- \
  --browser-executable=/path/to/chrome-headless-shell \
  --ignore-certificate-errors
```

`--ignore-certificate-errors` is only needed when a proxy presents a CA the
headless browser doesn't trust (it lets the Google Fonts woff2 files load).
Neither flag is required on a normal developer machine.
