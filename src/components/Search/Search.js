import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import './Search.css';
const Search = (props) => {
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      props.handleSearch();
    }
  }

  return (
    <div className="bg-white p-4 m-12 flex items-center">
      <FontAwesomeIcon icon={faSearch} />
      <input id="search" className="w-full rounded p-2 border-white" name="searchTerm" type="text" onKeyDown={handleKeyDown} onBlur={props.handleSearch} placeholder="Enter a GitHub username" />
      <button className="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4" onClick={props.handleSearch}>
              Search
      </button>
    </div>
  ); 
}
Search.propTypes = {};
Search.defaultProps = {};

export default Search;
