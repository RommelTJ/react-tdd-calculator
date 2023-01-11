import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Calculator from './Calculator';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

describe('Calculator', () => {
  let wrapper: ShallowWrapper<Calculator>;

  beforeEach(() => wrapper = shallow(<Calculator />));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Display and Keypad Components', () => {
    const calculatorInstance = wrapper.instance() as Calculator;
    expect(wrapper.containsAllMatchingElements([
      <Display displayValue={calculatorInstance.state.displayValue} />,
      <Keypad
        callOperator={calculatorInstance.callOperator}
        numbers={calculatorInstance.state.numbers}
        operators={calculatorInstance.state.operators}
        setOperator={calculatorInstance.setOperator}
        updateDisplay={calculatorInstance.updateDisplay}
      />
    ])).toEqual(true);
  });

});
