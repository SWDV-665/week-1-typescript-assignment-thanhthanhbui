var Grocery = /** @class */ (function () {
    // add a constructor
    function Grocery(name, sku, qty, price) {
        this.name = name;
        this.SKU = sku;
        this.quantity = qty;
        this.price = price;
    }
    return Grocery;
}());
// create a list of grocery items
var grocery_cart = [
    new Grocery("milk", "M123", 3, 12),
    new Grocery("bread", "B456", 6, 18),
    new Grocery("eggs", "E789", 11, 7)
];
// access the html element with id app
var element = document.getElementById("app");
// create a "p" element for each item in the grocery cart
// append it to the html page
grocery_cart.forEach(function (e) {
    var p = document.createElement("p");
    p.textContent = "Item: " + e.name + " (SKU: " + e.SKU + ") Qty: " + e.quantity + " - $" + e.price;
    element.appendChild(p);
});
