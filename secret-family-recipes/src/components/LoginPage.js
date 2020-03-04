import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
// import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios';

function LoginPage(props) {
  const {handleSubmit, register, errors} = useForm();
  const history = useHistory();

  const onSubmit = value => {
    console.log(value)
    axios.post('http://secret-family-recipes-cookbook.herokuapp.com/api/auth/login', value)
    .then(response => {
        console.log(response);
        window.localStorage.setItem('token', response.data.token)
        history.push('/Dashboard')
    })
    .catch(err => console.log(err)); 
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="username"
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9]/i,
            message: "invalid username"
          }
        })}
      />
      {errors.username && errors.username.message}

      <input
        name="password"
        type="password"
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9]/i,
            message: "invalid password"
          }
        })}
      />
      {errors.password && errors.password.message}

      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginPage;