import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ handleChange, handleSubmit }) => (
  <>
    <form onSubmit={ handleSubmit }>
      <input name='userName' onChange={ handleChange } />
      <button>Submit</button>
    </form>
  </>
);

SearchBar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default SearchBar;
