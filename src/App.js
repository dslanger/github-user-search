import React, { useState, useEffect } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Search from './components/Search/Search'
import User from './components/User/User'



function App() {
  const [searchTerm, setSearchTerm] = useState('octocat');
  const [user, setUser] = useState('');

  const handleSearch = () => {
    const searchField = document.getElementById('search');
    setSearchTerm(searchField.value);
  };

  

  useEffect(() => {
    fetch(`https://api.github.com/users/${searchTerm}`)
      .then(res => res.json())
      .then(
        (result) => {
          setUser(result);
        })
  }, [searchTerm])

  
  
  return (
    <div className="App">
      <Container>
        <Search searchTerm={searchTerm} handleSearch={handleSearch}/>
        <User user={user} />
      </Container>
    </div>
  );
}

export default App;
