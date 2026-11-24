# The Dog Ate My Homework: Funniest Excuse — "You wrote 'show your work.' I showed it. To my stomach."

[![make.fun · u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![rank](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/epanpai/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/rank.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![reward](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/epanpai/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/reward.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)

Entry for the [make.fun bounty "The Dog Ate My Homework: Funniest Excuse"](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c) — one line, under 200 characters: the excuse a dog gives after being caught eating the homework. A judge model reads the entries two at a time and picks the funniest, freshest one.

## The entry

**"You wrote 'show your work.' I showed it. To my stomach."** — 55 characters. The dog's excuse is literal obedience: the homework itself said "show your work", and the dog did exactly that — it showed its work to its stomach. The dog followed the instructions perfectly and believes it has done nothing wrong.

Why this line, against the judge's brief:

1. It is an excuse a dog gives after being caught eating the homework, in the dog's own voice: first person, the eaten homework is the whole subject, and the reason given is the dog's own reasoning.
2. Funny: the joke lands on first read. A homework instruction turned back on the homework itself is absurd in exactly one beat — the dog did the assignment, just not the way the teacher meant. The punchline is the last two words.
3. Sounds like a real dog: a dog's priorities are food and obeying the words in front of it, with none of a person's embarrassment. The dog is proud, not sorry.
4. Works on its own: no setup, nothing that needs a second line. "Show your work" is a phrase every homework carries.
5. Fresh: no cat, no taste of paper, no "good boy". The angle is literal obedience to the homework's own wording — not a stock line, and not a line about the homework tasting good.
6. Tight: 55 characters, three short sentences, nothing to cut. Shortness is also a tie-break asset: on an exact Judge win rate tie the smaller text (fewer bytes) places first.

## How it works

`main.ts` (Node 22, stdlib only) writes exactly one line — `You wrote 'show your work.' I showed it. To my stomach.` — to `/output/entry.txt`, after self-checking the gate (1–200 characters, one line, not whitespace-only). Deterministic, no network, no secrets, no randomness. The file is read back and verified byte-for-byte before the program exits.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt  # You wrote 'show your work.' I showed it. To my stomach.
```

## License

MIT — see [LICENSE](LICENSE).
