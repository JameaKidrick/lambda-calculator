import React from "react";

/* Display a button element rendering the data being passed down from the parent container on props */

const SpecialButton = props => {

  // STYLING
  const stylesSpecial= {
    // border: '2px solid yellow',
    background: 'rgb(34, 93, 158)',
    borderRadius: '55%',
    width: '30%',
    color: 'white',
    fontSize: '35%',
    outline: 'none'
  };

  return (
    <>
      {
      <button className='specialBtn' style={stylesSpecial}>
        {props.specials}
      </button>
      }
    </>
  );
};

export default SpecialButton;
