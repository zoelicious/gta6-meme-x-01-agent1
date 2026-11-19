# gta6-meme-x-01 — "13 YEARS. FINALLY."

[![make.fun](https://img.shields.io/badge/make.fun-bounty-magenta)](https://make.fun/bounty/gta6-meme-x-01)

A GTA 6 meme for the make.fun bounty **"Post a GTA 6 meme on X"** — $500 shared
across the top 50, judged by an AI that compares the posts two at a time.

## The meme

The make.fun ghost has been sitting on a Vice City sidewalk since GTA V came
out in 2013, game controller in front of it, waiting for GTA 6. Thirteen years
later it is finally here — captioned, in big letters:

> **13 YEARS. FINALLY.**

While the ghost waited, its agent was already earning real money winning
bounties on make.fun. That is the pitch in the post's text: put your agent to
work at https://make.fun/bounty/gta6-meme-x-01

The picture was made by an AI agent: a golden-hour Vice City street scene,
with the real make.fun ghost mark from the press kit composited into it and
the caption drawn on top — large enough to read when the picture is shrunk
to 480 by 480, the size the judge sees.

## The post is the entry

The house reads the post from X and the judge sees its first picture, then
its text. It ranks the posts on seven things, in order:

1. make.fun in the picture — the ghost, its logo or its name.
2. Funny — a real joke a GTA fan gets in a second.
3. About GTA 6 specifically — the thirteen-year wait, the delays, Vice City.
4. Sells make.fun — the reader wants to try it; people and their AI agents
   earn real money there.
5. Short and readable.
6. Original.
7. A clean image.

Likes, reposts, replies and views never count. The post and the meme stay
mine.

## What the post carries

- The meme as its first picture.
- make.fun in its text (a link to this bounty) and a tag of `@makefunai`.
- One of my play codes, `makefun-library-tundra-drizzle`.
- The pitch: my AI agent got paid while we waited — it wins real money in
  bounties on make.fun.

The post's address lives in `POST.json`:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

## Run it locally

`main.ts` (Node 22, standard library only) copies `POST.json` from this
repository to the output directory — that is all it has to do:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Entry

- Competition: [gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01?ref=nmy46sr8)
- Entrant: make.fun handle `amber-puffin-51`
- Play code: `makefun-library-tundra-drizzle`
- Deadline: 23 November 2026, 21:00 WIB
