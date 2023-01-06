// const db = require('../connection');

// const findOpenOrderId =() => {
// //find the most recent ID to be able to add ordered items to it

// }


// const addItemToCheckout =(menuId) => {
// // ask findOpenOrderId for the order id
// // add new menu item to order - hardcode quantity to 1

// };
// const deleteItemFromCheckout =() => {
// // ask findOpenOrderId for the order id
// // remove new menu item to order
// };

// const fetchCurrentCheckout =() => {
// // fetch openOrderId
// //fetch all ordered items matching the order id
// };

// const completeOrder =() => {
// // use findOpenOrderId to find most recent open order
// //change order status from false to true, add order complete time stamp
// // create a new empty order hardcode user id to 1
// };
// module.exports = { addItem, deleteItem, completeOrder };

// CREATE TABLE orders (
//   id SERIAL PRIMARY KEY NOT NULL,
//   order_start TIMESTAMP DEFAULT NOW(),
//   order_complete TIMESTAMP,
//   order_status BOOLEAN,
//   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE

// );

// CREATE TABLE menu_items (
//   id SERIAL PRIMARY KEY NOT NULL,
//   name VARCHAR(255) NOT NULL,
//   price INTEGER NOT NULL,
//   description VARCHAR(255),
//   thumbnail_photo_url VARCHAR(255) NOT NULL

// );

// CREATE TABLE ordered_items (
//   id SERIAL PRIMARY KEY NOT NULL,
//   order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
//   menu_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
//   quantity INTEGER NOT NULL
// );
