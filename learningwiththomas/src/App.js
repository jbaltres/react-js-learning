import React from "react"
import logo from './logo.svg';
import './App.css';
import ActionButton from "./components/ActionButton.js"
import InputField from "./components/InputField"
import InputPassword from "./components/InputPassword"
import Axios from "axios"

function App() {

const [userName,setUserName] = React.useState("");

const setNameOnChange = (e) =>  {
  setUserName(e.target.value);
}

const setPasswordOnChange = (e) =>  {
  setUserName(e.target.value);
}

console.log(userName)

const addUser = () => {

  Axios.post('http://localhost:3001/create', 
  {
    name: userName
  }).then(() => {console.log("success")});

}

const doLogin = () => {

  Axios.post('http://localhost:3001/login', 
  {
    name: userName
  }).then(() => {console.log("success")});

}
  
  


  
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <InputField handleChange={setNameOnChange}></InputField>
        <InputPassword handleChange={setPasswordOnChange}></InputPassword>
        <ActionButton aufschrift="Login"></ActionButton>
        <ActionButton aufschrift="Registration" currywurst={addUser}></ActionButton>

      </header>
    </div>
  );
}

export default App;
