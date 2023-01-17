import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import Calculator from './Calculator';
import display from "../Display/Display";

describe('Calculator', () => {
  let wrapper: RenderResult;

  beforeEach(() => wrapper = render(<Calculator />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a div', () => {
    const divs = screen.getAllByRole('presentation');
    expect(divs).toHaveLength(1);
  });

  it('should render the Display and Keypad Components', () => {
    const displayComponent = screen.getByTestId('display');
    expect(displayComponent).toBeTruthy();
    const keypadComponent = screen.getByTestId('keypad');
    expect(keypadComponent).toBeTruthy();
  });

  it('calls updateDisplay when a number key is clicked', async () => {
    const logSpy = jest.spyOn(console, 'log');
    expect(logSpy).toHaveBeenCalledTimes(0);
    const numberKeys = wrapper.getAllByRole("number-key");
    await userEvent.click(numberKeys[0]);
    expect(logSpy).toHaveBeenCalledTimes(1);
  });

  it('calls setOperator when an operator key is clicked', async () => {
    const logSpy = jest.spyOn(console, 'log');
    expect(logSpy).toHaveBeenCalledTimes(0);
    const operatorKeys = wrapper.getAllByRole("operator-key");
    await userEvent.click(operatorKeys[0]);
    expect(logSpy).toHaveBeenCalledTimes(1);
  });

  it('calls callOperator when the submit key is clicked', async () => {
    const logSpy = jest.spyOn(console, 'log');
    expect(logSpy).toHaveBeenCalledTimes(0);
    const submitKey = wrapper.getByRole("submit-key");
    await userEvent.click(submitKey);
    expect(logSpy).toHaveBeenCalledTimes(1);
  });

});
