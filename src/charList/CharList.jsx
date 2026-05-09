import { Component } from "react";

import HarryPotter from "../services/HarryPotter";
import Spinner from "../spinner/Spinner";

import logo from "../assets/img/logo-for-cards.png";

import "./charList.scss";

class CharList extends Component {
  state = {
    chars: [],
    loading: false,
  };

  harryPotter = new HarryPotter();

  componentDidMount() {
    this.updateChars();
  }

  updateChars = () => {
    this.setState({ loading: true });
    this.harryPotter.getCharacters().then(this.onCharsLoaded).catch();
  };

  onCharsLoaded = (chars) => {
    this.setState({ chars, loading: false });
  };

  createCards = (chars) => {
    const elements = chars.map((item) => {
      return (
        <div
          className="charlist__card"
          key={item.id}
          onClick={() => this.props.onSelectedChar(item.id + 1)}
        >
          <img
            src={item.img}
            alt={item.nickname}
            className="charlist__card-img"
          />
          <div className="charlist__card-name">{item.nickname}</div>
          <img src={logo} alt="logo" className="charlist__card-logo" />
        </div>
      );
    });

    return elements;
  };

  render() {
    const { chars, loading } = this.state;

    const cards = this.createCards(chars);

    const spinner = loading ? <Spinner /> : null;
    const content = loading ? null : cards;

    return (
      <div className="charlist">
        <div className="charlist__cards">
          {spinner}
          {content}
        </div>
        <button className="charlist__btn">Догрузити</button>
      </div>
    );
  }
}

export default CharList;
