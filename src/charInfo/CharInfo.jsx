import { Component } from "react";

import HarryPotter from "../services/HarryPotter";
import Spinner from "../spinner/Spinner";
import Skeleton from "../skeleton/Skeleton";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./charInfo.scss";

class CharInfo extends Component {
  state = {
    char: null,
    loading: false,
    error: false,
  };

  harryPotter = new HarryPotter();

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateChar = () => {
    const { charId } = this.props;

    if (!charId) {
      return;
    }

    this.setState({ loading: true });

    this.harryPotter
      .getCharacter(charId - 1)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  render() {
    const { char, loading, error } = this.state;

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
}

class View extends Component {
  render() {
    const { id, name, img, children } = this.props.char;

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
}

export default CharInfo;
