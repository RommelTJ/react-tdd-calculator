import React from 'react';

type Props = {
  callOperator: () => void;
  numbers: number[];
  operators: string[];
  setOperator: () => void;
  updateDisplay: () => void;
}

const Keypad = (props: Props) => {
  const { callOperator, numbers, operators, setOperator, updateDisplay } = props;
  return <div className="keypad-container"/>;
}

export default Keypad;
