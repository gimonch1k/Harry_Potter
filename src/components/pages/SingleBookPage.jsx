import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import useHarryPotter from "../../services/HarryPotter";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./singleBookPage.scss";

const SingleBookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const { loading, error, getBook } = useHarryPotter();

  useEffect(() => {
    setNotFound(false);

    getBook(id)
      .then((data) => {
        if (!data) {
          setNotFound(true);
        } else {
          setBook(data);
        }
      })
      .catch(() => setNotFound(true));
  }, [id]);

  const errorMessage = error || notFound ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !loading && !error && book ? <View book={book} /> : null;

  return (
    <>
      {content}
      {spinner}
      {errorMessage}
    </>
  );
};

const View = ({ book }) => {
  const { original, description, cover, pages, release } = book;

  return (
    <div className="singlebook">
      <div className="singlebook__wrapper">
        <img src={cover} alt={original} className="singlebook__img" />
        <div className="singlebook__info">
          <div className="singlebook__title">{original}</div>
          <div className="singlebook__release">Реліз: {release}</div>
          <div className="singlebook__descr">{description}</div>
          <div className="singlebook__pages">{pages} pages</div>
          <div className="singlebook__price">Ціна: 20$</div>
          <Link to="/books" className="singlebook__link">
            Повернутись
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBookPage;
