import Image from "next/image";
import type { Release } from "./releases";
import styles from "./release-catalog.module.css";

export default function ReleaseArtwork({ release, eager = false }: { release: Release; eager?: boolean }) {
  const cover = (
    <Image
      src={release.artwork}
      alt=""
      width={700}
      height={700}
      sizes="(max-width: 639px) 260px, 240px"
      loading={eager ? "eager" : "lazy"}
      className={styles.cover}
    />
  );

  if (release.format === "Cassette") {
    return (
      <span className={styles.cassetteCase} aria-hidden="true">
        <span className={styles.caseInsert}>
          <span className={styles.caseArtwork}>{cover}</span>
          <span className={styles.caseCaption}>
            <span className={styles.caseArtist}>{release.artist}</span>
            <span className={styles.caseTitle}>{release.title}</span>
            <span className={styles.caseCatalog}>{release.id}</span>
          </span>
        </span>
        <span className={styles.caseSpine}>CARUCAGE RECORDS · {release.id}</span>
        <span className={styles.caseLid} />
      </span>
    );
  }

  if (release.format === "Vinyl") {
    return (
      <span className={styles.record} data-vinyl-size={release.vinylSize} aria-hidden="true">
        <span className={styles.vinyl}>
          <span className={styles.recordLabel}>
            {cover}
            <span className={styles.spindle} />
          </span>
        </span>
        <span className={styles.sleeve}>{cover}</span>
      </span>
    );
  }

  if (release.format === "CD") {
    return (
      <span className={styles.cd} aria-hidden="true">
        <span className={styles.compactDisc}><span className={styles.cdHub} /></span>
        <span className={styles.jewelCase}>
          <span className={styles.cdSpine} />
          {cover}
        </span>
      </span>
    );
  }

  return <span className={styles.digital} aria-hidden="true">{cover}</span>;
}
