import React from "react";

function InputField({handleChange}) {

        return (
            <input className="Inputfield" onChange={handleChange} type="text"></input>
        );
      }

    export default InputField;