//Debounce ensures that a function is called only once after a specified delay after the last event
//use when we want to wait until the event stops firing for a while.
//Ideal for search inputs, form validations etc

function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer); // Cancel previous
    timer = setTimeout(func, delay); // Start new timer
  };
}

function sayHello() {
  console.log("Hello after you stopped typing!");
}

const debouncedHello = debounce(sayHello, 1000);

// Simulate user typing
document.addEventListener("keydown", debouncedHello);

// Every time we press a key,
// It waits 1 second
// If we press another key before 1 sec: timer resets
// If we stop typing, Hello... appears once


//Throttle ensures a function is called at most once every x milliseconds, no matter how many times the event fires
//use when we want to run a function continuously but not too frequently
//Ideal for scroll events, resize, drag etc

function throttle(func, limit) {
  let canRun = true;
  return function () {
    if (canRun) {
      func();
      canRun = false;
      setTimeout(() => (canRun = true), limit);
    }
  };
}
function showScroll() {
  console.log("Scrolling...");
}

const throttledScroll = throttle(showScroll, 1000);

// simulate user scrolling
window.addEventListener("scroll", throttledScroll);

//when you scroll fast, it logs Scrolling... once every second, no matter how much we scroll