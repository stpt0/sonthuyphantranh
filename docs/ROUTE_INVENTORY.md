# Phase 1 — Route Inventory

## Scope and constraints
- Source domain: https://sonthuyphantranh.com/
- Scope: public routes only; no admin, no private user data, no payment endpoints.
- Method: public HTML inspection, robots.txt and sitemap checks, plus direct probe of known public pages.
- Result: inventory is a public-discovery subset, not a guarantee of a complete private crawl.

## Executive summary
- Total public URLs identified from homepage and known public routes: 27
- Home page: reachable (HTTP 200)
- robots.txt: reachable (HTTP 200)
- sitemap.xml: not present (HTTP 404)
- Public news pages: reachable (HTTP 200)
- Forum pages: reachable (HTTP 200)
- No evidence of login-required routes in the public inventory
- No admin or private management endpoints were discovered in this public crawl

## 1) Route inventory

| URL | Page title | Page type | HTTP status | Related links | Survey status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| https://sonthuyphantranh.com/ | Sơn Thủy Phân Tranh | Home | 200 | /trang-chu.html, /gioi-thieu.html, /tai-game.html, /forum/app/forum-0.html, /news.php?id=49, /news.php?id=48, /news.php?id=43, /news.php?id=42, /news.php?id=41, /news.php?id=40, /news.php?id=39, /news.php?id=37, /news.php?id=36, /news.php?id=35, /news.php?id=34, /news.php?id=33, /news.php?id=10, /news.php?id=8, /news.php?id=20, /news.php?id=18, /news.php?id=16, /news.php?id=17, /news.php?id=27 | Verified | Homepage exposes latest event/news block and navigation. |
| https://sonthuyphantranh.com/trang-chu.html | Sơn Thủy Phân Tranh | Home/landing | 200 | Same as homepage | Verified | Likely alias of homepage. |
| https://sonthuyphantranh.com/gioi-thieu.html | N/A in public probe | Informational page | 200 | Likely main game intro | Verified | Static info page, no sign of login requirement. |
| https://sonthuyphantranh.com/tai-game.html | N/A in public probe | Download/game entry | 200 | Likely game access/download links | Verified | Public route, likely a static landing page. |
| https://sonthuyphantranh.com/forum/app/forum-0.html | N/A in public probe | Forum index | 200 | forum category links / topic links / pagination | Verified | WAP-style XHTML forum index. |
| https://sonthuyphantranh.com/forum/app/forum-1.html | N/A in public probe | Forum index / pagination | 200 | forum topic list / pagination | Verified | Likely next page in same forum series. |
| https://sonthuyphantranh.com/news.php?id=49 | Sự kiện Giáng Sinh 2025. | News/event detail | 200 | Event summary and related news links | Verified | Event/news article; likely public event post. |
| https://sonthuyphantranh.com/news.php?id=48 | HALLOWEEN 2025 | News/event detail | 200 | Related event list | Verified | Event/news article. |
| https://sonthuyphantranh.com/news.php?id=43 | MỪNG SINH NHẬT LẦN 1 | News/event detail | 200 | Related event list | Verified | Event/news article. |
| https://sonthuyphantranh.com/news.php?id=42 | Sự Kiện Sôi Nổi Vui Hè Lần 2 | News/event detail | 200 | Related event list | Verified | Event/news article. |
| https://sonthuyphantranh.com/news.php?id=41 | SƠN THUỶ PHÂN TRANH - QUỐC TẾ THIẾU NHI 1/6 | News/event detail | 200 | Related event list | Verified | Event/news article. |
| https://sonthuyphantranh.com/news.php?id=40 | NẠP TÍCH ĐIỂM ĐỔI QUÀ KHỦNG | News/event detail | 200 | Related event list | Verified | Event/news article. |
| https://sonthuyphantranh.com/news.php?id=39 | SƠN THUỶ PHÂN TRANH - GIỖ TỔ HÙNG VƯƠNG | News/event detail | 200 | Related event list | Verified | Event/news article. |
| https://sonthuyphantranh.com/news.php?id=37 | HALLOWEEN SƠN THUỶ PHÂN TRANH 2024 | News/event detail | 200 | Related event list | Verified | Event/news article. |
| https://sonthuyphantranh.com/news.php?id=36 | SƠN THỦY PHÂN TRANH - PHÁ CỔ TRUNG THU 2024 | News/event detail | 200 | Related event list | Verified | Event/news article. |
| https://sonthuyphantranh.com/news.php?id=35 | GÓC GIẢI ĐÁP THẮC MẮC, THẢO LUẬN | News/article | 200 | Related news list | Verified | Public discussion/article. |
| https://sonthuyphantranh.com/news.php?id=34 | SỰ KIỆN ĐUA TOP SỨC MẠNH | News/event detail | 200 | Related news list | Verified | Event/news article. |
| https://sonthuyphantranh.com/news.php?id=33 | CHÍNH THỨC KHAI MỞ SERVER | News/announcement | 200 | Related news list | Verified | Public launch/news item. |
| https://sonthuyphantranh.com/news.php?id=10 | Giới thiệu nhân vật | Guide/article | 200 | Related news list | Verified | Character intro article. |
| https://sonthuyphantranh.com/news.php?id=8 | Hướng dẫn Tân Thủ | Guide/article | 200 | Related article links | Verified | Beginner guide. |
| https://sonthuyphantranh.com/news.php?id=20 | Tác dụng của các hiệu ứng | Guide/article | 200 | Related article links | Verified | Gameplay mechanic guide. |
| https://sonthuyphantranh.com/news.php?id=18 | Hướng dẫn thiết lập cấu hình thấp và di chuyển analog | Guide/article | 200 | Related article links | Verified | System/performance guide. |
| https://sonthuyphantranh.com/news.php?id=16 | Sơn Thủy Phân Tranh | Story/guide | 200 | Related article links | Verified | Narrative/story overview. |
| https://sonthuyphantranh.com/news.php?id=17 | Hướng dẫn mở rộng rương, hành trang | Guide/article | 200 | Related article links | Verified | Inventory/storage guide. |
| https://sonthuyphantranh.com/news.php?id=27 | Hướng dẫn Đảo Dưa Hấu | Guide/article | 200 | Related article links | Verified | Activity or world guide. |
| https://sonthuyphantranh.com/robots.txt | N/A | Robots file | 200 | N/A | Verified | Public robots.txt is present and allows public crawl signals. |
| https://sonthuyphantranh.com/sitemap.xml | N/A | Sitemap | 404 | N/A | Not found | No public sitemap discovered at root. |
| https://sonthuyphantranh.com/dist/css/bootstrap.min.css | N/A | Static style asset | 200 | Home page | Verified | CSS dependency used by the site. |
| https://sonthuyphantranh.com/dist/font-awesome/css/font-awesome.min.css | N/A | Static style asset | 200 | Home page | Verified | Font icon asset. |
| https://sonthuyphantranh.com/dist/blog.css?v=12 | N/A | Layout stylesheet | 200 | Home page | Verified | Site-specific CSS used by the public interface. |

