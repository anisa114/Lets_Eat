
let items = JSON.parse(localStorage.getItem('items'));
const loadOrder = (item) => {
  return (`<article>
    <div class="item-name-desc">
      <h3 class="item-name">${item.name}</h3>
      <p class="item-desc">${item.description}</p>
    </div>
    <div>
      <h3>Price</h3>
      <p>${item.price}</p>
    </div>
    <div class="item-quantity-div">
      <h3>Quantity</h3>
      <input type="number" min="1" max="15" class="item-quantity" value=${item.quantity}>
    </div>
    <div class="buttons">
      <button class='updateBtn btn btn-warning' onclick="updateBtn(this)">Update</button>
      <button class='deleteBtn btn btn-danger' onclick="deleteBtn(this)">Delete</button>
    </div>
  </article>`)}
const generateOrders = (cart) =>{
  if (cart === null) {
    return
  }
  $('.order__items').empty();
  for (item of cart) {
    $('.order__items').append(loadOrder(item));
  }
}

function submitOrder(submit){
  const data = JSON.parse(localStorage.getItem('items'));
  console.log(data);
  cartCount();
  console.log("Button clicked ajax");
  $.ajax({
    type: "POST",
    url: "/restaurants/cart",
    data: { items: data, 
        subTotal: subTotal(),
        salesTax: salesTax(),
        totalPrice: totalPrice() }, 
        success: function(res){ 
          if (res.status === "Success") {
            window.location = res.redirect;
         }
      }
  }).done();
};

function removeItem(cart, name){
  cart.forEach((item,index) => {
    if(item.name === name){
      cart.splice(index,1);
    }
  });
  return cart;
}

function deleteBtn (el) {
  let cart = JSON.parse(localStorage.getItem('items'));
  let btnDiv = $(el).closest('.buttons')
  let name = btnDiv.siblings('.item-name-desc').find('.item-name').text();
  cart = removeItem(cart, name)
  localStorage.setItem('items', JSON.stringify(cart));
  cartCount();
  generateOrders(cart);
}

//Update quantity of item in cart
function updateBtn (el) {
  let btnDiv = $(el).closest('.buttons')
  let name = btnDiv.siblings('.item-name-desc').find('.item-name').text();
  let newQuantity = btnDiv.siblings('.item-quantity-div').find('.item-quantity').val();
  updateItem(name, newQuantity);
}
function updateItem(name, newQuantity){
  let items = JSON.parse(localStorage.getItem('items'));
  items.forEach(item => {
    if(item.name === name){
      item.quantity = newQuantity;
    }
  });
  localStorage.setItem('items', JSON.stringify(items));
}

$(document).ready(function () {
  generateOrders(items);
  cartCount();
})