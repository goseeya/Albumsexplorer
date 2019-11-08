import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';import { StyledAlbumItem } from './AlbumItem.styled';
import axios from 'axios';

const AlbumItem = ({ onAlbumClick, key, title, userId }) => {
  const [username, setUsername] = useState(null);

  useEffect( () => {
    axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
  )
  .then(res => {
    console.log(res)
    setUsername(res.data.username)
  });
});

  return (
    <StyledAlbumItem>
      { username && <div
        onClick={onAlbumClick}
        key={key}>
        AlbumItem<div>{username}</div>
      </div> }
    </StyledAlbumItem>
  )
}

export default AlbumItem;
