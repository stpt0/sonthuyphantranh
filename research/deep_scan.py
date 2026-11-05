from pathlib import Path
import json
from urllib.parse import urlparse
from playwright.sync_api import sync_playwright

base = 'https://sonthuyphantranh.com'
urls = [
    ('home', base + '/'),
    ('trang-chu', base + '/trang-chu.html'),
    ('gioi-thieu', base + '/gioi-thieu.html'),
    ('tai-game', base + '/tai-game.html'),
    ('forum-0', base + '/forum/app/forum-0.html'),
    ('forum-1', base + '/forum/app/forum-1.html'),
    ('news-49', base + '/news.php?id=49'),
    ('news-48', base + '/news.php?id=48'),
    ('news-43', base + '/news.php?id=43'),
    ('news-42', base + '/news.php?id=42'),
    ('news-41', base + '/news.php?id=41'),
    ('news-40', base + '/news.php?id=40'),
    ('news-39', base + '/news.php?id=39'),
    ('news-37', base + '/news.php?id=37'),
    ('news-36', base + '/news.php?id=36'),
    ('news-35', base + '/news.php?id=35'),
    ('news-34', base + '/news.php?id=34'),
    ('news-33', base + '/news.php?id=33'),
    ('news-10', base + '/news.php?id=10'),
    ('news-8', base + '/news.php?id=8'),
    ('news-20', base + '/news.php?id=20'),
    ('news-18', base + '/news.php?id=18'),
    ('news-16', base + '/news.php?id=16'),
    ('news-17', base + '/news.php?id=17'),
    ('news-27', base + '/news.php?id=27'),
    ('robots', base + '/robots.txt'),
    ('sitemap', base + '/sitemap.xml'),
]

root = Path(__file__).resolve().parent
ss_dir = root / 'screenshots'
page_dir = root / 'pages'

