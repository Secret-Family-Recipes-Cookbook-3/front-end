import React from 'react';
// import logo from './logo.svg';
import './App.css';

import FormikRecipeForm from "./components/AddRecipes";
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

      {/* <FormikRecipeForm></FormikRecipeForm> */}
      {/* <SignUpPage /> */}
      {/* <UserSignupForm /> */}
      <Switch>
        <PrivateRoute exact path="/Dashboard" component={Dashboard}/>
        <Route  path='/Sign-up' component={SignUpPage} />
        <Route exact path='/' component={LoginPage} />
        <Route path='/MyRecipes' component={MyRecipes} />
      </Switch>
      {/* <Route path='/SignUpPage' component={SignUpPage} /> */}


    </div>
  );
}

export default App;
