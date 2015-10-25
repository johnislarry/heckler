/* @flow */

const Client = require('./client');

module.exports = {
  TWILIO_ACCOUNT_SID: '<ACCOUNT_TOKEN>',
  TWILIO_AUTH_TOKEN: '<AUTH_TOKEN>',
  CLIENTS: [
    new Client('Max Sherman', '<PHONE_NUMBER>'),
  ],
}
