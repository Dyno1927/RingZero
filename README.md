# Ring 0

Systems programming, explained from the metal up.

Ring 0 (RingZero) is my technical documentation site and reference guide for C and C++ internals, memory architecture, toolchains, and OS/hardware interfaces. Static site built with Astro + Starlight, deployed on Cloudflare Pages.

## Why I'm Building This

Most online C and C++ tutorials either stop at basic syntax or gloss over real memory models and UB. Ring 0 is designed to be a long-term, high-accuracy technical reference:

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

- Node.js 22.23.4 or newer
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

### Run with Docker

Build and serve the production static site through Nginx:

```bash
docker build --build-arg SITE_URL=https://docs.example.com -t ring0 .
docker run --rm -p 8080:8080 ring0
```

Open <http://localhost:8080>.

GitHub Actions runs formatting, the static build, and a production Docker image build for pushes to `main`/`dev` and pull requests.

Set `SITE_URL` to the canonical deployed origin when building for deployment. Astro uses it to generate canonical page URLs and the sitemap; it is intentionally unset by default until Ring 0's public domain is confirmed. For Docker builds, pass it as a build argument as shown above.

## Structure

```
Ring-0/
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
