import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react'
import App from './App';

describe('App', () => {

  let wrapper: RenderResult;

  beforeEach(() => wrapper = render(<App/>));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render an App', () => {
    const divs = screen.getByTestId('app');
    expect(divs).toBeTruthy();
  });

  it('should render the Calculator Component', () => {
    const calculator = screen.getByTestId("calculator");
    expect(calculator).toBeTruthy();
  });
});
