/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const menuRoutes  = express.Router();
const db = require('../db/connection');
const foodItemQueries = require('../db/queries/foodItem');

menuRoutes.get('/', (req, res) => {
  console.log("checking")
  foodItemQueries.getFoodItems()
    .then(foodItem => {
      res.render('menu', {data:foodItem});
      console.log(foodItem)
      // res.json({ foodItem });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  // res.render('menu');

});

menuRoutes.get('/:itemId', (req, res) =>{
foodItemQueries.getFoodItemWithId(req.params.itemId)
    .then(foodItem => {
      res.render('item', {data:foodItem});
      // res.json(foodItem)
    })
});

// menuRoutes.post('/', (req, res) => {
// console.log({data: req.body});

// res.render('checkout', {data: req.body});

// });

module.exports = menuRoutes;
