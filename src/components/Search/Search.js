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
  console.log('isEmptySearch:', props.isEmptySearch);
  return (
    <div className="bg-white mb-12 flex items-center relative">
      <FontAwesomeIcon icon={faSearch} />
      <input id="search" className="w-full rounded p-2 border-white" name="searchTerm" type="text" onKeyDown={handleKeyDown} onBlur={props.handleSearch} placeholder="Enter a GitHub username" />
      {props.isEmptySearch ? <span className="absolute right-24 inline-block w-24 border-2 mr-6 bg-blue-500 text-white">No Results</span> : ''}
      <button className="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4" onClick={props.handleSearch}>
              Search
      </button>
    </div>
  ); 
}
Search.propTypes = {};
Search.defaultProps = {};

export default Search;
