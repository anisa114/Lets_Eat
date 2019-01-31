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

var cart = [];

const addToCart = (element) => {
  let btnEl = $(element)
  let quantity = btnEl.siblings('.quantity').val();
  let name = btnEl.siblings('.menu__item-name').text();
  let description = btnEl.siblings('.menu__item-description').text();
  let price = btnEl.siblings('.menu__item-price').text();
  console.log(quantity, name, description, price)

  let item = {
    name: name,
    description: description,
    price:price,
    quantity: quantity
  }
  cart.push(item);
  console.log(cart);


  
}


