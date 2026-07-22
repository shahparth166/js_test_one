// Operators --> Operators are symbols that perform actions on values.


//Think of them like buttons on a calculator: +, -, *, /


// Typess of Operators

// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators

// 1. Arithmetic Operators


let a = 10;
let b = 5;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b); 

// 2.Comparison Operators (True/False)

// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);

// console.log("5" == 5);   // true ❌ (Type coercion - dangerous!) Not Use this operator
// console.log("5" === 5);  // Use only this operator 

// 3. Logical Operators

let isStudent = true;
let isTeacher = false;

// console.log(isStudent && isTeacher); // false
// console.log(isStudent || isTeacher); // true
// console.log(!isStudent); // false


// console.log(5 + 3 * 2);

// let userAge = 16;
// let movieRating = "PG-13";
// let userMoney = 500;
// let ticketPrice = 200;
// let isMovieAvailable = true;

// let isOldEnough = userAge >=13;
// console.log("Old enough? " + isOldEnough);

// let hasEnoughMoney = userMoney >= ticketPrice;
// console.log("Has money? " + hasEnoughMoney); 

// let canBook = isOldEnough && hasEnoughMoney && isMovieAvailable;
// console.log("Can book? " + canBook); 

// if (canBook) {
//   console.log("✅ Booking successful!");
// } else {
//   console.log("❌ Booking denied!");
// }

// let x = 10;
// let y = "10";

// console.log(x == y);   // Output?
// console.log(x === y);  // Output?
// console.log(typeof x); // Output?
// console.log(typeof y); // Output?

// let a1 = 15;
// let a2 = 25;

// console.log(a1 + a2);

// let a1 = 12;
// let a2 = 8;

// console.log(a1 * a2);

// let a1 = 100;
// let a2 = 4;

// console.log(a1 / a2);

// A pizza costs 250 rupees
// You order 2 pizzas
// Tax is 50 rupees
// Calculate total amount to pay

// let pizzaPrice = 250;
// let quantity = 2;
// let tax = 50;

// Write code to calculate total
// Print: "You need to pay: X rupees"

// let totalAmount = (pizzaPrice * quantity) + tax;
// console.log("You need to pay: " + totalAmount + " rupees");


/// Student got marks: 85, 90, 78, 92, 88
// Calculate average (sum all / divide by count)

// let marks1 = 85;
// let marks2 = 90;
// let marks3 = 78;
// let marks4 = 92;
// let marks5 = 88;

// // Write code to calculate average
// // Print: "Average: X"

// let totalMarkes = marks1 + marks2 + marks3 + marks4 + marks5;
// let average = totalMarkes/5;
// console.log("Average: " + average);


// Check if person can:
// 1) Vote (age >= 18)
// 2) Get driving license (age >= 16)
// 3) Get passport (age >= 5)
// 4) Get senior citizen discount (age >= 60)

// let personAge = 25;

// let canVote = personAge >= 18;
// let canDrive = personAge >= 16;
// let canGetPassport = personAge >= 5;
// let canGetSeniorDiscount = personAge >= 60;

// console.log("Can vote? " + canVote);
// console.log("Can drive? " + canDrive);
// console.log("Can get passport? " + canGetPassport);
// console.log("Can get senior citizen discount? " + canGetSeniorDiscount);  

// Given two numbers, compare them
// let num1 = 42;
// let num2 = 42;

// console.log(num1 == num2);   // ?
// console.log(num1 === num2);  // ?
// console.log(num1 > num2);    // ?
// console.log(num1 < num2);    // ?
// console.log(num1 >= num2);   // ?
// console.log(num1 <= num2);   // ?

// Predict outputs before running!


// Predict outputs (think about type coercion!)
console.log(1 == "1");       // ?
console.log(1 === "1");      // ?
console.log(true == 1);      // ?
console.log(true === 1);     // ?
console.log(null == undefined);   // ?
console.log(null === undefined);  // ?
console.log("hello" == "hello");  // ?
console.log("hello" === "hello"); // ?

// Explain why each is true or false

