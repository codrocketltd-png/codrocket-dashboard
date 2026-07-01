---
name: open-generative-ai
description: >-
  Set up, run, and use Open Generative AI — a free, open-source alternative to
  commercial AI video platforms for generating images, videos, and audio with
  200+ models (github.com/Anil-matcha/Open-Generative-AI). Use when the user
  wants to install, clone, build, self-host, or work with Open Generative AI,
  its Electron desktop app, its Next.js hosted web version, or any of its
  studios (Text-to-Image, Image-to-Image, Text-to-Video, Image-to-Video, Lip
  Sync, Cinema, Marketing, Workflows, Agents, Design Agent, Apps, MCP & CLI).
---

# Open Generative AI

Open Generative AI is a free, open-source, self-hostable AI media studio for
generating **images, videos, and audio** using 200+ models — no content filters
and no subscription required. It ships as both a **Next.js** hosted web app and
an **Electron** desktop app (with optional local inference).

- Repository: https://github.com/Anil-matcha/Open-Generative-AI
- Hosted (no install): https://muapi.ai/open-generative-ai
- License: MIT

> Note: This is a full application, not a bundled tool. This skill documents how
> to obtain, run, build, and use it. Nothing here runs automatically — follow
> the relevant section for the user's goal.

## Prerequisites

- **Node.js v18+**
- A **Muapi.ai access key** for the hosted models — get one at
  https://muapi.ai/access-keys. (Local inference in the desktop app can run some
  models without it.)

## Install & set up (from source)

The repo uses git submodules for the workflow + agent packages, so clone
recursively:

```bash
# Clone with submodules (required for workflow + agent packages)
git clone --recurse-submodules https://github.com/Anil-matcha/Open-Generative-AI.git
cd Open-Generative-AI

# If you already cloned without submodules:
git submodule update --init --recursive

# Install and build workspace packages
npm run setup
```

## Run

**Hosted web version (Next.js):**
```bash
npm run dev        # dev server at http://localhost:3000
```

**Desktop app (Electron, dev):**
```bash
npm run electron:dev
```

**Production web build:**
```bash
npm run build
npm run start
```

## Build desktop installers

```bash
npm run electron:build        # macOS (DMG)
npm run electron:build:win    # Windows (NSIS)
npm run electron:build:linux  # Linux (AppImage + DEB)
npm run electron:build:all    # all platforms
```

Prebuilt installers (macOS Intel/Apple Silicon, Windows, Linux) are also on the
repo's GitHub Releases page — link the user there if they don't want to build.

## Environment variables

- `OPEN_GENERATIVE_AI_LOCAL_AI_DIR` — custom directory for local model weights
  (desktop / local-inference use).

Set the Muapi.ai access key per the app's in-UI settings or the repo's
`.env`/config docs (check the repo's current README for the exact variable name,
as it may change).

## Studios & features

Text-to-Image, Image-to-Image, Text-to-Video, Image-to-Video, Lip Sync, Cinema,
Marketing, Workflows, Agents, Design Agent, Apps, and MCP & CLI access.

## Fastest path (no install)

If the user just wants to try it, point them to the hosted version at
https://muapi.ai/open-generative-ai (free account, no setup).

## Tips

- If `npm run setup` fails on missing package files, the submodules are almost
  certainly not initialized — run `git submodule update --init --recursive`.
- The README on GitHub is the source of truth; verify commands there if a step
  fails, since the project evolves.
