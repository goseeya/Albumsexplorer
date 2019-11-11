import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';
import { StyledAlbum } from './Album.styled';
import AlbumDetailed from '../../components/MainScreen/AlbumDetailed';
import axios from 'axios';

const Album = () => {

  // const album = useSelector(({ albumsReducer }) => albumsReducer.album);
  // const loading = useSelector(state => state.albumsReducer.loading);
  // const shortcut = "https://www.youtube.com/embed/";
  // const [userData, setUserData] = useState();

  const currAlbumDetailed = useSelector(state => state.albumsReducer.album);
  const userData = useSelector(state => state.albumsReducer.userData);

//   useEffect( () => {
//     axios.get(
//       `https://jsonplaceholder.typicode.com/users/${currAlbumDetailed.userId}`
//   )
//   .then(res => {
//     console.log(res)
//     setUserData(res.data)
//   });
// });

  return (
    <StyledAlbum>
      { currAlbumDetailed && userData && <AlbumDetailed
        title={currAlbumDetailed.title}
        username={userData.data.username}
        userphone={userData.phone}
        userwebsite={userData.website}
        photos={userData.photos}

       /> }
    </StyledAlbum>
  );
}

export default Album;
