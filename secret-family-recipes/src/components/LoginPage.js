import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
// import { axiosWithAuth } from '../utils/axiosWithAuth';
import { login } from '../actions/recipeActions'
import { connect } from 'react-redux'
import axios from 'axios';
import { NavBar2, SubmitButton2, LogoImg2, LogoHolder2, Login, Body } from "../styled/StyledComponents";
import Logo from "../images/logo.png";

function LoginPage({userId, login, token}) {

  const {handleSubmit, register, errors} = useForm();
  const history = useHistory();

  const onSubmit = value => {
    console.log("baby, click me one more time!")
    login(value)
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('userId', userId)
    history.push('/dashboard')
  }

  return (
    <Body>
      <NavBar2>
        <LogoHolder2>
          <LogoImg2 src={Logo} alt="cherry pie logo" />
          <h2 className="Logo">Secret Family Recipes</h2>
          <Login className="Logo">LOG IN</Login>
        </LogoHolder2>  
      </NavBar2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="username">Username:
          <input
            id="username"
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

        <label htmlFor="password">Password:
          <input
            id="password"
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
        </label>
        {errors.password && errors.password.message}

        <SubmitButton2 type="submit">Submit</SubmitButton2>
      <Link to='/signuppage' >
        <h3>Dont have an account yet?</h3>
      </Link>
      </form>
    </Body>

  );
}
;
const mapStateToProps = state => {
  return{
    token: state.token,
    userId: state.userId,
    storedRecipes: state.storedRecipes
  }
}

export default connect(
  mapStateToProps,
  {login}
)(LoginPage);