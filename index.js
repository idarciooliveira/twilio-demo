// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
require('dotenv').config;

const client = require('twilio')(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN
);

client.messages
  .create({
    body: 'Hi Idarcio are you Good!',
    from: process.env.TWILIO_PHONE,
    to: process.env.DESTINATION_PHONE,
  })
  .then((message) => console.log(message.sid));
