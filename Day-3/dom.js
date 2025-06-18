//The DOM is the Document Object Model, a tree-like structure created by the browser from the HTML document. it allows js to access, update and
// manipulate the structure and content of a web page dynamically. Each element becomes a node in this tree, which js can interact with using the document object
// Read content
// Change text or styles
// Add or remove elements
// Respond to user actions(clicks typing )

//DOM Properties

//1 .innerText
//Gets/sets the visible text inside an element.
//Ignores hidden content and CSS formatting
<p id="demo">Hello <span style="display:none">Hidden</span></p>

let f = document.getElementById("demo").innerText;
console.log(f); // "Hello"

//2 .textContent
//Gets/sets all the text, even hidden by CSS.
//Faster than innerText
let g = document.getElementById("demo").textContent;
console.log(g); // "Hello Hidden"

//3 .innerHTML
//Gets/sets the HTML content inside an element
//You can insert tags using it
document.getElementById("demo").innerHTML = "<b>Bold Text</b>";

//4 .style
//Used to directly apply CSS styles to an element
let h = document.getElementById("box");
box.style.color = "red";
box.style.backgroundColor = "yellow";

//5. .classList
// A very powerful property to manage classes

//  Methods
// add("class") – Add a class
// remove("class") – Remove a class
// toggle("class") – Add if missing, remove if present
// contains("class") – Check if class exists
let i = document.getElementById("myDiv");
div.classList.add("active");
div.classList.toggle("hidden");

// | Task                              | How (with DOM)                       |
// | --------------------------------- | ------------------------------------ |
// | Get an element                    | `document.getElementById('id')`      |
// | Change text                       | `element.textContent = "new text"`   |
// | Change style                      | `element.style.color = "red"`        |
// | Create a new element              | `document.createElement("div")`      |
// | Add an element                    | `parent.appendChild(newElement)`     |
// | Handle user events (click, input) | `addEventListener("click", handler)` |

// | Task              | Method or Property                |
// | ----------------- | --------------------------------- |
// | Get element by ID | `getElementById("id")`            |
// | Get by class name | `getElementsByClassName("class")` |
// | Get by tag name   | `getElementsByTagName("tag")`     |
// | CSS selector      | `querySelector(".class" / "#id")` |
// | Get all matching  | `querySelectorAll("p")`           |
// | Change HTML       | `element.innerHTML = "<b>Hi</b>"` |
// | Change just text  | `element.textContent = "Hello"`   |


