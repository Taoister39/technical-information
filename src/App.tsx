import React from "react";
import "./App.css";

import "antd/dist/reset.css";
import RootRouter from "./router";

const App = () => {
  return (
    <div className="App">
      <RootRouter />
    </div>
  );
};

export default App;
