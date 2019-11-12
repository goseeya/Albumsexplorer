import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchAlbumsStart = (start) => {
  return dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?_start=${start}&_limit=10`)
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
  return dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/albums/${keyword}`)
     .then(res => {
       dispatch(fetchMainAlbumSuccess(res))})
     .catch(error => {
      dispatch(fetchUsersFail());
    })
  }
}

export const fetchMainUserData = (userId) => {
  return dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
     .then(res => {
       dispatch(fetchMainUserDataSuccess(res))})
     .catch(error => {
      dispatch(fetchUsersFail());
    })
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

export const fetchMainPhotos = (albumId) => {
  return dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_start=0&_limit=10`)
     .then(res => {
       dispatch(fetchMainPhotosSuccess(res))})
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


export const fetchMainPhotosSuccess = (photos) => {
  return {
    type: actionTypes.FETCH_MAIN_PHOTOS_SUCCESS,
    photos: photos.data
  }
}

export const fetchMainAlbumSuccess = (album) => {
  console.log('fetchMainAlbumSuccess', album)
  return {
    type: actionTypes.FETCH_MAIN_ALBUM_SUCCESS,
    album: album.data
  }
}

export const fetchMainUserDataSuccess = (userData) => {
  console.log('fetchMainUserDataSuccess', userData)

  return {
    type: actionTypes.FETCH_MAIN_USER_DATA_SUCCESS,
    userData: userData.data
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
