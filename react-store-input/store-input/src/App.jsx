import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  function recieveInput(e) {
  console.log(e);  
  console.log(e.target.value);  
    setName(e.target.value);
  }

  

  return (
    <>

    <input type="text" onChange={recieveInput} placeholder="name" />

    <br />
    <br />
    
    <p> {buttonClicked ? (<span style={{color: "red", fontWeight: "bold" }}>{name}</span> ) 
    : ( <span style={{color:"black", fontWeight: "bold" }}>{name}</span>  )} </p>

<br />
    <br />
     
    <button onClick={() => {
      setButtonClicked(!buttonClicked);
    }}>Change Me</button>

    </>
  );
}

export default App
