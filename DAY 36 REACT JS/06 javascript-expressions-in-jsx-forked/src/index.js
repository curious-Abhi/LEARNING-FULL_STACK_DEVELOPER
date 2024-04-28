import React from "react";
import ReactDOM from "react-dom";

//challenge 1

const fname = "Abhishek ";
const lname = "Kumar";
const fnum = 7;

ReactDOM.render(
  <div>
    {/*<h1>Hello {fname}!</h1> */}

    {/*<h1>Hello {fname} {lname}!</h1> */}
    {/*<h1>Hello {fname + " " + lname}</h1>*/}
    <h1>Hello {`${fname}${lname}`}</h1>
    {/* <p>My favorite number is {fnum}</p> */}
    <p>My favorite number is {3 + 4}</p>
  </div>,
  document.getElementById("root")
);
