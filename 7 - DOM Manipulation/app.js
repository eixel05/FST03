// DOM - Document Object Model (Document refers to the HTML file)

// Object - have methods and properties (methods = functions, properties = variables)

// Access element using .getElementById() - targets ID
let elementWithID = document.getElementById("first-div"); // document is the object and we target "first-div" id and assigned it to elementWithID variable
console.log("Element accessed using ID:",elementWithID);

// .textcontent property replaces the content of the element
elementWithID.textContent = "Div 1";

// Access element using .getElementsByClassName() - targets classes
let elementWithClass = document.getElementsByClassName("sample-div");
console.log("Elements with class:",elementWithClass)

// Modify element using index
elementWithClass[1].textContent = "Div 2";

// Access element using .getElementsByTagNames() - targets tags. Will apply to all same tags
let listItems = document.getElementsByTagName("li");
console.log("List Items:",listItems);

listItems[0].style.color = "crimson"

// .querySelector()
// Returns the first element
let orderedListItem = document.querySelector(".ordered-list")
console.log("Ordered List items:",orderedListItem);

// kebab-case
// camelCase

orderedListItem.style.backgroundColor = "lightgreen";

// .querySelectorAll()
// Returns a NodeList
let headings = document.querySelectorAll("h3");
console.log("These are the headers:",headings)

headings[0].style.backgroundColor = "aqua";

for (let i = 0; i < headings.length; i++) {
    let heading = headings[i];
    heading.style.backgroundColor = "aqua";
  }

// Updating an element attribute
let dayNightIcon = document.querySelector("#day-night-icon");
dayNightIcon.setAttribute("src","https://cdn-icons-png.flaticon.com/512/3688/3688129.png");

// Append new elements
let parentElement = document.getElementById("parent-element");
let createdElement = document.createElement("div");
createdElement.textContent = 'Child Element';
parentElement.appendChild(createdElement);

// Removing element

let elementToBeRemoved = document.querySelector('#element-to-be-removed');
elementToBeRemoved.remove()

// Adding Event Listeners and Manipulating Element Styles
let darkModeBtn = document.querySelector('#dark-mode-btn');
darkModeBtn.addEventListener('click', function () {
  let pageContainer = document.querySelector('#page-container');
  pageContainer.style.backgroundColor = 'black';
  pageContainer.style.color = 'white';
  let pageModeText = document.querySelector('#page-mode-text');
  pageModeText.textContent = 'Dark Mode';
});

// function () - anonymous function