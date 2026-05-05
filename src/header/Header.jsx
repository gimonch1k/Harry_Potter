import { Component } from "react";

import Burger from "../burger/Burger";
import HeaderPages from "./HeaderPages";
import Menu from "../menu/Menu";

import "./header.scss";

class Header extends Component {
  render() {
    const { openMenu } = this.props;

    return (
      <div className="header">
        <div className="header__title">Гаррі Поттер</div>
        <HeaderPages />
        <Burger openMenu={openMenu} />
      </div>
    );
  }
}

export default Header;
