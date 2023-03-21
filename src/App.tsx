import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <main>
            <Routes>
              <Route path={"/"} element={<Main />} />
              <Route path={"/about"} element={<About />} />
              <Route path={"*"} element={<NotFound />} />
            </Routes>
          </main>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
