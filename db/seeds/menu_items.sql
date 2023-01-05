   INSERT INTO menu_items (id, name, price, description, thumbnail_photo_url)
   VALUES
 (1, 'Vegetarian', 15, 'Mushroom, Tomato, Green Pepper, Red Onion, Cheese & Tomato Sauce', 'https://cache.dominos.com/nolo/ca/en/6_94_15/assets/build/market/CA/_en/images/img/products/larges/S_PIZVX.jpg'),
 (2,'Hawaiian', 17, 'Ham, Tropical Sauce, Cheddar, Bacon, Cheese & Tomato Sauce, Pineapple', 'https://cache.dominos.com/nolo/ca/en/6_94_15/assets/build/market/CA/_en/images/img/products/larges/S_PIZHX.jpg'),
 (3,'Philly Steak', 17, 'tender slices of steak, onions, green peppers, mushrooms, and 3 different types of cheese', 'https://cache.dominos.com/nolo/ca/en/6_94_15/assets/build/market/CA/_en/images/img/products/larges/S_PIZPH.jpg'),
 (4,'Supreme', 18, 'Pepperoni, mild sausage, beef topping, green pepper, sliced mushrooms, red onion and pizza mozzarella', 'https://cache.dominos.com/nolo/ca/en/6_94_15/assets/build/market/CA/_en/images/img/products/larges/S_PIZCBR.jpg'),
 (5,'BBQ chicken', 17, 'BBQ sauce, seasoned grilled chicken breast, red onion, green peppers, smoked aged cheddar and pizza mozzarella', 'https://cache.dominos.com/nolo/ca/en/6_94_15/assets/build/market/CA/_en/images/img/products/larges/S_PIZBQ.jpg'),
 (6,'Pepperoni', 13, 'Pepperoni, mozzarella', 'https://cache.dominos.com/nolo/ca/en/6_94_15/assets/build/market/CA/_en/images/img/products/larges/S_PIZPX.jpg'),
 (7,'Cheese', 12, 'Mozarella cheese', 'https://cache.dominos.com/nolo/ca/en/6_94_15/assets/build/market/CA/_en/images/img/products/larges/S_PIZSIX.jpg'),
 (8,'Spinach and Feta Pizza', 13, 'Creamy Alfredo sauce, fresh baby spinach, fresh onions, feta, Parmesan-Asiago, provolone and cheese made with 100% real mozzarella', 'https://cache.dominos.com/nolo/ca/en/6_94_15/assets/build/market/CA/_en/images/img/products/larges/S_PIZSF.jpg'),

 /* sides
*/

(9,'BBQ Wings', 15, '12 wings', 'https://cache.dominos.com/nolo/ca/en/6_94_15/assets/build/market/CA/_en/images/img/products/larges/S_BONEIN.jpg'),
(10,'Hot Wings', 15, '12 wings', 'https://cache.dominos.com/nolo/ca/en/6_94_15/assets/build/market/CA/_en/images/img/products/larges/S_SCCHB.jpg'),
(11,'LightHouse Cheesy Bread', 9, '12 pieces', 'https://cache.dominos.com/nolo/ca/en/6_94_15/assets/build/market/CA/_en/images/img/products/larges/F_CHEBRD.jpg'),

/* drinks
*/

(12,'Coca Cola', 4, '591ml Bottle', 'https://cache.dominos.com/nolo/ca/en/6_94_15/assets/build/market/CA/_en/images/img/products/larges/F_COKE.jpg'),
(13,'Sprite', 4, '591ml Bottle', 'https://cache.dominos.com/nolo/ca/en/6_94_15/assets/build/market/CA/_en/images/img/products/larges/F_SPRITE.jpg'),
(14,'Water', 2, '500ml Bottle', 'https://cache.dominos.com/nolo/ca/en/6_94_15/assets/build/market/CA/_en/images/img/products/larges/F_WATER.jpg');


  INSERT INTO users
(id, name, phone)
VALUES
(1,'Hungry Hippo',  '1112223333'),
(2,'Peckish Penguin', '2222223333'),
(3,'Elegant Elephant',  '3332223333'),
(4,'Krazy Kangaroo',  '4442223333'),
(5,'Frog Prince', '5552223333'),
(6, 'admin1',  '6662223333');

INSERT INTO orders
(id, order_start, order_complete, order_status, user_id)
VALUES
(1, '2022-06-22 19:10:25-07', '2016-06-22 19:30:25-07', TRUE, 1),
(2, '2022-07-13 07:01:01-07', '2022-07-13 13:10:10-07', TRUE, 2),
(3, '2022-07-13 14:01:01-07', '2022-07-13 14:50:01-07', TRUE, 1),
(4, '2022-07-14 16:15:01-07', '2022-07-13 16:35:01-07', TRUE, 3);

INSERT INTO ordered_items
(id, order_id, menu_id, quantity)
VALUES
(1, 1, 1, 1),
(2, 1, 4, 1),
(3, 1, 5, 1),
(4, 2, 2, 3),
(5, 2, 3, 3),
(6, 2, 4, 3),
(7, 2, 5, 3),
(8, 3, 1, 3),
(9, 3, 3, 1),
(10, 3, 4, 1),
(11, 4, 5, 1),
(12, 4, 2, 1),
(13, 4, 3, 2);

INSERT INTO cart
(id, user_id, menu_id, total_quantity)
VALUES
(1, 1, 1, 1),
(2, 1, 4, 1),
(3, 1, 5, 1),
(4, 2, 2, 3),
(5, 2, 3, 3),
(6, 2, 4, 3),
(7, 2, 5, 3),
(8, 3, 1, 3),
(9, 3, 3, 1),
(10, 3, 4, 1),
(11, 4, 5, 1),
(12, 4, 2, 1),
(13, 4, 3, 2);
