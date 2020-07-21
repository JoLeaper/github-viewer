import React, { Component } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import UserInfo from '../components/UserInfo/UserInfo';
import UserRepos from '../components/UserRepos/UserRepos';

export default class MainContainer extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <SearchBar />
        <UserInfo />
        <UserRepos />
      </div>
    );
  }
}
