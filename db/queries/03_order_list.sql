SELECT CURRENT_DATE
FROM orders
WHERE date(order_start) = CURRENT_DATE;
--JOIN ordered_items ON order_id = order.id
