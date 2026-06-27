# codrocket-dashboard

## MCP servers

This repo registers the [fal.ai](https://fal.ai) MCP server for Claude Code via
project-scoped config in [`.mcp.json`](./.mcp.json).

The `Authorization` header references the `FAL_KEY` environment variable rather
than embedding a secret in the repo. Before using the server, export your key:

```bash
export FAL_KEY="your-fal-key"
```

Then approve the server when prompted (project MCP servers require a one-time
approval): run `claude` and accept `fal-ai`, or check its status with
`claude mcp get fal-ai`.
