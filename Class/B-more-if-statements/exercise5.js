// Currency converter

// The values of currency can be GBP, EUR or USD
let currency = "USA";

let symbol = "";

// Complete the "if/else" statements below so it sets the correct value for symbol
if (currency === "EUR") {
  symbol = "€";
} else if (currency === "USA") {
  symbol = "$";
} else if (currency === "UK") {
  symbol = "£";
}

console.log("Currency is " + currency + ", and symbols is: " + symbol);

// Try changing the value of currency on line 5 to show different results
