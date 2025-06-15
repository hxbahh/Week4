//In ES6, modules are a way to split JavaScript code into reusables Each module can export variables, functions or classes and other files can import them as needed
//this helps keep code organized, avoids polluting the global scope, and supports better maintenance and scalability in larger applications
//ES6 modules support two kinds of exports:

//Named exports, where multiple things can be exported.
// math.js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;

//import them like
// main.js
import { add, sub } from './math.js';
console.log(add(5, 3)); // 8

//we must use the exact names when using { add, sub }

//Default exports, where only one value is exported as the default.
// greet.js
export default function greet(name) {
  return `Hello, ${name}`;
}

// main.js
import greet from './greet.js';
console.log(greet("Hiba")); // Hello, Hiba

//we can give any name to a default import
import xyz from './greet.js';
console.log(greet("Hiba"));

//combiine default and named
// tools.js
export const hi = () => "Hi!";
export default function bye() {
  return "Bye!";
}

//main.js
import bye, { hi } from './tools.js';

console.log(hi());  // Hi!
console.log(bye()); // Bye!

//Each file is a module

//if you're using ES6 modules (i.e., using import and export), you need to tell the browser:
<script type="module" src="script.js"></script>
//why Because modules behave differently than regular scripts:

//in math.js file
export function add(a, b) {
  return a + b;
}

//in main.js file
import { add } from './math.js';
console.log(add(2, 3)); // 5

//in html file
<!DOCTYPE html>
<html>
  <body>
    <script type="module" src="main.js"></script>
  </body>
</html>


//In JavaScript ES6 all modules automatically run in strict mode even without using strict mode