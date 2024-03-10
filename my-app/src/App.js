import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./page/Home";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <div id="bg">
        <div id="container">
          <div id="top"></div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
