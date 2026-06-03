import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useHarryPotter from "../../services/HarryPotter";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import book from "../../assets/img/book.png";

import "./bookList.scss";

const BookList = () => {
  const { loading, error, getBooks } = useHarryPotter();

  const [books, setBooks] = useState([]);
  const [offset, setOffset] = useState(0);
  const [booksIsLoading, setBooksIsLoading] = useState(false);
  const [booksIsEnded, setBooksIsEnded] = useState(false);

  useEffect(() => {
    onRequest(offset, true);
  }, [offset]);

  const onRequest = (offset, initial) => {
    initial ? setBooksIsLoading(false) : setBooksIsLoading(true);

    getBooks(offset).then(onBooksLoaded);
  };

  const onBooksLoaded = (newBooks) => {
    const end = newBooks.length < 6;

    setBooks((prevBooks) =>
      offset === 0 ? newBooks : [...prevBooks, ...newBooks],
    );

    setBooksIsLoading(false);
    setBooksIsEnded(end);
    console.log("render");
  };

  const content = books.map((item) => (
    <li key={item.id}>
      <Link className="booklist__item" to={`/books/${item.id}`}>
        <img src={item.cover} alt={item.title} className="booklist__img" />
        <div className="booklist__title">{item.title}</div>
        <div className="booklist__pages">{item.pages} pages</div>
      </Link>
    </li>
  ));

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !error && !booksIsLoading ? <Spinner /> : null;

  return (
    <>
      <ul className="booklist">
        {content}
        {errorMessage}
        {spinner}
      </ul>
      <button
        className="booklist__btn"
        style={{ display: booksIsEnded ? "none" : "block" }}
        disabled={booksIsLoading}
        onClick={() => {
          setOffset((offset) => offset + 6);
        }}
      >
        Догрузити
      </button>
    </>
  );
};

export default BookList;
