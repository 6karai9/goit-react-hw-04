import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Search.module.css'


const SearchBar = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (searchTerm.trim() === '') {
        return;
      }
      onSubmit(searchTerm);
      setSearchTerm('');
    };
  
    return (
      <header>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.searchInput}
            type="text"
            id="search" // Додаємо id
            name="search" // Додаємо name
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>
    );
  };
  
  SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  
  export default SearchBar;