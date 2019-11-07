import React from 'react';
import PropTypes from 'prop-types';
import { StyledLogo } from './Logo.styled';

const Logo = ({ url, alt }) => {
  return (
    <StyledLogo>
      <img src={url} alt={alt} width="30px" height="10px" />
    </StyledLogo>
  )
}

Logo.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default Logo;
