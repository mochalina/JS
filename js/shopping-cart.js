document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartIcon = document.querySelector(".cart-icon");
  const cartPopup = document.querySelector(".cart-popup");
  const cartItems = document.querySelector(".cart-items");
  // const total = document.querySelector(".total-price");

  let cart = [];

  addToCartButtons.forEach(button => {
    button.addEventListener("click", function () {
      const product = button.parentElement;
      const productName = product.querySelector("h3").textContent;
      const productPrice = parseFloat(product.querySelector(".price").textContent);
      const productQuantity = product.querySelector(".product__quantity").value;
      const id = product.querySelector(".product__quantity").id;

      addToCart(productName, productPrice, productQuantity, id);
      updateCart();
      // console.log(id);
    });
  });

  function addToCart(name, price, quantity, id) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
      existingItem.quantity =+ quantity;
    } else {
      cart.push({
        name: name,
        price: price,
        quantity: quantity,
        id: id
      });
    }
  }

  function updateCart() {
    cartItems.innerHTML = "";
    let totalPrice = 0;

    const cartName = document.createElement("h3");
    cartName.classList.add("cart-title");
    cartName.textContent = "Корзина";

    cartItems.appendChild(cartName);

    cart.forEach(item => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("item");
      itemElement.classList.add("flex");
      
      const itemName = document.createElement("span");
      itemName.classList.add("item-name");
      itemName.textContent = item.name;

      const itemQuantity = document.createElement("input");
      itemQuantity.classList.add("item-quantity");
      itemQuantity.type = "number";
      itemQuantity.setAttribute("min", "0");
      console.log("item.quantity =", item.quantity);

      itemQuantity.value = itemQuantity.value + item.quantity;
      console.log("itemQuantity.value =+ item.quantity =", itemQuantity.value);
      itemQuantity.addEventListener("input", function () {
        item.quantity = itemQuantity.value;
        const id = item.id;
        const input = document.getElementById(id);
        input.value = itemQuantity.value;
        updateCart();
      });

      const itemPrice = document.createElement("span");
      itemPrice.classList.add("item-price");
      itemPrice.textContent = (item.price * item.quantity).toFixed(2);

      itemElement.appendChild(itemName);
      itemElement.appendChild(itemQuantity);
      itemElement.appendChild(itemPrice);

      cartItems.appendChild(itemElement);
      // cartItems.appendChild(total);

      // item.price * item.quantity;
      totalPrice += item.price * item.quantity;
    });

    const total = document.createElement("div");
    total.classList.add("item");

    const totalName = document.createElement("span");
    totalName.textContent = "Итого:";

    const totalPriceEl = document.createElement("span");
    totalPriceEl.classList.add("total-price");
    totalPriceEl.textContent = (totalPrice);

    total.appendChild(totalName);
    total.appendChild(totalPriceEl);

    cartItems.appendChild(total);



    // total.textContent = totalPrice.toFixed(2);
  }



  cartIcon.addEventListener("click", function () {
    cartPopup.style.display = cartPopup.style.display === "none" ? "block" : "none";
  });
});