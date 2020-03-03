import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import MyRecipes from './components/MyRecipes';
import LogIn from './components/LogIn';
import Navigation from './components/Navigation';
import SignUpPage from './components/SignUpPage';
import { Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path='/' component={Dashboard} />
      <Route path='/MyRecipes' component={MyRecipes} />
      <Route path='/Login' component={LogIn} />
      <Route path='/SignUpPage' component={SignUpPage} />
    </div>
  );
}

export default App;
