import React, { useState } from "react";

function Home() {
  const [searchStr, setsearchStr] = useState("");

  const searchStrHandler = (event) => {
    setsearchStr(event.target.value);
  };

  const onSearch = async (event) => {
    event.preventDefault();

    const res = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchStr}`
    );
    const body = await res.json();

    console.log(body);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" onChange={searchStrHandler} value={searchStr} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Home;
