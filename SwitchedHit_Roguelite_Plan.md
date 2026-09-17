# SWITCHEDHIT

**CONFIDENTIAL · GAME + BUSINESS PLAN · 2 SEPTEMBER 2026**

**A Flutter Android cricket deckbuilder about becoming a cricketer**

Street gully → maidans → district → state → franchise trial → international.

You are the player. Not a franchise owner. **Progression is act-based (Shadow Fight–style), not a permadeath career run.** Cards are your technique. Fights are 5–7 minutes. Lose a stage, retry it. Keep your kit.

**Status:** The 3D match-replay product is **retired**. `next_app/` and `SwitchedHit_Replay_Plan.docx` have been removed from the repo. This document is the product plan.

**Owner:** Dattaprasad Ekavade · Pune · Play Store account + testers available

**Platform for v1:** Android, Google Play, India-first, English + Hinglish copy. iOS later if the loop holds.

**Business model:** Free-to-play. Rewarded + interstitial ads. In-app purchases. No real-money gambling. No BCCI / ICC / IPL marks.

---

## 1. What I heard (and what this is)

You want **SwitchedHit** as a **new Flutter Android game**: a **cricket deck builder** that *started* as a roguelite and is now **explicitly not a pure roguelike**. You asked to **time-gate and stage it** like **Shadow Fight / ninja act games** — one stage at a time, digestible for an Indian mobile audience. Street → international is the **campaign**, not one permadeath run.

That combination is still rare:

- Cricket mobile is **arcade sims** or **managers**.
- Card games that print money on phones are either PvP (Clash Royale) or premium roguelites (Balatro).
- Act-based F2P (Shadow Fight 2) is what India already *finished*.
- The hole: **player-identity cricket + cards + Shadow Fight campaign spine.**

The risk is equally clear: India eCPMs are low, cricket IP is legally sharp, and a pay-to-win deckbuilder will get review-bombed. The plan below is built around those constraints.

---

## 2. One-sentence product

**SwitchedHit is a single-player act-based cricket deckbuilder: you are an all-rounder climbing from the gully, each stage is a 5–7 minute innings, and your decks (shots / balls) are the technique you keep.**

Tagline options (pick one in production, do not mix):

- *From the gully to the world.*
- *Build a batter. Break a bowling attack.*
- *One stage at a time. All the way up.*

---

## 3. Why this can work (market)

### 3.1 Cricket on phones is real demand, not a vibe

- Cricket is ~89% of India’s sports economy (EY / industry wrap 2025–26); fans already live on phones during IPL and World Cups.
- Glance × InMobi × AppsFlyer (2025 cricket season): **120M** fans engaging beyond the match; **gaming CTRs 6×** during cricket windows; full-screen interstitials **13×** benchmark. Launch and live-ops must sit on the cricket calendar, not against it.
- Google Play **Top Grossing Sports, India** (mid-Sep 2026, AppBrain): **Cricket League** (Miniclip, 230M installs), **Real Cricket** (Krafton / Nautilus lineage, 82M), **Hitwicket Cricket Game 2026** (20M), **Dream Cricket**, **WCC3**, Stick Cricket. The category prints money for *other people*. It is not empty.

### 3.2 What those games actually earn (calibration, not a forecast)

Public store-intel (treat as order-of-magnitude, after-fee where noted):

| Title | Shape | Signal |
| --- | --- | --- |
| Real Cricket (Play, Aug 2026) | Arcade sim, F2P, licensed-feeling | ~**870k downloads / month**, ~**$75k** net that month; **79% India**, 19% Pakistan |
| Hitwicket publisher (last month) | Strategy / manager | ~**200k downloads**, ~**$90k** revenue; India / Pakistan / Bangladesh |
| Real Cricket lifetime colour | F2P sports | Sports Business Journal (2024): **350M+ downloads**, ~1M actives; India ~81% of downloads |

Those are **incumbents with years of UA and (in Real Cricket’s case) player-likeness deals**. A new indie does not print $75–90k/month on day 90. Use them as a **ceiling for “if this becomes a known cricket game,”** not a year-one budget.

### 3.3 Deckbuilders on mobile are a proven paying genre

- **Balatro** mobile (premium $9.99, no ads, no IAP): ~$1M first week; ~$4.4M in two months (AppMagic, late 2024); later reporting **~$21.3M mobile revenue**, **3.1M downloads**. Premium *can* work if the game is a phenomenon. We are not planning to be Balatro.
- **Slay the Spire** mobile: later estimates **~$13–14M** lifetime mobile among premium ports.
- **Dice of Kalma** (Balatro-like, 2026): **1M+ downloads** across mobile + Steam. The “short addictive run + numbers go up” template still installs.

**Implication:** the *genre* converts. The *cricket* audience installs. The gap is the overlap. That is the product.

### 3.4 The hole in the market

| Existing | What they sell | What they are not |
| --- | --- | --- |
| Real Cricket / WCC / Cricket League | Timing, graphics, licensed teams | No deck, no run, no death |
| Hitwicket | Squad / auction / daily sim | You are a GM, not a batter |
| Stick Cricket | Fast arcade | No career spine, no buildcraft |
| Fantasy / RMG | Real money | **Illegal / banned for us** (see §11) |
| StS / Balatro / Night of Full Moon | Deck runs | No cricket fantasy, no India-first culture |

**SwitchedHit occupies: single-player cricket identity + roguelite run + cards as technique.** That is not on the Play Store today in a form a gully kid would recognise as *their* game.

### 3.5 Audience

**Core (pay and retain):**

- 16–34, India + Pakistan + Bangladesh + Sri Lanka + Gulf + UK / AU diaspora.
- People who already open cricket games *and* people who play Clash Royale / Brawl Stars / card RPGs but never liked “another Real Cricket.”
- Session: bus, night after a match, IPL innings on the other screen.

**Not the core:**

