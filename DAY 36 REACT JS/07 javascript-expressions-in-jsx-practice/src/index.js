//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Abhishek Kumar.
//Copyright 2024

import React from "react";
import ReactDOM from "react-dom";

const YOURNAME = "Abhishek Kumar";
//const CURRENTYEAR = 2024;
const currentdate = new Date();
const year = currentdate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {YOURNAME}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
