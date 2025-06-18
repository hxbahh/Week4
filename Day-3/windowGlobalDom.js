//In a browser, the window object is the global object. All global variables and functions become properties of window. The document object is a property of window
// and it represents the HTML page as the DOM, which JavaScript can interact with

//          window (global object)
//         ├──────────────┐
//         │              │
//    JavaScript Globals   document (DOM)
//         │              │
//       alert()      →  HTML page structure
//       setTimeout() →  <html>, <body>, etc.

//window object
// The main object in the browser.
// Everything runs inside the window.
// It contains:

// DOM (document)
// Browser APIs (like alert, fetch)
// JavaScript global variables

console.log(window);  // The browser's main object

//Global Object
// In browsers:
// The global object is window.
//
var name = "Hiba";
console.log(window.name); // "Hiba"

//let and const are not added to window

// document object (Part of the DOM)
// A property of window.
// Represents the webpage (DOM)
// Lets you access and manipulate the page structure
window.document.getElementById("title")
// same as
document.getElementById("title")

// | Concept       | Description                                       | Example                         |
// | ------------- | ------------------------------------------------- | ------------------------------- |
// | `window`      | The top-level object in the browser               | `window.alert()`, `window.name` |
// | Global Object | The default object for global variables/functions | `var x = 5` → `window.x === 5`  |
// | `document`    | A property of `window` that represents the DOM    | `document.getElementById()`     |

window.document === document // true
window.alert === alert       // true

var x = 10;
console.log(window.x);       // 10

let y = 20;
console.log(window.y);       // undefined (let/const not added)
