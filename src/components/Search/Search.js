import React, {useContext} from 'react';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import './Search.css';
const Search = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      props.handleSearch();
    }
  }
  return (
    <div className={`relative mb-12 p-3 rounded-xl flex items-center  ${darkMode ? 'bg-darkGray text-white' : 'bg-white text-gray'}`}>
      <FontAwesomeIcon icon={faSearch} className="text-blue text-xl mr-2"/>
      <input id="search" className={`w-full rounded p-2 border-transparent bg-transparent text-lg focus:outline-none  ${props.isEmptySearch ? 'placeholder-transparent md:placeholder-gray' : ''}`} name="searchTerm" type="text" onKeyDown={handleKeyDown} onBlur={props.handleSearch} placeholder="Enter a GitHub username" />
      {props.isEmptySearch && document.getElementById('search').value !== '' ? <span className="absolute right-36 inline-block text-red">No Results</span> : ''}
      <button className="bg-blue hover:bg-red-300 rounded-md text-white py-2 px-3 lg:py-3 lg:px-5 text-lg" onClick={props.handleSearch}>
              Search
      </button>
    </div>
  ); 
}
Search.propTypes = {};
Search.defaultProps = {};

export default Search;
