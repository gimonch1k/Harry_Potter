import { Component } from "react";

import harry from "../assets/img/harry_potter.png";
import logo from "../assets/img/HP-logo.png";

import "./randomChar.scss";

class RandomChar extends Component {
  render() {
    return (
      <div className="randomchar">
        <div className="randomchar__persone">
          <div className="randomchar__persone-wrapper">
            <img
              src={harry}
              alt="random Char"
              className="randomchar__persone-img"
            />
            <div className="randomchar__persone-descr">
              <div className="randomchar__persone-name">Гаррі Поттер</div>
              <div className="randomchar__persone-text">
                Birthday - Jul 31, 1980
              </div>
            </div>
          </div>
        </div>
        <div className="randomchar__description">
          <div className="randomchar__description-title">
            Рандомний персонаж!
          </div>
          <div className="randomchar__description-try">Можеш змінити 👇</div>
          <button className="randomchar__description-btn">Спробувати!</button>
          <img src={logo} alt="logo" className="randomchar__description-logo" />
        </div>
      </div>
    );
  }
}

export default RandomChar;
