const express = require('express');
const checkoutRoutes = express.Router(); //books name 
const db = require('../db/connection');
const { checkoutItems, addItem, deleteItem } = require('../db/queries'); //import items
// const foodItemQueries = require('../db/queries/foodItem');
let order_id = 0;
let is_empty = true;
let totals = { subtotal: 0, tax: 0, total: 0 };

//GET checkout
// checkoutRoutes.get('/', (req, res) => {
//   res.render('checkout'); //reading info from server or db..comment out
// });
//sends to checkout page, shows cart items
checkoutRoutes.get("/", (req, res) => {
  res.render("checkout");
});

checkoutRoutes.post('/', (req, res) => {
  console.log({ data: req.body }); //process 

});
//Adds items to cart//
checkoutRoutes.post('/checkoutItems', (req, res) => {
  //addItemData has the data from the submitted add item form
  const addItemData = {
    item_id: req.body.item_id,
    quantity: req.body.quant,
  };
  //Creates a new order if this is the first item in the cart. If you're in an existing order, then it just adds items to the order
  // newOrder(is_empty, (err, order) => { // get rid 
  //   is_empty = false;
  //   if (err) {
  //     return res.render('error', { err });
  //   }
  //   order_id = order[0].id;
  //   addItem(order_id, addItemData.item_id, addItemData.quantity, addItemData.special_req);
  //   checkoutUpdater((obj) => {
  //     res.send(obj);
  //   });
  // });
});

//Delete items from cart
//
checkoutRoutes.post('/deleteItems', (req, res) => {
  // 1.if my cart is empty 
  // then i want message displayed 
  // 2. if order has been submitted 
  // then another message generated to advise user of status 'submitted' , 'status'
  // 3.if 1 and 2 scenarios are done , cart can be reset or will be 
  // using order_id I can delete the cart once scenarios are fullfilled

  deleteItem(is_empty, (err, order) => {
    is_empty = false;
    if (err) {
      return res.json({ error: err.message }); // jquery willhandle that dont do renders, only for checkout, if changing //res.json
    }
    order_id = order[0].id;
    if (req.body.menu_id) {
      deleteItem(order_id, req.body.menu_id);
    }
    checkoutUpdater((obj) => {
      res.send(obj);
    });
  });
});


checkoutRoutes.post("/confirmed/:id", function(req, res) {
  orderConfirmed(order_id); // Sends text
  res.send(`${order_id}`);

});


let checkoutUpdater = function(cb) {

  // browse((err, items) => {
    // if (err) {
    //   return res.render('error', { err });
    // }

    checkoutItems(order_id, (err, itemsInCheckout) => {
      // if (err) {
      //   return res.render('error', { err });
      // }
      let subtotal = 0; let tax = 0;
      for (let i = 0; i < itemsInCheckout.length; i++) {
        subtotal += (itemsInCheckout[i].price * itemsInCheckout[i].quantity);
      }
      totals.subtotal = (Math.round(subtotal * 100) / 100).toFixed(2);
      totals.tax = (Math.round(subtotal * 0.12 * 100) / 100).toFixed(2);
      totals.total = (Math.round((subtotal + subtotal * 0.12) * 100) / 100).toFixed(2);

      cb({ itemsCheckInCheckout: itemsInCheckout, totals: totals });
    });
  
};


module.exports = checkoutRoutes; //returning the things that i want other applications to use. in this case boom or router