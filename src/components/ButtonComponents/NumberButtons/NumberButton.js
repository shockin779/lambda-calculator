import React from "react";
import './NumberButton.css';

const NumberButton = (props) => {
  if(props.buttonNumber === '0') {
    return <button className='numberButton twoWidth'>{props.buttonNumber}</button>
  } else {
    return <button className='numberButton'>{props.buttonNumber}</button>
  }
};

export default NumberButton;