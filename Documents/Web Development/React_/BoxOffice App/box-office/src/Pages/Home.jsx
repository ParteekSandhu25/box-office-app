import React, { useState } from 'react';
import { showSearch } from '../api/tvmaze';

function Home() {
  const [searchStr, setsearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const searchStrHandler = event => {
    setsearchStr(event.target.value);
  };

  const onSearch = async event => {
    event.preventDefault();

    try {
      setApiDataError(null);
      const result = await showSearch(searchStr);
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occurred: {apiDataError.message}</div>;
    }

    if (apiData) {
      return apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }

    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" onChange={searchStrHandler} value={searchStr} />
        <button type="submit">Search</button>
      </form>

      <div>{renderApiData()}</div>
    </div>
  );
}

export default Home;
