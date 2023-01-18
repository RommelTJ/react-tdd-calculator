import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react'

import Key from './Key';

describe('Key', () => {
  let wrapper: RenderResult;

  beforeEach(() => wrapper = render(<Key keyValue="" keyAction={jest.fn()} keyType="submit-key" />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a Key', () => {
    const keyComponent = screen.getByRole("submit-key");
    expect(keyComponent).toBeTruthy();
  });

  it('should render the value of keyValue', async () => {
    wrapper = render(<Key keyValue="test" keyAction={jest.fn()} keyType="" />)
    const keys = await screen.findAllByText("test");
    expect(keys).toHaveLength(1);
  });

});
