# Functional Specification

## Evidence base
Based on:
- [../docs/ROUTE_INVENTORY.md](../docs/ROUTE_INVENTORY.md)
- [../research/pages/SUMMARY.md](../research/pages/SUMMARY.md)
- [../research/pages/home.md](../research/pages/home.md)
- [../research/pages/forum-0.md](../research/pages/forum-0.md)
- [../research/pages/news-49.md](../research/pages/news-49.md)

This file records only functions directly observed or explicitly implied by the public routes and page content.

## 1. Navigation
Confirmed by homepage inspection in [../research/pages/home.md](../research/pages/home.md):
- Home
- Introduce / giới thiệu
- Download / tài game
- Forum
- Fanpage
- Zalo

Behavior:
- Navigation is static and link-based
- Clicking a route loads a new public page or target URL
- The site uses direct page links, not a client-side router in the observed current build

## 2. News listing
Confirmed by homepage and news list structure in [../research/pages/home.md](../research/pages/home.md):
- The home page displays a vertical list of event/news summaries
- Each item contains thumbnail + title + brief excerpt
- Items are grouped as article cards

Observed data pattern:
- Title
- Preview text
- Link to detail page
- Thumbnail or visual indicator

## 3. Event listing
Confirmed by homepage and event titles in [../research/pages/home.md](../research/pages/home.md):
- Event items show seasonal and game-event entries like Christmas, Halloween, birthday, summer, etc.
- Each event has a time window and short description

Observed behavior:
- Event list is static and public-facing
- Titles link to a detail page

## 4. Guide content
Confirmed by the guide pages in [../research/pages/news-8.md](../research/pages/news-8.md), [../research/pages/news-10.md](../research/pages/news-10.md), [../research/pages/news-16.md](../research/pages/news-16.md), and others.
- These pages function as article pages
- They explain game mechanics, story, gameplay, setup, inventory, or character information

Observed behavior:
- Content rendered as text article, not as interactive UI component system

## 5. Forum functionality
Confirmed by [../research/pages/forum-0.md](../research/pages/forum-0.md):
- Forum topic list is visible
- Public links include login, register, forgot-password actions
- Topic entries show dates and subject titles
- The forum index uses list-style navigation with embedded topic identifiers and pagination-like query parameters

Observed public routes:
- /forum/app/forum-0.html
- /forum/app/forum-1.html
- /forum/app/index.php?for=forum&do=list&uid=...&p=0&sz=15

This confirms forum functionality exists as a public forum system, but the full thread detail flow was not fully enumerated in the public crawl.

## 6. Ranking
Evidence from homepage UI in [../research/pages/home.md](../research/pages/home.md):
- Top Cao Thủ
- Top Phú Hộ
- Top Leo Tháp
- Top Đấu Trường

Important limitation:
- The exact ranking endpoints were not directly exposed in the inspected public HTML or route inventory.
- Therefore, ranking is recognized as a UX element but not as a verified public route with evidence-backed implementation details.

## 7. Search
Not observed in public page inspection.
- No public search box appeared in the inspected home page or forum page.
- No search endpoint was recorded in the route inventory as a verified public route.

Conclusion:
- Search is not confirmed as a public feature in the inspected site surface.

## 8. Pagination
Confirmed by public forum pattern and route inventory:
- Forum index pages are numbered: forum-0, forum-1
- Forum entry links include query parameters like p=0 and sz=15
- This indicates pagination-like behavior exists in forum UI

Not confirmed:
- No complete blog/news archive pagination was directly observed beyond the list structure.

## 9. Other public actions and links
Confirmed by browser checks and route inventory:
- Social links to Facebook and Zalo
- External related-game links
- Login/register/forgot password links in forum pages
- Top button for scroll-to-top interaction
- Static page navigation

Not observed:
- Admin console
- Private dashboard
- Payment flow
- User account management beyond public login/register entry points

## 10. Public API requests
Observed in browser Network captures:
- CSS files from the site itself
- Image assets from site and related services
- Forum CSS assets
- No public JSON API endpoints for content retrieval were confirmed in the inspected pages

Conclusion:
- The site is mainly static/public HTML and image-driven, not a modern JSON-driven public API implementation

## 11. Verified vs unverified features

### Verified features
- Navigation
- News listing
- Event list
- Guide article pages
- Forum index browsing
- Social/external links
- Back-to-top interaction
- Static page links

### Unverified or partially verified features
- Ranking detail page implementation
- Full forum topic detail flow
- Advanced search
- Global archive pagination
- User-authenticated features beyond visible public login entry points

## 12. Reconstruction constraints
The rebuilt implementation must not claim unsupported functions.
- Implement navigation and content list behavior that are directly observed.
- Implement forum list page pattern only as a public index with visible topic entries.
- Treat ranking as a placeholder or mocked section unless a real public route is discovered.
- Do not invent backend endpoints or user account flows without evidence.

## 13. Implemented behavior and limits

- React Router handles `/`, `/trang-chu.html`, the two informational routes,
  all 19 article IDs in the route inventory, and forum pages 0 and 1.
- Homepage article entries link to their corresponding detail routes. The
  shared navigation links to home, character information, downloads, the
  forum, and the evidenced Facebook page. The Zalo destination remains
  unavailable because its exact target was not captured.
- The four ranking controls switch the selected category and state that
  verified public ranking data is unavailable; no scores or player names are
  fabricated.
- Forum index pages show the captured public topic titles and navigate between
  the two surveyed pages. Thread detail pages and later pages are not inferred.
- Sign-in, registration, and password recovery controls are disabled. They do
  not simulate authentication or submit data.
- Search is not added. Download records display captured platform/version
  metadata, but provide no download link because target URLs were not retained.
- Article detail pages render verified title/type/date metadata and a notice
  that authorized full body content must be supplied.
- Back-to-top and responsive layout behavior are implemented locally.
