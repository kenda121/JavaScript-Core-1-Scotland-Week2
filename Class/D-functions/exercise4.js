// This function has one input: inputNumber, and an output
function doubleNumber(inputNumber) {
  return inputNumber * 2;
}

function tripleNumber(inputNumber) {
  return inputNumber * inputNumber * inputNumber;
}

let x = 10;

let y = doubleNumber(x);
console.log(x + " doubled = " + y);

let z = tripleNumber(x);
console.log(x + " tripled = " + z);
