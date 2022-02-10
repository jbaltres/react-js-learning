import React from "react";
import styled from "styled-components"

const Inputfield = styled.input`
 color: #61dafb;
 background-color: #282c34;
 border: 2px solid silver;
 height: 30px;
 font-size: 19px;
 width: 200px;
 margin-top: 5px;

 ::placeholder {
  color: rgba(97, 218, 251,0.8);
  font-size: 20px;
}

`;

function InputField({handleChange, platzhalter}) {

        return (
            <Inputfield className="Inputfield" placeholder={platzhalter} onChange={handleChange} type="text"></Inputfield>
        );
      }

    export default InputField;