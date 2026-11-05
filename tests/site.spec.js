import { expect, test } from '@playwright/test';

const routes = [
  ['/', 'Tin tức & sự kiện'],
  ['/trang-chu.html', 'Tin tức & sự kiện'],
  ['/gioi-thieu.html', 'Nhân vật'],
  ['/tai-game.html', 'Phiên bản được ghi nhận'],
  ['/forum/app/forum-0.html', 'Chủ đề gần đây'],
  ['/forum/app/forum-1.html', 'Chủ đề gần đây'],
  ['/news.php?id=49', 'Sự kiện Giáng Sinh 2025.'],
  ['/news.php?id=48', 'HALLOWEEN 2025'],
  ['/news.php?id=43', 'MỪNG SINH NHẬT LẦN 1'],
  ['/news.php?id=42', 'Sự Kiện Sôi Nổi Vui Hè Lần 2'],
  ['/news.php?id=41', 'SƠN THUỶ PHÂN TRANH - QUỐC TẾ THIẾU NHI 1/6'],
  ['/news.php?id=40', 'NẠP TÍCH ĐIỂM ĐỔI QUÀ KHỦNG'],
  ['/news.php?id=39', 'SƠN THUỶ PHÂN TRANH - GIỖ TỔ HÙNG VƯƠNG'],
  ['/news.php?id=37', 'HALLOWEEN SƠN THUỶ PHÂN TRANH 2024'],
  ['/news.php?id=36', 'SƠN THỦY PHÂN TRANH - PHÁ CỔ TRUNG THU 2024'],
  ['/news.php?id=35', 'GÓC GIẢI ĐÁP THẮC MẮC, THẢO LUẬN'],
  ['/news.php?id=34', 'SỰ KIỆN ĐUA TOP SỨC MẠNH'],
  ['/news.php?id=33', 'CHÍNH THỨC KHAI MỞ SERVER'],
  ['/news.php?id=10', 'Giới thiệu nhân vật'],
  ['/news.php?id=8', 'Hướng dẫn Tân Thủ'],
  ['/news.php?id=20', 'Tác dụng của các hiệu ứng'],
  ['/news.php?id=18', 'Hướng dẫn thiết lập cấu hình thấp và di chuyển analog'],
  ['/news.php?id=16', 'Sơn Thủy Phân Tranh'],
  ['/news.php?id=17', 'Hướng dẫn mở rộng rương, hành trang'],
  ['/news.php?id=27', 'Hướng dẫn Đảo Dưa Hấu'],
];

for (const [route, expectedText] of routes) {
  test(`renders ${route}`, async ({ page }) => {
    const pageErrors = [];
    const consoleErrors = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });

    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.getByText(expectedText, { exact: false }).first()).toBeVisible();
    await expect(page.locator('header.site-header')).toBeVisible();
    await expect(page.locator('footer.site-footer')).toBeVisible();
    const brokenImages = await page.locator('img').evaluateAll((images) =>
      images.filter((image) => !image.complete || image.naturalWidth === 0).length,
    );
    expect(brokenImages).toBe(0);
    expect(pageErrors).toEqual([]);
    expect(consoleErrors).toEqual([]);
  });
}

test('homepage internal links point to surveyed routes', async ({ page }) => {
  await page.goto('/');
  const internalHrefs = await page.locator('a[href^="/"]').evaluateAll((links) =>
    links.map((link) => link.getAttribute('href')),
  );
  expect(internalHrefs.length).toBeGreaterThan(20);
  for (const href of internalHrefs) {
    expect(
      href === '/' ||
      href === '/gioi-thieu.html' ||
      href === '/tai-game.html' ||
      /^\/news\.php\?id=\d+$/.test(href) ||
      /^\/forum\/app\/forum-[01]\.html$/.test(href),
    ).toBe(true);
  }
});

test('robots.txt is served as a public static resource', async ({ request }) => {
  const response = await request.get('/robots.txt');
  expect(response.status()).toBe(200);
  expect(await response.text()).toContain('User-agent: *');
});

test('primary navigation opens the corresponding page groups', async ({ page }) => {
  await page.goto('/');
  const nav = page.getByRole('navigation', { name: 'Điều hướng chính' });
  await nav.getByRole('link', { name: 'Nhân vật', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Nhân vật' })).toBeVisible();
  await nav.getByRole('link', { name: 'Tải game', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Phiên bản được ghi nhận' })).toBeVisible();
  await nav.getByRole('link', { name: 'Diễn đàn', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Chủ đề gần đây' })).toBeVisible();
});

test('home ranking controls show only the selected unverified category', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Top Đấu Trường' }).click();
  await expect(page.getByText(/Top Đấu Trường: chưa có dữ liệu/)).toBeVisible();
});

test('forum pagination navigates between surveyed pages', async ({ page }) => {
  await page.goto('/forum/app/forum-0.html');
  await page.getByRole('link', { name: '2' }).click();
  await expect(page).toHaveURL(/forum-1\.html$/);
  await expect(page.getByText('Trang 2')).toBeVisible();
});

test('page groups remain usable at mobile widths', async ({ page }) => {
  for (const width of [375, 320]) {
    await page.setViewportSize({ width, height: 812 });
    for (const [route, heading] of [
      ['/', 'Tin tức & sự kiện'],
      ['/news.php?id=49', 'Sự kiện Giáng Sinh 2025.'],
      ['/gioi-thieu.html', 'Nhân vật'],
      ['/tai-game.html', 'Phiên bản được ghi nhận'],
      ['/forum/app/forum-0.html', 'Chủ đề gần đây'],
    ]) {
      await page.goto(route);
      await expect(page.getByRole('heading', { name: heading })).toBeVisible();
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      expect(overflow, `${route} overflows at ${width}px`).toBe(false);
    }
  }
});
