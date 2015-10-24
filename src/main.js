/* @flow */
const twilio = require('twilio');
const config = require('./config');

const client = new twilio.RestClient(
  config.TWILIO_ACCOUNT_SID,
  config.TWILIO_AUTH_TOKEN,
);

client.sms.messages.create({
  to: '+14254423410',
  from: '+12533439250',
  body: 'This is a dank test ok.',
}, function(error, message) {
    // The HTTP request to Twilio will run asynchronously. This callback
    // function will be called when a response is received from Twilio
    // The "error" variable will contain error information, if any.
    // If the request was successful, this value will be "falsy"
    if (!error) {
        // The second argument to the callback will contain the information
        // sent back by Twilio for the request. In this case, it is the
        // information about the text messsage you just sent:
        console.log('Success! The SID for this SMS message is:');
        console.log(message.sid);

        console.log('Message sent on:');
        console.log(message.dateCreated);
    } else {
        console.log('Oops! There was an error.');
        console.log(error);
    }
});