- Kids under 13 (ads + IAP + violence-of-failure; target **PEGI 12 / Play 12+**).
- Hardcore Fantasy / betting users (we must look like a *game*, not a book).

**Language:** UI English; flavour text Hinglish; later Hindi, Tamil, Bengali if retention proves the loop. Do not launch in 12 languages.

---

## 4. Game plan (design)

### 4.1 Fantasy and tone

You are not Virat. You are a kid who bats with a taped tennis ball under a streetlight. A coach who may or may not be real (the “Keeper of the Book”) hands you a book of shots and balls.

**Campaign, not a dying career:** Shadow Fight 2 grammar. Acts you clear in order. Lose a fight → retry that fight (optional one ad-revive, then you still retry, you do not lose the act). Kits, cards, relics **persist**. The fantasy of “rising” is the map, not permadeath.

Tone: **warm, loud, slightly mythical gully**. Think Shadow Fight’s act-to-act hunger + StS *card clarity* + gully slang. Commentary is a character, not licensed audio.

### 4.2 You are the player

You are an **all-rounder**. Cards mix shots *and* balls (locked 2026-09-02). At the start of a run you still pick an **archetype** (not a licensed star) that biases the mix:

| Archetype | Street origin | Deck bias | Weakness |
| --- | --- | --- | --- |
| **Tape-ball Dasher** | Colony roof, tennis ball | Power, slog, short-boundary sixes | Fragile technique vs quality seam |
| **The Wall** | Maidans, all-day defence | Leaves, nurdles, stamina | Slow scoring vs required rate |
| **Wristy** | Gully spin, late hands | Placement, reverse, 3s | Bounce, extra pace |
| **Opener Blood** | First drop, new ball | Strike rotation, ones and twos | Middle-over squeeze |

No team management screen in v1. No 15-man squad. You *are* the XI’s spine; partners are **support cards / relics**, not a second career.

### 4.3 What a “fight” is

Map **one combat encounter = one innings (or a chase)**.

- **HP / wickets:** you have a wicket bar (confidence + partners + luck, *not* 10 literal dismissals — tune so a street fight is **5–7 minutes**). Hitting 0 = dismissed / **this stage failed**. Retry the node. Campaign stays.
- **Energy:** stamina per over (3 energy, StS-like). Playing a cover drive costs 1; a rampaging slog-sweep costs 2; “farm strike” is 0-cost but low reward.
- **Block:** leave, dead bat, wear the shine. Converts to “survival” against bouncers.
- **Damage you deal = runs.** The bowling attack has an **over-limit / target**. Street fight: 60 off 8. District final: 148 off 20. International: Test-session pressure or death-over T20.
- **Enemy intent:** shown like StS intents — *yorker*, *short barrage*, *doosra*, *wide trap*, *crowd noise*, *DRS*. You play around the next ball, not a timing minigame.

**This is not Real Cricket.** No analog stick. The satisfaction is *reading the bowler and spending the right card*, then watching a 1.5s pitch vignette (Flame) of the shot.

### 4.4 Cards (your technique)

Four piles, one deck:

1. **Shots** — cover, pull, glance, reverse, lofted, leave, bunt for one.
2. **Balls** — inswinger, off-cutter, slow bouncer, yorker, doosra, tape-ball dip. **Separate pile.** Bat nodes draw Shots; bowl nodes draw Balls.
3. **Temper** — ice, red-mist, farm, sledging, “see ball hit ball.”
4. **Street** — underarm, one-bounce six, “last-man runner,” reverse grip. High reward, high risk. Identity of SwitchedHit.

Card rarity: street / club / state / international. International cards are **campaign rewards** (choose 1 of 3), never an IAP crate of power.

**Loadout:** 12–18 cards per pile from a persistent collection. Nets = upgrade / remove. This is closer to Shadow Fight gear + a deckbuilder shop than to a StS run wipe.

### 4.5 Relics = coaching cues

Examples: cracked English willow, gully floodlight, mother’s lunch tiffin, lucky red thread, “no helmet in the colony” (power + vulnerability), DRS referral (once per boss). Relics are the *build* people screenshot.

### 4.6 Campaign ladder (Score! Hero grammar, cricket career)

**Not a permadeath roguelite.** One numbered stage at a time. **Score! Hero** (First Touch) is the template we steal:

- Career is **hundreds of authored levels**, not a random map.
- **10 levels = one chapter.** Levels `n0` are **gates**: a tournament, a selection, a cap.
- Every level has a **must-clear primary** plus **two star missions** (Score Hero’s “secret objectives,” revealed after first clear). 1–3 stars.
- Need **20 / 30 stars** in a chapter to open the next (replay for stars = grind + ads, story not bricked).
- Energy = our **5 tickets**. Retry the same level. Autosave.
- Between levels: a line of story (coach SMS, local paper, rival sledging) — not a cutscene budget.

Fight length still **5–7 minutes**. Bat or bowl is flagged on the level card.

#### What we steal from Score! Hero (and what we do not)

| Steal | Do not steal |
| --- | --- |
| Numbered career 1…N with a cup every 10 | 800+ levels of the same “score a goal” |
| Primary + 2 star missions | Analog flick gameplay |
| Stars as chapter keys | Hard hearts that brick the story |
| Story beats: trials, bench, rival, injury, first cap, World Cup | Licensed clubs |
| Comeback / last-over / “prove the scout” scenarios | Rewind-for-gems as the core loop |

**Star missions (catalogue — pick two per level):** chase without a six; maiden over; take the set batter; 12 off 6; no extras; play the meme reverse and *survive*; partnership 30 with a bunny; DRS review correct; death-over yorker; night-game no misfield.

#### Full career: 12 chapters × 10 levels = **120**. Level 120 = World Cup final.

