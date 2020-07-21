import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from './UserInfo';
const userInfoObj =  {
  username: 'JoLeaper',
  followers: 1,
  following: 1,
  githubURL: 'github.com/user/JoLeaper'
};

describe('UserInfo component', () => {
  it('renders UserInfo', () => {
    const wrapper = shallow(<UserInfo userInfo={userInfoObj}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
  
