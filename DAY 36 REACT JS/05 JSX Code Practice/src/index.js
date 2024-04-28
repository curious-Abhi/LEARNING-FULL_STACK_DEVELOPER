//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDom from "react-dom";
ReactDom.render(
  <div>
    <h1>My daily to do</h1>
    <ul>
      <li>drink water</li>
      <li>write code</li>
      <li>revise daily</li>
    </ul>
  </div>,
  document.getElementById("root")
);
