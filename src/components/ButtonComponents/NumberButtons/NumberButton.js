import React from "react";

const NumberButton = props => {
  const stylesNum = {
    border: '2px solid red',
    borderRadius: '50%',
    // height: '30%',
    background: 'rgb(24, 67, 121)',
  };

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
        <button className="numberBtn">
          {props.numbers}
        </button>
      }
    </>
  );
};

export default NumberButton;
