

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
//set
// Stores unique values only.
//  No duplicates allowed.
// Cannot access by index.
// Maintains insertion order.
// Common use: remove duplicates, store unique tags or IDs

// javascript array
// Used to store ordered collections of data.
// Elements are stored with numeric indexes starting from 0.
// Maintains the order of insertion.
// Can hold any data type: numbers, strings, objects, other arrays.
// Has built-in methods like .push(), .pop(), .map(), .filter(), etc.
// Access elements using their index 
// Ideal for lists or sequences of data.
let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); //  "apple" (access by index)
console.log(fruits.length); //  3

//map
//Stores key-value pairs.
// Keys can be any type (number, string, object, etc.).
//  Maintains insertion order.
//  Has built-in .size to count entries.
// More powerful: .set(), .get(), .has() methods.
// Common use: dynamic data with flexible key types.

//  JavaScript Object
// Used to store unordered key-value pairs.
// Keys are usually strings or symbols, and values can be any data type.
// No guarantee of key order
// Access values using the key
// Has methods like Object.keys(), Object.values(), and Object.entries().

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