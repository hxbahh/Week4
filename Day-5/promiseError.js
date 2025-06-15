//if a Promise is rejected, it will be caught by .catch() or inside try...catch if using await
const p = new Promise((resolve, reject) => {
  reject("Something went wrong");
});
p.catch(err => console.log("Caught:", err)); // "Caught: Something went wrong"


//throw in Promise
new Promise((resolve, reject) => {
  throw new Error("Boom"); // same as reject
})
.catch(err => console.log("Caught:", err.message)); // "Caught: Boom"


//in asynchronous
fetch("https://wrong-url.com/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err.message));


  //async/await
  async function data() {
  try {
    const res = await fetch("https://wrong.com");
    console.log(res);
  } catch (err) {
    console.log("Caught", err.message);
  }
}
data();

//If no .catch()
new Promise((_, reject) => {
  reject("Oops");
});

//No .catch — unhandled rejection warning
//UnhandledPromiseRejectionWarning

