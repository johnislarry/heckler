/* @flow */

const Client = require('./client');

const config = {
  TWILIO_ACCOUNT_SID: '<ACCOUNT_TOKEN>',
  TWILIO_AUTH_TOKEN: '<AUTH_TOKEN>',
  SENDER: '<SENDER_NUMBER>',
  CLIENTS: new Map([
    ['<CLIENT_NAME>', new Client('<CLIENT_NAME>', '<PHONE_NUMBER>')],
  ]),
}

module.exports = config;
