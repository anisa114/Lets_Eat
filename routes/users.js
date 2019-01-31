"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {
//Order Now - GET /restaurants/menu >> res.render - menu.ejs 
router.get("/menu", (req, res) => {
  knex('category').select()
  .then(rows => {
    console.log(rows)
    res.render("menu.ejs", {rows: rows});
  })
  .catch(err => console.log(err.message))
});



return router;
}
