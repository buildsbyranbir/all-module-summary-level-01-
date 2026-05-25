// ======================================================
// 29-1 ES6 Intro difference between var, let, and const
// ======================================================

// var -> old system
// var re-declare kora jay
// value change o kora jay

var name = "Rahim";

var name = "Karim";

name = "Sakib";

console.log(name);



// let -> modern system
// re-declare kora jay na
// but value change kora jay

let age = 20;

age = 25;

console.log(age);



// const -> fixed value
// re-declare o kora jay na
// value change o kora jay na

const country = "Bangladesh";

console.log(country);



// const country = "India";  Error
// country = "India";  Error






// ======================================================
// 29-2 Function default parameter
// for not provided values (=)
// ======================================================

// default parameter use korle
// value na dile default value use hobe

function add(num1 = 0, num2 = 0){

    return num1 + num2;
}



// dui value dile
console.log(add(10, 20));



// ekta value dile
// num2 automatically 0 hobe
console.log(add(50));



// kono value na dile
// dui tai default value nibe
console.log(add());






// ======================================================
// 29-3 Template string, multiple line string,
// dynamic string (` `)
// ======================================================

// template string use korte backtick (` `) lage

const player = "Sakib";

const runs = 75;



// dynamic string
// ${} diye variable use kora hoy

const message =
    `Player Name: ${player}
Runs: ${runs}`;

console.log(message);



// multiple line string
const multiLine = `
Hello,
This is JavaScript ES6.
Learning Template String.
`;

console.log(multiLine);






// ======================================================
// 29-4 Arrow function,
// multiple parameters, function body =>
// ======================================================

// normal function

function sum(a, b){

    return a + b;
}

console.log(sum(10, 20));



// arrow function

const addNumbers = (a, b) => {

    return a + b;
};

console.log(addNumbers(5, 7));



// single parameter hole bracket optional

const square = number => {

    return number * number;
};

console.log(square(6));



// single line hole return likhte hoy na

const multiply = (x, y) => x * y;

console.log(multiply(4, 5));






// ======================================================
// 29-5 More Arrow functions and arrow functions =>
// ======================================================

// empty parameter

const greet = () => {

    console.log("Hello ES6");
};

greet();



// object return korte hole
// bracket use korte hoy

const getPerson = () => ({

    name: "Rahim",
    age: 25
});

console.log(getPerson());



// array return

const getNumbers = () => [10, 20, 30];

console.log(getNumbers());






// ======================================================
// 29-6 Spread operator,
// array max, copy arrays
// ======================================================

// spread operator = ...

const numbers = [10, 20, 30, 40];



// array copy

const copyNumbers = [...numbers];

console.log(copyNumbers);



// new value add

const newNumbers = [...numbers, 50, 60];

console.log(newNumbers);



// max number find

const maxNumber = Math.max(...numbers);

console.log(maxNumber);



// merge arrays

const nums1 = [1, 2];

const nums2 = [3, 4];

const allNumbers = [...nums1, ...nums2];

console.log(allNumbers);






// ======================================================
// 29-7 (advanced)
// Object and Array Destructuring
// ======================================================

// object destructuring

const person = {

    name: "Karim",
    age: 24,
    profession: "Developer"
};



// object theke value directly ber kora

const { name, age } = person;

console.log(name);

console.log(age);



// array destructuring

const colors = ["red", "green", "blue"];



// array theke value directly neoya

const [firstColor, secondColor] = colors;

console.log(firstColor);

console.log(secondColor);






// ======================================================
// 29-8 Keys, values, entries,
// delete, seal, freeze
// ======================================================

const student = {

    name: "Sakib",
    age: 22,
    department: "CSE"
};



// object er keys

console.log(Object.keys(student));



// object er values

console.log(Object.values(student));



// object er entries
// key-value pair array akare dibe

console.log(Object.entries(student));



// property delete

delete student.age;

console.log(student);



// seal -> new property add/remove kora jabe na
Object.seal(student);



// freeze -> kono change kora jabe na
Object.freeze(student);






// ======================================================
// 29-9 Loop through an object using for in
// and module summary
// ======================================================

const mobile = {

    brand: "Samsung",
    price: 25000,
    color: "Black"
};



// for in loop
// object er sob property access korar jonno

for(let key in mobile){

    console.log(key);

    console.log(mobile[key]);
}



// object keys loop

const keys = Object.keys(mobile);

for(let key of keys){

    console.log(key, mobile[key]);
}






// ======================================================
// Practice Task 1
// arrow function diye sum
// ======================================================

const total = (a, b) => a + b;

console.log(total(20, 30));






// ======================================================
// Practice Task 2
// template string
// ======================================================

const username = "Rahim";

const city = "Dhaka";

console.log(`My name is ${username} and I live in ${city}`);






// ======================================================
// Practice Task 3
// spread operator
// ======================================================

const fruits = ["apple", "banana"];

const newFruits = [...fruits, "mango"];

console.log(newFruits);






// ======================================================
// Practice Task 4
// destructuring
// ======================================================

const laptop = {

    brand: "HP",
    price: 55000
};

const { brand, price } = laptop;

console.log(brand);

console.log(price);






// ======================================================
// Practice Task 5
// object loop
// ======================================================

const book = {

    name: "JavaScript Guide",
    pages: 200
};

for(let key in book){

    console.log(key, book[key]);
}