/*
 * One-off: turn raw venue photography (source-photos/, Kamer *) into
 * web-sized JPEGs under public/images/gallery/ for the crossfade galleries
 * (components/gallery.tsx, wired via lib/images.ts).
 *
 * Re-run any time the curation changes:  node scripts/process-photos.mjs
 * Outputs are committed; sharp is already a transitive dep of next.
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "images", "gallery");

// [ source (relative to repo root), output slug, max width, max height ]
// Only the frames actually referenced from lib/images.ts — one animated slot
// per subject (foodSet, storySet, roomsSet; heroSet reuses existing images).
const MANIFEST = [
  // --- food close-ups (foodSet) ---
  ["source-photos/DSC00144-1024x684.jpg", "food-ribs", 1600, 1200],
  ["source-photos/DSC00131-scaled.jpg", "food-burger", 1600, 1200],
  ["source-photos/DSC09780-1024x684.jpg", "food-toastie", 1600, 1200],
  ["source-photos/DSC09983-1024x684.jpg", "food-rice", 1600, 1200],
  // --- people at the table (storySet) ---
  ["source-photos/DSC09891-Edit-1024x684.jpg", "people-hands", 1600, 1200],
  ["source-photos/DSC00281-1024x684.jpg", "people-cheers", 1600, 1200],
  ["source-photos/DSC09866-1024x684.jpg", "people-lunch", 1600, 1200],
  // --- rooms (roomsSet; one per Kamer; ZUS&ZO logo already burned in, landscape) ---
  ["Kamer Drie/4-2.png", "room-drie", 1600, 1200],
  ["Kamer Vier/6.png", "room-vier", 1600, 1200],
  ["Kamer Vijf/24.png", "room-vijf", 1600, 1200],
  ["Kamer Zes/2.png", "room-zes", 1600, 1200],
];

await mkdir(outDir, { recursive: true });

const results = [];
for (const [src, slug, w, h] of MANIFEST) {
  const inPath = path.join(root, src);
  const outPath = path.join(outDir, `${slug}.jpg`);
  const meta = await sharp(inPath)
    .rotate() // honour EXIF orientation before we strip metadata
    .resize({ width: w, height: h, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true, chromaSubsampling: "4:2:0" })
    .toFile(outPath);
  results.push({ slug, width: meta.width, height: meta.height, kb: Math.round(meta.size / 1024) });
}

console.table(results);
console.log(`\n${results.length} images written to public/images/gallery/`);
