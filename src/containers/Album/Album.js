import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { StyledAlbum } from './Album.styled';
import AlbumDetailed from '../../components/AlbumDetailed/AlbumDetailed';

const Album = () => {

  const history = useHistory();

  const albumsFromState = useSelector(state => state.albumsReducer.album);
  const userDataFromState = useSelector(state => state.albumsReducer.userData);
  const photosFromState = useSelector(state => state.albumsReducer.photos);
  const postsFromState = useSelector(state => state.albumsReducer.posts);
  //TODO refactor
  const currAlbumDetailed = JSON.parse(window.localStorage.getItem("currAlbumDetailed")) || albumsFromState;
  const userData = JSON.parse(window.localStorage.getItem("userData")) || userDataFromState;
  const photos = JSON.parse(window.localStorage.getItem("photos")) || photosFromState;
  const posts = JSON.parse(window.localStorage.getItem("posts")) || postsFromState;

  useEffect(() => window.localStorage.setItem("currAlbumDetailed", JSON.stringify(currAlbumDetailed)));
  useEffect(() => window.localStorage.setItem("userData", JSON.stringify(userData)));
  useEffect(() => window.localStorage.setItem("photos", JSON.stringify(photos)));
  useEffect(() => window.localStorage.setItem("posts", JSON.stringify(posts)));


  const goBack = () => {
    history.goBack();
  }

  return (
    <StyledAlbum>
      { currAlbumDetailed && userData &&
        <AlbumDetailed
          title={currAlbumDetailed.title}
          username={userData.username}
          userphone={userData.phone}
          userwebsite={userData.website}
          usermail={userData.email}
          photos={photos}
          posts={posts}
         /> }
      <button className='back-button' onClick={goBack}>&larr;</button>
    </StyledAlbum>
  );
}

export default Album;
