# GPT Wrapped (aka **Chat Wrapped**)

A playful, privacy-first “Spotify-Wrapped-style” recap of your year with AI assistants.  
Upload or connect your chat history, generate insights (top topics, streaks, late-night chats, emoji vibes, most-used prompts), and share tasteful, auto-generated recap cards.

---

## ✨ Features

- **Bring your own data**: Import exports from popular assistants (e.g., ChatGPT, Claude) or paste raw JSON/CSV.
- **Insight engine**: Compute usage stats (message counts, sessions, streaks), topic clustering, and prompt patterns.
- **Beautiful recap cards**: Auto-generated images suitable for social sharing.
- **Web + API**: Next.js front end and a lightweight Node/TypeScript server providing parsing and analytics APIs.
- **Privacy-first**: All processing can run locally; no third-party analytics by default.
- **TypeScript everywhere**: End-to-end types for safer iteration.

---

## 🧱 Monorepo Layout

gpt-wrapped/
├─ web/ # Next.js app (UI, pages/routes, charts, share cards)
├─ server/ # API (parsing, analytics, image/card rendering)
├─ .trunk/ # CI/linting/formatting configuration
├─ package.json # Root scripts (pnpm workspaces)
└─ pnpm-lock.yaml

yaml
Copy code

---

## 🚀 Quick Start

### Prereqs
- **Node.js** ≥ 18
- **pnpm** ≥ 8 (`npm i -g pnpm`)

### 1) Clone & install
```bash
git clone https://github.com/abccodes/gpt-wrapped
cd gpt-wrapped
pnpm install
2) Configure environment
Create:

server/.env

web/.env.local

Example:

bash
Copy code
# server/.env
PORT=4000
OPENAI_API_KEY=sk-...

# web/.env.local
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
3) Run dev servers
bash
Copy code
# in one terminal
pnpm --filter server dev

# in another terminal
pnpm --filter web dev
Web UI: http://localhost:3000

API: http://localhost:4000

🧩 How It Works
Import: User drops an export file or pastes raw JSON/CSV.

Normalize: Server converts various export formats into a common schema.

Analyze: Stats (counts, streaks), topic sketch (basic clustering), and prompt patterns are computed.

Render: Web generates visualizations; server can create a share card (PNG/SVG) on demand.

🛠️ Tech Stack
Web: Next.js + React + TypeScript + Tailwind/shadcn UI

Server: Node.js + TypeScript (Express/Fastify-style API)

Charts: Lightweight React charting library

Sharing: Server-side image rendering for recap cards

📦 Scripts
json
Copy code
{
  "scripts": {
    "dev": "pnpm -w run dev:all",
    "dev:all": "concurrently -n server,web -c blue,green \"pnpm --filter server dev\" \"pnpm --filter web dev\"",
    "build": "pnpm --filter server build && pnpm --filter web build",
    "start": "pnpm --filter server start & pnpm --filter web start",
    "lint": "pnpm -r lint",
    "format": "pnpm -r format"
  }
}
🔌 API Overview
bash
Copy code
GET  /health               # health check
POST /parse                # upload/exported chat data
POST /analyze              # compute stats & clusters
POST /render/recap         # generate share card (PNG/SVG)
Data shape:

ts
Copy code
type Message = {
  id: string;
  ts: string;
  role: 'user'|'assistant';
  text: string;
  model?: string;
  meta?: Record<string, any>;
};

type Analysis = {
  totals: { messages: number; sessions: number; daysActive: number; };
  streaks: { longest: number; current: number; };
  topHours: number[];
  topKeywords: { term: string; score: number; }[];
  emojis?: { emoji: string; count: number; }[];
};
📊 What You Get
Usage timeline & streaks

Most-used models & hours

Top prompt patterns & topics

Emoji/style fingerprint

Shareable recap card

🔐 Privacy
Data stays local unless you explicitly enable a cloud export.

Recap images are generated locally by default.

Telemetry is opt-in only.

🧪 Testing
bash
Copy code
pnpm -r test
pnpm -r typecheck
pnpm -r lint
📦 Deployment
Web: Vercel or any Node host

Server: Fly.io/Render/Heroku/EC2 or serverless adapters

Env: Same as local setup

🗺️ Roadmap
 One-click import for ChatGPT/Claude native exports

 More parsers (Slack, Notion AI)

 Advanced topic clustering & embeddings

 Multiple recap themes (light/dark/retro)

 Social share flows (copy-link, image download)

 Offline-only mode

🤝 Contributing
PRs welcome!

Fork & create a feature branch

Run pnpm -r lint && pnpm -r test

Open a PR with a clear description & screenshots

📄 License
MIT © Aidan Bayer-Calvert
