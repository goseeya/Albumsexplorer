import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { StyledAlbum } from './Album.styled';

const Album = () => {

  const album = useSelector(({ albumsReducer }) => albumsReducer.album);
  const loading = useSelector(state => state.albumsReducer.loading);
  const shortcut = "https://www.youtube.com/embed/";

  return (
    <StyledAlbum>
      { loading && <Spinner />}
      { album &&
          <iframe 
            title={album}
            key={album} 
            type="text/html"
            width="640" 
            height="360"
            src={shortcut+album}/>}
    </StyledAlbum>
  );
}

export default Album;
