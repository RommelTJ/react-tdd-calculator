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

  const numberKeys = numbers.map(number => <p key={number}>{number}</p>);

  return (
    <div className="keypad-container">
      <div className="numbers-container">
        {numberKeys}
      </div>
    </div>
  );
}

export default Keypad;
