import React from "react";

const Wrapper = (props) => {
  return (
    <div className="app">
      <main>{props.children}</main>
    </div>
  );
};

export default Wrapper;
