// ======================================================
// JS Concepts recap and var, let, const
// ======================================================

// var -> old way variable declare korar jonno
var name = "Rahim";

// let -> value change kora jay
let age = 25;
age = 30;

// const -> value change kora jay na
const country = "Bangladesh";

// console output
console.log(name);
console.log(age);
console.log(country);



// Recap:
// Variable
let price = 100;

// Array
let fruits = ["apple", "banana", "mango"];

// Object
let person = {
    name: "Karim",
    age: 22
};

// Loop
for(let fruit of fruits){
    console.log(fruit);
}

// Condition
if(price > 50){
    console.log("Price is high");
}else{
    console.log("Price is low");
}




// ======================================================
// Unit Convert Inch to Feet, Miles to Kilometre
// ======================================================

// Inch to Feet

function inchToFeet(inch){

    let feet = inch / 12;

    return feet;
}

let result1 = inchToFeet(24);

console.log(result1);




// Miles to Kilometre

function milesToKilometre(miles){

    let kilometre = miles * 1.60934;

    return kilometre;
}

let result2 = milesToKilometre(5);

console.log(result2);




// ======================================================
// Problem Solving Strategy
// ======================================================

// Step 1 -> Problem bujho
// Step 2 -> input ki dekh
// Step 3 -> output ki hobe bujho
// Step 4 -> small step e vag koro
// Step 5 -> logic likho
// Step 6 -> code koro
// Step 7 -> test koro



// Example Problem:
// dui number er sum ber kora

function add(a, b){

    return a + b;
}

console.log(add(10, 20));




// ======================================================
// Check whether a year is Leap Year or not
// ======================================================

// Leap Year rules:
// 4 diye divisible hole leap year
// but 100 diye divisible hole leap year na
// except 400 diye divisible hole abar leap year

function isLeapYear(year){

    if(year % 400 === 0){
        return true;
    }

    else if(year % 100 === 0){
        return false;
    }

    else if(year % 4 === 0){
        return true;
    }

    return false;
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2100));




// ======================================================
// Calculate the average of odd numbers in an array
// ======================================================

function oddAverage(numbers){

    let oddNumbers = [];
    let sum = 0;

    // odd number collect kora
    for(let num of numbers){

        if(num % 2 === 1){

            oddNumbers.push(num);

            sum = sum + num;
        }
    }

    // average ber kora
    let average = sum / oddNumbers.length;

    return average;
}

let nums = [10, 15, 20, 25, 30, 35];

console.log(oddAverage(nums));




// ======================================================
// Remove duplicate items from an array
// ======================================================

let names = ["rahim", "karim", "rahim", "sakib", "karim"];

let unique = [];

for(let item of names){

    // includes check korbe item already ache kina
    if(!unique.includes(item)){

        unique.push(item);
    }
}

console.log(unique);




// ======================================================
// Math, abs, round, ceil, floor, random number
// ======================================================

// Math.abs()
// negative number ke positive kore

console.log(Math.abs(-10));



// Math.round()
// nearest integer e convert kore

console.log(Math.round(4.6));



// Math.ceil()
// uporer integer nibe

console.log(Math.ceil(4.1));



// Math.floor()
// nicher integer nibe

console.log(Math.floor(4.9));



// Math.random()
// 0 theke 1 er moddhe random number dey

console.log(Math.random());



// random integer 1 to 10

let randomNumber = Math.round(Math.random() * 10);

console.log(randomNumber);




// ======================================================
// Simple introduction to JS Date and time
// ======================================================

// current date & time

let today = new Date();

console.log(today);



// specific date create

let specificDate = new Date("2026-05-20");

console.log(specificDate);



// current year

console.log(today.getFullYear());



// current month

console.log(today.getMonth());



// current day

console.log(today.getDate());




// ======================================================
// Swap variable, swap without temp, destructing
// ======================================================

// -------- Method 1: temp variable use kore --------

let a = 10;
let b = 20;

let temp = a;

a = b;
b = temp;

console.log(a, b);




// -------- Method 2: without temp --------

let x = 5;
let y = 15;

x = x + y;
y = x - y;
x = x - y;

console.log(x, y);




// -------- Method 3: destructuring --------

let p = 100;
let q = 200;

// modern easy way
[p, q] = [q, p];

console.log(p, q);




// ======================================================
// Module Summary and where you need to focus
// ======================================================

// Focus on:
// 1. Function
// 2. Loop
// 3. Array
// 4. Object
// 5. Condition
// 6. Problem solving
// 7. Math operations



// Practice Task 1
// Celsius to Fahrenheit

function celsiusToFahrenheit(celsius){

    return (celsius * 9/5) + 32;
}

console.log(celsiusToFahrenheit(30));



// Practice Task 2
// duplicate remove

function removeDuplicate(numbers){

    let uniqueNumbers = [];

    for(let num of numbers){

        if(!uniqueNumbers.includes(num)){

            uniqueNumbers.push(num);
        }
    }

    return uniqueNumbers;
}

console.log(removeDuplicate([1,2,2,3,4,4,5]));



// Practice Task 3
// average ber kora

function average(numbers){

    let sum = 0;

    for(let num of numbers){

        sum += num;
    }

    return sum / numbers.length;
}

console.log(average([10,20,30,40]));



// Practice Task 4
// leap year check

console.log(isLeapYear(2028));
console.log(isLeapYear(1900));