## 2) Detected public categories

### A. Home
- https://sonthuyphantranh.com/
- https://sonthuyphantranh.com/trang-chu.html

### B. News and events
- https://sonthuyphantranh.com/news.php?id=49
- https://sonthuyphantranh.com/news.php?id=48
- https://sonthuyphantranh.com/news.php?id=43
- https://sonthuyphantranh.com/news.php?id=42
- https://sonthuyphantranh.com/news.php?id=41
- https://sonthuyphantranh.com/news.php?id=40
- https://sonthuyphantranh.com/news.php?id=39
- https://sonthuyphantranh.com/news.php?id=37
- https://sonthuyphantranh.com/news.php?id=36
- https://sonthuyphantranh.com/news.php?id=35
- https://sonthuyphantranh.com/news.php?id=34
- https://sonthuyphantranh.com/news.php?id=33
- Additional article/event pages appear on the homepage and are clearly in the same pattern.

### C. Game guides
- https://sonthuyphantranh.com/news.php?id=10
- https://sonthuyphantranh.com/news.php?id=8
- https://sonthuyphantranh.com/news.php?id=20
- https://sonthuyphantranh.com/news.php?id=18
- https://sonthuyphantranh.com/news.php?id=16
- https://sonthuyphantranh.com/news.php?id=17
- https://sonthuyphantranh.com/news.php?id=27

### D. Community / forum
- https://sonthuyphantranh.com/forum/app/forum-0.html
- https://sonthuyphantranh.com/forum/app/forum-1.html
- Forum content is present and accessible in public HTML, indicating a forum-driven community section.

### E. Ranking
- Public ranking links are present in the homepage UI, but the exact ranking endpoints are not directly exposed in the discovered public HTML inventory.
- Evidence from page UI: Top Cao Thủ, Top Phú Hộ, Top Leo Tháp, Top Đấu Trường.
- Further route enumeration would require additional forum/ranking-specific browsing or public source discovery. 

### F. Other
- https://sonthuyphantranh.com/gioi-thieu.html
- https://sonthuyphantranh.com/tai-game.html

## 3) Route discovery notes

### Public navigation patterns observed
- Homepage uses a standard static HTML structure with a news/event list.
- News pages follow `news.php?id=N`.
- Forum pages follow `/forum/app/forum-N.html`.
- Static pages such as `gioi-thieu.html` and `tai-game.html` appear as simple public content routes.
- There is no public sitemap at `/sitemap.xml`.

### Known limitations
- This is not a full deep crawl of every forum page or every possible category page.
- Some ranking pages may be loaded via JS or a different public path not surfaced by the homepage HTML.
- No login-related pages or admin endpoints were observed in the public inventory.

## 4) Blocked / missing routes

| URL | Status | Result |
| --- | --- | --- |
| https://sonthuyphantranh.com/sitemap.xml | 404 | No sitemap discovered |
| Any admin guard path not seen in public HTML | Not observed | Not detected in public inventory |

## 5) Implementation readiness for next phase

The website has a clear public public-facing pattern for:
- home page
- static informational pages
- event/news detail pages via query-string pattern
- forum index pages via folder path pattern
- likely ranking sections exposed by UI but not fully enumerated from public HTML alone

This is sufficient to propose a reconstruction architecture in the next phase once you confirm to proceed.
