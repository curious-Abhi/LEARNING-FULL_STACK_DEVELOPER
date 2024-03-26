//console.log("Hello");
//console.log("Welcome to my github repo.")
//console.log("I like pizza!");

//window.alert("This is an alert!");
//window.alert("I like pizza!");

//this is an comment

/* this 
is 
also 
a 
comment */

//document.getElementById("myh1").textContent='Hello';
//document.getElementById("myp").textContent='How are You?//';

//VARIABLE = a container that stores a value.
//            Behaves as if it were the valur it contains

// 1.Declration   let x;
// 2.Assignment   x=299;

/*let x;
x=100;
console.log(x) */

//DATA TYPE 

/*let price=34.56;
let age=23;
let gpa=3.3;

console.log(`you are ${age} years of old `);
console.log(`the price is $ ${price}`);
console.log(`your gpa is ${gpa}`)

console.log(typeof(age));
console.log(typeof(price));*/

//STRING : a series of character

/*let firstname="Abhi";
let favouritefood="Pizza";
let email="abhi553@gmail.com";

console.log(typeof(firstname))
console.log(`your name is ${firstname}`);
console.log(`you like ${favouritefood}`);
console.log(`your email is ${email}`);*/

//BOOLEAN

/*let online=true;
console.log(typeof(online));
console.log(`Abhi is online ${online}`)

let forsale=false;
console.log(typeof(forsale));*/


/*let fullname="abhishek kumar";
let age=18;
let isStudent=false;

//document.getElementById("p1").textContent=fullname;
//document.getElementById("p2").textContent=age;
//document.getElementById("p3").textContent=isStudent;

document.getElementById("p1").textContent=`your name is ${fullname}`;
document.getElementById("p2").textContent=`you are ${age} years old`;
document.getElementById("p3").textContent=`enrolled :${isStudent}`*/



//string operation 


//1.CONCATENATION

//alert("hello"+" "+"brother");

//challenge

//var message="Hello"
//var name="Abhishek."
// output :hello there, Abhishek.

//alert(message+ " "+"there," +  name);



// 2.String length

// #CHALLENGE

//twitter challenge
// PROMPT task: you have written 182 characters , you have -42 characters left

/*var tweet=prompt("write any tweet");
var tweetcount=tweet.length;

alert("you have written "+tweetcount +"characters , you have"+(140-tweetcount) +"characters left");*/

// 3.string SLICING

//var name = "Abhishek";
//name.slice(0, 3);

//#challenge

/*var tweet=prompt("write any tweet");
var tweetunder140=tweet.slice(0,140);
alert(tweetunder140);*/


// 4.toUpperCase

/*var namef="abhishek";
console.log(namef.toUpperCase());

var lname="KUMAR";
console.log(lname.toLowerCase()); */

//CHALLENGE

// PROMPT : Hello Abhishek

//OPERATOR

//ARITHMETIC OPERATOR  = operands(values, variables etc.)
//                      operators(+,-,*,/)

//let  student=30;

//student+=1;
//student-=1;
//student*=4;
//student/=2;

//student=student**2;

//student=student%4

//student++;
//student--;

//console.log(student)


//OPERATOR PRECEDENCE


// OPERATOR PRECEDENCE RULES:
// 1. Parentheses: Operations within parentheses are evaluated first.
// 2. Increment and Decrement Operators: ++ and -- have higher precedence than most other operators.
// 3. Multiplication and Division: *, /, and % have higher precedence than addition and subtraction.
// 4. Addition and Subtraction: + and - have lower precedence than multiplication, division, and modulo.
// 5. Assignment Operators: Assignment operators (=, +=, -=, etc.) have lower precedence than most other operators.


//let result=1+2*3+4**2
//console.log(result)

//CHALLENGE

//DOG AGE TO HUMAN AGE FORMULA

//humanAge=(dogAge-2)*4+21

/*var dogAge=prompt("enter the age of your dog");
var humanAge=((dogAge-2)*4)+21;

alert("your dog's age is "+ humanAge +" yrs old in human age")*/



//TYPE CONVERSION=change the datatype of a value to another 
//                             (string , numbers , booleans)

//let age=prompt("How old are you?");
//age+=1;
//console.log(age); 

/*let age=prompt("How old are you?");
age=Number(age);
age+=1;
console.log(age , typeof age); */

/*let x="pizza";
let y="pizza";
let z="pizza";

x=Number(x);
y=String(y);
z=Boolean(z);

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);  */

/* let x="0";
let y="0";
let z="0";

x=Number(x);
y=String(y);
z=Boolean(z);

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);
*/

/* let x = "";
let y = "";
let z = "";

x = Number(x); // Output: 0 number
y = String(y); // Output: "" string
z = Boolean(z); // Output: false boolean

console.log(x, typeof x); // Output: 0 number
console.log(y, typeof y); // Output:  string
console.log(z, typeof z); // Output: false boolean */



// const = a variable that can't be changed

//program to calculate circumference of circle

//let pi=3.14159;

//pi=34;
/*const PI=3.14159;
PI=345;

let radius;
let circumference;

radius=prompt("enter the radius of circle");
radius=Number(radius);

circumference=2*pi*radius;
console.log(circumference);



// Program to calculate circumference of a circle

// Define a constant for pi
const PI = 3.14159; // Assigning value 3.14159 to constant PI

// Attempting to reassign value to constant PI (will throw an error)
// pi = 34; // This line will throw an error because constants cannot be reassigned

// Declare variables to store radius and circumference
let radius;
let circumference;

// Prompt the user to enter the radius of the circle and convert it to a number
radius = prompt("Enter the radius of the circle"); // Asking user for input
radius = Number(radius); // Converting user input (which is a string) to a number

// Calculate the circumference of the circle using the formula: circumference = 2 * PI * radius
// The value of PI is obtained from the constant defined earlier
circumference = 2 * PI * radius; // Calculating circumference using formula

// Output the calculated circumference to the console
console.log(circumference); // Displaying the circumference of the circle to the console


*/













