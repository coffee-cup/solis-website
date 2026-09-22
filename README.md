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

## Privacy policy

`src/pages/privacy-policy.astro` serves `/privacy-policy` for direct linking.
Keep it aligned with app permissions, data handling, website hosting, and the
privacy contact. After deployment, the App Store privacy policy URL is
`https://solisapp.xyz/privacy-policy`.