| Levels | Chapter | Gate (every 10) |
| --- | --- | --- |
| 1–9 | **Gully** | **10 Gully Annual Tournament** |
| 11–19 | **Local academy** | **20 Town selection** |
| 21–29 | **Town circuit** | **30 District trials** |
| 31–39 | **District** | **40 Division cup final** |
| 41–49 | **Inter-district / zone** | **50 State age-group call-up** |
| 51–59 | **State U-19** | **60 State senior contract** |
| 61–69 | **State senior** | **70 Domestic T20 draft** |
| 71–79 | **Domestic T20 / franchise** | **80 National camp** |
| 81–89 | **National camp / A side** | **90 First international cap** |
| 91–99 | **Internationals** | **100 World Cup qualification** |
| 101–109 | **World Cup** (group + knockouts) | **110 World Cup semi-final** |
| 111–119 | **World Cup knockout run** | **120 World Cup final** |

No BCCI / IPL / ICC names on the map. “Domestic T20” is a made-up league. “World Cup” is generic.

#### Levels 1–10 — Gully (tape ball, sodium lights)

| # | Name | Mode | Primary | Why it is not “another HP bar” |
| --- | --- | --- | --- | --- |
| 1 | First throw-down | Bat | Score 12 off 4 vs a mate who lobs | Tutorial. Intent is always “float.” |
| 2 | Compound wall | Bat | 20 off 6, short straight boundary | Sixes are cheap; getting *out* is the fail. Teaches greed. |
| 3 | Tennis-ball bouncer | Bat | Survive 6 balls, don’t hole out | First “leave / block” level. |
| 4 | Last man standing | Bowl | 8 balls, 2 wickets, they need 14 | You bowl; their slogger is the enemy bar. |
| 5 | Streetlight out | Bat | 18 off 8, every 3rd ball is a wide-darkness | Random “can’t see spin” curse. |
| 6 | Underarm dare | Bowl | Take 1 wicket with a street ball card | Unlocks the underarm card *by playing it*. |
| 7 | Rival from the next chawl | Bat | Beat “Raju” chase 22; he sledges (temper costs +1) | Recurring rival. |
| 8 | Gully nets | Bat *or* Bowl (pick) | Complete coach’s 3-card combo | Mini shop after. |
| 9 | Injured opener, you’re in | Bat | 15 off 5, 1 wicket in hand | Bench / “sent in” fantasy (Score Hero substitute beat). |
| **10** | **Gully Annual Tournament** | Bat then Bowl (two short innings, still ≤7 min total) | Win the tape-ball cup | First *gate*. Newspaper line. Relic: cracked bat. |

#### Levels 11–20 — Local academy

| # | Name | Mode | Primary |
| --- | --- | --- | --- |
| 11 | Academy fitness | Bowl | 6 legal balls, 0 extras (body, not skill) |
| 12 | New-ball leather | Bat | First hard-ball fight. Leave the outswinger. |
| 13 | Coach’s favourite vs you | Bat | Elite academy batter-bowler. Don’t slog. |
| 14 | Pair with a bunny | Bat | You must farm strike; partner is a 9 who will get out if they face 3 balls |
| 15 | Wet outfield | Bowl | No slip catching. Wickets only bowled/LBW. |
| 16 | Reverse as a joke | Bat | Star-3 = play reverse-sweep and not get out. EV is bad. People will do it. |
| 17 | Raju shows up at nets | Bowl | Rival again, now in whites. |
| 18 | Selection rumour | Bat | Scout in the crowd: extra star if strike rate ≥ 140 *and* you don’t hole out |
| 19 | Night academy game | Bat | Slow ball grips. Wristy shines. |
| **20** | **Town selection** | Bowl | 4 overs, 3 wickets, economy under 8. Fail = retry, not “career over.” |

#### Levels 21–120 — rest of the career (named gates, authored scenarios)

Each chapter follows the same 9 + 1 pattern: **7 league/academy fights, 1 rival or injury beat, 1 nets/shop, 1 gate.**

| # | Scenario type (rotate these, don’t repeat the same fight) |
| --- | --- |
| 21–29 Town | Sunday grounds, matting pitch, local umpire (no DRS). **30 District trials** — bat a 30-ball knock vs district new-ball. |
| 31–39 District | Turf, first helmet optional relic. Big spinning grounds. **40 Division cup final** — chase 48 off 5. |
| 41–49 Zone | Travel, tired body (start with −1 energy). **50 State U-19 call-up** — bowl at a decorated junior batter. |
| 51–59 State U-19 | Camps, shared rooms, sledging from seniors. **60 State senior contract** — last-over 16 off 6. |
| 61–69 State senior | Red-ball *flavour* (more leaves) but still T20-shaped clock. Injury level: 4 energy max. **70 Domestic T20 draft** — 2-over audition, both modes. |
| 71–79 Domestic T20 | Floodlights, death overs, crowd curse. **80 National camp** — fitness + 12-ball death bowl. |
| 81–89 National camp | Net bowlers who are faster than the game so far. **90 First cap** — bat 8 balls, don’t get a duck (primary is “see off the new ball”). |
| 91–99 Internationals | Neutral venues, DRS on. **100 WC qualification** — must win; star-3 = player-of-the-match relic. |
| 101–109 World Cup | Group: defend 28 off 4; Super-8 chase; knock-out last-over. **110 Semi-final** — named overseas quick, bouncer barrage. |
| 111–119 Knockout run | Recover from 111 “dropped catch” (start −1 wicket). Rival nation (no real flags: “The Old Enemy”). **120 World Cup final** — you choose bat or bowl after the toss card. Longest fight still capped at 7 minutes. |

**Recurring cast (Score Hero’s veteran rival, cricket-flavoured):**

- **Raju** — gully rival, returns at 7, 17, 37, 77.
- **Coach Kulkarni** — academy, SMS between levels.
- **The Veteran** — state senior who won’t give you strike (level 64).
- **The New Ball** — Act-final quick, portrait reused with better kit.

**Chapter unlock:** 20 stars from the last 10 levels. You can brute-force on 1-stars and scrape through; 3-starring is the grind/ads loop.

**True roguelite** (daily tour, death wipes the tour) is a **later mode**, not v1.

