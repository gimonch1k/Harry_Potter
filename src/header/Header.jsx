import { Component } from "react";

import Burger from "../burger/Burger";
import HeaderPages from "./HeaderPages";
import Menu from "../menu/Menu";

import "./header.scss";

class Header extends Component {
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
      <div className="header">
        <div className="header__title">Гаррі Поттер</div>
        <HeaderPages />
        <Burger openMenu={this.openMenu} />
        {isOpen ? <Menu closeMenu={this.closeMenu} /> : null}
      </div>
    );
  }
}

export default Header;
