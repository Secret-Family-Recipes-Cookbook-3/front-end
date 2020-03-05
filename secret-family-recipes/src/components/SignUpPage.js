import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";
import Signupbg from "../images/signupbg.jpg";
import Logo from "../images/logo.png";

const NavBar2= styled.div `
    background-color: #d97471;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 30px;
    border-bottom: 3px solid #4A3731;
    margin-bottom: 10px;
`;

const LogoImg = styled.img `
  max-width: 100px;
  height: auto;
  margin-right: 2rem;
  @media(max-width: 600px) {
    height: 60px;
    width: 60px;
    margin-top: 3%;
  }
`;

const LogoHolder = styled.div `
  display: flex;
  @media(max-width: 400px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

const Login = styled.h1 `
    margin-left: 30%;
    @media(max-width:800px) {
      margin-left: 10%;
    }
    @media(max-width: 400px) {
      margin: 0;
    }
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

const Body1 = styled.div `
    background-image: url(${Signupbg});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    padding-bottom: 3rem;
    width: 100%;
    min-height: 94.9vh;
`;

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
    <Body1>
      <NavBar2>
        <LogoHolder>
          <LogoImg src={Logo} alt="cherry pie logo" />
          <h2 className="Logo">Secret Family Recipes</h2>
          <Login className="Logo">SIGN UP</Login>
        </LogoHolder>  
      </NavBar2>
    
      <form onSubmit={handleSubmit(onSubmit)} >
      <div  className="login-form">
      <label htmlFor="username1">Username:&#8201;&#8201;&#8201;
      <input
        id="username1"
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
      </label>
      {errors.username && errors.username.message}

      <label htmlFor="password1">Password:&#8201;&#8201;&#8201;&#8201;
      <input
        id="password1"
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
      </label>
      {errors.password && errors.password.message}

     <SubmitButton type="submit" className="submitbutton" >Submit</SubmitButton>
      <Link to='/' className="loglink" >
        <h3>Have an account already?</h3>
      </Link>
      </div>
    </form>
    </Body1>
  );
}

export default SignUpPage;