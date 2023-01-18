import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react'
import Display from './Display';

describe('Display', () => {
  let wrapper: RenderResult;

  beforeEach(() => wrapper = render(<Display />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a div', () => {
    const displayComponent = screen.getByTestId("display");
    expect(displayComponent).toBeTruthy();
  });
});
