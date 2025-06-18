//In the browser, window is the global object.
//All global variables, functions, and browser-related properties/methods live inside window.
//we can use window.alert() or just alert() , both are the same


//Key Properties and Methods of window
//1.window.innerWidth
//returns the width (in px) of the browser's viewport.
console.log("Width: " + window.innerWidth); //Width: 1366


// window.innerHeight
// returns the height (in pixels) of the browser's viewport.
console.log("Height: " + window.innerHeight); //Height: 600


window.addEventListener("resize", () => {
  console.log("Resized to: ", window.innerWidth, window.innerHeight);
});

//2.window location
//window.location is a JavaScript property that gives access to the current URL of the page, and allows to read or change parts of it — or even redirect to another URL

//Common Uses
//Get current page URL:
console.log(window.location.href);

//Redirect to another page
window.location.href = "https://google.com";

//Reload the page:
window.location.reload();

//Assign a new URL (same as href):
window.location.assign("https://example.com");

//Replace current page without saving history
window.location.replace("https://example.com");

<button onclick="alert(window.location.href)">
  Show Current URL
</button>

//window.navigator
//window.navigator is a JavaScript object that contains information about the browser and device being used. It gives details like the browser name, version, platform and more

//userAgent
console.log("User Agent: " + navigator.userAgent);

//platform
console.log("Platform: " + navigator.platform);

//language
console.log("Language: " + navigator.language);

//online Check if user is online/offline
console.log("Online: " + navigator.onLine);

//geolocation
navigator.geolocation.getCurrentPosition(function(position) {
  console.log("Latitude: " + position.coords.latitude);
  console.log("Longitude: " + position.coords.longitude);
});

//uses
//Detect device type or browser for compatibility
// Check if user is online/offline
// Get user's location (with permission)
// Customize language or experience

//window.history
//window.history is a JavaScript object that allows to interact with the browser's session history — the list of pages visited in the current tab

//exmaple
//Go back one page:
window.history.back();

//Go forward one page:
window.history.forward();

//Go back 2 pages:
window.history.go(-2);

//Check number of history entries:
console.log(window.history.length);

<button onclick="window.history.back()"> Go Back</button>
<button onclick="window.history.forward()"> Go Forward</button>


//window.screen
//window.screen is a JavaScript object that provides information about the user's physical screen — like screen size, available space, color depth, and more

//width
//total screen width in pixels
console.log("Screen Width: " + screen.width);

//height
//Total screen height in pixels
console.log("Screen Height: " + screen.height);

//availwidth
//Available width (excluding taskbars/docks)
console.log("Available Width: " + screen.availWidth);

//availheight
//Available height (excluding taskbars/docks)
console.log("Available Height: " + screen.availHeight);

//colordepth
//Color resolution of the screen
console.log("Color Depth: " + screen.colorDepth);

//window.localStorage & window.sessionStorage
//window.localStorage and window.sessionStorage are part of the Web Storage API in JavaScript, used to store key-value pairs in the browser

//localstorage
//methods-same for both

//setItem(key, value)	Store data
// getItem(key)	Retrieve data
// removeItem(key)	Delete one item
// clear()	Delete everything
// key(index)	Get the key name by index
// length	Number of items stored

//store
localStorage.setItem("username", "hiba");

// Retrieve
let user = localStorage.getItem("username");
console.log(user);  // hiba

// Remove
localStorage.removeItem("username");

// Clear all
localStorage.clear();

//sessionStorage
sessionStorage.setItem("sessionID", "abc123");
console.log(sessionStorage.getItem("sessionID"));  // abc123

//window.alert(), confirm(), prompt()
//these  methods are built-in JavaScript dialog boxes used to interact with users. They pause code execution until the user responds

//alert
//Displays a message box with an OK button.
alert("Welcome to my website!");

//window.confirm()
// Displays a message box with OK and Cancel buttons.
// Returns a boolean
// true if OK is clicked
// false if Cancel is clicked
let isSure = confirm("Do you want to delete this file?");
if (isSure) {
  console.log("Deleted.");
} else {
  console.log("Canceled.");
}

//window.prompt()
// Shows a message box that asks for input, with an input field and OK/Cancel buttons.
// Returns-
// the input string if OK is clicked
// null if Cancel is clicked
let name = prompt("What's your name?");
if (name !== null) {
  console.log("Hello, " + name + "!");
}


// window.setTimeout() & window.setInterval()
//theseare built-in JavaScript functions that allow you to delay or repeat code execution after a set amount of time (in milliseconds).

//setTimeout
//Run once after a delay
setTimeout(function() {
  console.log("Hello after 3 seconds");
}, 3000);

//cancel a timeout
let id = setTimeout(() => {
  console.log("You won't see this");
}, 5000);

clearTimeout(id);

//setInterval() 
//  Run repeatedly at fixed intervals
setInterval(function() {
  console.log("Runs every 2 seconds");
}, 2000);

//cancel interval
let id = setInterval(() => {
  console.log("Repeating...");
}, 1000);

setTimeout(() => clearInterval(id), 5000); // stops after 5 seconds


//all global variables and functions are automatically added as properties of the window object
//  This is because window is the global object in the browser
//When we declare a variable or function outside any block or function, it becomes part of window.
var name = "Hiba";
function greet() {
  console.log("Hi from global function!");
}

console.log(window.name);   // "Hiba"
window.greet();         // "Hi from global function!"

// var makes it global and attaches to window
// let and const do NOT attach to window

let city = "Kannur";
const country = "India";

console.log(window.city);     // undefined
console.log(window.country);  // undefined

//let and const create block-scoped variables.
//They exist globally, but not as properties of window


//window.scrollTo(), scrollBy()

 1. window.scrollTo(x, y)
// Scrolls the page to an exact position.

window.scrollTo(0, 500);
//Scrolls the page to 500px down from the top (vertically).
//Top-left corner = (0, 0)

window.scrollTo({
  top: 500,
  left: 0,
  behavior: "smooth"  //smooth scrooling
});

//2. window.scrollBy(x, y)
// Scrolls relative to the current position.

window.scrollBy(0, 100);
// Scrolls the page down 100px from the current scroll position.

// With smooth behavior
window.scrollBy({
  top: 100,
  left: 0,
  behavior: "smooth"
});

<button onclick="window.scrollTo({ top: 1000, behavior: 'smooth' })">
  Scroll to Bottom
</button>

<button onclick="window.scrollBy({ top: 100, behavior: 'smooth' })">
  Scroll Down by 100px
</button>

