"use strict";

const express = require('express');
const router  = express.Router();
require('dotenv').config();
const moment = require('moment');
const cookieSession = require('cookie-session');
//Use cookie session
router.use(cookieSession({
  name: 'session',
  keys: ["3482537514","7562377541"],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

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

  // Home page
  router.get("/", (req, res) => {
    res.render("index")
  });

  //Owner all orders page
  router.get("/orders/all", (req, res) => {
    if(req.session.user_id === "owner"){
    res.send("All the orders")
    } else {
      res.send("Access Denied");
    }
  });

  //User Login
  router.get("/users", (req, res) => {
    //Set cookie session to role "user"
    req.session.user_id = "user";  
    res.redirect("/restaurants/");
  });
  //Owner Login
  router.get("/owner", (req, res) => {
    //Set cookie session to role "user"
    req.session.user_id = "owner";
    res.redirect("/restaurants/orders/all");
  });
  //Info Page
  router.get("/info", (req, res) => {
    res.render("info");
  });


  //Order Now - GET /restaurants/menu >> res.render - menu.ejs 
  router.get("/menu", (req, res) => {
    let menu = {};
    knex('categories').select()
    .then(categories => {
      knex('menu_items').select()
      .then(menu_items => {
        categories.forEach(catObj => {
          let menu_array = menu_items.filter(menu_items => menu_items.categories_id === catObj.id ) 
          menu[catObj.name] = menu_array;
        })
        res.render("menu.ejs", {menu: menu});
      })
      .catch(err => console.log(err.message))
    })
    .catch(err => console.log(err.message))
  });

  //Client confirmation Page
  router.get("/confirmation/:id", (req, res ) => {
    let ref_no = req.params.id;
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
        user_id: 1, 
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
          knex('order_items')
          .insert({orders_id :rows[0], menu_items_id: id, name, quantity, price, description})
          .then()
          .catch(err => console.log(err.message))
        }
      })
      .catch(err => console.log(err.message));
      client.messages.create({
        to: '6475718122',
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
    .select('id','salesTax','subTotal', 'totalPrice', 'ready_time')
    .where('ref_no', ref_no)
    .then(rows => {
      var orders_id = rows[0].id;
      var salesTax = rows[0].salesTax;
      var totalPrice = rows[0].totalPrice;
      var subTotal = rows[0].subTotal;
      var ready_time = rows[0].ready_time;
      knex.from('order_items')
      .select('*')
      .where('orders_id', orders_id)
      .then(order_items => {      
        res.render("orders.ejs", {
          order_items: order_items,
          ref_no: ref_no, 
          salesTax: salesTax, 
          totalPrice:  totalPrice, 
          subTotal:  subTotal ,
          ready_time: ready_time,
          user : req.session.user_id
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
    .where({'ref_no': ref_no})
    .update({'ready_time': ready_time})
    .then()
    .catch(err => console.log(err.message))

    client.messages.create({
      to: '6477748487',
      from:'12898125908',//Twillio Phone number
      body: readytimeMessage()
      })
      .then((message) => console.log(message.sid));
    
      function readytimeMessage(){
        return `Hey Shah, your order will be ready in ${ready_time}`
      }
      res.redirect(`/restaurants/orders/${ref_no}`);
  });

  //Route to display ready_time (Timer)
  router.get("/ready/:ref_no", (req, res) => {
    let ref_no = req.params.ref_no;
    knex
  .from('orders')
  .select('ready_time')
  .where({ref_no: ref_no})
  .then(rows => {
    let ready_time = rows[0].ready_time;
    res.json({ready_time: ready_time});
  })
  .catch(err => console.log(err.message))

  });


  return router;
}
