//Creating a temp array that stores cart items
var cart = !localStorage.getItem('items') ? [] : JSON.parse(localStorage.getItem('items'));
const addToCart = (element) => {
  const btnEl = $(element)
  const id = btnEl.siblings('.menu__item-id').text();
  const quantity = parseInt(btnEl.siblings('.quantity').val());
  const name = btnEl.siblings('.menu__item-name').text();
  const description = btnEl.siblings('.menu__item-description').text();
  const price = btnEl.siblings('.menu__item-price').text();
  let item = { id, name, description, quantity, price };

  if (!JSON.parse(localStorage.getItem('items'))) {
    let cart = []
    cart.push(item);
    localStorage.setItem('items', JSON.stringify(cart));
    return;
  }
  const ls = JSON.parse(localStorage.getItem('items'));
  if (isPresent (ls, name)) {
    cart = ls.map(item => {
      if (item.name === name) {
        item.quantity += quantity
        return item
      }
      return item;
    })
    localStorage.setItem('items', JSON.stringify(cart))
    return 
  }
  cart.push(item);
  localStorage.setItem('items', JSON.stringify(cart))
}

function isPresent (data, itemName) {
  return data.filter(item => item.name === itemName).length > 0 ? true : false
}
function subTotal () {
  const orders = JSON.parse(localStorage.getItem('items'));
  return orders.reduce((acc, cur) => {
    return acc + (cur.price * cur.quantity)
  }, 0)
}

function salesTax () {
  return subTotal() * .13;
}

function totalPrice () {
  return subTotal() + salesTax();
}
//Adding click event listener to cart button
$( "#cart" ).click(function() {
  //Persist the cart array to to Local storage
  localStorage.setItem('items', JSON.stringify(cart));
});
//Remove item from cart 


