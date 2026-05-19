// ======================================================
// What are function and function syntax
// ======================================================

// Function holo emon ekta block of code
// jeta ekbar likhe onek bar use kora jay

// Function declare korar syntax

function greet(){
    console.log("Hello JavaScript");
}

// Function call korte hoy
greet();



// arekta example

function showMessage(){
    console.log("Welcome to my website");
}

showMessage();




// ======================================================
// Understand the concept of function
// with visual effects
// ======================================================

// dhoro function hocche ekta machine

function juiceMachine(){
    console.log("Apple diye juice banano hocche");
}

// machine run korte hole function call korte hobe
juiceMachine();



// function er vitore ja thakbe
// call korle seta execute hobe

function lightOn(){
    console.log("Light ON");
}

lightOn();




// ======================================================
// Function parameter, handle multiple parameters
// ======================================================

// Parameter diye function er moddhe value pathano hoy

function add(num1, num2){

    // num1 & num2 hocche parameter
    let total = num1 + num2;

    console.log(total);
}

// 10 & 20 hocche argument
add(10, 20);



// multiple parameter example

function introduce(name, age, profession){

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Profession:", profession);
}

introduce("Ranbir", 22, "Web Developer");




// ======================================================
// How Function works and
// argument vs parameters
// ======================================================

// Parameter -> function declare korar somoy
// Argument -> function call korar somoy

function multiply(a, b){

    // a & b = parameter
    let result = a * b;

    console.log(result);
}

// 5 & 4 = argument
multiply(5, 4);



// arekta example

function fullName(firstName, lastName){

    let name = firstName + " " + lastName;

    console.log(name);
}

fullName("Md", "Rahim");




// ======================================================
// Function return and set return value to a variable
// ======================================================

// return diye function theke value ferot ana hoy

function sum(a, b){

    let total = a + b;

    return total;
}

// function er return value variable e rakha
let result = sum(10, 15);

console.log(result);



// arekta example

function square(number){

    return number * number;
}

let output = square(6);

console.log(output);




// ======================================================
// Recap and conditional return of odd and even
// ======================================================

// even number check

function isEven(number){

    if(number % 2 === 0){
        return true;
    }

    return false;
}

console.log(isEven(10));




// odd number check

function isOdd(number){

    if(number % 2 === 1){
        return true;
    }

    return false;
}

console.log(isOdd(7));




// ======================================================
// Different types of parameters for a function
// ======================================================

// normal parameter

function greeting(name){
    console.log("Hello", name);
}

greeting("Sakib");



// default parameter
// value na dile default value use hobe

function price(amount = 0){

    console.log("Price:", amount);
}

price();
price(500);



// string parameter

function countryName(country){

    console.log(country);
}

countryName("Bangladesh");



// array parameter

function showNumbers(numbers){

    console.log(numbers);
}

showNumbers([10, 20, 30]);




// ======================================================
// Sum of all numbers in an array using function
// ======================================================

function getSum(numbers){

    let sum = 0;

    for(let num of numbers){

        sum = sum + num;
    }

    return sum;
}

let nums = [10, 20, 30, 40];

let total = getSum(nums);

console.log(total);




// ======================================================
// Return all the even numbers of an array
// ======================================================

function getEvenNumbers(numbers){

    let evenNumbers = [];

    for(let num of numbers){

        if(num % 2 === 0){

            evenNumbers.push(num);
        }
    }

    return evenNumbers;
}

let values = [1, 2, 3, 4, 5, 6, 7, 8];

let even = getEvenNumbers(values);

console.log(even);




// ======================================================
// Function Summary and Practice Tasks
// ======================================================

// Practice 1
// dui number jog korar function

function addTwoNumbers(a, b){

    return a + b;
}

console.log(addTwoNumbers(5, 7));



// Practice 2
// kono number even kina check

function checkEven(number){

    if(number % 2 === 0){
        return "Even";
    }

    return "Odd";
}

console.log(checkEven(9));



// Practice 3
// array er sob number gun korar function

function multiplyAll(numbers){

    let result = 1;

    for(let num of numbers){

        result = result * num;
    }

    return result;
}

console.log(multiplyAll([2, 3, 4]));



// Practice 4
// array theke odd number ber kora

function getOddNumbers(numbers){

    let oddNumbers = [];

    for(let num of numbers){

        if(num % 2 === 1){

            oddNumbers.push(num);
        }
    }

    return oddNumbers;
}

console.log(getOddNumbers([1, 2, 3, 4, 5, 6, 7]));



// Practice 5
// full name return kora

function createFullName(firstName, lastName){

    return firstName + " " + lastName;
}

console.log(createFullName("Ranbir", "Roy"));