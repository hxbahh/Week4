//If code in try runs successfully, catch is skipped, finally runs
//If try throws an error, jumps to catch, then finally runs
//If both try and catch are skipped or empty, finally still runs

//Catching runtime errors
try {
  let result = 10 / x; // x is not defined
  console.log(result)
} catch (e) {
  console.log(e.message); // ReferenceError
} finally {
  console.log("Cleaning up"); // Always runs
}

//parsing json
const json = '{ "name": "Hiba" }';

try {
  const data = JSON.parse(json);
  console.log("Parsed:", data.name);
} catch (err) {
  console.log("Invalid JSON!");
} finally {
  console.log("Parsing attempt finished.");
}

 //Catch only works for runtime errors, not syntax errors
try {
  let x = ; // syntax error  won't even run
} catch (e) {
  console.log(e.message);
}

//All sychronous code can catch error with try catch
//all asynchronous code cant catch error with try catch especially settimeout, promise.then etc
try {
  setTimeout(() => {
    throw new Error("Async error");
  }, 1000);
} catch (e) {
  console.log("Caught:", e.message); // This won't run
}

// Why bcz try...catch works only within the same call stack
// But setTimeout runs later(in a different stack) so the catch misses it

// Wrap the async code inside its own try catch:
setTimeout(() => {
  try {
    throw new Error("Async error");
  } catch (e) {
    console.log("Caught inside:", e.message); // Caught inside: Async error
  }
}, 1000);

//throw
//The throw statement is used to manually generate an error
try {
  throw new Error("Custom error");
} catch (e) {
  console.log("Caught:", e.message);
}
//we Can Throw Any Value
// throw "Just a string";         // bad practice
// throw 404;                     // not descriptive
// throw { message: "Fail" };     // risky
// throw new Error("Use this");  //good

//throwing in function
function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be 18+");
  }
  return "Access granted";
}

try {
  console.log(checkAge(15));
} catch (e) {
  console.log("Error:", e.message);
}
checkAge(19);  //Error: You must be 18+

//re throwing
try {
  try {
    throw new Error("Inner issue");
  } catch (e) {
    console.log("Inner catch:", e.message);
    throw e; // re-throw
  }
} catch (e) {
  console.log("Outer catch:", e.message);
}



