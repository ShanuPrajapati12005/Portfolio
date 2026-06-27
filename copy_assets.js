import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.join(__dirname, '..', 'Portfolio2', 'src', 'assets');
const projDest = path.join(__dirname, 'public', 'projects');
const pubDest = path.join(__dirname, 'public');

// Ensure directories exist
if (!fs.existsSync(projDest)) fs.mkdirSync(projDest, { recursive: true });

const copies = [
  ['CodeReviewAI.png', path.join(projDest, 'CodeReviewAI.png')],
  ['MediBot2.webp', path.join(projDest, 'MediBot.webp')],
  ['medConnect.webp', path.join(projDest, 'medConnect.webp')],
  ['mypet.jpg', path.join(projDest, 'mypet.jpg')],
  ['upskill-11.webp', path.join(projDest, 'upskill.webp')],
  ['MyPhoto.jpg', path.join(pubDest, 'photo.jpg')],
];

let count = 0;
for (const [file, dest] of copies) {
  const srcPath = path.join(src, file);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, dest);
    console.log(`Copied: ${file} -> ${dest}`);
    count++;
  } else {
    console.log(`SKIP (not found): ${file}`);
  }
}
console.log(`\nDone! Copied ${count}/${copies.length} files.`);
