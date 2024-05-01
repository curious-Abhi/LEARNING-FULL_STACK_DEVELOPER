import React from "react";
import ReactDOM from "react-dom";
//import pi from "./math.jsx";
//import { doublepi, triplepi } from "./math.jsx";
// import * as pi from "./math.jsx";

import pi, { doublepi, triplepi } from "./math.jsx";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{doublepi()}</li>
    <li>{triplepi()}</li>
    <li>3</li>
  </ul>,
  document.getElementById("root")
);
