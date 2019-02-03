//Creating a temp array that stores cart items
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
    cartCount();
    return;
  }
  const ls = JSON.parse(localStorage.getItem('items'));
  if (isPresent (ls, name)) {
    const cart = ls.map(item => {
      if (item.name === name) {
        item.quantity += quantity
        return item
      }
      return item;
    })
    localStorage.setItem('items', JSON.stringify(cart))
    cartCount();
    return;
  }
  ls.push(item);
  localStorage.setItem('items', JSON.stringify(ls))
  cartCount();
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

function cartCount(){
  let itemCount = !!localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')).length : undefined;
  $('#cart-count').text(!!itemCount ? itemCount : '');
  if (!itemCount) {
    $('#cart-count').hide('slow')
  } else {
    $('#cart-count').show('swing')
  }
}

cartCount();


