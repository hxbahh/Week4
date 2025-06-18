//The document object is part of the DOM (Document Object Model) and represents the entire HTML page as a JavaScript object. It lets you access, modify, and interact with HTML elements using JavaScript
//It’s automatically available in any browser environment — no need to import anything<html>

// Common document Methods
//1. document.getElementById("id")
let a = document.getElementById("main-heading");

//2. document.getElementsByClassName("class")
//Returns a live htmlCollection of elements with the class name
let b = document.getElementsByClassName("item");

//3.document.getElementsByTagName("tag")
//Returns all elements with that tag name
let c = document.getElementsByTagName("p");

//4. document.querySelector("selector")
//Returns the first matching element using CSS selectors
let d = document.querySelector(".btn");

//5. document.querySelectorAll("selector")
//Returns all matching elements (as a NodeList)
let e = document.querySelectorAll(".btn");



// | Property         | Description                  |
// | ---------------- | ---------------------------- |
// | `document.title` | Get/set the title of the tab |
// | `document.URL`   | Get the page URL             |
// | `document.body`  | Access the `<body>` element  |
// | `document.head`  | Access the `<head>` element  |
// | `document.forms` | Access all forms             |



//6 .setAttribute(name, value)
//Sets any attribute (like src, href, id, etc.)
let j = document.querySelector("a");
link.setAttribute("href", "https://google.com");

//7 .getAttribute(name)
//Gets the value of an attribute
let id = link.getAttribute("href"); // "https://google.com"

//8 .value
//Used to get or set the value of form fields (like input, textarea, etc.)
<input type="text" id="name" />

let nameValue = document.getElementById("name").value;

// DOM Manipulation
//DOM Manipulation means changing the structure or content of the web page dynamically using JavaScript. You can:

// Create new elements
// Add them to the page
// Remove existing elements
// Change their content, attributes, or styles

//Common Methods

//document.createElement(tagName)
//Creates a new HTML element
let k = document.createElement("div");

//element.appendChild(child)
//Adds a new element as the last child of another element
let lm = document.getElementById("container");
parent.appendChild(lm);

//element.removeChild(child)
//Removes a child element from its parent
let item = document.getElementById("item1");
parent.removeChild(item);

//element.insertBefore(newNode, existingNode)
//Inserts newNode before existingNode
parent.insertBefore(newDiv, parent.firstChild);

//element.replaceChild(newNode, oldNode)
//Replaces an existing child with a new one
parent.replaceChild(newDiv, oldDiv);


//Common Event Types
// | Event       | Triggered When...               |
// | ----------- | ------------------------------- |
// | `click`     | Element is clicked              |
// | `mouseover` | Mouse is over the element       |
// | `mouseout`  | Mouse leaves the element        |
// | `input`     | User types in a text field      |
// | `change`    | User selects or changes a value |
// | `submit`    | Form is submitted               |
// | `keydown`   | Key is pressed                  |
