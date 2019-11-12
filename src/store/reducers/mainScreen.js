import * as actionTypes from '../actions/actionTypes';

const initialState = {
  albums: null,
  users: null,
  loading: false,
  error: false,
  album: null,
  userData: null,
  photos: null,
  posts: null
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MAIN_ALBUM_START: {
      return {
        ...state,
        loading: true
      }
    }
    case actionTypes.FETCH_MAIN_ALBUM_SUCCESS:
      return {
        ...state,
        loading: false,
        album: action.album
      }
    case actionTypes.FETCH_MAIN_ALBUM_FAIL:
      return {
        ...state,
        loading: false,
        error: true
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
    case actionTypes.FETCH_USERS_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        loading: false
      }
    case actionTypes.FETCH_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      }
    case actionTypes.FETCH_MAIN_USER_DATA_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_MAIN_USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.userData
      }
    case actionTypes.FETCH_MAIN_USER_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      }
    case actionTypes.FETCH_MAIN_PHOTOS_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_MAIN_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: action.photos
      }
    case actionTypes.FETCH_MAIN_PHOTOS_FAIL:
      return {
        ...state,
        loading: false,
        error: true
      }
      case actionTypes.FETCH_MAIN_POSTS_START:
        return {
          ...state,
          loading: true
        }
      case actionTypes.FETCH_MAIN_POSTS_SUCCESS:
        return {
          ...state,
          loading: false,
          posts: action.posts
        }
      case actionTypes.FETCH_MAIN_POSTS_FAIL:
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
