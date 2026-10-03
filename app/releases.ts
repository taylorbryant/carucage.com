export type ReleaseFormat = "Cassette" | "Vinyl" | "CD" | "Digital";

export type Release = {
  id: string;
  artist: string;
  title: string;
  artwork: string;
  href: string;
} & (
  | { format: "Vinyl"; vinylSize: 7 | 12 }
  | { format: Exclude<ReleaseFormat, "Vinyl">; vinylSize?: never }
);

export const releases: Release[] = [
  {
    "id": "CAR-001",
    "artist": "Bigfoot",
    "title": "Folklore & Myth",
    "format": "Cassette",
    "artwork": "/releases/car-001.jpg",
    "href": "https://music.carucage.com/album/folklore-myth"
  },
  {
    "id": "CAR-002",
    "artist": "Adaje / Shark Bait",
    "title": "Split",
    "format": "Cassette",
    "artwork": "/releases/car-002.jpg",
    "href": "https://music.carucage.com/album/adaje-shark-bait-split"
  },
  {
    "id": "CAR-003",
    "artist": "Perfect Future / Wits End",
    "title": "Split",
    "format": "Vinyl",
    "artwork": "/releases/car-003.jpg",
    "href": "https://perfectfuture.bandcamp.com/album/perfect-future-wits-end-split",
    "vinylSize": 7
  },
  {
    "id": "CAR-004",
    "artist": "The Anarchist Pizza Society / Circle Circle",
    "title": "Split",
    "format": "Cassette",
    "artwork": "/releases/car-004.jpg",
    "href": "https://theanarchistpizzasociety.bandcamp.com/album/the-anarchist-pizza-society-circle-circle-split"
  },
  {
    "id": "CAR-005",
    "artist": "Innards / Two Knights",
    "title": "Split",
    "format": "Vinyl",
    "artwork": "/releases/car-005.jpg",
    "href": "https://music.carucage.com/album/no-scum-allowed",
    "vinylSize": 7
  },
  {
    "id": "CAR-006",
    "artist": "Adaje / Lizards Have Personalities",
    "title": "Split",
    "format": "Vinyl",
    "artwork": "/releases/car-006.jpg",
    "href": "https://music.carucage.com/album/adaje-lizards-have-personalities-split",
    "vinylSize": 7
  },
  {
    "id": "CAR-007",
    "artist": "Innards / The Reptilian",
    "title": "Split",
    "format": "Vinyl",
    "artwork": "/releases/car-007.jpg",
    "href": "https://music.carucage.com/album/innards-the-reptilian-split",
    "vinylSize": 7
  },
  {
    "id": "CAR-008",
    "artist": "Dads",
    "title": "Brush Your Teeth, Again ;)",
    "format": "Cassette",
    "artwork": "/releases/car-008.jpg",
    "href": "https://music.carucage.com/album/brush-your-teeth-again"
  },
  {
    "id": "CAR-009",
    "artist": "Family Might",
    "title": "Floor Connections",
    "format": "Cassette",
    "artwork": "/releases/car-009.jpg",
    "href": "https://music.carucage.com/album/floor-connections"
  },
  {
    "id": "CAR-010",
    "artist": "Tubetops",
    "title": "S/T",
    "format": "Cassette",
    "artwork": "/releases/car-010.jpg",
    "href": "https://music.carucage.com/album/self-titled-ep"
  },
  {
    "id": "CAR-011",
    "artist": "Loud?",
    "title": "S/T",
    "format": "Cassette",
    "artwork": "/releases/car-011.jpg",
    "href": "https://music.carucage.com/album/self-titled"
  },
  {
    "id": "CAR-012",
    "artist": "Sailor Heart",
    "title": "Since the Apple Orchard",
    "format": "Cassette",
    "artwork": "/releases/car-012.jpg",
    "href": "https://mysailorheart.bandcamp.com/album/since-the-apple-orchard"
  },
  {
    "id": "CAR-013",
    "artist": "Foxing / Send Away Stranger",
    "title": "Split",
    "format": "Vinyl",
    "artwork": "/releases/car-013.jpg",
    "href": "https://foxingtheband.bandcamp.com/album/foxing-send-away-stranger-split",
    "vinylSize": 7
  },
  {
    "id": "CAR-014",
    "artist": "Old Gray / Girl Scouts",
    "title": "Split",
    "format": "Cassette",
    "artwork": "/releases/car-014.jpg",
    "href": "https://oldgray.bandcamp.com/album/old-gray-girl-scouts-split"
  },
  {
    "id": "CAR-016",
    "artist": "Gryscl / Coma Regalia",
    "title": "Split",
    "format": "Vinyl",
    "artwork": "/releases/car-016.jpg",
    "href": "https://greyscaletn.bandcamp.com/album/greyscale-coma-regalia-split-7",
    "vinylSize": 7
  },
  {
    "id": "CAR-017",
    "artist": "Joie De Vivre / The Please & Thank Yous / Emo Side Project",
    "title": "Split",
    "format": "Vinyl",
    "artwork": "/releases/car-017.jpg",
    "href": "https://music.carucage.com/album/joie-de-vivre-the-please-thank-yous-emo-side-project-split",
    "vinylSize": 7
  },
  {
    "id": "CAR-018",
    "artist": "Alta",
    "title": "Places",
    "format": "Vinyl",
    "artwork": "/releases/car-018.jpg",
    "href": "https://alta.bandcamp.com/album/places",
    "vinylSize": 12
  },
  {
    "id": "CAR-019",
    "artist": "Shark Bait",
    "title": "Phantom Feelings",
    "format": "CD",
    "artwork": "/releases/car-019.jpg",
    "href": "https://music.carucage.com/album/phantom-feelings"
  },
  {
    "id": "CAR-020",
    "artist": "Gryscl / Weakness",
    "title": "Split",
    "format": "Cassette",
    "artwork": "/releases/car-020.jpg",
    "href": "https://greyscaletn.bandcamp.com/album/greyscale-weakness-split-tape"
  },
  {
    "id": "CAR-021",
    "artist": "Yusuke / Delos",
    "title": "Split",
    "format": "Vinyl",
    "artwork": "/releases/car-021.jpg",
    "href": "https://yusuke.bandcamp.com/album/split-7-with-delos-2",
    "vinylSize": 7
  },
  {
    "id": "DIGI-001",
    "artist": "Bigfoot",
    "title": "Bird Song Demos",
    "format": "Digital",
    "artwork": "/releases/digi-001.jpg",
    "href": "https://music.carucage.com/album/bird-song-demos"
  },
  {
    "id": "DIGI-002",
    "artist": "Close to Me",
    "title": "Complete Discography",
    "format": "Digital",
    "artwork": "/releases/digi-002.jpg",
    "href": "https://music.carucage.com/album/complete-discography"
  },
  {
    "id": "DIGI-003",
    "artist": "Various Artists",
    "title": "420 rpm",
    "format": "Digital",
    "artwork": "/releases/digi-003.jpg",
    "href": "https://music.carucage.com/album/420-rpm"
  }
];
