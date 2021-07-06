import React, { useState } from "react";
import OperatorButton from './OperatorButton'
import { operators } from '../../../data'

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 

//Import your array data to from the provided data file

// STEP 2 - add the imported data to state

/* STEP 3 - Use .map() to iterate over your array data and return a button
  component matching the name on the provided file. Pass
  it any props needed by the child component*/


const Operators = () => {
  const [operatorsState] = useState(operators);

  // STYLING
  const styles = {
    border: '2px solid green',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-end',
    justifyContent: 'space-between',
    margin: '25px 25px 25px 10px',
    width: '90px',
    height: '450px',
    fontSize: '100px',
    color: 'white',
    alignSelf: 'flex-center',
  }

  return (
    <div style={styles}>
      {operatorsState.map((operators, index) => (
        <OperatorButton key={index} operators={operators} />
      ))}
    </div>
  );
};

export default Operators;
