import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../header/Header";
import Menu from "../menu/Menu";
import Spinner from "../spinner/Spinner";

import "./App.scss";

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const BooksPage = lazy(() => import("../pages/BooksPage"));
const SingleBookPage = lazy(() => import("../pages/SingleBookPage"));

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Router>
      <>
        <Header openMenu={openMenu} />
        {isOpen ? <Menu closeMenu={closeMenu} /> : null}

        <div className="app">
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/books/:id" element={<SingleBookPage />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </div>
      </>
    </Router>
  );
};

export default App;
