// ======================================================
//Recap: Variable, Array, Object, Data Types,
// Loops & Conditionals
// ======================================================

// Variable declare kora
let name = "Ranbir";
let age = 22;

// Array -> onek gula data ekshathe rakhar jonno
let fruits = ["apple", "banana", "mango"];

// Object -> related information store korar jonno
let person = {
    name: "Rahim",
    age: 25,
    profession: "Developer"
};

// Data Types
let numberType = 100;          // Number
let stringType = "Hello";      // String
let booleanType = true;        // Boolean

// Loop -> bar bar kaj korar jonno
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// Conditional -> condition check kore
if(age >= 18){
    console.log("Adult");
}else{
    console.log("Not Adult");
}




// ======================================================
//Traverse Array using for, while, and for-of loop
// ======================================================

let numbers = [10, 20, 30, 40, 50];

// for loop diye array traverse
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// while loop diye traverse
let i = 0;

while(i < numbers.length){
    console.log(numbers[i]);
    i++;
}

// for...of loop -> array traverse korar easiest way
for(let num of numbers){
    console.log(num);
}




// ======================================================
// Reverse an Array
// Techniques: for loop, unshift(), reverse()
// ======================================================

let nums = [1, 2, 3, 4, 5];

// -------- Method 1: for loop --------
let reversed1 = [];

for(let i = nums.length - 1; i >= 0; i--){
    reversed1.push(nums[i]);
}

console.log(reversed1);



// -------- Method 2: unshift() --------
// unshift array er shurute value add kore

let reversed2 = [];

for(let item of nums){
    reversed2.unshift(item);
}

console.log(reversed2);



// -------- Method 3: reverse() --------
// reverse() original array ke ulta kore dey

let reversed3 = nums.reverse();

console.log(reversed3);




// ======================================================
// Sort Array in Ascending & Descending Order
// ======================================================

let values = [40, 10, 100, 5, 25];

// -------- Ascending Order --------
// choto theke boro

values.sort(function(a, b){
    return a - b;
});

console.log(values);



// -------- Descending Order --------
// boro theke choto

values.sort(function(a, b){
    return b - a;
});

console.log(values);




// ======================================================
// Array of Objects & Access Object inside Array
// ======================================================

let students = [
    {
        name: "Rahim",
        age: 20,
        department: "CSE"
    },
    {
        name: "Karim",
        age: 22,
        department: "EEE"
    },
    {
        name: "Sakib",
        age: 21,
        department: "BBA"
    }
];

// pura array dekhabe
console.log(students);

// first object access
console.log(students[0]);

// first object er name access
console.log(students[0].name);

// sob student er name print
for(let student of students){
    console.log(student.name);
}




// ======================================================
// Traverse in a 2D Array
// ======================================================

// 2D Array -> array er vitore array

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// outer loop row control korbe
for(let i = 0; i < matrix.length; i++){

    // inner loop column control korbe
    for(let j = 0; j < matrix[i].length; j++){

        console.log(matrix[i][j]);
    }
}




// ======================================================
// Copy Array Elements to Another Array
// ======================================================

let original = [10, 20, 30, 40];

// -------- Method 1: for loop --------
let copy1 = [];

for(let item of original){
    copy1.push(item);
}

console.log(copy1);



// -------- Method 2: spread operator --------
// fastest & modern way

let copy2 = [...original];

console.log(copy2);



// -------- Method 3: slice() --------
// slice pura array copy kore

let copy3 = original.slice();

console.log(copy3);




// ======================================================
// Module Summary & Practice Task
// ======================================================

// Practice Task 1:
// akta array reverse koro

let arr1 = [1, 2, 3, 4, 5];

let reverseArr = [];

for(let i = arr1.length - 1; i >= 0; i--){
    reverseArr.push(arr1[i]);
}

console.log(reverseArr);



// Practice Task 2:
// array sort koro

let marks = [90, 20, 50, 10, 70];

marks.sort(function(a, b){
    return a - b;
});

console.log(marks);



// Practice Task 3:
// object er property access koro

let user = {
    name: "Jahid",
    age: 24,
    skill: "JavaScript"
};

console.log(user.name);
console.log(user.skill);



// Practice Task 4:
// 2D array traverse

let gameBoard = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
];

for(let row of gameBoard){

    for(let cell of row){
        console.log(cell);
    }
}