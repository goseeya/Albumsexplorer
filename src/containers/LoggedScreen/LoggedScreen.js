import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store/Store';

import Album from '../Album/Album';
import Sidebar from '../../containers/Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

const LoggedScreen = () => {

  return (
    <Provider store={store}>
      <Topbar />
      <Album />
      <Sidebar />
    </Provider>

  );
}

export default LoggedScreen;
