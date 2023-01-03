/*
 * All routes for Widget Data are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /api/widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const foodItemQueries = require('../db/queries/foodItem');


// Adds items to cart//
 router.post('/checkoutItems', (req, res)) => {
// addItemData has the data from the submitted add item form
 const addItemData = {
   item_id: req.body.item_id,
 quantity: req.body.quant,
  special_req: req.body.specialRequests,
 }
 };

  //Delete items from cart
 router.post('/deleteItems', (req, res)) => {
newOrder(is_empty, (err, order)) => {
    is_empty = false;  
      if (err) {
     return res.render('error', { err});
 }

  }

  router.get('/', (req, res) => {
  foodItemQueries.getFoodItem()
<<<<<<< HEAD
  .then(foodItem => {
      
    res.json({ foodItem });
  })
=======
    .then(foodItem => {

      res.json({ foodItem });
    })
>>>>>>> 8d60b0ac3ec90d3c9d1cab5df1a085b82dd7e974
    .catch(err => {
     res
      .status(500)
      .json({ error: err.message });
  });
  });

module.exports = router;
