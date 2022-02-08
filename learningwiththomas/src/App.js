import logo from './logo.svg';
import './App.css';
import Button from "./components/Button.js"
import ActionButton from "./components/ActionButtion.js"

let i = "8"
let z = "Baltres"

function sayHello() {
    
 alert("Hello")
  }

  function sayCiao() {
    
    alert("Tschüss Thomas und Gundula, habt einen schönen Abend!")
     }

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Button aufschrift="Thomas" nachname={i}></Button>
        <Button aufschrift="Jürgen" nachname={z}></Button>

        <ActionButton currywurst={sayHello}></ActionButton>
        <ActionButton currywurst={sayCiao}></ActionButton>

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
