import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Search.module.css'
import toast from 'react-hot-toast';


const SearchBar = ({ onSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (searchTerm.trim() === '') {
        toast.error('Please enter a search term');
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
            id="search"
            name="search"
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