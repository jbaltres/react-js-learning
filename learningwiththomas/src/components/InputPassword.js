import React from "react";
import styled from "styled-components"

function InputPassword({platzhalter}) {

const PasswordInputfield = styled.input`
 height: 30px;
 font-size: 20px;
 width: 200px;
 color: #61dafb;
  background-color: #282c34;
  border: 2px solid silver;
 margin-top: 5px;

 ::placeholder {
  color: rgba(97, 218, 251,0.8);
  font-size: 20px;
}
`;

        return (
            <PasswordInputfield className="Inputfield" placeholder={platzhalter} type="password"></PasswordInputfield>
        );
      }

    export default InputPassword;