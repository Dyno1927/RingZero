# [name]

Systems programming, explained from the metal up.

[name] is my technical documentation site and reference guide for C and C++ internals, memory architecture, toolchains, and OS/hardware interfaces. Static site built with Astro + Starlight, deployed on Cloudflare Pages.

## Why I'm Building This

Most online C and C++ tutorials either stop at basic syntax or gloss over real memory models and UB. [name] is designed to be a long-term, high-accuracy technical reference:
- Accurate depth over page count: no hand-waving around undefined behavior or compiler-specific quirks.
- Real, buildable projects with progressive disclosure (hidden reference solutions).
- Clean, fast, zero-fluff static reference without LMS gimmicks, logins, or trackers.

## Tech Stack

- **Framework:** [Astro](https://astro.build) + [@astrojs/starlight](https://starlight.astro.build)
- **Content:** MDX + TypeScript + Shiki syntax highlighting
- **Styling:** Custom Starlight theme (Graphite/Teal dark, Paper/Teal light)
- **Deployment:** Cloudflare Pages (static output)

## Getting Started

### Prerequisites

- Node.js (v20+ or v22+)
- npm

### Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build production static output
npm run build

# Preview build locally
npm run preview
```

## Structure

```
[name]/
├── Docs/             # Specs, mockups, design notes, and screenshots
├── src/
│   ├── assets/       # Static assets, diagrams, and images
│   ├── content/
│   │   └── docs/     # MDX documentation pages
│   └── styles/       # Custom theme CSS (graphite/paper + teal)
├── public/           # Static public files
├── astro.config.mjs  # Astro & Starlight configuration
└── package.json
```

## License

MIT
