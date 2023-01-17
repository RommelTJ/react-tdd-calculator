import React from 'react';
import { render, screen } from '@testing-library/react'

import Keypad from './Keypad';

describe('Keypad', () => {
  it("should render correctly", () => {
    const keypadResult = render(
      <Keypad
        callOperator={jest.fn()}
        numbers={[]}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
    expect(keypadResult).toMatchSnapshot();
  });

  it('should render a Keypad', () => {
    render(
      <Keypad
        callOperator={jest.fn()}
        numbers={[]}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
    const keypadComponent = screen.getByTestId('keypad');
    expect(keypadComponent).toBeTruthy();
  });

  it('should render an instance of the Key component for each index of numbers, operators, and the submit Key', () => {
    const numbers = ['0', '1'];
    const operators = ['+', '-'];
    const submit = 1;
    const keyTotal = numbers.length + operators.length + submit;
    render(
      <Keypad
        callOperator={jest.fn()}
        numbers={numbers}
        operators={operators}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
    // const keypadComponent = screen.getAllByRole('number-key');
    const numberKeys = screen.getAllByRole('number-key');
    const operatorKeys = screen.getAllByRole('operator-key');
    const submitKeys = screen.getAllByRole('submit-key');
    const totalKeys = [...numberKeys, ...operatorKeys, ...submitKeys];
    expect(totalKeys).toHaveLength(keyTotal);
  });

  it('renders the values of numbers to the DOM', () => {
    const numbers = ['0', '1', '2']
    const { container, getAllByRole } = render(
      <Keypad
        callOperator={jest.fn()}
        numbers={numbers}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
    const numbersContainer = container.querySelector('.numbers-container');
    expect(numbersContainer).toBeTruthy();
    const numberKeys = screen.getAllByRole('number-key');
    const expectedKeysTotal = numbers.length;
    expect(numberKeys).toHaveLength(expectedKeysTotal);
  });

});
