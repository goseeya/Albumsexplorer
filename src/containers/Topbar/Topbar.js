import React from 'react';
import { StyledTopbar } from './Topbar.styled';
import Logo from '../../components/Logo/Logo';
import CurrentUser from '../../components/Navigation/CurrentUser/CurrentUser';
import { useHistory } from "react-router-dom";

const Topbar = () => {
  
  const history = useHistory();

  const onLoginClick = () => {
    history.push('/login');
  }

  const onLogoutClick = () => {
    history.push('/login');
  }

  return (
    <StyledTopbar>
      <Logo url={require("./explore-icon.png")} alt="Logo" />
      <CurrentUser
        avatarUrl="https://p7.hiclipart.com/preview/732/397/177/computer-icons-avatar-woman-user-avatar-thumbnail.jpg"
        displayedName="Britney Spears"
        logoutPage="/"
        logged={false}
        onLoginClick={onLoginClick}
        onLogoutClick={onLogoutClick} />
    </StyledTopbar>
  )
}

export default Topbar;
