import React from "react";
import Nav from "./comp/Nav/Nav";
import Rout from "./comp/Rout/Rout";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Rout />
      </BrowserRouter>
    </>
  );
};

export default App;