**Win the campaign:** level 120. Then New Game+ (intents scale) / cosmetics, not “delete the kid.”

### 4.7 Daily / live-ops (retention, not content treadmill)

- **Daily net:** one short seeded fight, cosmetics + a pinch of soft currency.
- **Season pass:** 6–8 weeks, aligned to IPL / World Cup / home series. Track is cosmetics + card *backs* + a mid-season relic skin. **No exclusive power cards on the paid track.**
- **Challenge seeds:** “today every bowler is left-arm around.” Shareable.

### 4.8 What v1 is not

- No multiplayer, no PvP, no clubs, no licensed XI.
- No analog batting, no 3D stadium broadcast (that was the scrapped product).
- No real-money contests, no “predict the IPL,” no fantasy XI.
- No Unity.
- No permadeath of the campaign. Roguelite daily-tour is post-v1.

---

## 5. Inspiration (steal structures, not assets)

| Game | Steal | Do not steal |
| --- | --- | --- |
| **Slay the Spire** | Energy, intents, map, relics, card remove | Fantasy art, 3 acts as-is |
| **Balatro** | Short “one more run,” number-go-up dopamine, mobile-native | Poker IP, premium-only (we are F2P) |
| **Shadow Fight 2** | Act maps, retry-the-fight, persistent gear, India-digestible F2P | Weapon gacha, energy that bricks the game |
| **Inscryption** | The table is sacred; cards have weight | Horror / ARG |
| **Marvel Snap** | Thumb-first card UX, 3-minute tension | Locations / 12-turn cube economy |
| **Hitwicket** | Proof cricket-strategy players exist in India | Daily 8pm obligation, GM fantasy |
| **Stick Cricket** | Casual cricket can be cartoon and still feel like cricket | Shallow meta |
| **Monster Train / Wildfrost** | Layered combat ideas if we ever do “two innings” | Complexity at tutorial |

**North star loop:** *lose a gully fight to a bouncer, slam the meme reverse-sweep anyway, retry the same kid, beat the stage, open the next chowk.*

---

## 6. Art style

### 6.1 Recommendation: “Gully tarot, not broadcast”

Photoreal cricket on phones is **Real Cricket’s trench**. Do not fight Krafton/Nautilus on mocap. Go **stylised sports-card illustration**:

- Players as **collectible cricket cards** (3/4 portrait, exaggerated hands and eyes, kits as *colour stories* not franchise marks).
- Table / pitch vignette in **miniature diorama** (Flame): clay-red ground, sodium-vapour night, taped tennis ball in Act 1, hard ball later.
- UI: dark green + floodlight gold + cream paper (already in the spike’s palette — keep it).
- Cards: thick border, shot diagram watermark, Hindi/English nickname.

**References (mood, not copies):** FIFA/FC Ultimate Team card frames, *Slay the Spire* readability, *Hades* portrait lighting, Indian matchbox / truck art saturation, *Cricket in the 90s* Doordarshan warmth.

**Do not:** IPL logos, BCCI crest, player likenesses, photoreal faces, 4K stadiums.

### 6.2 Production reality (solo / tiny team)

- 1 consistent illustrator (or you + AI for *blockouts only*, human pass on every ship card).
- ~80 cards in v1, ~40 relics, ~25 enemy bowler portraits, 5 kits.
- Spine animations in Flame (idle / play / dismiss) as 4-frame loops, not mocap.
- If art becomes the bottleneck, ship **silhouette + kit colour** enemies first; portraits later.

### 6.3 Audio

Original stumps / crowd bed. A commentator character with 40 lines, not a licensed voice. Street mix: tape-ball thud in Act 1, leather in Act 3.

---

## 7. Tech stack (Android-first Flutter)

A deckbuilder is **mostly UI**. Google’s *I/O Flip* shipped a full card game on **Flutter widgets with no Flame**. Use Flame only where a game loop earns it.

### 7.1 Recommended stack

| Layer | Choice | Why |
| --- | --- | --- |
| App | **Flutter 3.x / Dart 3** | One codebase, Play-ready, you already think in Flutter |
| Cards, map, shop, meta | **Flutter widgets** + `flutter_animate` | Snappy, accessible, cheap to iterate |
| Pitch vignette (the 1.5s shot) | **Flame 1.38+** (`GameWidget` embedded) | Sprites, timeline, particles; do not build the whole app as a FlameGame |
| State | **Riverpod** | Testable, no BuildContext soup |
| Save | **Isar** or **Hive** local; optional Drive/Play Games later | Runs must survive process death |
| Analytics | **Firebase Analytics + Crashlytics** | Play Vitals + funnels |
| Ads | **google_mobile_ads** + **AdMob mediation** (add **InMobi** for India) | India rewarded eCPM is often better on InMobi than AdMob alone |
| IAP | **in_app_purchase** → Play Billing | Required for digital goods on Play |
| Remote config | **Firebase Remote Config** | Tune energy, ad frequency, prices without a store review |
| Audio | **flame_audio** / `audioplayers` | SFX + bed |
| CI | GitHub Actions → **AAB** | Play wants App Bundles |

**Explicitly not:** Unity, Godot (unless Flame vignettes fail — review at end of vertical slice), native Kotlin-only, a custom engine.

### 7.2 Why Flutter is the right call *for this genre*

- Cards, shops, maps, battle passes are **product UI**. Flutter is stronger than Unity there.
- Combat is turn-based. 60fps sprite punch-ins are enough; you do not need PhysX.
- Play Console, ads, IAP, deep links are boring and well-documented in Dart.
- Flame (Blue Fire) is actively shipped in 2026 (v1.38.x, Flutter 3.41+). Real Play titles exist (puzzle, runners, RPGs). It is not I/O Pinball-or-nothing anymore.

**Where Flutter is weak:** heavy 3D, 60-player netcode. We are doing neither in v1.

### 7.3 Architecture sketch

