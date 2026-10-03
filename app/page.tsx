import ReleaseCatalog from "./release-catalog";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-8 md:py-20">
      <header className="mb-12 max-w-lg">
        <h1 className="mb-5 flex items-center gap-3 font-serif text-2xl font-medium tracking-tight">
          <span className="inline-block size-3 shrink-0 rounded-full bg-blue-600" />
          Carucage Records
        </h1>
        <p className="max-w-md text-base/7 text-pretty text-muted sm:text-sm/6">
          Independent record label from St. Louis, MO and Memphis, TN, operated
          by cousins Cory Robinson and Taylor Bryant from 2011 to 2015.
        </p>
        <div className="mt-4 flex gap-5">
          <a className="inline-flex min-h-12 items-center text-base text-blue-600 hover:underline sm:text-sm" href="https://music.carucage.com">
            Bandcamp
          </a>
          <a className="inline-flex min-h-12 items-center text-base text-blue-600 hover:underline sm:text-sm" href="https://www.discogs.com/label/390082-Carucage-Records">
            Discogs
          </a>
        </div>
      </header>

      <ReleaseCatalog />
    </main>
  );
}
