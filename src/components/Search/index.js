import React, { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import SearchIcon from '@material-ui/icons/Search';
import './style.css'

const Search = ({ value, onChange }) => {
  const [text, setText] = useState(value);
  const debouncedSearch = useDebounce(onChange, 1700);

  function handleChange(event) {
    setText(event.target.value);
    debouncedSearch(event.target.value);
  }

  return (
    <form className="input-search">
        <SearchIcon style={{position: 'absolute', marginLeft: -130, alignSelf: 'center', color: '#FFF'}} />
        <input 
          type="search"
          placeholder='Search'
          value={text}
          onChange={handleChange}
        />
    </form>
  );
};

export default Search;