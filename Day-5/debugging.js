//Debugging is the process of finding, diagnosing, and fixing errors (bugs) in code

//Common JavaScript Debugging Tools & Techniques are-
//console.log()
let name = "Hiba";
console.log("Name is:", name);

// Developer Tools (Browser DevTools)
//Checks-

// Console errors
// Variable values
// DOM elements
// Network/API responses
// Performance etc.

//debugger Statement
//Pauses execution and opens DevTools at that line
let a = 5;
debugger;
let b = a + 10;

//Breakpoints (in DevTools)
//we can click the line number in the Sources tab to add a breakpoint
// Execution will pause there so we can-
// Step through line by line
// Watch variable values
// Inspect call stack

//Try...Catch for Error Debugging
try {
  // risky code
  let result = riskyFunction();
} catch (err) {
  console.error("Caught an error:", err);
}

//debugging asyc code
async function getData() {
  try {
    const res = await fetch("wrong-url");
    const data = await res.json();
  } catch (err) {
    console.error("API Error:", err.message);
  }
}
