//how js handles asynchronous

//1.callStack
//When you run code, functions are pushed on the call stack
//When a function finishes, it's popped off the stack
function sayHi() {
  console.log("Hi");
}
sayHi(); // pushed to stack, then popped

//2.web api
//web APIs like helpers from the browser
//They do jobs that JavaScript can’t do alone like Waiting (like setTimeout), Making API calls (fetch), Listening for user clicks (addEventListener)

console.log("Start");

setTimeout(() => {
  console.log("Pizza is ready");
}, 2000);

console.log("stop");
 //JS sees: console.log("Start cooking") and Runs immediately
//JS sees: setTimeout()
//It gives the timer to the browser
//The browser counts 2 seconds in the background, JS does not wait and it continues
//JS sees: console.log("Chop vegetables") Runs immediately
//After 2 seconds, the browser runs function of setTimeout

//3.callback queue
//It’s a waiting room for functions(callbacks) that are ready to run but can’t run yet because JavaScript is still busy.
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);  // 0 ms delay!

console.log("C");
//"A" is printed
// setTimeout() is sent to Web API
// "C" is printed
// After 0 sec, "B" is moved to the callback queue
// But it waits until JavaScript is done
// Then event loop pushes "B" to the stack, "B" is printed

//4.event loop
// The Event Loop is a mechanism in JavaScript that continuously checks the call stack and the callback queue.
//If the call stack is empty, the event loop takes the first function from the callback queue and pushes it to the call stack for execution.
