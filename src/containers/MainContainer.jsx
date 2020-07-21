import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar/SearchBar';
import UserInfo from '../components/UserInfo/UserInfo';
import UserRepos from '../components/UserRepos/UserRepos';

export default class MainContainer extends Component {
  static propTypes = {
    prop: PropTypes
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
