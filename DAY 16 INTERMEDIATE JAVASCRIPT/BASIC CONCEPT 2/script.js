// Control Statements: Using If-Else Conditionals & Logic

//let age=25;
/*let age=13;

if(age>=18){
  console.log("you are old enough to enter this site")
}
else{
    console.log("you must be 18 + to enter the site")
}
*/

//let time = 9;
/*let time=15;
if (time < 12) {
  console.log("Good Morning");
} else {
  console.log("Good Afternoon");
} */

//let isStudent=false;
/* let isStudent=true;
if (isStudent){
  console.log("you are a student.");
}
else{
    console.log("you are not a student");
} */

/******************************NESTED IF STATEMENT  *************************/

//let age = 25;
//let hasLicense = false;
/* 

let age = 15;
let hasLicense = true;
if (age >= 16) {
  console.log("you are enough to drive");
  if (hasLicense) {
    console.log("you have your license!");
  } else {
    console.log("you do not have your license yet");
  }
} else {
  console.log("you must be 16+ to have a license");
}


*/

//IF, ELSE IF AND ELSE

//let age=18;

//let age=13;

/*
let age = 101;
if (age >= 100) {
  console.log("you are too OLD to enter this site");
} else if (age == 0) {
  console.log("you can't enter .you were just born");
} else if (age >= 18) {
  console.log("you are old enough to enter this site");
} else if (age < 0) {
  console.log("your age can't be below 0");
} else {
  console.log("you must be 18 + to enter this site");
}

*/

//ternary operator

// Ternary Operator:
//
// The ternary operator, also known as the conditional operator, is a concise way to write conditional expressions in JavaScript.
// It takes three operands: a condition followed by two expressions separated by a colon (:).
//
// Syntax:
// condition ? expression1 : expression2
//
// - If the condition evaluates to true, expression1 is executed.
// - If the condition evaluates to false, expression2 is executed.
//
// Example:
// let age = 20;
// let message = (age >= 18) ? "You are an adult" : "You are not an adult";
// console.log(message); // Output: "You are an adult"
//
// In this example, if age is greater than or equal to 18, the message "You are an adult" is assigned to the variable message.
// Otherwise, the message "You are not an adult" is assigned.


/* let number = 10;
let isEven = (number % 2 === 0) ? "even" : "odd";
console.log("The number is " + isEven); // Output: "The number is even"  */

/* 
let score = 75;
let resultMessage = score >= 70 ? "Pass" : "Fail";
console.log("Result: " + resultMessage); // Output: "Result: Pass"
*/


//SWITCH CASE


// The switch statement in JavaScript provides a way to execute different code blocks based on different conditions.
// It evaluates an expression and compares it with multiple cases. When a match is found, the corresponding block of code is executed.
//
// Syntax:
// switch (expression) {
//   case value1:
//     // Code block to execute if expression matches value1
//     break;
//   case value2:
//     // Code block to execute if expression matches value2
//     break;
//   // Additional cases...
//   default:
//     // Code block to execute if expression doesn't match any case
// }
//
// - The switch statement evaluates the expression and then looks for a case whose value matches the value of the expression.
// - If a match is found, the corresponding code block is executed. If no match is found, the code block under the default case is executed (if provided).
// - The optional `break` statement is used to exit the switch block. If omitted, execution will continue to the next case.
//
// Example:
// let day = "Monday";
// let message;
// switch (day) {
//   case "Monday":
//     message = "Today is Monday";
//     break;
//   case "Tuesday":
//     message = "Today is Tuesday";
//     break;
//   // Additional cases...
//   default:
//     message = "Unknown day";
// }
// console.log(message); // Output: "Today is Monday"
//
// In this example, the switch statement evaluates the value of the variable `day`.
// If `day` is "Monday", the message variable is assigned the value "Today is Monday".
// If `day` is "Tuesday", the message variable is assigned the value "Today is Tuesday".
// If `day` doesn't match any of the cases, the message variable is assigned the value "Unknown day" (due to the default case).

// ********************************************CHALLENGE***********************************


/*
// Test Score Evaluation using Switch Case:

// Function to evaluate test scores and provide feedback
function evaluateTestScore(score) {
  let grade;

  // Switch case statement to evaluate test scores
  switch (true) {
      case score >= 90:
          grade = "A";
          break;
      case score >= 80:
          grade = "B";
          break;
      case score >= 70:
          grade = "C";
          break;
      case score >= 60:
          grade = "D";
          break;
      default:
          grade = "F";
  }

  // Return the grade
  return grade;
}

// Test cases
console.log("Test Score: 95, Grade: " + evaluateTestScore(95)); // Output: "Test Score: 95, Grade: A"
console.log("Test Score: 82, Grade: " + evaluateTestScore(82)); // Output: "Test Score: 82, Grade: B"
console.log("Test Score: 75, Grade: " + evaluateTestScore(75)); // Output: "Test Score: 75, Grade: C"
console.log("Test Score: 68, Grade: " + evaluateTestScore(68)); // Output: "Test Score: 68, Grade: D"
console.log("Test Score: 45, Grade: " + evaluateTestScore(45)); // Output: "Test Score: 45, Grade: F"

*/


