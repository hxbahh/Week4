//promise.all([])
//Resolves when all promises succeed
//If any one fails the whole thing fails
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
  .then(results => console.log("All done:", results))
  .catch(err => console.log("One failed:", err));
//output- All done: ["A", "B", "C"]

//if one fails
const p1 = Promise.resolve("A");
const p2 = Promise.reject("B failed");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
  .then(results => console.log("All done:", results))
  .catch(err => console.log("One failed:", err));
  //output- One failed: B failed


 //Promise.race([]) 
//Resolves or rejects with first settled one
const p1 = new Promise(res => setTimeout(() => res("P1"), 3000));
const p2 = new Promise(res => setTimeout(() => res("P2"), 1000));

Promise.race([p1, p2])
  .then(result => console.log("Winner:", result))
  .catch(err => console.log("Error:", err));
//Winner: P2


//Promise.any([]) 
// Waits for first fulfilled, ignores rejections
//If all fail, throws an AggregateError
const p1 = Promise.reject("P1 failed");
const p2 = Promise.resolve("P2 succeeded");
const p3 = Promise.resolve("P3 succeeded");

Promise.any([p1, p2, p3])
  .then(result => console.log(" First success:", result))
  .catch(err => console.log(" All failed:", err));
//outpt-  First success: P2 succeeded

//if all fails
const p1 = Promise.reject("P1");
const p2 = Promise.reject("P2");

Promise.any([p1, p2])
  .then(result => console.log("Success:", result))
  .catch(err => console.log("All failed:", err));
//output- All failed:All promises were failed at [ "P1", " P2"]

Promise.any([p1,p2])
.then(val=>console.log(val))
.catch(error=>console.log("All failed ",error.errors))
//.errors is AggregateError shows array of result
//.message shows All promises were failed