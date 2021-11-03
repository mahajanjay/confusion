import React, { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-primary">
          <div className="container">
            <a className="navbar-brand bg-primary" href="#">
              Ristorante Con Fusion
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
