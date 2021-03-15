class Grocery {
  // declare attributes with their data types
  name: string;
  SKU: string;
  quantity: number;
  price: number;

  // add a constructor
  constructor(name: string, sku: string, qty: number, price: number) {
    this.name = name;
    this.SKU = sku;
    this.quantity = qty;
    this.price = price;
  }
}

// create a list of grocery items
let grocery_cart = [
  new Grocery("milk", "M123", 3, 12),
  new Grocery("bread", "B456", 6, 18),
  new Grocery("eggs", "E789", 11, 7)
]

// access the html element with id app
const element = document.getElementById("app");

// create a "p" element for each item in the grocery cart
// append it to the html page
grocery_cart.forEach(e => {
  const p = document.createElement("p");
  p.textContent = `Item: ${e.name} (SKU: ${e.SKU}) Qty: ${e.quantity} - $${e.price}`;
  element.appendChild(p);
});