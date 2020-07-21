import React, { Component } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import UserInfo from '../components/UserInfo/UserInfo';
import UserRepos from '../components/UserRepos/UserRepos';
import { getUserInfo } from '../services/getUserInfo';

export default class MainContainer extends Component {
  state = {
    userName: ''
  }
  // componentDidMount() {
  //   getUserInfo('JoLeaper')
  //     .then(res => console.log(res));
  // }

  render() {
    const { userName } = this.state;
    return (
      <div>
        <SearchBar />
        <UserInfo userName={userName} />
        <UserRepos userName={userName}/>
      </div>
    );
  }
}
