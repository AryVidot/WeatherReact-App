import React from "react";

const WeatherSearch = (props) => {
  // const [query, setQuery] = useState("")

  return (
    <div>
      <div className="search-box">
        <form onSubmit={props.api_call} method="post">
          <input
            name="location"
            type="text"
            className="search-bar"
            autoComplete="off"
            // required
            placeholder="Search City..."
            // onChange={(e) => setQuery(e.target.value)}
            // value={query}
            //   onKeyPress={search}
          />
          <button type="submit">GO</button>
        </form>
      </div>
    </div>
  );
};

export default WeatherSearch;
