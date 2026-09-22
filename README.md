# Solis website

The Astro site for [solisapp.xyz](https://solisapp.xyz). Static HTML and CSS with a sticky phone preview. The screenshot picker works
without JavaScript. Fonts and images are served locally.

## Development

Install [mise](https://mise.jdx.dev/getting-started.html), then:

```sh
mise trust
mise install
mise run install
mise run dev
```

Open http://127.0.0.1:4321. Node and Bun versions are pinned in `mise.toml`.
Astro runs the dev server in the background. Use `mise exec -- bun run astro dev stop`
to stop it and `mise exec -- bun run astro dev logs` to inspect its logs.

```sh
mise run check
mise run build
mise run preview
```

## Content and images

- `src/pages/index.astro`: page content and metadata.
- `src/styles/global.css`: layout, colours, and typography.
- `src/components/PhonePreview.astro`: responsive phone frame and screenshot picker.
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

## Hosting

The domain currently serves from Netlify. `netlify.toml` configures `bun run build`
and the `dist/` publish directory with the same runtime versions as mise.
Connect this repository in Netlify and select the intended production branch.
Local development and builds do not deploy the site.
