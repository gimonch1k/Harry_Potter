import { Component } from "react";

import Header from "../header/Header";
import Menu from "../menu/Menu";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import Skeleton from "../skeleton/Skeleton";

import "./App.scss";

class App extends Component {
  state = {
    isOpen: false,
  };

  openMenu = () => {
    this.setState({ isOpen: true });
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <>
        <Header openMenu={this.openMenu} />
        {isOpen ? <Menu closeMenu={this.closeMenu} /> : null}

        <div className="app">
          <RandomChar />
          <div className="app__wrapper">
            <Skeleton />
            <CharList />
          </div>
        </div>
      </>
    );
  }
}

export default App;
