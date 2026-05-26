import { useState, useEffect, useRef } from "react";

import useHarryPotter from "../services/HarryPotter";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import logo from "../assets/img/logo-for-cards.png";

import "./charList.scss";

const CharList = ({ onSelectedChar }) => {
  const [chars, setChars] = useState([]);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [charEnded, setCharEnded] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const offsetRef = useRef(0);

  const { loading, error, getCharacters } = useHarryPotter();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemsLoading(false) : setNewItemsLoading(true);

    getCharacters(offset).then((newChars) => onCharsLoaded(newChars, offset));
  };

  const onCharsLoaded = (newChars, offset) => {
    let ended = false;

    if (newChars.length < 9) {
      ended = true;
    }

    setChars((prevChars) =>
      offset === 0 ? newChars : [...prevChars, ...newChars],
    );
    setNewItemsLoading(false);
    setCharEnded(ended);
  };

  const createCards = (chars) => {
    const elements = chars.map((item) => {
      const activeClass =
        selectedCard === item.id
          ? "charlist__card charlist__card-active"
          : "charlist__card";

      return (
        <div
          className={activeClass}
          key={item.id}
          onClick={() => {
            onSelectedChar(item.id);
            setSelectedCard(item.id);
          }}
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

  const cards = createCards(chars);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemsLoading && !error ? <Spinner /> : null;

  return (
    <div className="charlist">
      <div className="charlist__cards">
        {errorMessage}
        {spinner}
        {cards}
      </div>
      <button
        className="charlist__btn"
        disabled={newItemsLoading}
        onClick={() => {
          offsetRef.current += 9;
          onRequest(offsetRef.current);
        }}
        style={{ display: charEnded ? "none" : "block" }}
      >
        Догрузити
      </button>
    </div>
  );
};

export default CharList;
