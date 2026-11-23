import puppeteer from 'puppeteer';
import fs from 'fs';

const BASE = 'http://localhost:3001';
const OUT = './bvi-screenshots';
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function shot(name) {
    await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: false });
    console.log(`✓ ${name}.png`);
}

async function enableBVI(theme) {
    // Click bvi-open button to toggle panel
    await page.evaluate(() => {
        const btn = document.querySelector('.bvi-open');
        if (btn) btn.click();
    });
    await sleep(500);

    if (theme) {
        // Click the theme button (white/black/blue/brown/green)
        await page.evaluate((t) => {
            const btns = document.querySelectorAll('.bvi-panel button, .bvi-panel [data-bvi-theme]');
            console.log('buttons found:', btns.length);
            // Try to find theme buttons
            const all = document.querySelectorAll('button');
            all.forEach(b => {
                if (b.textContent.trim().toLowerCase().includes(t) ||
                    b.getAttribute('data-value') === t ||
                    b.className.includes(t)) {
                    b.click();
                }
            });
        }, theme);
        await sleep(500);
    }
}

async function activateBVIDirectly(theme) {
    // Set BVI data attributes directly on body for faster testing
    await page.evaluate((t) => {
        const body = document.querySelector('.bvi-body') || document.body;
        body.setAttribute('data-bvi-theme', t);
        body.setAttribute('data-bvi-active', 'true');
    }, theme);
    await sleep(300);
}

// 1. Main page - no BVI
await page.goto(BASE, { waitUntil: 'networkidle2', timeout: 30000 });
await sleep(1000);
await shot('01_main_no-bvi');

// 2. Open BVI panel to see translations
await enableBVI(null);
await shot('02_main_bvi-panel-open');

// 3. White theme
await activateBVIDirectly('white');
await shot('03_main_bvi-white');

// Scroll down to see more content
await page.evaluate(() => window.scrollTo(0, 500));
await sleep(300);
await shot('04_main_bvi-white-scrolled');

await page.evaluate(() => window.scrollTo(0, 1200));
await sleep(300);
await shot('05_main_bvi-white-scrolled2');

// 4. Black theme
await activateBVIDirectly('black');
await page.evaluate(() => window.scrollTo(0, 0));
await sleep(300);
await shot('06_main_bvi-black');

// 5. Blue theme
await activateBVIDirectly('blue');
await page.evaluate(() => window.scrollTo(0, 0));
await sleep(300);
await shot('07_main_bvi-blue');

// 6. Test navbar with BVI - open fullscreen menu
await activateBVIDirectly('white');
await page.evaluate(() => window.scrollTo(0, 0));
await sleep(300);
// Find and click hamburger
await page.evaluate(() => {
    const hamburger = document.querySelector('.hamburgerMenu');
    if (hamburger) hamburger.click();
});
await sleep(500);
await shot('08_navbar-menu_bvi-white');

// Close menu
await page.evaluate(() => {
    const close = document.querySelector('.close-btn');
    if (close) close.click();
    const menu = document.querySelector('.fullscreen-menu');
    if (menu) menu.classList.remove('show');
});
await sleep(300);

// 7. Partners page
await page.goto(`${BASE}/partners`, { waitUntil: 'networkidle2', timeout: 20000 }).catch(() => {});
await activateBVIDirectly('white');
await sleep(300);
await shot('09_partners_bvi-white');

// 8. Contacts page
await page.goto(`${BASE}/Contacts`, { waitUntil: 'networkidle2', timeout: 20000 }).catch(() => {});
await activateBVIDirectly('white');
await sleep(500);
await shot('10_contacts_bvi-white');

await page.evaluate(() => window.scrollTo(0, 500));
await sleep(300);
await shot('11_contacts_bvi-white-scrolled');

// 9. College history
await page.goto(`${BASE}/collegeHistory`, { waitUntil: 'networkidle2', timeout: 20000 }).catch(() => {});
await activateBVIDirectly('white');
await sleep(500);
await shot('12_collegeHistory_bvi-white');

// 10. Main page reviews section
await page.goto(BASE, { waitUntil: 'networkidle2', timeout: 20000 });
await activateBVIDirectly('white');
await page.evaluate(() => window.scrollTo(0, 3000));
await sleep(500);
await shot('13_main_reviews_bvi-white');

await page.evaluate(() => window.scrollTo(0, 4500));
await sleep(500);
await shot('14_main_anniversary_bvi-white');

await browser.close();
console.log('\nAll screenshots saved to', OUT);
