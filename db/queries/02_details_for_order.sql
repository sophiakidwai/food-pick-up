/* client order */

SELECT users.name, orders.order_status, menu_items.name
FROM users
JOIN orders ON user_id = users.id
JOIN ordered_items ON order_id = orders.id
JOIN menu_items ON menu_id = menu_items.id;


