import { Component } from "react";
import { Link } from "react-router-dom";

import Burger from "../burger/Burger";
import HeaderPages from "./HeaderPages";
import Menu from "../menu/Menu";

import "./header.scss";

class Header extends Component {
  render() {
    const { openMenu } = this.props;

    return (
      <div className="header">
        <Link to="/" className="header__title">
          Гаррі Поттер
        </Link>
        <HeaderPages />
        <Burger openMenu={openMenu} />
      </div>
    );
  }
}

export default Header;