/*



// Logical Operators:

// Logical operators are used to perform logical operations on boolean values.

// 1. AND (&&) Operator:
// - The && operator returns true if both operands are true; otherwise, it returns false.

let x = true;
let y = false;
console.log(x && y); // Output: false

// 2. OR (||) Operator:
// - The || operator returns true if at least one of the operands is true; otherwise, it returns false.

console.log(x || y); // Output: true

// 3. NOT (!) Operator:
// - The ! operator negates the boolean value of its operand. If the operand is true, ! returns false, and vice versa.

console.log(!x); // Output: false
console.log(!y); // Output: true

// Combining Logical Operators:

// Logical operators can be combined to create complex logical expressions.

let a = 10;
let b = 20;
let c = 30;

// Example of a complex logical expression:
// The expression evaluates to true if all conditions are met: a is greater than 5, b is less than 30, and c is equal to 30.
let result = a > 5 && b < 30 && c === 30;
console.log(result); // Output: true

// Example of short-circuit evaluation:
// If the first operand of the && operator is false, the second operand is not evaluated.
let checkValue = false && someFunction(); // someFunction() will not be called

*/


// **************************************challenge********************************

/*
let age = 25;
let hasLicense = true;
let hasExperience = true;

// Checking if a person is eligible to rent a car
let canRentCar = age >= 25 && hasLicense && hasExperience;
console.log(canRentCar); // Output: true
*/



/*            *****************  OPERATOR*******************************

// Arithmetic Operators:
let sum = 5 + 3;           // Addition
let difference = 10 - 4;   // Subtraction
let product = 6 * 2;       // Multiplication
let quotient = 12 / 3;     // Division
let remainder = 10 % 3;    // Modulus/Remainder
let num = 5;
num++;                     // Increment
num--;                     // Decrement

// Assignment Operators:
let x = 10;                // Assignment
x += 5;                    // Addition Assignment (x = x + 5)
x -= 3;                    // Subtraction Assignment (x = x - 3)
x *= 2;                    // Multiplication Assignment (x = x * 2)
x /= 4;                    // Division Assignment (x = x / 4)
x %= 3;                    // Modulus Assignment (x = x % 3)
x **= 2;                   // Exponentiation Assignment (x = x ** 2)

// Comparison Operators:
let isEqual = (10 == 10);          // Equal to
let isNotEqual = (5 != 10);         // Not equal to
let isStrictEqual = (10 === 10);    // Strict equal to
let isStrictNotEqual = (5 !== 10);  // Strict not equal to
let isGreaterThan = (15 > 10);      // Greater than
let isLessThan = (5 < 10);          // Less than
let isGreaterOrEqual = (20 >= 10);  // Greater than or equal to
let isLessOrEqual = (5 <= 10);      // Less than or equal to


*/


/*
//LOOP


// for Loop: Executes a block of code a specified number of times.
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs 0, 1, 2, 3, 4
}

// while Loop: Executes a block of code while a specified condition is true.
let i = 0;
while (i < 5) {
  console.log(i); // Outputs 0, 1, 2, 3, 4
  i++;
}

// do...while Loop: Similar to a while loop, but the code block is executed once before checking the condition.
let j = 0;
do {
  console.log(j); // Outputs 0
  j++;
} while (j < 0);

// for...in Loop: Iterates over the enumerable properties of an object.
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
for (let key in person) {
  console.log(key + ': ' + person[key]); // Outputs name: John, age: 30, city: New York
}

// for...of Loop: Iterates over the iterable objects (arrays, strings, etc.).
const fruits = ['apple', 'banana', 'cherry'];
for (let fruit of fruits) {
  console.log(fruit); // Outputs apple, banana, cherry
}

*/

/*

//ARRAY


// Array in JavaScript:
// An array is a special variable that can hold more than one value at a time.

// Creating an Array:
const fruits = ['apple', 'banana', 'cherry'];

// Accessing Array Elements:
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
console.log(fruits[2]); // Output: 'cherry'

// Modifying Array Elements:
fruits[1] = 'orange';
console.log(fruits); // Output: ['apple', 'orange', 'cherry']

// Array Length:
console.log(fruits.length); // Output: 3

// Adding Elements to an Array:
fruits.push('grape'); // Adds 'grape' to the end of the array
console.log(fruits); // Output: ['apple', 'orange', 'cherry', 'grape']

// Removing Elements from an Array:
fruits.pop(); // Removes the last element ('grape') from the array
console.log(fruits); // Output: ['apple', 'orange', 'cherry']

// Iterating Over Arrays:
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Array Methods:
// There are many built-in methods for working with arrays in JavaScript, such as push(), pop(), shift(), unshift(), splice(), slice(), etc.

*/


/*
// Adding Elements to an Array:
const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // Adds 6 to the end of the array
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

numbers.unshift(0); // Adds 0 to the beginning of the array
console.log(numbers); // Output: [0, 1, 2, 3, 4, 5, 6]

// Intermediate Array Techniques:
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Spreading Arrays: Combining arrays
const moreFruits = ['elderberry', 'fig'];
const allFruits = [...fruits, ...moreFruits];
console.log(allFruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig']

// Removing Elements from an Array: Using splice()
fruits.splice(2, 1); // Removes 'cherry' from the array
console.log(fruits); // Output: ['apple', 'banana', 'date']

// Slicing an Array: Extracts a section of an array
const selectedFruits = allFruits.slice(1, 4); // Returns a new array with elements from index 1 to 3 (excluding index 4)
console.log(selectedFruits); // Output: ['banana', 'cherry', 'date']

// Concatenating Arrays: Joining arrays
const veggies = ['carrot', 'broccoli'];
const allFood = fruits.concat(veggies);
console.log(allFood); // Output: ['apple', 'banana', 'date', 'carrot', 'broccoli']

// Mapping an Array: Creating a new array with modified elements
const numbersSquared = numbers.map(num => num * num);
console.log(numbersSquared); // Output: [0, 1, 4, 9, 16, 25, 36]

*/