class Cart {
  constructor() {
    this.items = [];
  }

  add(product, quantity) {
    if (quantity > product.quantity) {
      throw new Error(`Only ${product.quantity} available for ${product.name}`);
    }
    this.items.push({ product, quantity });
  }

  isEmpty() {
    return this.items.length === 0;
  }

  get subtotal() {
    return this.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }

  get shippingFee() {
    const shippingWeight = this.items
      .filter((item) => item.product.isShippable())
      .reduce((sum, item) => sum + item.product.weight * item.quantity, 0);

    return Math.round(shippingWeight * 30); // e.g. $30 per kg
  }

  get total() {
    return this.subtotal + this.shippingFee;
  }

  getShippableItems() {
    return this.items
      .filter((item) => item.product.isShippable())
      .map((item) => ({
        product: item.product,
        quantity: item.quantity,
      }));
  }

  clear() {
    this.items = [];
  }
}

module.exports = Cart;
