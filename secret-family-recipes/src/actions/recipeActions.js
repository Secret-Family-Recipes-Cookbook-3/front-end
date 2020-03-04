import axios from 'axios';

export const GET_USERS = 'GET_USERS'
export const LOGIN = 'LOGIN'

export const Login = () => dispatch => {
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      return dispatch({type: LOGIN, payload: res.data})
    })
    .catch(err => console.log('couldn\'t find any smurfs', err))
}