import * as actionTypes from '../actions/actionTypes';

const initialState = {
  albums: null,
  album: null,
  loading: false,
  error: false
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MAIN_ALBUM: {
      return {
        ...state,
        album: action.album
      }
    }
    case actionTypes.FETCH_ALBUMS_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.albums,
        loading: false
      }
    case actionTypes.FETCH_ALBUMS_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return {
        ...state
      }
  }
};

export default albumsReducer;
