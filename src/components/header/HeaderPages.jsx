import { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import "./headerPages.scss";

class HeaderPages extends Component {
  render() {
    return (
      <div className="headerpages">
        <NavLink
          end
          style={({ isActive }) => ({
            color: isActive ? "#de9911" : "#fff",
          })}
          to="/"
          className="headerpages__link"
        >
          Персонажі
        </NavLink>
        <div className="headerpages__divider">/</div>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#de9911" : "#fff",
          })}
          to="/books"
          className="headerpages__link"
        >
          Книжки
        </NavLink>
      </div>
    );
  }
}

export default HeaderPages;
