import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react'

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

});
