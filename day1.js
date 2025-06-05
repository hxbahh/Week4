//An Execution Context is the environment in which JavaScript code runs
//There are two types:

// 1.Global Execution Context (GEC)
//Created automatically when a JS program starts.

//It contains:
//Global variables (var, let, const)

let name = "Hiba";   // global variable

function sayHi() {
  console.log("Hi " + name);
}

sayHi();  // 👈 This runs inside GEC

//2.Function Execution Context (FEC)
// Created every time a function is called.

// Each function has its own local memory.

// JS puts the function in the call stack, executes it, then removes it after it's done
let user = "Hiba";

function greet() {
  let message = "Hello";
  console.log(message + " " + user);
}
greet();


//1. Memory Creation Phase 
// JS scans your code before executing it.
// It sets up memory space for:
// variables → assigned undefined
// Functions → stored entirely

  console.log(a);     // undefined (not error)
var a = 5;

greet();            // Hello
function greet() {
  console.log("Hello");
}

//2. Code Execution Phase
// Code runs line by line.
// Variables are assigned actual values.
console.log(name); // 👉 undefined (not error)

var name = "Hiba";

function greet() {
  console.log("Hello");
}

greet(); // Hello

//hoisting
//hoisting means that:
//var and function declarations are moved to the top of their scope in memory phase.

console.log(a); // undefined
var a = 10;
//var a is hoisted as undefined, so it's not an error.

console.log(b); // ReferenceError
let b = 10;
//This leads us to the Temporal Dead Zone
//The time between variable declaration (using let or const) and its initialization.
//accessing it before initialization causes a ReferenceError.

console.log(age); //  ReferenceError
let age = 25;

// Call Stack Behavior
// it runs one function at a time.
// Uses a Call Stack (LIFO – Last In, First Out)

function one() {
  console.log("One");
  two();
}

function two() {
  console.log("Two");
  three();
}

function three() {
  console.log("Three");
}

one();

// three() = runs and pops off
// two() = runs and pops off
// one() = runs and pops off
// global() = remains

// JavaScript is a Single-Threaded Language
// it can do only one task at a time.
// it has one call Stack, so it executes code line by line

function task1() {
  console.log("Task 1");
}

function task2() {
  console.log("Task 2");
}

task1();
task2();

// use strict" – Strict Mode in JavaScript
// runs code in strict mode
// It helps:
// Catch mistakes early,Avoid bad practices

//How to Enable Strict Mode
"use strict";

"use strict";
x = 10;  // Error: x is not declared
//Without "use strict" this would silently create a global variable — which is dangerous

"use strict";
a = 5;  // Error: a is not defined

"use strict";
function sum(a, a) {
  return a + a;
} 
// SyntaxError: Duplicate parameter name not allowed

"use strict";
const obj = {};
Object.defineProperty(obj, "x", { value: 42, writable: false });
obj.x = 9; //  TypeError: Cannot assign to read only property

//IIfe Immediately Invoked Function Expression
// it’s a function that Is defined and called immediately
// Runs only once and Helps create a private 

(function () {
  let name = "Hiba";
  console.log("Hello " + name);  // Hello Hiba
})();
//name is private  can’t access it outside.

//closure
//A closure is when an inner function remembers and uses variables from its outer function — even after the outer function has finished running

function outer() {
  let name = "Hiba";

  function inner() {
    console.log("Hello " + name);
  }

  return inner;
}

const greet = outer();  // outer runs and returns inner
greet();  //  Hello Hiba










