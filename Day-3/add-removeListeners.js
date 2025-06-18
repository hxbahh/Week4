//addEventListener is a JavaScript method that attaches an event handler to a specific HTML element, so it can listen and respond to user actions like clicks, inputs, mouseovers, etc

element.addEventListener("event", callbackFunction, options);

//event: The event type, like "click", "input", "mouseover", etc
//callbackFunction: The function that runs when the event happens
//options (optional): An object like true  or false (for bubbling/capturing)
<button id="btn">Click Me</button>

<script>
  function sayHello() {
    alert("Hello!");
  }

  document.getElementById("btn").addEventListener("click", sayHello);
</script>

//The sayHello function runs every time the button is clicked

//removeEventListner
//removeEventListener is a method that removes a previously attached event listener from an element — stopping it from responding to that event
element.removeEventListener("event", callbackFunction);
//we must use the same function reference that was used in addEventListenerr

<button id="btn">Click Me</button>

<script>
  function greet() {
    alert("Hello!");
  }

  const btn = document.getElementById("btn");

  btn.addEventListener("click", greet);         // Add listener
  btn.removeEventListener("click", greet);      // Remove listener (now it won’t work)
</script>

<button id="onceBtn">Click Once</button>

<script>
  function handleClick() {
    alert("You clicked once!");
    onceBtn.removeEventListener("click", handleClick);
  }

  const onceBtn = document.getElementById("onceBtn");
  onceBtn.addEventListener("click", handleClick);
</script>
//After the first click, the event listener is removed — so it runs only once.

// | Feature         | `addEventListener`                         | `removeEventListener`                           |
// | --------------- | ------------------------------------------ | ----------------------------------------------- |
// | Purpose         | Attach a function to run on an event       | Detach a previously attached event handler      |
// | Key Requirement | Needs event name and callback function     | Must match exact function & event name          |
// | Use case        | Make page interactive (e.g., button click) | Prevent memory leaks or stop responding         |
// | Alternatives    | Use `{ once: true }` for one-time use      | Useful in cleanup, like in `setTimeout`, modals |


