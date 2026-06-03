import { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/Harry-Potter-logo.png";
import close from "../../assets/img/close.png";

import "./menu.scss";

class Menu extends Component {
  render() {
    const { closeMenu } = this.props;

    return (
      <div className="menu" onClick={closeMenu}>
        <div className="menu__content" onClick={(e) => e.stopPropagation()}>
          <img
            src={close}
            alt="close Window"
            className="menu__close"
            onClick={closeMenu}
          />
          <Link to="/" className="menu__link">
            Персонажі
          </Link>
          <Link to="/books" className="menu__link">
            Книжки
          </Link>
          <img src={logo} alt="logo Harry Potter" className="menu__img" />
        </div>
      </div>
    );
  }
}

export default Menu;
