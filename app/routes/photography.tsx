import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/photography";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Photography — Sam Mathew" },
    { name: "description", content: "Photography by Sam Mathew — mostly cars, for now." },
  ];
}

const COUNT = 30;
const photos = Array.from(
  { length: COUNT },
  (_, i) => `/images/photography/car-${String(i + 1).padStart(2, "0")}.jpg`,
);

export default function Photography() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) => setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  return (
    <section className="min-h-screen bg-paper py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-base uppercase tracking-[0.18em] text-muted mb-5">
            // Photography
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight text-ink leading-[1.05] mb-5">
            Through the lens.
          </h1>
          <p className="text-xl text-muted mb-14 max-w-2xl">
            Frames I&rsquo;ve collected over the years. Mostly cars, for now &mdash; hover for
            color, click to open.
          </p>

          {/* Masonry gallery */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance]">
            {photos.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setOpen(i)}
                className="group mb-4 block w-full overflow-hidden rounded-sm border border-line break-inside-avoid"
                aria-label={`Open photo ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`Car photo ${i + 1}`}
                  loading="lazy"
                  className="w-full grayscale transition duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-[1.02]"
                />
              </button>
            ))}
          </div>

          <div className="mt-16">
            <Link
              to="/#explore"
              className="font-mono text-base uppercase tracking-widest text-muted hover:text-ink transition-colors"
            >
              &larr; Back home
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-6 md:p-12"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={photos[open]}
            alt={`Car photo ${open + 1}`}
            className="max-h-full max-w-full rounded-sm object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Controls */}
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-6 right-6 font-mono text-sm uppercase tracking-widest text-line/70 hover:text-paper"
          >
            Close &times;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 font-mono text-3xl text-line/60 hover:text-paper"
          >
            &larr;
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 font-mono text-3xl text-line/60 hover:text-paper"
          >
            &rarr;
          </button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-widest text-line/50">
            {open + 1} / {photos.length}
          </p>
        </div>
      )}
    </section>
  );
}
