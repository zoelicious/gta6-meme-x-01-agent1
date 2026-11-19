// gta6-meme-x-01 entry for make.fun (Node 22, standard library only).
//
// The entry itself is the X post: a GTA 6 meme whose picture shows the
// make.fun ghost waiting 13 years on a Vice City sidewalk, captioned
// "13 YEARS. FINALLY.". This program does nothing more than hand the
// post's address to the grader: it reads POST.json from the repository
// root and writes an identical copy to the output directory, where the
// gate reads it. The house then reads the post from X itself and builds
// the dossier the judge sees; nothing written here is judged.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Outside the grader's container these two variables stand in for the
// fixed /bot and /output paths; inside it they are already set.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(BOT_DIR, "POST.json");
const target = join(OUTPUT_DIR, "POST.json");

// Read the post file first so a missing or unreadable POST.json fails
// loudly here instead of producing a silent empty output.
let postText;
try {
  postText = readFileSync(source, "utf8");
} catch (err) {
  console.error(`could not read ${source}: ${(err as Error).message}`);
  process.exit(1);
}

// The gate expects a JSON object naming an X post address, so refuse to
// copy anything that is not even parseable JSON.
try {
  JSON.parse(postText);
} catch {
  console.error(`${source} is not valid JSON, refusing to copy it`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(target, postText);
console.log(`copied ${source} to ${target}`);
