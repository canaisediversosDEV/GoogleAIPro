import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 900 });
  await page.goto('http://localhost:5173');

  const rects = await page.evaluate(() => {
    const getRect = (selector) => {
      const el = document.querySelector(selector);
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      return {
        selector,
        width: rect.width,
        height: rect.height,
        left: rect.left,
        right: rect.right,
        scrollWidth: el.scrollWidth,
        paddingLeft: style.paddingLeft,
        paddingRight: style.paddingRight,
        marginLeft: style.marginLeft,
        marginRight: style.marginRight
      };
    };
    return [
      getRect('body'),
      getRect('.hero'),
      getRect('.c'),
      getRect('.hero__body'),
      getRect('.hero__h1'),
      getRect('.hero__pills'),
      getRect('.hero__pill:nth-child(2)')
    ];
  });

  console.log(JSON.stringify(rects, null, 2));
  await browser.close();
})();
