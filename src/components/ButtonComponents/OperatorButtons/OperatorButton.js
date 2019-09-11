import React from "react";

/* Display a button element rendering the data being passed down from the parent container on props */

const OperatorButton = props => {

  // STYLING
  const styles= {
    // border: '2px solid yellow',
    background: 'rgb(35, 114, 147)',
    borderRadius: '55%',
    width: '100%',
    height: '18%',
    color: 'white',
    fontSize: '35%',
    outline: 'none'
  };

  return (
    <>
      {
      <button className='operatorBtn' style={styles}>
        {props.operators.value}
      </button>
      }
    </>
  );
};

export default OperatorButton;
