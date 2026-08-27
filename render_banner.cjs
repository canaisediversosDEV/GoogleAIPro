const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function render() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 675,
    deviceScaleFactor: 2 // 2400x1350 ultra HD
  });

  const htmlPath = path.join(__dirname, 'public', 'banner_2990.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  // Esperar carregamento completo das fontes
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 1200));

  const bannerElement = await page.$('#banner');
  const outputPath = path.join(__dirname, 'public', 'google_ai_pro_3990.png');
  const artifactPath = 'C:\\Users\\RRGsm.com\\.gemini\\antigravity-ide\\brain\\73059b63-3e55-44d6-a7af-7301d46f49d2\\google_ai_pro_3990.png';

  await bannerElement.screenshot({
    path: outputPath,
    type: 'png'
  });

  fs.copyFileSync(outputPath, artifactPath);

  console.log('Banner gerado com sucesso em:', outputPath);
  await browser.close();
}

render().catch(err => {
  console.error(err);
  process.exit(1);
});
