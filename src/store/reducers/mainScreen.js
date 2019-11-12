import * as actionTypes from '../actions/actionTypes';

const initialState = {
  albums: null,
  album: null,
  users: null,
  loading: false,
  error: false,
  userData: null,
  photos: null
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MAIN_ALBUM: {
      return {
        ...state
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
      case actionTypes.FETCH_MAIN_USER_DATA:
        return {
          ...state
        }
        case actionTypes.FETCH_MAIN_USER_DATA_SUCCESS:
          return {
            ...state,
            userData: action.userData
          }
          case actionTypes.FETCH_MAIN_ALBUM_SUCCESS:
            return {
              ...state,
              album: action.album
            }
            case actionTypes.FETCH_MAIN_PHOTOS:
              return {
                ...state
              }

              case actionTypes.FETCH_MAIN_PHOTOS_SUCCESS:
                return {
                  ...state,
                  photos: action.photos
                }
    default:
      return {
        ...state
      }
  }
};

export default albumsReducer;
