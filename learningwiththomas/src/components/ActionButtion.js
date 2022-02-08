import React from "react";
import styled from "styled-components";



function ActionButton({currywurst}) {

const Gundula = styled.button`
  color: black;
  border: none;
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
`;

  return (
    <Gundula onClick={(currywurst)}>
      Action!
    </Gundula>
  );
}

export default ActionButton;