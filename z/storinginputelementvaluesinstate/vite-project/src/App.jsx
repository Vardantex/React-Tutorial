import { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  function receiveInput(e) {
    console.log(e);
    console.log(e.target.value);
    setName(e.target.value);
  }

  return (
    <>
      {/* onChange,placeholder are all built-in in properties, onChange runs every time we enter an input inside the input field */}
      <input type="text" onChange={receiveInput} placeholder="name" />

      <br />
      <br />

      <p>
        {buttonClicked ? (
          <span style={{ color: "red", fontWeight: "bold" }}>{name}</span>
        ) : (
          <span style={{ color: "black", fontWeight: "bold" }}>{name}</span>
        )}
      </p>

      <br />
      <br />

      {/* Remember onClick is a built-in property that exists on the button element */}
      <button
        onClick={() => {
          // ! means set the value of buttonClicked to its opposite value
          setButtonClicked(!buttonClicked);
        }}
      >
        Change text color
      </button>
    </>
  );
}

export default App;
