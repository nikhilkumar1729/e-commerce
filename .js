const catalog = [
  { id: 1, name: "Button Pack", price: 50 },
  { id: 2, name: "Collar", price: 120 },
  { id: 3, name: "Cuff", price: 80 },
  { id: 4, name: "Pocket", price: 60 }
];

let cart = [];

// Display products
function displayCatalog() {
  console.log("Available Spare Parts:");
  catalog.forEach(product => {
    console.log(`${product.id}. ${product.name} - ₹${product.price}`);
  });
}

// Add product to cart
function addToCart(productId) {
  const product = catalog.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    console.log(`${product.name} added to cart.`);
  } else {
    console.log("Invalid Product ID.");
  }
}

// Show cart contents
function showCart() {
  if (cart.length === 0) {
    console.log("Your cart is empty.");
    return;
  }
  console.log("Your Cart:");
  cart.forEach((item, idx) => {
    console.log(`${idx + 1}. ${item.name} - ₹${item.price}`);
  });
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  console.log(`Total: ₹${total}`);
}

// Example usage:
displayCatalog();
addToCart(1); // Add Button Pack
addToCart(3); // Add Cuff
showCart();
