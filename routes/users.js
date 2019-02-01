"use strict";

const express = require('express');
const router  = express.Router();
require('dotenv').config();

 //Twillio message 

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken);


module.exports = (knex) => {
  //Order Now - GET /restaurants/menu >> res.render - menu.ejs 
  router.get("/menu", (req, res) => {
    let menu = {};
    knex('categories').select()
    .then(categories => {
      // console.log(categories);
      knex('menu_items').select()
      .then(menu_items => {
        // console.log(menu_items);
        categories.forEach(catObj => {
          // console.log(catObj.id);
          let menu_array = menu_items.filter(menu_items => menu_items.categories_id === catObj.id ) 
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


  router.post("/cart", (req, res) => {
  //Function that creates a random refernce number
  //https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    function makeid() {
      var num = "";
      var possible = "0123456789";
        for (var i = 0; i < 10; i++)
        num += possible.charAt(Math.floor(Math.random() * possible.length));
        return parseInt(num);
    }
    let ref_no = makeid();
    let items = req.body.items;
    knex('orders')
    .insert({ ref_no: ref_no ,ready_time:null, user_id:1, price: req.body.totalPrice})
    .returning('id')
    .then(rows => {
      for (let item in items){
        let name = items[item].name;
        let quantity = items[item].quantity;
        let description = items[item].description;
        let price = items[item].price;
        let id = items[item].id;
        knex('order_items')
        .insert({orders_id :rows[0], menu_items_id: id, name, quantity, price})
        .then()
        .catch(err => console.log(err.message))
      }
    })
    .catch(err => console.log(err.message));

  //Find ref_no from of user from database
    knex.from('orders')
    .select(ref_no)
    .then(rows => {
      var ref_no = rows[0];
      console.log(ref_no);
    })
    client.messages.create({
      to: '2897000872',
      from:'12898125908',//Twillio Phone number
      body: ownerMessage(ref_no)
      })
      .then((message) => console.log(message.sid));
      
      
      function ownerMessage(ref_no){
        return `New order: http://localhost:8080/orders/${ref_no}`
      }
  });

    
  return router;
}
