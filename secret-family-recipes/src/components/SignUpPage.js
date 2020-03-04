import React, {useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import { axiosWithAuth } from '../utils/axiosWithAuth'
import axios from 'axios';
import styled from "styled-components";

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


function SignUpPage(props) {
  const {handleSubmit, register, errors, reset,} = useForm();

  const onSubmit = value => {
    axios.post('https://secret-family-recipes-cookbook.herokuapp.com/api/auth/register', value)
    .then(response => {
        console.log(response);
        alert('successfully registered!')
        props.history.push('/Login')
    })
    .catch(err => console.log(err)); 
    reset()
  }

  return (
    <div className='signup-container'>
    <div className='signup'>
    <form onSubmit={handleSubmit(onSubmit)}>
       <input
        name="name"
        placeholder='name'
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z]/i,
            message: "invalid name"
          }
        })}
      />
      {errors.name && errors.name.message}

      <input
        name="email"
        placeholder='email'
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email"
          }
        })}
      />
      {errors.email && errors.email.message}

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
        placeholder="password"
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
    </form>
    </div>
    <div className='Sign-form'>
              <h3>Welcome, {props.name}.</h3>
          { <dl key={props.id}>  
              <dt>Username: {props.username}</dt>
              <dt>Email: {props.email}</dt>
            </dl>
          }
      </div>
    </div>
  );
}

export default SignUpPage;