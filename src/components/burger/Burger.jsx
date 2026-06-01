import { Component } from "react";

import "./burger.scss";

class Burger extends Component {
  render() {
    const { openMenu } = this.props;

    return (
      <div className="burger" onClick={openMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}

export default Burger;
