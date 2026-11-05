# Asset Inventory

## Evidence base
Based on direct browser asset inspection from:
- [../research/pages/home.md](../research/pages/home.md)
- [../research/pages/forum-0.md](../research/pages/forum-0.md)
- [../research/pages/news-49.md](../research/pages/news-49.md)
- [../docs/ROUTE_INVENTORY.md](../docs/ROUTE_INVENTORY.md)

## 1. Images

### Homepage image inventory
Confirmed from [../research/pages/home.md](../research/pages/home.md):
- https://ngocrongonline.com/18.png
- https://sonthuyphantranh.com/images/cover_he.png
- https://avatarbum.teamobi.com/img/bum/download/uptop.gif
- https://sonthuyphantranh.com/images/btn/11_trangchu.png
- https://sonthuyphantranh.com/images/btn/11_nhanvat.png
- https://sonthuyphantranh.com/images/btn/11_taigame.png
- https://sonthuyphantranh.com/images/btn/11_Diendan.png
- https://sonthuyphantranh.com/images/btn/11_Fanpagr.png
- https://sonthuyphantranh.com/images/btn/12_zaloo.png
- https://my.teamobi.com/images/new.gif
- A set of article thumbnails under https://sonthuyphantranh.com/img/...

### Forum image inventory
Confirmed from [../research/pages/forum-0.md](../research/pages/forum-0.md):
- avatar assets under https://sonthuyphantranh.com/service/avatar/...
- forum sign-in related buttons:
  - https://sonthuyphantranh.com/images/5_dangnhap.png
  - https://sonthuyphantranh.com/images/5_dangky.png
  - https://sonthuyphantranh.com/images/5_quenmatkhau.png
- pay button asset from pay.teamobi.com

## 2. Banner assets
Confirmed in homepage and route inventory:
- https://sonthuyphantranh.com/images/cover_he.png
- Additional banner and hero visuals are referenced in the page source and asset directory patterns

Observed use:
- Top page banner / site header
- Game portal branding area

## 3. Icon assets
Confirmed by home page and forum page:
- Button icons under /images/btn/
- Top button icon from avatarbum.teamobi.com
- A small health warning icon from ngocrongonline.com
- Forum login/register button icons

No evidence of a custom icon font set was found in the public inspection. Instead, the site relies on static image assets for menu and action buttons.

## 4. Fonts
Confirmed by direct browser capture in [../research/pages/home.md](../research/pages/home.md):
- Font family: Arial

Additional CSS includes:
- Bootstrap CSS dependency
- Font Awesome CSS dependency

The site uses external CSS and icon library assets, but the public page itself reports Arial as the primary font-family.

## 5. Backgrounds
Confirmed by browser metrics and CSS observations:
- Body background: rgb(151, 102, 69)
- Warm brown/earth tone page base
- Inner content panels use lighter beige-toned backgrounds
- Footer and contrast blocks use darker backgrounds for separation

## 6. CSS assets
Confirmed by route inventory and network capture:
- https://sonthuyphantranh.com/dist/css/bootstrap.min.css
- https://sonthuyphantranh.com/dist/font-awesome/css/font-awesome.min.css
- https://sonthuyphantranh.com/dist/blog.css?v=12
- https://sonthuyphantranh.com/forum/app/view/css/StyleSheet.css?v4
- https://sonthuyphantranh.com/forum/app/view/css/template.css

## 7. Asset classification
### Public site assets
- Hero banner
- Button sprites
- Event thumbnails
- Footer graphics
- Avatar images

### Third-party assets
- ngocrongonline.com telemetry/warning image
- my.teamobi.com new badges
- avatarbum.teamobi.com top button asset
- pay.teamobi.com button asset

## 8. Reconstruction note
Because the site uses a large number of legacy static image assets and external service image links, a reconstruction should:
- store a local equivalent library for critical images
- avoid claiming exact copyrighted assets without ownership verification
- use neutral placeholders or local copies only when permitted
- keep third-party image references clearly identified as external references in the rebuild

## 9. Assets used by the independent reconstruction

- No source-site or third-party image, banner, avatar, icon, or font file is
  copied or hotlinked by the app.
- The header scene, article thumbnails, platform marks, and footer treatment are
  generated from original CSS shapes and text labels. These are design
  placeholders, not claims about the source artwork.
- Arial is used as the system font, matching the inspected font-family signal.
- The source asset URLs above are an evidence inventory only; availability in
  the browser does not establish reuse rights.
