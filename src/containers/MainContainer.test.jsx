import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from './MainContainer';

describe('MainContainer component', () => {
  it('renders MainContainer', () => {
    const wrapper = shallow(<MainContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
