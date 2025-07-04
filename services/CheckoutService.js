const ShippingService = require("./ShippingService");

class CheckoutService {
  static checkout(customer) {
    const cart = customer.cart;

    if (cart.isEmpty()) throw new Error("Cart is empty.");

    for (const item of cart.items) {
      if (item.product.isExpirable() && item.product.isExpired()) {
        throw new Error(`Product "${item.product.name}" is expired.`);
      }

      if (item.quantity > item.product.quantity) {
        throw new Error(`Not enough stock for "${item.product.name}".`);
      }
    }

    if (!customer.canAfford(cart.total)) {
      throw new Error(
        `Insufficient balance. Need ${cart.total}, but customer has ${customer.balance}.`
      );
    }

    customer.deduct(cart.total);

    for (const item of cart.items) {
      item.product.decreaseQuantity(item.quantity);
    }

    const shippableItems = cart.getShippableItems();
    if (shippableItems.length > 0) {
      ShippingService.ship(shippableItems);
    }
  }

  static display(customer, cart) {
    console.log(`\n** Checkout receipt **`);
    cart.items.forEach(({ product, quantity }) => {
      const totalPrice = product.price * quantity;
      console.log(`${quantity}x ${product.name} ${totalPrice}`);
    });

    console.log("----------------------");
    console.log(`Order Subtotal ${cart.subtotal}`);
    console.log(`Shipping Fees ${cart.shippingFee}`);
    console.log(`Paid Amount ${cart.total}`);
    console.log(`Customer Current Balance After Payment ${customer.balance}`);

    cart.clear();
  }
}

module.exports = CheckoutService;
