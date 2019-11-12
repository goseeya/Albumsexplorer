import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { StyledAlbum } from './Album.styled';

const AlbumDetail = ({ title, username, usermail, userphone, userwebsite, photos }) => {

  const album = useSelector(({ albumsReducer }) => albumsReducer.album);
  const loading = useSelector(state => state.albumsReducer.loading);
  const shortcut = "https://www.youtube.com/embed/";

  return (
    <StyledAlbum>
      { loading && <Spinner />}
      { album &&
          <div>{title}
          <p>{username}</p>
          <p>{usermail}</p>
          <p>{userphone}</p>
          <p>{userwebsite}</p>
          {photos && photos.map(photo => <div></div>)}
          </div>}
    </StyledAlbum>
  );
}

export default Album;
