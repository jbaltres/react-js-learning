import logo from './logo.svg';
import './App.css';
import Button from "./components/Button.js"

let i = "8"
let z = "Baltres"

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Button aufschrift="Thomas" nachname={i}></Button>
        <Button aufschrift="Jürgen" nachname={z}></Button>

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
