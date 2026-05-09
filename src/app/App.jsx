import { Component } from "react";

import Header from "../header/Header";
import Menu from "../menu/Menu";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import "./App.scss";

class App extends Component {
  state = {
    isOpen: false,
    selectedChar: null,
  };

  openMenu = () => {
    this.setState({ isOpen: true });
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  onSelectedChar = (id) => {
    this.setState({ selectedChar: id });
  };

  render() {
    const { isOpen, selectedChar } = this.state;

    return (
      <>
        <Header openMenu={this.openMenu} />
        {isOpen ? <Menu closeMenu={this.closeMenu} /> : null}

        <div className="app">
          <RandomChar />
          <div className="app__wrapper">
            <CharInfo charId={selectedChar} />
            <CharList onSelectedChar={this.onSelectedChar} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
