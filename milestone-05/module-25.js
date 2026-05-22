// ======================================================
// 25-0 Basic of DOM all in one
// ======================================================

// DOM = Document Object Model
// JS diye HTML control kora jay

// element select
const title = document.getElementById("title");

console.log(title);

// text change
title.innerText = "DOM Started";

// style change
title.style.color = "red";




// ======================================================
// 25-1 What is Event,
// different types of event in web
// ======================================================

// Event = user jokhon kono action kore

// Example:
// click
// mouseover
// keyup
// keydown
// submit
// change

const btn = document.getElementById("btn");

// click event
btn.addEventListener("click", function(){

    console.log("Button Clicked");
});



// mouseover event
btn.addEventListener("mouseover", function(){

    console.log("Mouse Over Button");
});




// ======================================================
// 25-2 Add onclick handler directly or via javascript
// ======================================================

// -------- HTML e directly --------

/*
<button onclick="makeRed()">
    Click
</button>
*/


function makeRed(){

    document.body.style.backgroundColor = "red";
}



// -------- JavaScript diye --------

const blueBtn = document.getElementById("blue-btn");

blueBtn.onclick = function(){

    document.body.style.backgroundColor = "blue";
};




// ======================================================
// 25-3 Different ways to use addEventListener
// on a button
// ======================================================

const greenBtn = document.getElementById("green-btn");



// Method 1
greenBtn.addEventListener("click", function(){

    console.log("Green Button Clicked");
});



// Method 2
function showMessage(){

    console.log("Message Showing");
}

greenBtn.addEventListener("click", showMessage);



// Method 3
greenBtn.addEventListener("click", () => {

    console.log("Arrow Function Event");
});




// ======================================================
// 25-4 Integrate Event innerText and Text update
// by Event Handlers
// ======================================================

const updateBtn = document.getElementById("update-btn");

const heading = document.getElementById("heading");



// button click korle text change hobe

updateBtn.addEventListener("click", function(){

    heading.innerText = "Text Updated Successfully";
});




// ======================================================
// 25-5 Create a comment box and display comment
// ======================================================

const commentBtn = document.getElementById("comment-btn");



commentBtn.addEventListener("click", function(){

    // textarea select
    const commentField = document.getElementById("comment-field");

    // textarea value
    const commentText = commentField.value;

    // comment container
    const commentContainer = document.getElementById("comment-container");

    // new p create
    const p = document.createElement("p");

    // text add
    p.innerText = commentText;

    // append
    commentContainer.appendChild(p);

    // textarea empty
    commentField.value = "";
});




// ======================================================
// 25-6 Explore more event type and
// Simple github like delete confirmation button
// ======================================================

const deleteInput = document.getElementById("delete-input");

const deleteBtn = document.getElementById("delete-btn");



// keyup event
deleteInput.addEventListener("keyup", function(event){

    // input value
    const text = event.target.value;

    // delete likhle button enable
    if(text === "delete"){

        deleteBtn.removeAttribute("disabled");
    }

    else{

        deleteBtn.setAttribute("disabled", true);
    }
});




// ======================================================
// 25-7 (semi-advanced)
// Event bubble and Stop propagating
// ======================================================

// parent
document.getElementById("parent")
.addEventListener("click", function(){

    console.log("Parent Clicked");
});



// child
document.getElementById("child")
.addEventListener("click", function(event){

    console.log("Child Clicked");

    // bubble stop
    event.stopPropagation();
});




// ======================================================
// 25-8 (advanced)
// Event delegate and benefit of Event bubble
// ======================================================

// ul select
const list = document.getElementById("list");



// parent e event add
list.addEventListener("click", function(event){

    console.log(event.target.innerText);

    // clicked item remove
    event.target.parentNode.removeChild(event.target);
});




// new item add

const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", function(){

    const li = document.createElement("li");

    li.innerText = "New Item Added";

    list.appendChild(li);
});




// ======================================================
// 25-10 Basic JS Events all in One
// ======================================================

// click event
document.getElementById("click-btn")
.addEventListener("click", function(){

    console.log("Clicked");
});



// dblclick event
document.getElementById("dbl-btn")
.addEventListener("dblclick", function(){

    console.log("Double Clicked");
});



// mousemove event
document.getElementById("box")
.addEventListener("mousemove", function(){

    console.log("Mouse Moving");
});



// focus event
document.getElementById("input-field")
.addEventListener("focus", function(){

    console.log("Input Focused");
});



// blur event
document.getElementById("input-field")
.addEventListener("blur", function(){

    console.log("Input Blur");
});



// change event
document.getElementById("input-field")
.addEventListener("change", function(event){

    console.log(event.target.value);
});



// submit event
document.getElementById("form")
.addEventListener("submit", function(event){

    // page reload stop
    event.preventDefault();

    console.log("Form Submitted");
});




// ======================================================
// Practice Task 1
// background color change
// ======================================================

document.getElementById("red-btn")
.addEventListener("click", function(){

    document.body.style.backgroundColor = "red";
});




// ======================================================
// Practice Task 2
// text update
// ======================================================

document.getElementById("text-btn")
.addEventListener("click", function(){

    document.getElementById("demo")
    .innerText = "Updated Text";
});




// ======================================================
// Practice Task 3
// create list item
// ======================================================

document.getElementById("create-btn")
.addEventListener("click", function(){

    const li = document.createElement("li");

    li.innerText = "Dynamic Item";

    document.getElementById("dynamic-list")
    .appendChild(li);
});




// ======================================================
// Practice Task 4
// input value show
// ======================================================

document.getElementById("show-btn")
.addEventListener("click", function(){

    const input = document.getElementById("name-field");

    console.log(input.value);
});




// ======================================================
// Practice Task 5
// remove item using event delegate
// ======================================================

document.getElementById("remove-list")
.addEventListener("click", function(event){

    event.target.remove();
});