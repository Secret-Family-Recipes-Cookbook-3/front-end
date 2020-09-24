import axios from 'axios';

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem('token')
  return axios.create({
    headers: {
      authorization: token
    },
    baseUrl: 'https://family-recipes-backend-proj.herokuapp.com/'
  }) 
}