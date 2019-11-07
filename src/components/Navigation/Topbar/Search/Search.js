import React from 'react';
import PropTypes from 'prop-types';
import { StyledSearch } from './Search.styled';

const Search = ({ value, onChange, onButtonClick }) => {
  return (
    <StyledSearch>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={onButtonClick}>Search</button>
    </StyledSearch>
  )
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Search;
