let products = [
  {id: 1, name: "Shoes", price: 999, img: "products/item1.jpg"},
  {id: 2, name: "Watch", price: 699, img: "products/item2.jpg"},
  {id: 3, name: "Bag", price: 499, img: "products/item3.jpg"},
];

let productList = document.getElementById("product-list");

products.forEach((p) => {
  productList.innerHTML += `
    <div class="product">
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `;
});

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = products.find((p) => p.id === id);

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart!");
}

