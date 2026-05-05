import { Component } from "react";

import HarryPotter from "../services/HarryPotter";
import Spinner from "../spinner/Spinner";

import logo from "../assets/img/HP-logo.png";

import "./randomChar.scss";

class RandomChar extends Component {
  state = {
    char: {},
    loading: false,
  };

  harryPotter = new HarryPotter();

  componentDidMount() {
    this.updateChar();
  }

  updateChar = () => {
    const random = Math.floor(Math.random() * 25);
    console.log(random);
    this.setState({ loading: true });
    this.harryPotter.getCharacter(random).then(this.onCharLoaded).catch();
  };

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };

  onChangeChar = () => {
    this.updateChar();
  };

  render() {
    const { char, loading } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = loading ? null : <View char={char} />;

    return (
      <div className="randomchar">
        <div className="randomchar__persone">
          {content}
          {spinner}
        </div>
        <div className="randomchar__description">
          <div className="randomchar__description-title">
            Рандомний персонаж!
          </div>
          <div className="randomchar__description-try">Можеш змінити 👇</div>
          <button
            className="randomchar__description-btn"
            onClick={this.onChangeChar}
          >
            Спробувати!
          </button>
          <img src={logo} alt="logo" className="randomchar__description-logo" />
        </div>
      </div>
    );
  }
}

class View extends Component {
  render() {
    const { char } = this.props;

    return (
      <div className="randomchar__persone-wrapper">
        <img
          src={char.img}
          alt="random Char"
          className="randomchar__persone-img"
        />
        <div className="randomchar__persone-descr">
          <div className="randomchar__persone-name">{char.name}</div>
          <div className="randomchar__persone-text">
            Birthday - {char.birth}
          </div>
        </div>
      </div>
    );
  }
}

export default RandomChar;
