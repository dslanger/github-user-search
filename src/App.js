import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './components/ThemeProvider/ThemeProvider';
import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import User from './components/User/User';



function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState('');
  const [isEmptySearch, setIsEmptySearch] = useState(false);

  const handleSearch = () => {
    const searchField = document.getElementById('search');
    setSearchTerm(searchField.value);
  };

  

  useEffect(() => {
    fetch(`https://api.github.com/users/${searchTerm}`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.name) {
            setUser(result);
            setIsEmptySearch(false);
          } else {
            setIsEmptySearch(true);
          }
        })
      .catch(error => {
        throw(error)
      })
  }, [searchTerm])

  
  
  return (
    <div className={`App font-mono px-12 py-24 h-screen ${darkMode ? "bg-lightBlack" : "bg-lightGray"}`}>
      <Container>
        <Header />
        <Search searchTerm={searchTerm} handleSearch={handleSearch} isEmptySearch={isEmptySearch} />
        { isEmptySearch || searchTerm === '' ? '' : <User user={user} /> }
      </Container>
    </div>
  );
}

export default App;
