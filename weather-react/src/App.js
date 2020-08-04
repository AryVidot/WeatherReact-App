import React from "react";

import "./index.css";

const api = {
  key: "b3eeac9873199e3b6c23996e0eb4ab5e",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            autoComplete="on"
            required
            placeholder="City..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
