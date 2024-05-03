import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function Emoji(emojiget) {
  return (
    <Card
      key={Math.random()}
      emoji={emojiget.emoji}
      name={emojiget.name}
      meaning={emojiget.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(Emoji)}</dl>
    </div>
  );
}

export default App;
