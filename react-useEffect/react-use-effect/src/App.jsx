import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("");


  function storeName(e) {
    setName(e.target.value);
    
    }

    function storeSurname(e) {
      setSurname(e.target.value);
      
      }

      
// This runs on webpage load or state changes
  useEffect( () => {

    console.log("This is a useEffect()");

  }, [surname])


  return (
    <>
      
    <input type="text" onChange={storeName}  />

    <br />
    <br />

    <input type="text" onChange={storeSurname}  />


    <p>{name} </p>
    <br />
    <p>{surname} </p>


    </>
  )
}

export default App
