"use strict";

const express = require('express');
const router  = express.Router();
require('dotenv').config();
const moment = require('moment');

 //Twillio message 

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken);


module.exports = (knex) => {
//Function that creates a random refernce number
  //https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  function makeid() {
    var num = "";
    var possible = "0123456789";
      for (var i = 0; i < 10; i++)
      num += possible.charAt(Math.floor(Math.random() * possible.length));
      return parseInt(num);
  }

  function ownerMessage(ref_no){
    return `New order: http://localhost:8080/orders/${ref_no}`
  }
 
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

  //Client confirmation Page
  router.get("/confirmation/:id", (req, res ) => {
    let ref_no = req.param.id;
    res.render("confirmation",{ref_no: ref_no});
  });
//GET to /cart
  router.get("/cart", (req, res) => {
      res.render("cart");
  });

//POST request to /cart
  router.post("/cart", (req, res) => {
    let ref_no = makeid();
    let items = req.body.items;
    knex('orders')
    .insert({ ref_no: ref_no ,
      ready_time: null, 
      user_id:  1, 
      totalPrice: req.body.totalPrice, 
      subTotal: req.body.subTotal,
      salesTax: req.body.salesTax
    })
    .returning('id')
    .then(rows => {
      for (let item in items){
        let name = items[item].name;
        let quantity = items[item].quantity;
        let description = items[item].description;
        let price = items[item].price;
        let id = items[item].id;
        console.log(rows);
        console.log(rows[0].ref_no);
        knex('order_items')
        .insert({orders_id :rows[0], menu_items_id: id, name, quantity, price, description})
        .then()
        .catch(err => console.log(err.message))
      }
    })
    .catch(err => console.log(err.message));
    client.messages.create({
      to: '2897000872',
      from:'12898125908',//Twillio Phone number
      body: ownerMessage(ref_no)
      })
      .then((message) => console.log(message.sid));
      res.json({status: "Success", redirect: `/restaurants/confirmation/${ref_no}`});
  });

   
  //Owner route showing order items and ref_no
  router.get("/orders/:ref_no", (req, res) => {
    let ref_no = req.params.ref_no;
    knex.from('orders')
    .select('id','salesTax','subTotal', 'totalPrice')
    .where('ref_no', ref_no)
    .then(rows => {
      var orders_id = rows[0].id;
      var salesTax = rows[0].salesTax;
      var totalPrice = rows[0].totalPrice;
      var subTotal = rows[0].subTotal;
      knex.from('order_items')
      .select('*')
      .where('orders_id', orders_id)
      .then(order_items => {      
        res.render("orders.ejs", {
          order_items: order_items,
          ref_no: ref_no, 
          salesTax: salesTax, 
          totalPrice:  totalPrice, 
          subTotal:  subTotal 
        });
      });
    });
  });

  //Sending ready_time to customer
  router.post("/orders/:ref_no", (req, res) => {
    let ref_no = req.params.ref_no;
    let ready_time = req.body.ready_time  
    ready_time = moment().add(ready_time, 'minutes').format('lll');
    knex('orders')
    .where({ref_no, ref_no})
    .update({ready_time, ready_time})
    
    
    
    // client.messages.create({
    //   to: '6477748487',
    //   from:'12898125908',//Twillio Phone number
    //   body: readytimeMessage()
    //   })
    //   .then((message) => console.log(message.sid));
    
      function readytimeMessage(){
        return `Hey Shah, your order will be ready in ${ready_time}`
      }
  });




  return router;
}
