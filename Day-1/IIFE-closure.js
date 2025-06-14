
//IIfe Immediately Invoked Function Expression
// it’s a function that is defined and called immediately
// Runs only once and Helps to create a private 

(function () {
  let name = "Hiba";
  console.log("Hello " + name);  // Hello Hiba
})();
//name is private  can’t access it outside.

//closure
//A closure is when an inner function remembers and uses variables from its outer function, even after the outer function has finished running

function outer() {
  let name = "Hiba";

  function inner() {
    console.log("Hello " + name);
  }

  return inner;
}

const greet = outer();  // outer runs and returns inner
greet();  //  Hello Hiba