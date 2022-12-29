/*
 * All routes for Widget Data are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /api/widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const foodItemQueries = require('../db/queries/foodItem');

router.get('/', (req, res) => {
  foodItemQueries.getFoodItem()
    .then(foodItem => {
      
      res.json({ foodItem });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;