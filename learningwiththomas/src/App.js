import logo from './logo.svg';
import './App.css';
import Button from "./components/Button.js"
import ActionButton from "./components/ActionButton.js"
import InputField from "./components/InputField"
import InputPassword from "./components/InputPassword"
import Axios from "axios"
import {useState} from "react";

function App() {

const [name,setName] = useState("");

const setNameOnChange = (e) =>  {
  setName(e.target.value);
}


console.log(name)

const addUser = () => {

  Axios.post('http://localhost:3001/create', 
  {
    name: name
  }).then(() => {console.log("success")});

}

const doLogin = () => {

  Axios.post('http://localhost:3001/login', 
  {
    name: name
  }).then(() => {console.log("success")});

}
  
  


  
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <InputField handleChange={setNameOnChange}></InputField>
        <InputPassword></InputPassword>
        <ActionButton aufschrift="Login"></ActionButton>
        <ActionButton aufschrift="Registration" currywurst={addUser}></ActionButton>

      </header>
    </div>
  );
}

export default App;
