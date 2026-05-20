// ======================================================
// 21-1 Can you find out who will get the Strawberry?
// ======================================================

// Problem:
// sobar marks ache
// je beshi marks pabe she strawberry pabe

let marks = [45, 60, 72, 88, 95, 67];

let max = marks[0];

// max number ber kora
for(let num of marks){

    if(num > max){

        max = num;
    }
}

console.log("Strawberry pabe:", max);




// ======================================================
// 21-2 Who is the tallest?
// Find the max number in an array
// ======================================================

let heights = [65, 70, 68, 72, 75, 69];

let tallest = heights[0];

// sob value check kora hocche
for(let height of heights){

    if(height > tallest){

        tallest = height;
    }
}

console.log("Tallest height:", tallest);




// ======================================================
// 21-3 Use add and multiplication to calculate
// wood requirements
// ======================================================

// chair = 3 wood
// table = 10 wood
// bed = 50 wood

function woodCalculator(chairQty, tableQty, bedQty){

    let chairWood = chairQty * 3;

    let tableWood = tableQty * 10;

    let bedWood = bedQty * 50;

    // total wood
    let totalWood = chairWood + tableWood + bedWood;

    return totalWood;
}

let wood = woodCalculator(2, 1, 1);

console.log("Total wood needed:", wood);




// ======================================================
// 21-4 Find the cheapest phone from
// an array of phone objects
// ======================================================

let phones = [

    { name: "Samsung", price: 25000 },
    { name: "iPhone", price: 120000 },
    { name: "Xiaomi", price: 18000 },
    { name: "Realme", price: 22000 }

];

let cheapest = phones[0];

// sob phone compare kora
for(let phone of phones){

    if(phone.price < cheapest.price){

        cheapest = phone;
    }
}

console.log(cheapest);




// ======================================================
// 21-5 Calculate the total cost of the
// products in a shopping cart
// ======================================================

let cart = [

    { name: "Shirt", price: 500, quantity: 2 },
    { name: "Pant", price: 800, quantity: 1 },
    { name: "Shoes", price: 1500, quantity: 1 }

];

let totalCost = 0;

for(let product of cart){

    // product total
    let productCost = product.price * product.quantity;

    totalCost += productCost;
}

console.log("Total shopping cost:", totalCost);




// ======================================================
// 21-6 (advanced) Multi-layer discount
// price calculation
// ======================================================

// discount rules:
// 0-100 = no discount
// 101-200 = 10% discount
// 200+ = 20% discount

function discountPrice(quantity){

    let price = 100;

    // first 100 product
    if(quantity <= 100){

        return quantity * price;
    }

    // 101-200 product
    else if(quantity <= 200){

        let first100Price = 100 * price;

        let remaining = quantity - 100;

        let discountPrice = remaining * 90;

        return first100Price + discountPrice;
    }

    // above 200 product
    else{

        let first100Price = 100 * 100;

        let second100Price = 100 * 90;

        let remaining = quantity - 200;

        let thirdLayerPrice = remaining * 80;

        return first100Price + second100Price + thirdLayerPrice;
    }
}

console.log(discountPrice(250));




// ======================================================
// 21-7 Simple calculator to call function
// inside a function
// ======================================================

// add function
function add(a, b){

    return a + b;
}

// subtract function
function subtract(a, b){

    return a - b;
}

// multiply function
function multiply(a, b){

    return a * b;
}

// divide function
function divide(a, b){

    return a / b;
}



// main calculator function

function calculator(a, b, operation){

    if(operation === "add"){

        return add(a, b);
    }

    else if(operation === "subtract"){

        return subtract(a, b);
    }

    else if(operation === "multiply"){

        return multiply(a, b);
    }

    else if(operation === "divide"){

        return divide(a, b);
    }

    else{

        return "Invalid Operation";
    }
}

console.log(calculator(10, 5, "add"));
console.log(calculator(10, 5, "multiply"));




// ======================================================
// 21-8 Handle unexpected function input parameter error
// ======================================================

// input validation kora important

function sum(num1, num2){

    // number kina check
    if(typeof num1 !== "number" || typeof num2 !== "number"){

        return "Please provide valid numbers";
    }

    return num1 + num2;
}

console.log(sum(10, 20));

console.log(sum(10, "hello"));




// ======================================================
// 21-9 Module Summary and Practice Tasks
// ======================================================

// Important Topics:
// 1. Max number find
// 2. Min number find
// 3. Object array
// 4. Total calculation
// 5. Discount logic
// 6. Function call inside function
// 7. Error handling



// ======================================================
// Practice Task 1
// find smallest number
// ======================================================

let numbers = [10, 5, 30, 2, 18];

let smallest = numbers[0];

for(let num of numbers){

    if(num < smallest){

        smallest = num;
    }
}

console.log("Smallest:", smallest);




// ======================================================
// Practice Task 2
// total marks calculate
// ======================================================

let studentMarks = [80, 75, 90, 85];

let totalMarks = 0;

for(let mark of studentMarks){

    totalMarks += mark;
}

console.log("Total Marks:", totalMarks);




// ======================================================
// Practice Task 3
// most expensive product
// ======================================================

let products = [

    { name: "Laptop", price: 70000 },
    { name: "Mobile", price: 30000 },
    { name: "Tablet", price: 25000 }

];

let expensive = products[0];

for(let product of products){

    if(product.price > expensive.price){

        expensive = product;
    }
}

console.log(expensive);




// ======================================================
// Practice Task 4
// calculator test
// ======================================================

console.log(calculator(20, 10, "subtract"));

console.log(calculator(5, 5, "divide"));




// ======================================================
// Practice Task 5
// wood calculator test
// ======================================================

console.log(woodCalculator(5, 2, 1));