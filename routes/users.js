"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
//Order Now - GET /restaurants/menu >> res.render - menu.ejs 
router.get("/menu", (req, res) => {
  let menu = {};
  knex('category').select()
  .then(category => {
    // console.log(category);
    knex('menu_item').select()
    .then(menu_item => {
      // console.log(menu_item);
      category.forEach(catObj => {
        // console.log(catObj.id);
        let menu_array = menu_item.filter(menu_item => menu_item.category_id === catObj.id ) 
        // console.log(menu_array);
        menu[catObj.name] = menu_array;
      })
      // console.log(menu);
      res.render("menu.ejs", {menu: menu});
    })
    .catch(err => console.log(err.message))
  })
  .catch(err => console.log(err.message))
});

router.get("/cart", (req, res) => {
    res.render("cart");

});


//AJAX POST REQUEST

router.post("/cart", (req, res) => {
  console.log("Server side button clicked");
  knex('order_items')
  .returning('*')
  .insert({ name: 'Test' , price: "13.5"})
  .then(console.log)
  .then(() => knex.destroy())
  .catch(err => console.log(err.message));
});







return router;
}
