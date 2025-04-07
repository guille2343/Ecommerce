import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Shop from "../../Shop/Shop";

const Rout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Rout;
