import React from "react";

const OperatorButton = props => {
  // const stylesOperator= {
  //   border: '2px solid red',
  //   borderRadius: '25%',
  //   width: '25%',
  //   background: 'rgb(35, 114, 147)',
  //   display: 'flex',
  //   justifyContent: 'center'
  // };
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button className='operatorBtn'>
        {props.operators.value}
      </button>
      }
    </>
  );
};

export default OperatorButton;
