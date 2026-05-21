// ======================================================
// 24-1 What is DOM, Connect your JS file with HTML file
// ======================================================

// DOM = Document Object Model
// JavaScript diye HTML control korar system

console.log("DOM Connected");



// HTML file e JS connect korar system

/*
<script src="script.js"></script>
*/





// ======================================================
// 24-2 Traversing DOM - getElementsByTagName
// ======================================================

// sob h1 tag select korbe

const headings = document.getElementsByTagName("h1");

console.log(headings);



// loop diye sob h1 print

for(let heading of headings){

    console.log(heading.innerText);
}





// ======================================================
// 24-3 Traversing DOM -
// getElementsByClassName VS getElementById
// ======================================================

// class diye element select

const titles = document.getElementsByClassName("title");

console.log(titles);



// id diye single element select

const mainTitle = document.getElementById("main-title");

console.log(mainTitle);



// text change

mainTitle.innerText = "DOM Learning Started";





// ======================================================
// 24-4 Traversing DOM -
// getElementByQuerySelector, querySelectorAll
// ======================================================

// querySelector -> first matching element select kore

const firstParagraph = document.querySelector("p");

console.log(firstParagraph);



// class select

const card = document.querySelector(".card");

console.log(card);



// querySelectorAll -> sob matching element select kore

const allParagraphs = document.querySelectorAll("p");

console.log(allParagraphs);



// loop

for(let para of allParagraphs){

    console.log(para.innerText);
}





// ======================================================
// 24-5 Dynamic style, getAttribute,
// setAttribute, innerText, innerHTML
// ======================================================

const heading = document.getElementById("title");



// style change

heading.style.color = "red";

heading.style.fontSize = "40px";



// attribute get

const className = heading.getAttribute("class");

console.log(className);



// attribute set

heading.setAttribute("title", "This is heading");



// innerText

heading.innerText = "Updated Heading";



// innerHTML

heading.innerHTML = "<i>Italic Heading</i>";





// ======================================================
// 24-6 Styling DOM properties,
// add and remove CSS class using JS
// ======================================================

const box = document.getElementById("box");



// class add

box.classList.add("active");



// class remove

box.classList.remove("hidden");



// toggle class

box.classList.toggle("dark");



// CSS style directly add

box.style.backgroundColor = "black";

box.style.color = "white";





// ======================================================
// 24-7 NodeList, htmlCollection,
// parentNode, childNodes, createElement
// ======================================================

// NodeList

const paragraphs = document.querySelectorAll("p");

console.log(paragraphs);



// HTMLCollection

const divs = document.getElementsByTagName("div");

console.log(divs);



// parentNode

const item = document.getElementById("item");

console.log(item.parentNode);



// childNodes

const container = document.getElementById("container");

console.log(container.childNodes);



// createElement

const newElement = document.createElement("li");

newElement.innerText = "New List Item";

console.log(newElement);





// ======================================================
// 24-8 Create HTML elements using
// JavaScript and appendChild
// ======================================================

// ul select

const list = document.getElementById("list");



// new li create

const li = document.createElement("li");



// text add

li.innerText = "JavaScript Added Item";



// append child

list.appendChild(li);



// arekta example

const section = document.getElementById("section");

const paragraph = document.createElement("p");

paragraph.innerText = "This paragraph added using JS";

section.appendChild(paragraph);





// ======================================================
// Practice Task 1
// heading color change
// ======================================================

const practiceHeading = document.getElementById("practice-title");

practiceHeading.style.color = "blue";





// ======================================================
// Practice Task 2
// new button create
// ======================================================

const button = document.createElement("button");

button.innerText = "Click Me";

document.body.appendChild(button);





// ======================================================
// Practice Task 3
// class add
// ======================================================

button.classList.add("btn");

console.log(button);





// ======================================================
// Practice Task 4
// paragraph text change
// ======================================================

const text = document.querySelector(".text");

text.innerText = "Text Updated Successfully";





// ======================================================
// Practice Task 5
// dynamic div create
// ======================================================

const div = document.createElement("div");

div.innerHTML = `
    <h2>Dynamic Card</h2>
    <p>This card created using JavaScript DOM</p>
`;

document.body.appendChild(div);