import { useCallback, useEffect, useRef, useState } from 'react';

export interface GalleryPhoto {
  thumb: string;
  full: string;
  width: number;
  height: number;
  alt: string;
}

interface Props {
  photos: GalleryPhoto[];
}

export default function PhotoGallery({ photos }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const touchStartX = useRef(0);
  const count = photos.length;

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => setOpenIndex((i) => (i === null ? i : (i + 1) % count)), [count]);
  const prev = useCallback(() => setOpenIndex((i) => (i === null ? i : (i - 1 + count) % count)), [count]);

  // Keyboard controls + lock page scroll while the lightbox is open
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openIndex, close, next, prev]);

  const current = openIndex !== null ? photos[openIndex] : null;

  return (
    <>
      {/* Masonry layout with CSS columns (replaces @mui/lab Masonry) */}
      <div className="columns-2 gap-2 sm:columns-3 lg:columns-4">
        {photos.map((photo, i) => (
          <button
            key={photo.thumb}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="mb-2 block w-full break-inside-avoid overflow-hidden rounded shadow transition hover:shadow-lg focus-visible:outline-2 focus-visible:outline-brand"
            aria-label={`Open photo ${i + 1} of ${count}`}
          >
            <img
              src={photo.thumb}
              width={photo.width}
              height={photo.height}
              alt={photo.alt}
              loading="lazy"
              decoding="async"
              className="h-auto w-full transition duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={(e) => e.target === e.currentTarget && close()}
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            const dx = touchStartX.current - e.changedTouches[0].clientX;
            if (dx > 50) next();
            if (dx < -50) prev();
          }}
        >
          <img
            key={current.full}
            src={current.full}
            alt={current.alt}
            className="animate-zoom-in max-h-[80vh] max-w-[90vw] border border-black object-contain shadow-[0_0_10px_rgba(0,0,0,0.5)] md:max-w-[80vw]"
          />

          <button type="button" onClick={close} className="absolute right-4 top-4 p-2 text-4xl leading-none text-white hover:text-gray-300" aria-label="Close">
            &times;
          </button>
          <button type="button" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-4xl text-brand hover:text-red-400 md:left-4" aria-label="Previous photo">
            &#10094;
          </button>
          <button type="button" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-4xl text-brand hover:text-red-400 md:right-4" aria-label="Next photo">
            &#10095;
          </button>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80">
            {openIndex! + 1} / {count}
          </p>
        </div>
      )}
    </>
  );
}