summary = []
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    for slug, url in urls:
        page = browser.new_page(viewport={'width': 1280, 'height': 900}, device_scale_factor=1)
        requests_seen = []
        page.on('request', lambda req, arr=requests_seen: arr.append(req.url) if not req.url.startswith('data:') else None)
        try:
            response = page.goto(url, wait_until='domcontentloaded', timeout=60000)
            page.wait_for_timeout(2000)
        except Exception as exc:
            entry = {
                'slug': slug,
                'url': url,
                'status': 'error',
                'title': 'N/A',
                'page_type': 'unknown',
                'viewport': {'width': 1280, 'height': 900},
                'internal_links': [],
                'images': [],
                'network_requests': [],
                'font_family': 'unknown',
                'background_color': 'unknown',
                'text_color': 'unknown',
                'survey_state': 'error',
                'notes': str(exc),
            }
            summary.append(entry)
            md = f"# {slug}\n\n- URL: {url}\n- Status: error\n- Survey state: page not accessible\n- Error: {exc}\n"
            (page_dir / f'{slug}.md').write_text(md, encoding='utf-8')
            continue

        status = response.status if response else 'unknown'
        title = page.title()
        full_png = ss_dir / f'{slug}-full.png'
        header_png = ss_dir / f'{slug}-header.png'
        page.screenshot(path=str(full_png), full_page=True)
        page.set_viewport_size({'width': 1280, 'height': 720})
        page.screenshot(path=str(header_png), full_page=False)

        metrics = page.evaluate('''() => {
          const body = document.body || document.documentElement;
          const cs = getComputedStyle(body);
          const headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].slice(0, 20).map(el => ({tag: el.tagName, text: (el.textContent || '').trim()}));
          const links = [...document.querySelectorAll('a[href]')].map(el => ({text: (el.textContent || '').trim(), href: el.href}));
          const imgs = [...document.querySelectorAll('img[src]')].map(el => ({src: el.src, alt: el.alt || '', title: el.title || ''}));
          const buttons = [...document.querySelectorAll('button,a[href],input[type="button"],input[type="submit"]')].slice(0, 30).map(el => ({tag: el.tagName, text: (el.innerText || el.value || el.getAttribute('aria-label') || '').trim()}));
          return {
            viewport: {w: window.innerWidth, h: window.innerHeight},
            fontFamily: cs.fontFamily,
            bg: cs.backgroundColor,
            color: cs.color,
            headings,
            links: links.slice(0, 50),
            images: imgs.slice(0, 50),
            buttons: buttons.slice(0, 30),
            bodyText: (document.body.innerText || '').trim().slice(0, 1000)
          };
        }''')

        internal_links = []
        for link in metrics['links']:
            href = link['href']
            if not href:
                continue
            if href.startswith(('javascript:', 'mailto:', 'tel:')) or href.startswith('#'):
                continue
            if href.startswith('/') or href.startswith(base):
                internal_links.append(href)
        internal_links = list(dict.fromkeys(internal_links))
        network_urls = list(dict.fromkeys(req for req in requests_seen if not req.startswith('data:')))

        if url.endswith('/') or url.endswith('/trang-chu.html'):
            page_type = 'home'
        elif '/news.php' in url:
            if any(k in title.upper() for k in ['GIÁNG SINH', 'HALLOWEEN', 'SINH NHẬT', 'SUMMER', 'SỰ KIỆN', 'KHAI MỞ', 'THIẾU NHI']):
                page_type = 'event-news'
            elif any(k in title.upper() for k in ['HƯỚNG DẪN', 'NHÂN VẬT', 'HIỆU ỨNG', 'ĐẢO', 'THỦY', 'NỖI']):
                page_type = 'guide'
            else:
                page_type = 'news'
        elif '/forum/' in url:
            page_type = 'forum'
        elif '/gioi-thieu.html' in url or '/tai-game.html' in url:
            page_type = 'informational'
        elif 'robots.txt' in url:
            page_type = 'robots'
        elif 'sitemap.xml' in url:
            page_type = 'sitemap'
        else:
            page_type = 'unknown'

        entry = {
            'slug': slug,
            'url': url,
            'status': status,
            'title': title,
            'page_type': page_type,
            'viewport': metrics['viewport'],
            'internal_links': internal_links,
            'images': metrics['images'],
            'buttons': metrics['buttons'],
            'network_requests': network_urls[:50],
            'font_family': metrics['fontFamily'],
            'background_color': metrics['bg'],
            'text_color': metrics['color'],
            'body_excerpt': metrics['bodyText'][:500],
            'headings': metrics['headings'],
            'survey_state': 'verified' if status == 200 else 'error',
            'notes': 'Public route loaded in browser and inspected.' if status == 200 else 'Page not accessible or returned non-200 status.',
        }
        summary.append(entry)
        md = f"""# {slug}

- URL: {url}
- Page type: {page_type}
- Status: {status}
- Title: {title}
- Viewport: {metrics['viewport']}
- Font family: {metrics['fontFamily']}
- Background color: {metrics['bg']}
- Text color: {metrics['color']}
- Survey state: {entry['survey_state']}

## Screenshots
- Full page: `../screenshots/{slug}-full.png`
- Header section: `../screenshots/{slug}-header.png`

## HTML structure
- Headings: {json.dumps(metrics['headings'][:10], ensure_ascii=False)}
- Buttons/prominent links: {json.dumps(metrics['buttons'][:10], ensure_ascii=False)}
- Body preview: {metrics['bodyText'][:500]}

## Internal links
{json.dumps(internal_links[:30], ensure_ascii=False, indent=2)}

## Images
{json.dumps(metrics['images'][:20], ensure_ascii=False, indent=2)}

## Public network requests
{json.dumps(network_urls[:30], ensure_ascii=False, indent=2)}

## Assessment
This page was inspected in browser and classified as a verified public page. The findings were captured from live DOM, color/typography signals, and asset references.
"""
        (page_dir / f'{slug}.md').write_text(md, encoding='utf-8')

    browser.close()

summary_md = '# Website deep analysis summary\n\n'
for item in summary:
    summary_md += f"- [{item['slug']}]({item['url']}): {item['page_type']} | status={item['status']} | survey={item['survey_state']}\n"
summary_md += '\n## Counts\n\n'
summary_md += f"- Total processed: {len(summary)}\n"
summary_md += f"- Verified public pages: {sum(1 for x in summary if x['survey_state']=='verified')}\n"
summary_md += f"- Errors / inaccessible: {sum(1 for x in summary if x['survey_state']!='verified')}\n"
summary_md += f"- Home pages: {sum(1 for x in summary if x['page_type']=='home')}\n"
summary_md += f"- News/event pages: {sum(1 for x in summary if x['page_type'] in ('news','event-news'))}\n"
summary_md += f"- Guide pages: {sum(1 for x in summary if x['page_type']=='guide')}\n"
summary_md += f"- Forum pages: {sum(1 for x in summary if x['page_type']=='forum')}\n"
summary_md += f"- Informational pages: {sum(1 for x in summary if x['page_type']=='informational')}\n"
(page_dir / 'SUMMARY.md').write_text(summary_md, encoding='utf-8')

print('Processed', len(summary), 'pages.')
print('Reports saved to', page_dir)
print('Screenshots saved to', ss_dir)
