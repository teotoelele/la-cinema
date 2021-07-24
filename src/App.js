import React, { Component } from "react";
import LatestMovies from "./containers/LatestMovies.js";
import Movie from "./containers/Movie.js";
import Navigation from "./components/Navigation/Navigation.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer.js";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navigation></Navigation>
            <Route exact path="/" component={LatestMovies} />
            <Route path="/movie/:id" component={Movie} />
            <Footer></Footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
