import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import LoggedScreen from './containers/LoggedScreen/LoggedScreen';
import LoginScreen from './containers/LoginScreen/LoginScreen';
import DetailsScreen from './containers/DetailsScreen/DetailsScreen';


import './App.css';


const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoggedScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/details/:id" component={DetailsScreen} />
        <Route path='/' component={() => {
           window.location.href = "https://notfound.fwebservices.be/404/build?server=false&key=5db589c287299";
           return null;
        }}/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
