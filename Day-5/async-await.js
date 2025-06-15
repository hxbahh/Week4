//async and await are syntactic sugar over Promises.
//They make asynchronous code look and behave like synchronous code, which makes it easier to read and write.

//async keyword
//Used before a function to make it return a Promise, even if we return a value directly, it will automatically be wrapped in a resolved promise

//await keyword
//Can be used only inside an async function. it waits for a Promise to resolve, and then returns the result
//it pauses the execution of the function until the promise resolves

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value!!");
  }, 10000); // resolves after 10 seconds
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value2!!");
  }, 5000); // resolves after 5 seconds
});

async function handlePromise() {
  console.log("Hello World!!");

  const val1 = await p1;
  console.log("Namaste JavaScript");
  console.log(val1);

  const val2 = await p2;
  console.log("Namaste JavaScript 2");
  console.log(val2);
}
handlePromise()

// Logs "Hello World!!" immediately.
// await p1 and p2 waits 10 seconds, it doesnot take 15 minutes
// then logs --
// Namaste JavaScript
// Promise Resolved Value!!
//Namste Javascript
// Promise Resolved Value

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value!!");
  }, 5000); // resolves after 10 seconds
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Value2!!");
  }, 10000); // resolves after 5 seconds
});

async function handlePromise() {
  console.log("Hello World!!");

  const val1 = await p1;
  console.log("Namaste JavaScript");
  console.log(val1);

  const val2 = await p2;
  console.log("Namaste JavaScript 2");
  console.log(val2);
}
handlePromise()

//Hello World!!
//after 5 seconds--
//   Namaste JavaScript
//   Promise Resolved Value!!
//after 5 seconds--
//   Namaste JavaScript 2
//   Promise Resolved Value2!!

//error handling
async function User() {
  try {
    let res = await fetch("https://wrong.com");
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}
User()
//or there's another method to handle error thats an older way
User().catch(err=>console.log(err)) //no need of try and catch inside a function



