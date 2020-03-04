import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function SignUpPage (props) {
  const {handleSubmit, register, errors, reset} = useForm();

  const onSubmit = value => {

    axios.post('https://secret-family-recipes-cookbook.herokuapp.com/api/auth/register', value)
    .then(response => {
        console.log(response);
        alert('successfully registered!')
        props.history.push('/')
    })
    .catch(err => console.log(err)); 
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>SIGN UP</h3>
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

export default SignUpPage;