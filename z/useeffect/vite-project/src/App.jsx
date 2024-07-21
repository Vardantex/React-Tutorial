import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  function storeName(e) {
    setName(e.target.value);
  }

  function storeSurname(e) {
    setSurname(e.target.value);
  }

  // useEffect runs everytime the component mounts(runs for the first time) and  a state variable updates

  // If you want to run the useEffect hook only once, when the component mounts for the first time, you can pass an empty dependency array as the second argument to useEffect. By passing an empty array [], you're telling React that the effect doesn't depend on any values from props or state.

  //We can also add the state variables to the dependency array which means that run useEffect only if the values of the variables inside the dependency array change
  useEffect(() => {
    console.log("This is useEffect");
  }, [surname]);

  return (
    <>
      <input type="text" onChange={storeName} />

      <br />
      <br />

      <input type="text" onChange={storeSurname} />

      <p>{name}</p>
      <br />
      <p>{surname}</p>
    </>
  );
}

export default App;
