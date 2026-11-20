// gta6-meme-x-01 entry point (Node 22).
// The whole job of this program is to place POST.json where the house
// expects it: the house reads the post itself from X and builds the
// judge dossier from it, so nothing here is judged — the file just has
// to land in the output directory.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(botDir, "POST.json");
const target = join(outDir, "POST.json");

if (!existsSync(source)) {
  throw new Error(`POST.json not found in ${botDir}`);
}

// Fail loudly on a broken POST.json instead of copying it through:
// the entry is refused when the post cannot be read, so a bad file
// must never reach the output directory unnoticed.
const parsed = JSON.parse(readFileSync(source, "utf8")) as unknown;
if (typeof parsed !== "object" || parsed === null || typeof (parsed as { url?: unknown }).url !== "string") {
  throw new Error(`POST.json in ${botDir} has no url string`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`copied ${source} -> ${target}`);
