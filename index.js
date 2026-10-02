const items = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

function purchaseItem(itemName, quantity) {
    if (!items.includes(itemName)) {
        console.log("Error: Invalid item! Unable to complete purchase!");
        return;
    }

    if (isNaN(quantity) || quantity <= 0) {
        console.log("Error: Invalid quantity! Unable to complete purchase!");
        return;
    }

    let price;
    if (itemName === "Apple") {
        price = 1.99;
    }
    if (itemName === "Banana") {
        price = 0.99;
    }
    if (itemName === "Orange") {
        price = 1.49;
    }
    if (itemName === "Grapes") {
        price = 2.99;
    }
    if (itemName === "Mango") {
        price = 1.79;
    }

    const totalPrice = price * quantity;

    
    console.log(`Thanks for shopping! You purchased ${quantity} ${itemName}(s). The total price is $${totalPrice}`);

}

function addItem(newItem) {
    items.push(newItem);
    console.log(`${newItem} successfully added to the supermarket!`);
}

purchaseItem("Apple", 3);

purchaseItem("lemon", 2);

purchaseItem("Banana", "two");

purchaseItem("Grapes", 0);

addItem("Pineapple");

purchaseItem("Pineapple", 5);

console.log("Welcome to Flatironsupermarket!")