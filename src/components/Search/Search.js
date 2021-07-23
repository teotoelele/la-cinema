import React, { Component } from "react";
import { Link } from "react-router-dom";
import Autosuggest from "react-autosuggest";
import { API_KEY, URL_SEARCH, URL_COVER } from "../../const";
import "../../components/Search/search.css";

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <Link to={"/movie/" + suggestion.id} className="search-item">
      {/* <div className="search-item__image-container">
        <img className="img-fluid" key={suggestion.id} src={URL_COVER+suggestion.poster_path} alt="" />
      </div> */}
      <div className="search-item__title-container">
        <span>{suggestion.title}</span>
      </div>
    </Link>
  );
}

class Search extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue ? newValue : "",
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
      fetch(`${URL_SEARCH}${API_KEY}&query=${value}`)
        .then((response) => response.json())
        .then((data) => this.setState({ suggestions: data.results }));
    } else {
      this.setState({
        suggestions: [],
      });
    }
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search Movies",
      value,
      onChange: this.onChange,
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default Search;
