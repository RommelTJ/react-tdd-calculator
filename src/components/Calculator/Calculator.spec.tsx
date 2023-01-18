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

  it('updates displayValue', async () => {
    const numberKeys = wrapper.getAllByRole("number-key");
    await userEvent.click(numberKeys[0]);
    const displayComponent = wrapper.getByTestId("display");
    const displayValue = displayComponent.querySelector(".display-value");
    expect(displayValue?.textContent).toBe("9");
  })

  it('concatenates displayValue', async () => {
    const numberKeys = wrapper.getAllByRole("number-key");
    await userEvent.click(numberKeys[4]); // '5'
    await userEvent.click(numberKeys[10]); // '0'
    const displayComponent = wrapper.getByTestId("display");
    const displayValue = displayComponent.querySelector(".display-value");
    expect(displayValue?.textContent).toBe("50");
  });

  it('removes leading "0" from displayValue', async () => {
    const numberKeys = wrapper.getAllByRole("number-key");
    await userEvent.click(numberKeys[10]); // '0'
    const displayComponent = wrapper.getByTestId("display");
    let displayValue = displayComponent.querySelector(".display-value");
    expect(displayValue?.textContent).toBe("0");
    await userEvent.click(numberKeys[4]); // '5'
    displayValue = displayComponent.querySelector(".display-value");
    expect(displayValue?.textContent).toBe("5");
  });

  it('prevents multiple leading "0"s from displayValue', async () => {
    const numberKeys = wrapper.getAllByRole("number-key");
    await userEvent.click(numberKeys[10]); // '0'
    await userEvent.click(numberKeys[10]); // '0'
    const displayComponent = wrapper.getByTestId("display");
    const displayValue = displayComponent.querySelector(".display-value");
    expect(displayValue?.textContent).toBe("0");
  });

  it('removes last char of displayValue', async () => {
    const numberKeys = wrapper.getAllByRole("number-key");
    await userEvent.click(numberKeys[4]); // '5'
    await userEvent.click(numberKeys[10]); // '0'
    await userEvent.click(numberKeys[11]); // 'CE'
    const displayComponent = wrapper.getByTestId("display");
    const displayValue = displayComponent.querySelector(".display-value");
    expect(displayValue?.textContent).toBe("5");
  });

  it('prevents multiple instances of "." in displayValue', async () => {
    const numberKeys = wrapper.getAllByRole("number-key");
    await userEvent.click(numberKeys[9]); // '.'
    await userEvent.click(numberKeys[9]);
    const displayComponent = wrapper.getByTestId("display");
    const displayValue = displayComponent.querySelector(".display-value");
    expect(displayValue?.textContent).toBe(".");
  });

  it('will set displayValue to "0" if displayValue is equal to an empty string', async () => {
    const numberKeys = wrapper.getAllByRole("number-key");
    await userEvent.click(numberKeys[11]); // 'CE'
    const displayComponent = wrapper.getByTestId("display");
    const displayValue = displayComponent.querySelector(".display-value");
    expect(displayValue?.textContent).toBe("0");
  });

  describe("setOperator", () => {
    it('updates the value of displayValue to "0"', async () => {
      const operatorKeys = wrapper.getAllByRole("operator-key");
      await userEvent.click(operatorKeys[3]); // '+'
      const displayComponent = wrapper.getByTestId("display");
      const displayValue = displayComponent.querySelector(".display-value");
      expect(displayValue?.textContent).toBe("0");
    });
  });

  describe("callOperator", () => {
    it('updates displayValue to the sum of storedValue and displayValue', async () => {
      const numberKeys = wrapper.getAllByRole("number-key");
      const operatorKeys = wrapper.getAllByRole("operator-key");
      const submitKey = wrapper.getByRole("submit-key");

      await userEvent.click(numberKeys[6]); // '3'
      await userEvent.click(operatorKeys[3]); // '+'
      await userEvent.click(numberKeys[7]); // '2'
      await userEvent.click(submitKey); // '='

      const displayComponent = wrapper.getByTestId("display");
      const displayValue = displayComponent.querySelector(".display-value");
      expect(displayValue?.textContent).toBe("5");
    });

    it('updates displayValue to the difference of storedValue and displayValue', async () => {
      const numberKeys = wrapper.getAllByRole("number-key");
      const operatorKeys = wrapper.getAllByRole("operator-key");
      const submitKey = wrapper.getByRole("submit-key");

      await userEvent.click(numberKeys[6]); // '3'
      await userEvent.click(operatorKeys[2]); // '-'
      await userEvent.click(numberKeys[7]); // '2'
      await userEvent.click(submitKey); // '='

      const displayComponent = wrapper.getByTestId("display");
      const displayValue = displayComponent.querySelector(".display-value");
      expect(displayValue?.textContent).toBe("1");
    });

    it('updates displayValue to the product of storedValue and displayValue', async () => {
      const numberKeys = wrapper.getAllByRole("number-key");
      const operatorKeys = wrapper.getAllByRole("operator-key");
      const submitKey = wrapper.getByRole("submit-key");

      await userEvent.click(numberKeys[6]); // '3'
      await userEvent.click(operatorKeys[1]); // 'x'
      await userEvent.click(numberKeys[7]); // '2'
      await userEvent.click(submitKey); // '='

      const displayComponent = wrapper.getByTestId("display");
      const displayValue = displayComponent.querySelector(".display-value");
      expect(displayValue?.textContent).toBe("6");
    });

    it('updates displayValue to the quotient of storedValue and displayValue', async () => {
      const numberKeys = wrapper.getAllByRole("number-key");
      const operatorKeys = wrapper.getAllByRole("operator-key");
      const submitKey = wrapper.getByRole("submit-key");

      await userEvent.click(numberKeys[6]); // '3'
      await userEvent.click(operatorKeys[0]); // '/'
      await userEvent.click(numberKeys[7]); // '2'
      await userEvent.click(submitKey); // '='

      const displayComponent = wrapper.getByTestId("display");
      const displayValue = displayComponent.querySelector(".display-value");
      expect(displayValue?.textContent).toBe("1.5");
    });

    it('updates displayValue to "0" if operation results in "Infinity"', async () => {
      const numberKeys = wrapper.getAllByRole("number-key");
      const operatorKeys = wrapper.getAllByRole("operator-key");
      const submitKey = wrapper.getByRole("submit-key");

      await userEvent.click(numberKeys[6]); // '3'
      await userEvent.click(operatorKeys[0]); // '/'
      await userEvent.click(numberKeys[10]); // '0'
      await userEvent.click(submitKey); // '='

      const displayComponent = wrapper.getByTestId("display");
      const displayValue = displayComponent.querySelector(".display-value");
      expect(displayValue?.textContent).toBe("0");
    });
  });

});
