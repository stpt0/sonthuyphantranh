# Test report

## Summary

| Measure | Result |
|---|---:|
| Source URLs processed in the research summary | 27 |
| Source URLs inspected successfully | 26 |
| Source URLs unavailable | 1 (`/sitemap.xml`, HTTP 404) |
| Public application page routes implemented | 25 / 25 |
| Static discovery resource implemented | 1 (`/robots.txt`) |
| Playwright tests passed | 31 / 31 |
| Build | Passed |

The 25 application routes consist of two home aliases, two informational pages,
19 article pages, and two forum index pages. `/sitemap.xml` remains absent,
consistent with the source site's observed 404. External CSS/image asset URLs
listed in the route research are evidence, not application page routes.

## Playwright coverage

Run with `npm test` using Chromium:

- Direct navigation and visible page content for each of the 25 application
  routes, including all 19 observed `news.php?id=N` article IDs.
- HTTP 200 response, shared header/footer, no browser page errors, and no
  console errors for each application route.
- Internal homepage links restricted to surveyed local route patterns.
- `/robots.txt` served as a public static resource.
- Primary navigation between character, download, and forum page groups.
- Ranking selection disclosure when public ranking records are unavailable.
- Forum navigation between the two surveyed pages.
- Horizontal overflow checks for home, article, information, download, and
  forum page groups at 375px and 320px widths.
- No broken `<img>` elements were found; the reconstruction intentionally uses
  CSS illustrations and does not embed unlicensed source images.

Third-party destinations were not opened during testing. The sitemap's source
404 was recorded during discovery and the local sitemap is intentionally not
implemented as a page.

## Build validation

`npm run build` completed successfully with Vite 8.3.6. `git diff --check`
reported no whitespace errors.

## Screenshot review

Captured full-page Chromium screenshots at a 1280x720 viewport and reviewed the
layout against the corresponding source captures. Colors, centered 630px
column, compact navigation, content hierarchy, and home ranking panel were
recreated approximately. Source artwork and body text were omitted for reuse
rights; CSS placeholders are intentionally not pixel-identical.

- [Rebuilt homepage](./screenshots/rebuilt-home.png)
- [Rebuilt news detail, ID 49](./screenshots/rebuilt-news-49.png)
- [Rebuilt forum index, page 0](./screenshots/rebuilt-forum-0.png)

## Remaining limits

- Full article bodies and original artwork require content and asset reuse
  authorization.
- Ranking names/scores and service endpoints were not confirmed.
- Forum detail threads and account flows are not implemented. Account controls
  remain disabled rather than simulating authentication.
- A production host must rewrite the observed PHP/HTML client routes to
  `index.html`.
