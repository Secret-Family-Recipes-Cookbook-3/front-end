import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
import styled from "styled-components";

const NavBar2= styled.div `
    background-color: #d97471;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 30px;
    border-bottom: 3px solid #4A3731;
    margin-bottom: 10px;
`;

const SubmitButton = styled.button `
    background-color: #BE6360;
    color: #4A3731;
    border-color: #9C8D84;
    font-weight: bold;
    margin: 0.5rem 0 0 0;
    padding: 0.1rem 1.2rem 0.1rem 1.2rem;
    &:hover {
        background-color: #d97471;
    }
`;

function LoginPage(props) {
  const {handleSubmit, register, errors} = useForm();
  const history = useHistory();

  const onSubmit = value => {
    console.log(value)
    axios.post('https://secret-family-recipes-cookbook.herokuapp.com/api/auth/login', value)
    .then(response => {
        console.log(response);
        window.localStorage.setItem('token', response.data.token)
        history.push('/Dashboard')
    })
    .catch(err => console.log(err)); 
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <NavBar2><h1 className="Logo">LOG IN</h1></NavBar2>
      <input
        name="username"
        placeholder='username'
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
        placeholder='password'
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9]/i,
            message: "invalid password"
          }
        })}
      />
      {errors.password && errors.password.message}

      <SubmitButton type="submit">Submit</SubmitButton>
      <Link to='/signuppage' >
        <h3>Dont have an account yet?</h3>
      </Link>
    </form>
  );
}

export default LoginPage;