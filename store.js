// store.ts
// Homework - Online Store System
// ------------------------------------
// Instructions:
// - Add a type for every function parameter.
// - Add an explicit return type for every function (even if it is void).
// - Make sure the code compiles without TypeScript errors.
// ------------------------------------
// Store data (5 products)
// ------------------------------------
var store = {
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
var cart = [1, 3, 5];
// ------------------------------------
// Functions to implement
// ------------------------------------
function getAvailableProducts(store) {
    return store.products.filter(function (p) { return p.inStock; });
}
function getProductsInPriceRange(store, minPrice, maxPrice) {
    return store.products.filter(function (p) { return p.price <= maxPrice && p.price >= minPrice; });
}
function getProductsByTag(store, tag) {
    return store.products.filter(function (p) { return p.tags.indexOf(tag) !== -1; });
}
function getAvailableProductsByTag(store, tag) {
    return getProductsByTag(store, tag).filter(function (p) { return p.inStock; });
}
function getCartProducts(store, cart) {
    return store.products.filter(function (p) { return cart.indexOf(p.id) !== -1; });
}
function getCartTotalInStock(store, cart) {
    return getCartProducts(store, cart)
        .filter(function (p) { return p.inStock; })
        .reduce(function (sum, p) { return sum + p.price; }, 0);
}
