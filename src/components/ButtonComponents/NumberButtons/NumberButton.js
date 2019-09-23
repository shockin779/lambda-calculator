import React from "react";
import './NumberButton.css';

const NumberButton = (props) => {
  if(props.buttonNumber === '0') {
    return <button className='calcButton numberButton twoWidth'>{props.buttonNumber}</button>
  } else {
    return <button className='calcButton numberButton'>{props.buttonNumber}</button>
  }
};

export default NumberButton;