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

function getAvailableProducts(store : Store)  : Product[] {
  return store.products.filter(product => product.inStock);
}

function getProductsInPriceRange( store : Store , minPrice :number, maxPrice :number) : Product[]{
  return store.products.filter(product => product.price >= minPrice && product.price <= maxPrice) ;
}

function getProductsByTag( store : Store , tag : string[] ) : Product[] {
  return store.products.filter(product => tag.some(tg => product.tags.includes(tg)));
}

function getAvailableProductsByTag( store : Store , tag : string[] ) : Product[]{ 
  return store.products.filter(product => product.inStock && tag.some(tg => product.tags.includes(tg)));
}

function getCartProducts(store : Store , cart : number[] ) : Product[] {
  return cart.flatMap(productId => store.products.filter(product => product.id === productId));
}

function getCartTotalInStock( store : Store, cart : number[]) : number {
  let total = 0;
  for(const id of cart){
    const product = store.products.find(product => product.id === id && product.inStock);
    if(product && product.inStock){
      total += product.price;
    }
  }
  return total;
}
