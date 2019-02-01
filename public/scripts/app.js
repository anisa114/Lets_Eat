// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });
//Creating a temp array that stores cart items
var cart = [];
const addToCart = (element) => {
  let btnEl = $(element)
  let id = btnEl.siblings(".menu__item-id").text();
  let quantity = btnEl.siblings('.quantity').val();
  let name = btnEl.siblings('.menu__item-name').text();
  let description = btnEl.siblings('.menu__item-description').text();
  let price = btnEl.siblings('.menu__item-price').text();
  console.log(quantity, name, description, price, id)

  let item = {
    id: id,
    name: name,
    description: description,
    price:price,
    quantity: quantity
  }
  cart.push(item);
  console.log(cart);
}

//Adding click event listener to cart button
$( "#cart" ).click(function() {
  //Persist the cart array to to Local storage
   localStorage.setItem('items', JSON.stringify(cart));

});
//Remove item from cart 
function removeItem(name){
  let items = JSON.parse(localStorage.getItem('items'));
  items.forEach(item => {
    if(item.name === name){
      items.splice(item,1);
    }
  });
  return items;
}
//Update quantity of item in cart
function updateItem(name, newQuantity){
  let items = JSON.parse(localStorage.getItem('items'));
  items.forEach(item => {
    if(item.name === name){
      item.quantity = newQuantity;
    }
  });
  return items;
}

// //Event Listener for Remove Button
// $("#remove").click(function(){
//   let name = //get name
//   let modifiedItems = removeItem(name);
//   localStorage.setItem('items', JSON.stringify(modifiedItems));

// });
//Event Listener for Update Button

// $("#update").click(function(){
//   let name = //get name
//   let newQuantity = //get quantity 
//   let modifiedItems = updateItem(name);
//   localStorage.setItem('items', JSON.stringify(modifiedItems));
// });

function handleClick(submit){
  var data = JSON.parse(localStorage.getItem('items'));
  console.log(data);
  console.log("Button clicked ajax");
  $.ajax({
    type: "POST",
    url: "/restaurants/cart",
    data: { items: data }, 
  });
}