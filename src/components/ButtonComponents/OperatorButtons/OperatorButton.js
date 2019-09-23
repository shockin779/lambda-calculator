import React from "react";
import './OperatorButton.css';

const OperatorButton = (props) => {
  return <button className='calcButton operatorButton'>{props.buttonOperator.char}</button>;
};

export default OperatorButton;