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

const cart = [1, 3, 5];

// ------------------------------------
// Functions to implement
// ------------------------------------

const getAvailableProducts = () => {
  const availableProducts: Product[] = store.products.filter(product => product.inStock);
  return availableProducts;
}

const getProductsInPriceRange = (store: Store, minPrice: number, maxPrice: number): Product[] => {
  const productsInRange: Product[] = store.products.filter(product => product.price >= minPrice && product.price <= maxPrice);
  return productsInRange;
}

const getProductsByTag = (store:Store ,tag: string ): Product[] =>{
  const productsByTag : Product[] = store.products.filter(product => product.tags.includes(tag));
  return productsByTag;
}

const getAvailableProductsByTag =( store: Store, tag: string ): Product[] => {
  const availableProductsByTag: Product[] = store.products.filter(product => product.inStock && product.tags.includes(tag));
  return availableProductsByTag;
}

const getCartProducts = (store: Store, cart: number[]): Product[] => {
  const cartProducts: Product[] = store.products.filter(product => cart.includes(product.id));
  return cartProducts;
}

function getCartTotalInStock(store: Store , cart: number[]) : number {
  const cartProducts: Product[] = getCartProducts(store, cart);
  let total = 0;
  cartProducts.forEach(product => {
    if(product.inStock){
      total += product.price;
    }
  });
  
  return total;

}
