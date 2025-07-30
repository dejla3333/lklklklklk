// PART 1: LOGIN
let username = prompt("Enter your username (admin/user):");
let password = prompt("Enter your password:");

let role;
let securityLevel;

if ((username === "admin" || username === "user") && password === "1234") {
  role = username;
  securityLevel = username === "admin" ? "high" : "low";
} else {
  alert("Invalid username or password. Access denied.");
  throw new Error("Login failed");
}

// PART 2: COFFEE SHOP ORDER
let customerName = prompt("What's your name?");
let customerAge = parseInt(prompt("How old are you?"));
let customerCoffee = prompt("What type of coffee do you want? (espresso, latte, cappuccino)").toLowerCase();
let quantity = parseInt(prompt("How many cups would you like?"));

let pricePerCup = 0;

switch (customerCoffee) {
  case "espresso":
    pricePerCup = 2.5;
    break;
  case "latte":
    pricePerCup = 3.5;
    break;
  case "cappuccino":
    pricePerCup = 4.0;
    break;
  default:
    alert("Invalid coffee type!");
    throw new Error("Invalid coffee type");
}

let originalTotal = pricePerCup * quantity;
let discount = (customerAge < 18 || customerAge >= 60) ? originalTotal * 0.1 : 0;
let finalTotal = originalTotal - discount;

// PART 3: BILL SPLITTER + TIP
let splitCount = parseInt(prompt("How many people are splitting the bill? (1, 2, or more)"));
let tipPercent = parseInt(prompt("What tip percentage? (0, 5, 10, or 15)"));

let tipAmount = finalTotal * (tipPercent / 100);
let totalWithTip = finalTotal + tipAmount;
let amountPerPerson = totalWithTip / splitCount;

// RESULT
alert(`
  Hello ${customerName}!\n +
  You ordered ${quantity} cup(s) of ${customerCoffee}.\n\n +
  Original total: $${originalTotal.toFixed(2)}\n +
  Discount: $${discount.toFixed(2)}\n +
  Tip: $${tipAmount.toFixed(2)}\n +
  Total with tip: $${totalWithTip.toFixed(2)}\n +
  Each person pays: $${amountPerPerson.toFixed(2)}\n\n +
  User Role: ${role}\n +
  Security Level: ${securityLevel}`
);