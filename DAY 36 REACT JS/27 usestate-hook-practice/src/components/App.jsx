import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000);

  const [ctime, setCtime] = useState(
    new Date().toLocaleTimeString([], { hour12: false })
  );

  function getTime() {
    const newTime = new Date().toLocaleTimeString([], { hour12: false });
    setCtime(newTime);
    // console.log("new time");
  }

  return (
    <div className="container">
      <h1>{ctime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
