import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Spinner from '../../components/UI/Spinner/Spinner';
import { StyledAlbum } from './Album.styled';
import AlbumDetailed from '../../components/MainScreen/AlbumDetailed';
import axios from 'axios';

const Album = () => {

  // const album = useSelector(({ albumsReducer }) => albumsReducer.album);
  // const loading = useSelector(state => state.albumsReducer.loading);
  // const shortcut = "https://www.youtube.com/embed/";
  const [album, setAlbum] = useState();

  const [user, setUser] = useState();

  const [photos, setPhotos] = useState();

  const [posts, setPosts] = useState();

  const history = useHistory();


  const currAlbumDetailed = useSelector(state => state.albumsReducer.album);
  const userData = useSelector(state => state.albumsReducer.userData);

  useEffect( () => {
    axios.get(
      `https://jsonplaceholder.typicode.com/albums/${currAlbumDetailed}`
  )
  .then(res => {
    setAlbum(res.data)
  });
}, []);
useEffect( () => {
  axios.get(
    `https://jsonplaceholder.typicode.com/users/${userData}`
)
.then(res => {
  setUser(res.data)
});
}, []);

useEffect( () => {
  axios.get(
    `https://jsonplaceholder.typicode.com/albums/${currAlbumDetailed}/photos?_start=0&_limit=10`
)
.then(res => {
  setPhotos(res.data)
});
}, []);

useEffect( () => {
  axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${currAlbumDetailed}`
)
.then(res => {
  setPosts(res.data)
});
}, []);

console.log('currAlbumDetailed', currAlbumDetailed);
console.log('userData', userData);

const goBack = () => {
  history.goBack()
}

  return (
    <StyledAlbum>
      { currAlbumDetailed && userData && photos && <AlbumDetailed
        title={currAlbumDetailed.title}
        username={userData.username}
        userphone={userData.phone}
        userwebsite={userData.website}
        photos={photos}

       /> }
       {posts && <div><p>{posts[0].title}</p><p>{posts[1].title}</p></div>}
       <button onClick={goBack}>Go back</button>
    </StyledAlbum>
  );
}

export default Album;
