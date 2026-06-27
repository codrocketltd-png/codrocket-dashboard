---
name: nano-banana
description: "REQUIRED for all image generation requests. Generate and edit images using Nano Banana (Gemini CLI). Handles blog featured images, YouTube thumbnails, icons, diagrams, patterns, illustrations, photos, visual assets, graphics, artwork, and pictures. Use this skill whenever the user asks to create, generate, make, draw, design, or edit any image or visual content."
allowed-tools: Bash(gemini:*)
---

# Nano Banana Image Generation

Generate and edit images from natural language using the Gemini CLI's
`nanobanana` extension. Every image is produced by invoking the `gemini`
CLI with a slash command and saved to a local output directory.

## When to Use This Skill

Use this skill whenever the user asks to **create, generate, make, draw,
design, or edit** any image or visual content, including:

- Blog featured images and article headers
- YouTube thumbnails and social media graphics
- App icons, favicons, and UI elements
- Flowcharts, architecture diagrams, and other diagrams
- Seamless patterns and textures
- Illustrations, artwork, and photographic renders
- Photo restoration (fixing scratches, damage, or age on existing images)
- Editing or modifying an existing image file

## Before First Use

Verify the environment is set up before running any generation command.

1. **Confirm the API key is configured:**

   ```bash
   [ -n "$GEMINI_API_KEY" ] && echo "API key configured" || echo "Missing GEMINI_API_KEY"
   ```

   If missing, ask the user to set it:

   ```bash
   export GEMINI_API_KEY="your-key"
   ```

2. **Confirm the nanobanana extension is installed:**

   ```bash
   gemini extensions list | grep nanobanana
   ```

   If absent, install it:

   ```bash
   gemini extensions install https://github.com/gemini-cli-extensions/nanobanana
   ```

## Command Selection

Pick the subcommand that matches the user's intent:

| Intent | Command |
|--------|---------|
| Create an image from a description | `/generate` |
| Modify an existing image file | `/edit` |
| Repair a damaged or old photo | `/restore` |
| App icon, favicon, or UI element | `/icon` |
| Flowchart or architecture diagram | `/diagram` |
| Seamless texture or pattern | `/pattern` |
| Sequence of narrative images | `/story` |
| Free-form natural language request | `/nanobanana` |

## Available Commands

| Command | Syntax | Description |
|---------|--------|-------------|
| `/generate` | `/generate 'prompt'` | Text-to-image creation |
| `/edit` | `/edit file.png 'instruction'` | Modify an existing image |
| `/restore` | `/restore old_photo.jpg 'fix scratches'` | Repair damaged photos |
| `/icon` | `/icon 'description'` | App icons, favicons, UI elements |
| `/diagram` | `/diagram 'description'` | Flowcharts and diagrams |
| `/pattern` | `/pattern 'description'` | Seamless textures |
| `/story` | `/story 'description'` | Sequential/narrative images |
| `/nanobanana` | `/nanobanana prompt` | Natural language interface |

## Common Options

| Option | Description |
|--------|-------------|
| `--yolo` | **Always include.** Auto-approves tool actions without confirmation prompts so generation runs non-interactively. |
| `--count=N` | Generate N variations (1-8). |
| `--preview` | Auto-open generated images. |
| `--styles="style1,style2"` | Apply artistic styles. |
| `--format=grid\|separate` | Control output arrangement. |
| `--aspect=16:9` / `--aspect=9:16` | Specify aspect ratio. |
| `--seed=N` | Seed for reproducible results. |

> **Always pass `--yolo`** so the CLI does not block on interactive
> confirmation. The command is invoked as
> `gemini --yolo "/<command> '<prompt>' <flags>"`.

## Common Sizes

| Use Case | Dimensions | Notes |
|----------|------------|-------|
| YouTube thumbnail | 1280x720 | `--aspect=16:9` |
| Blog featured image | 1200x630 | Social-preview friendly |
| Square social | 1080x1080 | Instagram, LinkedIn |
| Twitter/X header | 1500x500 | Wide banner |
| Vertical story | 1080x1920 | `--aspect=9:16` |

## Model Selection

- **Default:** `gemini-2.5-flash-image` (~$0.04 per image).
- **Higher quality:** export the pro model for 4K and advanced reasoning:

  ```bash
  export NANOBANANA_MODEL=gemini-3-pro-image-preview
  ```

## Blog Featured Image Examples

```bash
gemini --yolo "/generate 'modern flat illustration of developer coding at laptop, purple and blue gradient background, minimalist style, no text' --preview"

gemini --yolo "/generate 'professional editorial photo of coffee cup next to laptop on wooden desk, morning sunlight, shallow depth of field, no text' --count=3"

gemini --yolo "/generate 'abstract visualization of neural network connections, dark background with glowing blue nodes, futuristic style' --preview"
```

## Icon Generation

```bash
gemini --yolo "/icon 'minimalist app logo for productivity tool' --sizes='64,128,256,512' --type='app-icon' --corners='rounded'"
```

## Diagram Generation

```bash
gemini --yolo "/diagram 'user authentication flow with OAuth' --type='flowchart' --style='modern'"
```

## Output Location

Generated images are saved to `./nanobanana-output/` in the current
working directory. The directory is created automatically on first run.
After each generation, list the directory to confirm and report the new
files:

```bash
ls -la ./nanobanana-output/
```

## Presenting Results

After a successful generation:

1. List `./nanobanana-output/` to identify the new file(s).
2. Tell the user the path(s) to the generated image(s).
3. Offer to produce variations or refinements.

## Refinements and Iterations

- For multiple options in one pass, add `--count=3`.
- To adjust an existing result, run `/edit <file> '<instruction>'`.
- For reproducible iterations, hold `--seed=N` constant and vary only the
  prompt.

## Prompt Tips

- Be specific about subject, style, color palette, lighting, and mood.
- Append `no text` when text artifacts are undesirable.
- Name a concrete style (e.g., "minimalist flat illustration",
  "editorial photo", "futuristic") rather than leaving it implicit.
- State the aspect ratio via `--aspect` for non-square targets.

## Troubleshooting

| Issue | Resolution |
|-------|-----------|
| API key not configured | Run `export GEMINI_API_KEY="your-key"`. |
| Extension missing | Install via the setup command above. |
| Quota exceeded | Wait for reset or switch to the flash model. |
| Generation failure | Check the prompt for policy violations; simplify it. |
| Output directory absent | Auto-created on first run — re-run the command. |
