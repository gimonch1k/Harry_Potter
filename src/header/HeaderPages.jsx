import { Component } from "react";

import "./headerPages.scss";

class HeaderPages extends Component {
  render() {
    return (
      <div className="headerpages">
        <a href="#" className="headerpages__link">
          Персонажі
        </a>
        <div className="headerpages__divider">/</div>
        <a href="#" className="headerpages__link">
          Книжки
        </a>
      </div>
    );
  }
}

export default HeaderPages;
