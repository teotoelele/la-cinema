import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header></Header>
        </div>
      </div>
    );
  }
}

export default App;
