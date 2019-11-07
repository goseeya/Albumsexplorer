import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchAlbumsStart = () => {
  return dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
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
