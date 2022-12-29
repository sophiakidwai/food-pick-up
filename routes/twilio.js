"use strict";

//Install Dependencies
// npm install twilio
// npm i moment

const moment = require("moment");
const express = require("express");
const router = express.Router();

//Environment Variables
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

client.messages
  .create({
    body: 'Hello from Node',
    to: '+14166297784', // Text this number 9Demp phone)
    from: '+19789532028', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
