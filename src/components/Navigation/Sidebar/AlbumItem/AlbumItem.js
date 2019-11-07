import React from 'react';
import { StyledAlbumItem } from './AlbumItem.styled';

const AlbumItem = ({ onAlbumClick, key, title, src, width, height }) => {
  return (
    <StyledAlbumItem>
      <div
        onClick={onAlbumClick}
        key={key}>
        <img alt="albumItem" src={src} width={width} height={height} />
        <div>{title}</div>
      </div>
    </StyledAlbumItem>
  )
}

export default AlbumItem;
