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

sayHi();  // this runs inside GEC

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

  console.log(a);     // undefined
var a = 5;

greet();            // Hello
function greet() {
  console.log("Hello");
}

//2. Code Execution Phase
// Code runs line by line.
// Variables are assigned actual values.
console.log(name); // undefined (not error)

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