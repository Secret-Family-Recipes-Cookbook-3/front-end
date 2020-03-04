import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import UserSignupForm from './components/SignUp';
import UserLogin from './components/LogIn'
import MyRecipes from './components/MyRecipes';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import PrivateRoute from './components/PrivateRoute'
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
    <Switch>
      <PrivateRoute path="/Dashboard" component={Dashboard}/>
      <Route exact path='/' component={LoginPage} />
      <Route path='/MyRecipes' component={MyRecipes} />
      <Route path='/SignUpPage' component={SignUpPage} />
    </Switch>
    </div>
  );
}

export default App;
