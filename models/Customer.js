const Cart = require("./Cart");

class Customer {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    this.cart = new Cart();
  }

  canAfford(amount) {
    return this.balance >= amount;
  }

  deduct(amount) {
    if (!this.canAfford(amount)) throw new Error("Insufficient balance");
    this.balance -= amount;
  }
}

module.exports = Customer;
