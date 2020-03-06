import axios from 'axios';
import { connect } from 'react-redux';

export const axiosWithAuth = (props) => {
  const token = window.localStorage.getItem('token')
  
  return axios.create({
    headers: {
      authorization: token
    }
    // baseUrl: 'https://secret-family-recipes-cookbook.herokuapp.com/api/'
  }) 
}

const mapStateToProps = state => {
  return{
    token: state.token,
    recipes: state.recipes
  }
}

export default connect(
  mapStateToProps,
  {}
)(axiosWithAuth)