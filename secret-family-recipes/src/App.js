import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import UserSignupForm from './components/SignUp';
import UserLogin from './components/LogIn'
import MyRecipes from './components/MyRecipes';
import LogIn from './components/LogIn';
import SignUpPage from './components/SignUpPage';
import PrivateRoute from './components/PrivateRoute'
import { Route, Switch, Link} from 'react-router-dom';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <Navigation />
      <UserSignupForm />
      <PrivateRoute path="/dashboard" component={Dashboard}/>
      <Route exact path='/' component={UserLogin} />
      <Route path='/MyRecipes' component={MyRecipes} />
      <Route path='/Login' component={LogIn} />
      <Route path='/SignUpPage' component={SignUpPage} />
    </div>
  );
}

export default App;
