import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Spinner from '../../components/UI/Spinner/Spinner';
import { StyledAlbum } from './Album.styled';
import AlbumDetailed from '../../components/MainScreen/AlbumDetailed';
import axios from 'axios';
import SimpleStorage from "react-simple-storage";


const Album = () => {

  const initialAlbum = () =>
    JSON.parse(window.localStorage.getItem("album")) ||
    null;

    const initialUser = () =>
      JSON.parse(window.localStorage.getItem("user")) ||
      null;

      const initialPhotos = () =>
        // JSON.parse(window.localStorage.getItem("photos")) ||
        null;

        const initialPosts = () =>
          // JSON.parse(window.localStorage.getItem("posts")) ||
          null;

          const initialAlb = () =>
            // JSON.parse(window.localStorage.getItem("currAlbumDetailed")) ||
            null;

            const initialDat = () =>
              // JSON.parse(window.localStorage.getItem("userData")) ||
              null;






  // const album = useSelector(({ albumsReducer }) => albumsReducer.album);
  const loading = useSelector(state => state.albumsReducer.loading);
  const shortcut = "https://www.youtube.com/embed/";
  const [album, setAlbum] = useState(initialAlbum);

  const [user, setUser] = useState(initialUser);

  // const [photos, setPhotos] = useState(initialPhotos);

  const [posts, setPosts] = useState(initialPosts);




  const history = useHistory();


  const c = useSelector(state => state.albumsReducer.album);
  console.log(c);
  const u = useSelector(state => state.albumsReducer.userData);
  const p = useSelector(state => state.albumsReducer.photos);


  const currAlbumDetailed = JSON.parse(window.localStorage.getItem("currAlbumDetailed")) || c;
  const userData = JSON.parse(window.localStorage.getItem("userData")) || u;
  const photos = JSON.parse(window.localStorage.getItem("photos")) || p;

  //
  // const alb = JSON.parse(window.localStorage.getItem("currAlbumDetailed")) || null;
  // const usD = JSON.parse(window.localStorage.getItem("userData")) || null;


//   useEffect( () => {
//     const al = window.localStorage.getItem("currAlbumDetailed") || currAlbumDetailed;
//     axios.get(
//       `https://jsonplaceholder.typicode.com/albums/${al}`
//   )
//   .then(res => {
//     setAlbum(res.data);
//
//   });
// }, []);
useEffect(() => window.localStorage.setItem("currAlbumDetailed", JSON.stringify(currAlbumDetailed)));
useEffect(() => window.localStorage.setItem("userData", JSON.stringify(userData)));
useEffect(() => window.localStorage.setItem("photos", JSON.stringify(photos)));


// useEffect(() => currAlbumDetailed && window.localStorage.setItem("currAlbumDetailed", JSON.stringify(currAlbumDetailed)));
// useEffect(() => userData && window.localStorage.setItem("userData", JSON.stringify(userData)));


// useEffect( () => {
//   const us = window.localStorage.getItem("userData") || userData;
//
//   axios.get(
//     `https://jsonplaceholder.typicode.com/users/${us}`
// )
// .then(res => {
//   setUser(res.data);
// });
// }, []);
//
// useEffect(() => window.localStorage.setItem("userData", userData))
//
// useEffect( () => {
//   axios.get(
//     `https://jsonplaceholder.typicode.com/albums/${currAlbumDetailed}/photos?_start=0&_limit=10`
// )
// .then(res => {
//   setPhotos(res.data);
// });
// }, []);
//
// // useEffect(() =>
// //   window.localStorage.setItem("photos", JSON.stringify(photos)))
//
// useEffect( () => {
//   axios.get(
//     `https://jsonplaceholder.typicode.com/posts?userId=${currAlbumDetailed}`
// )
// .then(res => {
//   setPosts(res.data);
// });
// }, []);
//
// // useEffect(() => window.localStorage.setItem("posts", JSON.stringify(posts)))
//
// console.log('currAlbumDetailed', currAlbumDetailed);
// console.log('userData', userData);

const goBack = () => {
  history.goBack()
}

  return (
    <StyledAlbum>
    <p>{JSON.stringify(currAlbumDetailed)}</p>
    <p>{JSON.stringify(userData)}</p>

      { currAlbumDetailed && userData && <AlbumDetailed
        title={currAlbumDetailed.title}
        username={userData.username}
        userphone={userData.phone}
        userwebsite={userData.website}
        photos={photos}

       /> }
       <button onClick={goBack}>Go back</button>
    </StyledAlbum>
  );
}

export default Album;
// <div><p>{posts[0].title}</p><p>{posts[1].title}</p></div>
// {posts && <div><p>{posts[0].title}</p><p>{posts[1].title}</p></div>}
