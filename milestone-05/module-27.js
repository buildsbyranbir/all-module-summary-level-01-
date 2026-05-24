// ======================================================
// 27-1 Recap Basic Structure and Adding Event Handler
// ======================================================

// button ta select kora hocche
// jate button er upor kaj kora jay

const loginButton = document.getElementById("btn-login");



// event listener add kora hocche
// user button e click korle function run hobe

loginButton.addEventListener("click", function(){

    // console e message show korbe
    console.log("Login Button Clicked");
});






// ======================================================
// 27-2 Recap Add Money and
// New Files for Function-Based Payooo
// ======================================================

// project ke clean rakhar jonno
// alada alada file use kora hoy

// Example:
// addMoney.js -> add money feature
// cashout.js -> cashout feature
// utilities.js -> reusable function



// add money button select
const addMoneyBtn =
    document.getElementById("add-money-btn");



// button click korle event run hobe
addMoneyBtn.addEventListener("click", function(event){

    // form submit hole page reload hoy
    // eta stop korar jonno preventDefault use hoy
    event.preventDefault();

    console.log("Add Money Feature Started");
});






// ======================================================
// 27-3 Recap Add Money Layout Handler
// and Reasons for Shared Code
// ======================================================

// same code onek jaygay use hole
// function banale code reusable hoy



function showSectionById(id){

    // prothome sob section hide kora hocche

    document.getElementById("add-money-section")
    .style.display = "none";

    document.getElementById("cashout-section")
    .style.display = "none";



    // jei id pathano hobe
    // shei section show hobe

    document.getElementById(id)
    .style.display = "block";
}



// function call
showSectionById("add-money-section");






// ======================================================
// 27-4 Create Reusable Function
// to Get Input Field Value
// ======================================================

// reusable function banano hocche
// jate easily input value neoya jay

function getInputValueById(id){

    // input field select kore value neoya hocche
    const inputValue =
        document.getElementById(id).value;



    // input value string hoy
    // tai parseFloat diye number e convert kora hocche
    const inputNumber =
        parseFloat(inputValue);



    // value return korbe
    return inputNumber;
}



// function use
const amount =
    getInputValueById("amount-input");

console.log(amount);






// ======================================================
// 27-5 Use Shared Function to Get
// Inner Text and Set Inner Text
// ======================================================

// balance er innerText neyar function

function getInnerTextById(id){

    // innerText neoya hocche
    const text =
        document.getElementById(id).innerText;



    // text ke number e convert
    const value =
        parseFloat(text);



    // value return
    return value;
}



// innerText set korar function

function setInnerTextById(id, value){

    // id er moddhe new value bosano hocche
    document.getElementById(id).innerText =
        value;
}



// current balance neoya
const balance =
    getInnerTextById("balance");

console.log(balance);



// balance update
setInnerTextById("balance", 7000);






// ======================================================
// 27-6 Features Toggle Button
// ======================================================

// Add Money button e click korle
// add money section show hobe

document.getElementById("show-add-money")
.addEventListener("click", function(){

    showSectionById("add-money-section");
});



// Cashout button e click korle
// cashout section show hobe

document.getElementById("show-cashout")
.addEventListener("click", function(){

    showSectionById("cashout-section");
});



// Transfer button e click korle
// transfer section show hobe

document.getElementById("show-transfer")
.addEventListener("click", function(){

    showSectionById("transfer-section");
});






// ======================================================
// 27-7 Implement Active Buttons using Functions
// ======================================================

// active button color change korar function

function handleToggle(id){

    // sob button select kora hocche
    const buttons =
        document.getElementsByClassName("feature-btn");



    // loop diye sob button theke
    // active class remove kora hocche

    for(let btn of buttons){

        btn.classList.remove("bg-blue-500");
    }



    // jei button e click hobe
    // shekhane active class add hobe

    document.getElementById(id)
    .classList.add("bg-blue-500");
}



// Add Money button active
document.getElementById("show-add-money")
.addEventListener("click", function(){

    handleToggle("show-add-money");
});



// Cashout button active
document.getElementById("show-cashout")
.addEventListener("click", function(){

    handleToggle("show-cashout");
});






// ======================================================
// 27-8 Show Transactions
// ======================================================

// transaction store korar jonno array

const transactions = [];



// Add Money event

document.getElementById("add-btn")
.addEventListener("click", function(event){

    event.preventDefault();



    // input amount neoya hocche
    const amount =
        getInputValueById("amount");



    // current balance neoya hocche
    const balance =
        getInnerTextById("balance");



    // new balance calculate
    const newBalance =
        balance + amount;



    // UI te new balance show
    setInnerTextById("balance", newBalance);



    // transaction object create
    const data = {

        // transaction type
        name: "Add Money",

        // transaction amount
        amount: amount,

        // current time
        date: new Date().toLocaleTimeString()
    };



    // array er moddhe transaction push
    transactions.push(data);



    // console e transaction show
    console.log(transactions);
});






// ======================================================
// 27-9 Dynamic DOM and Data Validation
// ======================================================

document.getElementById("cashout-btn")
.addEventListener("click", function(event){

    event.preventDefault();



    // cashout amount neoya
    const amount =
        getInputValueById("cashout-amount");



    // pin neoya
    const pin =
        document.getElementById("pin").value;



    // current balance neoya
    const balance =
        getInnerTextById("balance");



    // amount valid kina check
    // NaN mane Not a Number

    if(isNaN(amount)){

        alert("Please Enter Valid Amount");

        // niche ar code run hobe na
        return;
    }



    // pin check
    if(pin !== "1234"){

        alert("Invalid Pin");

        return;
    }



    // balance check
    if(amount > balance){

        alert("Not Enough Balance");

        return;
    }



    // new balance calculate
    const newBalance =
        balance - amount;



    // balance update
    setInnerTextById("balance", newBalance);



    console.log("Cashout Success");
});






// ======================================================
// Practice Task 1
// reusable sum function
// ======================================================

// dui number jog korar function

function add(a, b){

    return a + b;
}

console.log(add(10, 20));






// ======================================================
// Practice Task 2
// reusable subtraction
// ======================================================

// biyog korar function

function subtract(a, b){

    return a - b;
}

console.log(subtract(50, 20));






// ======================================================
// Practice Task 3
// reusable multiply
// ======================================================

// gun korar function

function multiply(a, b){

    return a * b;
}

console.log(multiply(5, 5));






// ======================================================
// Practice Task 4
// dark mode toggle
// ======================================================

// button click korle dark mode on/off hobe

document.getElementById("theme-btn")
.addEventListener("click", function(){

    document.body.classList.toggle("dark");
});






// ======================================================
// Practice Task 5
// logout feature
// ======================================================

// logout button click korle
// login page e niye jabe

document.getElementById("logout-btn")
.addEventListener("click", function(){

    window.location.href = "index.html";
});