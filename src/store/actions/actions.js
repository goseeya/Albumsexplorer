import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchAlbumsStart = (startIndex) => {
  return dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?_start=${startIndex}&_limit=10`)
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

export const fetchMainAlbumStart = (id) => {
  return dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
     .then(res => {
       dispatch(fetchMainAlbumSuccess(res))})
     .catch(error => {
      dispatch(fetchMainAlbumFail());
    })
  }
}

export const fetchMainAlbumSuccess = (album) => {
  return {
    type: actionTypes.FETCH_MAIN_ALBUM_SUCCESS,
    album: album.data
  }
}

export const fetchMainAlbumFail = () => {
  return {
    type: actionTypes.FETCH_MAIN_ALBUM_FAIL
  }
}

export const fetchMainUserDataStart = (userId) => {
  return dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
     .then(res => {
       dispatch(fetchMainUserDataSuccess(res))})
     .catch(error => {
      dispatch(fetchMainUserDataFail());
    })
  }
}

export const fetchMainUserDataSuccess = (userData) => {
  return {
    type: actionTypes.FETCH_MAIN_USER_DATA_SUCCESS,
    userData: userData.data
  }
}

export const fetchMainUserDataFail = () => {
  return {
    type: actionTypes.FETCH_MAIN_USER_DATA_FAIL
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

export const fetchMainPhotosStart = (albumId) => {
  return dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_start=0&_limit=10`)
     .then(res => {
       dispatch(fetchMainPhotosSuccess(res))})
     .catch(error => {
      dispatch(fetchMainPhotosFail());
    })
  }
}

export const fetchMainPhotosSuccess = (photos) => {
  return {
    type: actionTypes.FETCH_MAIN_PHOTOS_SUCCESS,
    photos: photos.data
  }
}

export const fetchMainPhotosFail = () => {
  return {
    type: actionTypes.FETCH_MAIN_PHOTOS_FAIL
  }
}
export const fetchMainPostsStart = (userId) => {
  return dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
     .then(res => {
       dispatch(fetchMainPostsSuccess(res))})
     .catch(error => {
      dispatch(fetchMainPostsFail());
    })
  }
}

export const fetchMainPostsSuccess = (posts) => {
  return {
    type: actionTypes.FETCH_MAIN_POSTS_SUCCESS,
    posts: posts.data
  }
}

export const fetchMainPostsFail = () => {
  return {
    type: actionTypes.FETCH_MAIN_POSTS_FAIL
  }
}
