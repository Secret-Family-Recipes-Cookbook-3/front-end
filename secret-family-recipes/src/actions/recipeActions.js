import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN = 'LOGIN'
export const GET_RECIPES = 'GET_RECIPES'
export const ADD_RECIPE = 'ADD_RECIPE'

export const login = (creds) => dispatch => {
  axiosWithAuth()
    .post('https://secret-family-recipes-cookbook.herokuapp.com/api/auth/login', creds)
    .then(res => {
      return dispatch({type: LOGIN, payload: res.data.token})
    })
    .catch(err => console.log(err))
}


export const getData = () => dispatch => {
  axiosWithAuth()
    .get('https://secret-family-recipes-cookbook.herokuapp.com/api/recipes')
    .then(res => {
      return dispatch({type: GET_RECIPES, payload: res.data})
    })
    .catch(err => console.log(err))
}

export const addRecipe = (recipe) => dispatch => {
  axiosWithAuth()
    .post('https://secret-family-recipes-cookbook.herokuapp.com/api/recipes', recipe)
    .then(res => {
      return dispatch({type: ADD_RECIPE, payload: res.data})
    })
    .catch(err => console.log(err))
}
