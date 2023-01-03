const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { checkoutItems } = require('../db/queries');
const foodItemQueries = require('../db/queries/foodItem');
let order_id = 0;
let is_empty = true;
let totals = { subtotal: 0, tax: 0, total: 0 };

//GET checkout
checkoutRoutes.get('/', (req, res) => {
  res.render('checkout');
});

checkoutRoutes.post('/', (req, res) => {
  console.log({ data: req.body });

});
//Adds items to cart//
checkoutRoutes.post('/checkoutItems', (req, res) => {
  //addItemData has the data from the submitted add item form
  const addItemData = {
    item_id: req.body.item_id,
    quantity: req.body.quant,
    special_req: req.body.specialRequests,
  };
});

// //Delete items from cart
// checkoutRoutes.post('/deleteItems', (req, res) => {
//   newOrder(is_empty, (err, order)) => {
//     is_empty = false;
//     if (err) {
//       return res.json({ error: err.message }); // jquery willhandle that dont do renders, only for checkout, if changing //res.json
//     }
//     order_id = order[0].id;
//     if (req.body.item_id) {
//       deleteItem(order_id, req.body.item_id);
//     }
//     checkoutUpdater((obj) => {
//       res.send(obj);
    
//     });
//   });
//   orderRoutes.post("/confirmed/:id", function(req, res) {
//     orderConfirmed(order_id) // Sends text
//     res.send(`${order_id}`)
//   });
















module.exports = checkoutRoutes;