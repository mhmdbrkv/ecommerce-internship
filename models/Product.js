class Product {
  constructor(name, price, quantity, options = {}) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.expiryDate = options.expiryDate || null;
    this.weight = options.weight || null;
  }

  isExpirable() {
    return !!this.expiryDate;
  }

  isExpired() {
    if (!this.expiryDate) return false;
    return new Date(this.expiryDate) < new Date();
  }

  isShippable() {
    return typeof this.weight === "number";
  }

  decreaseQuantity(amount) {
    if (amount > this.quantity) throw new Error("Not enough in stock");
    this.quantity -= amount;
  }
}

module.exports = Product;
