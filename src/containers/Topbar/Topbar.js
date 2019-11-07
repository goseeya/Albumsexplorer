import React, { useState } from 'react';
import { StyledTopbar } from './Topbar.styled';
import Logo from '../../components/Logo/Logo';
import CurrentUser from '../../components/Navigation/CurrentUser/CurrentUser';
import Search from '../../components/Navigation/Topbar/Search/Search';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as actions from '../../store/actions/actions';


const Topbar = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const onButtonClick = () => {
    dispatch(actions.fetchAlbumsStart(searchValue));
    dispatch(actions.fetchUsersStart());
  }

  const handleChange = event => {
    setSearchValue(event.target.value);
  }


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
      <Search
        onChange={handleChange}
        value={searchValue}
        onButtonClick={onButtonClick} />
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
