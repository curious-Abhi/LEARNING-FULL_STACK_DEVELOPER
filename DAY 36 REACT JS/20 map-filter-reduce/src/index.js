// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// var newNumbers = numbers.map(function (num) {
//   return num * 2;
// });
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
// var newNumbers = numbers.filter(function (num) {
//   return num < 10;
// });
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// var sum = numbers.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum);

//Find - find the first item that matches from an array.

// var fnumbers = numbers.find(function (num) {
//   return num > 10;
// });
// console.log(fnumbers);

//FindIndex - find the index of the first item that matches.
// var numindex = numbers.findIndex(function (num) {
//   return num > 10;
// });
// console.log(numindex);


//substring

import emojipedia from "./emojipedia";

// Loop through the emojipedia array
emojipedia.forEach(function(emoji) {
    // Extract substring from the meaning property of each object
    var newstr = emoji.meaning.substring(0, 100); // Extracting first 100 characters
    console.log(newstr);
});

