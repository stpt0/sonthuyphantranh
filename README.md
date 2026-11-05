# Sơn Thủy Phân Tranh — independent public-site reconstruction

A React + Vite reconstruction of the surveyed public website routes. It uses
local, evidence-backed metadata and original CSS illustration; it does not
hotlink or copy source-site artwork or reproduce full article/forum text.

## Run locally

```sh
npm install
npm run dev
```

## Build and test

```sh
npm run build
npm test
```

Playwright tests cover the surveyed page routes, ranking-state disclosure,
forum pagination, client errors, and a mobile viewport. Install the Playwright
Chromium browser with `npx playwright install chromium` if it is not already
available in the environment.

## Evidence and limitations

See `research/pages/` and `docs/` for the public inspection record and
specifications. Ranking values, article bodies, download targets, forum threads,
and authentication behavior are not inferred where the evidence is missing.
The host serving a production build must rewrite the observed legacy paths
(`news.php` and `.html`) to `index.html` for client-side routing.