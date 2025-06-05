//number
// JavaScript has only one type of number
let a = 10;       // Integer
let b = 3.5;      // Float (decimal)
let c = "abc" / 2; // NaN (Not a Number)
let d = 1 / 0;     // Infinity

//toFixed()
let num = 3.14159;
console.log(num.toFixed(2)); // 👉 "3.14" (string)

//parseInt
let value = "42";
console.log(parseInt(value)); // 👉 42 (number)

//isNaN
let result = "abc" / 2;
console.log(isNaN(result)); // 👉 true

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

//set
//A Set is a collection of unique values.
//values can be of any type (number, string, object etc)

const mySet = new Set();

// Add values
mySet.add(10);
mySet.add(20);
mySet.add(10);  // duplicate, will be ignored

console.log(mySet);         //  Set(2) {10, 20}
console.log(mySet.size);    //  2
console.log(mySet.has(10)); //  true

// Remove a value
mySet.delete(20);
console.log(mySet);         //: Set(1) {10}

// Iterate over a Set
for (let item of mySet) {
  console.log(item);        // 10
}

//map
// A Map is a collection of key-value pairs.
// Keys can be of any type (not just strings like in objects).
// Maintains insertion order

const myMap = new Map();

// Add key-value pairs
myMap.set('name', 'Hiba');
myMap.set('age', 22);
myMap.set(true, 'Boolean Key');

console.log(myMap);              // Map(3)
console.log(myMap.get('name'));  // "Hiba"
console.log(myMap.has('age'));   //  true
console.log(myMap.size);         //  3

// Delete a key
myMap.delete(true);
console.log(myMap);              // Map(2)

// Iterate over a Map
for (let [key, value] of myMap) {
  console.log(key, value);
}
// javascript array
// Used to store ordered collections of data.
// Elements are stored with numeric indexes starting from 0.
// Maintains the order of insertion.
// Can hold any data type: numbers, strings, objects, other arrays.
// Has built-in methods like .push(), .pop(), .map(), .filter(), etc.
// Access elements using their index (e.g., arr[0]).
// Ideal for lists or sequences of data.
let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); //  "apple" (access by index)
console.log(fruits.length); //  3


//  JavaScript Object
// Used to store unordered key-value pairs.
// Keys are usually strings (or symbols), and values can be any data type.
// No guarantee of key order (though modern JS engines keep order for strings).
// Access values using the key (e.g., obj["key"] or obj.key).
// Has methods like Object.keys(), Object.values(), and Object.entries().
// Ideal for representing a single entity or describing a thing’s properties.
let person = {
  name: "Hiba",
  age: 22,
  country: "India"
};

console.log(person.name); // "Hiba" 
console.log(Object.keys(person)); //  ["name", "age", "country"]

let students = [                  //combininng both
  { name: "Hiba", age: 22 },
  { name: "Aisha", age: 21 }
];

console.log(students[0].name); //  "Hiba"

//weakset
//A WeakSet is a collection of objects only.
//It does not allow primitive values (like numbers or strings), and its references are weak, meaning if no other references to the object exist, it can be garbage collected
let obj1 = { name: "Hiba" };
let obj2 = { age: 21 };

let weakSet = new WeakSet();
weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true

obj1 = null; // eligible for garbage collection

//weakMap
//A WeakMap is like a regular Map, but Only objects can be keys
let user = { name: "Hiba" };

let weakMap = new WeakMap();
weakMap.set(user, "Developer");

console.log(weakMap.get(user)); // "Developer"

user = null; // key will be removed from the WeakMap automatically

//Symbol
//A Symbol is a unique and immutable primitive value used as an identifier for object properties.
let id = Symbol("id");
let user = {
  name: "Hiba",
  [id]: 12345
};

console.log(user[id]); // 12345
console.log(Object.keys(user)); // ['name'] (Symbol is hidden)

//BigInt
//BigInt is used for very large integers that cannot be represented by the regular Number type (which is limited to 2⁵³ - 1)
let a = 9007199254740991n;  // This is larger than Number.MAX_SAFE_INTEGER
let b = 1n;

console.log(a + b); // 9007199254740992n

let big = 10n;
let num = 5;
console.log(big + num); // TypeError

//short circuiting
//JavaScript stops evaluating an expression as soon as the result is known.

//logical OR- returns the first truthy value
console.log(null || 0 || "Hiba" || 21); // "Hiba"
//null - falsy
//0 - falsy
//"Hiba" - truthy - returned
//21 is not even checked

//logical &&- returns first falsy values
console.log(10 && "hello" && 0 && "world"); // 0
// 10 → truthy
// "hello" → truthy
// 0 → falsy →  returned
// "world" is not even checked











