let theYear = 2085;
let message = "It is the current year";

// Write an "if/else" statement below to print either -
// "Year is in the past"
// "It is the current year"
// "Year is in the future"

if (theYear === 2025) {
  message = "It is the current year";
} else if (theYear < 2025) {
  message = "Year is in the past";
} else {
  message = "Year is in the future";
}
console.log(message);
