// Renderiza og.html (1200×630) em og.jpg com Playwright.
// Uso: node gerar.mjs [qualidade]   (padrão 82; o JPG precisa ficar abaixo de 300 KB)
import { chromium } from '/home/weslleycabral/www/clientes/marcia-liverpool/medicao/node_modules/playwright/index.mjs';
import { statSync, readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const DIR = '/home/weslleycabral/www/clientes/propostas/marcia/og';
const HTML = `${DIR}/og.html`;
const OUT = '/home/weslleycabral/www/clientes/propostas/marcia/og.jpg';
const PREVIEW = `${DIR}/preview-400.jpg`;
const quality = Number(process.argv[2] ?? 82);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(HTML).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(200);
await page.screenshot({ path: OUT, type: 'jpeg', quality, clip: { x: 0, y: 0, width: 1200, height: 630 } });

// Prévia reduzida a 400 px de largura, para conferir legibilidade da miniatura.
const thumb = await browser.newPage({ viewport: { width: 400, height: 210 }, deviceScaleFactor: 1 });
await thumb.setContent(`<body style="margin:0;background:#000"><img src="data:image/jpeg;base64,${readFileSync(OUT).toString('base64')}" width="400" height="210"></body>`);
await thumb.waitForTimeout(100);
await thumb.screenshot({ path: PREVIEW, type: 'jpeg', quality: 90 });

await browser.close();
const kb = statSync(OUT).size / 1024;
console.log(`${OUT}: ${kb.toFixed(1)} KB (qualidade ${quality})`);
console.log(`${PREVIEW}`);
