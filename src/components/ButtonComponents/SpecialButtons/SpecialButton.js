import React from "react";

const SpecialButton = props => {
  const stylesSpecial= {
    // border: '2px solid yellow',
    background: 'rgb(34, 93, 158)',
    borderRadius: '55%',
    width: '30%',
    color: 'white',
    fontSize: '35%'
  };

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
        <button className='specialBtn' style={stylesSpecial}>
          {props.specials}
        </button>
      }
    </>
  );
};

export default SpecialButton;
