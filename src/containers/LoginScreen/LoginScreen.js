import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store/Store';
import { useHistory } from "react-router-dom";


const LoginScreen = () => {

const onLogin = () => {
  history.push('/');
}

const history = useHistory();

  return (
    <Provider store={store}>
      <p>LoginScreen</p>
      <button onClick={onLogin}>Login</button>
    </Provider>

  );
}

export default LoginScreen;
