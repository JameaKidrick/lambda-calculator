import React, { useState } from "react";
import NumberButton from '../NumberButtons/NumberButton'
import { numbers } from '../../../data' 

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 

//Import your array data to from the provided data file

// STEP 2 - add the imported data to state

/* STEP 3 - Use .map() to iterate over your array data and return a button
  component matching the name on the provided file. Pass
  it any props needed by the child component*/

  
const Numbers = () => {
  const [numbersState] = useState(numbers);

  // STYLING
  const stylesNumbers = {
    // border: '2px solid green',
    color: 'white',
    fontSize: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '300px',
    height: '350px',
    margin: '15px 10px 25px 25px',
  }

  return (
    <div style={stylesNumbers}>
      {numbersState.map((numbers, index) => (
        <NumberButton key={index} numbers={numbers} />
      ))}
    </div>
  );
};

export default Numbers
