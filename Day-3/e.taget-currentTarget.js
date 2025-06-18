//Event Object – event.target, event.preventDefault

//event.target refers to the exact HTML element that triggered the event.
//When us listen to an event like click, input, or submit, JavaScript automatically gives us an event object, and event.target tells us which element caused the event to happen

//event.target returns the specific HTML element that triggered the event. It's commonly used to identify where the user clicked, typed or interacted inside a larger component
{/* <form id="myForm">
  <input type="text" />
  <button>Submit</button>
</form>

<script>
  document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page from reloading
    console.log("Form submitted!");
    console.log("Target:", e.target); // The form element
  });
</script> */}

 //Use Cases of event.target
// 1. Getting the value from a form input:

input.addEventListener("input", function(e) {
  console.log("Typed:", e.target.value);
});
// 2. Delegating clicks inside a parent:

ul.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.style.color = "red";
  }
});


//event.currentTarget
//event.currentTarget is the DOM element that the event listener is directly attached to
//  it helps to handler element  even when the actual event started inside some nested child

<div id="parent">
  <button id="child">Click Me</button>
</div>

document.getElementById("parent").addEventListener("click", function (e) {
  console.log("event.target:", e.target.id);
  console.log("event.currentTarget:", e.currentTarget.id);
});
//output---
//When you click the button
// event.target: child
//event.currentTarget: parent

//When you click the grey area (parent)
//event.target: parent
//event.currentTarget: parent

//Use Case
// Event Delegation
//we add one event listener to a parent and use e.target to find which child was clicked but use e.currentTarget to refer back to the parent element
parent.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    // e.currentTarget is always the parent
    console.log("Clicked inside parent:", e.currentTarget.id);
  }
});


//e.target is where the event started (button)
//e.currentTarget is where the listener was added (div)