import { Input } from 'antd';
import { useState } from 'react';
import { overrideCenter } from './helpers/style.helper';

const SearchBar = ({searchFoods}) => {
  const [searched, setSearched] = useState('');

  return (
    <div
      style={overrideCenter}
    >
      <div className="input-box">
        <label htmlFor="search"> Search</label>
        <Input
          id="search"
          placeholder="Enter food name here"
          type='search'
          value={searched}
          onChange={(e) => {
            setSearched(e.target.value);
            searchFoods(searched)
        }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
