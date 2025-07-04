class ShippingService {
  static ship(items) {
    console.log(`\n** Shipment notice **`);

    let totalWeight = 0;

    for (const item of items) {
      const { product, quantity } = item;
      const productWeight = product.weight * quantity;
      totalWeight += productWeight;

      const weightInGrams = (productWeight * 1000).toFixed(0);
      console.log(`${quantity}x ${product.name} ${weightInGrams}g`);
    }

    console.log(`Total package weight ${totalWeight.toFixed(1)}kg`);
  }
}

module.exports = ShippingService;
