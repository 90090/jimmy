import { useEffect, useRef, useState } from 'react';

export interface Review {
  author: string;
  rating: number;
  text: string;
}

interface Props {
  reviews: Review[];
  /** Auto-advance interval in ms. Set to 0 to disable. */
  interval?: number;
}

const Stars = ({ rating }: { rating: number }) => {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <span className="text-xl tracking-wider text-[#fbbc04]" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(full)}
      {half && '½'}
    </span>
  );
};

export default function ReviewCarousel({ reviews, interval = 7000 }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const count = reviews.length;

  const prev = () => setIndex((i) => (i === 0 ? count - 1 : i - 1));
  const next = () => setIndex((i) => (i === count - 1 ? 0 : i + 1));

  useEffect(() => {
    if (!interval || paused || count < 2) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [interval, paused, count]);

  if (count === 0) return null;

  return (
    <div
      className="relative mx-auto my-5 w-full max-w-5xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const dx = touchStartX.current - e.changedTouches[0].clientX;
        if (dx > 50) next();
        if (dx < -50) prev();
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer reviews"
    >
      <div className="mx-10 overflow-hidden md:mx-14">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {reviews.map((review, i) => (
            <figure
              key={i}
              className="flex min-h-56 w-full shrink-0 flex-col items-center justify-center gap-2 rounded border border-gray-200 bg-white p-6"
              aria-hidden={i !== index}
            >
              <figcaption className="font-bold">{review.author}</figcaption>
              <Stars rating={review.rating} />
              <blockquote className="max-w-3xl text-gray-700">{review.text}</blockquote>
            </figure>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-700 transition hover:text-brand"
        aria-label="Previous review"
      >
        <svg className="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-700 transition hover:text-brand"
        aria-label="Next review"
      >
        <svg className="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
      </button>

      <div className="mt-4 flex justify-center gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`size-2.5 rounded-full transition ${i === index ? 'bg-brand' : 'bg-gray-300 hover:bg-gray-400'}`}
            aria-label={`Show review ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  );
}
