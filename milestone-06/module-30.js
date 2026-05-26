// ======================================================
// 30-1 Module Introduction and Basic ES6 Recap
// ======================================================

// ES6 = modern JavaScript version

// Main Topics:
// 1. let & const
// 2. arrow function
// 3. template string
// 4. spread operator
// 5. destructuring
// 6. map, filter, find
// 7. class & object



// let -> value change kora jay

let age = 20;

age = 25;

console.log(age);



// const -> fixed value

const country = "Bangladesh";

console.log(country);



// arrow function

const add = (a, b) => a + b;

console.log(add(10, 20));






// ======================================================
// 30-2 Access Value, nested object,
// Optional chaining,
// Dot notation vs bracket notation
// ======================================================

// nested object

const student = {

    name: "Rahim",

    marks: {

        math: 80,
        english: 75
    },

    hobbies: ["Coding", "Gaming"]
};



// dot notation
// directly property access kora hoy

console.log(student.name);



// nested value access

console.log(student.marks.math);



// bracket notation
// dynamic property access er jonno useful

console.log(student["name"]);



// optional chaining
// property na thakle error dibe na

console.log(student.address?.city);



// array value access

console.log(student.hobbies[0]);






// ======================================================
// 30-3 Array map to do one-line loop magic
// ======================================================

// map -> array er prottek element niye kaj kore
// new array return kore

const numbers = [1, 2, 3, 4];



// sob number double kora

const doubled = numbers.map(number => number * 2);

console.log(doubled);



// names array

const friends = ["rahim", "karim", "sakib"];



// uppercase e convert

const upperFriends =
    friends.map(friend => friend.toUpperCase());

console.log(upperFriends);






// ======================================================
// 30-4 foreach, filter, find,
// and differences between them
// ======================================================

const nums = [10, 15, 20, 25, 30];



// forEach
// loop er moto kaj kore
// kichu return kore na

nums.forEach(num => {

    console.log(num);
});



// filter
// condition true hole
// sob value new array te return kore

const bigNumbers =
    nums.filter(num => num > 20);

console.log(bigNumbers);



// find
// condition true hole
// first value return kore

const firstBigNumber =
    nums.find(num => num > 20);

console.log(firstBigNumber);






// ======================================================
// 30-5 (Recap)
// Map, forEach, filter, find, reduce
// ======================================================

const prices = [100, 200, 300, 400];



// map
const taxAdded =
    prices.map(price => price + 10);

console.log(taxAdded);



// filter
const expensive =
    prices.filter(price => price > 200);

console.log(expensive);



// find
const firstExpensive =
    prices.find(price => price > 200);

console.log(firstExpensive);



// reduce
// sob value add korar jonno

const total =
    prices.reduce((previous, current) => {

        return previous + current;
    }, 0);

console.log(total);






// ======================================================
// 30-6 (optional)
// Introduction to Class and objects
// ======================================================

// class holo object bananor blueprint

class Person{

    // constructor automatically run hoy
    constructor(name, age){

        this.name = name;

        this.age = age;
    }



    // method
    speak(){

        console.log(
            `My name is ${this.name}`
        );
    }
}



// object create

const person1 = new Person("Sakib", 25);

console.log(person1);



// method call

person1.speak();






// ======================================================
// 30-7 (optional)
// Inheritance, prototypical inheritance
// ======================================================

// parent class

class Animal{

    constructor(name){

        this.name = name;
    }



    eat(){

        console.log(`${this.name} is eating`);
    }
}



// child class

class Dog extends Animal{

    bark(){

        console.log(`${this.name} is barking`);
    }
}



// object create

const dog1 = new Dog("Tommy");

dog1.eat();

dog1.bark();






// ======================================================
// 30-8 (optional)
// Encapsulation & this keyword
// ======================================================

// this keyword current object ke bujhay

class User{

    constructor(name, balance){

        this.name = name;

        this.balance = balance;
    }



    // method

    showBalance(){

        console.log(
            `${this.name} has ${this.balance} taka`
        );
    }
}



// object create

const user1 = new User("Rahim", 5000);

user1.showBalance();



// encapsulation
// data & method ekshathe class er moddhe rakha hoy






// ======================================================
// 30-9 Explore more ES6 + AI Powered Practice
// ======================================================

// destructuring

const mobile = {

    brand: "Samsung",

    price: 25000
};



// direct value access

const { brand, price } = mobile;

console.log(brand);

console.log(price);



// spread operator

const arr1 = [1, 2, 3];

const arr2 = [...arr1, 4, 5];

console.log(arr2);



// template string

const username = "Karim";

console.log(`Hello ${username}`);






// ======================================================
// Practice Task 1
// map use kore square
// ======================================================

const values = [2, 3, 4];

const squares =
    values.map(value => value * value);

console.log(squares);






// ======================================================
// Practice Task 2
// filter even numbers
// ======================================================

const evenNumbers =
    values.filter(value => value % 2 === 0);

console.log(evenNumbers);






// ======================================================
// Practice Task 3
// find first odd number
// ======================================================

const oddNumber =
    values.find(value => value % 2 === 1);

console.log(oddNumber);






// ======================================================
// Practice Task 4
// reduce total sum
// ======================================================

const sum =
    values.reduce((prev, current) => {

        return prev + current;
    }, 0);

console.log(sum);






// ======================================================
// Practice Task 5
// class practice
// ======================================================

class Laptop{

    constructor(brand, price){

        this.brand = brand;

        this.price = price;
    }



    details(){

        console.log(
            `${this.brand} laptop price ${this.price}`
        );
    }
}



const laptop1 =
    new Laptop("HP", 55000);

laptop1.details();