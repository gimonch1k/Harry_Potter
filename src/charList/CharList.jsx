import { Component } from "react";

import HarryPotter from "../services/HarryPotter";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import logo from "../assets/img/logo-for-cards.png";

import "./charList.scss";

class CharList extends Component {
  state = {
    chars: [],
    loading: true,
    error: false,
    newItemsLoading: false,
    offset: 0,
    charEnded: false,
  };

  harryPotter = new HarryPotter();

  componentDidMount() {
    this.onRequest(this.state.offset);
  }

  onRequest = (offset) => {
    this.onCharsLoading();
    this.harryPotter
      .getCharacters(offset)
      .then((newChars) => this.onCharsLoaded(newChars, offset))
      .catch(this.onError);
  };

  onCharsLoading = () => {
    this.setState({ newItemsLoading: true });
  };

  onCharsLoaded = (newChars, offset) => {
    let ended = false;

    if (newChars.length < 9) {
      ended = true;
    }

    this.setState(({ chars }) => ({
      chars: offset === 0 ? newChars : [...chars, ...newChars],

      loading: false,
      error: false,
      newItemsLoading: false,
      offset: offset + 9,
      charEnded: ended,
    }));
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  createCards = (chars) => {
    const elements = chars.map((item) => {
      return (
        <div
          className="charlist__card"
          key={item.id}
          onClick={() => this.props.onSelectedChar(item.id)}
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
    const { chars, loading, error, newItemsLoading, offset, charEnded } =
      this.state;

    const cards = this.createCards(chars);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading && !error ? <Spinner /> : null;
    const content = loading || error ? null : cards;

    return (
      <div className="charlist">
        <div className="charlist__cards">
          {errorMessage}
          {spinner}
          {content}
        </div>
        <button
          className="charlist__btn"
          disabled={newItemsLoading}
          onClick={() => this.onRequest(offset)}
          style={{ display: charEnded ? "none" : "block" }}
        >
          Догрузити
        </button>
      </div>
    );
  }
}

export default CharList;
