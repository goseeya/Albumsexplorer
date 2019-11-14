import React, { useState, useEffect } from 'react';
import { StyledAlbumItem } from './AlbumItem.styled';
import axios from 'axios';

const AlbumItem = ({ onAlbumClick, key, title, userId }) => {
  const [username, setUsername] = useState(null);

  useEffect( () => {
    axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
  )
  .then(res => {
    setUsername(res.data.username)
  });
}, []);

  return (
    <StyledAlbumItem>
      { username &&
        <div
          onClick={onAlbumClick}>
            <p>Title: {title}</p>
            <p>Author: {username}</p>
        </div> }
    </StyledAlbumItem>
  )
}

export default AlbumItem;
