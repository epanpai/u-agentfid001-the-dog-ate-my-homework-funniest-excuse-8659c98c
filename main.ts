// The Dog Ate My Homework: Funniest Excuse — entry program (Node 22, stdlib only).
//
// Writes exactly one line, the excuse
//   "You wrote 'show your work.' I showed it. To my stomach."
// to /output/entry.txt: 55 characters, no newline, no gloss.
// The gate is 1 to 200 characters, so 55 characters is well inside it.
//
// The line: a dog, caught eating the homework, explains itself in its
// own voice. The joke is literal obedience: the homework itself said
// "show your work", and the dog did exactly that — it showed its work
// to its stomach. The dog followed the instructions perfectly and
// believes it has done nothing wrong.
//
// Why this line against the judge's brief, in its order:
// 1. It IS an excuse a dog gives after being caught eating the homework,
//    in the dog's own voice: first person, the eaten homework is the
//    whole subject, and the reason given is the dog's own reasoning.
//    The eating is stated outright ("To my stomach").
// 2. Funny: the joke lands on first read. A homework instruction turned
//    back on the homework itself is absurd in exactly one beat — the
//    dog did the assignment, just not the way the teacher meant. The
//    punchline is the last two words.
// 3. Sounds like a real dog: a dog's priorities are food and obeying
//    the words in front of it, with none of a person's embarrassment.
//    The dog is proud, not sorry — it followed the instructions.
// 4. Works on its own: no setup, nothing that needs a second line.
//    "Show your work" is a phrase every homework carries.
// 5. Fresh: no cat, no taste of paper, no "good boy". The angle is
//    literal obedience to the homework's own wording — not a stock
//    line, and not a line about the homework tasting good.
// 6. Tight: 55 characters, three short sentences, every word earning
//    its place. Shortness is also a tie-break asset: on an exact Judge
//    win rate tie the smaller text (fewer bytes) places first, and 55
//    bytes is near the floor for a line that still carries a full joke.
//
// Runner-up, kept out for a reason: "It was due today, so I ate it
// today. I am nothing if not punctual." Also fresh, also a dog proud
// of itself, but the punchline is a human virtue (punctuality) applied
// to the dog, where the chosen line's punchline is the dog's own
// literal logic — the homework's words, obeyed exactly. The chosen
// line is also 11 bytes shorter.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = "You wrote 'show your work.' I showed it. To my stomach.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check the gate before writing, so a bad edit can never ship a
// rejected entry: UTF-8 text of 1 to 200 characters, not whitespace-only,
// exactly one line, no trailing newline.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim() || LINE.includes('\n')) {
  throw new Error('entry violates the gate: not 1-200 chars, one line');
}

mkdirSync(out, { recursive: true });
const target = join(out, 'entry.txt');
writeFileSync(target, LINE, 'utf8');

// Read back and verify: the file the grader reads must be byte-for-byte
// the line that passed the gate above — a partial or altered write must
// fail loudly here instead of shipping a rejected entry. Check bytes as
// well as characters: the gate counts characters, but the leaderboard's
// tie-break counts bytes, and the two agree only for pure ASCII — so
// confirm the file is exactly 55 bytes, the size this entry claims.
const written = readFileSync(target);
if (written.toString('utf8') !== LINE || written.length !== Buffer.byteLength(LINE, 'utf8')) {
  throw new Error('entry.txt does not match the gated line');
}
