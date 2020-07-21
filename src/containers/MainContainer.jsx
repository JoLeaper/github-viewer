import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar/SearchBar';

export default class MainContainer extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
