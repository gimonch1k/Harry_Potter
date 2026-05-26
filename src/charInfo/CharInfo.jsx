import { useEffect, useState } from "react";

import useHarryPotter from "../services/HarryPotter";
import Spinner from "../spinner/Spinner";
import Skeleton from "../skeleton/Skeleton";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./charInfo.scss";

function CharInfo(props) {
  const [char, setChar] = useState(null);

  const { loading, error, getCharacter } = useHarryPotter();

  useEffect(() => {
    updateChar();
  }, [props.charId]);

  const updateChar = () => {
    const { charId } = props;

    if (!charId) {
      return;
    }

    getCharacter(charId - 1).then(onCharLoaded);
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const skeleton = loading || error || char ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(error || loading || !char) ? <View char={char} /> : null;

  return (
    <div className="charinfo">
      {errorMessage}
      {skeleton}
      {spinner}
      {content}
    </div>
  );
}

function View({ char }) {
  const { id, name, img, children } = char;

  const nothing = children.length > 0 ? null : <li>He має дітей</li>;
  const list = nothing
    ? null
    : children.map((item, i) => <li key={i}>{item}</li>);

  return (
    <div className="charinfo__background">
      <img src={img} alt="photo of persone" className="charinfo__img" />
      <div className="charinfo__wrapper">
        <div className="charinfo__name">{name}</div>
        <div className="charinfo__title">Діти:</div>
        <ul className="charinfo__children">
          {nothing}
          {list}
        </ul>
      </div>
    </div>
  );
}

export default CharInfo;
