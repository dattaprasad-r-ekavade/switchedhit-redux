# SwitchedHit Replay — Next.js spike

Web validation of `SwitchedHit_Replay_Plan.docx`. Unity remains the Android client; this app proves the product loop, clip map, HUD, highlight skip, catalogue, and scorecard can ship as a site.

```bash
npm install
npm run dev
npm run build
```

- `/` catalogue + CTA
- `/library` search
- `/competitions/[slug]`
- `/matches/[id]` SEO match page
- `/matches/[id]/play` 9-clip stadium player (1x/2x/4x, overs, next 4/6/W)
- `/matches/[id]/scorecard`
- `/sim-retired` old management sim notice
- `/settings` Cricsheet credit + clip table
- `GET /api/index` `GET /api/matches/[id]` `GET /api/search?q=`
