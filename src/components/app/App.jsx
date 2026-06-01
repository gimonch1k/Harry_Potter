import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../header/Header";
import Menu from "../menu/Menu";
import { MainPage, BooksPage } from "../pages";

import "./App.scss";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Router>
      <>
        <Header openMenu={openMenu} />
        {isOpen ? <Menu closeMenu={closeMenu} /> : null}

        <div className="app">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/books" element={<BooksPage />} />
          </Routes>
        </div>
      </>
    </Router>
  );
};

export default App;
