let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

let container = document.getElementById("wishlist-items");

function displayWishlist() {
  container.innerHTML = "";

  wishlist.forEach(item => {
    container.innerHTML += `
      <div class="product">
        <img src="${item.img}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
      </div>
    `;
  });
}

displayWishlist();

