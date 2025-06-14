//Synchronous

// Synchronous JavaScript means that the code is executed line by line, in the exact order it appears.
// Each operation must finish before the next one starts.
// It's a blocking execution model — so if one task takes time, the rest have to wait.
// This happens because JavaScript is single-threaded and uses a call stack to keep track of function calls.
// Synchronous code is predictable and easier to debug, but it can cause issues if a task takes too long — like blocking the UI.

function first() {
  second();
  console.log("First");
}

function second() {
  console.log("Second");
}
first();

// Starts with an empty call stack
// first() is called → first is pushed to stack
// Inside first(), it calls second() = second is pushed
// second() runs console.log("Second") = then popped off
// Now back in first(), it runs console.log("First") = then popped off


//Asynchronous

//Asynchronous JavaScript allows code to run without blocking the execution of the rest of the program.
//It means long-running tasks (like fetching data) can run in the background without freezing the page

//JavaScript will continue executing other code.
//Once the asynchronous task is done, its result is handled using callbacks, Promises, or async/await.
//This non-blocking behavior is possible because JavaScript uses the event loop, Web APIs, and the callback queue, even though it's single-threaded

console.log("1");
setTimeout(() => {
  console.log("2");
}, 0);
console.log("3");

//JS runs console.log("1") and console.log("3") immediately.

//setTimeout is handled by the browser, and the callback runs later via the event loop.

//1.settimeout
//Delays execution of a function once after a specified time

console.log("start")
setTimeout(() => {
  console.log("After 2 seconds");
}, 2000); // 2000ms = 2s
console.log("end");

//setinterval
//repeats execution of a function at regular intervals

let count = 0;
const interval = setInterval(() => {
  console.log("Repeating every second", ++count);
  if (count === 3) clearInterval(interval); // stop after 3 times
}, 1000);

//api call usingg fetch
//the fetch() is used to make HTTP requests like GET, POST, PUT, DELETE from the browser to servers

//event listener
//Event listeners wait for something to happen like a user clicking a button. JavaScript doesn't stop and wait for that click, it keeps running other code. That’s why event listeners are asynchronous
// document.getElementById("btn").addEventListener("click", () => {
//   console.log("Button clicked!");
// });
// console.log("End");


