// Merch for the Store page. Images live in /public/images/.
// `prices` keys double as the size list (in display order).
export interface Product {
  id: number;
  name: string;
  prices: Record<string, number>;
  colors: string[];
  images: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Short-Sleeve Tee',
    prices: { S: 22, M: 22, L: 22, XL: 22, '2XL': 27, '3XL': 32 },
    colors: ['Black', 'Navy'],
    images: ['/images/TshirtFront.png', '/images/TshirtBack.png'],
  },
  {
    id: 2,
    name: 'Long-Sleeve Tee',
    prices: { S: 29, M: 29, L: 29, XL: 29, '2XL': 34, '3XL': 39 },
    colors: ['Black', 'Navy'],
    images: ['/images/LongSleeveFront.png', '/images/LongsleeveBack.png'],
  },
  {
    id: 3,
    name: 'Light Weight Hoodie',
    prices: { S: 39, M: 39, L: 39, XL: 39, '2XL': 44, '3XL': 49 },
    colors: ['Black', 'Navy'],
    images: ['/images/HoodieFront.png', '/images/HoodieBack.png'],
  },
  {
    id: 4,
    name: 'Heavy Weight Hoodie',
    prices: { S: 45, M: 45, L: 45, XL: 45, '2XL': 50, '3XL': 55 },
    colors: ['Black', 'Navy'],
    images: ['/images/HoodieFront.png', '/images/HoodieBack.png'],
  },
  {
    id: 5, // was a duplicate id: 4, which collided with the Heavy Weight Hoodie in the cart
    name: 'Zip Up Hoodie',
    prices: { S: 50, M: 50, L: 50, XL: 50, '2XL': 55, '3XL': 60 },
    colors: ['Black', 'Navy'],
    images: ['/images/ZipUpFront.png', '/images/ZipUpBack.png'],
  },
];
