# Railway configuration

`railway.ts` defines the web service, GitHub source and static build settings.
The Railway SDK is installed with the project's Bun dependencies.

From the repository root, link the CLI to the `solis-website` project in
jr's Workspace and select its `production` environment. Preview and apply
configuration changes with:

```sh
mise exec -- railway config plan
mise exec -- railway config apply
```

The service builds `master` with Railpack and serves `dist/` using Caddy.
`Staticfile` disables the SPA fallback so unknown paths return 404.
