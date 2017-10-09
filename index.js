// Level 1

function add(x, y) {
  return x + y;
}
console.log(add(10, 20));

function substract(x, y) {
  return x - y;
}
console.log(substract(60, 30));

function multiply(x, y) {
  return x * y;
}
console.log(multiply(6, 3));

function divide(x, y) {
  return x / y;
}
console.log(divide(12, 4));

function modulo(x, y) {
  return x % y;
}
console.log(modulo(6, 3));

// Level 2

function total(x, y) {
  return add(substract(x, y), divide(x, y));
}

console.log("divide", divide(10, 20));
console.log("total", total(10, 20));
