import React from "react";
import styled from "styled-components";



function ActionButton({currywurst, aufschrift}) {

const Gundula = styled.button`
  color: #61dafb;
  background-color: #282c34;
  border: 2px solid silver;
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
  height: 30px;
 font-weight: bold;
 width: 200px;
 border-radius: 25px 25px 15px 15px;
`;

  return (
    <Gundula onClick={(currywurst)}>
      {aufschrift}
    </Gundula>
  );
}

export default ActionButton;