import React from "react";

/*const Button = styled.button`
  color: white;
  border: none;
  height: 40px;
  width: 40px;
  text-align: center;
  border-radius: 50px;
  background-color: ${props =>
    props.close ? "rgb(37, 206, 198)" : "rgb(255, 58, 80)"};
  margin: 20px 0px 20px;
  font-size: 20px;
`;*/

function ActionButton({currywurst}) {
  return (
    <button  onClick={(currywurst)}>
      Action!
    </button>
  );
}

export default ActionButton;