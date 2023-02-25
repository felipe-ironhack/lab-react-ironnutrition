import { Divider, Input } from 'antd';
import { useState, useEffect } from 'react';

function Search({ filterDisplay }) {
  const [query, setQuery] = useState('');

  // useEffect(() => {
  //   filterDisplay(query)
  // },[query])

  return (
    <div style={{ width: '40%', margin: 'auto' }}>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={query}
        type="text"
        onChange={(e) => {
          setQuery(e.target.value);
          filterDisplay(e.target.value)
        }}
      />
    </div>
  );
}

export default Search;
