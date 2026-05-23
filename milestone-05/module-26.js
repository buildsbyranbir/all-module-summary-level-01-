// ======================================================
// 26-1 Project Setup, overview & Say Hello to DaisyUI
// ======================================================

// project name
const projectName = "Payoo App";

console.log(projectName);



// DaisyUI use korle easy vabe component design kora jay

// Example:
// button
// navbar
// card
// input field





// ======================================================
// 26-2 Login Form Design using DaisyUI as Figma
// ======================================================

// login form input value

const mobileNumber = "01700000000";
const pinNumber = "1234";

console.log(mobileNumber);
console.log(pinNumber);




// ======================================================
// 26-3 Design Login Form (part-2)
// and add event listener
// ======================================================

// login button select

document.getElementById("login-btn")
.addEventListener("click", function(){

    console.log("Login Button Clicked");
});




// ======================================================
// 26-4 Login Functionality & Redirect to Home
// ======================================================

document.getElementById("login-btn")
.addEventListener("click", function(event){

    // page reload stop
    event.preventDefault();

    // input value get
    const mobile = document.getElementById("mobile-number").value;

    const pin = document.getElementById("pin-number").value;

    // login check
    if(mobile === "01700000000" && pin === "1234"){

        console.log("Login Success");

        // redirect
        window.location.href = "home.html";
    }

    else{

        alert("Invalid Credentials");
    }
});




// ======================================================
// 26-5 Design Home Page Layout - I
// ======================================================

// available balance

let balance = 5000;

console.log(balance);



// features list

const features = [
    "Add Money",
    "Cash Out",
    "Transfer Money",
    "Pay Bill"
];

console.log(features);




// ======================================================
// 26-6 Design Home Page Layout - II
// ======================================================

// user info

const user = {
    name: "Rahim",
    accountNumber: "01700000000",
    balance: 5000
};

console.log(user);




// ======================================================
// 26-7 Let's create Add Money Feature with DOM
// ======================================================

document.getElementById("add-money-btn")
.addEventListener("click", function(event){

    event.preventDefault();

    // amount input
    const amount = document.getElementById("amount").value;

    // convert string to number
    const convertedAmount = parseFloat(amount);

    // current balance
    const balanceText =
        document.getElementById("balance").innerText;

    const currentBalance = parseFloat(balanceText);

    // new balance
    const newBalance = currentBalance + convertedAmount;

    // update balance
    document.getElementById("balance").innerText =
        newBalance;
});




// ======================================================
// 26-8 Recap Add Money Feature and implement Pin
// ======================================================

document.getElementById("add-btn")
.addEventListener("click", function(event){

    event.preventDefault();

    // input values
    const amount =
        parseFloat(document.getElementById("money").value);

    const pin =
        document.getElementById("pin").value;

    // balance
    const balance =
        parseFloat(document.getElementById("balance").innerText);

    // pin validation
    if(pin === "1234"){

        const total = balance + amount;

        document.getElementById("balance").innerText = total;

        console.log("Money Added");
    }

    else{

        alert("Wrong Pin");
    }
});




// ======================================================
// 26-9 understand & Implement Toggle Feature
// ======================================================

// add money section
const addMoneySection =
    document.getElementById("add-money-section");

// cashout section
const cashoutSection =
    document.getElementById("cashout-section");



// add money button
document.getElementById("show-add-money")
.addEventListener("click", function(){

    addMoneySection.style.display = "block";

    cashoutSection.style.display = "none";
});



// cashout button
document.getElementById("show-cashout")
.addEventListener("click", function(){

    cashoutSection.style.display = "block";

    addMoneySection.style.display = "none";
});




// ======================================================
// 26-10 Implement Cashout Feature and Summary
// ======================================================

document.getElementById("cashout-btn")
.addEventListener("click", function(event){

    event.preventDefault();

    // amount input
    const cashoutAmount =
        parseFloat(document.getElementById("cashout-amount").value);

    // pin input
    const pin =
        document.getElementById("cashout-pin").value;

    // current balance
    const balance =
        parseFloat(document.getElementById("balance").innerText);

    // pin check
    if(pin === "1234"){

        // enough balance check
        if(cashoutAmount <= balance){

            const remainingBalance =
                balance - cashoutAmount;

            document.getElementById("balance").innerText =
                remainingBalance;

            console.log("Cashout Success");
        }

        else{

            alert("Insufficient Balance");
        }
    }

    else{

        alert("Invalid Pin");
    }
});




// ======================================================
// Practice Task 1
// balance show
// ======================================================

const currentBalance =
    document.getElementById("balance").innerText;

console.log(currentBalance);




// ======================================================
// Practice Task 2
// transfer money
// ======================================================

function transferMoney(amount){

    console.log(amount, "Transferred");
}

transferMoney(500);




// ======================================================
// Practice Task 3
// logout button
// ======================================================

document.getElementById("logout-btn")
.addEventListener("click", function(){

    window.location.href = "index.html";
});




// ======================================================
// Practice Task 4
// dark mode toggle
// ======================================================

document.getElementById("theme-btn")
.addEventListener("click", function(){

    document.body.classList.toggle("dark");
});




// ======================================================
// Practice Task 5
// transaction history
// ======================================================

const transactions = [];

transactions.push("Added 1000 টাকা");

transactions.push("Cashout 500 টাকা");

console.log(transactions);