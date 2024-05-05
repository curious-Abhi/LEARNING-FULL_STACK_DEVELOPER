import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// function notedetail(entry) {
//   return (
//     <Note key={Math.random()} title={entry.title} content={entry.content} />
//   );
// }

function App() {
  return (
    <div>
      <Header />
      {notes.map((entry) => (
        <Note key={Math.random()} title={entry.title} content={entry.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
