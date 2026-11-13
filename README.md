# Quote Desk

A tiny quote tool for a made-up window-cleaning business.

> **Synthetic demonstration project** for a Workflow Workshop video about Claude Code and GitHub's MCP server.
> No real customers, data or business. Issues and pull requests here are part of the demo.

- `src/validate.ts`: checks a quote request before it is priced.
- `src/pricing.ts`: turns hours, rate and extras into a quote total.
- `src/reports/`: weekly summaries of quotes sent.
- `data/jobs/`: technician notes from past jobs (plain text).
- `docs/`: architecture notes and changelog.

TypeScript, run directly by Node (no build step, no dependencies).

    node src/cli.ts      # price the sample request
    node --test          # run the tests
