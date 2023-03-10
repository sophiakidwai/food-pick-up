// load .env data into process.env
require('dotenv').config();
const foodItemQueries = require('./db/queries/foodItem');
// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own

const menuRoutes = require('./routes/menu');
const checkoutRoutes = require('./routes/checkout');
// const cartRoutes = require('./routes/cart');
// const orderRoutes = require('./routes/order');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`

app.use('/menu', menuRoutes);
app.use('/checkout', checkoutRoutes);
// app.use('/cart', cartRoutes);
// app.use('./order', orderRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  console.log("checking")
  foodItemQueries.getFoodItems()
    .then(foodItem => {
      res.render('index', {data:foodItem});
      console.log(foodItem)
      // res.json({ foodItem });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});





app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

