import React from "react";
import './SpecialButton.css';

const SpecialButton = (props) => {
  return <button className='calcButton specialButton'>{props.buttonSpecial}</button>;
};


export default SpecialButton;