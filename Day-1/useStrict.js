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
x = 10;  // Error, x is not declared
//Without "use strict" this would silently create a global variable — which is dangerous

"use strict";
a = 5;  // Error, a is not defined

"use strict";
function sum(a, a) {
  return a + a;
} 
// SyntaxError Duplicate parameter name not allowed

"use strict";
const obj = {};
Object.defineProperty(obj, "x", { value: 42, writable: false });
obj.x = 9; //  TypeError Cannot assign to read only property