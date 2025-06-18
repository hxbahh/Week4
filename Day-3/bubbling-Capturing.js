//What is the Event Flow?
//When an event happens (like a click), the browser handles it in three phases:
//Capturing Phase (top → down)
//Target Phase (event reaches the clicked element)
//Bubbling Phase (bottom → up)

//Event Bubbling — Default Behavior
// event bubbling is the default phase where the event propagates from the target element up to the root
<div id="parent">
  <button id="child">Click Me</button>
</div>

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

//Child clicked
//Parent clicked
//Because the event bubbles up: from <button> → <div>


//event capturing
//event capturing is the opposite, the event is first handled from the top of the DOM tree down to the target element
//To use it, pass { capture: true } in addEventListener
parent.addEventListener("click", () => {
  console.log("Parent clicked (capturing)");
}, true); // capture mode

child.addEventListener("click", () => {
  console.log("Child clicked");
});
//Parent clicked (capturing)
//Child clicked


//stopPropagation()
//Use this to stop the event from bubbling or capturing further
button.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Only button runs, no parent");
});

//event.stopImmediatePropagation() stops:
//The event from bubbling up and Any other event listeners on the same element from running
<button id="btn">Click Me</button>

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("First handler");
});

btn.addEventListener("click", function (e) {
  e.stopImmediatePropagation();
  console.log("Second handler - stops everything");
});

btn.addEventListener("click", function () {
  console.log("Third handler");
});
//Second handler - stops everything
//It skips First and Third handlers, even though they’re all attached to the same element (btn).
//It also stops the event from bubbling to any parent

//when to use
//When you want only one specific event handler to run

//stopImmediatePropagation() not only prevents the event from bubbling up the DOM but also blocks any additional event listeners on the same element from executing. It is stronger than stopPropagation() and is useful when a handler must take full control of the event