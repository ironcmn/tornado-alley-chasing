"use client";

import { useState } from "react";
import Image from "next/image";

export default function PhotoCarousel({
  photos,
}: {
  photos: { file: string; caption: string }[];
}) {
  const [index, setIndex] = useState(0);

  if (photos.length === 0) return null;
  const photo = photos[index];

  return (
    <div className="mt-6">
      <div className="relative h-64 w-full overflow-hidden rounded-[var(--radius)] border border-line bg-[var(--bg-void)] sm:h-80">
        <Image
          key={photo.file}
          src={`/images/chase-logs/${photo.file}`}
          alt={photo.caption || "Chase log photo"}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 700px"
        />
        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + photos.length) % photos.length)}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-[rgba(4,4,13,0.7)] text-lg text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % photos.length)}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-[rgba(4,4,13,0.7)] text-lg text-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              ›
            </button>
            <span className="absolute bottom-2 right-2 rounded-full bg-[rgba(4,4,13,0.7)] px-2.5 py-1 text-[0.7rem] text-muted backdrop-blur">
              {index + 1} / {photos.length}
            </span>
          </>
        )}
      </div>
      {photo.caption && (
        <p className="mt-2.5 text-center text-[0.82rem] italic text-muted">{photo.caption}</p>
      )}
      {photos.length > 1 && (
        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
          {photos.map((p, i) => (
            <button
              key={p.file}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-accent" : "w-1.5 bg-[var(--border-s)]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
