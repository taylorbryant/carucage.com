import AudioFileIcon from "./_icons/audio-file";
import CassetteTapeIcon from "./_icons/cassette-tape";
import CompactDiscIcon from "./_icons/compact-disc";
import VinylRecordIcon from "./_icons/vinyl-record";

const ReleaseIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="h-[20px] flex items-center flex-shrink-0">{children}</div>
);

export default function Home() {
  return (
    <main className="max-w-lg w-full mx-auto px-6 py-16 md:py-24">
      <header className="mb-16">
        <h1 className="text-lg font-semibold tracking-tight mb-4">
          Carucage Records
        </h1>
        <p className="text-sm leading-relaxed text-muted">
          Independent record label based out of St. Louis, MO and Memphis, TN.
          Two cousins, Cory Robinson and Taylor Bryant, operated the label from
          2011 to 2015, releasing 10 cassette tapes, 9 vinyl records, 1 CD, and
          3 digital releases.
        </p>
        <div className="flex gap-4 mt-4">
          <a
            className="text-sm text-muted hover:text-foreground transition-colors"
            href="https://music.carucage.com"
          >
            Bandcamp &rarr;
          </a>
          <a
            className="text-sm text-muted hover:text-foreground transition-colors"
            href="https://www.discogs.com/label/390082-Carucage-Records"
          >
            Discogs &rarr;
          </a>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted mb-6">
          Physical
        </h2>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <CassetteTapeIcon className="text-muted" />
            </ReleaseIcon>
            CAR-001: Bigfoot - Folklore & Myth
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <CassetteTapeIcon className="text-muted" />
            </ReleaseIcon>
            CAR-002: Adaje / Shark Bait - Split
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <VinylRecordIcon className="text-muted" />
            </ReleaseIcon>
            CAR-003: Perfect Future / Wits End - Split
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <CassetteTapeIcon className="text-muted" />
            </ReleaseIcon>
            CAR-004: The Anarchist Pizza Society / Circle Circle - Split
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <VinylRecordIcon className="text-muted" />
            </ReleaseIcon>
            CAR-005: Innards / Two Knights - Split
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <VinylRecordIcon className="text-muted" />
            </ReleaseIcon>
            CAR-006: Adaje / Lizards Have Personalities - Split
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <VinylRecordIcon className="text-muted" />
            </ReleaseIcon>
            CAR-007: Innards / The Reptilian - Split
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <CassetteTapeIcon className="text-muted" />
            </ReleaseIcon>
            CAR-008: Dads - Brush Your Teeth, Again ;)
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <CassetteTapeIcon className="text-muted" />
            </ReleaseIcon>
            CAR-009: Family Might - Floor Connections
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <CassetteTapeIcon className="text-muted" />
            </ReleaseIcon>
            CAR-010: Tubetops - S/T
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <CassetteTapeIcon className="text-muted" />
            </ReleaseIcon>
            CAR-011: Loud? - S/T
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <CassetteTapeIcon className="text-muted" />
            </ReleaseIcon>
            CAR-012: Sailor Heart - Since the Apple Orchard
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <VinylRecordIcon className="text-muted" />
            </ReleaseIcon>
            CAR-013: Foxing / Send Away Stranger - Split
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <CassetteTapeIcon className="text-muted" />
            </ReleaseIcon>
            CAR-014: Old Gray / Girl Scouts - Split
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <VinylRecordIcon className="text-muted" />
            </ReleaseIcon>
            CAR-016: Gryscl / Coma Regalia - Split
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <VinylRecordIcon className="text-muted" />
            </ReleaseIcon>
            CAR-017: Joie De Vivre / The Please & Thank Yous / Emo Side Project
            - Split
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <VinylRecordIcon className="text-muted" />
            </ReleaseIcon>
            CAR-018: Alta - Places
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <CompactDiscIcon className="text-muted" />
            </ReleaseIcon>
            CAR-019: Shark Bait - Phantom Feelings
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <CassetteTapeIcon className="text-muted" />
            </ReleaseIcon>
            CAR-020: Gryscl / Weakness - Split
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <VinylRecordIcon className="text-muted" />
            </ReleaseIcon>
            CAR-021: Yusuke / Delos - Split
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted mb-6">
          Digital
        </h2>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <AudioFileIcon className="text-muted" />
            </ReleaseIcon>
            DIGI-001: Bigfoot - Bird Song Demos
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <AudioFileIcon className="text-muted" />
            </ReleaseIcon>
            DIGI-002: Close to Me - Complete Discography
          </li>
          <li className="flex items-center gap-3">
            <ReleaseIcon>
              <AudioFileIcon className="text-muted" />
            </ReleaseIcon>
            DIGI-003: Various Artists - 420 rpm
          </li>
        </ul>
      </section>
    </main>
  );
}
