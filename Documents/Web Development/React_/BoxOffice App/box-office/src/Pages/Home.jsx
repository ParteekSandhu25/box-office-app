import React, { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';

function Home() {
  const [searchStr, setsearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const searchStrHandler = event => {
    setsearchStr(event.target.value);
  };

  const onSearch = async event => {
    event.preventDefault();

    try {
      setApiDataError(null);

      if (searchOption === 'shows') {
        const result = await searchForShows(searchStr);
        setApiData(result);
      } else {
        const result = await searchForPeople(searchStr);
        setApiData(result);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occurred: {apiDataError.message}</div>;
    }

    if (apiData) {
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }

    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
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

      <div>{renderApiData()}</div>
    </div>
  );
}

export default Home;
