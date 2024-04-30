//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date().getHours();
let greetings, color;

if (currentTime < 12) {
  greetings = "Good morning";
  color = "red";
} else if (currentTime < 18) {
  greetings = "Good Afternoon";
  color = "green";
} else {
  greetings = "Good evening";
  color = "blue";
}

ReactDOM.render(
  <h1 style={{ color }} className="heading">
    {greetings}
  </h1>,
  document.getElementById("root")
);
