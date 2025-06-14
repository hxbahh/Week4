//callback hell
//A callback is just a function passed as an argument to another function, to be called later  after something finishes
//Callback hell occurs when there are too many nested callbacks, making code hard to read and manage. It’s a common issue in asynchronous JavaScript, but we can avoid it using Promises or async/await for cleaner, more maintainable code..

//It makes code Hard to read ,hard to maintain ,hard to debug
setTimeout(() => {
  console.log("1. Boil water");

  setTimeout(() => {
    console.log("2. Add noodles");

    setTimeout(() => {
      console.log("3. Serve noodles");
    }, 1000);

  }, 1000);

}, 1000);
//It’s called pyramid of Doom bcz when we write too many nested callbacks, the code moves further and further to the right just like the shape of a pyramid

