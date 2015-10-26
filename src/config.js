/* @flow */

const Client = require('./client');

type Config = {
  TWILIO_ACCOUNT_SID: string,
  TWILIO_AUTH_TOKEN: string,
  SENDER: string,
  CLIENTS: {[name: string]: Client},
}

const config: Config = {
  TWILIO_ACCOUNT_SID: '<ACCOUNT_TOKEN>',
  TWILIO_AUTH_TOKEN: '<AUTH_TOKEN>',
  SENDER: '<SENDER_NUMBER>',
  CLIENTS: {
    '<CLIENT_NAME>': new Client('<CLIENT_NAME>', '<PHONE_NUMBER>'),
  },
}

module.exports = config;
