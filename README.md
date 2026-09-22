# Solis website

The Astro site for [solisapp.xyz](https://solisapp.xyz). Static HTML and CSS with
locally served fonts and images. The screenshot picker works without JavaScript.

On desktop, the phone stays fixed in the right column through the footer. On
mobile, it scrolls with the page between the introduction and features.

## Development

Install [mise](https://mise.jdx.dev/getting-started.html), then run these commands
from the repository root:

```sh
mise trust
mise install
mise run install
mise run dev
```

Open [the local site](http://127.0.0.1:4321). Node and Bun versions are pinned in
`mise.toml`; dependencies are locked in `bun.lock`.
Astro runs the dev server in the background. Use `mise exec -- bun run astro dev stop`
to stop it and `mise exec -- bun run astro dev logs` to inspect its logs.

```sh
mise run check    # Astro and TypeScript diagnostics
mise run build    # Generate the static site in dist/
mise run preview  # Serve the production build locally
```

## Content and images

- `src/pages/index.astro`: page content and metadata.
- `src/styles/global.css`: layout, colours, and typography.
- `src/components/PhonePreview.astro`: responsive phone frame and screenshot picker.
- `src/components/AppStoreLink.astro`: App Store link and badge sizing.
- `src/assets/screenshots/`: unmodified current app captures, copied from the iOS
  repository's `media/app-store/raw/en-CA/iphone-6.9/` directory. Astro generates
  responsive WebP versions at build time.
- `src/assets/app-icon.png`: the current iOS app icon.
- `public/`: App Store badge, favicons, social preview, robots, and sitemap.

To refresh screenshots, run the iOS repository's screenshot workflow and replace
the four source PNGs. Keep their original dimensions; the phone frame and Astro
image pipeline handle sizing. The screenshots show a fixed Vancouver evening,
not live sun times.

After changing the icon or timeline screenshot, run `mise exec -- bun run assets`
to regenerate favicons, the touch icon, and the social preview.

The App Store badge is the unmodified [official Apple SVG](https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg),
displayed at 48px tall. Preserve its proportions and the clear space specified in
[Apple's marketing guidelines](https://developer.apple.com/app-store/marketing/guidelines/).

## Hosting

The domain currently serves from Netlify. `netlify.toml` configures `bun run build`
and the `dist/` publish directory with the same runtime versions as mise.
The default branch is `master`. For Git-based deployment, connect
[`coffee-cup/solis-website`](https://github.com/coffee-cup/solis-website) in Netlify
and set its production branch to `master`.
Local development and builds do not deploy the site.
