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
  foodItemQueries.getFoodItem()
    .then(foodItem => {

      res.render( 'menu', {foodItem});
    })
  // res.render('menu');

});

// menuRoutes.post('/', (req, res) => {
// console.log({data: req.body});

// res.render('checkout', {data: req.body});

// });

module.exports = menuRoutes;