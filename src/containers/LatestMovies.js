import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovieList } from '../actions';
import Slider from "../components/Slider/Slider";
import ListofMovies from '../components/List/ListofMovies';

class LastestMoviesContainer extends Component {
  componentDidMount() {
    this.props.fetchMovieList();
  }

  render() {
    if(this.props.isfetching) {
      return(
        <div className="loader">Loading...</div>
      );
    } else {
      return(
        <div>
        <Slider movies={this.props.movieList.slice(0, 5)}></Slider>
        <ListofMovies movies={this.props.movieList.slice(5)}></ListofMovies>
      </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  movieList: state.movieList.items,
  isfetching: state.movieList.isFetching
});

LastestMoviesContainer.propTypes = {
  fetchMovieList: PropTypes.func,
  movieList: PropTypes.array.isRequired
};

export default connect(mapStateToProps, { fetchMovieList })(LastestMoviesContainer);
