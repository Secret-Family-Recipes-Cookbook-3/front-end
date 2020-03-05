import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import {recipesReducer} from './reducers/RecipeReducer'
// import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import gsap from 'gsap';

const store = createStore(recipesReducer);

gsap.to('.recipeCardAnimate', {duration: 2, rotateX: 360, ease: 'elastic(1, 0.75)'}).restart();

ReactDOM.render(
<Provider store={store}>
  <Router>  
    <App />
  </Router>
</Provider>  
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
