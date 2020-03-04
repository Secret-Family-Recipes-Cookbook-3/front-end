import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import SignUpPage from './components/SignUpPage';
import MyRecipes from './components/MyRecipes';
import LoginPage from './components/LoginPage';
import PrivateRoute from './components/PrivateRoute'
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Navigation />
      <PrivateRoute path="/dashboard" component={Dashboard}/>
      <Route path='/MyRecipes' component={MyRecipes} />
      <Route path='/LoginPage' component={LoginPage} />
      <Route exact path='/' component={SignUpPage} />
    </div>
  );
}

export default App;
