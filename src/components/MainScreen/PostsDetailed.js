import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { StyledPostsDetailed } from './PostsDetailed.styled';

const PostsDetailed = ({ title, username, usermail, userphone, userwebsite, photos }) => {

  const album = useSelector(({ albumsReducer }) => albumsReducer.album);
  const loading = useSelector(state => state.albumsReducer.loading);
  const shortcut = "https://www.youtube.com/embed/";

  return (
    <StyledAlbumDetailed>
      { loading && <Spinner />}
      { album &&
          <div>{title}
          <p>{username}</p>
          <p>{usermail}</p>
          <p>{userphone}</p>
          <p>{userwebsite}</p>
          {photos.map(photo => <div><p>{photo.title}</p><img src={photo.thumbnailUrl} /></div>)}
          </div>}
    </StyledAlbumDetailed>
  );
}

export default AlbumDetailed;
