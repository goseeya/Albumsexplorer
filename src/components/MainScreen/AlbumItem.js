import React from 'react';
import PropTypes from 'prop-types';
import { StyledAlbumItem } from './AlbumItem.styled';

const AlbumItem = ({ item }) => {
  return (
    <StyledAlbumItem>
      <div>AlbumItem</div>
      <p>{item}</p>
    </StyledAlbumItem>
  )
}

AlbumItem.propTypes = {
  item: PropTypes.string.isRequired
}

export default AlbumItem;
