import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Display from './Display';

describe('Display', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => wrapper = shallow(<Display />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
