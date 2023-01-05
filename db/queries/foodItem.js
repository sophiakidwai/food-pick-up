const db = require('../connection');

const getFoodItems = () => {
  return db.query('SELECT * FROM menu_items;')
    .then(data => {
      return data.rows;
    });
};
const getFoodItemWithId = (ids) => {
  const formattedIds = `(${ids.toString()})`;
  return db.query(`SELECT * FROM menu_items WHERE id in ${formattedIds};`)
    .then(data => {
      return data.rows[0];
    });
};

module.exports = { getFoodItems, getFoodItemWithId };
