import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const MainPage = () => {
  const [selectedChar, setSelectedChar] = useState(null);

  const onSelectedChar = (id) => {
    setSelectedChar(id);
  };

  return (
    <>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className="app__wrapper">
        <ErrorBoundary>
          <CharInfo charId={selectedChar} />
        </ErrorBoundary>
        <ErrorBoundary>
          <CharList onSelectedChar={onSelectedChar} />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default MainPage;
