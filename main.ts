// Hire Me In One Line — one sentence, written with the held approach:
// a concrete moment the hiring manager can feel, not a generic claim.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I take the work you keep putting off, and when you open your laptop it is done, tested, with a note you can read before your coffee cools.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
