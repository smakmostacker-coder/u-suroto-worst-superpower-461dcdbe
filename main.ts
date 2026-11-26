// Worst Superpower
// Deterministically writes one line to /output/entry.txt.
// Node 22+, stdlib only, no network, no randomness, no secrets, no model calls.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I can summon rain, but only indoors, only over my own head, and only while I'm already holding an umbrella.";

function main(): void {
  if (LINE.length === 0 || LINE.trim().length === 0) {
    throw new Error("entry line must not be empty");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
  if (LINE.length > 140) {
    throw new Error(`entry line is ${LINE.length} chars, over the 140 limit`);
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
