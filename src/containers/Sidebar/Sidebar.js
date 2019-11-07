import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledSidebar } from './Sidebar.styled';
import AlbumItem from '../../components/Navigation/Sidebar/AlbumItem/AlbumItem';
import * as actions from '../../store/actions/actions';

const Sidebar = () => {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albumsReducer.albums);

  const openMain = (albumId) => {
    dispatch(actions.fetchMainAlbum(albumId))
  }

  const getUserByUserId = (userId) => {
    return 
  }

  console.log(albums);

  return (
    <StyledSidebar>
      { albums && (
          <div>{JSON.stringify(albums)}</div>
        )}
    </StyledSidebar>
  )
}

export default Sidebar;

// albums.data.map(album =>
//   <AlbumItem 
//     onAlbumClick={() => openMain(album.id.albumId)} 
//     key={album.id.albumId} 
//     title={album.snippet.title} 
//     src={album.snippet.thumbnails.default.url} 
//     width={album.snippet.thumbnails.default.width} 
//     height={album.snippet.thumbnails.default.height} />)