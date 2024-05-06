import React from "react";
import Login from "./login";

var isLoggedin = true;

// function loggedin() {
//   if (isLoggedin == true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

function App() {
  return (
    <div className="container">
      {isLoggedin === false && <h1>Hello</h1>}

      {/*  {isLoggedin === true ? <h1>Hello</h1> : <Login />}    */}
    </div>
  );
}

export default App;
