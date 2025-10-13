import { useState, useEffect } from "react";

// Each product has its own size tiers + prices
const products = [
  {
    id: 1,
    name: "Short-Sleeve Tee",
    prices: { S: 22, M: 22, L: 22, XL: 22, "2XL": 27, "3XL": 32 },
    colors: ["Black", "Navy"],
    images: ["/images/TshirtFront.png", "/images/TshirtBack.png"],
  },
  {
    id: 2,
    name: "Long-Sleeve Tee",
    prices: { S: 29, M: 29, L: 29, XL: 29, "2XL": 34, "3XL": 39 },
    colors: ["Black", "Navy"],
    images: ["/images/LongsleeveFront.png", "/images/LongsleeveBack.png"],
  },
  {
    id: 3,
    name: "Light Weight Hoodie",
    prices: { S: 39, M: 39, L: 39, XL: 39, "2XL": 44, "3XL": 49 },
    colors: ["Black", "Navy"],
    images: ["/images/HoodieFront.png", "/images/HoodieBack.png"],
  },
  {
    id: 4,
    name: "Heavy Weight Hoodie",
    prices: { S: 45, M: 45, L: 45, XL: 45, "2XL": 50, "3XL": 55 },
    colors: ["Black", "Navy"],
    images: ["/images/HoodieFront.png", "/images/HoodieBack.png"],
  },
  {
    id: 4,
    name: "Zip Up Hoodie",
    prices: { S: 50, M: 50, L: 50, XL: 50, "2XL": 55, "3XL": 60 },
    colors: ["Black", "Navy"],
    images: ["/images/ZipUpFront.png", "/images/ZipUpBack.png"],
  },
];

export default function StorePage() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedColors, setSelectedColors] = useState({}); // ✅ new state
  const [imageIndex, setImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setImageIndex(0);
  }, [selectedProduct]);

  // ✅ Add item to cart
  const addToCart = (product, size, color) => {
    if (!size) return alert("Please select a size!");
    if (!color) return alert("Please select a color!");

    const existing = cart.find(
      (i) => i.id === product.id && i.size === size && i.color === color
    );
    const price = product.prices[size];
    
    if (existing) {
      setCart(
        cart.map((i) =>
          i.id === product.id && i.size === size && i.color === color
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          size,
          color,
          price,
          name: `${product.name} – ${color} - ${size}`, // ✅ include color and size in item name
          quantity: 1,
        },
      ]);
    }
  };

  // Remove item from cart
  const removeFromCart = (id, size, color) => {
    setCart(cart.filter((i) => !(i.id === id && i.size === size && i.color === color)));
  };

  // Update quantity
  const updateQuantity = (id, size, color, qty) => {
    if (qty < 1) return;
    setCart(
      cart.map((i) =>
        i.id === id && i.size === size && i.color === color
          ? { ...i, quantity: qty }
          : i
      )
    );
  };

  // Checkout
  const checkout = async () => {
    if (cart.length === 0) return alert("Cart is empty!");
    setLoading(true);

    const res = await fetch("https://l6wkux1rph.execute-api.us-east-1.amazonaws.com/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    });

    const data = await res.json();
    if (data.checkoutUrl) {
      window.open(data.checkoutUrl, "_blank");
    } else {
      alert("Checkout failed");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-8">
      {/* Products */}
      <div className="md:col-span-2 grid gap-6 sm:grid-cols-2">
        {products.map((product) => {
          const price = Object.values(product.prices);
          return (
            <div
              key={product.id}
              className="border rounded-lg shadow p-4 flex flex-col justify-between cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelectedProduct(product)}
            >
              <div>
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-48 object-contain rounded mb-3"
                />
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-700">${price[0]}</p>
                <p className="text-xs text-gray-500 italic mt-1">
                  Tap to view more photos
                </p>
              </div>

              {/* ✅ Size and Color selection */}
              <div className="mt-4 space-y-2">
                {/* Size */}
                <select
                  className="border rounded px-2 py-1 w-full"
                  value={selectedSizes[product.id] || ""}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) =>
                    setSelectedSizes({
                      ...selectedSizes,
                      [product.id]: e.target.value,
                    })
                  }
                >
                  <option value="">Select size</option>
                  {Object.keys(product.prices).map((size) => (
                    <option key={size} value={size}>
                      {size} – ${product.prices[size]}
                    </option>
                  ))}
                </select>

                {/* ✅ Color */}
                <select
                  className="border rounded px-2 py-1 w-full"
                  value={selectedColors[product.id] || ""}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) =>
                    setSelectedColors({
                      ...selectedColors,
                      [product.id]: e.target.value,
                    })
                  }
                >
                  <option value="">Select color</option>
                  {product.colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>

                <button
                  className="mt-3 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(
                      product,
                      selectedSizes[product.id],
                      selectedColors[product.id]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart */}
      <div className="border rounded-lg shadow p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <div className="flex-1 space-y-2">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size}-${item.color}`}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p>{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.size} – {item.color} – ${item.price} × {item.quantity}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    className="w-16 border rounded px-1 py-0.5 text-center"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(
                        item.id,
                        item.size,
                        item.color,
                        parseInt(e.target.value)
                      )
                    }
                  />
                  <button
                    className="text-red-600 font-bold"
                    onClick={() =>
                      removeFromCart(item.id, item.size, item.color)
                    }
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-2">
              <p className="font-bold">
                Total: $
                {cart.reduce((sum, i) => sum + i.price * i.quantity, 0)}
              </p>
              <button
                className="mt-1 w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center justify-center"
                onClick={checkout}
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                ) : (
                  "Checkout"
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/70 z-[9999]"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-5 right-6 text-white text-3xl font-bold z-50 hover:scale-110 transition-transform"
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>
            <button
              className="absolute left-5 text-white text-5xl z-50 px-3 py-2 rounded-full hover:bg-black/70 transition"
              onClick={() =>
                setImageIndex((prev) =>
                  prev === 0
                    ? selectedProduct.images.length - 1
                    : prev - 1
                )
              }
            >
              ❮
            </button>
            <img
              src={selectedProduct.images[imageIndex]}
              alt={selectedProduct.name}
              className="w-full h-full object-contain select-none"
              draggable="false"
            />
            <button
              className="absolute right-5 text-white text-5xl z-50 px-3 py-2 rounded-full hover:bg-black/70 transition"
              onClick={() =>
                setImageIndex((prev) =>
                  prev === selectedProduct.images.length - 1 ? 0 : prev + 1
                )
              }
            >
              ❯
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
