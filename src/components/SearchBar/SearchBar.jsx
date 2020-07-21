import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ handleChange }) => (
  <>
    <input name='userName' onChange={ handleChange } />
  </>
);

SearchBar.propTypes = {
  handleChange: PropTypes.func
};

export default SearchBar;
