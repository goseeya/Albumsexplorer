import React from 'react';
import PropTypes from 'prop-types';
import { StyledCurrentUser } from './CurrentUser.styled';

const CurrentUser = ({ avatarUrl, displayedName, logoutPage, logged, onLogoutClick, onLoginClick }) => {
  const loggedDisplay =
    <React.Fragment>
      <img src={avatarUrl} alt="Current User" />
      <p>{displayedName}</p>
      <button onClick={onLogoutClick}>Logout</button>
    </React.Fragment>
  return (
    <StyledCurrentUser>
      { !logged ? loggedDisplay : <button onClick={onLoginClick}>Login</button> }
    </StyledCurrentUser>
  )
}

CurrentUser.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  displayedName: PropTypes.string.isRequired,
  logoutPage: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired,
  onLoginClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired
}

export default CurrentUser;
