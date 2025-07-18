# 🛒 Console-Based E-Commerce System

This is a console-based e-commerce simulation built with JavaScript.  
It demonstrates product management, cart operations, shipping logic, and checkout handling using object-oriented programming principles.

---

## 📂 Project Structure

```
.
├── app.js                      # Simulation entry point
├── models
│   ├── Product.js              # Product class
│   ├── Customer.js             # Customer class with Cart
│   └── Cart.js                 # Cart class with all logic
├── services
│   ├── CheckoutService.js      # Checkout logic
│   └── ShippingService.js      # Shipment logic (getName, getWeight)
└── README.md
```

---

## 🧪 Example Output

```
 Product Attribute Checks:
- Cheese is expirable? true
- Cheese is expired? false
- Biscuit is expired? true
- Cheese is shippable? true
- Scratch Card is shippable? false

 Cart Subtotal: $900

 Items to be shipped:
- 2x Cheese (0.4kg)

** Shipment notice **
2x Cheese 400g
Total package weight 0.4kg

** Checkout receipt **
2x Cheese 200
1x Mobile 200
10x Scratch Card 500
----------------------
Order Subtotal 900
Shipping Fees 12
Paid Amount 912
Customer Current Balance After Payment 88
Cart empty? true
```

---

## 🚀 How to Run

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/ecommerce-console-js.git
   cd ecommerce-console-js
   ```

2. Run the app:
   ```bash
   node app.js
   ```

---

## 📄 License

MIT License — feel free to use and modify.

---

## 👨‍💻 Author

**Mohamed Baraka**  
Backend Developer | Node.js & Express.js Enthusiast  
[GitHub](https://github.com/mhmdbrkv) | [Portfolio](https://mhmdbrkv.github.io/portfolio)
