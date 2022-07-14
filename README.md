# Turborepo starter with pnpm

This is a Mono-repo built with [Turborepo](https://turborepo.org/) and uses [pnpm](https://pnpm.io) as the packages manager. So you'll need to have pnpm installed in order to run things.

### Develop

Note some warnings about peer dependencies come up after the install step. You can ignore these...I just didn't have time to fix them yet.

To develop all apps and packages, run the following command:

```
cd svelte-single-spa-example
pnpm install
pnpm run dev
```

Then go to `http://localhost:9000` to see the website running locally. Each of the pages is being served up via `sirv`, in order to mock coming from a CDN.

This is not a complete setup, and more is needed to get it to a production level. For example, I have not setup import-mapping through CDN for your different staged environments, husky isn't complete, reduce bundle size by moving common dependencies to root single-spa imports, etc.

If you desire to use this as a starting point, please fork the repo and then do a simple search & replace for my name `bryce` with whatever org name you plan on using.

Lastly if you want to see a simple redirect based on the existence of a Json Web Token (JWT) then uncomment line 16 in `web/navbar/src/App.svelte`
