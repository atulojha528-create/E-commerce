// sample product data
const PRODUCTS = [
  {
    id: 1,
    name: "Product A",
    price: 299,
    image: "data:image/jpeg;base64,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",
    description: "This is product A."
  },
  {
    id: 2,
    name: "Product B",
    price: 499,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    description: "This is product B."
  },
  {
    id: 3,
    name: "Product C",
    price: 199,
    image: "data:image/jpeg;base64,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",
    description: "This is product C."
  }
];

// cart in memory (browser session)
let cart = {};

// Save cart to localStorage so across page reloads
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function loadCart() {
  const data = localStorage.getItem("cart");
  if (data) {
    cart = JSON.parse(data);
  }
}

// Add a product to cart
function addToCart(productId) {
  if (cart[productId]) {
    cart[productId] += 1;
  } else {
    cart[productId] = 1;
  }
  saveCart();
  alert("Added to cart");
  updateCartCount();
}

// Remove a product (all) from cart
function removeFromCart(productId) {
  delete cart[productId];
  saveCart();
  renderCart();
  updateCartCount();
}

// Change quantity
function changeQuantity(productId, qty) {
  if (qty <= 0) {
    removeFromCart(productId);
  } else {
    cart[productId] = qty;
  }
  saveCart();
  renderCart();
  updateCartCount();
}

// Compute total price
function cartTotal() {
  let total = 0;
  for (const pid in cart) {
    const prod = PRODUCTS.find(p => p.id == pid);
    if (prod) {
      total += prod.price * cart[pid];
    }
  }
  return total;
}

// Render cart page
function renderCart() {
  loadCart();
  const container = document.getElementById("cart-list");
  container.innerHTML = "";

  for (const pid in cart) {
    const prod = PRODUCTS.find(p => p.id == pid);
    if (!prod) continue;
    const qty = cart[pid];
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div>${prod.name}</div>
      <div>
        <input type="number" min="0" value="${qty}" onchange="changeQuantity(${pid}, this.value)">
        x ₹${prod.price}
      </div>
      <div>₹${prod.price * qty}</div>
      <div><button onclick="removeFromCart(${pid})">Remove</button></div>
    `;
    container.append(div);
  }

  const totalEl = document.getElementById("total-price");
  totalEl.textContent = "Total: ₹" + cartTotal();

  // If no items
  if (Object.keys(cart).length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    totalEl.textContent = "";
  }
}

// Update cart count badge
function updateCartCount() {
  loadCart();
  let count = 0;
  for (const pid in cart) {
    count += cart[pid];
  }
  const el = document.getElementById("cart-count");
  if (el) {
    el.textContent = count;
  }
}

// On product page, render product detail
function renderProductDetail() {
  // expects a query parameter ?id=...
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const prod = PRODUCTS.find(p => p.id == id);
  if (!prod) {
    document.getElementById("product-detail").innerHTML = "<p>Product not found.</p>";
    return;
  }
  const container = document.getElementById("product-detail");
  container.innerHTML = `
    <h2>${prod.name}</h2>
    <img src="${prod.image}" alt="${prod.name}">
    <p>${prod.description}</p>
    <p>Price: ₹${prod.price}</p>
    <button onclick="addToCart(${prod.id})">Add to Cart</button>
  `;
}

// On home page, render product listing
function renderProductList() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  PRODUCTS.forEach(prod => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}">
      <h3>${prod.name}</h3>
      <p>₹${prod.price}</p>
      <button onclick="location.href='product.html?id=${prod.id}'">View</button>
    `;
    container.append(div);
  });
}

// Initialize when page loads
window.onload = () => {
  loadCart();
  updateCartCount();

  if (document.getElementById("product-list")) {
    renderProductList();
  }
  if (document.getElementById("product-detail")) {
    renderProductDetail();
  }
  if (document.getElementById("cart-list")) {
    renderCart();
  }
};
