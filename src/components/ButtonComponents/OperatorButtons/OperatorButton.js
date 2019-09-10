import React from "react";

const OperatorButton = props => {
  const styles= {
    // border: '2px solid yellow',
    background: 'rgb(35, 114, 147)',
    borderRadius: '55%',
    width: '100%',
    height: '18%',
    color: 'white',
    fontSize: '35%'
  };
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button className='operatorBtn' style={styles}>
        {props.operators.value}
      </button>
      }
    </>
  );
};

export default OperatorButton;
