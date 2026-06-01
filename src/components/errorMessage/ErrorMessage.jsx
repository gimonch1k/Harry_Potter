import { Component } from "react";
import error from "./error.gif";

import "./errorMessage.scss";

class ErrorMessage extends Component {
  render() {
    return <img className="errormessage" src={error} alt="error message" />;
  }
}

export default ErrorMessage;
