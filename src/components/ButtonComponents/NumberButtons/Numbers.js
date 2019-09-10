import React, { useState } from "react";
import NumberButton from '../NumberButtons/NumberButton'

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 

//Import your array data to from the provided data file
import { numbers } from '../../../data' 

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbersState] = useState(numbers);
  const stylesNumbers = {
    // border: '2px solid green',
    color: 'white',
    fontSize: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    // alignContent: 'center',
    width: '300px',
    height: '350px',
    margin: '15px 10px 25px 25px',
    
  }
  return (
    <div style={stylesNumbers}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/
      numbersState.map((numbers, index) => (
        <NumberButton key={index} numbers={numbers} />
      ))}
    </div>
  );
};

export default Numbers
