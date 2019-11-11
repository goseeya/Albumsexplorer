import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store/Store';

import Album from '../Album/Album';
import Sidebar from '../../containers/Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

const DetailsScreen = () => {

  return (
    <Provider store={store}>
      <Topbar />
      <p>Details hereeee</p>
      <Album />
    </Provider>

  );
}

export default DetailsScreen;
