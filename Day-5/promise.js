//A Promise is a special object in JavaScript that helps us handle asynchronous tasks — things that take time, like loading data from the internet
//has three states
//1.Pending – This is the initial state. it means the asynchronous task has started
//2.Fulfilled – This means the task was completed successfully and the Promise has a result
//3.Rejected – This means the task failed and the Promise has an error

let promise=new Promise((resolve,reject)=>{
    resolve('success')
    reject('error')
})
promise.then(result=>{
    console.log(result)
}).catch(failed=>{
    console.log(failed)
})
//.then() is called when resolved
//.catch() is called when rejected

//A Promise can eitherr resolved or rejected but not both
//resolve - the promise is marked as fulfilled
//reject - the promise is marked as rejected
//Any further calls to resolve() or reject() are ignored

let promisse = new Promise(function(resolve, reject) {
  let success = true;

  if (success) {
    resolve("Task completed!");
  } else {
    reject(" Task failed!");
  }
});

promisse
  .then(function(result) {
    console.log(result);  // "Task completed!"
  })
  .catch(function(error) {
    console.log(error); // only runs if rejected
  })
  .finally(function() {
    console.log(" Promise settled.");
  });

//chaining
//then() chaining is a way to handle multiple asynchronous steps in order
//Each then() waits for the last one to finish and uses its result

let promissse = new Promise(function(resolve) {
  resolve(10); //starts wth 10
});
promissse
  .then(function(num) {
    console.log("Step 1:", num); // 5
    return num * 2;
  })
  .then(function(result) {
    console.log("Step 2:", result); // 10
    return result + 3;
  })
  .then(function(final) {
    console.log("Step 3:", final); // 13
  })
  .catch(function(error) {
    console.log("Error:", error);
  });
  

Promise.resolve(10)
  .then(res => {
    console.log(res); // 10
    throw new Error("broke");
  })
  .then(res => {
    console.log("Will not run");
  })
  .catch(err => {
    console.log("Caught:", err.message); //Caught:broke
  });

