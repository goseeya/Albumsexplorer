import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchAlbumsStart = (start, limit) => {
  return dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?_start=${start}&_limit=${limit}`)
     .then(res => {
       dispatch(fetchAlbumsSuccess(res))})
     .catch(error => {
      dispatch(fetchAlbumsFail());
    })
  }
}

export const fetchAlbumsSuccess = (albums) => {
  return {
    type: actionTypes.FETCH_ALBUMS_SUCCESS,
    albums: albums
  }
}

export const fetchAlbumsFail = () => {
  return {
    type: actionTypes.FETCH_ALBUMS_FAIL
  }
}

export const fetchMainAlbum = (keyword) => {
  return {
    type: actionTypes.FETCH_MAIN_ALBUM,
    album: keyword
  }
}

export const fetchUsersStart = () => {
  return dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res => {
       dispatch(fetchUsersSuccess(res))})
     .catch(error => {
      dispatch(fetchUsersFail());
    })
  }
}

export const fetchUsersSuccess = (users) => {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    users: users
  }
}

export const fetchUsersFail = () => {
  return {
    type: actionTypes.FETCH_USERS_FAIL
  }
}

// export const fetchMainAlbum = (keyword) => {
//   return {
//     type: actionTypes.FETCH_MAIN_ALBUM,
//     album: keyword
//   }
// }
