// Renders scripts/og-default.svg to public/og-default.png (1200×630).
// Run with: pnpm og:build
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const here = dirname(fileURLToPath(import.meta.url));
const svg = await readFile(join(here, 'og-default.svg'));
const png = await sharp(svg, { density: 144 }).resize(1200, 630).png().toBuffer();
await writeFile(join(here, '..', 'public', 'og-default.png'), png);
console.log('Wrote public/og-default.png');
