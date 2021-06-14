import React from "react";
import Record from "./Record";
import Speech from "./Speech";

const App = () => {
  return (
    <div>
      <h1>Speech recognition</h1>
      <Speech />
      <Record />
    </div>
  );
};

export default App;
