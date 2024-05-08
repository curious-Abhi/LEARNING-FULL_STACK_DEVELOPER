import animals, { useAnimals } from "./data";
//console.log(animals);

//Destructuring arrays

const [cat, dog] = animals;
// console.log(cat);

// const [animal, makesound] = useAnimals(cat);
// console.log(animal);

// console.log(makesound());

// const { name, sound } = cat;
// console.log(name);
// console.log(sound);
// const { name, sound } = dog;
// console.log(name);
// console.log(sound);

// const { name: catName, sound: catSound } = cat;
// console.log(catSound);

//Destructuring Nested objects
// const {
//   name,
//   sound,
//   feedingRequirement: { foods, water },
// } = cat;

// const {
//   feedingRequirement: { foods, water },
// } = cat;
// console.log(foods);
// console.log(water);

// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
