import React from "react";

const NumberButton = props => {
  const stylesNum = {
    // border: '2px solid yellow',
    background: 'rgb(24, 67, 121)',
    borderRadius: '55%',
    width: '30%',
    height: '23%',
    color: 'white',
    fontSize: '35%'
    
  };

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
        <button className="numberBtn" style={stylesNum}>
          {props.numbers}
        </button>
      }
    </>
  );
};

export default NumberButton;
