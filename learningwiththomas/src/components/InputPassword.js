import React from "react";

function InputPassword({handleChange}) {

        return (
            <input className="Inputfield" type="password" onChange={handleChange}></input>
        );
      }

    export default InputPassword;