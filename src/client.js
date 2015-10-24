/* @flow */

module.exports = class Client {
  name: string;
  number: string;

  constructor(name: string, number: string) {
    this.name = name;
    this.number = number;
  }
}
