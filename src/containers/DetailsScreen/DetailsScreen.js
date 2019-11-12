import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store/Store';

import Album from '../Album/Album';
import Topbar from '../Topbar/Topbar';

const DetailsScreen = () => {

  return (
    <Provider store={store}>
      <Topbar />
      <Album />
    </Provider>

  );
}

export default DetailsScreen;
