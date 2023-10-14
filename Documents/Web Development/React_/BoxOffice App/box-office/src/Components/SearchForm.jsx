import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [searchStr, setsearchStr] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const searchStrHandler = event => {
    setsearchStr(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();

    const options = {
      q: searchStr,
      searchOption,
    };

    onSearch(options);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={searchStrHandler} value={searchStr} />

      <br></br>
      <label>
        <input
          type="radio"
          name="search-option"
          value="shows"
          checked={searchOption === 'shows'}
          onChange={onRadioChange}
        />
        Shows
      </label>
      <label>
        <input
          type="radio"
          name="search-option"
          value="actor"
          checked={searchOption === 'actor'}
          onChange={onRadioChange}
        />
        Actor
      </label>
      <br></br>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
