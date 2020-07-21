import React, { Component } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import UserInfo from '../components/UserInfo/UserInfo';
import UserRepos from '../components/UserRepos/UserRepos';
import { getUserInfo } from '../services/getUserInfo';
import { getUserRepos } from '../services/getUserRepos';

export default class MainContainer extends Component {
  state = {
    userName: '',
    userInfo: {}
  }

  handleChange = (e) => {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    getUserInfo(this.state.userName)
      .then(res => this.setState({ userInfo: res }));
  }
  componentDidMount() {
    getUserRepos('JoLeaper')
      .then(res => console.log(res));
  }

  render() {
    const { userInfo } = this.state;
    return (
      <div>
        <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <UserInfo userInfo={userInfo} />
        {/* <UserRepos userName={userName}/> */}
      </div>
    );
  }
}
