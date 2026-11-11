# Jimmy's of Watertown — Astro site

Astro + Tailwind CSS v4, with React only where the page needs state in the browser.


## React islands

- `ReviewCarousel.tsx` — home page reviews (`client:visible`)
- `PhotoGallery.tsx` — about page masonry gallery + lightbox (`client:visible`)
- `Store.tsx` — cart and Stripe/Lambda checkout (`client:load`)

