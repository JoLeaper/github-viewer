import React from 'react';
import { shallow } from 'enzyme';
import UserRepos from './UserRepos';
const testArray = ['link1', 'link2', 'link3'];

describe('UserRepos component', () => {
  it('renders UserRepos', () => {
    const wrapper = shallow(<UserRepos userReposArray={testArray}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
  
