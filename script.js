let products = [
  { id: 1, name: "Shoes", price: 999, img: "products/item1.jpg" },
  { id: 2, name: "Watch", price: 699, img: "products/item2.jpg" },
  { id: 3, name: "Bag", price: 499, img: "products/item3.jpg" },
];

let productList = document.getElementById("product-list");
let searchBox = document.getElementById("search");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach((p) => {
    productList.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

displayProducts(products);

// 🔍 Search Filter
searchBox.addEventListener("keyup", () => {
  let text = searchBox.value.toLowerCase();

  let filtered = products.filter((item) =>
    item.name.toLowerCase().includes(text)
  );

  displayProducts(filtered);
});

// Cart Logic
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = products.find((p) => p.id === id);

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart!");
}
document.getElementById("search").addEventListener("input", function () {
    let value = this.value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let name = product.querySelector("h3").innerText.toLowerCase();

        if (name.includes(value)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});
