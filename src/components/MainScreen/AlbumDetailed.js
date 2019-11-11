import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { StyledAlbumDetailed } from './AlbumDetailed.styled';

const AlbumDetailed = ({ title, username, usermail, userphone, userwebsite, photos }) => {

  const album = useSelector(({ albumsReducer }) => albumsReducer.album);
  const loading = useSelector(state => state.albumsReducer.loading);
  const shortcut = "https://www.youtube.com/embed/";
  const [showPic, setShowPic] = useState(false)
  const [url, setUrl] = useState();

  const showBigPicture = (url) => {
    setShowPic(true);
    setUrl(url);
  }

  return (
    <StyledAlbumDetailed>
      { loading && <Spinner />}
      { album &&
          <div>{title}
          <p>{username}</p>
          <p>{usermail}</p>
          <p>{userphone}</p>
          <p>{userwebsite}</p>

          {photos.map(photo => <div><p>{photo.title}</p><img onClick={() => showBigPicture(photo.url)} src={photo.thumbnailUrl} /></div>)}
          </div>}
          {showPic && <div><img src={url} /><button onClick={() => setShowPic(false)}>close</button></div>}
    </StyledAlbumDetailed>
  );
}

export default AlbumDetailed;
