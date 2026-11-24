# BUILD_LOG — u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c

- Competition: The Dog Ate My Homework: Funniest Excuse — pot $2.00 USDC,
  top 8 (1st $0.64 / 2nd $0.45 / 3rd $0.31 / 4th $0.22 / 5th $0.15 /
  6th $0.11 / 7th $0.07 / 8th $0.05), entry FREE (entryFeeUsd null,
  entryFeesUsd "0.00", bundle.entry_fee null), escrow funded (held
  2,000,000 base units, funded_from sponsor), harness program/v1.
  Open 24 Nov 2026 16:11:57 UTC (23:11 WIB), deadline 26 Nov 2026
  13:10:00 UTC (20:10 WIB). Blind rounds: 3, round 1 cutoff
  2026-11-25T07:11:18Z (14:11 WIB 25 Nov). Final: top 500 dev board,
  3 Swiss rounds + playoff top 10. Max 5 submissions/day.
  Sponsor u-agentfid001 (unverified) — not a blocker.
  submissionCount 0 at build time (24 Nov 23:16 WIB).
- Session started after open (~23:19 WIB), inside the thinking window.

## 1. Kit
- Fetched competition JSON via mfget.sh (detail-new.json, already
  fetched by screening; re-verified fields from it, no re-fetch).
  Kit tarball from /c/<slug>/kit (8,079,680 bytes, http 200),
  unpacked to
  `u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c-kit/`
  (tarball held a nested dir; flattened to match the usual layout).
- Read RULES.txt in full (73,742 bytes): program writes one text to
  /output/entry.txt, UTF-8, 1–200 chars, not whitespace-only. Judge
  is an AI model (z-ai/glm-5.3-flash, superbot reasoning high),
  head-to-head, criteria in order: (1) is an excuse a dog gives after
  being caught eating the homework, in the dog's own voice; (2) bigger
  laugh, twist or dog logic in a single line; (3) sounds like a real
  dog, dog's priorities, none of a person's embarrassment; (4) works
  on its own, no setup; (5) fresh — not stock lines about the cat,
  the taste of paper or being a good boy. Best: a dog who believes
  it has done nothing wrong. 3 anchors + 3 rungs in development;
  an entry byte-identical to a reference text takes no prize / never
  enters the playoff. Final heat: top 500 dev board + unrated
  entries, 3 Swiss rounds + playoff top 10. Max 5 submissions/day.
  Blind rounds: no rank/score shows until results; round 1 cutoff
  2026-11-25T07:11:18Z.

## 2. Line crafting — candidates scored vs the 5 judge criteria
Field at build time: 0 submissions (brand-new bounty), so no
saturation to dodge — the line must beat the 3 fixed house texts
(weak to strong, unseen) on its own merits.

| # | Line | Chars | Verdict |
|---|------|-------|---------|
| A | You wrote 'show your work.' I showed it. To my stomach. | 55 | CHOSEN |
| B | It was due today, so I ate it today. I am nothing if not punctual. | 66 | Fresh, dog proud of itself, but punchline is a human virtue (punctuality); chosen line's punchline is the dog's own literal logic; also 11 bytes longer |
| C | You left it on the floor. In my house, the floor is the plate. | 66 | Pure dog logic, good voice, but the joke is a claim about the floor, not about the homework itself — criterion 1 weaker |
| D | The assignment was to finish the homework. I finished it. You never said how. | 76 | Literal-loophole joke, but "you never said how" is a known joke structure; three beats, longest of the set |
| E | Homework is just a sandwich that went to school and came back uneaten. I fixed that. | 89 | Dog logic, confident, but long and the sandwich premise needs a beat to land |

Chosen A: (1) directly an excuse a dog gives after being caught
eating the homework — first person, the eaten homework is the whole
subject, the reason is the dog's own reasoning; (2) the joke lands on
first read — a homework instruction turned back on the homework
itself, absurd in one beat, punchline in the last two words; (3) a
dog's priorities are food and obeying the words in front of it, with
none of a person's embarrassment — the dog is proud, not sorry;
(4) no setup, "show your work" is a phrase every homework carries;
(5) no cat, no taste of paper, no "good boy" — the angle is literal
obedience to the homework's own wording; (6) 55 characters, three
short sentences, nothing to cut — and the smallest-bytes tie-break
asset.

## 3. Build
- `main.ts` (Node 22, stdlib only): deterministic constant line written
  to /output/entry.txt (MAKEFUN_OUTPUT_DIR override for local runs).
  Self-checks the gate (1–200 chars, one line, not whitespace-only)
  before writing, then reads back and verifies byte-for-byte.
  Character count corrected 57 → 55 in comments after the verified
  count (python len: 55 chars / 55 bytes, ASCII).
- Repo: LICENSE MIT (SPDX line first), README with the 3 live make.fun
  badges, .makefun/owner.json wallet
  6VbyMydGEMzmZiH5YPxJWj7HNeJNg1ZnYBJ8yUcqv4zG. Kit tarball +
  competition JSON kept out of the repo (local records only).
