// create variables to keep track of the cart count and total price
var cartCount = 0;
var totalPrice = 0;

function addItemToCart(name, price) {
  // create a new item element
  var item = document.createElement('div');
  item.classList.add('cart-item');
  item.innerHTML = name + ': $' + price;

  // add the item to the cart
  var cart = document.getElementById('cart-items');
  cart.appendChild(item);

  // update the cart count and total price
  cartCount++;
  totalPrice += price;

  // update the cart count and total price elements on the page
  var cartCountElement = document.getElementById('cart-count');
  var totalPriceElement = document.getElementById('total-price');
  cartCountElement.innerHTML = cartCount;
  totalPriceElement.innerHTML = '$' + totalPrice.toFixed(2);
}
function deleteCartItem(e) {
  if (e.target.classList.contains('delete-item-btn')) {
    const cartItem = e.target.closest('.cart-item');
    const itemName = cartItem.querySelector('h3').textContent;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].name === itemName) {
        cart.splice(i, 1);
        break;
      }
    }
    displayCart();
  }
}

document.querySelector('.cart-container').addEventListener('click', deleteCartItem);
