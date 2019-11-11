import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StyledSidebar } from './Sidebar.styled';
import AlbumItem from '../../components/Navigation/Sidebar/AlbumItem/AlbumItem';
import * as actions from '../../store/actions/actions';
import axios from 'axios';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [currPageStartIndex, setCurrPageStartIndex] = useState(0);
  const albums = useSelector(state => state.albumsReducer.albums);
  const users = useSelector(state => state.albumsReducer.users);
  const history = useHistory();


  const [usernames, setUsernames] = useState(null);
  let userNames = null;
  let userNamesReady = false;
  let albumsToRender = null;
  const openMain = (albumId, userId) => {
    dispatch(actions.fetchMainAlbum(albumId));
    dispatch(actions.fetchMainUserData(userId));

    history.push(`/details/${albumId}`);
  }
  console.log(users);

  const onPrevPageClick = () => {
    setCurrPageStartIndex(currPageStartIndex-10);
    dispatch(actions.fetchAlbumsStart(currPageStartIndex));
  }

  const onNextPageClick = () => {
    console.log('onNextPageClick');
    setCurrPageStartIndex(currPageStartIndex+10);
    dispatch(actions.fetchAlbumsStart(currPageStartIndex));
    console.log(currPageStartIndex);

  }


  // const getUsernameByUserId = (userId) => {
  //   let response = null;

  //   axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
  //    .then(res => {
  //      console.log(res.data.username)
  //      response = res.data.username
  //    })
  //    return 'UsrFromFunc' + response
    //  return response;
      //  console.log(res)
       // {
       // setUsernames(res.data);
     //   dispatch(fetchAlbumsSuccess(res))})
     // .catch(error => {
     //  dispatch(fetchAlbumsFail());
     // return res.data;
     // res.json()
    // }
  // )
    // .then(res => userNames = res)
  // }
  //
  //
  // console.log(albums);
  // console.log(getUserByUserId(1));
  // getUserByUserId();

  // useEffect(() => {
  //   albumsToRender = albums ? albums.data.map(album => <div><p>{album.title}</p><p style={{backgroundColor: 'pink'}}>Username: {getUsernameByUserId(album.userId)}</p></div>) : null
  // })

  return (
    <StyledSidebar>
    {/* {albums && JSON.stringify(albums)} */}
    {/* {users && JSON.stringify(users)} */}
    {/* {JSON.stringify(albums)}
    {albumsToRender} */}
    { currPageStartIndex > 0 && <button onClick={onPrevPageClick}>Prev page</button>}
    { albums &&
    albums.data.map(album =>
  <AlbumItem
    onAlbumClick={() => openMain(album.id, album.userId)}
    key={album.id}
    title={album.title}
    userId={album.userId} />)}
    { currPageStartIndex < 90 && <button onClick={onNextPageClick}>Next page</button>}
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
