const db = require('../connection');

const addItem =() => {
  return db.query('SELECT item_id, quantity FROM menu_Items;')
    .then(data => {
      return data.rows;
    
    });
};
const deleteItem =() => {
  return db.query('SELECT item_id, order_id FROM ordered_items;')
    .then(data => {
      return data.rows;
    });
  };

const checkoutItems =() => {
  return db.query('SELECT order_id;')
    .then(data => {
      return data.rows;
    });
  };
module.exports = { addItem, deleteItem, checkoutItems};