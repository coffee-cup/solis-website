import sharp from 'sharp';
import { readFile } from 'node:fs/promises';

const icon = new URL('../src/assets/app-icon.png', import.meta.url);
const publicFile = (name) => new URL(`../public/${name}`, import.meta.url).pathname;
for (const size of [16, 32, 180]) {
  const name = size === 180 ? 'apple-touch-icon.png' : `favicon-${size}x${size}.png`;
  await sharp(icon.pathname).resize(size, size).png().toFile(publicFile(name));
}
// ICO supports PNG-compressed image entries.
const favicon = await sharp(icon.pathname).resize(32, 32).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header[6] = 32;
header[7] = 32;
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(favicon.length, 14);
header.writeUInt32LE(22, 18);
const { writeFile } = await import('node:fs/promises');
await writeFile(publicFile('favicon.ico'), Buffer.concat([header, favicon]));
const screen = await sharp(new URL('../src/assets/screenshots/01-timeline.png', import.meta.url).pathname).resize(240).png().toBuffer();
const iconData = (await readFile(icon)).toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630">
<defs><linearGradient id="sky" x2="1" y2="0"><stop stop-color="#4555a6"/><stop offset=".55" stop-color="#397dbb"/><stop offset="1" stop-color="#41cccb"/></linearGradient><clipPath id="screen"><rect x="842" y="60" width="240" height="521" rx="32"/></clipPath><clipPath id="icon"><rect x="83" y="81" width="43" height="43" rx="10"/></clipPath></defs>
<rect width="1200" height="630" fill="url(#sky)"/>
<image xlink:href="data:image/png;base64,${iconData}" x="83" y="81" width="43" height="43" clip-path="url(#icon)"/>
<g font-family="Arial, sans-serif" fill="white"><text x="140" y="113" font-size="32">Solis</text><text x="80" y="310" font-size="100" font-weight="300" letter-spacing="-3">Solis</text><text x="84" y="382" font-size="28">Sunrise, sunset, and twilight times.</text><text x="84" y="432" font-size="23">For iPhone.</text></g>
<rect x="833" y="51" width="258" height="539" rx="42" fill="#161e28" stroke="#7c919d" stroke-width="2"/>
<image xlink:href="data:image/png;base64,${screen.toString('base64')}" x="842" y="60" width="240" height="521" clip-path="url(#screen)"/>
<rect x="924" y="70" width="77" height="21" rx="12" fill="#08090c"/>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile(publicFile('solis-og.png'));
console.log('Generated favicons, touch icon, and social preview.');
