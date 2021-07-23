import {combineReducers} from 'redux';
import {FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE} from '../actions';

const defaultStateList = {
  isFetching: false,
  items:[],
  error:{}
};

const movieList = (state = defaultStateList, action) => {
  switch (action.type){
  case FETCH_MOVIES:
    return {...state, isFetching:true};
  case FETCH_MOVIES_SUCCESS:
    return {...state, isFetching:false, items:action.data};
  case FETCH_MOVIES_FAILURE:
    return {...state, isFetching:false, error:action.data};
  default:
    return state;
  }
};

const defaultState = {
  isFetching: false,
  item:{},
  error:{}
};

const movieDetail = (state = defaultState, action) => {
  switch (action.type){
  case FETCH_MOVIE:
    return Object.assign({}, state, {
      isFetching:true
    });
  case FETCH_MOVIE_SUCCESS:
    return Object.assign({}, state, {
      isFetching:false,
      item:action.data
    });
  case FETCH_MOVIE_FAILURE:
    return Object.assign({}, state, {
      isFetching:false,
      error:action.data
    });
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  movieList,
  movieDetail
});

export default rootReducer;
