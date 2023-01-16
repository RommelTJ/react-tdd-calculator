import React from 'react';

import './Keypad.css';

type Props = {
  callOperator: () => void;
  numbers: number[];
  operators: string[];
  setOperator: () => void;
  updateDisplay: () => void;
}

const Keypad = (props: Props) => {
  const { callOperator, numbers, operators, setOperator, updateDisplay } = props;

  const numberKeys = numbers.map(number => <p key={number}>{number}</p>);
  const operatorKeys = operators.map(operator => <p key={operator}>{operator}</p>);

  return (
    <div className="keypad-container">
      <div className="numbers-container">{numberKeys}</div>
      <div className="operators-container">{operatorKeys}</div>
    </div>
  );
}

export default Keypad;
