import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import MainWithPersistence from "./pages/Main";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path={"/"}
            element={<MainWithPersistence storageKey={"storageValue"} />}
          />
          <Route path={"/about"} element={<About />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
