let products = [
  { id: 1, name: "Shoes", price: 999, img: "products/item1.jpg", category: "shoes" },
  { id: 2, name: "Watch", price: 699, img: "products/item2.jpg", category: "watch" },
  { id: 3, name: "Bag", price: 499, img: "products/item3.jpg", category: "bag" },
];

let productList = document.getElementById("product-list");
let searchBox = document.getElementById("search");

// -------------------- DISPLAY PRODUCTS --------------------
function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach((p) => {
    productList.innerHTML += `
      <div class="product" data-category="${p.category}">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>

        <button onclick="addToCart(${p.id})">Add to Cart</button>
        <button onclick="addToWishlist(${p.id})" style="background:#ff4081;">♡ Wishlist</button>
      </div>
    `;
  });
}

displayProducts(products);

// -------------------- SEARCH FILTER --------------------
searchBox.addEventListener("input", () => {
  let text = searchBox.value.toLowerCase();

  let filtered = products.filter((item) =>
    item.name.toLowerCase().includes(text)
  );

  displayProducts(filtered);
});

// -------------------- CATEGORY FILTER --------------------
function filterCategory(cat) {
  if (cat === "all") {
    displayProducts(products);
    return;
  }

  let filtered = products.filter((item) => item.category === cat);
  displayProducts(filtered);
}

// -------------------- CART LOGIC --------------------
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = products.find((p) => p.id === id);

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart!");
}

// -------------------- WISHLIST LOGIC --------------------
function addToWishlist(id) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  let product = products.find((p) => p.id === id);

  // Prevent duplicates
  if (wishlist.some(item => item.id === id)) {
    alert("Already in wishlist!");
    return;
  }

  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  alert("Added to wishlist!");
}
