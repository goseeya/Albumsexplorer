import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../../store/Store';

import Album from '../Album/Album';
import AlbumsList from '../../containers/AlbumsList/AlbumsList';
import Topbar from '../Topbar/Topbar';

const LoggedScreen = () => {

  useEffect(() => localStorage.clear(), []);

  return (
    <Provider store={store}>
      <Topbar />
      <AlbumsList />
    </Provider>

  );
}

export default LoggedScreen;
