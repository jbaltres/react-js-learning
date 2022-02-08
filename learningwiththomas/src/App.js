import React from "react";
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button.js"
import ActionButton from "./components/ActionButtion.js"    

function App() {

const [click, setClick] = React.useState(12);

let i = "8"
let z = "Baltres"

function sayHello() {
    
 alert("Hello")
  }

  function sayCiao() {
    
    alert("Tschüss Thomas und Gundula, habt einen schönen Abend!")
     }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Button aufschrift="Thomas" nachname={i}></Button>
        <Button aufschrift="Jürgen" nachname={z}></Button>

        <Button aufschrift="Gundula" nachname={z}></Button>

        <ActionButton currywurst={sayHello}></ActionButton>
        <ActionButton currywurst={sayCiao}></ActionButton>


        <ActionButton currywurst={() => setClick(click + 5)}></ActionButton>
        
        Das hier ist der State-Wert: {click}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