```
lib/
  app/                 // routing, theme, bootstrap
  meta/                // unlocks, profile, battle pass
  run/                 // map, rng seed, relic state
  combat/              // energy, intents, discard, resolve
  cards/               // data + widgets
  pitch/               // FlameGame vignette only
  monetization/        // ads, IAP, remote flags
  save/
```

Combat is **pure Dart**, deterministic given a seed (for daily nets and for QA). Flame only *presents* the resolve.

### 7.4 Device bar

Min **Android 8 / API 26**, 2 GB RAM class. Download target **< 80 MB** at install (on-demand card art if needed). 60 fps on a mid-range Samsung is a launch gate, not a stretch.

---

## 8. Play Store release plan

### 8.1 Listing

- **Name:** SwitchedHit
- **Short:** Roguelite cricket. Build a batter. Climb from the gully.
- **Category:** Game → **Card** (primary). Sports as tag, not primary — you will be crushed under Real Cricket in Sports charts; Card is where StS-likes live.
- **Content rating:** 12+ (mild violence of dismissals, no gambling).
- **Data safety:** ads + purchase + analytics declared honestly.

### 8.2 Closed testing (do this on the calendar, not as an afterthought)

Personal Play accounts created after **13 Nov 2023** need a **closed test: ≥ 12 testers opted in for 14 continuous days** before production access (Google reduced 20 → 12 in Dec 2024; 14 days stayed). Opt-in means they clicked the Play link and installed. Sideloads do not count. You already have testers — **keep 12 opted in the whole window**. If one drops, the clock can stall.

Organization Play accounts (D-U-N-S) skip this. If you form a Pvt Ltd later, consider moving the app.

### 8.3 Store page that converts in India

- First screenshot: **gully night + one legendary card**, not a settings screen.
- Hindi/English short description.
- “No internet required for runs” if true — huge for commute play. Ads can wait for connectivity.
- Do not put “IPL” or team names in ASO. Use *street cricket, career, cards, roguelike*.

### 8.4 Launch window

Ship a **vertical slice** anytime. **Store launch** should sit **2–3 weeks before IPL or a home WT20/ODI window**, with a season pass that *ends* after the final. Cricket UA is cheap when the country is already watching; it is expensive in September.

### 8.5 Ratings

Crash-free 99.5%+ before production. One broken IAP and India will one-star you. Staged rollout 10% → 50% → 100%.

---

## 9. Monetization (the actual money)

### 9.1 Principle

**F2P, hybrid ads + IAP, cosmetics-first, power never in a loot box.**

Roguelites die in reviews when the shop sells the win. They print when the shop sells *identity* and *another run tonight*.

### 9.2 What we sell

| SKU | Type | Price band (INR) | Role |
| --- | --- | --- | --- |
| **Remove ads** | IAP, once | ₹199–349 | High-intent, protects whales from self-hate |
| **Nets Pass** (season) | IAP, 6–8 weeks | ₹149–249 | Battle pass: kits, card backs, titles, extra daily net. **No unique power cards** |
| **Starter kit** | IAP, once, first 72h | ₹79–129 | Cosmetics + a pinch of rerolls. 3× value vs shop, still not P2W |
| **Reroll pack** | Soft currency also grindable | ₹49–99 | Shop rerolls / card remove tokens |
| **Extra locker** (save slot) | IAP | ₹79 | QoL for people who juggle two runs |
| **Kit / bat / celebration** | IAP or pass | ₹29–149 | Screenshot economy |
| **Rewarded revive** | Ad | **1 per fight**, then retry the stage | Highest eCPM. Campaign is not wiped |
| **Rewarded extra draft / shop reroll** | Ad | 2–4 per run cap | Core India revenue |
| **Interstitial** | Ad | After a *lost* run or returning to map, never mid-over | Don’t break the sacred table |
| **Banner** | Ad | Menu only, adaptive | Low eCPM, low harm |

**Never sell:** random card packs with power, “guaranteed six” tickets, skip-the-boss, paid XP that gates archetypes.

### 9.3 Ad ops (India-first)

Public ranges, 2025–26 (wide, use as planning bands not contracts):

- India **rewarded** eCPM: roughly **$1–4** on AdMob, **$1.20–2.50** often cited for InMobi in-India; US rewarded can be **$8–15**. Mediate both.
- India **interstitial**: roughly **$0.50–2**.
- India **banner**: pennies. Keep for menus.

**Worked India-heavy example (not a promise):**

- 8,000 DAU, 1.5 rewarded / user / day, $2 eCPM  
  → 12,000 rewarded / day × $2 / 1000 = **$24/day ads ≈ $720/month** from ads alone.
- Add 1.5% of DAU buying something at ₹99 net ~₹84 after Play 15%  
  → 120 buyers × ₹84 ≈ **₹10k/day ≈ $120/day ≈ $3.6k/month IAP**.
- **Hybrid ~$4–5k/month** at that DAU. This is a *healthy indie cricket game*, not Hitwicket.

Scale table (planning, India-majority mix, hybrid ARPDAU **$0.02–0.06**):

| DAU | Monthly hybrid (band) | What it feels like |
| --- | --- | --- |
| 1,000 | $600–1,800 | Prototype found a few hundred fans |
| 5,000 | $3k–9k | Real side income, worth live-ops |
| 15,000 | $9k–27k | Small studio wage |
| 40,000 | $24k–72k | Hitwicket-adjacent *if* UA is efficient |
| 80,000+ | $50k–150k | You hired people and a UA budget |

**Diaspora lever:** if 8–10% of DAU is UK / AU / UAE / US, ad revenue can **double** without doubling users. English flavour + Play listing in those countries is not optional.

### 9.4 Play fees

- Most developers: **15%** on the first **$1M/year** of Play digital goods; 30% after (subscriptions often 15%). India alternative billing can cut **4%** if the user picks it — implement only after IAP works.
- Ads: AdMob ~**32%** network share already in eCPM; you see net.
- GST on digital IAP in India: budget **18%** on top in the price, or eat it. Do the maths in the SKU so ₹99 does not become a surprise.

