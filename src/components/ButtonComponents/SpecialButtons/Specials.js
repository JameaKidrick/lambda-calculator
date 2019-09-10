import React, { useState } from "react";
import SpecialButton from '../SpecialButtons/SpecialButton'

//import any components needed

//Import your array data to from the provided data file
import { specials } from '../../../data'

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsState] = useState(specials);
  const stylesSpecial = {
    // border: '2px solid green',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '25px 10px 0 25px',
    width: '300px',
    height: '80px',
    fontSize: '100px',
    color: 'white',
    
  }

  return (
    <div style={stylesSpecial}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
      component matching the name on the provided file. Pass
      it any props needed by the child component*/
      specialsState.map((specials, index) => (
        <SpecialButton key={index} specials={specials}/>
      ))}
    </div>
  );
};

export default Specials
