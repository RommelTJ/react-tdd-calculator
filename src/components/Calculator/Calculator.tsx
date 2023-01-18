import React, { Component } from 'react';

import './Calculator.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

class Calculator extends Component {
  state = {
    // value to be displayed in <Display />
    displayValue: '0',
    // values to be displayed in number <Keys />
    numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0','ce'],
    // values to be displayed in operator <Keys />
    operators: ['/', 'x', '-', '+'],
    // operator selected for math operation
    selectedOperator: '',
    // stored value to use for math operation
    storedValue: '',
  }

  callOperator = () => {
    console.log('call operation');
    let { displayValue, selectedOperator, storedValue } = this.state;
    // temp variable for updating state storedValue
    const updateStoredValue = displayValue;

    // parse strings for operations
    let displayValueNumber = parseInt(displayValue, 10);
    const storedValueNumber = parseInt(storedValue, 10);

    // performs selected operation
    switch (selectedOperator) {
      case '+':
        displayValueNumber = storedValueNumber + displayValueNumber;
        break;
      case '-':
        displayValueNumber = storedValueNumber - displayValueNumber;
        break;
      case 'x':
        displayValueNumber = storedValueNumber * displayValueNumber;
        break;
      case '/':
        displayValueNumber = storedValueNumber / displayValueNumber;
        break;
      default:
        // set displayValue to zero if no case matches
        displayValueNumber = 0;
    }

    // converts displayValue to a string
    displayValue = displayValueNumber.toString();
    // reset selectedOperator
    selectedOperator = '';
    // check for 'NaN' or 'Infinity', if true set displayValue to '0'
    if (displayValue === 'NaN' || displayValue === 'Infinity') displayValue = '0';

    this.setState({ displayValue, selectedOperator, storedValue: updateStoredValue });
  }

  setOperator = (value: string) => {
    console.log('set operation');
    let { displayValue, selectedOperator, storedValue } = this.state;

    // check if a value is already present for selectedOperator
    if (selectedOperator === '') {
      // update storedValue to the value of displayValue
      storedValue = displayValue;
      // reset the value of displayValue to '0'
      displayValue = '0';
      // update the value of selectedOperator to the given value
      selectedOperator = value;
    } else {
      // if selectedOperator is not an empty string
      // update the value of selectedOperator to the given value
      selectedOperator = value;
    }

    this.setState({ displayValue, selectedOperator, storedValue });
  }

  updateDisplay = (value: string) => {
    console.log('update display');
    let { displayValue } = this.state;

    // prevent multiple occurrences of '.'
    if (value === '.' && displayValue.includes('.')) value = '';

    if (value === 'ce') {
      // deletes last char in displayValue
      displayValue = displayValue.substr(0, displayValue.length - 1);
      // set displayValue to '0' if displayValue is empty string
      if (displayValue === '') displayValue = '0';
    } else {
      // replace displayValue with value if displayValue equal to '0'
      // else concatenate displayValue and value
      displayValue === '0' ? displayValue = value : displayValue += value;
    }

    this.setState({ displayValue });
  }

  render = () => {
    const { displayValue, numbers, operators } = this.state;

    return (
      <div data-testid="calculator" role="presentation" className="calculator-container">
        <Display displayValue={displayValue} />
        <Keypad
          callOperator={this.callOperator}
          numbers={numbers}
          operators={operators}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    );
  }
}

export default Calculator;
