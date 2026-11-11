import { useEffect, useState } from 'react';
import type { Product } from '../data/products';

interface CartItem {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
}

interface Props {
  products: Product[];
  checkoutEndpoint: string;
}

const CART_KEY = 'jimmys-cart';
const money = (n: number) => `$${n.toFixed(2).replace(/\.00$/, '')}`;
const sameLine = (i: CartItem, id: number, size: string, color: string) =>
  i.id === id && i.size === size && i.color === color;

export default function Store({ products, checkoutEndpoint }: Props) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [sizes, setSizes] = useState<Record<number, string>>({});
  const [colors, setColors] = useState<Record<number, string>>({});
  const [errors, setErrors] = useState<Record<number, string>>({});
  const [viewer, setViewer] = useState<{ product: Product; index: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState('');
  const [hydrated, setHydrated] = useState(false);

  // Keep the cart if the customer refreshes or comes back from the menu
  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      if (saved) setCart(JSON.parse(saved));
    } catch {}
    setHydrated(true);
  }, []);
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {}
  }, [cart, hydrated]);

  // Lightbox keyboard controls
  useEffect(() => {
    if (!viewer) return;
    const len = viewer.product.images.length;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setViewer(null);
      if (e.key === 'ArrowRight') setViewer((v) => v && { ...v, index: (v.index + 1) % len });
      if (e.key === 'ArrowLeft') setViewer((v) => v && { ...v, index: (v.index - 1 + len) % len });
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [viewer]);

  const addToCart = (product: Product) => {
    const size = sizes[product.id];
    const color = colors[product.id];
    if (!size || !color) {
      setErrors((e) => ({ ...e, [product.id]: !size ? 'Please select a size' : 'Please select a color' }));
      return;
    }
    setErrors((e) => ({ ...e, [product.id]: '' }));

    setCart((prev) => {
      if (prev.some((i) => sameLine(i, product.id, size, color))) {
        return prev.map((i) => (sameLine(i, product.id, size, color) ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [
        ...prev,
        {
          id: product.id,
          size,
          color,
          price: product.prices[size],
          name: `${product.name} – ${color} - ${size}`,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (item: CartItem) =>
    setCart((prev) => prev.filter((i) => !sameLine(i, item.id, item.size, item.color)));

  const updateQuantity = (item: CartItem, qty: number) => {
    if (!Number.isFinite(qty) || qty < 1) return;
    setCart((prev) => prev.map((i) => (sameLine(i, item.id, item.size, item.color) ? { ...i, quantity: qty } : i)));
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const itemCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  const checkout = async () => {
    if (cart.length === 0) return;
    setLoading(true);
    setCheckoutError('');
    // Open the tab synchronously so pop-up blockers (esp. iOS Safari) don't block it after the await
    const tab = window.open('', '_blank');
    try {
      const res = await fetch(checkoutEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart }),
      });
      const data = await res.json();
      if (!res.ok || !data.checkoutUrl) throw new Error('No checkout URL');
      if (tab) tab.location.href = data.checkoutUrl;
      else window.location.href = data.checkoutUrl;
    } catch {
      tab?.close();
      setCheckoutError('Checkout failed. Please try again, or call us at (860) 274-3223.');
    } finally {
      setLoading(false);
    }
  };

  const selectClass =
    'w-full rounded border border-gray-300 bg-white px-2 py-1.5 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand';

  return (
    <div className="mx-auto grid max-w-6xl gap-8 p-6 md:grid-cols-3">
      {/* Products */}
      <div className="grid gap-6 sm:grid-cols-2 md:col-span-2">
        {products.map((product) => {
          const priceList = Object.values(product.prices);
          const from = Math.min(...priceList);
          return (
            <article key={product.id} className="flex flex-col justify-between rounded-lg border border-gray-200 p-4 shadow transition hover:shadow-lg">
              <button
                type="button"
                className="text-left"
                onClick={() => setViewer({ product, index: 0 })}
                aria-label={`View photos of ${product.name}`}
              >
                <img src={product.images[0]} alt={product.name} className="mb-3 h-48 w-full rounded object-contain" loading="lazy" />
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-700">
                  {from === Math.max(...priceList) ? money(from) : `From ${money(from)}`}
                </p>
                <p className="mt-1 text-xs italic text-gray-500">Tap to view more photos</p>
              </button>

              <div className="mt-4 space-y-2">
                <label className="sr-only" htmlFor={`size-${product.id}`}>Size</label>
                <select
                  id={`size-${product.id}`}
                  className={selectClass}
                  value={sizes[product.id] ?? ''}
                  onChange={(e) => setSizes({ ...sizes, [product.id]: e.target.value })}
                >
                  <option value="">Select size</option>
                  {Object.entries(product.prices).map(([size, price]) => (
                    <option key={size} value={size}>
                      {size} – {money(price)}
                    </option>
                  ))}
                </select>

                <label className="sr-only" htmlFor={`color-${product.id}`}>Color</label>
                <select
                  id={`color-${product.id}`}
                  className={selectClass}
                  value={colors[product.id] ?? ''}
                  onChange={(e) => setColors({ ...colors, [product.id]: e.target.value })}
                >
                  <option value="">Select color</option>
                  {product.colors.map((color) => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>

                {errors[product.id] && <p className="text-sm text-brand">{errors[product.id]}</p>}

                <button
                  type="button"
                  className="mt-1 w-full rounded bg-brand px-4 py-2 text-white transition hover:bg-brand-dark"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Cart */}
      <aside className="flex h-fit flex-col rounded-lg border border-gray-200 p-4 shadow md:sticky md:top-44">
        <h2 className="mb-4 text-xl font-bold">
          Cart {itemCount > 0 && <span className="text-base font-normal text-gray-500">({itemCount})</span>}
        </h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <div className="flex-1 space-y-2">
            {cart.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="flex items-center justify-between gap-2 border-b border-gray-200 pb-2">
                <div>
                  <p>{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {money(item.price)} × {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    inputMode="numeric"
                    className="w-16 rounded border border-gray-300 px-1 py-0.5 text-center"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item, parseInt(e.target.value, 10))}
                    aria-label={`Quantity for ${item.name}`}
                  />
                  <button
                    type="button"
                    className="px-1 font-bold text-brand hover:text-brand-dark"
                    onClick={() => removeFromCart(item)}
                    aria-label={`Remove ${item.name}`}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <p className="font-bold">Total: {money(total)}</p>
              <p className="text-xs text-gray-500">Pickup only at Jimmy's of Watertown</p>
              <button
                type="button"
                className="mt-2 flex w-full items-center justify-center rounded bg-green-600 px-4 py-2 text-white transition hover:bg-green-700 disabled:opacity-70"
                onClick={checkout}
                disabled={loading}
              >
                {loading ? (
                  <svg className="size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-label="Loading">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                ) : (
                  'Checkout'
                )}
              </button>
              {checkoutError && <p className="mt-2 text-sm text-brand">{checkoutError}</p>}
            </div>
          </div>
        )}
      </aside>

      {/* Image viewer */}
      {viewer && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${viewer.product.name} photos`}
          onClick={(e) => e.target === e.currentTarget && setViewer(null)}
        >
          <img
            src={viewer.product.images[viewer.index]}
            alt={viewer.product.name}
            className="max-h-[90vh] max-w-[90vw] select-none object-contain"
            draggable={false}
          />
          <button type="button" className="absolute right-6 top-5 text-3xl font-bold text-white transition-transform hover:scale-110" onClick={() => setViewer(null)} aria-label="Close">
            ✕
          </button>
          {viewer.product.images.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-5 rounded-full px-3 py-2 text-5xl text-white transition hover:bg-black/70"
                onClick={() => setViewer((v) => v && { ...v, index: (v.index - 1 + v.product.images.length) % v.product.images.length })}
                aria-label="Previous photo"
              >
                ❮
              </button>
              <button
                type="button"
                className="absolute right-5 rounded-full px-3 py-2 text-5xl text-white transition hover:bg-black/70"
                onClick={() => setViewer((v) => v && { ...v, index: (v.index + 1) % v.product.images.length })}
                aria-label="Next photo"
              >
                ❯
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
