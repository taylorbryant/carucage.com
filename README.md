# Carucage Records

Carucage Records was an independent record label based out of St. Louis, MO and Memphis, TN.

## Release catalog

The catalog lives in `app/releases.ts`. Each entry includes its original catalog
number, format, local cover image, and Bandcamp link. Vinyl entries also specify
their size: Alta's *Places* is 12-inch; the other eight records are 7-inch.
Artwork is stored in
`public/releases`; `public/releases/SOURCES.md` records its source pages.

Cassette cases display only the cover artwork. Optional `artworkCrop` positions
and zoom levels frame wraparound scans and square covers without changing the
source images. Release details stay below each case.

The shelf supports filtering by format, mouse and keyboard interaction, and tap
selection on touchscreens. CSS renders the cassette cases, sliding records, and CD case;
animations respect the visitor's reduced-motion preference. All releases and
listening links are also present in the initial HTML.

## Development

Use Bun 1.4.2 as the package manager and Node.js 22 (`nvm use`) for Next.js.
`bun.lock` is the dependency lockfile.

```sh
bun install --frozen-lockfile
bun run dev
```

Run `bun run lint`, `bun run typecheck`, and `bun run build` to validate changes.
Use `bun run start` to serve the production build.

TypeScript 7 supplies the `tsc` command through the `@typescript/native` package alias.
The `typescript` alias supplies Microsoft's TypeScript 6 compatibility API for
ESLint and other tools. ESLint stays on the latest 9.x release because Next.js's
lint plugins do not yet declare support for ESLint 10. Node types track the
Node 22 runtime specified in `.nvmrc`.
