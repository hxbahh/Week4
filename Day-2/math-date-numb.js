//number
// JavaScript has only one type of number
let a = 10;       // Integer
let b = 3.5;      // Float (decimal)
let c = "abc" / 2; // NaN (Not a Number)
let d = 1 / 0;     // Infinity

//toFixed()
let num = 3.14159;
console.log(num.toFixed(2)); //  "3.14" (string)

//parseInt
let value = "42";
console.log(parseInt(value)); //  42 (number)

//isNaN
let result = "abc" / 2;
console.log(isNaN(result)); //  true

//tostring
let num = 100;
console.log(num.toString()); // "100"

//parseFloat
let price = "3.14";
console.log(parseFloat(price)); // 3.14

//math.round
console.log(Math.round(4.6));  // Output: 5
console.log(Math.round(4.3));  // Output: 4

//math.floor
console.log(Math.floor(4.9));  // Output: 4
console.log(Math.floor(4.1));  // Output: 4

//math.ceil
console.log(Math.ceil(4.1));   // Output: 5
console.log(Math.ceil(4.9));   // Output: 5

//math.trunc
console.log(Math.trunc(4.9));  // Output: 4
console.log(Math.trunc(-4.9)); // Output: -4

//math.random
console.log(Math.random());    // Output: 0.234567 (example, changes every time)

//math.max
console.log(Math.max(3, 5, 8));   // Output: 8
console.log(Math.max(-1, -5, -3)); // Output: -1

//Math.min
console.log(Math.min(3, 5, 8));   // Output: 3
console.log(Math.min(-1, -5, -3)); // Output: -5

//Math.pow
console.log(Math.pow(2, 3));     // Output: 8   (2^3 = 8)
console.log(Math.pow(5, 2));     // Output: 25  (5^2 = 25)

//Math.sqrt
console.log(Math.sqrt(16));      // Output: 4
console.log(Math.sqrt(25));      // Output: 5

//Date methods
//getFullYear
const now = new Date();
console.log(now.getFullYear());  // Example output: 2025

//getMonth
const now = new Date();
console.log(now.getMonth());     // Example output: 5  (means June)

//getDate
const now = new Date();
console.log(now.getDate());      // Example output: 5

//getDay
const now = new Date();
console.log(now.getDay());       // Example output: 4  (Thursday)

//getHours
const now = new Date();
console.log(now.getHours());     // Example output: 16  (4 PM)

//getMinutes
const now = new Date();
console.log(now.getMinutes());   // Example output: 30

//getSeconds
const now = new Date();
console.log(now.getSeconds());   // Example output: 45