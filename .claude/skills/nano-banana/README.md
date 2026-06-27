# Nano Banana

A Claude Code skill for generating and editing images using the Gemini
CLI's `nanobanana` extension.

Adapted from [kkoppenhaver/cc-nano-banana](https://github.com/kkoppenhaver/cc-nano-banana).

## Features

- Text-to-image generation
- Image editing
- Photo restoration
- Icon generation
- Diagram creation
- Pattern generation
- Story / sequential images

## Prerequisites

1. **Gemini CLI** — `npm install -g @google/gemini-cli`
2. **Gemini API key** — get one at [Google AI Studio](https://aistudio.google.com/),
   then `export GEMINI_API_KEY="your-api-key"`
3. **nanobanana extension** —
   `gemini extensions install https://github.com/gemini-cli-extensions/nanobanana`

## Usage

Once the skill is in place, Claude Code uses it automatically when you ask
for image generation, e.g.:

- "Generate a blog header image for a post about machine learning"
- "Create a YouTube thumbnail for a coding tutorial"
- "Make an app icon for a productivity tool"
- "Draw a flowchart showing user authentication"
- "Edit this image to remove the background"

See [`SKILL.md`](./SKILL.md) for the full command reference, options,
sizing guidelines, and troubleshooting.

## Output

Generated images are saved to `./nanobanana-output/` in the current
working directory.

## License

MIT
