
const loadOrder = (item) => {
  return (`<article>
    <div>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    </div>
    <div>
      <h3>Price</h3>
      <p>${item.price}</p>
    </div>
    <div>
      <h3>Price</h3>
      <input type="number" min="1" max="15" value=${item.quantity}>
    </div>
    <div>
      <button class='update'>Update</button>
      <button class='delete'>Delete</button>
    </div>
  </article>`)}
const generateOrders = () =>{
  let items = JSON.parse(localStorage.getItem('items'));
  for (item of items) {
    $('.order__items').append(loadOrder(item));

  }
}

$(document).ready(function () {
  generateOrders();

})