### 9.5 UA (where money actually dies)

Do **not** buy CPI on day one. Organic: cricket YouTube shorts of *one ridiculous reverse-sweep build*, Play listing, Reddit/Discord, WhatsApp cricket groups.

Paid UA only after:

- D1 ≥ 35%, D7 ≥ 12% (roguelite-good),
- rewarded ARPDAU known,
- a CPI in India you can recite (often ₹8–25 for casual; cricket keywords spike in IPL).

If CPI > 7-day revenue, stop ads, ship content.

### 9.6 Honest year-one scenarios

| | Installs | Peak DAU | Year-1 net (ads+IAP, after stores) | Read |
| --- | --- | --- | --- | --- |
| **Miss** | < 20k | < 500 | **$0–3k** | Loop didn’t click; archive |
| **Side project** | 80–200k | 2–6k | **$8–40k** | Worth evenings + one IPL season |
| **Hit (non-viral)** | 0.5–1.5M | 15–40k | **$60–250k** | Quit-your-job zone if costs stay tiny |
| **Breakout** | 5M+ | 80k+ | **$400k–1.5M** | You are now a cricket-game company; still not Real Cricket |

**Base plan on “side project.”** Hire and UA only after two months of “side project” numbers during a cricket window.

### 9.7 Why ads + IAP (not premium)

Balatro could charge $10 because it was already a phenomenon on PC. We are unknown, India-first, and competing with *free* cricket games. Premium $3–5 would cap the top of the funnel. F2P with a fair pass + ad remove is the only model that can ride IPL traffic *and* still pay the lights.

---

## 9.8 India-ok vs West-fair: ratings and the path to 10/10

Research snapshot (Sep 2025–Mar 2026). Figures are industry reports, not our forecasts.

**What Indian players actually tolerate / buy**

- India is volume, not ARPU: ~$3 ARPU vs ~$215 US (Lightbox / Economic Times 2025–26). Downloads are huge; paying is a minority, but that minority is growing.
- Lightbox × Rooter: **74.9%** of surveyed gamers already spend on *non-RMG* IAP; **31.2%** spend ₹1,000+/month; spend mix **battle passes 40% / cosmetics 37% / unlockable content 23%**.
- **12%** call in-game ads annoying; **38% would quit if ad load is excessive** — hybrid ads+IAP is required, ad spam is not.
- BW Disrupt (Nov 2025): **~33%** report making purchases; **mid-core takes ~50% of spend**; people pay for **cosmetics and power-ups**, not gambling. **UPI ~80%** of gaming payments; **54%** of payers convert in the **first week**.
- Hitwicket / Krafton commentary: Gen Z spend is **mostly cosmetics**; older spenders still buy power. BGMI’s move toward cheaper, clearer cosmetics was reported to lift satisfaction *and* revenue (Krafton India / trade press).
- Cultural: games should feel **free**. ₹49–199 UPI taps work; ₹800 Western battle-pass prices do not. Regional language (Hindi/Tamil/Telugu) is a conversion lever, not a nice-to-have.
- Energy gates and opaque loot are familiar from Shadow Fight / Free Fire / cricket F2P. Familiar ≠ loved. They work on whales and get one-starred by everyone else.

**What international (esp. US/UK/EU) players call predatory**

- Random **paid power** (Battlefront II, FIFA Ultimate Team, Madden packs) is the radioactive pattern. Review bombs, creator boycotts, congressional language (“Star Wars-themed casino”).
- **Loot boxes** = gambling-adjacent: Belgium treats *paid* loot boxes as illegal chance games (2018 opinion; Antwerp *LS v Apple* Jan 2025). Play/App Store already require **odds before purchase**. EU/UK/US lawsuits and 18+ pressure are the trend, not a fad.
- Other west-hated patterns (Norwegian Consumer Council *Get Played*): leftover premium currency, two-layer gems, paywalls on the story, “just short of the price” bundles (FF14 Mobile 2025 backlash).
- West *does* pay: **battle pass + cosmetics** (Fortnite, Brawl Stars, Clash Royale). Clash Royale added **regional pricing** (2025) so India/LATAM are not charged US rates. That is the global-fair playbook.
- Gacha can still print money in the West (*Genshin*) **if** pity is honest and you can eventually get the thing by playing. It will never feel “fair” to a Steam/Balatro audience.

**Game types that sit in the overlap (India-ok AND not radioactive in the West)**

| Type | India | West | Notes |
| --- | --- | --- | --- |
| Act campaign, retry stages (Shadow Fight 2) | High | Medium | Native to India. Fine in West if not energy-bricked |
| Short card fights + persistent loadout (Clash Royale / Brawl Stars) | High if priced locally | High | Best dual-market model |
| Cosmetic + battle pass F2P (BGMI / Fortnite) | High (identity spend) | High | Needs scale |
| Premium one-price (Balatro / StS) | Low in India cricket | Very high | Wrong funnel vs free cricket games |
| Hard gacha P2W cricket | High short-term rupees | Toxic | Legal-adjacent after RMG ban |
| Ad-only hypercasual | High installs, tiny $ | Fine | Not a career game |

**Ratings (1 = predatory / unworkable, 10 = dual-market gold)**

Score is **blended**: 50% India fit (will they play and pay via UPI/ads) + 50% international fairness (reviews, EU loot-box risk, diaspora eCPM).

| Dimension | Typical India cricket / Shadow Fight F2P (“their” default) | Our current plan | 10/10 target |
| --- | --- | --- | --- |
| India play/pay fit | 8 | 7 | 9 |
| International fairness | 3 | 6 | 9 |
| Legal / store (odds, RMG-adjacent, Belgium) | 3 | 5 | 9 |
| Long-term LTV (not whale-burn) | 4 | 7 | 9 |
| Ads without churn | 4 | 7 | 9 |
| **Blended** | **4.5 / 10** | **6.5 / 10** | **10** |

