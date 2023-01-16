import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";

import Key from './Key';

describe('Key', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Key keyAction={jest.fn()} keyType={''} keyValue={''} />);
  });

  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

});
