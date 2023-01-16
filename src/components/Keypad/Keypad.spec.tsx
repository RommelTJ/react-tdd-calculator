import React from 'react';
import { render, screen } from '@testing-library/react'

import Keypad from './Keypad';

describe('Keypad', () => {
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
    const keypadComponent = screen.getAllByRole('key');
    expect(keypadComponent).toHaveLength(keyTotal);
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
    const keys = getAllByRole("key")
    const submitKey = 1;
    const expectedKeysTotal = numbers.length + submitKey;
    expect(keys).toHaveLength(expectedKeysTotal);
  });

});
