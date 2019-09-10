import React, { useState } from "react";
import OperatorButton from './OperatorButton'

//import any components needed

//Import your array data to from the provided data file
import { operators } from '../../../data'
import { isAbsolute } from "path";

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsState] = useState(operators);
  const styles = {
    // border: '2px solid green',
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
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/
      operatorsState.map((operators, index) => (
        <OperatorButton key={index} operators={operators} />
      ))}
    </div>
  );
};

export default Operators;
