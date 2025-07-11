const catalog = [
  { id: 1, name: "Button Pack", price: 50 },
  { id: 2, name: "Collar", price: 120 },
  { id: 3, name: "Cuff", price: 80 },
  { id: 4, name: "Pocket", price: 60 }
];

let cart = [];


function displayCatalog() {
  console.log("Available Spare Parts:");
  catalog.forEach(product => {
    console.log(`${product.id}. ${product.name} - ₹${product.price}`);
  });
}

function addToCart(productId) {
  const product = catalog.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    console.log(`${product.name} added to cart.`);
  } else {
    console.log("Invalid Product ID.");
  }
}


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


displayCatalog();
addToCart(1); 
addToCart(3); 
showCart();
