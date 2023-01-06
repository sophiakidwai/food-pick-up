/*
 * Client-side JS logic(tweets) goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// "use strict";

// // Install Dependencies
// // npm install twilio
// // npm i moment

// const moment = require("moment");
// const express = require("express");
// const router = express.Router();

// //Environment Variables
// const client = require("twilio")(
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );



let total = 0;

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//Add to cart button - working
const addToCart = function (name, price, quantity) {
  console.log("test", name, price, quantity);
  const menu = {name, price, quantity}
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
if (!cartItems) {
  localStorage.setItem('cartItems', JSON.stringify({[menu.name]: menu}));

}
localStorage.setItem('cartItems', JSON.stringify({...cartItems, [menu.name]: menu}))
  // const menuList = JSON.parse(localStorage.getItem('menu'));

}

// displays item in cart - working
const createCartItem = function(itemObj, arrLength) {

  const name = 'Vegetarian'
  const cartItem = JSON.parse(localStorage.getItem('cartItems'));
  console.log("cart item from local storage", cartItem)
  console.log(Object.keys(cartItem))
  let objkeys = Object.keys(cartItem)
  total += parseInt(cartItem[objkeys[itemObj]].price)
  let stringTotal = ""
  if (itemObj == arrLength - 1) {
    stringTotal = `<div class="cart-total">
  <strong class="cart-total-title">Total:</strong>
  <span class="cart-total-price">${total / 2}.00</span>
  </div>`
  }
  const $tweet =  `<div class="cart-row">
  <div class="cart-item cart-column">

  <span class="item-name"> ${cartItem[objkeys[itemObj]].name} </span>
</div>
  <span class="cart-price cart-column"> ${cartItem[objkeys[itemObj]].price}.00</span>
  <div class="cart-quantity cart-column">
  <input id="test" class="cart-quantity-input" type="number" value="1">
  <button class="btn btn-danger deleteButton" type="button">Delete</button>
  </div>
</div>${stringTotal}`

  return $tweet;

}
//render to dom line items created in createcartItem
const renderCart = function(lineItems) { //getting data from cart from local storage, is looping and adding to dom via prepend
console.log("test", lineItems)
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
$("#cart").html('')
const cartItem = JSON.parse(localStorage.getItem('cartItems'));
let objKeys = Object.keys(cartItem)
for (let i=0; i < objKeys.length; i++) {
  console.log("check line items", lineItems)
  const  lineItemElement = createCartItem(i, objKeys.length);
  $("#cart").prepend( lineItemElement)
}
$("#test").on("input", function() {
  console.log("test function");
        //Tracking character count input from user using keyup
        const quantity = $(this).val();

        let quantityField = $('#test');
console.log(quantity);
        //Updating counter elem on DOM to reflect current changes in remaining characters
        //quantityField.html(remainingChars);

        if (quantity < 0) {
          quantityField.css('color', '#8f0001');
        } else {
          quantityField.css('color', '#000000');
        }
      });
}


const loadCart = function() {
  // gets the ITEM db from /tweets route and calls renderTweets to post on to page
  const cart = JSON.parse(localStorage.getItem('myCart'));
  console.log("test", cart[0]);
  renderCart(cart)
};
console.log("testingload");
localStorage.setItem('myCart', JSON.stringify([{name: 'pizza', quantity: 4}, {name: 'pizza', quantity: 4}]));


$(document).ready(function() {

  // Load tweets on page load

  loadCart();

  $('#cart').click(function(event) {
    event.preventDefault();
    $('.foodList').focus();
  });


  loadCart();


// // new tweet
$(`.deleteButton`).click(function(event) { // should be in a function
   event.preventDefault();
    console.log('removingCartItem');
    //get info on what lineitem was clicked from the event, make sure to console.log
    //get cart dataa from local storage
    // update cart data with new quanity, removes item
    //set local storage with new cart data
    localStorage.setItem('myCart', JSON.stringify([{name: 'pizza', quantity: 4}]));
    loadCart();
  });

//   // AJAX handling of form submission
// when checkout button is clicked
  $(`.tweetForm`).submit(function(event) {

    //prevents page from reloading
    event.preventDefault();
    const cart = JSON.parse(localStorage.getItem('myCart'));
    //change tweets to correct route
    $.post('/checkout', cart, () => {
     // handles successful checkout
    });

  });



// $('.btn-purchase').on("click", function (event) {
//   client.messages
//   .create({
//     body: 'Hello from Node',
//     to: '+14166297784', // Text this number 9Demp phone)
//     from: '+19789532028', // From a valid Twilio number
//   })
//   .then((message) => console.log(message.sid));
// })


// $('.btn-purchase').on("click", function (event) {
//   alert("Thank you for your order");
// })

//   // Compose button on navigation bar
//   $('.right-nav').click(function(event) {
//     event.preventDefault();
//     $('#tweet-text').focus();
//   });

//   loadTweets();
});
