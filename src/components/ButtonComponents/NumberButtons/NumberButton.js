import React from "react";

/* Display a button element rendering the data being passed down from the parent container on props */

const NumberButton = props => {

  // STYLING
  const stylesNum = {
    // border: '2px solid yellow',
    background: 'rgb(24, 67, 121)',
    borderRadius: '55%',
    width: '30%',
    height: '23%',
    color: 'white',
    fontSize: '35%',
    outline: 'none'
  };

  return (
    <>
      {
      <button className="numberBtn" style={stylesNum}>
        {props.numbers}
      </button>
      }
    </>
  );
};

export default NumberButton;
