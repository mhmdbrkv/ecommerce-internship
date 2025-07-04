const Product = require("./models/Product");
const Customer = require("./models/Customer");
const CheckoutService = require("./services/CheckoutService");

const cheese = new Product("Cheese", 100, 10, {
  expiryDate: "2027-10-10",
  weight: 0.2, // 200g
});
const tv = new Product("TV", 300, 2, {
  weight: 8,
});
const mobile = new Product("Mobile", 200, 3);
const biscuit = new Product("Biscuit", 5, 4, {
  expiryDate: "2023-10-10",
});
const scratchCard = new Product("Scratch Card", 50, 100);

const fan = new Product("Fan", 150, 1);

// Create a customer
const customer = new Customer("Mohamed", 1000);

try {
  customer.cart.add(cheese, 2);
  customer.cart.add(mobile, 1);
  customer.cart.add(scratchCard, 10);

  //Show product attributes
  console.log("\n Product Attribute Checks:");
  console.log(`- ${cheese.name} is expirable?`, cheese.isExpirable());
  console.log(`- ${cheese.name} is expired?`, cheese.isExpired());
  console.log(`- ${biscuit.name} is expired?`, biscuit.isExpired());
  console.log(`- ${cheese.name} is shippable?`, cheese.isShippable());
  console.log(`- ${scratchCard.name} is shippable?`, scratchCard.isShippable());

  const subtotal = customer.cart.subtotal;
  console.log(`\n Cart Subtotal: $${subtotal}`);

  // View shipping items
  const shippables = customer.cart.getShippableItems();

  console.log(`\n Items to be shipped:`);
  shippables.forEach((item) => {
    console.log(
      `- ${item.quantity}x ${item.product.name} (${
        item.product.weight * item.quantity
      }kg)`
    );
  });

  // It will throw an error: Only 1 available for "Fan".
  //   customer.cart.add(fan, 5);

  // It will throw an error: Insufficient balance. Need 1452 to checkout, Customer only have 1000.
  // customer.cart.add(tv, 1);

  // It will throw an error: "Biscuit" is expired
  // customer.cart.add(biscuit, 1);

  // Checkout
  CheckoutService.checkout(customer);

  // Display cart
  CheckoutService.display(customer, customer.cart);

  console.log(`Cart empty?`, customer.cart.isEmpty());
} catch (error) {
  console.error("\n Error:", error.message);
}