Why we are not a 10 yet: **packs that can roll new power cards** (even if the story also grants them later) are still a paid loot box. That fails Belgium, needs Play odds disclosure, and is the first thing a Western reviewer will screenshot. Soft energy and “story never paywalled” are the parts that already score well.

**Steps to 10/10 (do in this order)**

1. **Direct buy / craft every power card.** If it can appear in a pack, it has a **published coin price**. China draft rules and Western “I just want that cover drive” both require this. Packs become a *discount on random*, not the only door.
2. **Odds on the pack screen before spend.** Play/App Store requirement. Also print pity: e.g. featured card guaranteed by pack 10; no duplicate of a missing story card until the set is complete.
3. **Story path beats Act 4 on story cards alone.** Pack-early is convenience, never a DPS check. QA a F2P account with zero packs through the finale every patch.
4. **Keep soft energy exactly as locked:** 5 tickets/day, ad or wait refill, **story stages always playable** (maybe slower). Never Shadow Fight hard-lock.
5. **Battle pass ₹149–249** (not $9.99). Earn-back enough coins to buy the *next* pass by playing. Cosmetics + card backs + titles. **No unique power on the paid track.**
6. **Regional pricing** on every SKU (Clash Royale 2025). India ₹49 / ₹99 / ₹199 rungs. US/UK can be 3–4×. Block gifting from cheap regions.
7. **Ads:** rewarded only at *opt-in* (ticket refill, extra 1-of-3 reroll, one revive). Interstitial only after a *lost* fight or returning to the act map. **Never mid-over.** Cap ~2 rewarded / session. **38% of Indian surveyed players said they would quit if ads are excessive.**
8. **Remove-ads IAP** (₹199–349) so diaspora and haters of ads have an exit. Does not grant power.
9. **No leftover-gem traps.** SKUs map onto prices. If a kit is ₹99, sell a ₹99 pack, not 80 crystals then 150.
10. **UPI-first first-week offer** (₹49–79 starter cosmetics + 2 ticket refills). 54% of Indian payers convert in week one — that SKU is the conversion machine, not a ₹2,999 whale crate.
11. **Duplicate → dust → craft.** Packs that hit cards you own become upgrade currency, not garbage.
12. **Belgium / strict-EU:** geo-disable *paid random* packs or replace them with the craft shop only. Safer than arguing with gambling law.
13. **12+ rating, parental spend cap, no loot marketed at kids.** Cricket audience includes minors; we do not need them on packs.
14. **Live dashboard:** ARPDAU ads vs IAP, ticket-ad attach, pass conversion, D7 by payer/non-payer. If D7 of payers < D7 of F2P, the economy is predatory and we roll it back.

Do 1–4 before closed testing. Do 5–11 before production. Do 12–14 in the first live season.

---

## 10. Build plan (what to make, in order)

### 10.1 Vertical slice (4–6 weeks) — kill or continue

Must be fun on a mid-range Android without accounts:

- 1 archetype (Dasher)
- 18 cards, 8 relics, 4 enemies, 1 boss
- Gully act map (2–3 stages, retry on loss)
- Flame vignette for 4 shot types
- Local save
- Fake shop (no real money yet)

**Kill criterion:** if you do not start a second run after a death without being asked, stop. Do not add ads to a boring slice.

### 10.2 Alpha (weeks 7–14)

- 3 archetypes, 60 cards, 3 acts
- Daily net
- Analytics events (start_run, card_play, death, revive_ad)
- Closed testing track, 12 testers, 14 days

### 10.3 Beta (weeks 15–22)

- Act 4 stub
- Real AdMob (test devices) + 3 IAP SKUs (ad remove, starter, pass)
- Hindi flavour pass
- Store listing, shots, 30s trailer (one run, no licensed footage)

### 10.4 Production

- Staged rollout before a cricket window
- Season 0 pass (free track fat, paid track cosmetic)

### 10.5 Team (v1)

Solo + specialists:

- You: design, Dart, combat
- 1 illustrator (cards + portraits), contract
- 1 audio (optional Fiverr-grade, then replace)
- No UA agency until §9.5 gates

---

## 11. Legal, policy, and “don’t get banned”

- **No BCCI, ICC, IPL, franchise names, crests, anthems, player faces.** Street kits. Made-up club names (“Cotton Green Colts,” “Marine Drive XI”).
- **Not gambling.** Cards are shots, not bets. No real-money prizes. India’s **Promotion and Regulation of Online Gaming Act 2025** wiped RMG / fantasy ad money off IPL; looking like Dream11 is how you die twice (law + ads). Copy must say *single-player career game*.
- **Ads:** UMP / families if you ever drop below 13 — don’t. Rewarded must be optional. GDPR/DPDP: consent SDK.
- **IAP:** restore purchases, clear prices, no dark patterns (Google Play Payments policy).
- **Crashes in closed test** are a gift. Production one-stars are not.

---

## 12. Risks

| Risk | Size | Mitigation |
| --- | --- | --- |
| Loop isn’t fun | Fatal | Vertical slice kill-gate |
| “It’s just StS with bats” reviews | High | Street cards + commentator + career fantasy must be loud in the first 3 minutes |
| India eCPM too low to matter | High | Diaspora listing + IAP cosmetics + IPL live-ops; don’t build a UA machine on $0.02 ARPDAU |
| Art inconsistency | High | One illustrator, card template locked week 1 |
| Pay-to-win temptation | High | Written rule: no power in IAP crates. If we break it, we become every other cricket F2P |
| Flutter vignette looks cheap vs Real Cricket | Med | Don’t compete on realism; compete on *cards* |
| Play closed-test clock | Med | 12 testers locked before we call it “done” |
| Cricket calendar miss | Med | Ship slice anytime; *launch* on a window |

---

## 13. Recommendation

**Build the vertical slice on Flutter (widgets + a small Flame pitch). Do not hire, do not buy cricket licenses, do not start ads, do not clone Hitwicket.**

