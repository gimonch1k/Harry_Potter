import { Component } from "react";

import Header from "../header/Header";
import RandomChar from "../randomChar/RandomChar";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="app">
          <RandomChar />
        </div>
      </>
    );
  }
}

export default App;
