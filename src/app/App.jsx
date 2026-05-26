import { useState } from "react";

import Header from "../header/Header";
import Menu from "../menu/Menu";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import "./App.scss";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChar, setSelectedChar] = useState(null);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const onSelectedChar = (id) => {
    setSelectedChar(id);
  };

  return (
    <>
      <Header openMenu={openMenu} />
      {isOpen ? <Menu closeMenu={closeMenu} /> : null}

      <div className="app">
        <ErrorBoundary>
          <RandomChar />
        </ErrorBoundary>
        <div className="app__wrapper">
          <ErrorBoundary>
            <CharInfo charId={selectedChar} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharList onSelectedChar={onSelectedChar} />
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
};

export default App;
