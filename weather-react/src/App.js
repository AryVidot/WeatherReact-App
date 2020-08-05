import React from "react";

import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import Weather_Search from "./components/Weather_Search";
import Location from "./components/Location";
import Weather from "./components/Weather";

const App = () => {
  return (
    <Wrapper>
      <Main />
      <Location />
      <Weather />
    </Wrapper>
  );
};

export default App;
