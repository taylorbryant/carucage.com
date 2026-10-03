"use client";

import { useState } from "react";
import ReleaseArtwork from "./release-artwork";
import { releases, type ReleaseFormat } from "./releases";
import styles from "./release-catalog.module.css";

const filters: { label: string; value: ReleaseFormat | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Tapes", value: "Cassette" },
  { label: "Vinyl", value: "Vinyl" },
  { label: "CD", value: "CD" },
  { label: "Digital", value: "Digital" },
];

export default function ReleaseCatalog() {
  const [format, setFormat] = useState<ReleaseFormat | "All">("All");
  const [selected, setSelected] = useState<string | null>(null);
  const visibleReleases = format === "All" ? releases : releases.filter((release) => release.format === format);

  return (
    <section aria-labelledby="catalog-heading">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 id="catalog-heading" className="text-xs font-medium uppercase tracking-widest text-muted">The catalog</h2>
        <p className="text-xs text-muted">Pick something off the shelf.</p>
      </div>

      <div className="mt-4 grid grid-cols-5 gap-1 border-y border-border py-2 sm:flex sm:flex-wrap" role="group" aria-label="Filter releases by format">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            aria-pressed={format === filter.value}
            aria-controls="release-shelf"
            className="flex min-h-12 cursor-pointer flex-col items-center justify-center gap-0.5 rounded-sm px-1 text-sm text-muted hover:text-foreground aria-pressed:bg-black/5 aria-pressed:text-foreground sm:flex-row sm:gap-2 sm:px-3"
            onClick={() => {
              setFormat(filter.value);
              setSelected(null);
            }}
          >
            {filter.label}
            <span className="font-mono text-[11px] tabular-nums">
              {filter.value === "All" ? releases.length : releases.filter((release) => release.format === filter.value).length}
            </span>
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {visibleReleases.length} {format === "All" ? "" : `${format.toLowerCase()} `}releases shown.
      </p>

      <ul id="release-shelf" role="list" className="mt-6 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 sm:gap-y-12">
        {visibleReleases.map((release, index) => (
          <li key={release.id} className={styles.release}>
            <button
              type="button"
              className={styles.artworkButton}
              data-format={release.format}
              aria-pressed={selected === release.id}
              aria-label={`Pick up ${release.artist} — ${release.title}, ${release.format === "Vinyl" ? `${release.vinylSize}-inch vinyl` : release.format}, ${release.id}`}
              onClick={() => setSelected((current) => current === release.id ? null : release.id)}
            >
              <ReleaseArtwork release={release} eager={index < 2} />
            </button>
            <div className="mt-5 flex items-baseline justify-between gap-3 text-xs text-muted">
              <span className="font-mono">{release.id}</span>
              <span>{release.format === "Vinyl" ? `${release.vinylSize}″ Vinyl` : release.format}</span>
            </div>
            <h3 className="mt-2 text-base/6 font-medium text-pretty sm:text-sm/5">{release.artist}</h3>
            <p className="mt-1 text-base/6 text-muted sm:text-sm/5">{release.title}</p>
            <a
              href={release.href}
              className="mt-2 inline-flex min-h-12 items-center gap-1 text-base text-blue-600 underline-offset-4 hover:underline sm:text-sm"
              aria-label={`Listen to ${release.artist} — ${release.title} on Bandcamp`}
            >
              Listen <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
