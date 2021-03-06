import React from 'react';
// import logo from './logo.svg';
import './App.css';

import SignUpPage from './components/SignUpPage';
import MyRecipes from './components/MyRecipes';
import LoginPage from './components/LoginPage';
import PrivateRoute from './components/PrivateRoute'
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
    <Switch>
      <PrivateRoute path="/dashboard" component={Dashboard}/>
      <Route exact path='/' component={LoginPage} />
      <Route path='/my-recipes' component={MyRecipes} />
      <Route path='/sign-up-page' component={SignUpPage} />
    </Switch>
    </div>
  );
}

export default App;