If after **losing a gully fight** you still tap retry (or the next stage) without being asked, continue to Alpha.

If not, this idea is also dead — and that is cheaper than a year of a mid cricket manager.

**Monetization can work** as a hybrid India F2P if (and only if) the run is sticky. The upside is a cricket-season live-ops game with diaspora eCPM on top. The realistic year-one win is **a few thousand dollars a month and a product you still want to open**. Anything above that is a hit, not a plan.

---

## 14. Key decisions

1. **Scrap the replay / Unity / Next.js 3D broadcast product.** Wrong genre, wrong team size, legal pain.
2. **Player-based cricket deckbuilder with a Shadow Fight act campaign**, not a permadeath roguelite and not a franchise manager. All-rounder via bat/bowl **stages**. Two card piles. 5–7 min fights. Gully-first. One ad-revive **per fight**.
3. **Flutter + widget UI + Flame vignette**, not Unity.
4. **F2P ads + IAP**, cosmetics and QoL, no power loot boxes.
5. **Android / Play first**, 12+ rating, no licensed marks.
6. **Launch on a cricket window**, not a random Tuesday.
7. **Kill at the slice**, not after a year of systems.

---

## 15. Decisions already made (2026-09-02)

1. **Ladder (updated):** **act-based campaign**, one stage at a time (Shadow Fight / ninja-act grammar). **Not** a permadeath whole-career run. Street → international is the map you keep.
2. **Combat identity:** you are an **all-rounder**. Cards mix **shots and balls**. v1 is not batting-only.
3. **Ads:** **one optional rewarded revive per fight**, then you retry the **stage** (you do not lose the act). Not premium-currency revives.
4. **First three minutes:** **gully night, tennis ball, sledging, reverse-sweep as a joke that works.** Culture first. Cards second. India-native.
5. **Node:** one **innings**, bat **or** bowl. Map tells you which. Not a full match per node.
6. **Saves:** **silent autosave after every stage.** Resume the campaign forever. Death is local to the fight.
7. **Reverse-sweep:** a **meme** — funny vignette, **bad expected value**, people slam it anyway. Personality, not EV.
8. **Hands:** **two piles** — Shot deck and Ball deck. Node picks which you draw from. (This is *not* a mixed hand; it is two games sharing relics/meta. Flagged in §16.)
9. **Enemy (stated):** **one named bowler**, intent = next ball. Portrait-scale. Bowl-node opponent still unspecified.
10. **Format:** **always T20-shaped.** International = nastier intents and better kits, not Test rules.
11. **All-rounder means map, not hand:** you take bat nodes *and* bowl nodes. Hands are never mixed. Relics/meta are the mix.
12. **Bowl node enemy:** **named batter with an innings bar.** Symmetric engine.
13. **Fight length:** **5–7 minutes.** Cut the fight if longer.
14. **Spine:** **Shadow Fight–style acts**, not a permadeath roguelite. One stage at a time. Indian-digestible.
15. **Energy:** **soft.** 5 match tickets / day. Refill with **ad or wait**. **Never paywall the story** — you can always progress, slowly.
16. **Economy:** power cards are **story**. Grind (dailies, challenges) → **coins → packs**. F2P can finish; it just takes time (more ad inventory).
17. **Packs:** chance at a **new power card you would also earn later in the story** (early, not exclusive). **Pity** required. Story remains a complete path. This is the gacha-adjacent line — keep it documented and tight.
18. **Campaign shape:** **Score! Hero numbered levels.** 12 chapters × 10. Every 10th level is a gate (gully cup, town selection, …, **World Cup final = 120**). Primary + 2 star missions. 20/30 stars to unlock the next chapter.

## 16. Open questions (need you)

1. **Street kid body:** boy / girl / pick-at-start / unstated.
2. **How Pune-specific is the gully?**
3. **Company:** personal Play account vs Pvt Ltd.
4. **Pity numbers** for story-early pack drops (e.g. guaranteed in N packs / cannot duplicate until the set is complete).
5. **Street kid body:** boy / girl / pick-at-start / unstated.
6. **How Pune-specific is the gully?**
7. **Company:** personal Play account vs Pvt Ltd.

---

## 17. Sources (planning, not audited financials)

- Flame engine / pub.dev 1.38.2 (Aug 2026); Flame GitHub (~10.8k stars)
- DEV: “Flutter Game Development in 2026”; Google I/O Flip as widget-only card game
- AppBrain Play rankings: Top Grossing Sports Games in India (15 Sep 2026)
- Appfigures: Real Cricket Play, Aug 2026 (~870k downloads, ~$75k net)
- Sensor Tower public publisher page: Hitwicket (~200k downloads, ~$90k last month)
- Sports Business Journal: Real Cricket × WCA likeness, 350M+ downloads (2024)
- PocketGamer / Eurogamer / AppMagic: Balatro mobile revenue path ($4.4M in two months; later ~$21.3M / 3.1M downloads)
- PocketGamer: Dice of Kalma 1M+ downloads (Sep 2026)
- Lightbox / India gaming market notes: 560M+ smartphones, cheap data, UPI, cricket calendar
- Glance × InMobi × AppsFlyer cricket-fan report (2025 season)
- cas.ai AdMob vs InMobi eCPM (India vs Tier-1, 2026)
- Segwise / SuccessMate AdMob game monetization guides (rewarded vs interstitial; India bands)
- Google Play Console Help: closed testing 12 testers / 14 days; India alternative billing (−4%)
- Testogethr / TestFi / Testers Community: 12-tester rule after Nov 2023 personal accounts; 20→12 in Dec 2024
- Google India billing blog; NCLAT / CCI Play billing context
- BW Marketing World: RMG ban impact on IPL ad revenue (2025 Act)

Figures are **planning ranges**. They are not a guarantee of SwitchedHit revenue.

---

*Prepared for internal use. The replay plan is retired. This is the game.*
