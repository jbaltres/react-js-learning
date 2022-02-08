import React from "react";

function Button({aufschrift, nachname}) {

        return (
          <button>{aufschrift} {nachname}</button>
        );
      }

export default Button;      

/*  const Headline = styled.button`
    font-size: 25px;
    color:white;
    flex-grow: 1;
    text-align: center;
  `; 
  
  ----------------------

map

  const numbers = [1, 3, 5, 7];
const newNumbers = numbers.map( number => number + 3);
// newNumbers will be equal to ['4', '6', '8', '10']

------------------

filter 

const numbers = [1, 2, 3, 4, 5, 6, 7];
const newValue = numbers.filter( (number)=> number >= 3);
console.log(newValue);
// newValue will return [3, 4, 5, 6, 7]


--------------------
sort

const list = [
  { color: 'white', size: 'XXL' },
  { color: 'red', size: 'XL' },
  { color: 'black', size: 'M' }
]

list.sort((a, b) => (a.color > b.color) ? 1 : -1)



-----------------------
reduce 

const numbers = [1, 2, 3, 4, 5];
const newValue = numbers.reduce( (accumulator, currentValue)=> accumulator + currentValue);
console.log(newValue);
// newValue will return 15
  
  */