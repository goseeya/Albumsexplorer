import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StyledAlbumsList } from './AlbumsList.styled';
import AlbumItem from '../../components/Navigation/Sidebar/AlbumItem/AlbumItem';
import * as actions from '../../store/actions/actions';
import axios from 'axios';

const AlbumsList = () => {
  const dispatch = useDispatch();
  const [currPageStartIndex, setCurrPageStartIndex] = useState(0);
  const albums = useSelector(state => state.albumsReducer.albums);
  const history = useHistory();

  useEffect(() => {
    dispatch(actions.fetchAlbumsStart(currPageStartIndex));
  }, [])

  const openMain = (albumId, userId) => {
    dispatch(actions.fetchMainAlbumStart(albumId));
    dispatch(actions.fetchMainPhotosStart(albumId));
    dispatch(actions.fetchMainUserDataStart(userId));
    dispatch(actions.fetchMainPostsStart(userId));


    history.push(`/details/${albumId}`);
  }

  const onPrevPageClick = () => {
    setCurrPageStartIndex(currPageStartIndex-10);
    dispatch(actions.fetchAlbumsStart(currPageStartIndex));
  }

  const onNextPageClick = () => {
    setCurrPageStartIndex(currPageStartIndex+10);
    dispatch(actions.fetchAlbumsStart(currPageStartIndex));
  }


  return (
    <StyledAlbumsList>
      <h2>Albums</h2>
      <div>
      { currPageStartIndex > 0 && <button onClick={onPrevPageClick}>Prev page</button>}
      { albums &&
        albums.data.map(album =>
          <AlbumItem
            onAlbumClick={() => openMain(album.id, album.userId)}
            key={album.id}
            title={album.title}
            userId={album.userId}
          />)}
      { currPageStartIndex < 90 && <button onClick={onNextPageClick}>Next page</button>}
      </div>
    </StyledAlbumsList>
  )
}

export default AlbumsList;
