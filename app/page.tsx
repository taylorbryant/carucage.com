import AudioFileIcon from "./_icons/audio-file";
import CassetteTapeIcon from "./_icons/cassette-tape";
import CompactDiscIcon from "./_icons/compact-disc";
import VinylRecordIcon from "./_icons/vinyl-record";

export default function Home() {
  return (
    <>
      <div className="bg-blue-700 text-white">
        <header className="max-w-xl w-full mx-auto px-6 py-12">
          <h1 className="font-bold mb-2">Carucage Records</h1>
          <p>
            Carucage Records was an independent record label based out of St.
            Louis, MO and Memphis, TN. Two cousins, Cory Robinson and Taylor
            Bryant, operated the label from 2011 to 2015, releasing 10 cassette
            tapes, 9 vinyl records, 1 CD, and 3 digital releases. You can
            download most of our releases for free on{" "}
            <a className="underline" href="https://music.carucage.com">
              Bandcamp
            </a>
            . We no longer sell directly (which may change in the future), but
            you may be able to find our physical releases on{" "}
            <a
              href="https://www.discogs.com/label/390082-Carucage-Records"
              className="underline"
            >
              Discogs
            </a>
            .
          </p>
        </header>
      </div>

      <main className="max-w-xl w-full mx-auto px-6 py-12">
        <p className="font-bold mb-2">Physical releases</p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <CassetteTapeIcon className="flex-shrink-0" />
            CAR-001: Bigfoot - Folklore & Myth
          </li>
          <li className="flex items-center gap-2">
            <CassetteTapeIcon className="flex-shrink-0" />
            CAR-002: Adaje / Shark Bait - Split
          </li>
          <li className="flex items-center gap-2">
            <VinylRecordIcon className="flex-shrink-0" />
            CAR-003: Perfect Future / Wits End - Split
          </li>
          <li className="flex items-center gap-2">
            <CassetteTapeIcon className="flex-shrink-0" />
            CAR-004: The Anarchist Pizza Society / Circle Circle - Split
          </li>
          <li className="flex items-center gap-2">
            <VinylRecordIcon className="flex-shrink-0" />
            CAR-005: Innards / Two Knights - Split
          </li>
          <li className="flex items-center gap-2">
            <VinylRecordIcon className="flex-shrink-0" />
            CAR-006: Adaje / Lizards Have Personalities - Split
          </li>
          <li className="flex items-center gap-2">
            <VinylRecordIcon className="flex-shrink-0" />
            CAR-007: Innards / The Reptilian - Split
          </li>
          <li className="flex items-center gap-2">
            <CassetteTapeIcon className="flex-shrink-0" />
            CAR-008: Dads - Brush Your Teeth, Again ;)
          </li>
          <li className="flex items-center gap-2">
            <CassetteTapeIcon className="flex-shrink-0" />
            CAR-009: Family Might - Floor Connections
          </li>
          <li className="flex items-center gap-2">
            <CassetteTapeIcon className="flex-shrink-0" />
            CAR-010: Tubetops - S/T
          </li>
          <li className="flex items-center gap-2">
            <CassetteTapeIcon className="flex-shrink-0" />
            CAR-011: Loud? - S/T
          </li>
          <li className="flex items-center gap-2">
            <CassetteTapeIcon className="flex-shrink-0" />
            CAR-012: Sailor Heart - Since the Apple Orchard
          </li>
          <li className="flex items-center gap-2">
            <VinylRecordIcon className="flex-shrink-0" />
            CAR-013: Foxing / Send Away Stranger - Split
          </li>
          <li className="flex items-center gap-2">
            <CassetteTapeIcon className="flex-shrink-0" />
            CAR-014: Old Gray / Girl Scouts - Split
          </li>
          <li className="flex items-center gap-2">
            <VinylRecordIcon className="flex-shrink-0" />
            CAR-016: Gryscl / Coma Regalia - Split
          </li>
          <li className="flex items-center gap-2">
            <VinylRecordIcon className="flex-shrink-0" />
            CAR-017: Joie De Vivre / The Please & Thank Yous / Emo Side Project
            - Split
          </li>
          <li className="flex items-center gap-2">
            <VinylRecordIcon className="flex-shrink-0" />
            CAR-018: Alta - Places
          </li>
          <li className="flex items-center gap-2">
            <CompactDiscIcon className="flex-shrink-0" />
            CAR-019: Shark Bait - Phantom Feelings
          </li>
          <li className="flex items-center gap-2">
            <CassetteTapeIcon className="flex-shrink-0" />
            CAR-020: Gryscl / Weakness - Split
          </li>
          <li className="flex items-center gap-2">
            <VinylRecordIcon className="flex-shrink-0" />
            CAR-021: Yusuke / Delos - Split
          </li>
        </ul>

        <p className="mt-12 font-bold mb-2">Digital releases</p>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <AudioFileIcon className="flex-shrink-0" /> DIGI-001: Bigfoot - Bird
            Song Demos
          </li>
          <li className="flex items-center gap-2">
            <AudioFileIcon className="flex-shrink-0" /> DIGI-002: Close to Me -
            Complete Discography
          </li>
          <li className="flex items-center gap-2">
            <AudioFileIcon className="flex-shrink-0" /> DIGI-003: Various
            Artists - 420 rpm
          </li>
        </ul>
      </main>
    </>
  );
}
