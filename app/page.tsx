const releases = [
  { id: "CAR-001", artist: "Bigfoot", title: "Folklore & Myth", format: "Cassette" },
  { id: "CAR-002", artist: "Adaje / Shark Bait", title: "Split", format: "Cassette" },
  { id: "CAR-003", artist: "Perfect Future / Wits End", title: "Split", format: "Vinyl" },
  { id: "CAR-004", artist: "The Anarchist Pizza Society / Circle Circle", title: "Split", format: "Cassette" },
  { id: "CAR-005", artist: "Innards / Two Knights", title: "Split", format: "Vinyl" },
  { id: "CAR-006", artist: "Adaje / Lizards Have Personalities", title: "Split", format: "Vinyl" },
  { id: "CAR-007", artist: "Innards / The Reptilian", title: "Split", format: "Vinyl" },
  { id: "CAR-008", artist: "Dads", title: "Brush Your Teeth, Again ;)", format: "Cassette" },
  { id: "CAR-009", artist: "Family Might", title: "Floor Connections", format: "Cassette" },
  { id: "CAR-010", artist: "Tubetops", title: "S/T", format: "Cassette" },
  { id: "CAR-011", artist: "Loud?", title: "S/T", format: "Cassette" },
  { id: "CAR-012", artist: "Sailor Heart", title: "Since the Apple Orchard", format: "Cassette" },
  { id: "CAR-013", artist: "Foxing / Send Away Stranger", title: "Split", format: "Vinyl" },
  { id: "CAR-014", artist: "Old Gray / Girl Scouts", title: "Split", format: "Cassette" },
  { id: "CAR-016", artist: "Gryscl / Coma Regalia", title: "Split", format: "Vinyl" },
  { id: "CAR-017", artist: "Joie De Vivre / The Please & Thank Yous / Emo Side Project", title: "Split", format: "Vinyl" },
  { id: "CAR-018", artist: "Alta", title: "Places", format: "Vinyl" },
  { id: "CAR-019", artist: "Shark Bait", title: "Phantom Feelings", format: "CD" },
  { id: "CAR-020", artist: "Gryscl / Weakness", title: "Split", format: "Cassette" },
  { id: "CAR-021", artist: "Yusuke / Delos", title: "Split", format: "Vinyl" },
];

const digitalReleases = [
  { id: "DIGI-001", artist: "Bigfoot", title: "Bird Song Demos" },
  { id: "DIGI-002", artist: "Close to Me", title: "Complete Discography" },
  { id: "DIGI-003", artist: "Various Artists", title: "420 rpm" },
];

export default function Home() {
  return (
    <main className="max-w-xl w-full mx-auto px-6 py-16 md:py-24">
      <header className="mb-20">
        <h1
          className="flex items-center gap-3 text-2xl font-medium tracking-tight mb-5"
          style={{ fontFamily: "'Newsreader', Georgia, serif" }}
        >
          <span className="inline-block w-3 h-3 rounded-full bg-blue-600 flex-shrink-0" />
          Carucage Records
        </h1>
        <p className="text-sm leading-relaxed text-muted max-w-md text-pretty">
          Independent record label from St. Louis, MO and Memphis, TN, operated
          by cousins Cory Robinson and Taylor Bryant from 2011 to 2015.
        </p>
        <div className="flex gap-5 mt-5">
          <a
            className="text-sm text-muted hover:text-foreground transition-colors"
            href="https://music.carucage.com"
          >
            Bandcamp
          </a>
          <a
            className="text-sm text-muted hover:text-foreground transition-colors"
            href="https://www.discogs.com/label/390082-Carucage-Records"
          >
            Discogs
          </a>
        </div>
      </header>

      <section className="mb-20">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted mb-4">
          Physical
        </h2>
        <div className="border-t border-border">
          {releases.map((r) => (
            <div
              key={r.id}
              className="flex items-baseline justify-between gap-4 py-2.5 border-b border-border"
            >
              <div className="flex items-baseline gap-3 min-w-0">
                <span className="text-xs text-muted font-mono flex-shrink-0">
                  {r.id}
                </span>
                <span className="text-sm truncate">
                  {r.artist}
                  <span className="text-muted italic"> &mdash; {r.title}</span>
                </span>
              </div>
              <span className="text-xs text-muted flex-shrink-0">
                {r.format}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted mb-4">
          Digital
        </h2>
        <div className="border-t border-border">
          {digitalReleases.map((r) => (
            <div
              key={r.id}
              className="flex items-baseline gap-3 py-2.5 border-b border-border"
            >
              <span className="text-xs text-muted font-mono flex-shrink-0">
                {r.id}
              </span>
              <span className="text-sm">
                {r.artist}
                <span className="text-muted italic"> &mdash; {r.title}</span>
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
