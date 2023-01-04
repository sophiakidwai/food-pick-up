/*
 * Client-side JS logic(tweets) goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const { render } = require("sass");

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//takes item info and create line item in cart
const createCartItem = function(itemObj) {
// const name = itemObj.user.name;
//   const avatar = itemObj.user.avatars;
//   const handle = itemObj.user.handle;
//   const text = itemObj.content.text;
//   const date = timeago.format(itemObj.created_at);
  const name = 'sushi'
  const $tweet =  `<div class="cart-row">
  <div class="cart-item cart-column">
  <span class="item-image"> Image </span>
  <span class="item-name"> ${name} </span>
</div>
  <span class="cart-price cart-column"> $30 </span>
  <div class="cart-quantity cart-column">
  <input id="test" class="cart-quantity-input" type="number" value="1">
  <button class="btn btn-danger deleteButton" type="button">Delete</button>
  </div>
</div>`
  return $tweet;

}
//render to dom line items created in createcartItem
const renderCart = function(lineItems) { //getting data from cart from local storage, is looping and adding to dom via prepend

// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
$("#cart").html('')
for (const lineItem of lineItems) {
  const  lineItemElement = createCartItem (lineItem);
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

//   // nav arrow hide/show new tweet section
//   $('.next').click(function(event) {
//     event.preventDefault();
//     const newTweetSection = $('.new-tweet')
//     console.log(newTweetSection)

//     if (newTweetSection.is(':visible')){
//       newTweetSection.slideUp('fast')
//     } else {
//       newTweetSection.slideDown('slow')
//       newTweetSection.find('#tweet-text').focus()
//     }

//   });

//   // scroll button at the botton will appear when window scrolls down
//   $(window).scroll(function() {
//     if (window.pageYOffset > 100) {
//       $('.scrollUp').addClass('active');
//     } else {
//       $('.scrollUp').removeClass('active');
//     }
//   });

//   // scroll when clicked will scroll page up to text area
//   $('.scrollUp').click(function(event) {
//     event.preventDefault();
//     const newTweetSection = $('.new-tweet')
//     if (newTweetSection.is(':hidden')){
//       newTweetSection.slideDown('fast')
//       newTweetSection.find('#tweet-text').focus()
//     }
//     $('#tweet-text').focus();

//   });


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


//   // Compose button on navigation bar
//   $('.right-nav').click(function(event) {
//     event.preventDefault();
//     $('#tweet-text').focus();
//   });

//   loadTweets();
});


