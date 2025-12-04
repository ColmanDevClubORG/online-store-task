// store.ts
// Homework - Online Store System
// ------------------------------------
// Instructions:
// - Add a type for every function parameter.
// - Add an explicit return type for every function (even if it is void).
// - Make sure the code compiles without TypeScript errors.

// ------------------------------------
// Interfaces
// ------------------------------------

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  tags: string[];
}

interface Store {
  storeName: string;
  products: Product[];
}

// ------------------------------------
// Store data (5 products)
// ------------------------------------

const store: Store = {
  storeName: "My Online Store",
  products: [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 80,
      inStock: true,
      tags: ["electronics", "mouse", "wireless"],
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 250,
      inStock: false,
      tags: ["electronics", "keyboard", "gaming"],
    },
    {
      id: 3,
      name: "USB-C Cable",
      price: 40,
      inStock: true,
      tags: ["electronics", "cable", "accessories"],
    },
    {
      id: 4,
      name: "Notebook",
      price: 20,
      inStock: true,
      tags: ["stationery", "paper", "office"],
    },
    {
      id: 5,
      name: "Gaming Headset",
      price: 300,
      inStock: true,
      tags: ["electronics", "gaming", "audio"],
    },
  ],
};

// ------------------------------------
// Shopping cart: array of product IDs
// ------------------------------------

const cart: number[] = [1, 3, 5];

// ------------------------------------
// Functions to implement
// ------------------------------------

function getAvailableProducts(
  store: Store /* : add type here */
): Product[] /* : add return types */ {

  return store.products.filter((product) => product.inStock);
}

function getProductsInPriceRange(
  store: Store /* : add type here */,
  minPrice: number /* : add type here */,
  maxPrice: number /* : add type here */
): Product[] /* : add return types */ {
  return store.products.filter((product) => product.price <= maxPrice && product.price >= minPrice)
}

function getProductsByTag(
  store: Store /* : add type here */,
  tag: string /* : add type here */
): Product[] /* : add return types */ {
  return store.products.filter((product) => product.tags.includes(tag))
}

function getAvailableProductsByTag(
   store: Store /* : add type here */,
  tag: string /* : add type here */
): Product[] /* : add return types */ {
  return store.products.filter((product) => product.inStock && product.tags.includes(tag))
}

function getCartProducts(
  store: Store /* : add type here */,
  cart: number[] /* : add type here */
): Product[] /* : add return types */ {
  return store.products.filter((product) => cart.includes(product.id))
}

function getCartTotalInStock(
  store: Store /* : add type here */,
  cart: number[] /* : add type here */
): number /* : add return types */ {
  return store.products.filter((product) => cart.includes(product.id) && product.inStock)
  .reduce((total, product) => total += product.price, 0);
}
