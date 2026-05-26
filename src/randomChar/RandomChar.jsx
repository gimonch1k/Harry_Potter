import { useEffect, useState } from "react";

import useHarryPotter from "../services/HarryPotter";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import logo from "../assets/img/HP-logo.png";

import "./randomChar.scss";

const RandomChar = () => {
  const { loading, error, getCharacter } = useHarryPotter();

  const [char, setChar] = useState({});

  useEffect(() => {
    updateChar();
  }, []);

  const updateChar = () => {
    const random = Math.floor(Math.random() * 25);
    console.log(random);

    getCharacter(random).then(onCharLoaded);
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const onChangeChar = () => {
    updateChar();
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !error ? <Spinner /> : null;
  const content = loading || error ? null : <View char={char} />;

  return (
    <div className="randomchar">
      <div className="randomchar__persone">
        {errorMessage}
        {content}
        {spinner}
      </div>
      <div className="randomchar__description">
        <div className="randomchar__description-title">Рандомний персонаж!</div>
        <div className="randomchar__description-try">Можеш змінити 👇</div>
        <button className="randomchar__description-btn" onClick={onChangeChar}>
          Спробувати!
        </button>
        <img src={logo} alt="logo" className="randomchar__description-logo" />
      </div>
    </div>
  );
};

const View = (props) => {
  return (
    <div className="randomchar__persone-wrapper">
      <img
        src={props.char.img}
        alt="random Char"
        className="randomchar__persone-img"
      />
      <div className="randomchar__persone-descr">
        <div className="randomchar__persone-name">{props.char.name}</div>
        <div className="randomchar__persone-text">
          Birthday - {props.char.birth}
        </div>
      </div>
    </div>
  );
};

export default RandomChar;
